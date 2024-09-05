import { loader } from '@monaco-editor/react';
import monacoThemes from 'monaco-themes/themes/themelist.json';

const themes: any = monacoThemes

const defineTheme = (theme: any) => {
  return new Promise(resolve => {
    Promise.all(
      [
        loader.init(),
        import(`monaco-themes/themes/${themes[theme]}.json`),
      ]
    ).then(
      ([monaco, themeData]) => {
        monaco.editor.defineTheme(theme, themeData);
        resolve(true);
      }
    );
  });
};

export { defineTheme };