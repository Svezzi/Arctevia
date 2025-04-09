'use client';

import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, X } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState } from 'react';

// Mock data for models
const MODEL_DATA = {
  'llama-2': {
    name: 'LLaMA 2',
    description: 'Meta\'s powerful open-source LLM, fine-tuned for chat and instruction-following with improved safety.',
    tags: ['Open-Source', '7B-70B', 'Chat'],
    specs: {
      size: '7B / 13B / 70B parameters',
      architecture: 'Decoder-only Transformer',
      license: 'LLaMA License (research use)',
      source: 'Meta AI Research',
    },
    useCases: ['Chatbot', 'Text Generation', 'Creative Writing', 'Summarization'],
    benchmarks: [
      { name: 'MMLU', score: '59.8%' },
      { name: 'GSM8K', score: '41.3%' },
      { name: 'HumanEval', score: '29.7%' },
    ],
    externalLinks: {
      huggingFace: 'https://huggingface.co/meta-llama',
      github: 'https://github.com/facebookresearch/llama',
    }
  },
  'mistral': {
    name: 'Mistral',
    description: 'Highly efficient language model with excellent performance at small parameter sizes. Performs well on reasoning tasks.',
    tags: ['Open-Source', '7B', 'Instruction-Tuned'],
    specs: {
      size: '7B parameters',
      architecture: 'Mixture of Experts Transformer',
      license: 'Apache 2.0',
      source: 'Mistral AI',
    },
    useCases: ['Reasoning Tasks', 'Question Answering', 'Content Generation', 'Classification'],
    benchmarks: [
      { name: 'MMLU', score: '62.5%' },
      { name: 'GSM8K', score: '47.2%' },
      { name: 'HumanEval', score: '32.1%' },
    ],
    externalLinks: {
      huggingFace: 'https://huggingface.co/mistralai',
      github: 'https://github.com/mistralai',
    }
  },
  'deepseek': {
    name: 'DeepSeek',
    description: 'Trained on diverse datasets with strong performance on knowledge-intensive tasks and multilingual support.',
    tags: ['Open-Source', '7B-67B', 'Multilingual'],
    specs: {
      size: '7B / 67B parameters',
      architecture: 'Decoder-only Transformer',
      license: 'DeepSeek License (similar to LLaMA)',
      source: 'DeepSeek AI',
    },
    useCases: ['Knowledge Tasks', 'Multilingual Generation', 'Research', 'Education'],
    benchmarks: [
      { name: 'MMLU', score: '63.1%' },
      { name: 'GSM8K', score: '45.8%' },
      { name: 'HumanEval', score: '32.9%' },
    ],
    externalLinks: {
      huggingFace: 'https://huggingface.co/deepseek-ai',
      github: 'https://github.com/deepseek-ai',
    }
  },
  'code-llama': {
    name: 'Code LLaMA',
    description: 'Specialized on code understanding and generation. Supports multiple programming languages with high-quality outputs.',
    tags: ['Open-Source', '7B-34B', 'Code'],
    specs: {
      size: '7B / 13B / 34B parameters',
      architecture: 'Decoder-only Transformer',
      license: 'LLaMA License (research use)',
      source: 'Meta AI Research',
    },
    useCases: ['Code Generation', 'Code Completion', 'Code Explanation', 'Debugging'],
    benchmarks: [
      { name: 'HumanEval', score: '48.7%' },
      { name: 'MBPP', score: '56.2%' },
      { name: 'DS-1000', score: '34.5%' },
    ],
    externalLinks: {
      huggingFace: 'https://huggingface.co/codellama',
      github: 'https://github.com/facebookresearch/codellama',
    }
  },
  'phi-2': {
    name: 'Phi-2',
    description: 'Microsoft\'s small yet powerful LLM with excellent performance-to-size ratio. Handles complex reasoning tasks despite small size.',
    tags: ['Open-Source', '2.7B', 'Efficient'],
    specs: {
      size: '2.7B parameters',
      architecture: 'Decoder-only Transformer',
      license: 'MIT License',
      source: 'Microsoft Research',
    },
    useCases: ['Research', 'Small-scale Deployment', 'Edge Devices', 'Educational Applications'],
    benchmarks: [
      { name: 'MMLU', score: '56.7%' },
      { name: 'GSM8K', score: '43.0%' },
      { name: 'HumanEval', score: '45.2%' },
    ],
    externalLinks: {
      huggingFace: 'https://huggingface.co/microsoft/phi-2',
      github: 'https://github.com/microsoft/phi',
    }
  },
  'falcon': {
    name: 'Falcon',
    description: 'Built by the Technology Innovation Institute, this model excels at following complex prompts and instructions.',
    tags: ['Open-Source', '7B-180B', 'Apache-2.0'],
    specs: {
      size: '7B / 40B / 180B parameters',
      architecture: 'Decoder-only Transformer',
      license: 'Apache 2.0',
      source: 'Technology Innovation Institute',
    },
    useCases: ['Instruction Following', 'Text Generation', 'Content Creation', 'API Integration'],
    benchmarks: [
      { name: 'MMLU', score: '55.4%' },
      { name: 'GSM8K', score: '37.1%' },
      { name: 'HumanEval', score: '27.8%' },
    ],
    externalLinks: {
      huggingFace: 'https://huggingface.co/tiiuae',
      github: 'https://github.com/falconry/falcon',
    }
  }
};

