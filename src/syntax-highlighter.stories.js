import SyntaxHighlighter from "react-syntax-highlighter";
import {dark, vs, idea, pojoaque, tomorrow,    darcula,    hopscotch, far, arta, agate, ascetic, androidstudio, arduinoLight, docco, ocean, atelierCaveDark, atelierCaveLight, atelierDuneDark, atelierDuneLight, atelierEstuaryDark, atelierEstuaryLight, atelierForestDark, atelierForestLight, atelierHeathDark, atelierHeathLight, atelierLakesideDark, atelierLakesideLight, atelierPlateauDark, atelierPlateauLight, atelierSavannaDark, atelierSavannaLight, atelierSeasideDark, atelierSeasideLight, atelierSulphurpoolDark, atelierSulphurpoolLight, atomOneDark, atomOneLight, gruvboxDark, darkula, gruvboxLight, kimbieDark, github, kimbieLight, dracula, magula, hybrid, githubGist, paraisoDark, paraisoLight, codepenEmbed, colorBrewer, irBlack, qtcreatorDark, monokai, defaultStyle, foundation, googlecode, grayscale, qtcreatorLight, monoBlue, rainbow, monokaiSublime, obsidian, solarizedDark, solarizedLight, xcode, xt256, purebasic, routeros, railscasts, sunburst, tomorrowNight, tomorrowNightBlue, tomorrowNightBright, tomorrowNightEighties, vs2015, zenburn, schoolBook, brownPaper, } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import React from 'react';
export default {
  title: 'Syntax Highlighter',
}

const code = `class PowTwo:
    """Class to implement an iterator
    of powers of two"""

    def __init__(self, max=0):
        self.max = max

    def __iter__(self):
        self.n = 0
        return self

    def __next__(self):
        if self.n <= self.max:
            result = 2 ** self.n
            self.n += 1
            return result
        else:
            raise StopIteration


# create an object
numbers = PowTwo(3)

# create an iterable from the object
i = iter(numbers)

# Using next to get to the next iterator element
print(next(i)) # prints 1
print(next(i)) # prints 2
print(next(i)) # prints 4
print(next(i)) # prints 8
print(next(i)) # raises StopIteration exception`

function Component(props) {
  const {theme, name} = props;

  function processName(name) {
    //capitalize first letter, and add a space between words (camelCase to Camel Case)
    return name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1').trim();

  }


  return <div style={{margin: "20px"}}>
    <h3>{processName(name)}</h3>
    <SyntaxHighlighter language={"python"} showLineNumbers style={theme}>
      {code}
    </SyntaxHighlighter>
  </div>
}

