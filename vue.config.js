module.exports = {
    pages: {
      'index': {
        entry: './src/pages/Home/main.js',
        template: 'public/index.html',
        title: 'Home',
        chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
      },
      'about': {
        entry: './src/pages/About/main.js',
        template: 'public/index.html',
        title: 'About',
        chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
      },
      'projects': {
        entry: './src/pages/Projects/main.js',
        template: 'public/index.html',
        title: 'Projects',
        chunks: [ 'chunk-vendors', 'chunk-common', 'projects' ]
      },
      'contact': {
        entry: './src/pages/Contact/main.js',
        template: 'public/index.html',
        title: 'Contact',
        chunks: [ 'chunk-vendors', 'chunk-common', 'contact' ]
      }
    }
  }