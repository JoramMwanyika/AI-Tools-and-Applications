"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Eye, MessageSquare, Play, Github } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Machine Learning Tasks Dashboard</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive visualization and execution platform for classical ML, deep learning, and NLP tasks
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Classical ML, Deep Learning, NLP</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Datasets</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Iris, MNIST, Amazon Reviews</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Algorithms</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5+</div>
              <p className="text-xs text-muted-foreground">Decision Tree, CNN, NER, Sentiment Analysis</p>
            </CardContent>
          </Card>
        </div>

        {/* Task Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Task 1: Classical ML */}
          <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-xl">Task 1: Classical ML</CardTitle>
              </div>
              <CardDescription>Iris Species Classification using Scikit-learn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <strong>Dataset:</strong> Iris Species (150 samples)
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Algorithm:</strong> Decision Tree Classifier
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Metrics:</strong> Accuracy, Precision, Recall
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Features:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Data preprocessing & visualization</li>
                  <li>• Feature importance analysis</li>
                  <li>• Confusion matrix visualization</li>
                  <li>• Model performance metrics</li>
                </ul>
              </div>

              <div className="flex gap-2">
                <Link href="/task1" className="flex-1">
                  <Button className="w-full" size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    View Results
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Task 2: Deep Learning */}
          <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Eye className="h-6 w-6 text-green-600" />
                <CardTitle className="text-xl">Task 2: Deep Learning</CardTitle>
              </div>
              <CardDescription>MNIST Digit Classification using CNN</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <strong>Dataset:</strong> MNIST Handwritten Digits
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Algorithm:</strong> Convolutional Neural Network
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Target:</strong> {">"} 95% Accuracy
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Features:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• CNN architecture visualization</li>
                  <li>• Training progress tracking</li>
                  <li>• Prediction visualization</li>
                  <li>• Model performance analysis</li>
                </ul>
              </div>

              <div className="flex gap-2">
                <Link href="/task2" className="flex-1">
                  <Button className="w-full" size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    View Results
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Task 3: NLP */}
          <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-purple-600" />
                <CardTitle className="text-xl">Task 3: NLP Analysis</CardTitle>
              </div>
              <CardDescription>Amazon Reviews NER & Sentiment Analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <strong>Dataset:</strong> Amazon Product Reviews
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Tools:</strong> spaCy, Rule-based Analysis
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Tasks:</strong> NER, Sentiment Analysis
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Features:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Named entity extraction</li>
                  <li>• Brand & product identification</li>
                  <li>• Sentiment classification</li>
                  <li>• Interactive text analysis</li>
                </ul>
              </div>

              <div className="flex gap-2">
                <Link href="/task3" className="flex-1">
                  <Button className="w-full" size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    View Results
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
