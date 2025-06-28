"use client"

import { useState } from 'react';
import { summarizeText } from '@/ai/flows/text-summarizer';
import { Button } from '@/components/ui/button';
import { Wand2, Loader2, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface TextSummarizerProps {
  text: string;
}

export function TextSummarizer({ text }: TextSummarizerProps) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async () => {
    setIsLoading(true);
    setError('');
    setSummary('');
    try {
      const result = await summarizeText({ text });
      setSummary(result.summary);
    } catch (e) {
      setError('Failed to summarize text. Please try again.');
      console.error(e);
    }
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
        <details>
            <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">View full text</summary>
            <p className="mt-2 text-sm text-muted-foreground border-l-2 border-border pl-4 py-2">{text}</p>
        </details>
      
      <Button onClick={handleSummarize} disabled={isLoading} variant="outline" size="sm">
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Wand2 className="mr-2 h-4 w-4" />
        )}
        Summarize with AI
      </Button>

      {error && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {summary && (
        <Alert>
          <Wand2 className="h-4 w-4" />
          <AlertTitle>AI Summary</AlertTitle>
          <AlertDescription>{summary}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
