"""
Task 3: NLP with spaCy - Named Entity Recognition and Sentiment Analysis
Text Data: Amazon Product Reviews (simulated)
Goal: Perform NER to extract product names/brands, analyze sentiment
"""

import spacy
import pandas as pd
from collections import Counter
import matplotlib.pyplot as plt
import seaborn as sns

# Sample Amazon product reviews for demonstration
SAMPLE_REVIEWS = [
    "I absolutely love my new iPhone 14 Pro from Apple! The camera quality is amazing and the battery life is excellent. Highly recommend this product.",
    "The Samsung Galaxy S23 is okay, but I expected better performance. The screen is nice but the battery drains too quickly. Not worth the price.",
    "Terrible experience with this Sony WH-1000XM4 headphones. The sound quality is poor and they broke after just one week. Very disappointed.",
    "Amazing product! The MacBook Air M2 from Apple exceeded all my expectations. Fast, lightweight, and perfect for work. Five stars!",
    "The Nike Air Max 270 shoes are comfortable but overpriced. Good quality materials but not worth $150. Would not buy again.",
    "Excellent service and product quality. The Dell XPS 13 laptop arrived quickly and works perfectly. Great customer support from Dell.",
    "The Amazon Echo Dot is a fantastic smart speaker. Easy to set up and Alexa responds quickly. Great value for money!",
    "Disappointed with the Google Pixel 7. The camera is good but the phone feels cheap and plastic. Expected better from Google.",
    "Love my new AirPods Pro from Apple! Great noise cancellation and sound quality. Perfect for workouts and commuting.",
    "The Microsoft Surface Pro 8 is versatile but expensive. Good for drawing and note-taking but the keyboard feels flimsy."
]

def load_spacy_model():
    """Load spaCy model for NLP processing"""
    print("=" * 50)
    print("TASK 3: NLP WITH SPACY - NER AND SENTIMENT ANALYSIS")
    print("=" * 50)
    
    try:
        # Try to load the English model
        nlp = spacy.load("en_core_web_sm")
        print("✓ spaCy English model loaded successfully!")
    except OSError:
        print("⚠ spaCy English model not found. Installing...")
        print("Please run: python -m spacy download en_core_web_sm")
        # For demonstration, we'll create a basic nlp object
        nlp = spacy.blank("en")
        print("Using basic English model for demonstration")
    
    return nlp

def create_sample_dataset():
    """Create a sample dataset of Amazon product reviews"""
    print("\n" + "=" * 30)
    print("SAMPLE DATASET CREATION")
    print("=" * 30)
    
    df = pd.DataFrame({
        'review_id': range(1, len(SAMPLE_REVIEWS) + 1),
        'review_text': SAMPLE_REVIEWS
    })
    
    print(f"Created dataset with {len(df)} reviews")
    print("\nSample reviews:")
    for i, review in enumerate(df['review_text'][:3], 1):
        print(f"{i}. {review[:100]}...")
    
    return df

def perform_named_entity_recognition(nlp, df):
    """Perform Named Entity Recognition to extract product names and brands"""
    print("\n" + "=" * 30)
    print("NAMED ENTITY RECOGNITION")
    print("=" * 30)
    
    all_entities = []
    product_names = []
    brands = []
    
    # Define common tech brands for better recognition
    tech_brands = {
        'apple', 'samsung', 'google', 'microsoft', 'sony', 'dell', 
        'nike', 'amazon', 'iphone', 'macbook', 'galaxy', 'pixel',
        'surface', 'echo', 'airpods'
    }
    
    print("Processing reviews for entity extraction...")
    
    for idx, review in enumerate(df['review_text']):
        doc = nlp(review)
        
        review_entities = []
        
        # Extract named entities
        for ent in doc.ents:
            entity_info = {
                'text': ent.text,
                'label': ent.label_,
                'description': spacy.explain(ent.label_),
                'review_id': idx + 1
            }
            
            all_entities.append(entity_info)
            review_entities.append(entity_info)
            
            # Categorize entities
            if ent.label_ in ['ORG', 'PRODUCT']:
                if ent.text.lower() in tech_brands or any(brand in ent.text.lower() for brand in tech_brands):
                    brands.append(ent.text)
                else:
                    product_names.append(ent.text)
        
        # Also look for product patterns in the text
        words = review.lower().split()
        for i, word in enumerate(words):
            if word in tech_brands:
                brands.append(word.title())
            # Look for product patterns like "iPhone 14", "Galaxy S23", etc.
            if i < len(words) - 1:
                two_word = f"{word} {words[i+1]}"
                if any(brand in two_word for brand in ['iphone', 'galaxy', 'macbook', 'airpods']):
                    product_names.append(two_word.title())
    
    # Create summary
    entities_df = pd.DataFrame(all_entities)
    
    print(f"Total entities extracted: {len(all_entities)}")
    print(f"Unique brands identified: {len(set(brands))}")
    print(f"Unique products identified: {len(set(product_names))}")
    
    # Display entity statistics
    if not entities_df.empty:
        print("\nEntity types found:")
        entity_counts = entities_df['label'].value_counts()
        print(entity_counts)
        
        print("\nMost common entities:")
        entity_text_counts = entities_df['text'].value_counts().head(10)
        print(entity_text_counts)
    
    return entities_df, brands, product_names

