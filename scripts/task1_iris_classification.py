"""
Task 1: Classical ML with Scikit-learn - Iris Species Classification
Dataset: Iris Species Dataset
Goal: Preprocess data, train decision tree classifier, evaluate performance
"""

import numpy as np
import pandas as pd
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score, classification_report, confusion_matrix
from sklearn.preprocessing import LabelEncoder
import matplotlib.pyplot as plt
import seaborn as sns

def load_and_explore_data():
    """Load the Iris dataset and explore its structure"""
    print("=" * 50)
    print("TASK 1: IRIS SPECIES CLASSIFICATION")
    print("=" * 50)
    
    # Load the iris dataset
    iris = load_iris()
    
    # Create a DataFrame for easier manipulation
    df = pd.DataFrame(data=iris.data, columns=iris.feature_names)
    df['species'] = iris.target
    df['species_name'] = df['species'].map({0: 'setosa', 1: 'versicolor', 2: 'virginica'})
    
    print("Dataset Overview:")
    print(f"Shape: {df.shape}")
    print(f"Features: {list(iris.feature_names)}")
    print(f"Target classes: {list(iris.target_names)}")
    print("\nFirst 5 rows:")
    print(df.head())
    
    print("\nDataset Info:")
    print(df.info())
    
    print("\nBasic Statistics:")
    print(df.describe())
    
    return df, iris

def preprocess_data(df):
    """Preprocess the data - handle missing values and encode labels"""
    print("\n" + "=" * 30)
    print("DATA PREPROCESSING")
    print("=" * 30)
    
    # Check for missing values
    missing_values = df.isnull().sum()
    print("Missing values per column:")
    print(missing_values)
    
    if missing_values.sum() == 0:
        print("✓ No missing values found!")
    else:
        print("Handling missing values...")
        # Fill missing values with median for numerical columns
        for col in df.select_dtypes(include=[np.number]).columns:
            if df[col].isnull().sum() > 0:
                df[col].fillna(df[col].median(), inplace=True)
    
    # Prepare features and target
    X = df.drop(['species', 'species_name'], axis=1)
    y = df['species']
    
    print(f"\nFeatures shape: {X.shape}")
    print(f"Target shape: {y.shape}")
    print(f"Target distribution:\n{y.value_counts()}")
    
    return X, y

def train_decision_tree(X, y):
    """Train a decision tree classifier"""
    print("\n" + "=" * 30)
    print("MODEL TRAINING")
    print("=" * 30)
    
    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.3, random_state=42, stratify=y
    )
    
    print(f"Training set size: {X_train.shape[0]}")
    print(f"Testing set size: {X_test.shape[0]}")
    
    # Create and train the decision tree classifier
    dt_classifier = DecisionTreeClassifier(
        random_state=42,
        max_depth=5,  # Prevent overfitting
        min_samples_split=5,
        min_samples_leaf=2
    )
    
    print("\nTraining Decision Tree Classifier...")
    dt_classifier.fit(X_train, y_train)
    print("✓ Training completed!")
    
    return dt_classifier, X_train, X_test, y_train, y_test

def evaluate_model(model, X_test, y_test, target_names):
    """Evaluate the model using accuracy, precision, and recall"""
    print("\n" + "=" * 30)
    print("MODEL EVALUATION")
    print("=" * 30)
    
    # Make predictions
    y_pred = model.predict(X_test)
    
    # Calculate metrics
    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred, average='weighted')
    recall = recall_score(y_test, y_pred, average='weighted')
    
    print(f"Accuracy: {accuracy:.4f} ({accuracy*100:.2f}%)")
    print(f"Precision (weighted): {precision:.4f}")
    print(f"Recall (weighted): {recall:.4f}")
    
    print("\nDetailed Classification Report:")
    print(classification_report(y_test, y_pred, target_names=target_names))
    
    # Confusion Matrix
    cm = confusion_matrix(y_test, y_pred)
    print("\nConfusion Matrix:")
    print(cm)
    
    # Feature importance
    feature_names = ['sepal length', 'sepal width', 'petal length', 'petal width']
    feature_importance = pd.DataFrame({
        'feature': feature_names,
        'importance': model.feature_importances_
    }).sort_values('importance', ascending=False)
    
    print("\nFeature Importance:")
    print(feature_importance)
    
    return y_pred, accuracy, precision, recall

def visualize_results(y_test, y_pred, target_names):
    """Create visualizations for the results"""
    print("\n" + "=" * 30)
    print("VISUALIZATION")
    print("=" * 30)
    
    # Confusion Matrix Heatmap
    cm = confusion_matrix(y_test, y_pred)
    plt.figure(figsize=(8, 6))
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', 
                xticklabels=target_names, yticklabels=target_names)
    plt.title('Confusion Matrix - Iris Classification')
    plt.xlabel('Predicted')
    plt.ylabel('Actual')
    plt.tight_layout()
    plt.show()
    
    print("✓ Confusion matrix visualization created!")

def main():
    """Main function to execute the complete workflow"""
    try:
        # Step 1: Load and explore data
        df, iris = load_and_explore_data()
        
        # Step 2: Preprocess data
        X, y = preprocess_data(df)
        
        # Step 3: Train decision tree classifier
        model, X_train, X_test, y_train, y_test = train_decision_tree(X, y)
        
        # Step 4: Evaluate model
        y_pred, accuracy, precision, recall = evaluate_model(
            model, X_test, y_test, iris.target_names
        )
        
        # Step 5: Visualize results
        visualize_results(y_test, y_pred, iris.target_names)
        
        print("\n" + "=" * 50)
        print("TASK 1 COMPLETED SUCCESSFULLY!")
        print(f"Final Model Performance:")
        print(f"  - Accuracy: {accuracy:.4f}")
        print(f"  - Precision: {precision:.4f}")
        print(f"  - Recall: {recall:.4f}")
        print("=" * 50)
        
    except Exception as e:
        print(f"Error occurred: {str(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()
