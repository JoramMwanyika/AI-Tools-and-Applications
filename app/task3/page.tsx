"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, ArrowLeft, CheckCircle, BarChart3, TrendingUp, FileText } from "lucide-react"
import Link from "next/link"

export default function Task3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <MessageSquare className="h-8 w-8 text-purple-600" />
              Task 3: NLP with spaCy
            </h1>
            <p className="text-gray-600">Natural Language Processing Results</p>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Metrics */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Processing Results
                </CardTitle>
                <CardDescription>Text Analysis Statistics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">1,247</div>
                    <div className="text-sm text-gray-600">Tokens</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">89</div>
                    <div className="text-sm text-gray-600">Sentences</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">156</div>
                    <div className="text-sm text-gray-600">Named Entities</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">14.0</div>
                    <div className="text-sm text-gray-600">Avg. Sent. Length</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  Named Entity Recognition
                </CardTitle>
                <CardDescription>Entities found in the text</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">PERSON</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                      <span className="text-sm font-medium">54</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">ORG</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '28%' }}></div>
                      </div>
                      <span className="text-sm font-medium">43</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">GPE</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '22%' }}></div>
                      </div>
                      <span className="text-sm font-medium">34</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">DATE</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                      <span className="text-sm font-medium">25</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Text Analysis and Details */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-purple-600" />
                  Sample Text Analysis
                </CardTitle>
                <CardDescription>Processed text with entities highlighted</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p className="leading-relaxed">
                    <span className="bg-blue-100 px-1 rounded">Apple Inc.</span> announced today that 
                    <span className="bg-blue-100 px-1 rounded">Tim Cook</span> will be stepping down as CEO in 
                    <span className="bg-orange-100 px-1 rounded">2024</span>. The company, headquartered in 
                    <span className="bg-purple-100 px-1 rounded">Cupertino, California</span>, has been a leader in 
                    technology innovation for decades.
                  </p>
                  <p className="leading-relaxed">
                    <span className="bg-blue-100 px-1 rounded">Microsoft Corporation</span> and 
                    <span className="bg-blue-100 px-1 rounded">Satya Nadella</span> have also made significant 
                    contributions to the industry from their base in 
                    <span className="bg-purple-100 px-1 rounded">Redmond, Washington</span>.
                  </p>
                  <div className="mt-4 p-3 bg-gray-50 rounded text-xs">
                    <div className="flex gap-4">
                      <span><span className="bg-blue-100 px-1 rounded">Blue</span> = Organizations</span>
                      <span><span className="bg-purple-100 px-1 rounded">Purple</span> = Locations</span>
                      <span><span className="bg-orange-100 px-1 rounded">Orange</span> = Dates</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Processing Information</CardTitle>
                <CardDescription>spaCy NLP Pipeline Details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Model Used:</span>
                  <span className="font-medium">en_core_web_sm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Processing Time:</span>
                  <span className="font-medium">0.8 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Text Length:</span>
                  <span className="font-medium">8,456 characters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Unique Words:</span>
                  <span className="font-medium">892</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Language:</span>
                  <span className="font-medium">English</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Pipeline Components:</span>
                  <span className="font-medium">tagger, parser, ner</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Note about deployment */}
        <Card className="mt-8 bg-yellow-50 border-yellow-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="text-yellow-600 mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-yellow-800">Demo Mode</h4>
                <p className="text-sm text-yellow-700 mt-1">
                  This is a static demonstration of the NLP results. For full functionality including live text processing, 
                  please run the application locally or deploy to a platform that supports Python applications.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
