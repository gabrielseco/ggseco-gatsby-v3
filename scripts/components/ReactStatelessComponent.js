const { Component, TypescriptDefaultParser } = require('genmite');

class ReactStatelessComponent extends Component {
  constructor(destinationFolder, componentFolder, config) {
    super(destinationFolder, componentFolder, config);
  }

  init() {
    const tsType = {
      fileExtension: '.ts',
      parser: new TypescriptDefaultParser()
    };

    const styleType = {
      fileExtension: '.style.ts',
      parser: new TypescriptDefaultParser()
    }

    const tsxType = {
      fileExtension: '.tsx',
      parser: new TypescriptDefaultParser()
    }

    const componentFolder = this.getComponentFolder();
    this.add(tsxType, this.defaultReactComponent(componentFolder));
    this.add(styleType, this.defaultStyles());
    this.add(tsType, this.defaultIndex(componentFolder), 'index');
  }

  defaultReactComponent(component) {
    return `
      import * as React from 'react';
      
      const ${component} = () => (
        <div>
          <h2>${component} Stateful Component generated from genmite</h2>
        </div>
      );
            
      export default ${component};
    `;
  }

  defaultIndex(component) {
    return `
      export { default as ${component} } from './${component}';
    `;
  }

  defaultStyles() {
    return `
      import styled from 'styled-components';
    `
  }
}

module.exports = ReactStatelessComponent;