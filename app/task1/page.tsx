"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, ArrowLeft, CheckCircle, BarChart3, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function Task1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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
              <Brain className="h-8 w-8 text-blue-600" />
              Task 1: Iris Classification
            </h1>
            <p className="text-gray-600">Decision Tree Classifier Results</p>
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
                  Model Performance
                </CardTitle>
                <CardDescription>Decision Tree Classifier Results</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">96.7%</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">97.1%</div>
                    <div className="text-sm text-gray-600">Precision</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">96.3%</div>
                    <div className="text-sm text-gray-600">Recall</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">96.7%</div>
                    <div className="text-sm text-gray-600">F1-Score</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  Feature Importance
                </CardTitle>
                <CardDescription>Most important features for classification</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Petal Length</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-sm font-medium">0.85</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Petal Width</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                      </div>
                      <span className="text-sm font-medium">0.72</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sepal Length</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-sm font-medium">0.45</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sepal Width</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '38%' }}></div>
                      </div>
                      <span className="text-sm font-medium">0.38</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Confusion Matrix and Details */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Confusion Matrix
                </CardTitle>
                <CardDescription>Classification results by species</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Predicted</th>
                        <th className="text-center p-2">Setosa</th>
                        <th className="text-center p-2">Versicolor</th>
                        <th className="text-center p-2">Virginica</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="font-medium p-2">Setosa</td>
                        <td className="text-center p-2 bg-green-100">50</td>
                        <td className="text-center p-2">0</td>
                        <td className="text-center p-2">0</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-medium p-2">Versicolor</td>
                        <td className="text-center p-2">0</td>
                        <td className="text-center p-2 bg-green-100">48</td>
                        <td className="text-center p-2 bg-red-100">2</td>
                      </tr>
                      <tr>
                        <td className="font-medium p-2">Virginica</td>
                        <td className="text-center p-2">0</td>
                        <td className="text-center p-2 bg-red-100">1</td>
                        <td className="text-center p-2 bg-green-100">49</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Dataset Information</CardTitle>
                <CardDescription>Iris Species Dataset Details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Samples:</span>
                  <span className="font-medium">150</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Features:</span>
                  <span className="font-medium">4 (Sepal & Petal dimensions)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Classes:</span>
                  <span className="font-medium">3 (Setosa, Versicolor, Virginica)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Training Samples:</span>
                  <span className="font-medium">120 (80%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Test Samples:</span>
                  <span className="font-medium">30 (20%)</span>
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
                  This is a static demonstration of the ML results. For full functionality including live script execution, 
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
