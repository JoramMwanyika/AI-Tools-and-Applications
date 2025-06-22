# Machine Learning Tasks Project

A comprehensive machine learning project demonstrating classical ML, deep learning, and NLP techniques with an interactive web interface for visualization and execution.

## 📋 Project Overview

This project implements three distinct machine learning tasks:

1. **Classical ML with Scikit-learn** - Iris species classification using Decision Tree
2. **Deep Learning with TensorFlow** - MNIST handwritten digit recognition using CNN
3. **NLP with spaCy** - Amazon reviews analysis with NER and sentiment analysis

## 🎯 Task Details

### Task 1: Classical Machine Learning
- **Dataset**: Iris Species Dataset (150 samples, 4 features, 3 classes)
- **Algorithm**: Decision Tree Classifier
- **Objectives**: 
  - Preprocess data and handle missing values
  - Train decision tree classifier
  - Evaluate using accuracy, precision, and recall
  - Visualize feature importance and confusion matrix

### Task 2: Deep Learning
- **Dataset**: MNIST Handwritten Digits (70,000 images, 28×28 pixels)
- **Algorithm**: Convolutional Neural Network (CNN)
- **Objectives**:
  - Build CNN model with multiple layers
  - Achieve >95% test accuracy
  - Visualize model predictions on sample images
  - Track training progress and performance

