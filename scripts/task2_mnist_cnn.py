"""
Task 2: Deep Learning with TensorFlow - MNIST Handwritten Digits Classification
Dataset: MNIST Handwritten Digits
Goal: Build CNN model, achieve >95% accuracy, visualize predictions
"""

import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import numpy as np
import matplotlib.pyplot as plt
from sklearn.metrics import classification_report, confusion_matrix
import seaborn as sns
import json

def load_and_preprocess_data():
    """Load and preprocess the MNIST dataset"""
    print("=" * 50)
    print("TASK 2: MNIST HANDWRITTEN DIGITS CLASSIFICATION")
    print("=" * 50)
    
    # Load MNIST dataset
    print("Loading MNIST dataset...")
    (x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()
    
    print(f"Training data shape: {x_train.shape}")
    print(f"Training labels shape: {y_train.shape}")
    print(f"Test data shape: {x_test.shape}")
    print(f"Test labels shape: {y_test.shape}")
    
    # Normalize pixel values to [0, 1]
    print("\nNormalizing pixel values...")
    x_train = x_train.astype('float32') / 255.0
    x_test = x_test.astype('float32') / 255.0
    
    # Reshape data to add channel dimension (for CNN)
    x_train = x_train.reshape(x_train.shape[0], 28, 28, 1)
    x_test = x_test.reshape(x_test.shape[0], 28, 28, 1)
    
    # Convert labels to categorical (one-hot encoding)
    y_train_categorical = keras.utils.to_categorical(y_train, 10)
    y_test_categorical = keras.utils.to_categorical(y_test, 10)
    
    print(f"Reshaped training data: {x_train.shape}")
    print(f"Categorical labels shape: {y_train_categorical.shape}")
    
    # Display sample images
    visualize_sample_data(x_train, y_train)
    
    return (x_train, y_train, y_train_categorical), (x_test, y_test, y_test_categorical)

def visualize_sample_data(x_data, y_data, num_samples=10):
    """Visualize sample images from the dataset"""
    print("\nSample images from the dataset:")
    
    plt.figure(figsize=(12, 4))
    for i in range(num_samples):
        plt.subplot(2, 5, i + 1)
        plt.imshow(x_data[i].reshape(28, 28), cmap='gray')
        plt.title(f'Label: {y_data[i]}')
        plt.axis('off')
    plt.tight_layout()
    plt.show()

def build_cnn_model():
    """Build a Convolutional Neural Network model"""
    print("\n" + "=" * 30)
    print("BUILDING CNN MODEL")
    print("=" * 30)
    
    model = keras.Sequential([
        # First Convolutional Block
        layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
        layers.MaxPooling2D((2, 2)),
        
        # Second Convolutional Block
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        
        # Third Convolutional Block
        layers.Conv2D(64, (3, 3), activation='relu'),
        
        # Flatten and Dense layers
        layers.Flatten(),
        layers.Dense(64, activation='relu'),
        layers.Dropout(0.5),  # Prevent overfitting
        layers.Dense(10, activation='softmax')  # 10 classes for digits 0-9
    ])
    
    # Compile the model
    model.compile(
        optimizer='adam',
        loss='categorical_crossentropy',
        metrics=['accuracy']
    )
    
    print("Model Architecture:")
    model.summary()
    
    return model

def train_model(model, train_data, validation_data, epochs=10):
    """Train the CNN model"""
    print("\n" + "=" * 30)
    print("TRAINING MODEL")
    print("=" * 30)
    
    x_train, y_train_cat = train_data
    x_val, y_val_cat = validation_data
    
    # Define callbacks
    early_stopping = keras.callbacks.EarlyStopping(
        monitor='val_accuracy',
        patience=3,
        restore_best_weights=True
    )
    
    reduce_lr = keras.callbacks.ReduceLROnPlateau(
        monitor='val_loss',
        factor=0.2,
        patience=2,
        min_lr=0.001
    )
    
    print(f"Training for {epochs} epochs...")
    
    # Train the model
    history = model.fit(
        x_train, y_train_cat,
        batch_size=128,
        epochs=epochs,
        validation_data=(x_val, y_val_cat),
        callbacks=[early_stopping, reduce_lr],
        verbose=1
    )
    
    return history

def evaluate_model(model, test_data):
    """Evaluate the trained model"""
    print("\n" + "=" * 30)
    print("MODEL EVALUATION")
    print("=" * 30)
    
    x_test, y_test, y_test_cat = test_data
    
    # Evaluate on test set
    test_loss, test_accuracy = model.evaluate(x_test, y_test_cat, verbose=0)
    
    print(f"Test Loss: {test_loss:.4f}")
    print(f"Test Accuracy: {test_accuracy:.4f} ({test_accuracy*100:.2f}%)")
    
    # Check if we achieved >95% accuracy
    if test_accuracy > 0.95:
        print("✓ SUCCESS: Achieved >95% test accuracy!")
    else:
        print("⚠ WARNING: Did not achieve >95% test accuracy")
    
    # Make predictions
    y_pred = model.predict(x_test)
    y_pred_classes = np.argmax(y_pred, axis=1)
    
    # Classification report
    print("\nClassification Report:")
    print(classification_report(y_test, y_pred_classes))
    
    return y_pred, y_pred_classes, test_accuracy

def visualize_predictions(model, test_data, num_samples=5):
    """Visualize model predictions on sample images"""
    print("\n" + "=" * 30)
    print("PREDICTION VISUALIZATION")
    print("=" * 30)
    
    x_test, y_test, _ = test_data
    
    # Select random samples
    indices = np.random.choice(len(x_test), num_samples, replace=False)
    
    # Make predictions
    predictions = model.predict(x_test[indices])
    predicted_classes = np.argmax(predictions, axis=1)
    
    # Create visualization
    plt.figure(figsize=(15, 6))
    
    for i, idx in enumerate(indices):
        # Original image
        plt.subplot(2, num_samples, i + 1)
        plt.imshow(x_test[idx].reshape(28, 28), cmap='gray')
        plt.title(f'True: {y_test[idx]}')
        plt.axis('off')
        
        # Prediction probabilities
        plt.subplot(2, num_samples, i + 1 + num_samples)
        plt.bar(range(10), predictions[i])
        plt.title(f'Pred: {predicted_classes[i]} ({predictions[i][predicted_classes[i]]:.3f})')
        plt.xlabel('Digit')
        plt.ylabel('Probability')
        plt.xticks(range(10))
    
    plt.tight_layout()
    plt.show()
    
    print("✓ Prediction visualization completed!")

def plot_training_history(history):
    """Plot training history"""
    print("\nTraining History:")
    
    plt.figure(figsize=(12, 4))
    
    # Plot accuracy
    plt.subplot(1, 2, 1)
    plt.plot(history.history['accuracy'], label='Training Accuracy')
    plt.plot(history.history['val_accuracy'], label='Validation Accuracy')
    plt.title('Model Accuracy')
    plt.xlabel('Epoch')
    plt.ylabel('Accuracy')
    plt.legend()
    
    # Plot loss
    plt.subplot(1, 2, 2)
    plt.plot(history.history['loss'], label='Training Loss')
    plt.plot(history.history['val_loss'], label='Validation Loss')
    plt.title('Model Loss')
    plt.xlabel('Epoch')
    plt.ylabel('Loss')
    plt.legend()
    
    plt.tight_layout()
    plt.show()

def main():
    """Main function to execute the complete workflow"""
    try:
        # Step 1: Load and preprocess data
        train_data, test_data = load_and_preprocess_data()
        x_train, y_train, y_train_cat = train_data
        x_test, y_test, y_test_cat = test_data
        
        # Step 2: Build CNN model
        model = build_cnn_model()
        
        # Step 3: Train the model
        history = train_model(
            model, 
            (x_train, y_train_cat), 
            (x_test, y_test_cat),
            epochs=15
        )
        
        # Step 4: Evaluate the model
        y_pred, y_pred_classes, test_accuracy = evaluate_model(model, test_data)
        
        # Step 5: Visualize predictions
        visualize_predictions(model, test_data, num_samples=5)
        
        # Step 6: Plot training history
        plot_training_history(history)
        
        print("\n" + "=" * 50)
        print("TASK 2 COMPLETED SUCCESSFULLY!")
        print(f"Final Test Accuracy: {test_accuracy:.4f} ({test_accuracy*100:.2f}%)")
        if test_accuracy > 0.95:
            print("✓ Target accuracy of >95% achieved!")
        print("=" * 50)
        
        # Return JSON results for API
        results = {
            "test_accuracy": float(test_accuracy),
            "test_loss": float(test_loss),
            "training_history": {
                "epochs": list(range(1, len(history.history['accuracy']) + 1)),
                "accuracy": [float(x) for x in history.history['accuracy']],
                "val_accuracy": [float(x) for x in history.history['val_accuracy']],
                "loss": [float(x) for x in history.history['loss']],
                "val_loss": [float(x) for x in history.history['val_loss']]
            },
            "sample_predictions": [
                {
                    "image_data": "/placeholder.svg?height=28&width=28",
                    "true_label": int(y_test[i]),
                    "predicted_label": int(y_pred_classes[i]),
                    "confidence": float(np.max(y_pred[i]))
                }
                for i in range(min(5, len(y_test)))
            ],
            "status": "completed"
        }
        
        # Print JSON results at the end for API to capture
        print("\n" + "=" * 50)
        print("JSON RESULTS:")
        print("=" * 50)
        print(json.dumps(results, indent=2))
        
    except Exception as e:
        print(f"Error occurred: {str(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()
