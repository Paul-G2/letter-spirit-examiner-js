// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";

/**
 * @classdesc
 * This class implements a dialog for displaying help info.
 * 
 */
Namespace.HelpDialog = class extends Namespace.Dialog
{

    /**
     * @constructor
     * 
     * @param {HTMLElement} [parent=document.body] - The dialog's parent element.
     */
    constructor(parent) 
    {
        super(parent, 65, 80, 'Examiner Help', false, '#d5bfa2', '#c09f72');
        this._buildUi();
    }


    /**
     * Builds the UI.
     * @private
     */
    _buildUi()
    {
        Namespace.UiUtils.StyleElement(this.userDiv, {overflowX:'auto', overflowY:'scroll'});

        this.textDiv = Namespace.UiUtils.CreateElement('div', 'text-div',
            this.userDiv, {left:'3%', width:'94%', height:'100%', fontSize:'20px', fontFamily:this.fontFamily}
        );

        this.textDiv.innerHTML =
        '<p></p>' + 
        '<p>This app implements a computer model of human letter-recognition that was invented by Douglas Hofstadter, Gary McGraw, and John Rehling. ' + 
        '(<a href="https://en.wikipedia.org/wiki/Fluid_Concepts_and_Creative_Analogies" target="_blank" rel="noopener noreferrer">link</a>)</p>' + 
        
        '<p>To try it out, enter a letter in the green left-hand grid, either by pressing the <i>random</i> button or by clicking on segments in the grid.</p>' +
        '<p>Then hit the <i>play</i> button to watch the Examiner "think." ' +  '(You can also pause, single-step, reset, and adjust the speed.)</p>' +

        '<p>While running, the central white work-area displays</p>' +
        '<ul>' +
            '<li> A summary of the Examiner&rsquo;s current actions, at the top.</li>' +
            '<li> A tentative breakdown of the input letter into color-coded parts, on the right side.</li>' +
            '<li> Descriptions and tentative roles that the Examiner has discovered for the parts, in the center.</li>' + 
        '</ul>' +
        
        '<p>In the yellow <i>Activations</i> area, the Examiner&rsquo;s built-in "concepts" are shown in a grid. ' + 
        'The size of the dot in each grid cell indicates how active that concept is at the current moment. (Red indicates negative activation.)</p>' +

        '<p>The pink <i>Coderack</i> area displays the list of subroutines or <i>codelets</i> that the Examiner ' +
        'uses to perform its work. The number of each type of codelet currently in the coderack is shown in a dynamical ' +
        'bar graph. The last-run codelet is indicated by a black triangle.</p>' +

        '<p>The thermometer shows how satisfied the Examiner is with its current progress; lower temperatures imply greater satisfaction.</p>' +

        '<p>The algorithm is probabilistic, so you may get different results each time you run it on a given letter.</p>' + 

        '<p><a href="https://github.com/Paul-G2/letter-spirit-examiner-js" target="_blank" rel="noopener noreferrer">The code for this app</a> ' + 
        'is heavily based on the Scheme code of John Rehling, linked ' + 
        '<a href="https://github.com/Alex-Linhares/FARGonautica/tree/master#project-letter-spirit" target="_blank" rel="noopener noreferrer">here</a>.</p>' +
        
        '</p>&nbsp;</p>';
    }

};

})( window.LetterSpirit = window.LetterSpirit || {} );




