$css = @'
/* Window chrome */
.window {
  position: absolute;
  background: #c0c0c0;
  border: 2px solid #000;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  font-family: "MS Sans Serif", sans-serif;
  user-select: none;
}

.window-active {
  border-color: #000080;
}

.window-titlebar {
  height: 24px;
  background: linear-gradient(to bottom, #000080, #000050);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
  cursor: grab;
  font-size: 12px;
  border-bottom: 2px solid #000;
}

.window-titlebar:active {
  cursor: grabbing;
}

.window-title {
  font-weight: bold;
}

.window-controls {
  display: flex;
  gap: 4px;
}

.window-button {
  width: 18px;
  height: 18px;
  border: 2px outset #fff;
  background: #c0c0c0;
  color: #000;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.window-button:active {
  border-style: inset;
}

.window-content {
  flex: 1;
  overflow: hidden;
  background: #c0c0c0;
}
'@

Add-Content -Path 'c:\Users\itsam\Desktop\Endgame\Github Archives\98_portfolio\src\App.css' -Value $css
