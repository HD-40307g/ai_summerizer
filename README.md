
# AI Summarizer

AI Summarizer is a web application built using React, Redux, Vite, and Tailwind CSS that allows users to summarize articles from any URL using an AI-powered summarization API. The app lets users input article URLs, fetches summaries using the ChatGPT-based AI Summarizer API, and saves past summaries for future reference.

## Features

- **Summarize Articles**: Enter any URL to get a concise AI-generated summary of the content.
- **Save Articles**: Previously summarized articles are saved in local storage for quick access.
- **Copy Links**: Easily copy article URLs to the clipboard.
- **Responsive UI**: Modern, mobile-friendly interface built with Tailwind CSS.
- **Persistent Storage**: Uses local storage to maintain a history of summarized articles even after refreshing the page.

## Tech Stack

- **React**: Frontend framework used to build the user interface.
- **Redux Toolkit**: For managing global state and making API requests using `createApi`.
- **Vite**: Blazing-fast build tool used for faster development and bundling.
- **Tailwind CSS**: For designing a sleek, responsive UI.
- **AI Summarizer API**: Powered by ChatGPT, this API fetches summaries based on article URLs.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package management

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HD-40307g/ai-summarizer.git
   cd ai-summarizer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and add your API key for the AI Summarizer API:

   ```bash
   VITE_AI_SUMMARIZER_API_KEY=your_api_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   This will start the app on `http://localhost:3000`.

### Build for Production

To build the app for production:

```bash
npm run build
```

The output will be in the `dist/` folder.

## Component Breakdown

### `Header` Component

This component is responsible for displaying the top section of the webpage. It contains a navigation bar with the app's logo and a GitHub button, followed by a main heading and a short description of the app's purpose. Key features:

- **Logo**: The app's logo is displayed on the left side of the navigation bar. The logo is imported from the assets directory.
- **GitHub Button**: A button on the right side of the navigation bar. When clicked, it opens the GitHub repository of the project in a new tab.
- **Title**: A bold, attention-grabbing title that highlights the app's functionality of summarizing articles using OpenAI GPT-4.
- **Description**: A brief sentence that explains the app, "Summize," and its ability to turn lengthy articles into concise summaries.


### `Summary` Component

This is the main component of the application. It handles:

- **State Management**: Using React's `useState` to manage the article URL, summary, and saved articles.
- **API Calls**: Uses the `useLazyGetSummaryQuery` hook from Redux Toolkit to fetch the article summary from the AI Summarizer API.
- **Local Storage**: Stores and retrieves articles from the browser's local storage.
- **Copy Functionality**: Allows users to copy article URLs to the clipboard.

Key logic:

- **Form Submission**: Fetches the summary when a user submits a URL.
- **Display Articles**: Shows a list of previously summarized articles with a clickable link to set the article back into the input.
- **Loader and Error Handling**: Displays a loading spinner during API calls and handles errors gracefully.

### Example Code Snippet:

```javascript
const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
        const newArticle = { ...article, summary: data.summary };
        const updatedAllArticles = [newArticle, ...allArticles];
        setArticle(newArticle);
        setAllArticles(updatedAllArticles);
        localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
    }
};
```

## Folder Structure

```
├── node_modules
├── public
│   └── favicon.ico
├── src
│   ├── assets          # Static assets like images and icons
│   ├── components      # Reusable UI components
│   ├── services        # API services (Redux Toolkit `createApi`)
│   ├── App.css         # Tailwind CSS and other global styles
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point for React
├── .env                # Environment variables
├── .gitignore          # Excludes files from Git tracking
├── eslint.config.js    # Configures JavaScript linting rules
├── index.html          # Main HTML template for the app
├── MIT license.txt     # Permissive license allowing free use and modification.
├── package-lock.json   # Locks exact dependency versions
├── package.json        # Project dependencies and scripts
├── postcss.config.js   # Configures PostCSS processing options
├── README.md           # Project documentation and usage guide
├── tailwind.config.js  # Tailwind CSS customization settings
└── vite.config.js      # Vite configuration file
```

## Future Improvements

- **User Authentication**: Allow users to log in and save summaries to a personal account.
- **Advanced AI Features**: Provide options for different summarization styles or lengths.
- **Customizable UI**: Add themes or layouts for user preference.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