def rule_based_sentiment_analysis(df):
    """Perform rule-based sentiment analysis"""
    print("\n" + "=" * 30)
    print("SENTIMENT ANALYSIS")
    print("=" * 30)
    
    # Define positive and negative words
    positive_words = {
        'love', 'amazing', 'excellent', 'great', 'fantastic', 'perfect', 
        'good', 'best', 'awesome', 'wonderful', 'outstanding', 'superb',
        'recommend', 'satisfied', 'happy', 'pleased', 'impressed'
    }
    
    negative_words = {
        'hate', 'terrible', 'awful', 'bad', 'worst', 'horrible', 'poor',
        'disappointed', 'unsatisfied', 'broken', 'cheap', 'overpriced',
        'slow', 'useless', 'defective', 'waste', 'regret'
    }
    
    sentiments = []
    sentiment_scores = []
    
    print("Analyzing sentiment for each review...")
    
    for idx, review in enumerate(df['review_text']):
        words = review.lower().split()
        
        positive_count = sum(1 for word in words if word in positive_words)
        negative_count = sum(1 for word in words if word in negative_words)
        
        # Calculate sentiment score
        sentiment_score = positive_count - negative_count
        sentiment_scores.append(sentiment_score)
        
        # Determine sentiment label
        if sentiment_score > 0:
            sentiment = 'Positive'
        elif sentiment_score < 0:
            sentiment = 'Negative'
        else:
            sentiment = 'Neutral'
        
        sentiments.append(sentiment)
        
        print(f"Review {idx+1}: {sentiment} (Score: {sentiment_score})")
        print(f"  Positive words: {positive_count}, Negative words: {negative_count}")
        print(f"  Text: {review[:80]}...")
        print()
    
    # Add sentiment to dataframe
    df['sentiment'] = sentiments
    df['sentiment_score'] = sentiment_scores
    
    return df

def analyze_results(df, entities_df, brands, product_names):
    """Analyze and summarize the results"""
    print("\n" + "=" * 30)
    print("RESULTS ANALYSIS")
    print("=" * 30)
    
    # Sentiment distribution
    sentiment_counts = df['sentiment'].value_counts()
    print("Sentiment Distribution:")
    print(sentiment_counts)
    print(f"Positive: {sentiment_counts.get('Positive', 0)/len(df)*100:.1f}%")
    print(f"Negative: {sentiment_counts.get('Negative', 0)/len(df)*100:.1f}%")
    print(f"Neutral: {sentiment_counts.get('Neutral', 0)/len(df)*100:.1f}%")
    
    # Brand analysis
    brand_counter = Counter(brands)
    print(f"\nTop Brands Mentioned:")
    for brand, count in brand_counter.most_common(5):
        print(f"  {brand}: {count} times")
    
    # Product analysis
    product_counter = Counter(product_names)
    print(f"\nTop Products Mentioned:")
    for product, count in product_counter.most_common(5):
        print(f"  {product}: {count} times")
    
    return sentiment_counts, brand_counter, product_counter

