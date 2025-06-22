import { type NextRequest, NextResponse } from "next/server"
import { exec } from "child_process"
import { promisify } from "util"

const execAsync = promisify(exec)

export async function POST(request: NextRequest) {
  try {
    const { task } = await request.json()

    if (!task || !["task1", "task2", "task3"].includes(task)) {
      return NextResponse.json({ error: "Invalid task specified" }, { status: 400 })
    }

    const scriptPath = `scripts/${task}_${getScriptName(task)}.py`

    // Execute the Python script
    const { stdout, stderr } = await execAsync(`python ${scriptPath}`)

    if (stderr) {
      console.error("Script error:", stderr)
      return NextResponse.json({ error: "Script execution failed", details: stderr }, { status: 500 })
    }

    // Extract JSON results from the output
    let jsonResults = null
    const lines = stdout.split('\n')
    let inJsonSection = false
    let jsonLines: string[] = []

    for (const line of lines) {
      if (line.includes('JSON RESULTS:')) {
        inJsonSection = true
        continue
      }
      if (inJsonSection && line.trim() === '') {
        break
      }
      if (inJsonSection) {
        jsonLines.push(line)
      }
    }

    if (jsonLines.length > 0) {
      try {
        const jsonString = jsonLines.join('\n')
        jsonResults = JSON.parse(jsonString)
      } catch (parseError) {
        console.error("Failed to parse JSON results:", parseError)
      }
    }

    return NextResponse.json({
      success: true,
      output: jsonResults ? JSON.stringify(jsonResults) : stdout,
      message: `${task} completed successfully`,
    })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ 
      error: "Internal server error", 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 })
  }
}

function getScriptName(task: string): string {
  switch (task) {
    case "task1":
      return "iris_classification"
    case "task2":
      return "mnist_cnn"
    case "task3":
      return "nlp_spacy"
    default:
      return ""
  }
}
