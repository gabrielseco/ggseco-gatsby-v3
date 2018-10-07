const { Component, TypescriptDefaultParser } = require('genmite');

class ReactStatefulComponent extends Component {
  constructor(destinationFolder, componentFolder) {
    super(destinationFolder, componentFolder);
  }

  init() {
    const tsType = {
      fileExtension: '.ts',
      parser: new TypescriptDefaultParser()
    };

    const styleType = {
      fileExtension: '.style.ts'
    }

    const tsxType = {
      fileExtension: '.tsx',
      parser: new TypescriptDefaultParser()
    }

    const componentFolder = this.getComponentFolder();

    this.add(tsType, this.defaultReactIndex(componentFolder), 'index');
    this.add(styleType, this.defaultStyles());
    this.add(tsxType, this.defaultReactJS(componentFolder));
  }

  defaultReactJS(component) {
    return `
      import * as React, { Component } from 'react'

      class ${component} extends Component {
        constructor(props) {
          super(props);
          this.state = {};
        }

        render() {
          return (
            <div>
              <h2>${component} Stateful Component generated from genmite</h2>
            </div>
          );
        }
      }

      export default ${component};
    `;
  }

  defaultReactIndex(component) {
    return `
      export { default as ${component} } from './${component}';
    `;
  }

  defaultStyles() {
    return `
      import styled from 'styled-components';
    `;
  }
}

module.exports = ReactStatefulComponent;