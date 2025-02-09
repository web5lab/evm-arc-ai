import React from 'react';
import { Code2, Terminal, Globe2, Copy, Check, Blocks, Braces } from 'lucide-react';

function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute -top-3 left-3 px-2 py-1 bg-gray-800 text-xs text-gray-400 rounded">
        {language}
      </div>
      <div className="bg-gray-900 rounded-lg p-4 pr-12">
        <code className={`text-${language === 'bash' ? 'orange' : language === 'typescript' ? 'green' : 'blue'}-400`}>
          {code}
        </code>
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );
}

export function Integration() {
  return (
    <section className="container mx-auto px-6 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />

      <div className="relative">
      <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
        Easy Integration
      </h2>
      <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
        Choose your preferred integration method. Our flexible solutions adapt to your tech stack.
      </p>

      {/* Integration Methods */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {/* NPM Package */}
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-orange-100">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
            <Terminal className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold mb-4">NPM Package</h3>
          <p className="text-gray-600 mb-6">
            Full TypeScript support with React hooks and components
          </p>
          <div className="space-y-4">
            <CodeBlock
              language="bash"
              code="npm install @ARCAI/chat-widget"
            />
            <CodeBlock
              language="typescript"
              code={`import { ARCAIChat } from '@ARCAI/chat-widget';

function App() {
  return (
    <ARCAIChat
      apiKey="your_api_key"
      theme="light"
      position="bottom-right"
    />
  );
}`}
            />
          </div>
        </div>

        {/* CDN Script */}
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-orange-100">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
            <Code2 className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold mb-4">CDN Script</h3>
          <p className="text-gray-600 mb-6">
            Quick integration with any website using vanilla JavaScript
          </p>
          <div className="space-y-4">
            <CodeBlock
              language="html"
              code={`<script src="https://cdn.ARCAI.com/chat-widget.js"></script>

<script>
  ARCAI.init({
    apiKey: 'your_api_key',
    theme: 'light',
    position: 'bottom-right'
  });
</script>`}
            />
          </div>
        </div>

        {/* API Integration */}
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-orange-100">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
            <Globe2 className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold mb-4">REST API</h3>
          <p className="text-gray-600 mb-6">
            Build custom solutions with our powerful REST API
          </p>
          <div className="space-y-4">
            <CodeBlock
              language="bash"
              code={`curl -X POST https://api.ARCAI.com/v1/chat \\
  -H 'Authorization: Bearer your_api_key' \\
  -H 'Content-Type: application/json' \\
  -d '{"message": "How do I buy tokens?", "context": "purchase"}'`}
            />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {[
          {
            icon: Blocks,
            title: 'Customizable UI',
            description: 'Fully customize the chat widget to match your brand'
          },
          {
            icon: Braces,
            title: 'TypeScript Support',
            description: 'First-class TypeScript support with full type definitions'
          },
          {
            icon: Globe2,
            title: 'Multi-platform',
            description: 'Works seamlessly across web, mobile, and desktop'
          }
        ].map((feature, index) => (
          <div key={index} className="flex items-start gap-4 p-6 bg-white/50 rounded-xl">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <feature.icon className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Documentation Link */}
      <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-orange-100 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
        <p className="text-gray-600 mb-6">
          Check out our comprehensive documentation for detailed integration guides,
          API references, and examples.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
        >
          View Full Documentation
          <Code2 className="w-5 h-5" />
        </a>
      </div>
      </div>
    </section>
  );
}