/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
    './*.md'
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'teal': '#4A7C7E',
          'teal-light': '#5A9CA0',
          'teal-dark': '#3A6C6E',
          'orange': '#E87952',
          'orange-light': '#F89870',
          'coral': '#D96846',
          'charcoal': '#2D2824',
          'cream': '#FAF8F5',
        }
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