def visualize_results(df, sentiment_counts, brand_counter):
    """Create visualizations for the results"""
    print("\n" + "=" * 30)
    print("VISUALIZATION")
    print("=" * 30)
    
    fig, axes = plt.subplots(2, 2, figsize=(15, 10))
    
    # Sentiment distribution pie chart
    axes[0, 0].pie(sentiment_counts.values, labels=sentiment_counts.index, autopct='%1.1f%%')
    axes[0, 0].set_title('Sentiment Distribution')
    
    # Sentiment scores histogram
    axes[0, 1].hist(df['sentiment_score'], bins=10, edgecolor='black')
    axes[0, 1].set_title('Sentiment Score Distribution')
    axes[0, 1].set_xlabel('Sentiment Score')
    axes[0, 1].set_ylabel('Frequency')
    
    # Top brands bar chart
    if brand_counter:
        top_brands = dict(brand_counter.most_common(5))
        axes[1, 0].bar(top_brands.keys(), top_brands.values())
        axes[1, 0].set_title('Top Mentioned Brands')
        axes[1, 0].set_xlabel('Brand')
        axes[1, 0].set_ylabel('Mentions')
        axes[1, 0].tick_params(axis='x', rotation=45)
    
    # Sentiment by review length
    df['review_length'] = df['review_text'].str.len()
    sentiment_colors = {'Positive': 'green', 'Negative': 'red', 'Neutral': 'gray'}
    for sentiment in df['sentiment'].unique():
        mask = df['sentiment'] == sentiment
        axes[1, 1].scatter(df[mask]['review_length'], df[mask]['sentiment_score'], 
                          c=sentiment_colors[sentiment], label=sentiment, alpha=0.7)
    
    axes[1, 1].set_title('Sentiment Score vs Review Length')
    axes[1, 1].set_xlabel('Review Length (characters)')
    axes[1, 1].set_ylabel('Sentiment Score')
    axes[1, 1].legend()
    
    plt.tight_layout()
    plt.show()
    
    print("✓ Visualizations created!")

def display_sample_outputs(df, entities_df):
    """Display sample outputs showing extracted entities and sentiment"""
    print("\n" + "=" * 30)
    print("SAMPLE OUTPUTS")
    print("=" * 30)
    
    print("Sample Review Analysis:")
    print("-" * 50)
    
    for i in range(min(3, len(df))):
        review = df.iloc[i]
        print(f"\nReview {i+1}:")
        print(f"Text: {review['review_text']}")
        print(f"Sentiment: {review['sentiment']} (Score: {review['sentiment_score']})")
        
        # Show entities for this review
        review_entities = entities_df[entities_df['review_id'] == i+1] if not entities_df.empty else pd.DataFrame()
        if not review_entities.empty:
            print("Extracted Entities:")
            for _, entity in review_entities.iterrows():
                print(f"  - {entity['text']} ({entity['label']}: {entity['description']})")
        else:
            print("  No formal entities extracted")
        print("-" * 50)

def main():
    """Main function to execute the complete NLP workflow"""
    try:
        # Step 1: Load spaCy model
        nlp = load_spacy_model()
        
        # Step 2: Create sample dataset
        df = create_sample_dataset()
        
        # Step 3: Perform Named Entity Recognition
        entities_df, brands, product_names = perform_named_entity_recognition(nlp, df)
        
        # Step 4: Perform sentiment analysis
        df = rule_based_sentiment_analysis(df)
        
        # Step 5: Analyze results
        sentiment_counts, brand_counter, product_counter = analyze_results(
            df, entities_df, brands, product_names
        )
        
        # Step 6: Create visualizations
        visualize_results(df, sentiment_counts, brand_counter)
        
        # Step 7: Display sample outputs
        display_sample_outputs(df, entities_df)
        
        print("\n" + "=" * 50)
        print("TASK 3 COMPLETED SUCCESSFULLY!")
        print("Key Achievements:")
        print(f"  - Processed {len(df)} reviews")
        print(f"  - Extracted {len(set(brands))} unique brands")
        print(f"  - Identified {len(set(product_names))} unique products")
        print(f"  - Analyzed sentiment for all reviews")
        print("=" * 50)
        
        return df, entities_df
        
    except Exception as e:
        print(f"Error occurred: {str(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()
