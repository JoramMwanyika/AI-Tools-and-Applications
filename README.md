# Machine Learning Tasks Project

## 👥 Project Members

- Emmanuella — emmanuellaileogben@gmail.com
- Steve Asumba — steveasumba@gmail.com
- Comfort Ndungu — comfort.ndungu.w@gmail.com
- Joram — jorammwanyika@gmail.com
- Adeosun Juwon — juwona71@gmail.com

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

#### Step 3: Install spaCy English Model (Required for Task 3)
```bash
# Install the English language model for NLP tasks
python -m spacy download en_core_web_sm
```

#### Step 4: Set Up Node.js Dependencies
```bash
# Install all Node.js dependencies
npm install

# If you encounter dependency conflicts, use:
npm install --force
```

#### Step 5: Start the Development Server
```bash
# Start the Next.js development server
npm run dev
```

#### Step 6: Access the Application
- Open your web browser
- Navigate to: **http://localhost:3000**
- You should see the Machine Learning Tasks Dashboard

### Quick Start (Alternative Method)

If you want to run the Python scripts directly without the web interface:

```bash
# Task 1: Iris Classification
python scripts/task1_iris_classification.py

# Task 2: MNIST CNN
python scripts/task2_mnist_cnn.py

# Task 3: NLP Analysis
python scripts/task3_nlp_spacy.py
```

### Troubleshooting Common Issues

#### Node.js Issues
```bash
# If npm install fails with dependency conflicts:
npm install --force

# If Next.js doesn't start properly:
npx next dev --port 3000

# Clear npm cache if needed:
npm cache clean --force
```

#### Python Issues
```bash
# If you encounter import errors:
pip install --upgrade pip
pip install -r requirements.txt

# If spaCy model is not found:
python -m spacy download en_core_web_sm

# For TensorFlow GPU support (optional):
pip install tensorflow-gpu
```

#### Memory Issues (Task 2)
- Reduce batch size in CNN training
- Use CPU instead of GPU if memory is limited
- Close other applications to free up RAM

### Verification Steps

After installation, verify everything is working:

1. **Check Python environment:**
   ```bash
   python --version  # Should be 3.8+
   pip list  # Should show all required packages
   ```

2. **Check Node.js environment:**
   ```bash
   node --version  # Should be 18+
   npm --version   # Should be 8+
   ```

3. **Test the application:**
   - Start the server: `npm run dev`
   - Open http://localhost:3000
   - You should see the dashboard with 3 task cards

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
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
