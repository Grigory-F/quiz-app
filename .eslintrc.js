module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
<<<<<<< HEAD
<<<<<<< HEAD
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
=======
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: 0
  }
};
>>>>>>> work
=======
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: 0
  }
};
>>>>>>> parent of 82eb2ea (awdad f wf w)