export const Default = () => (<div>
  <Component theme={defaultStyle} name={"defaultStyle"}/>
  <Component theme={dark} name={"dark"}/>
  <Component theme={vs} name={"vs"}/>
  <Component theme={idea} name={"idea"}/>
  <Component theme={pojoaque} name={"pojoaque"}/>
  <Component theme={tomorrow} name={"tomorrow"}/>
  <Component theme={darcula} name={"darcula"}/>
  <Component theme={hopscotch} name={"hopscotch"}/>
  <Component theme={far} name={"far"}/>
  <Component theme={arta} name={"arta"}/>
  <Component theme={agate} name={"agate"}/>
  <Component theme={ascetic} name={"ascetic"}/>
  <Component theme={androidstudio} name={"androidstudio"}/>
  <Component theme={arduinoLight} name={"arduinoLight"}/>
  <Component theme={docco} name={"docco"}/>
  <Component theme={ocean} name={"ocean"}/>
  <Component theme={atelierCaveDark} name={"atelierCaveDark"}/>
  <Component theme={atelierCaveLight} name={"atelierCaveLight"}/>
  <Component theme={atelierDuneDark} name={"atelierDuneDark"}/>
  <Component theme={atelierDuneLight} name={"atelierDuneLight"}/>
  <Component theme={atelierEstuaryDark} name={"atelierEstuaryDark"}/>
  <Component theme={atelierEstuaryLight} name={"atelierEstuaryLight"}/>
  <Component theme={atelierForestDark} name={"atelierForestDark"}/>
  <Component theme={atelierForestLight} name={"atelierForestLight"}/>
  <Component theme={atelierHeathDark} name={"atelierHeathDark"}/>
  <Component theme={atelierHeathLight} name={"atelierHeathLight"}/>
  <Component theme={atelierLakesideDark} name={"atelierLakesideDark"}/>
  <Component theme={atelierLakesideLight} name={"atelierLakesideLight"}/>
  <Component theme={atelierPlateauDark} name={"atelierPlateauDark"}/>
  <Component theme={atelierPlateauLight} name={"atelierPlateauLight"}/>
  <Component theme={atelierSavannaDark} name={"atelierSavannaDark"}/>
  <Component theme={atelierSavannaLight} name={"atelierSavannaLight"}/>
  <Component theme={atelierSeasideDark} name={"atelierSeasideDark"}/>
  <Component theme={atelierSeasideLight} name={"atelierSeasideLight"}/>
  <Component theme={atelierSulphurpoolDark} name={"atelierSulphurpoolDark"}/>
  <Component theme={atelierSulphurpoolLight} name={"atelierSulphurpoolLight"}/>
  <Component theme={atomOneDark} name={"atomOneDark"}/>
  <Component theme={atomOneLight} name={"atomOneLight"}/>
  <Component theme={gruvboxDark} name={"gruvboxDark"}/>
  <Component theme={gruvboxLight} name={"gruvboxLight"}/>
  <Component theme={github} name={"github"}/>
  <Component theme={githubGist} name={"githubGist"}/>
  <Component theme={kimbieDark} name={"kimbieDark"}/>
  <Component theme={kimbieLight} name={"kimbieLight"}/>
  <Component theme={dracula} name={"dracula"}/>
  <Component theme={darkula} name={"darkula"}/>
  <Component theme={magula} name={"magula"}/>
  <Component theme={hybrid} name={"hybrid"}/>
  <Component theme={paraisoDark} name={"paraisoDark"}/>
  <Component theme={paraisoLight} name={"paraisoLight"}/>
  <Component theme={codepenEmbed} name={"codepenEmbed"}/>
  <Component theme={colorBrewer} name={"colorBrewer"}/>
  <Component theme={irBlack} name={"irBlack"}/>
  <Component theme={qtcreatorDark} name={"qtcreatorDark"}/>
  <Component theme={monokai} name={"monokai"}/>
  <Component theme={foundation} name={"foundation"}/>
  <Component theme={googlecode} name={"googlecode"}/>
  <Component theme={grayscale} name={"grayscale"}/>
  <Component theme={qtcreatorLight} name={"qtcreatorLight"}/>
  <Component theme={monoBlue} name={"monoBlue"}/>
  <Component theme={rainbow} name={"rainbow"}/>
  <Component theme={monokaiSublime} name={"monokaiSublime"}/>
  <Component theme={obsidian} name={"obsidian"}/>
  <Component theme={solarizedDark} name={"solarizedDark"}/>
  <Component theme={solarizedLight} name={"solarizedLight"}/>
  <Component theme={xcode} name={"xcode"}/>
  <Component theme={xt256} name={"xt256"}/>
  <Component theme={purebasic} name={"purebasic"}/>
  <Component theme={routeros} name={"routeros"}/>
  <Component theme={railscasts} name={"railscasts"}/>
  <Component theme={sunburst} name={"sunburst"}/>
  <Component theme={tomorrowNight} name={"tomorrowNight"}/>
  <Component theme={tomorrowNightBlue} name={"tomorrowNightBlue"}/>
  <Component theme={tomorrowNightBright} name={"tomorrowNightBright"}/>
  <Component theme={tomorrowNightEighties} name={"tomorrowNightEighties"}/>
  <Component theme={vs2015} name={"vs2015"}/>
  <Component theme={zenburn} name={"zenburn"}/>
  <Component theme={schoolBook} name={"schoolBook"}/>
  <Component theme={brownPaper} name={"brownPaper"}/>
</div>)
