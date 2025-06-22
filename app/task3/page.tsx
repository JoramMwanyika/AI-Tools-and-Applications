"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MessageSquare, Play, Hash, Heart, Frown, Smile, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface NLPResults {
  total_reviews: number
  sentiment_distribution: {
    positive: number
    negative: number
    neutral: number
  }
  top_brands: Array<{ brand: string; count: number }>
  top_products: Array<{ product: string; count: number }>
  sample_analysis: Array<{
    review: string
    sentiment: "Positive" | "Negative" | "Neutral"
    sentiment_score: number
    entities: Array<{ text: string; label: string }>
  }>
  status: "completed" | "running" | "idle"
}

export default function Task3Page() {
  const [results, setResults] = useState<NLPResults | null>(null)
  const [isRunning, setIsRunning] = useState(false)

  // Mock data for demonstration
  const mockResults: NLPResults = {
    total_reviews: 10,
    sentiment_distribution: {
      positive: 6,
      negative: 3,
      neutral: 1,
    },
    top_brands: [
      { brand: "Apple", count: 4 },
      { brand: "Samsung", count: 2 },
      { brand: "Google", count: 2 },
      { brand: "Nike", count: 1 },
      { brand: "Dell", count: 1 },
    ],
    top_products: [
      { product: "iPhone 14 Pro", count: 1 },
      { product: "Galaxy S23", count: 1 },
      { product: "MacBook Air M2", count: 1 },
      { product: "AirPods Pro", count: 1 },
      { product: "Echo Dot", count: 1 },
    ],
    sample_analysis: [
      {
        review:
          "I absolutely love my new iPhone 14 Pro from Apple! The camera quality is amazing and the battery life is excellent.",
        sentiment: "Positive",
        sentiment_score: 3,
        entities: [
          { text: "iPhone 14 Pro", label: "PRODUCT" },
          { text: "Apple", label: "ORG" },
        ],
      },
      {
        review:
          "The Samsung Galaxy S23 is okay, but I expected better performance. The screen is nice but the battery drains too quickly.",
        sentiment: "Negative",
        sentiment_score: -1,
        entities: [
          { text: "Samsung", label: "ORG" },
          { text: "Galaxy S23", label: "PRODUCT" },
        ],
      },
      {
        review:
          "Terrible experience with this Sony WH-1000XM4 headphones. The sound quality is poor and they broke after just one week.",
        sentiment: "Negative",
        sentiment_score: -3,
        entities: [
          { text: "Sony", label: "ORG" },
          { text: "WH-1000XM4", label: "PRODUCT" },
        ],
      },
    ],
    status: "completed",
  }

  const runTask = async () => {
    setIsRunning(true)
    // Simulate API call
    setTimeout(() => {
      setResults(mockResults)
      setIsRunning(false)
    }, 3000)
  }

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case "Positive":
        return <Smile className="h-4 w-4 text-green-600" />
      case "Negative":
        return <Frown className="h-4 w-4 text-red-600" />
      default:
        return <div className="h-4 w-4 rounded-full bg-gray-400" />
    }
  }

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "Positive":
        return "bg-green-100 text-green-800"
      case "Negative":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

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
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-900">Task 3: NLP Analysis with spaCy</h1>
          </div>
        </div>

        {/* Task Overview */}
        <Card className="mb-8 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Named Entity Recognition & Sentiment Analysis</CardTitle>
            <CardDescription>
              Extract product names, brands, and analyze sentiment from Amazon product reviews
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">10</div>
                <div className="text-sm text-gray-600">Sample Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">NER</div>
                <div className="text-sm text-gray-600">Entity Recognition</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">Rule-based</div>
                <div className="text-sm text-gray-600">Sentiment Analysis</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">spaCy</div>
                <div className="text-sm text-gray-600">NLP Library</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Run Task Button */}
        <Card className="mb-8 bg-white/90 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Execute NLP Analysis</h3>
                <p className="text-sm text-gray-600">
                  Process reviews for entity extraction and sentiment classification
                </p>
              </div>
              <Button onClick={runTask} disabled={isRunning} className="min-w-[120px]">
                {isRunning ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Run Analysis
                  </>
                )}
              </Button>
            </div>

            {isRunning && (
              <div className="mt-4">
                <Progress value={75} className="w-full" />
                <p className="text-sm text-gray-600 mt-2">Extracting entities and analyzing sentiment...</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Section */}
        {results && (
          <>
            {/* Sentiment Distribution */}
            <Card className="mb-8 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Sentiment Analysis Results
                </CardTitle>
                <CardDescription>Overall sentiment distribution across all reviews</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {results.sentiment_distribution.positive}
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Smile className="h-5 w-5 text-green-600" />
                      <span className="font-medium">Positive</span>
                    </div>
                    <Progress
                      value={(results.sentiment_distribution.positive / results.total_reviews) * 100}
                      className="h-2"
                    />
                    <div className="text-sm text-gray-600 mt-1">
                      {((results.sentiment_distribution.positive / results.total_reviews) * 100).toFixed(1)}%
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      {results.sentiment_distribution.negative}
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Frown className="h-5 w-5 text-red-600" />
                      <span className="font-medium">Negative</span>
                    </div>
                    <Progress
                      value={(results.sentiment_distribution.negative / results.total_reviews) * 100}
                      className="h-2"
                    />
                    <div className="text-sm text-gray-600 mt-1">
                      {((results.sentiment_distribution.negative / results.total_reviews) * 100).toFixed(1)}%
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-600 mb-2">
                      {results.sentiment_distribution.neutral}
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="h-5 w-5 rounded-full bg-gray-400" />
                      <span className="font-medium">Neutral</span>
                    </div>
                    <Progress
                      value={(results.sentiment_distribution.neutral / results.total_reviews) * 100}
                      className="h-2"
                    />
                    <div className="text-sm text-gray-600 mt-1">
                      {((results.sentiment_distribution.neutral / results.total_reviews) * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Entity Extraction Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Hash className="h-5 w-5" />
                    Top Brands Mentioned
                  </CardTitle>
                  <CardDescription>Most frequently mentioned brands in reviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {results.top_brands.map((brand, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600">
                            {index + 1}
                          </div>
                          <span className="font-medium">{brand.brand}</span>
                        </div>
                        <Badge variant="secondary">{brand.count} mentions</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Hash className="h-5 w-5" />
                    Top Products Mentioned
                  </CardTitle>
                  <CardDescription>Most frequently mentioned products in reviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {results.top_products.map((product, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs font-bold text-green-600">
                            {index + 1}
                          </div>
                          <span className="font-medium text-sm">{product.product}</span>
                        </div>
                        <Badge variant="secondary">{product.count}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sample Analysis */}
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Sample Review Analysis</CardTitle>
                <CardDescription>
                  Detailed analysis of individual reviews showing entities and sentiment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {results.sample_analysis.map((analysis, index) => (
                    <div key={index} className="border rounded-lg p-4 bg-gray-50">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {getSentimentIcon(analysis.sentiment)}
                          <Badge className={getSentimentColor(analysis.sentiment)}>
                            {analysis.sentiment} (Score: {analysis.sentiment_score})
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-500">Review #{index + 1}</div>
                      </div>

                      <p className="text-gray-800 mb-3 leading-relaxed">{analysis.review}</p>

                      {analysis.entities.length > 0 && (
                        <div>
                          <h4 className="font-medium text-sm mb-2">Extracted Entities:</h4>
                          <div className="flex flex-wrap gap-2">
                            {analysis.entities.map((entity, entityIndex) => (
                              <Badge key={entityIndex} variant="outline" className="text-xs">
                                {entity.text} ({entity.label})
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