### Task 3: Natural Language Processing
- **Dataset**: Amazon Product Reviews (sample dataset)
- **Tools**: spaCy for NLP processing
- **Objectives**:
  - Perform Named Entity Recognition (NER)
  - Extract product names and brand mentions
  - Analyze sentiment using rule-based approach
  - Visualize results and entity statistics

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Python 3.8 or higher** - [Download Python](https://www.python.org/downloads/)
- **Node.js 18 or higher** - [Download Node.js](https://nodejs.org/)
- **Git** - [Download Git](https://git-scm.com/)

### Step-by-Step Installation Guide

#### Step 1: Clone the Repository
```bash
# Clone the repository to your local machine
git clone <repository-url>
cd assignment-3
```

#### Step 2: Set Up Python Environment
```bash
# Create a virtual environment (recommended)
python -m venv venv

# Activate the virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt
```

#### Step 3: Set Up Node.js Environment
```bash
# Install Node.js dependencies
npm install
```

#### Step 4: Run the Application
```bash
# Start the development server
npm run dev
```

#### Step 5: Access the Application
Open your browser and navigate to: **http://localhost:3000**

#### Step 6: Run Python Scripts (Optional)
```bash
# Run individual ML tasks
python scripts/task1_iris_classification.py
python scripts/task2_mnist_cnn.py
python scripts/task3_nlp_spacy.py
```

### Quick Start (Python Scripts Only)
If you only want to run the Python ML scripts without the web interface:

```bash
# Navigate to scripts directory
cd scripts

# Run the scripts directly
python task1_iris_classification.py
python task2_mnist_cnn.py
python task3_nlp_spacy.py
```

## 🌐 Deployment

### Netlify Deployment (Frontend Only)
This project can be deployed to Netlify as a **static frontend demonstration**. 

**⚠️ Important Limitations:**
- ✅ **Works**: Beautiful UI, responsive design, demo results
- ❌ **Doesn't Work**: Live Python script execution, API calls, real-time ML processing

**Deployment Steps:**
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `out`
4. The site will show static demo results for all ML tasks

### Local Deployment (Full Functionality)
For complete functionality including live Python script execution:
1. Follow the installation steps above
2. Run `npm run dev` for the web interface
3. Python scripts will execute through the API endpoints

### Troubleshooting

#### Node.js Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be 18 or higher
```

#### Python Issues
```bash
# Upgrade pip
python -m pip install --upgrade pip

# Reinstall requirements
pip install -r requirements.txt --force-reinstall

# Check Python version
python --version  # Should be 3.8 or higher
```

#### Build Issues
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild the project
npm run build
```

### Verification
After installation, verify everything is working:

1. **Frontend**: Visit http://localhost:3000
2. **Task 1**: Click on "Task 1" and verify the Iris classification demo loads
3. **Task 2**: Click on "Task 2" and verify the CNN demo loads  
4. **Task 3**: Click on "Task 3" and verify the NLP demo loads

## 📁 Project Structure

```
assignment-3/
├── app/                    # Next.js application pages
│   ├── page.tsx           # Main dashboard
│   ├── task1/page.tsx     # Iris classification demo
│   ├── task2/page.tsx     # CNN demo
│   └── task3/page.tsx     # NLP demo
├── components/            # React UI components
├── scripts/              # Python ML scripts
│   ├── task1_iris_classification.py
│   ├── task2_mnist_cnn.py
│   └── task3_nlp_spacy.py
├── public/               # Static assets
├── package.json          # Node.js dependencies
├── requirements.txt      # Python dependencies
└── README.md            # This file
```

## 🛠️ Development Commands

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Python scripts
python scripts/task1_iris_classification.py
python scripts/task2_mnist_cnn.py
python scripts/task3_nlp_spacy.py
```

## 📦 Dependencies

### Python Dependencies
\`\`\`
scikit-learn>=1.3.0
tensorflow>=2.13.0
spacy>=3.6.0
pandas>=2.0.0
numpy>=1.24.0
matplotlib>=3.7.0
seaborn>=0.12.0
\`\`\`

### Node.js Dependencies
\`\`\`
next>=14.0.0
react>=18.0.0
typescript>=5.0.0
tailwindcss>=3.3.0
@radix-ui/react-progress
lucide-react
\`\`\`

## 🏗️ Project Structure

\`\`\`
ml-tasks-project/
├── app/                          # Next.js app directory
│   ├── page.tsx                  # Main dashboard
│   ├── task1/page.tsx           # Task 1 interface
│   ├── task2/page.tsx           # Task 2 interface
│   ├── task3/page.tsx           # Task 3 interface
│   └── api/run-task/route.ts    # API endpoint for script execution
├── scripts/                      # Python ML scripts
│   ├── task1_iris_classification.py
│   ├── task2_mnist_cnn.py
│   └── task3_nlp_spacy.py
├── components/                   # React components
│   └── ui/                      # UI components
├── requirements.txt             # Python dependencies
├── package.json                # Node.js dependencies
└── README.md                   # This file
\`\`\`

## 🖥️ Usage

### Running Individual Tasks

You can run each task independently using Python:

\`\`\`bash
# Task 1: Iris Classification
python scripts/task1_iris_classification.py

# Task 2: MNIST CNN
python scripts/task2_mnist_cnn.py

# Task 3: NLP Analysis
python scripts/task3_nlp_spacy.py
\`\`\`

### Using the Web Interface

1. Start the development server: \`npm run dev\`
2. Open \`http://localhost:3000\` in your browser
3. Navigate to individual task pages
4. Click "Run Task" buttons to execute scripts
5. View interactive results and visualizations

## 📊 Expected Results

### Task 1 Results
- **Accuracy**: ~96-98%
- **Precision**: ~97%
- **Recall**: ~97%
- Feature importance visualization
- Confusion matrix with minimal misclassifications

### Task 2 Results
- **Test Accuracy**: >95% (target achieved)
- **Test Loss**: <0.1
- Training progress visualization
- Sample predictions with confidence scores

### Task 3 Results
- **Sentiment Distribution**: Positive/Negative/Neutral breakdown
- **Entity Extraction**: Product names and brand mentions
- **Top Brands**: Apple, Samsung, Google, etc.
- **Sample Analysis**: Individual review breakdowns

## 🛠️ Customization

### Adding New Datasets
1. Place dataset files in a \`data/\` directory
2. Modify the respective Python script to load your data
3. Update preprocessing steps as needed

### Modifying Models
- **Task 1**: Adjust DecisionTreeClassifier parameters in \`task1_iris_classification.py\`
- **Task 2**: Modify CNN architecture in \`task2_mnist_cnn.py\`
- **Task 3**: Update sentiment analysis rules in \`task3_nlp_spacy.py\`

### Extending the Web Interface
1. Add new task pages in the \`app/\` directory
2. Create corresponding API routes for script execution
3. Update the main dashboard with new task cards

## 🔧 Troubleshooting

### Common Issues

**Python Dependencies**
\`\`\`bash
# If you encounter import errors:
pip install --upgrade pip
pip install -r requirements.txt

# For TensorFlow GPU support:
pip install tensorflow-gpu
\`\`\`

**spaCy Model Issues**
\`\`\`bash
# If spaCy model is not found:
python -m spacy download en_core_web_sm

# Alternative installation:
pip install https://github.com/explosion/spacy-models/releases/download/en_core_web_sm-3.6.0/en_core_web_sm-3.6.0.tar.gz
\`\`\`

**Memory Issues (Task 2)**
- Reduce batch size in CNN training
- Use CPU instead of GPU if memory is limited
- Close other applications to free up RAM

### Performance Optimization

**For faster training (Task 2):**
- Use GPU acceleration if available
- Increase batch size (if memory allows)
- Reduce number of epochs for testing

**For better accuracy:**
- Increase model complexity
- Add data augmentation
- Tune hyperparameters

## 📈 Performance Benchmarks

| Task | Dataset Size | Training Time | Accuracy | Memory Usage |
|------|-------------|---------------|----------|--------------|
| Task 1 | 150 samples | <1 minute | ~97% | <100MB |
| Task 2 | 70K images | 5-10 minutes | >95% | 1-2GB |
| Task 3 | 10 reviews | <1 minute | N/A | <200MB |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: \`git checkout -b feature-name\`
3. Make your changes and test thoroughly
4. Commit your changes: \`git commit -m 'Add feature'\`
5. Push to the branch: \`git push origin feature-name\`
6. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Scikit-learn** for classical ML algorithms
- **TensorFlow** for deep learning capabilities
- **spaCy** for NLP processing
- **Next.js** for the web interface
- **Tailwind CSS** for styling
- **Radix UI** for component primitives

## 📞 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Review the console output for error messages
3. Ensure all dependencies are properly installed
4. Open an issue on the GitHub repository

## 🔮 Future Enhancements

- [ ] Add more datasets and algorithms
- [ ] Implement real-time model training visualization
- [ ] Add model comparison features
- [ ] Include hyperparameter tuning interface
- [ ] Add export functionality for trained models
- [ ] Implement batch processing for multiple files
- [ ] Add support for custom datasets upload

---

**Happy Machine Learning! 🚀**
