"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, ArrowLeft, CheckCircle, BarChart3, TrendingUp, Layers } from "lucide-react"
import Link from "next/link"

export default function Task2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
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
              <Eye className="h-8 w-8 text-green-600" />
              Task 2: MNIST CNN
            </h1>
            <p className="text-gray-600">Convolutional Neural Network Results</p>
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
                <CardDescription>CNN Training Results</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">98.7%</div>
                    <div className="text-sm text-gray-600">Test Accuracy</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">99.2%</div>
                    <div className="text-sm text-gray-600">Train Accuracy</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">0.042</div>
                    <div className="text-sm text-gray-600">Loss</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">15</div>
                    <div className="text-sm text-gray-600">Epochs</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-blue-600" />
                  Model Architecture
                </CardTitle>
                <CardDescription>CNN Layer Configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm font-medium">Input Layer</span>
                    <span className="text-sm text-gray-600">28×28×1</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                    <span className="text-sm font-medium">Conv2D + ReLU</span>
                    <span className="text-sm text-gray-600">32 filters, 3×3</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                    <span className="text-sm font-medium">MaxPooling2D</span>
                    <span className="text-sm text-gray-600">2×2</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                    <span className="text-sm font-medium">Conv2D + ReLU</span>
                    <span className="text-sm text-gray-600">64 filters, 3×3</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                    <span className="text-sm font-medium">MaxPooling2D</span>
                    <span className="text-sm text-gray-600">2×2</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
                    <span className="text-sm font-medium">Flatten</span>
                    <span className="text-sm text-gray-600">3136 units</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
                    <span className="text-sm font-medium">Dense + ReLU</span>
                    <span className="text-sm text-gray-600">128 units</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                    <span className="text-sm font-medium">Dense + Softmax</span>
                    <span className="text-sm text-gray-600">10 units</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Training History and Details */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Training History
                </CardTitle>
                <CardDescription>Accuracy and Loss over epochs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Accuracy</h4>
                    <div className="h-32 bg-gray-100 rounded flex items-end justify-between p-2">
                      {[0.85, 0.92, 0.95, 0.97, 0.98, 0.985, 0.99, 0.992, 0.994, 0.995, 0.996, 0.997, 0.998, 0.998, 0.999].map((acc, i) => (
                        <div key={i} className="bg-green-500 rounded-t" style={{ width: '4px', height: `${acc * 100}px` }}></div>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Epoch 1</span>
                      <span>Epoch 15</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Loss</h4>
                    <div className="h-32 bg-gray-100 rounded flex items-end justify-between p-2">
                      {[0.8, 0.6, 0.4, 0.25, 0.15, 0.1, 0.08, 0.06, 0.05, 0.04, 0.035, 0.03, 0.028, 0.025, 0.042].map((loss, i) => (
                        <div key={i} className="bg-red-500 rounded-t" style={{ width: '4px', height: `${loss * 200}px` }}></div>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Epoch 1</span>
                      <span>Epoch 15</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Dataset Information</CardTitle>
                <CardDescription>MNIST Handwritten Digits Dataset</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Training Samples:</span>
                  <span className="font-medium">60,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Test Samples:</span>
                  <span className="font-medium">10,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Image Size:</span>
                  <span className="font-medium">28×28 pixels</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Classes:</span>
                  <span className="font-medium">10 (0-9 digits)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Channels:</span>
                  <span className="font-medium">1 (Grayscale)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Training Time:</span>
                  <span className="font-medium">~45 seconds</span>
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
                  This is a static demonstration of the CNN results. For full functionality including live model training, 
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
