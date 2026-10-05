import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowLeft, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Jim Corbett Adventures error:', error);
    console.error('Component stack:', errorInfo?.componentStack);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <main className="min-h-[70vh] bg-[#F5F1E8] px-6 py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#102A20] text-[#D8C49A]">
            <AlertTriangle size={28} />
          </div>

          <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-[#B77B45]">
            SOMETHING WENT WRONG
          </p>

          <h1 className="font-serif text-4xl text-[#102A20] md:text-6xl">
            The forest trail hit a dead end.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#102A20]/65">
            This page encountered an unexpected error. You can return to the
            homepage or reload the page and try again.
          </p>

          {import.meta.env.DEV && this.state.error?.message && (
            <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-4 text-left text-sm text-red-700">
              {this.state.error.message}
            </div>
          )}

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#102A20] px-6 py-3.5 text-sm font-semibold text-white"
            >
              <ArrowLeft size={17} />
              BACK HOME
            </Link>

            <button
              type="button"
              onClick={this.handleReload}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#102A20]/15 px-6 py-3.5 text-sm font-semibold text-[#102A20]"
            >
              <RefreshCw size={17} />
              RELOAD
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default ErrorBoundary;