export default function ModelDetailPage() {
  const params = useParams();
  const modelName = params.modelName as string;
  const [showModal, setShowModal] = useState(false);
  
  // Get model data or use a default fallback
  const modelKey = Object.keys(MODEL_DATA).find(key => 
    key === modelName || key.replace('-', '') === modelName
  ) || 'mistral';
  
  const model = MODEL_DATA[modelKey as keyof typeof MODEL_DATA];
  
  // Get model size for CLI example
  const modelSize = model.specs.size.split(' ')[0].toLowerCase();
  
  return (
    <div className="bg-[#EAF2F8] min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link 
          href="/models" 
          className="inline-flex items-center text-gray-500 hover:text-[#1B3B6F] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span>Back to Models</span>
        </Link>
        
        {/* Model Title and Description */}
        <h1 className="text-4xl font-bold text-[#1B3B6F] mb-4">{model.name}</h1>
        <p className="text-lg text-gray-700 mb-6">{model.description}</p>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column: Tags and Specs */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {model.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            {/* Specs */}
            <h2 className="text-xl font-semibold text-[#1B3B6F] mb-4">Model Specifications</h2>
            <dl className="space-y-3">
              <div>
                <dt className="text-sm font-medium text-gray-500">Size</dt>
                <dd className="text-gray-800">{model.specs.size}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Architecture</dt>
                <dd className="text-gray-800">{model.specs.architecture}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">License</dt>
                <dd className="text-gray-800">{model.specs.license}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Source</dt>
                <dd className="text-gray-800">{model.specs.source}</dd>
              </div>
            </dl>
            
            {/* External Links */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-[#1B3B6F] mb-3">External Resources</h3>
              <div className="flex flex-col space-y-2">
                <a 
                  href={model.externalLinks.huggingFace} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 hover:text-[#1B3B6F] transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span>Hugging Face</span>
                </a>
                <a 
                  href={model.externalLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 hover:text-[#1B3B6F] transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column: Use Cases and Example Code */}
          <div className="flex flex-col gap-6">
            {/* Use Cases */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold text-[#1B3B6F] mb-4">Example Use Cases</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {model.useCases.map((useCase, index) => (
                  <li key={index}>{useCase}</li>
                ))}
              </ul>
            </div>
            
            {/* Code Example */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold text-[#1B3B6F] mb-4">Quick Start</h2>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-white overflow-x-auto mb-3">
                <pre>
                  {`# Run ${model.name} on Arctevia\n`}
                  {`arctevia run --model ${modelKey}${modelSize} --gpu A100 --runtime 4h`}
                </pre>
              </div>
              <p className="text-sm text-gray-600">
                See the <Link href="/docs" className="text-[#1B3B6F] hover:underline">documentation</Link> for more options and examples.
              </p>
            </div>
            
            {/* Performance Benchmarks */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold text-[#1B3B6F] mb-4">Performance Benchmarks</h2>
              <div className="space-y-4">
                {model.benchmarks.map((benchmark, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{benchmark.name}</span>
                      <span className="text-sm font-semibold text-[#1B3B6F]">{benchmark.score}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#A9D6E5] h-2 rounded-full" 
                        style={{ width: benchmark.score.replace('%', '') + '%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Benchmark results are comparative and may vary based on specific task configurations.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-white to-[#EAF2F8] rounded-xl p-8 shadow-md text-center">
          <h2 className="text-2xl font-semibold text-[#1B3B6F] mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Run {model.name} on our Nordic GPU infrastructure with full control<br />
            over your data and configuration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setShowModal(true)}
              className="bg-[#A9D6E5] text-[#1B3B6F] px-5 py-2.5 rounded-lg font-medium hover:bg-[#1B3B6F] hover:text-white transition duration-200 text-center"
            >
              Sign up for Early Access
            </button>
          </div>
        </div>
      </div>
      
      {/* Early Access Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl w-full relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-[#1B3B6F] mb-4">Join Arctevia Early Access</h2>
            <iframe
              src="https://tally.so/r/mVNgzg"
              width="100%"
              height="500"
              className="rounded-md w-full"
              title="Arctevia Waitlist"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
} 