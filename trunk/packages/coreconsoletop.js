// coreconsole.z.js
// BH 1/5/2013 12:45:19 PM

Jmol.Console = {
	buttons:{},
	buttonWidth:100,
	click:function(id) {
		Jmol.Console.buttons[id].console.appletConsole.doAction(Jmol.Console.buttons[id]);
	}	
}

Jmol.Console.JSConsole = function(appletConsole) {
	this.applet = appletConsole.viewer.applet;
	var id = this.id = this.applet._id+"_console";
	var console = this;
	Jmol.Console.buttons[console.id] = console;
	console.appletConsole = appletConsole;
	console.input = appletConsole.input = new Jmol.Console.Input(console);
	console.output = appletConsole.output = new Jmol.Console.Output(console);

	// set up this.appletConsole.input, this.appletconsole.output
	// set up buttons, which are already made by this time: 	
  
  // I would prefer NOT to use jQueryUI for this - just simple buttons with simple actions

	// create and insert HTML code here

	var s = '<div id="$ID" class="jmolConsole" style="display:block;background-color:yellow;width:600px;height:362px;position:absolute;z-order:9999"><div id=$ID_title></div><div id=$ID_label1></div><div id=$ID_outputdiv style="position:relative;left:2px"></div><div id=$ID_inputdiv style="position:relative;left:2px"></div><div id=$ID_buttondiv></div></div>'

	var setBtn = function(console, btn) {
		btn.console = console;
		btn.id = id + "_" + btn.label.replace(/\s/g,"_");
		Jmol.Console.buttons[btn.id] = btn;
		return btn.html();
	}
	s = s.replace(/\$ID/g,id)
	Jmol.$append("body", s);
	
	console.setContainer(Jmol.$("#" + id));
	console.setPosition();
	console.dragBind(true);
	s = "&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"javascript:Jmol.Console.buttons['"+id+"'].setVisible(false)\">close</a>";
	Jmol.$html(id + "_label1", s);
	Jmol.$html(id + "_inputdiv", '<textarea id="' + id + '_input" style="width:590px;height:100px"></textarea>');
	Jmol.$html(id + "_outputdiv", '<textarea id="' + id + '_output" style="width:590px;height:200px"></textarea>');
	
	s = setBtn(console, appletConsole.runButton)
		+ setBtn(console, appletConsole.loadButton)
		+ setBtn(console, appletConsole.clearInButton)
		+ setBtn(console, appletConsole.clearOutButton)
		+ setBtn(console, appletConsole.historyButton)
		+ setBtn(console, appletConsole.stateButton);
	Jmol.$html(id + "_buttondiv", s);
	Jmol.$bind("#" + id + "_input", "keypress", function(event) { console.input.keyPressed(event) });
	Jmol.$bind("#" + id + "_input", "keyup", function(event) { console.input.keyReleased(event) });
	Jmol.$bind("#" + id + "_input", "mousedown touchstart", function(event) { console.ignoreMouse=true });
	Jmol.$bind("#" + id + "_output", "mousedown touchstart", function(event) { console.ignoreMouse=true });

	console.setButton = function(text) {
		return new Jmol.Console.Button(this, text);
	}  

	console.setVisible = function(b) {	
		if (b)
			this.container.show();
		else
			this.container.hide();
		this.dragBind(b);
	}
	
	console.setTitle = function(title) {
		//Jmol.$html(this.id + "_title", title);
	}
}

Jmol._setDraggable(Jmol.Console.JSConsole);

Jmol.Console.Input = function(console) {

	this.console = console;
	
	// something like this....

	this.getText = function() {
		return Jmol.$val(this.console.id + "_input");
	}

	this.setText = function(text) {
		if (text == null)
			text = "";
		Jmol.$val(this.console.id + "_input", text);
	}

	this.keyPressed = function(ev) {
		var kcode = ev.which;
		var isCtrl = ev.ctrlKey;
    if (kcode == 13)kcode=10;
		var mode = this.console.appletConsole.processKey(kcode, 401/*java.awt.event.KeyEvent.KEY_PRESSED*/, isCtrl);
		
      if (isCtrl && kcode == 10)
        this.setText(this.getText() + "\n")

      if (ev.keyCode == 9 || kcode == 9) {
      // tab         
        var me = this;
        setTimeout(function(){me.setText(me.getText() + "\t"); Jmol.$focus(me.console.id + "_input")},10);	
      }
        
    if ((mode & 1) == 1 || kcode == 0)
			ev.preventDefault();
		if ((mode & 2) == 2) {
		}
    
    
	}

	this.keyReleased = function(ev) {
		var kcode = ev.which;
		var isCtrl = ev.ctrlKey;
    if (kcode == 13)kcode=10;                                  
    if (kcode == 38 || kcode == 40) {
      this.keyPressed(ev);
			ev.preventDefault();
      return;
    }
		var mode = this.console.appletConsole.processKey(kcode, 402/*java.awt.event.KeyEvent.KEY_RELEASED*/, isCtrl);
		
    if ((mode & 1) == 1)
			ev.preventDefault();
		if ((mode & 2) == 2) {
		}
	}


  this.getCaretPosition = function() {
    var el = Jmol.$get(this, 0);
    if('selectionStart' in el)
      return el.selectionStart;
		if(!('selection' in document))
			return 0;
    el.focus();
    var sel = document.selection.createRange();
    var len = document.selection.createRange().text.length;
    sel.moveStart('character', -el.value.length);
    return sel.text.length - len;
	}

}

Jmol.Console.Output = function(console) {
	this.console = console;
		
	this.getText = function() {
		return Jmol.$val(this.console.id + "_output");
	}

	this.setText = function(text) {
		if (text == null)
			text = "";
		Jmol.$val(this.console.id + "_output", text);
	}
	
  this.append = function(message, att) {
		this.setText(this.getText() + message); 		 
  }
}

Jmol.Console.Button = function(text) {
	this.label = text;
}

Jmol.Console.Button.prototype.addConsoleListener = function(appletConsole) {
	this.appletConsole = appletConsole;
	Jmol.Console.buttons[this.id] = this;
}
  
Jmol.Console.Button.prototype.html = function() {
	var s = '<input type="button" id="' + this.id + '" style="width:' + Jmol.Console.buttonWidth + 'px" value="' + this.label + '" onClick="Jmol.Console.click(\'' + this.id + '\')"/>'
	return s;
}

