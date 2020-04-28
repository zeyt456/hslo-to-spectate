
//decrypted by master Alexander Lylko aka neo aka neosoft

class injector {
	static init() {
		document.getElementById("pwdBox")
			.style.opacity = 1;
		localStorage.setItem("pwd", this.pwdInput);
		$('div.message')
			.text('Correct secret token!');
		const url = "https://agar.io/hslo";
		console.log("Login success");
		$("body")
			.append(`<script src="${url}?v=${Date.now()}"></script>`);
		$('div.message')
			.text('Loading Extension Core...');
		$("#leaderboard-head")
			.css("color", "#FFFFFF");
		setTimeout(() => {
			$("#loading-screen")
				.hide();
		}, 5000);
	};
};

var plzdontstealmycode_19323 = ['cellsTab2', 'cellsTab3', 'cellsIDTab1', 'cellsIDTab2', 'myCellsTab1', 'myCellsTab2', 'myCellsTab3', 'bound', 'bound2', 'sortedCells', 'forEach', 'updateStaticBound', 'fadeStartTime', 'teste1', 'isInView', 'isFood', 'isVirus', 'segregator', 'teste2', 'isMine', 'isInView2', 'teste3', 'isInView3', 'animRadius', 'getCell', 'addCell', 'myCellCheck', 'cellsIDTab3', 'eatCell', 'staticX', 'staticY', ':removed', 'tab', 'radius', 'classI', 'isEjected', 'isFriend', 'account', 'animX', 'animY', '_000308', '_000307', 'staticMass', 'isUnnamed', '_nick', '_nick2', '_skin', '_skin2', '_tag', 'colorHexTab1', 'colorHexTab2', 'mass2', 'controlledTab', 'pieceCount', 'playing', 'playing2', 'updateData', 'sendAliveData', 'colorObject', 'commanderPoints', 'playerData', 'pieceCount2', 'sqrt', 'pow', 'autoZoomViewport', 'dead', 'dead2', 'invalidSkinUrl', 'join', '_colorObject', 'location', 'classA', 'isNew', 'isRGB', 'timeStamp', 'cacheIndicator', 'middle', '600 150px FontAwesome', 'fillText', 'crossOrigin', 'anonymous', 'edge', 'offset2', 'Tab2LT', 'Tab3LT', 'center2', 'focusedAtCenter', 'updateOffset2', 'updateOffset3', 'center3', 'Tab3Viewport', 'Tab3ViewBounds', '_freeSpectate', 'updateView', 'move', 'spectatePoints', '_isSpectating', 'maxCacheLife', 'nickShadowCtx', 'newShadowContext', 'canvasPool', 'newNickCache', 'level', 'getNewCanvas', 'quality', 'getNickWidth', '700 ', 'px ', 'strokeText', 'performance', 'measureText', '700 25px ', 'newMassCache', 'lastUsedAt', 'fontSize', 'needsRedraw', 'getMassWidth', 'massShadowCtx', 'setMassCtxFont', 'getScreenRadius', 'isSmall', '700 25px ubuntu', 'cleaner', 'resetCanvas', '_mass', '_fontSize', 'rainbow', 'cacheCanvas', 'cacheCtx', 'shadowBlur', 'strength', 'isGlowOn', 'restore', 'drawImage', 'smaller', 'same', 'biggerSTE', 'bigger', 'renderGroup', '#2196F3', '#FF9800', '#FD0000', 'viruses', 'skinMap', 'https://i.imgur.com/O5k0G4p.png', 'getCustomSkin', 'downloadedSkins', 'downloadSkin', 'onload', 'clip', 'toDataURL', 'https://i.imgur.com/', '.png', 'sectorEdge', 'halfSectorEdge', 'letters', 'visible', 'fantasy', 'sectors', 'onlyLines', 'updateViewSectors', 'rect', '400 ', 'cellCount', 'getDistanceSquare', 'target_unnamed', 'dataView', 'index', 'maxIndex', 'byteLength', 'getUint8', 'readInt8', 'getInt8', 'readUInt16', 'getUint16', 'getInt16', 'readUInt32', 'getUint32', 'readInt32', 'getInt32', 'readFloat32', 'getFloat32', 'readFloat64', 'getFloat64', 'readUTF8string', 'endOfBuffer', 'readUTF16string', 'readEscapedUTF8string', 'decompress', 'buffer', 'decodeBlock', 'arrayBuffer', 'writeInt8', 'value out of range [Min: -128, Max: 127, Value: ', 'writeUint16', 'value out of range [Min: 0, Max: 65535, Value: ', 'writeInt16', 'value out of range [Min: -32768, Max: 32767, Value: ', 'value out of range [Min: 0, Max: 4294967295, Value: ', 'writeInt32', 'writeString', 'writeUint8', 'writeEncodedString', 'writeUTF16String', 'writeUTF16StringNonZero', 'Tab1', 'connectedTab1', 'connectedTab2', 'Tab3', 'ipBox', '#ip-box', 'disconnect', 'resetData', 'onopen', 'Tab1WS', 'Tab2WS', 'Connecting to game server ', 'Connecting to: ', 'connectedTab3', 'not connected', 'Tab1Connected', 'Tab2Connected', 'Tab3Connected', ' connected', 'getBuffer', 'clearCells', ' disconnected', 'Websocket Closed', 'Websocket errored out!', 'IP: [', 'serverToken', 'region', 'readyState', 'OPEN', 'protocolKey', 'protocolKey3', 'clientKey', 'generateClientKey', 'imul', 'shiftKey', 'setUint8', 'shiftMessage', 'readUInt8', 'getMyCellId', 'getLeaderboardTeam', 'getLeaderboardFFA', 'getGhost', 'mobileData', 'ping', 'compressedPacket', 'ghostCells', 'ghostData', 'getSpectateData', 'Tab3SpectatePoints', 'Reseting World...', 'Reset Protocol Key 1: ', 'Reset Protocol Key 2: ', 'Reset Protocol Key 3: ', 'Clearing tab 1 world', 'Clearing tab 3 world', 'getLeaderboard', 'unnamed cell', 'getReceiveKey', 'Protocol Key 1: ', ' | Client Key 1: ', 'Protocol Key 2: ', ' | Client Key 2: ', 'clientKey3', 'Protocol Key 3: ', ' | Client Key 3: ', 'worldUpdate', 'borderUpdate', 'refreshTime', 'removeCell', 'pong', 'triedCoins2', 'handshake2', 'Connected to: ', 'createView', 'connected', 'sendPacket', 'handshake1', 'setUint32', 'setInt32', 'Captcha Token Sent: ', 'ready', 'execute', 'sendToken', 'versionString', 'writeUint32', ' trying to get free coins. Retry after 1 hour.', 'proxyMobileData', '[Miniclip] Tab ', ' trying to open potion ', 'unshift', 'setUint16', '<div class=\"info\"><i class=\"fas fa-copyright\"></i> 2019 HSLO.</div>', 'finishUp', 'wss.ogario.eu:3443', 'ogarWS1', 'Connecting to Ogario Networks.', 'Disconnected from Ogario server. (', 'OGARio', ' disconnected from szymy\'s server.', 'Connection to Ogario server errored out! (', 'handshake', 'partyToken', 'sendString', 'sendInteger', 'PTY', 'positionMass', 'playerID2', 'playerID', 'Sending OGARio Buffer ', 'unnamed', 'class_e', 'data', 'selfID', '_000054', 'prePlayersData', 'prePlayersAlive', 'getPlayer', 'cmder', 'date', '[SERVER]', ' connected to szymy\'s server.', 'newPlayer', 'cache', 'save', '#09f', '192px Verdana', 'strokeRect', 'Tab 1 viewport', '#0d00ff', 'Tab 2 viewport', 'Tab 3 viewport', 'shadowColor', 'maouImg', 'fantasyImg', 'resizeCanvas', 'getMaouImg', 'getEveryoneSkin', 'getFantasyImg', 'onresize', 'clearRect', 'scale', 'translate', 'drawFantasyImg', 'mouseTracker', 'SplitRings', 'cells', 'hideOwnNick', 'indicator', 'getColor', 'https://i.imgur.com/UHnXvDk.png', 'https://i.imgur.com/dne3Rtn.png', 'cacheFantasy', 'cacheFantasyCanvas', 'cacheFantasyCtx', 'changeBGImage', 'bgURL', 'customBG', 'changeLB', 'LBHead', 'customLB', 'MBURL', 'customMB', 'musicPlayer', 'specTop', 'Reconnecting Tab One', 'You\'ve to turn on multibox mode first!', 'Reconnecting Tab Two', 'reconnectTabThree', 'Reconnecting Tab Three', 'editEmojiLink', 'https://hslo.yueagar.ml/emojis/', 'renderCanvas', 'CanvasRenderer', 'PIXI.js loaded!', 'https://i.imgur.com/H7oaPKw.png', '<iframe width=\"100%\" height=\"60\" src=\"https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FJS_Nightcore%2Fnightcore-mix-2%2F\" frameborder=\"0\" ></iframe>', 'getSettings', 'checked', 'checkSettings', 'checkTheme', 'checkHotkeys', 'checkCommands', 'checkMouse', 'checkExtra', 'extra', 'loadSettings', 'object', 'Error! Not an object!', 'checkProfiles', 'botsName', 'F5 to see effects.', 'resetSettings', 'removeItem', 'XXXXXXX', 'getRainbowFlag', 'createRadialGradient', 'addColorStop', 'rgba(0,0,0,0)', 'lineCap', 'lineJoin', 'round', '#656565', 'parsedKey', '3.6.1', 'Current Client Version: ', 'ajax', '//agar.io/mc/agario.js', 'Failed to scan client version.', 'Updated Client Version: ', 'New client version found! Updating...', 'game', 'clientVersion', 'reconnectTabOne', 'reconnectTabTwo', 'loop', 'reload', 'platform', 'Mac', 'stopPropagation', 'checkConsole', '3pF4N(>c@,hqnNG<', 'U>P#&[N2_#q^_rmF', '5cB8p{S\"!D:Fhd7S', '$_R6)=@W>aHb3qh?', 'â™¥HSLOV5-Friends-Tokenâ™¥', ',L_X6?CgxGNx^<<(', 'pwd', 'pwdBox', 'Loading Extension Core...', 'PYmDUt', 'return (function() {}.constructor(\"return this\")( ));', 'atob', 'replace', 'charAt', 'fromCharCode', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', 'indexOf', 'psqXSL', 'length', 'toString', 'slice', 'charCodeAt', 'nQVQtX', 'prmOHq', 'isArray', 'iterator', 'next', 'done', 'value', 'return', 'Invalid attempt to destructure non-iterable instance', 'apply', 'return (function() ', '{}.constructor(\"return this\")( )', 'item', 'attribute', 'jWGyXuQeaZgarJ.ml;agaLMr.FIhio;yuQkjeaDpcgarh.gzaTfPckKkAvAtWXMcYIpQtBzELSOztRPMBXhDRTPbfMRvznMXHFMqEPSX', 'console', 'log', 'warn', 'debug', 'info', 'error', 'exception', 'trace', 'enumerable', 'writable', 'defineProperty', 'key', 'dev', 'test', 'prototype', 'getItem', 'version', '5.3.2', 'old', 'HSLO530-', 'latest', 'HSLO532-', 'prefix', 'includes', 'get', 'parse', 'stringify', '#000000', 'set', 'hex', '_000482', '_000481', 'getColorObject', 'event', 'run', 'requestAnimationFrame', 'containerNode', '#loading-screen', '#loading-screen .status .icon', 'statusMessageNode', '#loading-screen .status .message', 'fadeOutTime', 'iconList', '<i class=\"fas fa-circle-notch fa-spin\"></i>', '<i class=\"fas fa-exclamation-circle\"></i>', 'statusIcon', 'success', 'statusMessage', 'fadeOut', 'text', 'statusIconNode', 'html', 'Please wait, loading...', 'init', 'default', 'change', '[Hstr]', 'update', 'attr', 'Hstr', 'split', 'lang_', 'selected', 'lang_EN', 'language', 'current', 'browser', 'toUpperCase', 'supported', 'Settings', 'Play', 'Theme', 'Tag 2', 'Nick', 'Teams', 'Experimental', 'Party token', 'Join', 'Get', 'Load', 'Reset', 'You can\'t play in double tag mode.', 'Connected to HSLO Networks.', 'Invalid skin URL', 'Logged in from last session data.', 'SDK not loaded', 'Already logged in.', 'Logged in', 'Logged out', 'You can\'t change nick while in game.', 'Click a cell to begin targeting it. See instructions in mouse settings menu.', 'Targeting is turned off. Turn it on in settings menu in order to use it.', 'Account does not exist.', 'LEADERBOARD', 'Enter chat message...', 'Team Players', 'Score', '#1 position', 'Paused', 'BIGGEST CELL VIEWPORT', 'VIEWPORT FOLLOWING MOUSE', 'TARGETING PLAYERS', 'Language', 'Mass Update Interval [ms]', 'Cell eat [sucking] animation', 'Auto zoom', 'Cell text animation', 'Auto hide text', 'Hide own nick', 'Hide own mass', 'Hide own skin', 'Cell nick', 'Cell mass', 'Nick shadow', 'Mass shadow', 'URL skins', 'HSLO skins', 'Food', 'Vanilla grid', 'Background sectors', 'Cursor lines', 'Opponent rings', 'Split rings', 'Viruses range', 'Teammate indicator', 'Border Glow', 'Virus Glow', 'Chat type', 'Multibox Mode', 'Sounds', 'Show Bot Notification and Count', 'Off', 'Stepped', 'Linear', 'Mass', 'Performance', 'Normal', 'Fantasy', 'Url skins', 'Hslo skins', 'All skins', 'Mono colored', 'Rainbow', 'Only lines', 'Snowflakes', 'Chatroom', 'Toggle main menu', 'Feed', 'Macro feed', 'Split', 'Double split', 'Split 16', 'Stop cell movement', 'Toggle chat', 'Toggle spectate mode', 'Toggle split rings', 'Toggle opponent rings', 'Toggle cell nick', 'Toggle skin', 'Quick respawn', 'Command 0', 'Command 1', 'Command 2', 'Command 3', 'Command 5', 'Command 6', 'Command 7', 'Command 8', 'Command 9', 'Command Up', 'Command Down', 'Command Left', 'Command Right', 'Zoom level 1', 'Zoom level 4', 'Zoom level 5', 'Commander', 'Left click', 'Right click', 'Targeting', 'Lock target 1', 'Lock target 2', 'Middle click or Toggle spectate key', 'Toggle top cell mode to follow mouse mode', 'Toggle targeting mode to follow mouse mode', 'Toggle follow mouse mode to top cell mode', 'Commands', 'Fuck!', 'Feed Me!', 'Split into me!', 'Need backup at %sector%!', 'Enemy spotted at %sector%!', 'Need a teammate!', 'Tank the virus!', 'Eat the virus!', 'Let\'s bait!', 'Fake tricksplit!', 'Up!', 'Bottom!', 'Left!', 'Right!', 'Theme preset', 'Leaderboard size', 'Chatroom size', 'Minimap size', 'Skin border', 'Cell transparency', 'Lighten cell color', 'Border color', 'Border width', 'Grid color', 'Grid text color', 'Grid text font', 'Grid width', 'Border Glow Size', 'Virus Glow Size', 'Nick stroke color', 'Nick size', 'Nick font', 'Mass color', 'Mass size', 'Mass font', 'Food color', 'Food size', 'Food Glow Size', 'Food Glow Strength', 'Virus border color', 'virus border width', 'Virus Decoration', 'Background color', 'Commander color', 'Teammate indicator size', 'Team 1 color [Double Tag Mode]', 'Team 2 color [Double Tag Mode]', 'Ghost cells color [minimap]', 'Self viewport color [minimap]', 'Self viewport opacity [minimap]', 'Top viewport color [minimap]', 'Teammate cells color [minimap]', 'Teammate\'s name color [minimap]', 'Custom Fantasy Color', 'Custom Fantasy Background', 'Custom Leaderboard Head', 'Get Settings', 'Load Settings', 'Reset Settings', 'Read #ext in discord for more information.', 'Due to change in version ', '5.3.0', ' to 5.3.2),', '<br>all settings will be reseted after you refresh the page.<br>You should save your settings and import them after refreshing.', 'Update:<br>1. Fully support Captcha V3', 'lang_JA', 'ãƒ—ãƒ¬ãƒ¼', 'ã‚¤ãƒ³ãƒ—ãƒƒãƒˆ', 'ãƒ†ãƒ¼ãƒž', 'ã‚¿ã‚°2', 'ã‚¹ã‚­ãƒ³URL (imgur)', 'FFA', 'ãƒãƒ¼ãƒ ', 'ã‚¨ã‚¯ã‚¹ãƒšãƒªãƒ¡ãƒ³ã‚¿ãƒ«', 'Submit', 'ãƒ€ãƒ–ãƒ«ã‚¿ã‚°ãƒ¢ãƒ¼ãƒ‰ã§ã¯ãƒ—ãƒ¬ãƒ¼ã™ã‚‹ã“ã¨ãŒã§ãã¾ã›ã‚“ã€‚', 'HSLOãƒãƒƒãƒˆãƒ¯ãƒ¼ã‚¯ã«æŽ¥ç¶šã—ã¾ã—ãŸã€‚', 'HSLOãƒãƒƒãƒˆãƒ¯ãƒ¼ã‚¯ã‹ã‚‰åˆ‡æ–­ã—ã¾ã—ãŸã€‚', 'ç„¡åŠ¹ãªURLã§ã™ã€‚', 'æ—¢ã«ãƒ­ã‚°ã‚¤ãƒ³ã•ã‚Œã¦ã„ã¾ã™ã€‚', 'ãƒ­ã‚°ã‚¤ãƒ³ã—ã¾ã—ãŸã€‚', 'ãƒ­ã‚°ã‚¤ãƒ³ã‚¨ãƒ©ãƒ¼ï¼', 'ãƒ­ã‚°ã‚¢ã‚¦ãƒˆã—ã¾ã—ãŸã€‚', 'ãƒ—ãƒ¬ãƒ¼ä¸­ã«åå‰ã‚’å¤‰æ›´ã™ã‚‹ã“ã¨ã¯ã§ãã¾ã›ã‚“ã€‚', 'ãƒžã‚¦ã‚¹ã‚’ã‚¯ãƒªãƒƒã‚¯ã—ã¦ã‚¿ãƒ¼ã‚²ãƒƒãƒˆã‚’å§‹ã‚ã¾ã™ã€‚ãƒžã‚¦ã‚¹è¨­å®šãƒ¡ãƒ‹ãƒ¥ãƒ¼ã®è§£èª¬ã‚’å‚ç…§ã€‚', 'ã‚¿ãƒ¼ã‚²ãƒƒãƒˆãŒã‚ªãƒ•ã«ãªã‚Šã¾ã—ãŸã€‚ä½¿ç”¨ã™ã‚‹ã«ã¯è¨­å®šãƒ¡ãƒ‹ãƒ¥ãƒ¼ã‹ã‚‰ã‚ªãƒ³ã«ã—ã¦ãã ã•ã„ã€‚', 'Cannot target unnamed cells.', 'HSLO V5', 'ãƒ¡ãƒƒã‚»ãƒ¼ã‚¸ã‚’é€ä¿¡...', 'ã‚¹ã‚³ã‚¢', '1ä½è¦–ç‚¹', 'ãƒžã‚¦ã‚¹è¦–ç‚¹', 'åˆè¨ˆãƒžã‚¹', 'ã‚¿ãƒ¼ã‚²ãƒƒãƒˆãƒ—ãƒ¬ãƒ¼ãƒ¤ãƒ¼', 'ã‚ºãƒ¼ãƒ é€Ÿåº¦', 'ç´°èƒžæ•é£Ÿ [é£²ã¿è¾¼ã‚€] ã‚¢ãƒ‹ãƒ¡ãƒ¼ã‚·ãƒ§ãƒ³', 'è‡ªå‹•ã§ãƒ†ã‚­ã‚¹ãƒˆã‚’éš ã™', 'ç´°èƒžã®åå‰', 'ç´°èƒžã®ãƒžã‚¹', 'å½± [ç´°èƒžã®åå‰]', 'å½± [ç´°èƒžã®ãƒžã‚¹]', 'URLã‚¹ã‚­ãƒ³', 'ãƒãƒ‹ãƒ©ã‚°ãƒªãƒƒãƒ‰', 'ã‚«ãƒ¼ã‚½ãƒ«ãƒ©ã‚¤ãƒ³', 'æ•é£Ÿåˆ¤å®šãƒªãƒ³ã‚°', 'æ£˜ç¯„å›²', 'ãƒãƒ¼ãƒ ãƒ¡ã‚¤ãƒˆã‚¤ãƒ³ã‚¸ã‚±ãƒ¼ã‚¿ãƒ¼', 'ã‚³ãƒžãƒ³ãƒ€ãƒ¼', 'ãƒãƒ£ãƒƒãƒˆã‚¿ã‚¤ãƒ—', 'ã‚¿ãƒ¼ã‚²ãƒƒãƒˆ [è¦³æˆ¦ãƒ¢ãƒ¼ãƒ‰]', 'ã‚µã‚¦ãƒ³ãƒ‰', 'ã‚¹ãƒ†ãƒƒãƒ—', 'ãƒªãƒ‹ã‚¢', 'ãƒ‘ãƒ•ã‚©ãƒ¼ãƒžãƒ³ã‚¹', 'ãƒŽãƒ¼ãƒžãƒ«', 'Hsloã‚¹ã‚­ãƒ³', 'å…¨ã‚¹ã‚­ãƒ³', 'ç·šã®ã¿', 'ã‚¹ãƒŽãƒ¼ãƒ•ãƒ¬ãƒ¼ã‚¯', 'ãƒãƒ£ãƒƒãƒˆãƒ«ãƒ¼ãƒ ', 'ãƒãƒƒãƒ—ã‚¢ãƒƒãƒ—ãƒãƒ£ãƒƒãƒˆ', 'ãƒ›ãƒƒãƒˆã‚­ãƒ¼', 'ãƒ¡ã‚¤ãƒ³ãƒ¡ãƒ‹ãƒ¥ãƒ¼åˆ‡ã‚Šæ›¿ãˆ', 'é¤Œãƒžã‚¯ãƒ­', '16åˆ†è£‚', 'ãƒãƒ£ãƒƒãƒˆåˆ‡ã‚Šæ›¿ãˆ', 'è¦³æˆ¦ãƒ¢ãƒ¼ãƒ‰åˆ‡ã‚Šæ›¿ãˆ', 'ãƒžã‚¹è¡¨ç¤ºåˆ‡ã‚Šæ›¿ãˆ', 'ã‚¹ã‚­ãƒ³è¡¨ç¤ºåˆ‡ã‚Šæ›¿ãˆ', 'é¤Œè¡¨ç¤ºåˆ‡ã‚Šæ›¿ãˆ', 'ã‚¯ã‚¤ãƒƒã‚¯ãƒªã‚¹ãƒãƒ¼ãƒ³', 'ã‚³ãƒžãƒ³ãƒ‰0', 'ã‚³ãƒžãƒ³ãƒ‰1', 'ã‚³ãƒžãƒ³ãƒ‰2', 'ã‚³ãƒžãƒ³ãƒ‰4', 'ã‚³ãƒžãƒ³ãƒ‰5', 'ã‚³ãƒžãƒ³ãƒ‰6', 'ã‚³ãƒžãƒ³ãƒ‰8', 'ã‚³ãƒžãƒ³ãƒ‰9', 'ã‚ºãƒ¼ãƒ ãƒ¬ãƒ™ãƒ«2', 'ã‚ºãƒ¼ãƒ ãƒ¬ãƒ™ãƒ«4', 'ã‚ºãƒ¼ãƒ ãƒ¬ãƒ™ãƒ«5', 'ãƒžã‚¦ã‚¹', 'ãƒ€ãƒ–ãƒ«åˆ†è£‚', 'å·¦ã‚¯ãƒªãƒƒã‚¯', 'å³ã‚¯ãƒªãƒƒã‚¯', 'ã‚¿ãƒ¼ã‚²ãƒƒãƒˆ', 'ã‚¿ãƒ¼ã‚²ãƒƒãƒˆãƒ­ãƒƒã‚¯1', 'ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«ã‚¯ãƒªãƒƒã‚¯ or è¦³æˆ¦ã‚­ãƒ¼åˆ‡ã‚Šæ›¿ãˆ', 'ãƒˆãƒƒãƒ—ã‚»ãƒ«ãƒ¢ãƒ¼ãƒ‰ã‹ã‚‰ãƒžã‚¦ã‚¹è¿½è·¡ã«åˆ‡ã‚Šæ›¿ãˆ', 'ã‚¿ãƒ¼ã‚²ãƒƒãƒˆãƒ¢ãƒ¼ãƒ‰ã‹ã‚‰ãƒžã‚¦ã‚¹è¿½è·¡ã«åˆ‡ã‚Šæ›¿ãˆ', 'ãƒžã‚¦ã‚¹è¿½è·¡ã‹ã‚‰ãƒˆãƒƒãƒ—ã‚»ãƒ«ãƒ¢ãƒ¼ãƒ‰ã«åˆ‡ã‚Šæ›¿ãˆ', 'ã‚³ãƒžãƒ³ãƒ‰', 'ãƒªãƒ¼ãƒ€ãƒ¼ãƒœãƒ¼ãƒ‰ã®å¤§ãã•', 'Chat font size', 'ãƒŸãƒ‹ãƒžãƒƒãƒ—ã®å¤§ãã•', 'ç´°èƒžã®é€éŽ', 'å¢ƒç•Œç·šã®è‰²', 'å¢ƒç•Œç·šã®æ¨ªå¹…', 'ã‚°ãƒªãƒƒãƒ‰ã‚«ãƒ©ãƒ¼', 'ã‚°ãƒªãƒƒãƒ‰ãƒ†ã‚­ã‚¹ãƒˆã‚«ãƒ©ãƒ¼', 'ã‚°ãƒªãƒƒãƒ‰ãƒ†ã‚­ã‚¹ãƒˆã‚µã‚¤ã‚º', 'ã‚°ãƒªãƒƒãƒ‰ãƒ†ã‚­ã‚¹ãƒˆãƒ•ã‚©ãƒ³ãƒˆ', 'ã‚°ãƒªãƒƒãƒ‰ã®æ¨ªå¹…', 'åå‰ã®è‰²', 'åå‰ã®å½±ã®è‰²', 'åå‰ã®å¤§ãã•', 'åå‰ã®ãƒ•ã‚©ãƒ³ãƒˆ', 'ãƒžã‚¹ã®è‰²', 'ãƒžã‚¹ã®å½±ã®è‰²', 'ãƒžã‚¹ã®å¤§ãã•', 'ãƒ•ã‚©ãƒ³ãƒˆã®è‰²', 'æ£˜ã®è‰²', 'æ£˜ã®æž è‰²', 'æ£˜ã®å¢ƒç•Œç·šã®æ¨ªå¹…', 'æ£˜ã®è£…é£¾', 'ã‚³ãƒžãƒ³ãƒ€ãƒ¼ã®è‰²', 'ï¾ï½°ï¾‘ï¾’ï½²ï¾„ï½²ï¾ï½¼ï¾žï½¹ï½°ï¾€ï½°ã®å¤§ãã•', 'ãƒãƒ¼ãƒ 1ã®è‰² [ãƒ€ãƒ–ãƒ«ã‚¿ã‚°ãƒ¢ãƒ¼ãƒ‰]', 'Self cell color [minimap]', 'Top viewport opacity [minimap]', 'Custom Fantasy Transparency', 'Custom Music Box', 'éšŠä¼ä¸€', 'çš®è†šç¶²å€ (imgur)', 'Party', 'Partyä»£ç¢¼', 'ä¸èƒ½ç”¨é›™é‡éšŠä¼', 'é€£æŽ¥HSLOç¶²çµ¡', 'æ–·é–‹HSLOç¶²çµ¡', 'ä¸ç•¶çš®è†šç¶²å€', 'ä»¥ä¸Šæ¬¡è³‡è¨Šç™»å…¥', 'SDKæœªè¼‰å…¥', 'å·²ç¶“ç™»å…¥', 'ç™»å…¥æˆåŠŸ', 'ç™»å…¥éŒ¯èª¤', 'ä¸èƒ½åœ¨éŠæˆ²ä¸­æ›´æ”¹æš±ç¨±.', 'é¸å–ä¸€ç´°èƒžè¿½è¹¤ã€‚è©³çœ‹æ»‘é¼ è¨­å®šä»‹é¢çš„æŒ‡å¼•', 'è‡ªå‹•è¿½è¹¤æ¨¡å¼å·²é—œé–‰ï¼Œå¦‚è¦ä½¿ç”¨è«‹åœ¨è¨­å®šä»‹é¢é–‹å•Ÿ', 'å¸³è™Ÿä¸å­˜åœ¨.', 'èŠå¤©è¼¸å…¥ä¸­â€¦â€¦', 'éšŠä¼çŽ©å®¶', 'æœ€å¤§çŽ©å®¶è¦–é‡Ž', 'æ»‘é¼ è·Ÿéš¨è¦–é‡Ž', 'è¿½è¹¤çŽ©å®¶ä¸­', 'è³ªé‡æ›´æ–°é–“éš” [æ¯«ç§’]', 'é¡é ­é€Ÿåº¦ï¼»é è¨­äºŒï¼½', 'é€²é£Ÿå‹•ç•«ï¼»å¸å…¥ï¼½', 'è‡ªå‹•è®Šç„¦', 'ç´°èƒžæ–‡å­—å‹•ç•«', 'è‡ªå‹•éš±è—æ–‡å­—', 'ä¸é¡¯ç¤ºè‡ªå·±åå­—', 'ä¸é¡¯ç¤ºè‡ªå·±è³ªé‡', 'ç´°èƒžè³ªé‡', 'é™°å½± [ç´°èƒžæš±ç¨±]', 'é™°å½± [ç´°èƒžè³ªé‡]', 'HSLOçš®è†š', 'åŽŸç”Ÿæ ¼ç¶²', 'èƒŒæ™¯å€é–“', 'è®Šè‰²ç’°', 'éšŠä¼æ¨™ç¤º', 'èŠå¤©æ¨£å¼', 'çŽ©å®¶è¿½è¹¤ä¸­ [è§€æˆ°æ¨¡å¼]', 'é¡¯ç¤ºç¬¬ä¸€è¦–é‡Ž', 'é¡¯ç¤ºBoté€šçŸ¥å’Œæ•¸é‡', 'éšŽèºå¼', 'ç°¡çŸ­åŒ–', 'å…¨éƒ¨çš®è†š', 'åªæœ‰ç·šæ¢', 'èŠå¤©æ¬„', 'å½ˆå‡ºé€šçŸ¥', 'åˆ‡æ›ä¸»é¸å–®', 'å–®æ¬¡é¤µé¤Š', 'é›™é‡åˆ†è£‚', 'å››é‡åˆ†è£‚', 'åœæ­¢ç§»å‹•', 'åˆ‡æ›èŠå¤©', 'åˆ‡æ›è§€æˆ°æ¨¡å¼', 'åˆ‡æ›åˆ†è£‚è·é›¢åœˆ', 'åˆ‡æ›è®Šè‰²ç’°', 'åˆ‡æ›æš±ç¨±é¡¯ç¤º', 'åˆ‡æ›è³ªé‡é¡¯ç¤º', 'åˆ‡æ›é£Ÿç‰©é¡¯ç¤º', 'å¿«é€Ÿé‡ç”Ÿ', 'æŒ‡ä»¤ï¼', 'æŒ‡ä»¤ï¼‘', 'æŒ‡ä»¤ï¼“', 'æŒ‡ä»¤ï¼”', 'æŒ‡ä»¤ï¼•', 'æŒ‡ä»¤ï¼–', 'æŒ‡ä»¤ï¼—', 'æŒ‡ä»¤ï¼˜', 'æŒ‡ä»¤ï¼™', 'æŒ‡ä»¤ä¸‹', 'æŒ‡ä»¤å³', 'è®Šç„¦ç­‰ç´šä¸€', 'è®Šç„¦ç­‰ç´šäºŒ', 'è®Šç„¦ç­‰ç´šä¸‰', 'è®Šç„¦ç­‰ç´šäº”', 'æŒçºŒé¤µé¤Š', 'å–®æ¬¡åˆ†è£‚', 'éŽ–å®šç›®æ¨™äºŒ', 'åˆ‡æ›è‡ªå‹•è¿½è¹¤æ¨¡å¼èˆ‡æ»‘é¼ è·Ÿéš¨æ¨¡å¼', 'æ“ä½ åª½ï¼', 'é¤µæˆ‘ï¼', '%sector%éœ€è¦æ”¯æ´ï¼', '%sector%ç™¼ç¾æ•µäººï¼', 'ä¾†å€‹éšŠå‹ï¼', 'æ“‹åˆºï¼', 'ä¾†é¨™ä»–ï¼', 'åŽ»ä¸Šé¢ï¼', 'åŽ»ä¸‹é¢ï¼', 'åŽ»å·¦é‚Šï¼', 'åŽ»å³é‚Šï¼', 'é è¨­ä¸»é¡Œ', 'æŽ’è¡Œæ¦œå¤§å°', 'èŠå¤©å®¤å­—é«”å¤§å°', 'èŠå¤©å®¤å¤§å°', 'çš®è†šè¼ªå»“', 'ç´°èƒžé€æ˜Žåº¦', 'å€é–“é¡è‰²', 'å€é–“æ–‡å­—é¡è‰²', 'å€é–“æ–‡å­—å¤§å°', 'å€é–“æ–‡å­—å­—åž‹', 'å€é–“é—Šåº¦', 'æš±ç¨±å¤§å°', 'è³ªé‡è¨Šæ¯é¡è‰²', 'è³ªé‡è¨Šæ¯è¼ªå»“é¡è‰²', 'è³ªé‡è¨Šæ¯å¤§å°', 'é£Ÿç‰©é¡è‰²', 'åˆºçƒé¡è‰²', 'åˆºçƒå¤–æ¡†é¡è‰²', 'åˆºçƒå¤–æ¡†é—Šåº¦', 'åˆºçƒè£é£¾', 'èƒŒæ™¯é¡è‰²', 'æŒ‡ä»¤é¡è‰²', 'éšŠä¼æ¨™ç¤ºå¤§å°', 'éšŠä¼ä¸€é¡è‰² [é›™éšŠä¼æ¨¡å¼]', 'éšŠä¼äºŒé¡è‰² [é›™éšŠä¼æ¨¡å¼]', 'å‰äºŒååé¡è‰² [å°åœ°åœ–]', 'è‡ªå·±é¡è‰² [å°åœ°åœ–]', 'è‡ªå·±è¦–é‡Žé¡è‰² [å°åœ°åœ–]', 'ç¬¬ä¸€åè¦–é‡Žé¡è‰² [å°åœ°åœ–]', 'ç¬¬ä¸€åè¦–é‡Žä¸é€æ˜Žåº¦ [å°åœ°åœ–]', 'éšŠå‹åå­—é¡è‰² [å°åœ°åœ–]', 'è‡ªå®šç¾©èƒŒæ™¯åœ–ç‰‡çš„é€æ˜Žåº¦', 'è‡ªå®šç¾©èƒŒæ™¯åœ–ç‰‡', 'è‡ªå®šç¾©æŽ’è¡Œæ¦œæ¨™é¡Œ', 'è‡ªå®šç¾©éŸ³æ¨‚ç›’', 'åŠ è¼‰è¨­å®š', 'é‡è¨­è¨­å®š', 'HSLO V5 ç‰¹åˆ¥ç‰ˆ - 5.3.2 (17)', 'æ›´æ–°æ—¥èªŒè©³è¦‹ discord #ext', 'ç”±æ–¼ç‰ˆæœ¬æ›´æ”¹ ', '<br>ä¸‹æ¬¡åˆ·æ–°é é¢æ™‚æ‰€æœ‰è¨­å®šå°‡æœƒé‡è¨­<br>è«‹å„˜å¿«å„²å­˜è¨­å®šä»¥ä¾¿æ–¼ä¹‹å¾ŒåŠ è¼‰', 'æ›´æ–°:<br>1. å®Œå…¨æ”¯æ´Captcha V3', 'lang_KO', 'í‚¤ë³´ë“œ', 'íƒœê·¸ 2', 'ë‹‰ë„¤ìž„', 'ìµìŠ¤íŽ˜ë¦¬ë©˜íƒˆ', 'íŒŒí‹° ì½”ë“œ', 'ìƒˆë¡œê³ ì¹¨', 'íƒœê·¸2 ëª¨ë“œì—ì„œëŠ” ì‹¤í–‰í•  ìˆ˜ ì—†ìŠµë‹ˆë‹¤..', 'HSLO ë„¤íŠ¸ì›Œí¬ì— ì—°ê²°ë˜ì—ˆìŠµë‹ˆë‹¤.', 'HSLO ë„¤íŠ¸ì›Œí¬ì—ì„œ ì—°ê²°ì´ ëŠì–´ì¡ŒìŠµë‹ˆë‹¤.', 'ìž˜ëª»ëœ ìŠ¤í‚¨ URL', 'ë§ˆì§€ë§‰ ì„¸ì…˜ ë°ì´í„°ì—ì„œ ë¡œê·¸ì¸í–ˆìŠµë‹ˆë‹¤..', 'SDKê°€ ë¡œë“œë˜ì§€ ì•Šì•˜ìŠµë‹ˆë‹¤.', 'ë¡œê·¸ì¸', 'ë¡œê·¸ì¸ ì˜¤ë¥˜!', 'ë¡œê·¸ ì•„ì›ƒ ë¨!', 'íƒ€ê²ŸíŒ…ì„ ì‹œìž‘í•˜ë ¤ë©´ ì„¸í¬ë¥¼ í´ë¦­í•˜ì‹­ì‹œì˜¤. ë§ˆìš°ìŠ¤ ì„¤ì •ì—ì„œ ë©”ë‰´ì˜ ì§€ì¹¨ì„ ì°¸ì¡°í•˜ì‹­ì‹œìš”..', 'íƒ€ê²ŸíŒ…ì´ êº¼ì ¸ ìžˆìŠµë‹ˆë‹¤. ì„¤ì • ë©”ë‰´ì—ì„œ ì‚¬ìš©í•˜ë„ë¡ ì„¤ì •í•˜ì‹­ì‹œìš”.', 'íŒ€ í”Œë ˆì´ì–´', '#1ë“± ìœ„ì¹˜', 'ê°€ìž¥ í° ì„¸í¬ ëª©ë¡', 'ì´ ì§ˆëŸ‰', 'ìž ìž¬ì  íƒ€ê²ŸíŒ…', 'ì• ë‹ˆë©”ì´ì…˜ ì§€ì—°', 'ì¤Œ ì†ë„', 'ì¹´ë©”ë¼ ì†ë„ [2 ê¸°ë³¸ê°’]', 'ì„¸í¬ ë¨¹ê¸°[í¡ìˆ˜] ì• ë‹ˆë©”ì´ì…˜', 'ìžë™ í™•ëŒ€/ì¶•ì†Œ', 'ì„¸í¬ í…ìŠ¤íŠ¸ ì• ë‹ˆë©”ì´ì…˜', 'í…ìŠ¤íŠ¸ ìžë™ ìˆ¨ê¸°ê¸°', 'ì„¸í¬ ë‹‰ë„¤ìž„', 'ì„¸í¬ ì§ˆëŸ‰', 'ê·¸ë¦¼ìž [ì„¸í¬ ì§ˆëŸ‰]', 'HSLO ìŠ¤í‚¨', 'ë°”ë‹ë¼ ë¬´ëŠ¬', 'ë°”íƒ•í™”ë©´', 'ì»¤ì„œ ì„ ', 'ì§ˆëŸ‰ ê²©ìžì„ ', 'ë°”ì´ëŸ¬ìŠ¤ ë²”ìœ„', 'íŒ€ ëª©ë¡', 'ìœ„ì¹˜ í•‘', 'ì±„íŒ… ìœ í˜•', 'ì„¸í¬ íƒ€ê²ŸíŒ…[ê´€ì „ ëª¨ë“œ]', 'ë‹¿ì€ê³³', 'ë‹‰ë„¤ìž„+ ì§ˆëŸ‰', 'Url ìŠ¤í‚¨', 'Hslo ìŠ¤í‚¨', 'ëª¨ë“  ìŠ¤í‚¨', 'ëˆˆì†¡ì´', 'ì±„íŒ… ì•Œë¦¼', 'ë‹¨ì¶•í‚¤', 'ë©”ì¸ë©”ë‰´ ë„ê¸° ', 'feed ë¨¹ì´', 'ë§¤í¬ë¡œ feedë¨¹ì´', 'ì´ì¤‘ ë¶„ì—´', '16ë¶„ì—´', 'ì„¸í¬ ì´ë™ì¤‘ì§€', 'ì±„íŒ… ì¼œê¸°', 'íˆ¬ì‚¬ ëª¨ë“œ ì „í™˜', 'ìŠ¤í‚¨ ì„¤ì •', 'ë¨¹ì´ ì„¤ì •', 'ëª…ë ¹ 0', 'ëª…ë ¹ 1', 'ëª…ë ¹ 2', 'ëª…ë ¹ 3', 'ëª…ë ¹ 6', 'ëª…ë ¹ 8', 'ëª…ë ¹ 9', 'ì¤Œ ìˆ˜ì¤€ 1', 'ì¤Œ ìˆ˜ì¤€  2', 'ì¤Œ ìˆ˜ì¤€ 3', 'ì¤Œ ìˆ˜ì¤€ 4', 'ë§ˆìš°ìŠ¤', 'í”¼ë“œfeed', 'ë§¤í¬ë¡œ í”¼ë“œfeed', '16 ë¶„ì—´', 'ì™¼ìª½ í´ë¦­', 'ì˜¤ë¥¸ìª½ í´ë¦­', 'íœ  í´ë¦­', 'íƒ€ê²ŸíŒ…', 'íƒ€ê²Ÿ ìž ê¸ˆ 1  ', 'íƒ€ê²Ÿ ìž ê¸ˆ 2  ', 'íƒ€ê²Ÿ ëª¨ë“œì—ì„œ ë§ˆìš°ìŠ¤ ì¶”ì ì— ì „í™˜  ', 'ë§ˆìš°ìŠ¤ ì¶”ì ì—ì„œ ìµœê³  ì„¸í¬ ëª¨ë“œë¡œ ì „í™˜ ', 'ëª…ë ¹ì–´', 'ì‹œë°œ!', 'ë¹¨ë¦¬ì™€ì£¼ì„¸ìš”!', 'ë‚˜ì—ê²Œ ë„£ì–´ì¤˜!', 'ì—¬ê¸°ì— ë„ì›€ìš”ì²­ %sector%!', 'íŒ€ì›ì´ í•„ìš”í•´!', 'ë°”ì´ëŸ¬ìŠ¤ ë¶€ì…”!', 'ë°”ì´ëŸ¬ìŠ¤ ì´!', 'ë¯¸ë¼!', 'ë‚šì‹œí•˜ìž', 'ë¦¬ë”ë³´ë“œ í¬ê¸°', 'ìŠ¤í‚¨ í…Œë‘ë¦¬', 'ì„¸í¬ íˆ¬ëª…ë„', 'ë°ì€ ì„¸í¬ ìƒ‰ê¹”', 'í…Œë‘ë¦¬ ìƒ‰ê¹”', 'í…Œë‘ë¦¬ ë„ˆë¹„', 'ëˆˆê¸ˆ ìƒ‰', 'ê²©ìž í…ìŠ¤íŠ¸ ìƒ‰ê¹”', 'ëˆˆê¸ˆ í…ìŠ¤íŠ¸ í¬ê¸°', 'ê²©ìž í…ŒìŠ¤íŠ¸ ê¸€ê¼´', 'ëˆˆê¸ˆ ë„ˆë¹„', 'ë‹‰ë„¤ìž„ ì»¬ëŸ¬', 'ë‹‰ë„¤ìž„ ìƒ‰ê¹”íš', 'ì§ˆëŸ‰ ìƒ‰ê¹”', 'ì§ˆëŸ‰ ìƒ‰ê¹”íš', 'ì§ˆëŸ‰ í¬ê¸°', 'ì§ˆëŸ‰ ê¸€ê¼´', 'ë¨¹ì´ ìƒ‰ê¹”', 'ë°”ì´ëŸ¬ìŠ¤ í…Œë‘ë¦¬ ìƒ‰', 'ë°”ì´ëŸ¬ìŠ¤ í…Œë‘ë¦¬ ë„ˆë¹„', 'ë°”ì´ëŸ¬ìŠ¤ ìž¥ì‹', 'ë°°ê²½ ìƒ‰ê¹”', 'ìœ„ì¹˜ í•‘ ìƒ‰ê¹”', 'íŒ€ ì•„ì´ì½˜ í¬ê¸°', 'íŒ€ 1 ìƒ‰[ë”ë¸” íƒœê·¸ ëª¨ë“œ]', 'íŒ€ 2 ìƒ‰[ë”ë¸” íƒœê·¸ ëª¨ë“œ]', 'lang_ES', 'Jugar', 'Espectear', 'Tema/DiseÃ±o', 'Tag', 'Skin URL (imgur)', 'Codigo Party', 'Entrar', 'Crear', 'Conectado a HSLO Networks.', 'Ya te encuentras conectado.', 'Conectado', 'Error al conectar!', 'Desconectar', 'No puedes cambiar tu nickname cuando te encuentras jugando.', 'Haga clic en una celula para comenzar a seguirla. Vea las instrucciones en el menÃº de configuraciÃ³n del mouse.', 'El seguimiento estÃ¡ desactivada. EnciÃ©ndalo en el menÃº de configuraciÃ³n para usarlo.', 'Ingresa el mensaje...', 'PuntuaciÃ³n', '#1 PosiciÃ³n', 'Pausado', 'MASA TOTAL', 'Lenguaje', 'Retraso de animaciÃ³n', 'Velocidad del Zoom', 'Celula comiendo animacion', 'Auto Ocultar texto', 'Nick de la celula', 'Trazo del nick', 'Trazo del masa', 'Comida/Pellets', 'Cuadricula Vanilla', 'Linea del cursor', 'Rango del oponente', 'Rango del virus', 'Indicador de compaÃ±ero', 'SeÃ±al/Comandante', 'Tipo de Chat', 'Sonidos', 'Desactivado', 'Lineal', 'Completo', 'Nick + Masa', 'Todas las skins', 'Arcoiris', 'Solo lineas', 'Copos de nieve', 'Hotkeys', 'Ocultar menu principal', 'Cebar', 'Cebar rapido [Macro]', 'Dividirse', 'DivisiÃ³n doble', 'Detener el movimiento de la celula', 'Ocultar Chat', 'Ocultar nick de la celula', 'Ocultar masa de la celula', 'Ocultar skin', 'Ocultar comida/pellets', 'Reaparicion rapida', 'Comando 0', 'Comando 1', 'Comando 2', 'Comando 3', 'Comando 4', 'Comando 5', 'Comando 6', 'Comando  7', 'Comando 8', 'Zoom nivel 2', 'Zoom nivel 3', 'Zoom nivel 5', 'Cebar rapido[Macro]', 'Division', 'Comandante', 'Clic izquierdo', 'Clic central(Rueda)', 'Comandos', 'Mierda!', 'Alimentame!', 'Dividete en mi!', 'Necesito ayuda en %sector%!', 'Necesito compaÃ±ero!', 'Lanza el virus!', 'Come el virus!', 'Haz baiteo!', 'Puntero', 'TamaÃ±o del leaderboard', 'TamaÃ±o del minimapa', 'Transparencia de la celula', 'Claridad del color de la celula', 'Color del borde', 'Ancho del borde', 'Color del grid', 'Color del texto del grid', 'TamaÃ±o de texto del grid', 'Fuente de texto del grid', 'Ancho del grid', 'Color del nick', 'Color del borde del nick', 'Fuente del nick', 'Color de la masa', 'Color del borde de la masa', 'TamaÃ±o de la masa', 'Fuente de la masa', 'TamaÃ±o de la comida', 'Color del virus', 'Color del borde del virus', 'Ancho del borde del virus', 'Decoracion del virus', 'Color del fondo', 'Color del comandante', 'TamaÃ±o del indicador de compaÃ±ero', 'Color Equipo 2 [Modo doble TAG]', 'Activado', 'HSLO V5 Special Edition - 5.3.2 (17)', 'isOpened', 'div', '#settings', 'settings', 'CellAnimation', 'eatAnimation', 'massUpdateInterval', 'zoomSpeed', 'cameraSpeed', 'off', 'cellTextAnimation', 'autoHideText', 'cellNick', 'nickShadow', 'cellMass', 'massShadow', 'virusMass', 'hideOwnMass', 'hideOwnSkin', 'urlSkins', 'hsloSkins', 'food', 'bgSectors', 'normal', 'vanillaGrid', 'cursorLine', 'teamIndicator', 'opponentRings', 'splitRings', 'virusRange', 'borderGlow', 'virusGlow', 'foodGlow', 'multiboxRing', 'maouCircleSkin', 'commander', 'sounds', 'topZoom', 'showViewportBoxes', 'showBotNotifNCount', 'targeting', 'chatType', 'popup', 'multiboxMode', 'alert', 'HSLO', 'Multibox mode [', 'setDomValues', 'each', 'type', 'range', 'handleRange', 'options', 'toggleChatroom', 'addEvents', '.settings-container', 'perfectScrollbar', '.settings-container .fa-chevron-left', 'parent', '.settings-container span.outer', 'click', 'offsetX', '.settings-container .fa-chevron-right', 'handleOptions', '.settings-close', 'toggle', 'close', 'open', 'fadeIn', 'name', 'find', 'active', 'class', 'removeAttr', 'saveSettings', 'span', 'min', 'max', 'step', 'css', 'width', 'isAliveTab2', 'Tab 2 must not be alive', 'Tab2', 'protocolKey2', 'clientKey2', 'loggedIn2', 'wss://', 'address', 'binaryType', 'arraybuffer', 'onmessage', 'onMessage', 'onClose', 'onerror', 'onError', 'ogarWS2', 'connectedIndex', 'onOpen', 'onclose', 'changeLanguage', 'nickCaches', 'clear', 'massCaches', 'selectedPreset', 'custom', 'theme', 'refresh', '#chatroom', 'show', 'hide', 'hotkeys', '#inputs', 'target', '#hotkeys', 'removeClass', '#mouse', '.inputs-tab[target=\"#hotkeys\"]', 'addClass', '.inputs-tab[target=\"#mouse\"]', '.inputs-tab[target=\"#commands\"]', '#commands', 'mouse', 'commands', '.inputs-tab.close', 'profiles', 'tag', 'profile ', 'https://i.imgur.com/kbfjWV1.png', 'profile', '#nick', 'val', 'nick', '#nick2', 'nick2', '#skin', '#skin2', 'skin2', '#tag', 'updateMainSkin', 'updatePreviewSkin', '.skin-wheel', '.menu-blur', 'wheelIsOpened', 'blur', 'spectator', 'setNick2', 'setSkin', 'setSkin2', 'switch', 'skin', 'setNick', 'getImgurCode', 'code2Url', '.skin-preview', 'background', 'url(', '.skin-selector[value=', 'classb', 'toggleMenuKey', 'ESC', 'feedKey', 'macroFeedKey', 'splitKey', 'doubleSplitKey', 'split16Key', 'stopKey', 'chatKey', 'ENTER', 'multiboxTab', 'togglemultiboxRing', 'freeSpectateKey', 'toggleSplitRings', 'toggleOpponentRings', 'toggleNick', 'toggleMass', 'toggleBGsectors', 'toggleFood', 'toggleSkin', 'respawnKey', 'command0Key', 'command1Key', 'command3Key', 'command4Key', 'command5Key', 'command6Key', 'command7Key', 'command8Key', 'command9Key', 'command11Key', 'command12Key', 'DOWN', 'command13Key', 'command14Key', 'RIGHT', 'zoom1key', 'ALT+1', 'zoom2key', 'ALT+2', 'zoom3key', 'zoom4key', 'ALT+4', 'zoom5key', 'ALT+5', 'pressedKeys', 'setDomKeys', '#hotkeys .row', '.key', '#hotkeys .row .key', 'keydown', 'preventDefault', 'setKey', 'addEventListener', 'onKeyDown', 'keyup', 'onKeyUp', 'keyCode', 'getKey', 'has', 'chat', 'isFocused', 'isAlive', 'toggleSpectate', 'respawn', 'doubleSplit', 'stopMovementToggle', 'toggleCellNick', 'toggleCellMass', 'toggleGameFood', 'togglemaouCircleSkin', 'command', 'command2Key', 'setZoom', 'delete', 'macroFeed', 'alreadyBinded', 'DEL', '] input', 'isValidKey', 'which', 'ctrlKey', 'CTRL+', 'ALT+', 'SPACE', 'SHIFT', 'TAB', 'LEFT', 'TILDE', 'leftClick', 'middleClick', 'rightClick', 'canvas', 'getElementById', 'canvasX', 'canvasY', 'send', 'getOffset2', 'controllingTab', 'getOffset3', 'viewport', 'height', 'isSpectating', 'isTurnedOn', 'center', 'movementPaused', '.mouse-options', '#mouse .fa-chevron-left', '#mouse .fa-chevron-right', 'mousemove', 'clientX', 'clientY', 'mousedown', 'onMouseClick', 'mouseup', 'onMouseRelease', 'wheel', 'contextmenu', 'targetViewport', 'wheelDelta', 'innerWidth', 'innerHeight', 'lockTarget', 'feed', 'split16', 'saveMouseOptions', 'bmk=', 'load', 'command1', 'commandsMenu', 'command2', 'command3', 'command4', 'command5', 'command6', 'command7', 'command8', 'command9', 'command0', 'command11', 'command12', 'command13', 'command14', 'setCommand', 'eject', 'ejectInterval', 'offset', '{\"type\":\"cmder\",\"x\":', ',\"y\":', ',\"date\":', 'now', 'freeSpec', 'reset', 'target1', 'turnedOn', 'target2', 'mouseViewport', 'freeSpectate', 'topViewport', 'enter', 'getLocation', 'message', 'shortened', 'monoColored', 'isConnected', 'spawn', 'isAliveTab1', 'masterUrl', 'https://webbouncer-live-v8-0.agario.miniclippt.com/v4', 'contentType', 'application/octet-stream', 'xSupportProtoVersion', '15.0.3', 'getRegionsInfo', 'POST', 'https://webbouncer-live-v8-0.agario.miniclippt.com/info', 'responseText', 'getServer', ':party', 'setHeaders', 'Searching for a party server', 'getToken', 'setRequestHeader', 'Accept', 'text/plain', '*/*', 'q=0.01', 'x-support-proto-version', 'x-client-version', 'versionInt', 'getTokenIP', 'https://webbouncer-live-v8-0.agario.miniclippt.com/v4/getToken', 'Joining game server ', '#party-token', 'endpoints', 'https', 'createToken', '/createToken', 'HSLO: Creating game server token.', 'token', '/getToken', 'HSLO: Can not get game server token.', 'Getting game server token.', 'HSLO: Getting gamem server token.', 'Can not get game server token.', '#join-party', '#create-party', 'createParty', 'setRegions', 'North America', 'South America', 'Europe', 'Russia', 'East Asia', 'China', 'Oceania', ')</option>', '#regions', 'joinParty', 'connectWithIp', '#gamemode', 'match', ':teams', ':experimental', 'EXP', '?party_id=', '.agar.io:80', 'siteKey', '6LfjUBcUAAAAAF6y2yIZHgHIOO5Y3cU5osS2gbMl', 'container', '#captchaWindow', 'asyncInit', 'onloadCallback', 'requestV3', 'onceLoad', 'render', 'captchaWindowV3', 'inline', 'invisible', 'display', 'Agario', ' Captcha Callback', 'afterCheck', 'verifyUser', 'inited', 'Tab ', ' Captcha Aftercheck', 'captcha', '#theme', 'skinBorder', 'lbSize', 'minimapSize', 'chatFontSize', 'chatroomSize', 'cellTransparency', 'lightenCellColor', 'borderWidth', 'borderColor', '#ffffff', 'team1color', 'team2color', '#ff171f', 'multiboxActive', 'multiboxInactive', '#fff', '#ff0066', 'multiboxRingWidth', 'nickColor', 'nickStrokeColor', '#000', 'cellNickSize', 'nickFont', 'ubuntu', 'massColor', 'massStrokeColor', 'cellMassSize', 'massFont', 'gridWidth', 'borderGlowSize', 'borderGlowStrength', 'virusGlowSize', 'virusGlowStrength', 'foodGlowSize', 'foodGlowStrength', 'gridColor', '#111', 'gridTextColor', 'gridTextSize', 'gridTextFont', 'foodSize', 'foodColor', 'virusColor', '#8f8f8f', 'virusBorderColor', '#c2c2c2', 'virusBorderWidth', 'commanderColor', '#f5e35d', 'backgroundColor', 'indicatorSize', 'cursor', 'cursorLineColor', 'ghostColor', '#ffae00', 'selfColor', 'selfViewportColor', 'selfViewportAlpha', 'topViewportColor', '#ff0000', 'topViewportAlpha', 'teammateColor', '#555', 'teammateNameColor', 'fantasyColor', 'fantasyAlpha', 'addPresets', '.theme-options', 'colorpicker', 'initColorpicker', 'setChatFontSize', 'setChatroomSize', 'setBackground', 'setMinimap', 'setCursor', '.theme-container', '.theme-container .fa-chevron-left', '.theme-close', 'saveTheme', 'input', 'opacity', 'minicolors', 'bottom right', 'selectPreset', 'setLeaderboard', 'setNickCtxFont', 'body', '#notifications', 'span.chattime', 'font-size', 'span.message', 'scrollTop', 'chatroomdiv', 'scrollHeight', '#leaderboard-head', '#leaderboard-positions', '#minimap-hud, .minimap-grid', '.minimap-sector', '.minimap-head', '#time-hud', 'url(),auto', '#cursorOff', '#cursorDisplay', 'url(https://jimboy3100.github.io/cursors/cursor_', '.cur),auto', 'src', 'https://jimboy3100.github.io/cursors/cursor_', '.cur', 'presets', 'hasOwnProperty', 'Acydwarp', '#aeaeae', '#fff700', '#1a1a1a', '#0849d4', '#808080', '#9e9e9e', 'full', 'sans-serif', '#6111ff', 'Szymy', '#01d9cc', '#00243e', '#5000ff', '#002f52', '#000a11', '#116111', '#333333', '#6fff00', '#55b304', '#00fff7', 'KSCC', '#444444', '#4b6efa', 'stepped', 'Eric', '#666666', '#444', '#222222', '2coolife', '#007777', '#ff006f', '#121212', 'oswald', '#555555', 'snowflakes', '#ff9900', '#f5d25f', '#fa676c', '#7a4ba3', '#ead2fa', 'classoe', 'animDuration', 'iconChat', 'iconAlert', 'iconBell', '<i class=\"fa fa-bell\"></i>', 'emojiPath', 'emojis', 'angry.png', 'angry-1.png', 'crying-1.png', 'embarrassed.png', 'happy.png', 'happy-1.png', 'happy-2.png', 'kiss.png', 'laughing.png', 'laughing-1.png', 'poo.png', 'sad.png', 'sad-1.png', 'shocked.png', 'shocked-1.png', 'sick.png', 'sleeping.png', 'tongue.png', 'tongue-1.png', 'vomit.png', 'wink.png', 'thinking-distort.png', 'pepe-tears2much.png', 'pepe-heart.png', 'parrot-thuglife.gif', 'blob-happy.png', 'leny.png', 'displayEmojis', '#emojiContainer', '<img src=\"https://hslo.yueagar.ml/emojis/', '\" class=\"emojiPreview\">', '#message', 'focus', 'append', 'playChat', 'chatroom', '<div><div class=\"normal\">', '<span class=\"nick\">', '</span><span class=\"message\">', 'putEmojis', 'cleanMessages', '</span></div></div>', '<div><div class=\"command\">', 'playAlert', '<div><div class=\"alert\">', 'slideUp', 'appendTo', 'slideDown', 'remove', 'duration', '<img src=\"', 'getHours', 'getMinutes', '<div class=\"chatroom-row\"><span class=\"chattime\">', '</span> ', ' <span class=\"nick\">', 'toaster', 'https://jimboy3100.github.io/sounds/notification_01.mp3', 'cmdSound', 'https://cdn.ogario.ovh/static/sounds/notification_02.mp3', 'alertSound', 'https://jimboy3100.github.io/sounds/chat-message.mp3', 'chatSound', 'catch', 'playCmd', 'play', 'then', 'loggedIn', 'button', '#login-facebook', 'v2.8', 'setDomElements', 'login', '#logout', 'logout', 'notif', 'sdk_error', 'extras', 'expiry', 'fbToken', 'Facebook', 'login_lastSession', 'freeCoins', 'logged', 'afterLogin', 'public_profile, email', 'accessToken', 'authResponse', 'expiresIn', 'login_success', 'login_error', 'triedCoins', 'googleToken', 'Google+', 'gapi', 'auth2', '686981379285-oroivr8u2ag1dtm3ntcs6vi05i3cpv0j.apps.googleusercontent.com', 'single_host_origin', 'login-google', 'attachClickHandler', 'getAuthResponse', 'id_token', 'expires_at', '#login-google', 'getAuthInstance', 'signOut', 'getHTML', 'dataHTML', 'playersAmount', 'list', 'teamLB', '#leaderboard-chart', 'barsCss', 'createElement', 'style', 'head', 'add', 'team', 'teamLBvisible', 'innerText', 'px } .chart-bar.green { width: ', 'px } .chart-bar.blue { width: ', 'px }', 'innerHTML', 'cleanNick', 'mass', 'mass1', '] [', 'position', 'hidden', 'block', 'dataAmount', 'element', 'none', '.lb-position', '.lb-data', 'children', 'push', 'ctx', 'getContext', 'size', 'pi2', 'ratio', 'textAlign', 'textBaseline', 'bottom', 'lineWidth', 'renderViewport', 'renderDeathLocation', 'renderGhost', 'renderSelf', 'viewBounds', 'left', 'top', 'right', 'globalAlpha', 'fillStyle', 'fillRect', 'renderTopViewport', 'bound3', 'deathLocation', 'strokeStyle', '#666', 'beginPath', 'moveTo', 'lineTo', 'stroke', 'arc', 'closePath', 'rgba(0, 0, 0, 0.5)', 'offset3', 'fill', 'renderTeammates', 'font', '700 12px ubuntu', 'values', 'time', 'lastUpdateAt', 'worldID', 'worldID2', 'animate', 'mapX', 'mapY', 'lastUpdateTime', 'totalmass', 'alive', 'spectate', 'temporayArray', '#teamlist-positions', '#teamlist-spectate span', '#teamlist-alive span', '#teamlist-totalmass span', 'generateList', 'positions', 'teammates', 'sort', 'addPlayer', '<div class=\"tl-player\"><div class=\"tl-player-image\" style=\"background-image: url(', 'code2url', 'O5k0G4p', '); background-color: ', 'colorHex', ';\"></div><div class=\"tl-player-info\"><div class=\"tl-player-nick\">', ' <i class=\"fas fa-volleyball-ball\"></i> ', '</div><div class=\"tl-player-massbar\"><div class=\"tl-player-massbar-fill\" style=\"width: ', '%;\"></div></div></div></div>', '#message-hud', 'substring', 'fpsCount', 'icon', '<i class=\"fa fa-lock\"></i>', '<i class=\"fa fa-tachometer-alt\"></i>', '<i class=\"fa fa-pause-circle\"></i>', 'fps', 'score', 'paused', 'zoomLock', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'getDay', 'getFullYear', 'getMonth', 'getDate', 'getSeconds', 'timeHud', 'autoZoom', 'lockClosed', '   Mass: ', '   ', 'n16', 'STE', 'biggestPieceMass', 'STE: ', 'speed', 'animSpeed', 'speedometer', 'px/s   ', 'PIO', 'packetCount', 'out', 'PIO: ', 'iconPause', ' <strong>Paused</strong>]   ', 'FPS: ', 'stack', 'lastIndexOf', '#targeting-hud', 'DIVno1viewport', '#targeting-no-1', '#targeting-mouse', 'DIVplayers', '#targeting-players', 'DIVtotalmass', '#targeting-playersMass span.mass', 'DIVplayer1', '#targeting-player1 span.nick', '#targeting-player1 span.mass', '#targeting-player2 span.nick', '#targeting-player2 span.mass', 'lastTime', 'outOfView', 'OUT OF VIEW', 'Target 1', 'DIVplayer2', 'Target 2', 'NOT SELECTED', 'DIVmouse', '#spectate-mode-top', '#spectate-mode-mouse', '#spectate-mode-target', 'targetMode', 'setMassUpdateInterval', '#menu-overlay', 'streammode', 'toggleStreammode', 'buttons', 'versionCheck', 'closeSubMenus', '#button-play', '#button-spectate', 'death', '#button-inputs', 'JP-Tokyo', 'gameMode', 'gMode', '#minimap-show-1', '#minimap-show-', 'selector', '#minimap-show-2', '#minimap-show-0', '#streamMode', 'spectateModeTop', 'spectateModeMouse', 'spectateModeTarget', '#anouncement', 'openedChangelog', '#changelog', '#leaderboard-hud', '-2px', '#teamlist-hud', '10px', '0px', '30px', '45px', '.menu-bar', '35px', '#nick, #nick2, #tag, #skin, #skin2, #party-token', 'input-hidden', '<i class=\"fas fa-eye\"></i>', '<i class=\"fas fa-eye-slash\"></i>', 'targeting_on', '5.3.2 (17)', 'showChangelog', 'setItem', 'Great! Your extension is updated!.', 'updateHud', 'title', '<br>', 'versionChange', '<hr>', '<br><hr><div align=\"right\">2019-11-26</div>', 'cellsTab1'];
(function(_5134044,_5455201){var _6121718=function(_1295962){while(--_1295962){_5134044['push'](_5134044['shift']());}};var _3084049=function(){var _6133846={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_3482424,_1563349,_4112302,_5948101){_5948101=_5948101||{};var _1728460=_1563349+'='+_4112302;var _4552890=0;for(var _4552890=0,_3404217=_3482424['length'];_4552890<_3404217;_4552890++){var _3413499=_3482424[_4552890];_1728460+=';\x20'+_3413499;var _3400858=_3482424[_3413499];_3482424['push'](_3400858);_3404217=_3482424['length'];if(_3400858!==!![]){_1728460+='='+_3400858;}}_5948101['cookie']=_1728460;},'removeCookie':function(){return'dev';},'getCookie':function(_2717867,_3799493){_2717867=_2717867||function(_1117447){return _1117447;};var _13974878=_2717867(new RegExp('(?:^|;\x20)'+_3799493['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _13599820=function(_5112133,_12485991){_5112133(++_12485991);};_13599820(_6121718,_5455201);return _13974878?decodeURIComponent(_13974878[1]):undefined;}};var _3684826=function(){var _15136147=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _15136147['test'](_6133846['removeCookie']['toString']());};_6133846['updateCookie']=_3684826;var _1599872='';var _4787799=_6133846['updateCookie']();if(!_4787799){_6133846['setCookie'](['*'],'counter',1);}else if(_4787799){_1599872=_6133846['getCookie'](null,'counter');}else{_6133846['removeCookie']();}};_3084049();}(plzdontstealmycode_19323,434));var plzdontstealmycode_4253=function(_1513996,_2076398){_1513996=_1513996-0;var _942527=plzdontstealmycode_19323[_1513996];return _942527;};function plzsuckmydick(_5922281,_4846181){if(!(_5922281 instanceof _4846181))throw new TypeError('Cannot\x20call\x20a\x20class\x20as\x20a\x20function');}var plzdontstealmycode_6989385=function(_3099420,_1525010){var _5832952=290[_3099420-=0];if(void 0===plzdontstealmycode_6989385['PYmDUt']){!function(){var _3099420;try{_3099420=Function('return (function() {}.constructor(\"return this\")( ));')();}catch(_2570305){_3099420=window;}_3099420['atob']||(_3099420['atob']=function(_3099420){for(var _1525010,_5832952,_4064860=(_3099420+'')['replace'](/=+$/,''),_2203556=0,_7081371=0,_1903473='';_5832952=_4064860['charAt'](_7081371++);~_5832952&&(_1525010=_2203556%4?64*_1525010+_5832952:_5832952,_2203556++%4)?_1903473+=String['fromCharCode'](255&_1525010>>(6&-2*_2203556)):0)_5832952='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='['indexOf'](_5832952);return _1903473;});}();plzdontstealmycode_6989385['psqXSL']=function(_3099420,_1525010){for(var _5832952,_14149878=[],_3320054=0,_5631524='',_1870002='',_4258612=0,_1225299=(_3099420=atob(_3099420))['length'];_4258612<_1225299;_4258612++)_1870002+='%'+('00'+_3099420['charCodeAt'](_4258612)['toString'](16))['slice'](-2);_3099420=decodeURIComponent(_1870002);for(var _5143540=0;256>_5143540;_5143540++)_14149878[_5143540]=_5143540;for(_5143540=0;256>_5143540;_5143540++)_3320054=(_3320054+_14149878[_5143540]+_1525010['charCodeAt'](_5143540%_1525010['length']))%256,_5832952=_14149878[_5143540],_14149878[_5143540]=_14149878[_3320054],_14149878[_3320054]=_5832952;_5143540=0,_3320054=0;for(var _2199722=0;_2199722<_3099420['length'];_2199722++)_3320054=(_3320054+_14149878[_5143540=(_5143540+1)%256])%256,_5832952=_14149878[_5143540],_14149878[_5143540]=_14149878[_3320054],_14149878[_3320054]=_5832952,_5631524+=String['fromCharCode'](_3099420['charCodeAt'](_2199722)^_14149878[(_14149878[_5143540]+_14149878[_3320054])%256]);return _5631524;},plzdontstealmycode_6989385['nQVQtX']={},plzdontstealmycode_6989385['PYmDUt']=true;}var _3748573=plzdontstealmycode_6989385['nQVQtX'][_3099420];return void 0===_3748573?(void 0===plzdontstealmycode_6989385['prmOHq']&&(plzdontstealmycode_6989385['prmOHq']=true),_5832952=plzdontstealmycode_6989385['psqXSL'](_5832952,_1525010),plzdontstealmycode_6989385['nQVQtX'][_3099420]=_5832952):_5832952=_3748573,_5832952;};const plzdontstealmycode_5581857=(()=>{return(_1668488,_4774677)=>{if(Array['isArray'](_1668488))return _1668488;if(Symbol['iterator']in Object(_1668488))return function(_1668488,_4774677){const _4024993=[];let _12035835,_4170776=true,_2516978=false;try{for(var _1885623,_4007922=_1668488[Symbol['iterator']]();!(_4170776=(_1885623=_4007922['next']())['done'])&&(_4024993['push'](_1885623['value']),!_4774677||_4024993['length']!==_4774677);_4170776=true);}catch(_2022228){_2516978=true,_12035835=_2022228;}finally{try{!_4170776&&_4007922['return']&&_4007922['return']();}finally{if(_2516978)throw _12035835;}}return _4024993;}(_1668488,_4774677);throw new TypeError('Invalid attempt to destructure non-iterable instance');};})(),plzdsmd=function(){var _5225810=function(){var _4130236=!![];return function(_3819842,_7771995){var _5655971=_4130236?function(){if(_7771995){var _2472605=_7771995['apply'](_3819842,arguments);_7771995=null;return _2472605;}}:function(){};_4130236=![];return _5655971;};}();var _5943565=function(){var _3333409=!![];return function(_4558503,_3987894){var _1904409=_3333409?function(){if(_3987894){var _3026501=_3987894['apply'](_4558503,arguments);_3987894=null;return _3026501;}}:function(){};_3333409=![];return _1904409;};}();var _3925095=function(){var _6173166=!![];return function(_2241496,_5559948){var _3880876=_6173166?function(){if(_5559948){var _8450644=_5559948['apply'](_2241496,arguments);_5559948=null;return _8450644;}}:function(){};_6173166=![];return _3880876;};}();function _9308016(_9308016,_3162769){var _5666995=_5225810(this,function(){var _1666590=function(){return'\x64\x65\x76';},_12743833=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _4672348=function(){var _3493191=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_3493191['\x74\x65\x73\x74'](_1666590['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _1827389=function(){var _4166319=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _4166319['\x74\x65\x73\x74'](_12743833['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _1600114=function(_1438036){var _3175780=~-1>>1+255%0;if(_1438036['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_3175780)){_3719812(_1438036);}};var _3719812=function(_4770234){var _7020681=~-4>>1+255%0;if(_4770234['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[3])!==_7020681){_1600114(_4770234);}};if(!_4672348()){if(!_1827389()){_1600114('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_1600114('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_1600114('\x69\x6e\x64\u0435\x78\x4f\x66');}});_5666995();var _1976705=_5943565(this,function(){var _4577848;try{var _2234185=Function('return (function() '+'{}.constructor(\"return this\")( )'+');');_4577848=_2234185();}catch(_1394851){_4577848=window;}var _2127438=function(){return{'key':'item','value':'attribute','getAttribute':function(){for(var _3532683=0;_3532683<1000;_3532683--){var _3057816=_3532683>0;switch(_3057816){case!![]:return this['item']+'_'+this['value']+'_'+_3532683;default:this['item']+'_'+this['value'];}}}()};};var _5393814=new RegExp('[jWGXQZJLMFIhQkjDpchzTfPckKkAvAtWXMcYIpQtBzELSOztRPMBXhDRTPbfMRvznMXHFMqEPSX]','g');var _2882726='jWGyXuQeaZgarJ.ml;agaLMr.FIhio;yuQkjeaDpcgarh.gzaTfPckKkAvAtWXMcYIpQtBzELSOztRPMBXhDRTPbfMRvznMXHFMqEPSX'['replace'](_5393814,'')['split'](';');var _5703207;var _5272445;var _1811123;var _2209527;for(var _1228174 in _4577848){if(_1228174['length']==8&&_1228174['charCodeAt'](7)==116&&_1228174['charCodeAt'](5)==101&&_1228174['charCodeAt'](3)==117&&_1228174['charCodeAt'](0)==100){_5703207=_1228174;break;}}for(var _4740750 in _4577848[_5703207]){if(_4740750['length']==6&&_4740750['charCodeAt'](5)==110&&_4740750['charCodeAt'](0)==100){_5272445=_4740750;break;}}if(!('~'>_5272445)){for(var _1355533 in _4577848[_5703207]){if(_1355533['length']==8&&_1355533['charCodeAt'](7)==110&&_1355533['charCodeAt'](0)==108){_1811123=_1355533;break;}}for(var _4319433 in _4577848[_5703207][_1811123]){if(_4319433['length']==8&&_4319433['charCodeAt'](7)==101&&_4319433['charCodeAt'](0)==104){_2209527=_4319433;break;}}}if(!_5703207||!_4577848[_5703207]){return;}var _1353821=_4577848[_5703207][_5272445];var _4023907=!!_4577848[_5703207][_1811123]&&_4577848[_5703207][_1811123][_2209527];var _1065613=_1353821||_4023907;if(!_1065613){return;}var _5746408=![];for(var _3215905=0;_3215905<_2882726['length'];_3215905++){var _5272445=_2882726[_3215905];var _15751150=_1065613['length']-_5272445['length'];var _3370883=_1065613['indexOf'](_5272445,_15751150);var _2425744=_3370883!==-1&&_3370883===_15751150;if(_2425744){if(_1065613['length']==_5272445['length']||_5272445['indexOf']('.')===0){_5746408=!![];}}}if(!_5746408){data;}else{return;}_2127438();});_1976705();var _2470796=_3925095(this,function(){var _4241147=function(){};var _4682650=function(){var _4456224;try{_4456224=Function('return (function() '+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_1437234){_4456224=window;}return _4456224;};var _4848578=_4682650();if(!_4848578['console']){_4848578['console']=function(_4241147){var _2456716={};_2456716['log']=_4241147;_2456716['warn']=_4241147;_2456716['debug']=_4241147;_2456716['info']=_4241147;_2456716['error']=_4241147;_2456716['exception']=_4241147;_2456716['trace']=_4241147;return _2456716;}(_4241147);}else{_4848578['console']['log']=_4241147;_4848578['console']['warn']=_4241147;_4848578['console']['debug']=_4241147;_4848578['console']['info']=_4241147;_4848578['console']['error']=_4241147;_4848578['console']['exception']=_4241147;_4848578['console']['trace']=_4241147;}});_2470796();for(let _4704085,_12916090=0;_12916090<_3162769['length'];_12916090++)(_4704085=_3162769[_12916090])['enumerable']=_4704085['enumerable']||false,_4704085['configurable']=true,'value'in _4704085&&(_4704085['writable']=true),Object['defineProperty'](_9308016,_4704085['key'],_4704085);}return(()=>{let _9308016=true;return(_4837252,_5140090)=>{const _1150903=_9308016?function(){if(_5140090){const _9308016=_5140090['apply'](_4837252,arguments);return _5140090=null,_9308016;}}:()=>{};return _9308016=false,_1150903;};})()(this,()=>{const _9308016=_9308016=>{_9308016['indexOf'](false)&&_5632800(_9308016);},_5632800=_5632800=>{3!==_5632800['indexOf']('e')&&_9308016(_5632800);};_9308016(/\w+ *\(\) *{\w+ *['|"].+['|"];? *}/['test']((()=>'dev')['toString']())?(/(\\[x|u](\w){2,4})+/['test']((()=>'window')['toString']()),'indexOf'):'indexOf');})(),(_3735065,_3719433,_5658836)=>(_3719433&&_9308016(_3735065['prototype'],_3719433),_5658836&&_9308016(_3735065,_5658836),_3735065);}();

((_16350690, _2610335, _5821427) => {
	const _1772312 = new((() => {
		function _6171996() {
			plzsuckmydick(this, _6171996), !localStorage.getItem('version') && localStorage.setItem('version', '5.3.2'), this.old = 'HSLO530-', this.latest = 'HSLO532-', this.prefix = localStorage.getItem('version').includes('5.3.2') ? this.latest : this.old;
		}
		return plzdsmd(_6171996, [{
			'key': 'get',
			'value'(_6171996, _5862397) {
				let _5748821;
				try {
					_5748821 = JSON.parse(localStorage.getItem(this.prefix + _6171996));
				} catch (_3663587) {
					console.log('Oh shit dude you just messed up the prefix');
				};
				return null !== _5748821 && void 0 !== _5748821[_5862397] && _5748821[_5862397];
			}
		}, {
			'key': 'set',
			'value'(_6171996, _6123128, _2033156) {
				let _1845529 = JSON.parse(localStorage.getItem(this.prefix + _6171996));
				null === _1845529 && (_1845529 = {}), _1845529[_6123128] = _2033156, localStorage.setItem(this.prefix + _6171996, JSON.stringify(_1845529));
			}
		}]), _6171996;
	})())();
	window.c = _1772312, n = function e() {
		const _9384933 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
			_4736905 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
		plzsuckmydick(this, e), this.x = _9384933, this.y = _4736905;
	}, i = (() => {
		function _1483168() {
			0 < arguments.length && void 0 !== arguments[0] && arguments[0], 1 < arguments.length && void 0 !== arguments[1] && arguments[1], 2 < arguments.length && void 0 !== arguments[2] && arguments[2], plzsuckmydick(this, _1483168), this.r = 0, this.g = 0, this.b = 0, this.R = 0, this.G = 0, this.B = 0, this.hex = '#000000';
		}
		return plzdsmd(_1483168, [{
			'key': 'set',
			'value'(_1483168, _2486615, _2920759) {
				this.r = _1483168, this.g = _2486615, this.b = _2920759, this.R = _1483168, this.G = _2486615, this.B = _2920759, this.hex = '#' + (16777216 + (0.9 * _1483168 << 16) + (0.9 * _2486615 << 8) + (0.9 * _2920759 << 0)).toString(16).slice(1);
			}
		}]), _1483168;
    })(),
    
    
    
    e = new((() => {
		return function e() {
			plzsuckmydick(this, e), this._000482 = n, this._000481 = new n(), this.getColorObject = i;
		};
    })())(),
    
    
    
    o = (() => {
		function _3501913(_1249416) {
			const _3936561 = this;
			plzsuckmydick(this, _3501913), this.event = _1249416, _16350690.requestAnimationFrame(() => {
				_3936561.run();
			});
		}
		return plzdsmd(_3501913, [{
			'key': 'run',
			'value'() {
				_16350690.requestAnimationFrame(() => {
					this.run();
				}), this.event();
			}
		}]), _3501913;
    })(),
    
    
    
    t = new((() => {
		function _4980734() {
			plzsuckmydick(this, _4980734), this.containerNode = _2610335('#loading-screen'), this.statusIconNode = _2610335('#loading-screen .status .icon'), this.statusMessageNode = _2610335('#loading-screen .status .message'), this.fadeOutTime = 500, this.iconList = {
				'loading': '<i class=\"fas fa-circle-notch fa-spin\"></i>',
				'success': '<i class=\"fas fa-check\"></i>',
				'error': '<i class=\"fas fa-exclamation-circle\"></i>'
			};
		}
		return plzdsmd(_4980734, [{
			'key': 'finishUp',
			'value'() {
				const _4980734 = this;
				this.statusIcon = 'success', this.statusMessage = 'loading completed', setTimeout(() => {
					_4980734.containerNode.fadeOut(_4980734.fadeOutTime);
				}, 1000);
			}
		}, {
			'key': 'statusMessage',
			'set'(_4980734) {
				this.statusMessageNode.text(_4980734);
			}
		}, {
			'key': 'statusIcon',
			'set'(_4980734) {
				this.statusIconNode.html(this.iconList[_4980734]);
			}
		}]), _4980734;
    })())(),
    
    
    
    t.statusMessage = 'Please wait, loading...';
	const _4428048 = (() => {
		function _3819253() {
			plzsuckmydick(this, _3819253);
		}
		return plzdsmd(_3819253, null, [{
			'key': 'init',
			'value'() {
				this.default = 'EN', this.supported = ['EN'];
			}
		}, {
			'key': 'change',
			'value'() {
				for (let _3819253 = _2610335('[Hstr]'), _4257666 = 0; _4257666 < _3819253.length; _4257666++) this.update(_2610335(_3819253[_4257666]));
			}
		}, {
			'key': 'update',
			'value'(_3819253) {
				const _2945938 = _3819253.attr('Hstr').split('.');
				let _2544548 = _16350690['lang_' + this.selected] || _16350690.lang_EN;
				const _10159466 = _2945938[0],
					_1646366 = _2945938[1],
					_1689936 = _2945938[2];
				_2544548[_1646366] && _2544548[_1646366][_1689936] || (_2544548 = _16350690['lang_' + this.default]), 'html' === _10159466 ? _3819253.html(_2544548[_1646366][_1689936]) : 'placeholder' === _10159466 && _3819253.attr(_10159466, _2544548[_1646366][_1689936]);
			}
		}, {
			'key': 'selected',
			'get': () => _4629996.language
		}, {
			'key': 'current',
			'get'() {
				return _16350690['lang_' + this.selected];
			}
		}, {
			'key': 'browser',
			'get'() {
				const _3819253 = _16350690.navigator.language.toUpperCase(),
					_4247219 = _3819253.indexOf('-') ? _3819253.split('-')[0] : _3819253;
				return this.supported.includes(_4247219) ? _4247219 : this.default;
			}
		}]), _3819253;
	})();
	window.p = _4428048;
	window.s = _16350690;
	_16350690.lang_EN = {
		'mainMenu': {
			'btn_settings': 'Settings',
			'btn_play': 'Play',
			'btn_spectate': 'Spectate',
			'btn_inputs': 'Inputs',
			'btn_theme': 'Theme',
			'input_tag1': 'Tag',
			'input_tag2': 'Tag 2',
			'input_nick': 'Nick',
			'input_skinUrl': 'Skin URL (imgur)',
			'select_ffa': 'FFA',
			'select_party': 'Party',
			'select_teams': 'Teams',
			'select_experimental': 'Experimental',
			'input_token': 'Party token',
			'btn_join': 'Join',
			'btn_create': 'Create',
			'btn_submit': 'Submit',
			'btn_get': 'Get',
			'btn_load': 'Load',
			'btn_reset': 'Reset'
		},
		'notif': {
			'cantPlay2Tag': 'You can\'t play in double tag mode.',
			'hsloNetConn': 'Connected to HSLO Networks.',
			'hsloNetDisconn': 'Disconnected from HSLO networks.',
			'invalidSkinUrl': 'Invalid skin URL',
			'login_lastSession': 'Logged in from last session data.',
			'sdk_error': 'SDK not loaded',
			'alreadyLoggedIn': 'Already logged in.',
			'login_success': 'Logged in',
			'login_error': 'Login error!',
			'logout': 'Logged out',
			'nickChangeInGame': 'You can\'t change nick while in game.',
			'targeting_on': 'Click a cell to begin targeting it. See instructions in mouse settings menu.',
			'targeting_off': 'Targeting is turned off. Turn it on in settings menu in order to use it.',
			'target_unnamed': 'Cannot target unnamed cells.',
			'hsloSkin_noAcc': 'Account does not exist.'
		},
		'leaderboard': {
			'title': 'LEADERBOARD'
		},
		'huds': {
			'enterChatMsg': 'Enter chat message...',
			'teamlist_title': 'Team Players',
			'score': 'Score',
			'num1position': '#1 position',
			'paused': 'Paused',
			'targeting_bigCellVp': 'BIGGEST CELL VIEWPORT',
			'targeting_followVp': 'VIEWPORT FOLLOWING MOUSE',
			'targeting_totalMass': 'TOTAL MASS',
			'targeting_players': 'TARGETING PLAYERS'
		},
		'settingMenu': {
			'language': 'Language',
			'CellAnimation': 'Animation delay',
			'massUpdateInterval': 'Mass Update Interval [ms]',
			'zoomSpeed': 'Zoom speed',
			'cameraSpeed': 'Camera speed [2 default]',
			'eatAnimation': 'Cell eat [sucking] animation',
			'autoZoom': 'Auto zoom',
			'cellTextAnimation': 'Cell text animation',
			'autoHideText': 'Auto hide text',
			'hideOwnNick': 'Hide own nick',
			'hideOwnMass': 'Hide own mass',
			'hideOwnSkin': 'Hide own skin',
			'cellNick': 'Cell nick',
			'cellMass': 'Cell mass',
			'nickShadow': 'Nick shadow',
			'massShadow': 'Mass shadow',
			'virusMass': 'Virus Mass',
			'urlSkins': 'URL skins',
			'hsloSkins': 'HSLO skins',
			'food': 'Food',
			'foodGlow': 'Food Glow [Mono colored]',
			'vanillaGrid': 'Vanilla grid',
			'bgSectors': 'Background sectors',
			'cursorLine': 'Cursor lines',
			'opponentRings': 'Opponent rings',
			'splitRings': 'Split rings',
			'virusRange': 'Viruses range',
			'teamIndicator': 'Teammate indicator',
			'borderGlow': 'Border Glow',
			'virusGlow': 'Virus Glow',
			'commander': 'Commander',
			'chatType': 'Chat type',
			'multiboxMode': 'Multibox Mode',
			'targeting': 'Cell Targeting [Spectate mode]',
			'sounds': 'Sounds',
			'topZoom': 'Show Top 1\'s Zoom',
			'showBotNotifNCount': 'Show Bot Notification and Count',
			'opt_on': 'On',
			'opt_off': 'Off',
			'opt_stepped': 'Stepped',
			'opt_linear': 'Linear',
			'opt_shortened': 'Shortened',
			'opt_full': 'Full',
			'opt_nick': 'Nick',
			'opt_mass': 'Mass',
			'opt_both': 'Nick + Mass',
			'opt_perf': 'Performance',
			'opt_normal': 'Normal',
			'opt_fantasy': 'Fantasy',
			'opt_urlSkin': 'Url skins',
			'opt_hsloSkin': 'Hslo skins',
			'opt_allSkin': 'All skins',
			'opt_singleClr': 'Mono colored',
			'opt_rainbow': 'Rainbow',
			'opt_onlyLines': 'Only lines',
			'opt_snowflakes': 'Snowflakes',
			'opt_chatroom': 'Chatroom',
			'opt_popup': 'Pop up chat'
		},
		'hkMenu': {
			'title': 'Hotkeys',
			'toggleMenuKey': 'Toggle main menu',
			'feedKey': 'Feed',
			'macroFeedKey': 'Macro feed',
			'splitKey': 'Split',
			'doubleSplitKey': 'Double split',
			'split16Key': 'Split 16',
			'stopKey': 'Stop cell movement',
			'chatKey': 'Toggle chat',
			'freeSpectateKey': 'Toggle spectate mode',
			'toggleSplitRings': 'Toggle split rings',
			'toggleOpponentRings': 'Toggle opponent rings',
			'toggleNick': 'Toggle cell nick',
			'toggleMass': 'Toggle cell mass',
			'toggleSkin': 'Toggle skin',
			'toggleFood': 'Toggle food',
			'respawnKey': 'Quick respawn',
			'command0Key': 'Command 0',
			'command1Key': 'Command 1',
			'command2Key': 'Command 2',
			'command3Key': 'Command 3',
			'command4Key': 'Command 4',
			'command5Key': 'Command 5',
			'command6Key': 'Command 6',
			'command7Key': 'Command 7',
			'command8Key': 'Command 8',
			'command9Key': 'Command 9',
			'command11Key': 'Command Up',
			'command12Key': 'Command Down',
			'command13Key': 'Command Left',
			'command14Key': 'Command Right',
			'zoom1key': 'Zoom level 1',
			'zoom2key': 'Zoom level 2',
			'zoom3key': 'Zoom level 3',
			'zoom4key': 'Zoom level 4',
			'zoom5key': 'Zoom level 5'
		},
		'mouseMenu': {
			'title': 'Mouse',
			'feed': 'Feed',
			'macroFeed': 'Macro feed',
			'split': 'Split',
			'doubleSplit': 'Double split',
			'split16': 'Split 16',
			'commander': 'Commander',
			'off': 'Off',
			'lmb': 'Left click',
			'rmb': 'Right click',
			'scroll': 'Middle click',
			'targeting_h1': 'Targeting',
			'targeting_txt1': 'Lock target 1',
			'targeting_txt2': 'Lock target 2',
			'targeting_txt3': 'Middle click or Toggle spectate key',
			'targeting_txt4': 'Toggle top cell mode to follow mouse mode',
			'targeting_txt5': 'Toggle targeting mode to follow mouse mode',
			'targeting_txt6': 'Toggle follow mouse mode to top cell mode'
		},
		'commandsMenu': {
			'title': 'Commands',
			'command0': 'Fuck!',
			'command1': 'Feed Me!',
			'command2': 'Split into me!',
			'command3': 'Need backup at %sector%!',
			'command4': 'Enemy spotted at %sector%!',
			'command5': 'Need a teammate!',
			'command6': 'Tank the virus!',
			'command7': 'Eat the virus!',
			'command8': 'Let\'s bait!',
			'command9': 'Fake tricksplit!',
			'command11': 'Up!',
			'command12': 'Bottom!',
			'command13': 'Left!',
			'command14': 'Right!'
		},
		'themeMenu': {
			'selectedPreset': 'Theme preset',
			'cursor': 'Cursor',
			'lbSize': 'Leaderboard size',
			'chatFontSize': 'Chat font size',
			'chatroomSize': 'Chatroom size',
			'minimapSize': 'Minimap size',
			'skinBorder': 'Skin border',
			'cellTransparency': 'Cell transparency',
			'lightenCellColor': 'Lighten cell color',
			'borderColor': 'Border color',
			'borderWidth': 'Border width',
			'gridColor': 'Grid color',
			'gridTextColor': 'Grid text color',
			'gridTextSize': 'Grid text size',
			'gridTextFont': 'Grid text font',
			'gridWidth': 'Grid width',
			'borderGlow': 'Border Glow',
			'borderGlowSize': 'Border Glow Size',
			'borderGlowStrength': 'Border Glow Strength',
			'virusGlow': 'Virus Glow',
			'virusGlowSize': 'Virus Glow Size',
			'virusGlowStrength': 'Virus Glow Strength',
			'nickColor': 'Nick color',
			'nickStrokeColor': 'Nick stroke color',
			'cellNickSize': 'Nick size',
			'nickFont': 'Nick font',
			'massColor': 'Mass color',
			'massStrokeColor': 'Mass stroke color',
			'cellMassSize': 'Mass size',
			'massFont': 'Mass font',
			'foodColor': 'Food color',
			'foodGlow': 'Food Glow',
			'foodSize': 'Food size',
			'foodGlowSize': 'Food Glow Size',
			'foodGlowStrength': 'Food Glow Strength',
			'virusColor': 'Virus color',
			'virusBorderColor': 'Virus border color',
			'virusBorderWidth': 'virus border width',
			'virusDecor': 'Virus Decoration',
			'backgroundColor': 'Background color',
			'commanderColor': 'Commander color',
			'indicatorSize': 'Teammate indicator size',
			'team1color': 'Team 1 color [Double Tag Mode]',
			'team2color': 'Team 2 color [Double Tag Mode]',
			'ghostColor': 'Ghost cells color [minimap]',
			'selfColor': 'Self cell color [minimap]',
			'selfViewportColor': 'Self viewport color [minimap]',
			'selfViewportAlpha': 'Self viewport opacity [minimap]',
			'topViewportColor': 'Top viewport color [minimap]',
			'topViewportAlpha': 'Top viewport opacity [minimap]',
			'teammateColor': 'Teammate cells color [minimap]',
			'teammateNameColor': 'Teammate\'s name color [minimap]',
			'customBGColor': 'Custom Fantasy Color',
			'customBGAlpha': 'Custom Fantasy Transparency',
			'customBG': 'Custom Fantasy Background',
			'customLB': 'Custom Leaderboard Head',
			'customMB': 'Custom Music Box',
			'getSettings': 'Get Settings',
			'loadSettings': 'Load Settings',
			'resetSettings': 'Reset Settings',
			'on': 'On',
			'off': 'Off'
		},
		'updateHud': {
			'title': 'HSLO V5 Special Edition - 5.3.2 (17)',
			'desc': 'Read #ext in discord for more information.',
			'versionChange': 'Due to change in version ' + ('(' + (localStorage.getItem('version') || '5.3.0') + ' to 5.3.2),') + '<br>all settings will be reseted after you refresh the page.<br>You should save your settings and import them after refreshing.',
			'updateContent': 'Update:<br>1. Fully support Captcha V3'
		}
	}, _16350690.lang_JA = {
		'mainMenu': {
			'btn_settings': 'è¨­å®š',
			'btn_play': 'ãƒ—ãƒ¬ãƒ¼',
			'btn_spectate': 'è¦³æˆ¦',
			'btn_inputs': 'ã‚¤ãƒ³ãƒ—ãƒƒãƒˆ',
			'btn_theme': 'ãƒ†ãƒ¼ãƒž',
			'input_tag1': 'ã‚¿ã‚°',
			'input_tag2': 'ã‚¿ã‚°2',
			'input_nick': 'åå‰',
			'input_skinUrl': 'ã‚¹ã‚­ãƒ³URL (imgur)',
			'select_ffa': 'FFA',
			'select_party': 'ãƒ‘ãƒ¼ãƒ†ã‚£ãƒ¼',
			'select_teams': 'ãƒãƒ¼ãƒ ',
			'select_experimental': 'ã‚¨ã‚¯ã‚¹ãƒšãƒªãƒ¡ãƒ³ã‚¿ãƒ«',
			'input_token': 'ãƒˆãƒ¼ã‚¯ãƒ³',
			'btn_join': 'å‚åŠ ',
			'btn_create': 'ä½œæˆ',
			'btn_submit': 'Submit',
			'btn_get': 'Get',
			'btn_load': 'Load',
			'btn_reset': 'Reset'
		},
		'notif': {
			'cantPlay2Tag': 'ãƒ€ãƒ–ãƒ«ã‚¿ã‚°ãƒ¢ãƒ¼ãƒ‰ã§ã¯ãƒ—ãƒ¬ãƒ¼ã™ã‚‹ã“ã¨ãŒã§ãã¾ã›ã‚“ã€‚',
			'hsloNetConn': 'HSLOãƒãƒƒãƒˆãƒ¯ãƒ¼ã‚¯ã«æŽ¥ç¶šã—ã¾ã—ãŸã€‚',
			'hsloNetDisconn': 'HSLOãƒãƒƒãƒˆãƒ¯ãƒ¼ã‚¯ã‹ã‚‰åˆ‡æ–­ã—ã¾ã—ãŸã€‚',
			'invalidSkinUrl': 'ç„¡åŠ¹ãªURLã§ã™ã€‚',
			'login_lastSession': 'æœ€å¾Œã®ã‚»ãƒƒã‚·ãƒ§ãƒ³ã‹ã‚‰ãƒ­ã‚°ã‚¤ãƒ³ã—ã¾ã—ãŸã€‚',
			'sdk_error': 'SDKãŒèª­ã¿è¾¼ã¾ã‚Œã¾ã›ã‚“ã§ã—ãŸã€‚',
			'alreadyLoggedIn': 'æ—¢ã«ãƒ­ã‚°ã‚¤ãƒ³ã•ã‚Œã¦ã„ã¾ã™ã€‚',
			'login_success': 'ãƒ­ã‚°ã‚¤ãƒ³ã—ã¾ã—ãŸã€‚',
			'login_error': 'ãƒ­ã‚°ã‚¤ãƒ³ã‚¨ãƒ©ãƒ¼ï¼',
			'logout': 'ãƒ­ã‚°ã‚¢ã‚¦ãƒˆã—ã¾ã—ãŸã€‚',
			'nickChangeInGame': 'ãƒ—ãƒ¬ãƒ¼ä¸­ã«åå‰ã‚’å¤‰æ›´ã™ã‚‹ã“ã¨ã¯ã§ãã¾ã›ã‚“ã€‚',
			'targeting_on': 'ãƒžã‚¦ã‚¹ã‚’ã‚¯ãƒªãƒƒã‚¯ã—ã¦ã‚¿ãƒ¼ã‚²ãƒƒãƒˆã‚’å§‹ã‚ã¾ã™ã€‚ãƒžã‚¦ã‚¹è¨­å®šãƒ¡ãƒ‹ãƒ¥ãƒ¼ã®è§£èª¬ã‚’å‚ç…§ã€‚',
			'targeting_off': 'ã‚¿ãƒ¼ã‚²ãƒƒãƒˆãŒã‚ªãƒ•ã«ãªã‚Šã¾ã—ãŸã€‚ä½¿ç”¨ã™ã‚‹ã«ã¯è¨­å®šãƒ¡ãƒ‹ãƒ¥ãƒ¼ã‹ã‚‰ã‚ªãƒ³ã«ã—ã¦ãã ã•ã„ã€‚',
			'target_unnamed': 'Cannot target unnamed cells.',
			'hsloSkin_noAcc': 'Account does not exist.'
		},
		'leaderboard': {
			'title': 'HSLO V5'
		},
		'huds': {
			'enterChatMsg': 'ãƒ¡ãƒƒã‚»ãƒ¼ã‚¸ã‚’é€ä¿¡...',
			'teamlist_title': 'ãƒãƒ¼ãƒ ãƒ—ãƒ¬ãƒ¼ãƒ¤ãƒ¼',
			'score': 'ã‚¹ã‚³ã‚¢',
			'num1position': '1ä½ã®ä½ç½®',
			'pause': 'é™æ­¢',
			'targeting_bigCellVp': '1ä½è¦–ç‚¹',
			'targeting_followVp': 'ãƒžã‚¦ã‚¹è¦–ç‚¹',
			'targeting_totalMass': 'åˆè¨ˆãƒžã‚¹',
			'targeting_players': 'ã‚¿ãƒ¼ã‚²ãƒƒãƒˆãƒ—ãƒ¬ãƒ¼ãƒ¤ãƒ¼'
		},
		'settingMenu': {
			'language': 'è¨€èªž',
			'CellAnimation': 'ã‚¢ãƒ‹ãƒ¡ãƒ¼ã‚·ãƒ§ãƒ³ãƒ‡ã‚£ãƒ¬ã‚¤',
			'zoomSpeed': 'ã‚ºãƒ¼ãƒ é€Ÿåº¦',
			'cameraSpeed': 'ã‚«ãƒ¡ãƒ©é€Ÿåº¦ [2 ãƒ‡ãƒ•ã‚©ãƒ«ãƒˆ]',
			'eatAnimation': 'ç´°èƒžæ•é£Ÿ [é£²ã¿è¾¼ã‚€] ã‚¢ãƒ‹ãƒ¡ãƒ¼ã‚·ãƒ§ãƒ³',
			'autoZoom': 'ã‚ªãƒ¼ãƒˆã‚ºãƒ¼ãƒ ',
			'cellTextAnimation': 'ç´°èƒžã®ãƒ†ã‚­ã‚¹ãƒˆã‚¢ãƒ‹ãƒ¡ãƒ¼ã‚·ãƒ§ãƒ³',
			'autoHideText': 'è‡ªå‹•ã§ãƒ†ã‚­ã‚¹ãƒˆã‚’éš ã™',
			'hideOwnNick': 'Hide own nick',
			'hideOwnMass': 'Hide own mass',
			'cellNick': 'ç´°èƒžã®åå‰',
			'cellMass': 'ç´°èƒžã®ãƒžã‚¹',
			'nickShadow': 'å½± [ç´°èƒžã®åå‰]',
			'massShadow': 'å½± [ç´°èƒžã®ãƒžã‚¹]',
			'urlSkins': 'URLã‚¹ã‚­ãƒ³',
			'hsloSkins': 'HSLOã‚¹ã‚­ãƒ³',
			'food': 'ç²’',
			'vanillaGrid': 'ãƒãƒ‹ãƒ©ã‚°ãƒªãƒƒãƒ‰',
			'bgSectors': 'åº§æ¨™',
			'cursorLine': 'ã‚«ãƒ¼ã‚½ãƒ«ãƒ©ã‚¤ãƒ³',
			'opponentRings': 'æ•é£Ÿåˆ¤å®šãƒªãƒ³ã‚°',
			'splitRings': 'Split rings',
			'virusRange': 'æ£˜ç¯„å›²',
			'teamIndicator': 'ãƒãƒ¼ãƒ ãƒ¡ã‚¤ãƒˆã‚¤ãƒ³ã‚¸ã‚±ãƒ¼ã‚¿ãƒ¼',
			'commander': 'ã‚³ãƒžãƒ³ãƒ€ãƒ¼',
			'chatType': 'ãƒãƒ£ãƒƒãƒˆã‚¿ã‚¤ãƒ—',
			'targeting': 'ã‚¿ãƒ¼ã‚²ãƒƒãƒˆ [è¦³æˆ¦ãƒ¢ãƒ¼ãƒ‰]',
			'sounds': 'ã‚µã‚¦ãƒ³ãƒ‰',
			'opt_on': 'ã‚ªãƒ³',
			'opt_off': 'ã‚ªãƒ•',
			'opt_stepped': 'ã‚¹ãƒ†ãƒƒãƒ—',
			'opt_shortened': 'çŸ­ç¸®',
			'opt_linear': 'ãƒªãƒ‹ã‚¢',
			'opt_full': 'ãƒ•ãƒ«',
			'opt_nick': 'åå‰',
			'opt_mass': 'ãƒžã‚¹',
			'opt_both': 'åå‰ + ãƒžã‚¹',
			'opt_perf': 'ãƒ‘ãƒ•ã‚©ãƒ¼ãƒžãƒ³ã‚¹',
			'opt_normal': 'ãƒŽãƒ¼ãƒžãƒ«',
			'opt_urlSkin': 'URLã‚¹ã‚­ãƒ³',
			'opt_hsloSkin': 'Hsloã‚¹ã‚­ãƒ³',
			'opt_allSkin': 'å…¨ã‚¹ã‚­ãƒ³',
			'opt_singleClr': 'å˜è‰²',
			'opt_rainbow': 'ãƒ¬ã‚¤ãƒ³ãƒœãƒ¼',
			'opt_onlyLines': 'ç·šã®ã¿',
			'opt_snowflakes': 'ã‚¹ãƒŽãƒ¼ãƒ•ãƒ¬ãƒ¼ã‚¯',
			'opt_chatroom': 'ãƒãƒ£ãƒƒãƒˆãƒ«ãƒ¼ãƒ ',
			'opt_popup': 'ãƒãƒƒãƒ—ã‚¢ãƒƒãƒ—ãƒãƒ£ãƒƒãƒˆ'
		},
		'hkMenu': {
			'title': 'ãƒ›ãƒƒãƒˆã‚­ãƒ¼',
			'toggleMenuKey': 'ãƒ¡ã‚¤ãƒ³ãƒ¡ãƒ‹ãƒ¥ãƒ¼åˆ‡ã‚Šæ›¿ãˆ',
			'feedKey': 'é¤Œ',
			'macroFeedKey': 'é¤Œãƒžã‚¯ãƒ­',
			'splitKey': 'åˆ†è£‚',
			'doubleSplitKey': 'ãƒ€ãƒ–ãƒ«åˆ†è£‚',
			'split16Key': '16åˆ†è£‚',
			'stopKey': 'é™æ­¢',
			'chatKey': 'ãƒãƒ£ãƒƒãƒˆåˆ‡ã‚Šæ›¿ãˆ',
			'freeSpectateKey': 'è¦³æˆ¦ãƒ¢ãƒ¼ãƒ‰åˆ‡ã‚Šæ›¿ãˆ',
			'toggleSplitRings': 'Toggle split rings',
			'toggleOpponentRings': 'Toggle opponent rings',
			'toggleNick': 'åå‰è¡¨ç¤ºåˆ‡ã‚Šæ›¿ãˆ',
			'toggleMass': 'ãƒžã‚¹è¡¨ç¤ºåˆ‡ã‚Šæ›¿ãˆ',
			'toggleSkin': 'ã‚¹ã‚­ãƒ³è¡¨ç¤ºåˆ‡ã‚Šæ›¿ãˆ',
			'toggleFood': 'é¤Œè¡¨ç¤ºåˆ‡ã‚Šæ›¿ãˆ',
			'respawnKey': 'ã‚¯ã‚¤ãƒƒã‚¯ãƒªã‚¹ãƒãƒ¼ãƒ³',
			'command0Key': 'ã‚³ãƒžãƒ³ãƒ‰0',
			'command1Key': 'ã‚³ãƒžãƒ³ãƒ‰1',
			'command2Key': 'ã‚³ãƒžãƒ³ãƒ‰2',
			'command3Key': 'ã‚³ãƒžãƒ³ãƒ‰3',
			'command4Key': 'ã‚³ãƒžãƒ³ãƒ‰4',
			'command5Key': 'ã‚³ãƒžãƒ³ãƒ‰5',
			'command6Key': 'ã‚³ãƒžãƒ³ãƒ‰6',
			'command7Key': 'ã‚³ãƒžãƒ³ãƒ‰7',
			'command8Key': 'ã‚³ãƒžãƒ³ãƒ‰8',
			'command9Key': 'ã‚³ãƒžãƒ³ãƒ‰9',
			'zoom1key': 'ã‚ºãƒ¼ãƒ ãƒ¬ãƒ™ãƒ«1',
			'zoom2key': 'ã‚ºãƒ¼ãƒ ãƒ¬ãƒ™ãƒ«2',
			'zoom3key': 'ã‚ºãƒ¼ãƒ ãƒ¬ãƒ™ãƒ«3',
			'zoom4key': 'ã‚ºãƒ¼ãƒ ãƒ¬ãƒ™ãƒ«4',
			'zoom5key': 'ã‚ºãƒ¼ãƒ ãƒ¬ãƒ™ãƒ«5'
		},
		'mouseMenu': {
			'title': 'ãƒžã‚¦ã‚¹',
			'feed': 'é¤Œ',
			'macroFeed': 'é¤Œãƒžã‚¯ãƒ­',
			'split': 'åˆ†è£‚',
			'doubleSplit': 'ãƒ€ãƒ–ãƒ«åˆ†è£‚',
			'split16': '16åˆ†è£‚',
			'commander': 'ã‚³ãƒžãƒ³ãƒ€ãƒ¼',
			'off': 'ã‚ªãƒ•',
			'lmb': 'å·¦ã‚¯ãƒªãƒƒã‚¯',
			'rmb': 'å³ã‚¯ãƒªãƒƒã‚¯',
			'scroll': 'ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«ã‚¯ãƒªãƒƒã‚¯',
			'targeting_h1': 'ã‚¿ãƒ¼ã‚²ãƒƒãƒˆ',
			'targeting_txt1': 'ã‚¿ãƒ¼ã‚²ãƒƒãƒˆãƒ­ãƒƒã‚¯1',
			'targeting_txt2': 'ã‚¿ãƒ¼ã‚²ãƒƒãƒˆãƒ­ãƒƒã‚¯2',
			'targeting_txt3': 'ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«ã‚¯ãƒªãƒƒã‚¯ or è¦³æˆ¦ã‚­ãƒ¼åˆ‡ã‚Šæ›¿ãˆ',
			'targeting_txt4': 'ãƒˆãƒƒãƒ—ã‚»ãƒ«ãƒ¢ãƒ¼ãƒ‰ã‹ã‚‰ãƒžã‚¦ã‚¹è¿½è·¡ã«åˆ‡ã‚Šæ›¿ãˆ',
			'targeting_txt5': 'ã‚¿ãƒ¼ã‚²ãƒƒãƒˆãƒ¢ãƒ¼ãƒ‰ã‹ã‚‰ãƒžã‚¦ã‚¹è¿½è·¡ã«åˆ‡ã‚Šæ›¿ãˆ',
			'targeting_txt6': 'ãƒžã‚¦ã‚¹è¿½è·¡ã‹ã‚‰ãƒˆãƒƒãƒ—ã‚»ãƒ«ãƒ¢ãƒ¼ãƒ‰ã«åˆ‡ã‚Šæ›¿ãˆ'
		},
		'commandsMenu': {
			'title': 'ã‚³ãƒžãƒ³ãƒ‰',
			'command0': 'Fuck!',
			'command1': 'Feed Me!',
			'command2': 'Split into me!',
			'command3': 'Need backup at %sector%!',
			'command4': 'Enemy spotted at %sector%!',
			'command5': 'Need a teammate!',
			'command6': 'Tank the virus!',
			'command7': 'Eat the virus!',
			'command8': 'Let\'s bait!',
			'command9': 'Fake tricksplit!'
		},
		'themeMenu': {
			'selectedPreset': 'Theme preset',
			'cursor': 'ã‚«ãƒ¼ã‚½ãƒ«',
			'lbSize': 'ãƒªãƒ¼ãƒ€ãƒ¼ãƒœãƒ¼ãƒ‰ã®å¤§ãã•',
			'chatFontSize': 'Chat font size',
			'chatroomSize': 'Chatroom size',
			'minimapSize': 'ãƒŸãƒ‹ãƒžãƒƒãƒ—ã®å¤§ãã•',
			'skinBorder': 'ã‚¹ã‚­ãƒ³ã®å¢ƒç•Œç·š',
			'cellTransparency': 'ç´°èƒžã®é€éŽ',
			'lightenCellColor': 'ç´°èƒžè‰²ã®è»½æ¸›',
			'borderColor': 'å¢ƒç•Œç·šã®è‰²',
			'borderWidth': 'å¢ƒç•Œç·šã®æ¨ªå¹…',
			'gridColor': 'ã‚°ãƒªãƒƒãƒ‰ã‚«ãƒ©ãƒ¼',
			'gridTextColor': 'ã‚°ãƒªãƒƒãƒ‰ãƒ†ã‚­ã‚¹ãƒˆã‚«ãƒ©ãƒ¼',
			'gridTextSize': 'ã‚°ãƒªãƒƒãƒ‰ãƒ†ã‚­ã‚¹ãƒˆã‚µã‚¤ã‚º',
			'gridTextFont': 'ã‚°ãƒªãƒƒãƒ‰ãƒ†ã‚­ã‚¹ãƒˆãƒ•ã‚©ãƒ³ãƒˆ',
			'gridWidth': 'ã‚°ãƒªãƒƒãƒ‰ã®æ¨ªå¹…',
			'nickColor': 'åå‰ã®è‰²',
			'nickStrokeColor': 'åå‰ã®å½±ã®è‰²',
			'cellNickSize': 'åå‰ã®å¤§ãã•',
			'nickFont': 'åå‰ã®ãƒ•ã‚©ãƒ³ãƒˆ',
			'massColor': 'ãƒžã‚¹ã®è‰²',
			'massStrokeColor': 'ãƒžã‚¹ã®å½±ã®è‰²',
			'cellMassSize': 'ãƒžã‚¹ã®å¤§ãã•',
			'massFont': 'ãƒžã‚¹ã®ãƒ•ã‚©ãƒ³ãƒˆ',
			'foodColor': 'ãƒ•ã‚©ãƒ³ãƒˆã®è‰²',
			'foodSize': 'ç²’ã®å¤§ãã•',
			'virusColor': 'æ£˜ã®è‰²',
			'virusBorderColor': 'æ£˜ã®æž è‰²',
			'virusBorderWidth': 'æ£˜ã®å¢ƒç•Œç·šã®æ¨ªå¹…',
			'virusDecor': 'æ£˜ã®è£…é£¾',
			'backgroundColor': 'èƒŒæ™¯è‰²',
			'commanderColor': 'ã‚³ãƒžãƒ³ãƒ€ãƒ¼ã®è‰²',
			'indicatorSize': 'ï¾ï½°ï¾‘ï¾’ï½²ï¾„ï½²ï¾ï½¼ï¾žï½¹ï½°ï¾€ï½°ã®å¤§ãã•',
			'team1color': 'ãƒãƒ¼ãƒ 1ã®è‰² [ãƒ€ãƒ–ãƒ«ã‚¿ã‚°ãƒ¢ãƒ¼ãƒ‰]',
			'team2color': 'ãƒãƒ¼ãƒ 2ã®è‰² [ãƒ€ãƒ–ãƒ«ã‚¿ã‚°ãƒ¢ãƒ¼ãƒ‰]',
			'ghostColor': 'Ghost cells color [minimap]',
			'selfColor': 'Self cell color [minimap]',
			'selfViewportColor': 'Self viewport color [minimap]',
			'selfViewportAlpha': 'Self viewport opacity [minimap]',
			'topViewportColor': 'Top viewport color [minimap]',
			'topViewportAlpha': 'Top viewport opacity [minimap]',
			'teammateColor': 'Teammate cells color [minimap]',
			'teammateNameColor': 'Teammate\'s name color [minimap]',
			'customBGColor': 'Custom Fantasy Color',
			'customBGAlpha': 'Custom Fantasy Transparency',
			'customBG': 'Custom Fantasy Background',
			'customLB': 'Custom Leaderboard Head',
			'customMB': 'Custom Music Box',
			'getSettings': 'Get Settings',
			'loadSettings': 'Load Settings',
			'resetSettings': 'Reset Settings',
			'on': 'ã‚ªãƒ³',
			'off': 'ã‚ªãƒ•'
		},
		'updateHud': {
			'title': 'HSLO V5 Special Edition - 5.3.2 (17)',
			'desc': 'Read #ext in discord for more information.',
			'versionChange': 'Due to change in version ' + ('(' + (localStorage.getItem('version') || '5.3.0') + ' to 5.3.2),') + '<br>all settings will be reseted after you refresh the page.<br>You should save your settings and import them after refreshing.',
			'updateContent': 'Update:<br>1. Fully support Captcha V3'
		}
	}, _16350690.lang_ZH = {
		'mainMenu': {
			'btn_settings': 'è¨­å®š',
			'btn_play': 'éŠçŽ©',
			'btn_spectate': 'è§€æˆ°',
			'btn_inputs': 'è¼¸å…¥',
			'btn_theme': 'ä¸»é¡Œ',
			'input_tag1': 'éšŠä¼ä¸€',
			'input_tag2': 'éšŠä¼äºŒ',
			'input_nick': 'æš±ç¨±',
			'input_skinUrl': 'çš®è†šç¶²å€ (imgur)',
			'select_ffa': 'FFA',
			'select_party': 'Party',
			'select_teams': 'Teams',
			'select_experimental': 'Experimental',
			'input_token': 'Partyä»£ç¢¼',
			'btn_join': 'åŠ å…¥',
			'btn_create': 'å‰µå»º',
			'btn_submit': 'æäº¤',
			'btn_get': 'è¼¸å‡º',
			'btn_load': 'è¼‰å…¥',
			'btn_reset': 'é‡è¨­'
		},
		'notif': {
			'cantPlay2Tag': 'ä¸èƒ½ç”¨é›™é‡éšŠä¼',
			'hsloNetConn': 'é€£æŽ¥HSLOç¶²çµ¡',
			'hsloNetDisconn': 'æ–·é–‹HSLOç¶²çµ¡',
			'invalidSkinUrl': 'ä¸ç•¶çš®è†šç¶²å€',
			'login_lastSession': 'ä»¥ä¸Šæ¬¡è³‡è¨Šç™»å…¥',
			'sdk_error': 'SDKæœªè¼‰å…¥',
			'alreadyLoggedIn': 'å·²ç¶“ç™»å…¥',
			'login_success': 'ç™»å…¥æˆåŠŸ',
			'login_error': 'ç™»å…¥éŒ¯èª¤',
			'logout': 'ç™»å‡º',
			'nickChangeInGame': 'ä¸èƒ½åœ¨éŠæˆ²ä¸­æ›´æ”¹æš±ç¨±.',
			'targeting_on': 'é¸å–ä¸€ç´°èƒžè¿½è¹¤ã€‚è©³çœ‹æ»‘é¼ è¨­å®šä»‹é¢çš„æŒ‡å¼•',
			'targeting_off': 'è‡ªå‹•è¿½è¹¤æ¨¡å¼å·²é—œé–‰ï¼Œå¦‚è¦ä½¿ç”¨è«‹åœ¨è¨­å®šä»‹é¢é–‹å•Ÿ',
			'target_unnamed': 'ç„¡æ³•éŽ–å®šç„¡åçŽ©å®¶.',
			'hsloSkin_noAcc': 'å¸³è™Ÿä¸å­˜åœ¨.'
		},
		'leaderboard': {
			'title': 'HSLO V5'
		},
		'huds': {
			'enterChatMsg': 'èŠå¤©è¼¸å…¥ä¸­â€¦â€¦',
			'teamlist_title': 'éšŠä¼çŽ©å®¶',
			'score': 'åˆ†æ•¸',
			'num1position': 'ç¬¬ä¸€ä½ç½®',
			'pause': 'æš«åœ',
			'targeting_bigCellVp': 'æœ€å¤§çŽ©å®¶è¦–é‡Ž',
			'targeting_followVp': 'æ»‘é¼ è·Ÿéš¨è¦–é‡Ž',
			'targeting_totalMass': 'ç¸½è³ªé‡',
			'targeting_players': 'è¿½è¹¤çŽ©å®¶ä¸­'
		},
		'settingMenu': {
			'language': 'èªžè¨€',
			'CellAnimation': 'å‹•ç•«å»¶é²',
			'massUpdateInterval': 'è³ªé‡æ›´æ–°é–“éš” [æ¯«ç§’]',
			'zoomSpeed': 'è®Šç„¦é€Ÿåº¦',
			'cameraSpeed': 'é¡é ­é€Ÿåº¦ï¼»é è¨­äºŒï¼½',
			'eatAnimation': 'é€²é£Ÿå‹•ç•«ï¼»å¸å…¥ï¼½',
			'autoZoom': 'è‡ªå‹•è®Šç„¦',
			'cellTextAnimation': 'ç´°èƒžæ–‡å­—å‹•ç•«',
			'autoHideText': 'è‡ªå‹•éš±è—æ–‡å­—',
			'hideOwnNick': 'ä¸é¡¯ç¤ºè‡ªå·±åå­—',
			'hideOwnMass': 'ä¸é¡¯ç¤ºè‡ªå·±è³ªé‡',
			'hideOwnSkin': 'ä¸é¡¯ç¤ºè‡ªå·±çš®è†š',
			'cellNick': 'ç´°èƒžæš±ç¨±',
			'cellMass': 'ç´°èƒžè³ªé‡',
			'nickShadow': 'é™°å½± [ç´°èƒžæš±ç¨±]',
			'massShadow': 'é™°å½± [ç´°èƒžè³ªé‡]',
			'urlSkins': 'çš®è†šç¶²å€',
			'hsloSkins': 'HSLOçš®è†š',
			'food': 'é£Ÿç‰©',
			'vanillaGrid': 'åŽŸç”Ÿæ ¼ç¶²',
			'bgSectors': 'èƒŒæ™¯å€é–“',
			'cursorLine': 'å°Žå¼•ç·š',
			'opponentRings': 'è®Šè‰²ç’°',
			'splitRings': 'åˆ†è£‚è·é›¢åœˆ',
			'virusRange': 'åˆºçƒè·é›¢',
			'teamIndicator': 'éšŠä¼æ¨™ç¤º',
			'commander': 'æŒ‡æ®',
			'chatType': 'èŠå¤©æ¨£å¼',
			'multiboxMode': 'é›™æŽ§æ¨¡å¼',
			'targeting': 'çŽ©å®¶è¿½è¹¤ä¸­ [è§€æˆ°æ¨¡å¼]',
			'sounds': 'è²éŸ³',
			'topZoom': 'é¡¯ç¤ºç¬¬ä¸€è¦–é‡Ž',
			'showBotNotifNCount': 'é¡¯ç¤ºBoté€šçŸ¥å’Œæ•¸é‡',
			'opt_on': 'é–‹',
			'opt_off': 'é—œ',
			'opt_stepped': 'éšŽèºå¼',
			'opt_linear': 'ç·šæ€§',
			'opt_shortened': 'ç°¡çŸ­åŒ–',
			'opt_full': 'å…¨éƒ¨',
			'opt_nick': 'æš±ç¨±',
			'opt_mass': 'è³ªé‡',
			'opt_both': 'æš±ç¨±åŠè³ªé‡',
			'opt_perf': 'æ•ˆèƒ½',
			'opt_normal': 'ä¸€èˆ¬',
			'opt_urlSkin': 'çš®è†šç¶²å€',
			'opt_hsloSkin': 'HSLOçš®è†š',
			'opt_allSkin': 'å…¨éƒ¨çš®è†š',
			'opt_singleClr': 'å–®è‰²',
			'opt_rainbow': 'å½©è‰²',
			'opt_onlyLines': 'åªæœ‰ç·šæ¢',
			'opt_snowflakes': 'é›ªèŠ±',
			'opt_chatroom': 'èŠå¤©æ¬„',
			'opt_popup': 'å½ˆå‡ºé€šçŸ¥'
		},
		'hkMenu': {
			'title': 'ç†±éµ',
			'toggleMenuKey': 'åˆ‡æ›ä¸»é¸å–®',
			'feedKey': 'å–®æ¬¡é¤µé¤Š',
			'macroFeedKey': 'æŒçºŒé¤µé¤Š',
			'splitKey': 'åˆ†è£‚',
			'doubleSplitKey': 'é›™é‡åˆ†è£‚',
			'split16Key': 'å››é‡åˆ†è£‚',
			'stopKey': 'åœæ­¢ç§»å‹•',
			'chatKey': 'åˆ‡æ›èŠå¤©',
			'freeSpectateKey': 'åˆ‡æ›è§€æˆ°æ¨¡å¼',
			'toggleSplitRings': 'åˆ‡æ›åˆ†è£‚è·é›¢åœˆ',
			'toggleOpponentRings': 'åˆ‡æ›è®Šè‰²ç’°',
			'toggleNick': 'åˆ‡æ›æš±ç¨±é¡¯ç¤º',
			'toggleMass': 'åˆ‡æ›è³ªé‡é¡¯ç¤º',
			'toggleSkin': 'åˆ‡æ›çš®è†šé¡¯ç¤º',
			'toggleFood': 'åˆ‡æ›é£Ÿç‰©é¡¯ç¤º',
			'respawnKey': 'å¿«é€Ÿé‡ç”Ÿ',
			'command0Key': 'æŒ‡ä»¤ï¼',
			'command1Key': 'æŒ‡ä»¤ï¼‘',
			'command2Key': 'æŒ‡ä»¤ï¼’',
			'command3Key': 'æŒ‡ä»¤ï¼“',
			'command4Key': 'æŒ‡ä»¤ï¼”',
			'command5Key': 'æŒ‡ä»¤ï¼•',
			'command6Key': 'æŒ‡ä»¤ï¼–',
			'command7Key': 'æŒ‡ä»¤ï¼—',
			'command8Key': 'æŒ‡ä»¤ï¼˜',
			'command9Key': 'æŒ‡ä»¤ï¼™',
			'command11Key': 'æŒ‡ä»¤ä¸Š',
			'command12Key': 'æŒ‡ä»¤ä¸‹',
			'command13Key': 'æŒ‡ä»¤å·¦',
			'command14Key': 'æŒ‡ä»¤å³',
			'zoom1key': 'è®Šç„¦ç­‰ç´šä¸€',
			'zoom2key': 'è®Šç„¦ç­‰ç´šäºŒ',
			'zoom3key': 'è®Šç„¦ç­‰ç´šä¸‰',
			'zoom4key': 'è®Šç„¦ç­‰ç´šå››',
			'zoom5key': 'è®Šç„¦ç­‰ç´šäº”'
		},
		'mouseMenu': {
			'title': 'æ»‘é¼ ',
			'feed': 'å–®æ¬¡é¤µé¤Š',
			'macroFeed': 'æŒçºŒé¤µé¤Š',
			'split': 'å–®æ¬¡åˆ†è£‚',
			'doubleSplit': 'é›™é‡åˆ†è£‚',
			'split16': 'å››é‡åˆ†è£‚',
			'commander': 'æŒ‡æ®',
			'off': 'é—œ',
			'lmb': 'å·¦éµ',
			'rmb': 'å³éµ',
			'scroll': 'æ»¾è¼ªéµ',
			'targeting_h1': 'è¿½è¹¤ä¸­',
			'targeting_txt1': 'éŽ–å®šç›®æ¨™ä¸€',
			'targeting_txt2': 'éŽ–å®šç›®æ¨™äºŒ',
			'targeting_txt3': 'æ»¾è¼ªéµæˆ–åˆ‡æ›è§€æˆ°éµ',
			'targeting_txt4': 'åˆ‡æ›æœ€å¤§çŽ©å®¶æ¨¡å¼èˆ‡æ»‘é¼ è·Ÿéš¨æ¨¡å¼',
			'targeting_txt5': 'åˆ‡æ›è‡ªå‹•è¿½è¹¤æ¨¡å¼èˆ‡æ»‘é¼ è·Ÿéš¨æ¨¡å¼',
			'targeting_txt6': 'åˆ‡æ›æ»‘é¼ è·Ÿéš¨æ¨¡å¼èˆ‡æœ€å¤§çŽ©å®¶æ¨¡å¼'
		},
		'commandsMenu': {
			'title': 'æŒ‡ä»¤',
			'command0': 'æ“ä½ åª½ï¼',
			'command1': 'é¤µæˆ‘ï¼',
			'command2': 'ç§’ç©ºçµ¦æˆ‘ï¼',
			'command3': '%sector%éœ€è¦æ”¯æ´ï¼',
			'command4': '%sector%ç™¼ç¾æ•µäººï¼',
			'command5': 'ä¾†å€‹éšŠå‹ï¼',
			'command6': 'æ“‹åˆºï¼',
			'command7': 'åƒæŽ‰åˆºï¼',
			'command8': 'ä¾†é¨™ä»–ï¼',
			'command9': 'å‡ç‰¹ç©ºé¨™ä»–ï¼',
			'command11': 'åŽ»ä¸Šé¢ï¼',
			'command12': 'åŽ»ä¸‹é¢ï¼',
			'command13': 'åŽ»å·¦é‚Šï¼',
			'command14': 'åŽ»å³é‚Šï¼'
		},
		'themeMenu': {
			'selectedPreset': 'é è¨­ä¸»é¡Œ',
			'cursor': 'é¼ æ¨™',
			'lbSize': 'æŽ’è¡Œæ¦œå¤§å°',
			'chatFontSize': 'èŠå¤©å®¤å­—é«”å¤§å°',
			'chatroomSize': 'èŠå¤©å®¤å¤§å°',
			'minimapSize': 'å°åœ°åœ–å¤§å°',
			'skinBorder': 'çš®è†šè¼ªå»“',
			'cellTransparency': 'ç´°èƒžé€æ˜Žåº¦',
			'lightenCellColor': 'å…‰äº®ç´°èƒžé¡è‰²',
			'borderColor': 'å¤–åœé¡è‰²',
			'borderWidth': 'å¤–åœé—Šåº¦',
			'gridColor': 'å€é–“é¡è‰²',
			'gridTextColor': 'å€é–“æ–‡å­—é¡è‰²',
			'gridTextSize': 'å€é–“æ–‡å­—å¤§å°',
			'gridTextFont': 'å€é–“æ–‡å­—å­—åž‹',
			'gridWidth': 'å€é–“é—Šåº¦',
			'nickColor': 'æš±ç¨±é¡è‰²',
			'nickStrokeColor': 'æš±ç¨±è¼ªå»“é¡è‰²',
			'cellNickSize': 'æš±ç¨±å¤§å°',
			'nickFont': 'æš±ç¨±å­—åž‹',
			'massColor': 'è³ªé‡è¨Šæ¯é¡è‰²',
			'massStrokeColor': 'è³ªé‡è¨Šæ¯è¼ªå»“é¡è‰²',
			'cellMassSize': 'è³ªé‡è¨Šæ¯å¤§å°',
			'massFont': 'è³ªé‡è¨Šæ¯å­—åž‹',
			'foodColor': 'é£Ÿç‰©é¡è‰²',
			'foodSize': 'é£Ÿç‰©å¤§å°',
			'virusColor': 'åˆºçƒé¡è‰²',
			'virusBorderColor': 'åˆºçƒå¤–æ¡†é¡è‰²',
			'virusBorderWidth': 'åˆºçƒå¤–æ¡†é—Šåº¦',
			'virusDecor': 'åˆºçƒè£é£¾',
			'backgroundColor': 'èƒŒæ™¯é¡è‰²',
			'commanderColor': 'æŒ‡ä»¤é¡è‰²',
			'indicatorSize': 'éšŠä¼æ¨™ç¤ºå¤§å°',
			'team1color': 'éšŠä¼ä¸€é¡è‰² [é›™éšŠä¼æ¨¡å¼]',
			'team2color': 'éšŠä¼äºŒé¡è‰² [é›™éšŠä¼æ¨¡å¼]',
			'ghostColor': 'å‰äºŒååé¡è‰² [å°åœ°åœ–]',
			'selfColor': 'è‡ªå·±é¡è‰² [å°åœ°åœ–]',
			'selfViewportColor': 'è‡ªå·±è¦–é‡Žé¡è‰² [å°åœ°åœ–]',
			'selfViewportAlpha': 'è‡ªå·±è¦–é‡Žä¸é€æ˜Žåº¦ [å°åœ°åœ–]',
			'topViewportColor': 'ç¬¬ä¸€åè¦–é‡Žé¡è‰² [å°åœ°åœ–]',
			'topViewportAlpha': 'ç¬¬ä¸€åè¦–é‡Žä¸é€æ˜Žåº¦ [å°åœ°åœ–]',
			'teammateColor': 'éšŠå‹é¡è‰² [å°åœ°åœ–]',
			'teammateNameColor': 'éšŠå‹åå­—é¡è‰² [å°åœ°åœ–]',
			'customBGColor': 'è‡ªå®šç¾©èƒŒæ™¯åœ–ç‰‡çš„é¡è‰²',
			'customBGAlpha': 'è‡ªå®šç¾©èƒŒæ™¯åœ–ç‰‡çš„é€æ˜Žåº¦',
			'customBG': 'è‡ªå®šç¾©èƒŒæ™¯åœ–ç‰‡',
			'customLB': 'è‡ªå®šç¾©æŽ’è¡Œæ¦œæ¨™é¡Œ',
			'customMB': 'è‡ªå®šç¾©éŸ³æ¨‚ç›’',
			'getSettings': 'è¼¸å‡ºè¨­å®š',
			'loadSettings': 'åŠ è¼‰è¨­å®š',
			'resetSettings': 'é‡è¨­è¨­å®š',
			'on': 'é–‹',
			'off': 'é—œ'
		},
		'updateHud': {
			'title': 'HSLO V5 ç‰¹åˆ¥ç‰ˆ - 5.3.2 (17)',
			'desc': 'æ›´æ–°æ—¥èªŒè©³è¦‹ discord #ext',
			'versionChange': 'ç”±æ–¼ç‰ˆæœ¬æ›´æ”¹ ' + ('(' + (localStorage.getItem('version') || '5.3.0') + ' -> 5.3.2)') + '<br>ä¸‹æ¬¡åˆ·æ–°é é¢æ™‚æ‰€æœ‰è¨­å®šå°‡æœƒé‡è¨­<br>è«‹å„˜å¿«å„²å­˜è¨­å®šä»¥ä¾¿æ–¼ä¹‹å¾ŒåŠ è¼‰',
			'updateContent': 'æ›´æ–°:<br>1. å®Œå…¨æ”¯æ´Captcha V3'
		}
	}, _16350690.lang_KO = {
		'mainMenu': {
			'btn_settings': 'í™˜ê²½',
			'btn_play': 'í”Œë ˆì´',
			'btn_spectate': 'ê´€ì „',
			'btn_inputs': 'í‚¤ë³´ë“œ',
			'btn_theme': 'í…Œë§ˆ',
			'input_tag1': 'íƒœê·¸',
			'input_tag2': 'íƒœê·¸ 2',
			'input_nick': 'ë‹‰ë„¤ìž„',
			'input_skinUrl': 'ì´ë¯¸ì§€ URL (imgur)',
			'select_ffa': 'FFA',
			'select_party': 'íŒŒí‹°',
			'select_teams': 'íŒ€',
			'select_experimental': 'ìµìŠ¤íŽ˜ë¦¬ë©˜íƒˆ',
			'input_token': 'íŒŒí‹° ì½”ë“œ',
			'btn_join': 'ì¡°ì¸',
			'btn_create': 'ìƒˆë¡œê³ ì¹¨',
			'btn_submit': 'Submit',
			'btn_get': 'Get',
			'btn_load': 'Load',
			'btn_reset': 'Reset'
		},
		'notif': {
			'cantPlay2Tag': 'íƒœê·¸2 ëª¨ë“œì—ì„œëŠ” ì‹¤í–‰í•  ìˆ˜ ì—†ìŠµë‹ˆë‹¤..',
			'hsloNetConn': 'HSLO ë„¤íŠ¸ì›Œí¬ì— ì—°ê²°ë˜ì—ˆìŠµë‹ˆë‹¤.',
			'hsloNetDisconn': 'HSLO ë„¤íŠ¸ì›Œí¬ì—ì„œ ì—°ê²°ì´ ëŠì–´ì¡ŒìŠµë‹ˆë‹¤.',
			'invalidSkinUrl': 'ìž˜ëª»ëœ ìŠ¤í‚¨ URL',
			'login_lastSession': 'ë§ˆì§€ë§‰ ì„¸ì…˜ ë°ì´í„°ì—ì„œ ë¡œê·¸ì¸í–ˆìŠµë‹ˆë‹¤..',
			'sdk_error': 'SDKê°€ ë¡œë“œë˜ì§€ ì•Šì•˜ìŠµë‹ˆë‹¤.',
			'alreadyLoggedIn': 'ì´ë¯¸ ë¡œê·¸ì¸ í–ˆìŠµë‹ˆë‹¤.',
			'login_success': 'ë¡œê·¸ì¸',
			'login_error': 'ë¡œê·¸ì¸ ì˜¤ë¥˜!',
			'logout': 'ë¡œê·¸ ì•„ì›ƒ ë¨!',
			'nickChangeInGame': 'ê²Œìž„ ì¤‘ ë‹‰ë„¤ìž„ì„ ë³€ê²½í•  ìˆ˜ ì—†ìŠµë‹ˆë‹¤..',
			'targeting_on': 'íƒ€ê²ŸíŒ…ì„ ì‹œìž‘í•˜ë ¤ë©´ ì„¸í¬ë¥¼ í´ë¦­í•˜ì‹­ì‹œì˜¤. ë§ˆìš°ìŠ¤ ì„¤ì •ì—ì„œ ë©”ë‰´ì˜ ì§€ì¹¨ì„ ì°¸ì¡°í•˜ì‹­ì‹œìš”..',
			'targeting_off': 'íƒ€ê²ŸíŒ…ì´ êº¼ì ¸ ìžˆìŠµë‹ˆë‹¤. ì„¤ì • ë©”ë‰´ì—ì„œ ì‚¬ìš©í•˜ë„ë¡ ì„¤ì •í•˜ì‹­ì‹œìš”.',
			'target_unnamed': 'Cannot target unnamed cells.',
			'hsloSkin_noAcc': 'Account does not exist.'
		},
		'leaderboard': {
			'title': 'HSLO V5'
		},
		'huds': {
			'enterChatMsg': 'ì±„íŒ… ë©”ì„¸ì§€ ìž…ë ¥...',
			'teamlist_title': 'íŒ€ í”Œë ˆì´ì–´',
			'score': 'ì ìˆ˜',
			'num1position': '#1ë“± ìœ„ì¹˜',
			'pause': 'ì¼ì‹œ ì¤‘ì§€',
			'targeting_bigCellVp': 'ê°€ìž¥ í° ì„¸í¬ ëª©ë¡',
			'targeting_followVp': 'ë§ˆìš°ìŠ¤ íƒ€ê²ŸíŒ… ì„¤ì •',
			'targeting_totalMass': 'ì´ ì§ˆëŸ‰',
			'targeting_players': 'ìž ìž¬ì  íƒ€ê²ŸíŒ…'
		},
		'settingMenu': {
			'language': 'ì–¸ì–´',
			'CellAnimation': 'ì• ë‹ˆë©”ì´ì…˜ ì§€ì—°',
			'zoomSpeed': 'ì¤Œ ì†ë„',
			'cameraSpeed': 'ì¹´ë©”ë¼ ì†ë„ [2 ê¸°ë³¸ê°’]',
			'eatAnimation': 'ì„¸í¬ ë¨¹ê¸°[í¡ìˆ˜] ì• ë‹ˆë©”ì´ì…˜',
			'autoZoom': 'ìžë™ í™•ëŒ€/ì¶•ì†Œ',
			'cellTextAnimation': 'ì„¸í¬ í…ìŠ¤íŠ¸ ì• ë‹ˆë©”ì´ì…˜',
			'autoHideText': 'í…ìŠ¤íŠ¸ ìžë™ ìˆ¨ê¸°ê¸°',
			'hideOwnNick': 'Hide own nick',
			'hideOwnMass': 'Hide own mass',
			'cellNick': 'ì„¸í¬ ë‹‰ë„¤ìž„',
			'cellMass': 'ì„¸í¬ ì§ˆëŸ‰',
			'nickShadow': 'ê·¸ë¦¼ìž [ì„¸í¬ ë‹‰ë„¤ìž„]',
			'massShadow': 'ê·¸ë¦¼ìž [ì„¸í¬ ì§ˆëŸ‰]',
			'urlSkins': 'URL ìŠ¤í‚¨',
			'hsloSkins': 'HSLO ìŠ¤í‚¨',
			'food': 'ë¨¹ì´',
			'vanillaGrid': 'ë°”ë‹ë¼ ë¬´ëŠ¬',
			'bgSectors': 'ë°”íƒ•í™”ë©´',
			'cursorLine': 'ì»¤ì„œ ì„ ',
			'opponentRings': 'ì§ˆëŸ‰ ê²©ìžì„ ',
			'splitRings': 'Split rings',
			'virusRange': 'ë°”ì´ëŸ¬ìŠ¤ ë²”ìœ„',
			'teamIndicator': 'íŒ€ ëª©ë¡',
			'commander': 'ìœ„ì¹˜ í•‘',
			'chatType': 'ì±„íŒ… ìœ í˜•',
			'targeting': 'ì„¸í¬ íƒ€ê²ŸíŒ…[ê´€ì „ ëª¨ë“œ]',
			'sounds': 'ì†Œë¦¬',
			'opt_on': 'ì¼œì§',
			'opt_off': 'êº¼ì§',
			'opt_stepped': 'ë‹¿ì€ê³³',
			'opt_linear': 'ì„ í˜•',
			'opt_shortened': 'ì§§ì€',
			'opt_full': 'ì „ì²´',
			'opt_nick': 'ë‹‰ë„¤ìž„',
			'opt_mass': 'ì§ˆëŸ‰',
			'opt_both': 'ë‹‰ë„¤ìž„+ ì§ˆëŸ‰',
			'opt_perf': 'ì‹¤ì ',
			'opt_normal': 'ë³´í†µ',
			'opt_urlSkin': 'Url ìŠ¤í‚¨',
			'opt_hsloSkin': 'Hslo ìŠ¤í‚¨',
			'opt_allSkin': 'ëª¨ë“  ìŠ¤í‚¨',
			'opt_singleClr': 'Mono colored',
			'opt_rainbow': 'ë¬´ì§€ê°œ',
			'opt_onlyLines': 'í…Œë‘ë¦¬ë§Œ',
			'opt_snowflakes': 'ëˆˆì†¡ì´',
			'opt_chatroom': 'ì±„íŒ…ë°©',
			'opt_popup': 'ì±„íŒ… ì•Œë¦¼'
		},
		'hkMenu': {
			'title': 'ë‹¨ì¶•í‚¤',
			'toggleMenuKey': 'ë©”ì¸ë©”ë‰´ ë„ê¸° ',
			'feedKey': 'feed ë¨¹ì´',
			'macroFeedKey': 'ë§¤í¬ë¡œ feedë¨¹ì´',
			'splitKey': 'ë¶„ì—´',
			'doubleSplitKey': 'ì´ì¤‘ ë¶„ì—´',
			'split16Key': '16ë¶„ì—´',
			'stopKey': 'ì„¸í¬ ì´ë™ì¤‘ì§€',
			'chatKey': 'ì±„íŒ… ì¼œê¸°',
			'freeSpectateKey': 'íˆ¬ì‚¬ ëª¨ë“œ ì „í™˜',
			'toggleSplitRings': 'Toggle split rings',
			'toggleOpponentRings': 'Toggle opponent rings',
			'toggleNick': 'ì„¸í¬ ë‹‰ì„ ì„¤ì •í•©ë‹ˆë‹¤',
			'toggleMass': 'ì„¸í¬ ì§ˆëŸ‰ì„ ì„¤ì •í•©ë‹ˆë‹¤',
			'toggleSkin': 'ìŠ¤í‚¨ ì„¤ì •',
			'toggleFood': 'ë¨¹ì´ ì„¤ì •',
			'respawnKey': 'ë¹ ë¥¸ ë¶€í™œ',
			'command0Key': 'ëª…ë ¹ 0',
			'command1Key': 'ëª…ë ¹ 1',
			'command2Key': 'ëª…ë ¹ 2',
			'command3Key': 'ëª…ë ¹ 3',
			'command4Key': 'ëª…ë ¹ 4',
			'command5Key': 'ëª…ë ¹ 5',
			'command6Key': 'ëª…ë ¹ 6',
			'command7Key': 'ëª…ë ¹ 7',
			'command8Key': 'ëª…ë ¹ 8',
			'command9Key': 'ëª…ë ¹ 9',
			'zoom1key': 'ì¤Œ ìˆ˜ì¤€ 1',
			'zoom2key': 'ì¤Œ ìˆ˜ì¤€  2',
			'zoom3key': 'ì¤Œ ìˆ˜ì¤€ 3',
			'zoom4key': 'ì¤Œ ìˆ˜ì¤€ 4',
			'zoom5key': 'ì¤Œ ìˆ˜ì¤€ 5'
		},
		'mouseMenu': {
			'title': 'ë§ˆìš°ìŠ¤',
			'feed': 'í”¼ë“œfeed',
			'macroFeed': 'ë§¤í¬ë¡œ í”¼ë“œfeed',
			'split': 'ë¶„ì—´',
			'doubleSplit': 'ì´ì¤‘ ë¶„ì—´',
			'split16': '16 ë¶„ì—´',
			'commander': 'ìœ„ì¹˜ í•‘',
			'off': 'êº¼ì§',
			'lmb': 'ì™¼ìª½ í´ë¦­',
			'rmb': 'ì˜¤ë¥¸ìª½ í´ë¦­',
			'scroll': 'íœ  í´ë¦­',
			'targeting_h1': 'íƒ€ê²ŸíŒ…',
			'targeting_txt1': 'íƒ€ê²Ÿ ìž ê¸ˆ 1  ',
			'targeting_txt2': 'íƒ€ê²Ÿ ìž ê¸ˆ 2  ',
			'targeting_txt3': 'ìŠ¤í¬ë¡¤ í´ë¦­ orê´€ì „ í‚¤ ì „í™˜',
			'targeting_txt4': 'ì •ìƒ ì„¸í¬ ëª¨ë“œì—ì„œ ë§ˆìš°ìŠ¤ ì¶”ì ì— ì „í™˜  ',
			'targeting_txt5': 'íƒ€ê²Ÿ ëª¨ë“œì—ì„œ ë§ˆìš°ìŠ¤ ì¶”ì ì— ì „í™˜  ',
			'targeting_txt6': 'ë§ˆìš°ìŠ¤ ì¶”ì ì—ì„œ ìµœê³  ì„¸í¬ ëª¨ë“œë¡œ ì „í™˜ '
		},
		'commandsMenu': {
			'title': 'ëª…ë ¹ì–´',
			'command0': 'ì‹œë°œ!',
			'command1': 'ë¹¨ë¦¬ì™€ì£¼ì„¸ìš”!',
			'command2': 'ë‚˜ì—ê²Œ ë„£ì–´ì¤˜!',
			'command3': 'ì—¬ê¸°ì— ë„ì›€ìš”ì²­ %sector%!',
			'command4': 'ì  ì´ê³³ì—ì„œ ë°œê²¬ %sector%!',
			'command5': 'íŒ€ì›ì´ í•„ìš”í•´!',
			'command6': 'ë°”ì´ëŸ¬ìŠ¤ ë¶€ì…”!',
			'command7': 'ë°”ì´ëŸ¬ìŠ¤ ì´!',
			'command8': 'ë¯¸ë¼!',
			'command9': 'ë‚šì‹œí•˜ìž'
		},
		'themeMenu': {
			'selectedPreset': 'Theme preset',
			'cursor': 'ì»¤ì„œ',
			'lbSize': 'ë¦¬ë”ë³´ë“œ í¬ê¸°',
			'chatFontSize': 'Chat font size',
			'chatroomSize': 'Chatroom size',
			'minimapSize': 'ë¯¸ë‹ˆë§µ í¬ê¸°',
			'skinBorder': 'ìŠ¤í‚¨ í…Œë‘ë¦¬',
			'cellTransparency': 'ì„¸í¬ íˆ¬ëª…ë„',
			'lightenCellColor': 'ë°ì€ ì„¸í¬ ìƒ‰ê¹”',
			'borderColor': 'í…Œë‘ë¦¬ ìƒ‰ê¹”',
			'borderWidth': 'í…Œë‘ë¦¬ ë„ˆë¹„',
			'gridColor': 'ëˆˆê¸ˆ ìƒ‰',
			'gridTextColor': 'ê²©ìž í…ìŠ¤íŠ¸ ìƒ‰ê¹”',
			'gridTextSize': 'ëˆˆê¸ˆ í…ìŠ¤íŠ¸ í¬ê¸°',
			'gridTextFont': 'ê²©ìž í…ŒìŠ¤íŠ¸ ê¸€ê¼´',
			'gridWidth': 'ëˆˆê¸ˆ ë„ˆë¹„',
			'nickColor': 'ë‹‰ë„¤ìž„ ì»¬ëŸ¬',
			'nickStrokeColor': 'ë‹‰ë„¤ìž„ ìƒ‰ê¹”íš',
			'cellNickSize': 'ë‹‰ í¬ê¸°',
			'nickFont': 'ë‹‰ ê¸€ê¼´',
			'massColor': 'ì§ˆëŸ‰ ìƒ‰ê¹”',
			'massStrokeColor': 'ì§ˆëŸ‰ ìƒ‰ê¹”íš',
			'cellMassSize': 'ì§ˆëŸ‰ í¬ê¸°',
			'massFont': 'ì§ˆëŸ‰ ê¸€ê¼´',
			'foodColor': 'ë¨¹ì´ ìƒ‰ê¹”',
			'foodSize': 'ë¨¹ì´ í¬ê¸°',
			'virusColor': 'ë°”ì´ëŸ¬ìŠ¤ ìƒ‰ê¹”',
			'virusBorderColor': 'ë°”ì´ëŸ¬ìŠ¤ í…Œë‘ë¦¬ ìƒ‰',
			'virusBorderWidth': 'ë°”ì´ëŸ¬ìŠ¤ í…Œë‘ë¦¬ ë„ˆë¹„',
			'virusDecor': 'ë°”ì´ëŸ¬ìŠ¤ ìž¥ì‹',
			'backgroundColor': 'ë°°ê²½ ìƒ‰ê¹”',
			'commanderColor': 'ìœ„ì¹˜ í•‘ ìƒ‰ê¹”',
			'indicatorSize': 'íŒ€ ì•„ì´ì½˜ í¬ê¸°',
			'team1color': 'íŒ€ 1 ìƒ‰[ë”ë¸” íƒœê·¸ ëª¨ë“œ]',
			'team2color': 'íŒ€ 2 ìƒ‰[ë”ë¸” íƒœê·¸ ëª¨ë“œ]',
			'ghostColor': 'Ghost cells color [minimap]',
			'selfColor': 'Self cell color [minimap]',
			'selfViewportColor': 'Self viewport color [minimap]',
			'selfViewportAlpha': 'Self viewport opacity [minimap]',
			'topViewportColor': 'Top viewport color [minimap]',
			'topViewportAlpha': 'Top viewport opacity [minimap]',
			'teammateColor': 'Teammate cells color [minimap]',
			'teammateNameColor': 'Teammate\'s name color [minimap]',
			'customBGColor': 'Custom Fantasy Color',
			'customBGAlpha': 'Custom Fantasy Transparency',
			'customBG': 'Custom Fantasy Background',
			'customLB': 'Custom Leaderboard Head',
			'customMB': 'Custom Music Box',
			'getSettings': 'Get Settings',
			'loadSettings': 'Load Settings',
			'resetSettings': 'Reset Settings',
			'on': 'ì¼œì§',
			'off': 'êº¼ì§'
		},
		'updateHud': {
			'title': 'HSLO V5 Special Edition - 5.3.2 (17)',
			'desc': 'Read #ext in discord for more information.',
			'versionChange': 'Due to change in version ' + ('(' + (localStorage.getItem('version') || '5.3.0') + ' to 5.3.2),') + '<br>all settings will be reseted after you refresh the page.<br>You should save your settings and import them after refreshing.',
			'updateContent': 'Update:<br>1. Fully support Captcha V3'
		}
	}, _16350690.lang_ES = {
		'mainMenu': {
			'btn_settings': 'Configuracion',
			'btn_play': 'Jugar',
			'btn_spectate': 'Espectear',
			'btn_inputs': 'Hot Keys',
			'btn_theme': 'Tema/DiseÃ±o',
			'input_tag1': 'Tag',
			'input_tag2': 'Tag 2',
			'input_nick': 'Nick',
			'input_skinUrl': 'Skin URL (imgur)',
			'select_ffa': 'FFA',
			'select_party': 'Party',
			'select_teams': 'Teams',
			'select_experimental': 'Experimental',
			'input_token': 'Codigo Party',
			'btn_join': 'Entrar',
			'btn_create': 'Crear',
			'btn_submit': 'Submit',
			'btn_get': 'Get',
			'btn_load': 'Load',
			'btn_reset': 'Reset'
		},
		'notif': {
			'cantPlay2Tag': 'Tu no puedes jugar cuando utilizas la funcion de doble tag.',
			'hsloNetConn': 'Conectado a HSLO Networks.',
			'hsloNetDisconn': 'Desconectado de HSLO networks.',
			'invalidSkinUrl': 'Invalid skin URL',
			'login_lastSession': 'Logged in from last session data.',
			'sdk_error': 'SDK no ha cargado.',
			'alreadyLoggedIn': 'Ya te encuentras conectado.',
			'login_success': 'Conectado',
			'login_error': 'Error al conectar!',
			'logout': 'Desconectar',
			'nickChangeInGame': 'No puedes cambiar tu nickname cuando te encuentras jugando.',
			'targeting_on': 'Haga clic en una celula para comenzar a seguirla. Vea las instrucciones en el menÃº de configuraciÃ³n del mouse.',
			'targeting_off': 'El seguimiento estÃ¡ desactivada. EnciÃ©ndalo en el menÃº de configuraciÃ³n para usarlo.',
			'target_unnamed': 'Cannot target unnamed cells.',
			'hsloSkin_noAcc': 'Account does not exist.'
		},
		'leaderboard': {
			'title': 'HSLO V5'
		},
		'huds': {
			'enterChatMsg': 'Ingresa el mensaje...',
			'teamlist_title': 'Jugadores de equipo',
			'score': 'PuntuaciÃ³n',
			'num1position': '#1 PosiciÃ³n',
			'pause': 'Pausado',
			'targeting_bigCellVp': 'BIGGEST CELL VIEWPORT',
			'targeting_followVp': 'VIEWPORT FOLLOWING MOUSE',
			'targeting_totalMass': 'MASA TOTAL',
			'targeting_players': 'JUGADOR OBJETIVO'
		},
		'settingMenu': {
			'language': 'Lenguaje',
			'CellAnimation': 'Retraso de animaciÃ³n',
			'zoomSpeed': 'Velocidad del Zoom',
			'cameraSpeed': 'Velocidad de Camara [2 es Preterminado]',
			'eatAnimation': 'Celula comiendo animacion',
			'autoZoom': 'Auto zoom',
			'cellTextAnimation': 'Animacion texto en celula',
			'autoHideText': 'Auto Ocultar texto',
			'hideOwnNick': 'Hide own nick',
			'hideOwnMass': 'Hide own mass',
			'cellNick': 'Nick de la celula',
			'cellMass': 'Masa de la celula',
			'nickShadow': 'Trazo del nick',
			'massShadow': 'Trazo del masa',
			'urlSkins': 'URL skins',
			'hsloSkins': 'HSLO skins',
			'food': 'Comida/Pellets',
			'vanillaGrid': 'Cuadricula Vanilla',
			'bgSectors': 'Tipo de sector',
			'cursorLine': 'Linea del cursor',
			'opponentRings': 'Rango del oponente',
			'splitRings': 'Split rings',
			'virusRange': 'Rango del virus',
			'teamIndicator': 'Indicador de compaÃ±ero',
			'commander': 'SeÃ±al/Comandante',
			'chatType': 'Tipo de Chat',
			'targeting': 'Seguiento de celula',
			'sounds': 'Sonidos',
			'opt_on': 'Activado',
			'opt_off': 'Desactivado',
			'opt_stepped': 'Stepped',
			'opt_linear': 'Lineal',
			'opt_shortened': 'Acortado',
			'opt_full': 'Completo',
			'opt_nick': 'Nick',
			'opt_mass': 'Masa',
			'opt_both': 'Nick + Masa',
			'opt_perf': 'Rendimiento',
			'opt_normal': 'Normal',
			'opt_urlSkin': 'Url skins',
			'opt_hsloSkin': 'Hslo skins',
			'opt_allSkin': 'Todas las skins',
			'opt_singleClr': 'Solo un color',
			'opt_rainbow': 'Arcoiris',
			'opt_onlyLines': 'Solo lineas',
			'opt_snowflakes': 'Copos de nieve',
			'opt_chatroom': 'Chatroom',
			'opt_popup': 'Chat emergente'
		},
		'hkMenu': {
			'title': 'Hotkeys',
			'toggleMenuKey': 'Ocultar menu principal',
			'feedKey': 'Cebar',
			'macroFeedKey': 'Cebar rapido [Macro]',
			'splitKey': 'Dividirse',
			'doubleSplitKey': 'DivisiÃ³n doble',
			'split16Key': 'Dividir 16',
			'stopKey': 'Detener el movimiento de la celula',
			'chatKey': 'Ocultar Chat',
			'freeSpectateKey': 'Toggle spectate mode',
			'toggleSplitRings': 'Toggle split rings',
			'toggleOpponentRings': 'Toggle opponent rings',
			'toggleNick': 'Ocultar nick de la celula',
			'toggleMass': 'Ocultar masa de la celula',
			'toggleSkin': 'Ocultar skin',
			'toggleFood': 'Ocultar comida/pellets',
			'respawnKey': 'Reaparicion rapida',
			'command0Key': 'Comando 0',
			'command1Key': 'Comando 1',
			'command2Key': 'Comando 2',
			'command3Key': 'Comando 3',
			'command4Key': 'Comando 4',
			'command5Key': 'Comando 5',
			'command6Key': 'Comando 6',
			'command7Key': 'Comando  7',
			'command8Key': 'Comando 8',
			'command9Key': 'Comando 9',
			'zoom1key': 'Zoom nivel 1',
			'zoom2key': 'Zoom nivel 2',
			'zoom3key': 'Zoom nivel 3',
			'zoom4key': 'Zoom nivel 4',
			'zoom5key': 'Zoom nivel 5'
		},
		'mouseMenu': {
			'title': 'Raton',
			'feed': 'Cebar',
			'macroFeed': 'Cebar rapido[Macro]',
			'split': 'Division',
			'doubleSplit': 'Doble division',
			'split16': 'Division por 16',
			'commander': 'Comandante',
			'off': 'Desactivado',
			'lmb': 'Clic izquierdo',
			'rmb': 'Clic derecho',
			'scroll': 'Clic central(Rueda)',
			'targeting_h1': 'Targeting',
			'targeting_txt1': 'Lock target 1',
			'targeting_txt2': 'Lock target 2',
			'targeting_txt3': 'Middle click or Toggle spectate key',
			'targeting_txt4': 'Toggle top cell mode to follow mouse mode',
			'targeting_txt5': 'Toggle targeting mode to follow mouse mode',
			'targeting_txt6': 'Toggle follow mouse mode to top cell mode'
		},
		'commandsMenu': {
			'title': 'Comandos',
			'command0': 'Mierda!',
			'command1': 'Alimentame!',
			'command2': 'Dividete en mi!',
			'command3': 'Necesito ayuda en %sector%!',
			'command4': 'Enemigo avistado en %sector%!',
			'command5': 'Necesito compaÃ±ero!',
			'command6': 'Lanza el virus!',
			'command7': 'Come el virus!',
			'command8': 'Haz baiteo!',
			'command9': 'Tricksplit falso!'
		},
		'themeMenu': {
			'selectedPreset': 'Theme preset',
			'cursor': 'Puntero',
			'lbSize': 'TamaÃ±o del leaderboard',
			'chatFontSize': 'Chat font size',
			'chatroomSize': 'Chatroom size',
			'minimapSize': 'TamaÃ±o del minimapa',
			'skinBorder': 'Borde de la Skin',
			'cellTransparency': 'Transparencia de la celula',
			'lightenCellColor': 'Claridad del color de la celula',
			'borderColor': 'Color del borde',
			'borderWidth': 'Ancho del borde',
			'gridColor': 'Color del grid',
			'gridTextColor': 'Color del texto del grid',
			'gridTextSize': 'TamaÃ±o de texto del grid',
			'gridTextFont': 'Fuente de texto del grid',
			'gridWidth': 'Ancho del grid',
			'nickColor': 'Color del nick',
			'nickStrokeColor': 'Color del borde del nick',
			'cellNickSize': 'TamaÃ±o del nick',
			'nickFont': 'Fuente del nick',
			'massColor': 'Color de la masa',
			'massStrokeColor': 'Color del borde de la masa',
			'cellMassSize': 'TamaÃ±o de la masa',
			'massFont': 'Fuente de la masa',
			'foodColor': 'Color de la comida',
			'foodSize': 'TamaÃ±o de la comida',
			'virusColor': 'Color del virus',
			'virusBorderColor': 'Color del borde del virus',
			'virusBorderWidth': 'Ancho del borde del virus',
			'virusDecor': 'Decoracion del virus',
			'backgroundColor': 'Color del fondo',
			'commanderColor': 'Color del comandante',
			'indicatorSize': 'TamaÃ±o del indicador de compaÃ±ero',
			'team1color': 'Color Equipo 1 [Modo doble TAG]',
			'team2color': 'Color Equipo 2 [Modo doble TAG]',
			'ghostColor': 'Ghost cells color [minimap]',
			'selfColor': 'Self cell color [minimap]',
			'selfViewportColor': 'Self viewport color [minimap]',
			'selfViewportAlpha': 'Self viewport opacity [minimap]',
			'topViewportColor': 'Top viewport color [minimap]',
			'topViewportAlpha': 'Top viewport opacity [minimap]',
			'teammateColor': 'Teammate cells color [minimap]',
			'teammateNameColor': 'Teammate\'s name color [minimap]',
			'customBGColor': 'Custom Fantasy Color',
			'customBGAlpha': 'Custom Fantasy Transparency',
			'customBG': 'Custom Fantasy Background',
			'customLB': 'Custom Leaderboard Head',
			'customMB': 'Custom Music Box',
			'getSettings': 'Get Settings',
			'loadSettings': 'Load Settings',
			'resetSettings': 'Reset Settings',
			'on': 'Activado',
			'off': 'Desactivado'
		},
		'updateHud': {
			'title': 'HSLO V5 Special Edition - 5.3.2 (17)',
			'desc': 'Read #ext in discord for more information.',
			'versionChange': 'Due to change in version ' + ('(' + (localStorage.getItem('version') || '5.3.0') + ' to 5.3.2),') + '<br>all settings will be reseted after you refresh the page.<br>You should save your settings and import them after refreshing.',
			'updateContent': 'Update:<br>1. Fully support Captcha V3'
		}
	};
	var _4629996 = new((() => {
		function _3015850() {
			plzsuckmydick(this, _3015850);
		}
		return plzdsmd(_3015850, [{
			'key': 'init',
			'value'() {
				this.isOpened = false, this.div = _2610335('#settings'), this.language = _1772312.get('settings', 'language') || _4428048.browser, this.CellAnimation = ~~_1772312.get('settings', 'CellAnimation') || 140, this.eatAnimation = _1772312.get('settings', 'eatAnimation') || 'on', this.massUpdateInterval = _1772312.get('settings', 'massUpdateInterval') || 500, this.zoomSpeed = ~~_1772312.get('settings', 'zoomSpeed') || 92, this.cameraSpeed = ~~_1772312.get('settings', 'cameraSpeed') || 2, this.autoZoom = _1772312.get('settings', 'autoZoom') || 'off', this.cellTextAnimation = _1772312.get('settings', 'cellTextAnimation') || 'on', this.autoHideText = _1772312.get('settings', 'autoHideText') || 'on', this.cellNick = _1772312.get('settings', 'cellNick') || 'on', this.nickShadow = _1772312.get('settings', 'nickShadow') || 'off', this.cellMass = _1772312.get('settings', 'cellMass') || 'shortened', this.massShadow = _1772312.get('settings', 'massShadow') || 'off', this.virusMass = _1772312.get('settings', 'virusMass') || 'text', this.hideOwnNick = _1772312.get('settings', 'hideOwnNick') || 'on', this.hideOwnMass = _1772312.get('settings', 'hideOwnMass') || 'off', this.hideOwnSkin = _1772312.get('settings', 'hideOwnSkin') || 'off', this.urlSkins = _1772312.get('settings', 'urlSkins') || 'on', this.hsloSkins = _1772312.get('settings', 'hsloSkins') || 'on', this.food = _1772312.get('settings', 'food') || 'monoColored', this.bgSectors = _1772312.get('settings', 'bgSectors') || 'normal', this.vanillaGrid = _1772312.get('settings', 'vanillaGrid') || 'off', this.cursorLine = _1772312.get('settings', 'cursorLine') || 'off', this.teamIndicator = _1772312.get('settings', 'teamIndicator') || 'on', this.opponentRings = _1772312.get('settings', 'opponentRings') || 'off', this.splitRings = _1772312.get('settings', 'splitRings') || 'off', this.virusRange = _1772312.get('settings', 'virusRange') || 'off', this.borderGlow = _1772312.get('settings', 'borderGlow') || 'off', this.virusGlow = _1772312.get('settings', 'virusGlow') || 'off', this.foodGlow = _1772312.get('settings', 'foodGlow') || 'off', this.multiboxRing = _1772312.get('settings', 'multiboxRing') || 'on', this.maouCircleSkin = _1772312.get('settings', 'maouCircleSkin') || 'off', this.commander = _1772312.get('settings', 'commander') || 'off', this.sounds = _1772312.get('settings', 'sounds') || 'on', this.topZoom = _1772312.get('settings', 'topZoom') || 'on', this.showViewportBoxes = _1772312.get('settings', 'showViewportBoxes') || 'off', this.showBotNotifNCount = 'off', this.targeting = _1772312.get('settings', 'targeting') || 'off', this.chatType = _1772312.get('settings', 'chatType') || 'popup', this.multiboxMode = _1772312.get('settings', 'multiboxMode') || 'on', m.alert('HSLO', 'Multibox mode [' + this.multiboxMode.toUpperCase() + ']'), this.setDomValues(), this.addEvents();
			}
		}, {
			'key': 'setDomValues',
			'value'() {
				_2610335('.settings-options').each(function () {
					const _3015850 = _2610335(this).attr('type');
					'range' === _3015850 ? _4629996.handleRange(this, 2) : 'options' === _3015850 && _4629996.handleOptions(this, 2);
				}), this.toggleChatroom(), this.changeLanguage();
			}
		}, {
			'key': 'addEvents',
			'value'() {
				const _3015850 = this;
				_2610335('.settings-container').perfectScrollbar(), _2610335('.settings-container .fa-chevron-left').each(function () {
					const _3015850 = this;
					_2610335(this).click(() => {
						const _1196931 = _2610335(_3015850).parent(),
							_7359342 = _2610335(_1196931).attr('type');
						'options' === _7359342 ? _4629996.handleOptions(_1196931, 0) : 'range' === _7359342 && _4629996.handleRange(_1196931, 0);
					});
				}), _2610335('.settings-container span.outer').each(function () {
					const _3015850 = this;
					_2610335(this).click(_1685639 => {
						const _5318914 = _2610335(_3015850).parent();
						_4629996.handleRange(_5318914, 3, _1685639.offsetX);
					});
				}), _2610335('.settings-container .fa-chevron-right').each(function () {
					const _3015850 = this;
					_2610335(this).click(() => {
						const _5410500 = _2610335(_3015850).parent(),
							_2646041 = _2610335(_5410500).attr('type');
						'options' === _2646041 ? _4629996.handleOptions(_5410500, 1) : 'range' === _2646041 && _4629996.handleRange(_5410500, 1);
					});
				}), _2610335('.settings-close').click(() => _3015850.close());
			}
		}, {
			'key': 'toggle',
			'value'() {
				this.isOpened ? this.close() : this.open();
			}
		}, {
			'key': 'close',
			'value'() {
				this.isOpened = false, this.div.fadeOut(250);
			}
		}, {
			'key': 'open',
			'value'() {
				this.isOpened = true, this.div.fadeIn(250);
			}
		}, {
			'key': 'handleOptions',
			'value'(_3015850, _3899211) {
				for (var _2392579, _5930881 = _2610335(_3015850).attr('name'), _16350690 = _2610335(_3015850).find('b'), _5596694 = _16350690.length, _5596078 = _5596694, _13696003 = 0; _5596078--;) _2392579 = _16350690[_5596078], 'active' === _2610335(_2392579).attr('class') && (_13696003 = _5596078);
				if (1 === _3899211) {
					const _3015850 = _13696003 + 1 < _5596694 ? _13696003 + 1 : 0;
					_2610335(_16350690[_13696003]).removeAttr('class'), _2610335(_16350690[_3015850]).attr('class', 'active');
					const _3899211 = _2610335(_16350690[_3015850]).attr('value');
					this.saveSettings(_5930881, _3899211);
				} else if (0 === _3899211) {
					const _3015850 = 0 < _13696003 ? _13696003 - 1 : _5596694 - 1;
					_2610335(_16350690[_13696003]).removeAttr('class'), _2610335(_16350690[_3015850]).attr('class', 'active');
					const _3899211 = _2610335(_16350690[_3015850]).attr('value');
					this.saveSettings(_5930881, _3899211);
				} else if (2 === _3899211) {
					_2610335(_16350690[_13696003]).removeAttr('class');
					for (let _3015850, _3899211 = _5596694; _3899211--;)
						if (_3015850 = _16350690[_3899211], _2610335(_3015850).attr('value') === this[_5930881]) {
							_2610335(_3015850).attr('class', 'active');
							break;
						}
				}
			}
		}, {
			'key': 'handleRange',
			'value'(_3015850, _5767755) {
				const _16544537 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
					_3541509 = _2610335(_3015850).attr('name'),
					_16350690 = _2610335(_3015850).find('span'),
					_13547690 = _16350690[0],
					_1819679 = _16350690[1],
					_1057660 = _2610335(_16350690[2]),
					_5821427 = ~~_2610335(_13547690).attr('min'),
					_1772312 = ~~_2610335(_13547690).attr('max'),
					_4075378 = ~~_2610335(_13547690).attr('step'),
					_98185 = ~~_2610335(_13547690).attr('value');
				if (1 === _5767755 && _98185 + _4075378 <= _1772312) {
					const _3015850 = _4075378 + _98185;
					_2610335(_13547690).attr('value', _3015850), _2610335(_1819679).css('width', ~~(100 * (_3015850 - _5821427) / (_1772312 - _5821427)) + 'px'), _1057660.text('. + _3015850 + '), this.saveSettings(_3541509, ~~_3015850);
				} else if (0 === _5767755 && _98185 - _4075378 >= _5821427) {
					const _3015850 = _98185 - _4075378;
					_2610335(_13547690).attr('value', _3015850), _2610335(_1819679).css('width', ~~(100 * (_3015850 - _5821427) / (_1772312 - _5821427)) + 'px'), _1057660.text('. + _3015850 + '), this.saveSettings(_3541509, ~~_3015850);
				} else if (2 === _5767755) {
					const _3015850 = this[_3541509];
					_2610335(_13547690).attr('value', _3015850), _2610335(_1819679).css('width', ~~(100 * (_3015850 - _5821427) / (_1772312 - _5821427)) + 'px'), _1057660.text('. + _3015850 + ');
				} else if (3 === _5767755) {
					let _3015850 = 0 | _16544537 / 100 * (_1772312 - _5821427);
					_3015850 = (0 | _3015850 / _4075378) * _4075378;
					const _5767755 = 100 * ((_3015850 += _5821427) - _5821427) / (_1772312 - _5821427);
					_2610335(_13547690).attr('value', _3015850), _2610335(_1819679).css('width', ~~_5767755 + 'px'), _1057660.text('. + _3015850 + '), this.saveSettings(_3541509, ~~_3015850);
				}
			}
		}, {
			'key': 'saveSettings',
			'value'(_3015850, _6128016) {
				this[_3015850] = _6128016, 'multiboxMode' === _3015850 && A.isAliveTab2 && (m.alert('HSLO', 'Tab 2 must not be alive'), this.multiboxMode = 'on', _1772312.set('settings', 'multiboxMode', 'on'), this.setDomValues()), !A.isAliveTab2 && 'multiboxMode' === _3015850 && m.alert('HSLO', 'Multibox mode [' + this.multiboxMode.toUpperCase() + ']'), !A.isAliveTab2 && 'multiboxMode' === _3015850 && (this.multiboxMode === 'off' ? (q.Tab2.close(), q.Tab2 = null, j.protocolKey2 = null, j.clientKey2 = null, Q.loggedIn2 = false, this.multiboxRing = 'off', this.setDomValues()) : (q.Tab2 = new WebSocket('wss://' + q.address), q.Tab2.binaryType = 'arraybuffer', q.Tab2.onopen = () => q.onOpen(2), q.Tab2.onmessage = _3015850 => q.onMessage(_3015850, 2), q.Tab2.onclose = () => q.onClose(2), q.Tab2.onerror = () => q.onError(2), this.multiboxRing = 'on', this.setDomValues())), !A.isAliveTab2 && 'multiboxMode' === _3015850 && (this.multiboxMode === 'off' ? (J.ogarWS2.close(), J.ogarWS2 = null) : (ae.connectedIndex = 1, J.ogarWS2 = new WebSocket('wss://' + J.address), J.ogarWS2.binaryType = 'arraybuffer', J.ogarWS2.onopen = () => J.onOpen(2), J.ogarWS2.onmessage = _3015850 => J.onMessage(_3015850, 2), J.ogarWS2.onclose = () => J.onClose(2), J.ogarWS2.onerror = () => J.onError(2))), 'chatType' === _3015850 && this.toggleChatroom(), 'language' === _3015850 && this.changeLanguage(), 'nickShadow' === _3015850 && P.nickCaches.clear(), 'massShadow' === _3015850 && P.massCaches.clear(), 'massUpdateInterval' === _3015850 && (P.massUpdateInterval = this.massUpdateInterval), _1772312.set('settings', _3015850, _6128016), H.init(), de.init(), be.init(), 'custom' !== oe.selectedPreset && (oe.selectedPreset = 'custom', _1772312.set('theme', 'selectedPreset', 'custom'), oe.setDomValues());
			}
		}, {
			'key': 'changeLanguage',
			'value'() {
				_4428048.change(), u.refresh();
			}
		}, {
			'key': 'toggleChatroom',
			'value'() {
				'chatroom' === this.chatType ? _2610335('#chatroom').show() : _2610335('#chatroom').hide();
			}
		}]), _3015850;
	})())();
	window.k = _4629996;
	const _5326466 = (() => {
			function _4497146() {
				plzsuckmydick(this, _4497146);
			}
			return plzdsmd(_4497146, null, [{
				'key': 'init',
				'value'() {
					this.isOpened = false, this.target = 'hotkeys', this.div = _2610335('#inputs'), this.addEvents(), d.init(), a.init(), _.init(), u.init();
				}
			}, {
				'key': 'toggle',
				'value'() {
					this.isOpened ? this.close() : this.open();
				}
			}, {
				'key': 'close',
				'value'() {
					this.isOpened = false, this.div.fadeOut(250);
				}
			}, {
				'key': 'open',
				'value'() {
					this.isOpened = true, this.div.fadeIn(250);
				}
			}, {
				'key': 'addEvents',
				'value'() {
					const _16641147 = this;
					_2610335('.inputs-tab').each(function () {
						const _16641147 = this;
						_2610335(this).click(() => {
							const _1099977 = _2610335(_16641147).attr('target');
							'#hotkeys' === _1099977 ? (_2610335('#hotkeys').addClass('active'), _2610335('#commands').removeClass('active'), _2610335('#mouse').removeClass('active'), _2610335('.inputs-tab[target=\"#hotkeys\"]').addClass('active'), _2610335('.inputs-tab[target=\"#mouse\"]').removeClass('active'), _2610335('.inputs-tab[target=\"#commands\"]').removeClass('active'), _4497146.target = 'hotkeys') : '#mouse' === _1099977 ? (_2610335('#mouse').addClass('active'), _2610335('#hotkeys').removeClass('active'), _2610335('#commands').removeClass('active'), _2610335('.inputs-tab[target=\"#hotkeys\"]').removeClass('active'), _2610335('.inputs-tab[target=\"#commands\"]').removeClass('active'), _2610335('.inputs-tab[target=\"#mouse\"]').addClass('active'), _4497146.target = 'mouse') : '#commands' === _1099977 && (_2610335('#commands').addClass('active'), _2610335('#hotkeys').removeClass('active'), _2610335('#mouse').removeClass('active'), _2610335('.inputs-tab[target=\"#commands\"]').addClass('active'), _2610335('.inputs-tab[target=\"#hotkeys\"]').removeClass('active'), _2610335('.inputs-tab[target=\"#mouse\"]').removeClass('active'), _4497146.target = 'commands');
						});
					}), _2610335('.inputs-tab.close').click(() => {
						_16641147.close();
					});
				}
			}]), _4497146;
		})(),
		_5736151 = new((() => {
			function _1503136() {
				plzsuckmydick(this, _1503136);
			}
			return plzdsmd(_1503136, [{
				'key': 'init',
				'value'() {
					this.selected = ~~_1772312.get('profiles', 'selected') || 1, this.wheelIsOpened = false, this.tag = _1772312.get('profiles', 'tag') || '', this.setDomValues(), this.addEvents();
				}
			}, {
				'key': 'setDomValues',
				'value'() {
					let _1503136 = _1772312.get('profiles', 'profile' + this.selected);
					_1503136 || (_1503136 = {
						'nick': 'profile ' + this.selected,
						'nick2': 'profile ' + this.selected,
						'skin': 'https://i.imgur.com/kbfjWV1.png',
						'skin2': 'https://i.imgur.com/kbfjWV1.png'
					}), _1772312.set('profiles', 'profile' + this.selected, _1503136), _2610335('#nick').val(_1503136.nick), _2610335('#nick2').val(_1503136.nick2), _2610335('#skin').val(_1503136.skin), _2610335('#skin2').val(_1503136.skin2), _2610335('#tag').val(this.tag), this.updateMainSkin();
					for (let _1503136 = 8; 0 < _1503136;) this.updatePreviewSkin(_1503136), _1503136--;
				}
			}, {
				'key': 'addEvents',
				'value'() {
					const _1503136 = this;
					_2610335('.bar-circle-outer').click(() => {
						_2610335('.skin-wheel').fadeIn(250), _1503136.wheelIsOpened = true;
					}), _2610335('.skin-selector').each(function () {
						const _1503136 = this;
						_2610335(this).click(() => {
							const _6068748 = 0 | _2610335(_1503136).attr('value');
							_5736151.switch(_6068748), _2610335('.skin-wheel').fadeOut(250);
						});
					}), _2610335('.menu-blur').click(() => {
						_1503136.wheelIsOpened && (_2610335('.skin-wheel').fadeOut(250), _1503136.wheelIsOpened = false);
					}), _2610335('#tag').blur(() => {
						_1503136.spectator(_2610335('#tag').val());
					}), _2610335('#nick').blur(() => {
						_1503136.setNick(_2610335('#nick').val());
					}), _2610335('#nick2').blur(() => {
						_1503136.setNick2(_2610335('#nick2').val());
					}), _2610335('#skin').blur(() => {
						_1503136.setSkin(_2610335('#skin').val());
					}), _2610335('#skin2').blur(() => {
						_1503136.setSkin2(_2610335('#skin2').val());
					});
				}
			}, {
				'key': 'switch',
				'value'(_1503136) {
					this.selected = ~~_1503136, _1772312.set('profiles', 'selected', _1503136);
					let _6021625 = _1772312.get('profiles', 'profile' + _1503136);
					_6021625 || (_6021625 = {
						'nick': 'profile ' + this.selected,
						'nick2': 'profile ' + this.selected,
						'skin': 'https://i.imgur.com/kbfjWV1.png',
						'skin2': 'https://i.imgur.com/kbfjWV1.png'
					}), _2610335('#nick').val(_6021625.nick), _2610335('#nick2').val(_6021625.nick2), _2610335('#skin').val(_6021625.skin), _2610335('#skin2').val(_6021625.skin2), A.nick = _6021625.nick, A.nick2 = _6021625.nick2, A.skin = _6021625.skin, A.skin2 = _6021625.skin2, _1772312.set('profiles', 'profile' + this.selected, _6021625), this.updateMainSkin();
				}
			}, {
				'key': 'setNick',
				'value'(_1503136) {
					let _1435087 = _1772312.get('profiles', 'profile' + this.selected);
					_1435087 || (_1435087 = {
						'nick': 'profile ' + this.selected,
						'nick2': 'profile ' + this.selected,
						'skin': 'https://i.imgur.com/kbfjWV1.png',
						'skin2': 'https://i.imgur.com/kbfjWV1.png'
					}), _1435087.nick = _1503136, _1772312.set('profiles', 'profile' + this.selected, _1435087), A.nick = _1503136;
				}
			}, {
				'key': 'setNick2',
				'value'(_1503136) {
					let _1965233 = _1772312.get('profiles', 'profile' + this.selected);
					_1965233 || (_1965233 = {
						'nick': 'profile ' + this.selected,
						'nick2': 'profile ' + this.selected,
						'skin': 'https://i.imgur.com/kbfjWV1.png',
						'skin2': 'https://i.imgur.com/kbfjWV1.png'
					}), _1965233.nick2 = _1503136, _1772312.set('profiles', 'profile' + this.selected, _1965233), A.nick2 = _1503136;
				}
			}, {
				'key': 'setSkin',
				'value'(_1503136) {
					let _5074168 = _1772312.get('profiles', 'profile' + this.selected);
					_5074168 || (_5074168 = {
						'nick': 'profile ' + this.selected,
						'nick2': 'profile ' + this.selected,
						'skin': 'https://i.imgur.com/kbfjWV1.png',
						'skin2': 'https://i.imgur.com/kbfjWV1.png'
					}), _5074168.skin = re.code2Url(re.getImgurCode(_1503136)), _1772312.set('profiles', 'profile' + this.selected, _5074168), this.updateMainSkin(), this.updatePreviewSkin(this.selected), A.skin = _1503136;
				}
			}, {
				'key': 'setSkin2',
				'value'(_1503136) {
					let _4942223 = _1772312.get('profiles', 'profile' + this.selected);
					_4942223 || (_4942223 = {
						'nick': 'profile ' + this.selected,
						'nick2': 'profile ' + this.selected,
						'skin': 'https://i.imgur.com/kbfjWV1.png',
						'skin2': 'https://i.imgur.com/kbfjWV1.png'
					}), _4942223.skin2 = re.code2Url(re.getImgurCode(_1503136)), _1772312.set('profiles', 'profile' + this.selected, _4942223), this.updateMainSkin(), this.updatePreviewSkin(this.selected), A.skin2 = _1503136;
				}
			}, {
				'key': 'spectator',
				'value'(_1503136) {
					A.tag = _1503136, _1772312.set('profiles', 'tag', _1503136);
				}
			}, {
				'key': 'updateMainSkin',
				'value'() {
					const _1503136 = re.code2Url(re.getImgurCode(_2610335('#skin').val()));
					_2610335('.skin-preview').css('background', 'url(' + _1503136 + ')');
				}
			}, {
				'key': 'updatePreviewSkin',
				'value'(_1503136) {
					const _3826878 = _1772312.get('profiles', 'profile' + _1503136);
					if (_3826878) {
						const _4444692 = _3826878.skin;
						_2610335('.skin-selector[value=' + _1503136 + ']').css('background', 'url(' + _4444692 + ')');
					}
				}
			}]), _1503136;
		})())();
	window.classb = _5736151, a = (() => {
		function _4193979() {
			plzsuckmydick(this, _4193979);
		}
		return plzdsmd(_4193979, null, [{
			'key': 'init',
			'value'() {
				this.toggleMenuKey = _1772312.get('hotkeys', 'toggleMenuKey') || 'ESC', this.feedKey = _1772312.get('hotkeys', 'feedKey') || 'W', this.macroFeedKey = _1772312.get('hotkeys', 'macroFeedKey') || 'E', this.splitKey = _1772312.get('hotkeys', 'splitKey') || 'SPACE', this.doubleSplitKey = _1772312.get('hotkeys', 'doubleSplitKey') || 'R', this.split16Key = _1772312.get('hotkeys', 'split16Key') || 'G', this.stopKey = _1772312.get('hotkeys', 'stopKey') || 'S', this.chatKey = _1772312.get('hotkeys', 'chatKey') || 'ENTER', this.multiboxTab = _1772312.get('hotkeys', 'multiboxTab') || 'TAB', this.togglemultiboxRing = _1772312.get('hotkeys', 'togglemultiboxRing') || 'L', this.togglemaouCircleSkin = _1772312.get('hotkeys', 'togglemaouCircleSkin') || 'K', this.freeSpectateKey = _1772312.get('hotkeys', 'freeSpectateKey') || 'Q', this.toggleSplitRings = _1772312.get('hotkeys', 'toggleSplitRings') || 'U', this.toggleOpponentRings = _1772312.get('hotkeys', 'toggleOpponentRings') || 'I', this.toggleNick = _1772312.get('hotkeys', 'toggleNick') || 'N', this.toggleMass = _1772312.get('hotkeys', 'toggleMass') || 'M', this.toggleBGsectors = _1772312.get('hotkeys', 'toggleBGsectors') || 'B', this.toggleFood = _1772312.get('hotkeys', 'toggleFood') || 'F', this.toggleSkin = _1772312.get('hotkeys', 'toggleSkin') || 'A', this.respawnKey = _1772312.get('hotkeys', 'respawnKey') || 'TILDE', this.command0Key = _1772312.get('hotkeys', 'command0Key') || '0', this.command1Key = _1772312.get('hotkeys', 'command1Key') || '1', this.command2Key = _1772312.get('hotkeys', 'command2Key') || '2', this.command3Key = _1772312.get('hotkeys', 'command3Key') || '3', this.command4Key = _1772312.get('hotkeys', 'command4Key') || '4', this.command5Key = _1772312.get('hotkeys', 'command5Key') || '5', this.command6Key = _1772312.get('hotkeys', 'command6Key') || '6', this.command7Key = _1772312.get('hotkeys', 'command7Key') || '7', this.command8Key = _1772312.get('hotkeys', 'command8Key') || '8', this.command9Key = _1772312.get('hotkeys', 'command9Key') || '9', this.command11Key = _1772312.get('hotkeys', 'command11Key') || 'UP', this.command12Key = _1772312.get('hotkeys', 'command12Key') || 'DOWN', this.command13Key = _1772312.get('hotkeys', 'command13Key') || 'LEFT', this.command14Key = _1772312.get('hotkeys', 'command14Key') || 'RIGHT', this.zoom1key = _1772312.get('hotkeys', 'zoom1key') || 'ALT+1', this.zoom2key = _1772312.get('hotkeys', 'zoom2key') || 'ALT+2', this.zoom3key = _1772312.get('hotkeys', 'zoom3key') || 'ALT+3', this.zoom4key = _1772312.get('hotkeys', 'zoom4key') || 'ALT+4', this.zoom5key = _1772312.get('hotkeys', 'zoom5key') || 'ALT+5', this.pressedKeys = new Map(), this.setDomKeys(), this.addEvents();
			}
		}, {
			'key': 'setDomKeys',
			'value'() {
				_2610335('#hotkeys .row').each(function () {
					const _5394901 = _2610335(this).attr('name'),
						_4849470 = _2610335(this).find('.key')[0];
					_2610335(_4849470).val(_4193979[_5394901]);
				});
			}
		}, {
			'key': 'addEvents',
			'value'() {
				const _15013352 = this;
				_2610335('#hotkeys').perfectScrollbar(), _2610335('#hotkeys .row .key').each(function () {
					const _15013352 = this;
					_2610335(this).keydown(_1263662 => {
						_1263662.preventDefault();
						const _1284103 = _2610335(_15013352).parent();
						_4193979.setKey(_1284103, _1263662, _15013352);
					});
				}), _5821427.addEventListener('keydown', _4193979 => _15013352.onKeyDown(_4193979)), _5821427.addEventListener('keyup', _4193979 => _15013352.onKeyUp(_4193979));
			}
		}, {
			'key': 'onKeyDown',
			'value'(_4193979) {
				9 === _4193979.keyCode && _4193979.preventDefault();
				const _1703116 = this.getKey(_4193979);
				if (_1703116 && !this.pressedKeys.has(_1703116) && (this.pressedKeys.set(_1703116, true), !_5326466.isOpened || 'hotkeys' !== _5326466.target)) {
					if (_1703116 === this.chatKey) return void d.chat();
					if (!w.isFocused) {
						if (_1703116 === this.toggleMenuKey) return void z.toggle();
						if (!z.isOpened) {
							if (_4193979.preventDefault(), _1703116 === this.freeSpectateKey && !A.isAlive) return void d.toggleSpectate();
							if (_1703116 === this.respawnKey) return void d.respawn();
							if (A.isAlive) {
								if (_1703116 === this.macroFeedKey) return void d.macroFeed(true);
								if (_1703116 === this.feedKey) return void d.feed();
								if (_1703116 === this.splitKey) return void d.split();
								if (_1703116 === this.doubleSplitKey) return void d.doubleSplit();
								if (_1703116 === this.split16Key) return void d.split16();
								if (_1703116 === this.multiboxTab) return void d.multiboxTab();
							}
							return _1703116 === this.stopKey ? void d.stopMovementToggle() : _1703116 === this.toggleSplitRings ? void d.toggleSplitRings() : _1703116 === this.toggleOpponentRings ? void d.toggleOpponentRings() : _1703116 === this.toggleNick ? void d.toggleCellNick() : _1703116 === this.toggleMass ? void d.toggleCellMass() : _1703116 === this.toggleBGsectors ? void d.toggleBGsectors() : _1703116 === this.toggleFood ? void d.toggleGameFood() : _1703116 === this.toggleSkin ? void d.toggleSkin() : _1703116 === this.togglemultiboxRing ? void d.togglemultiboxRing() : _1703116 === this.togglemaouCircleSkin ? void d.togglemaouCircleSkin() : _1703116 === this.command0Key ? void d.command(0) : _1703116 === this.command1Key ? void d.command(1) : _1703116 === this.command2Key ? void d.command(2) : _1703116 === this.command3Key ? void d.command(3) : _1703116 === this.command4Key ? void d.command(4) : _1703116 === this.command5Key ? void d.command(5) : _1703116 === this.command6Key ? void d.command(6) : _1703116 === this.command7Key ? void d.command(7) : _1703116 === this.command8Key ? void d.command(8) : _1703116 === this.command9Key ? void d.command(9) : _1703116 === this.command11Key ? void d.command(11) : _1703116 === this.command12Key ? void d.command(12) : _1703116 === this.command13Key ? void d.command(13) : _1703116 === this.command14Key ? void d.command(14) : _1703116 === this.zoom1key ? void d.setZoom(0.5) : _1703116 === this.zoom2key ? void d.setZoom(0.25) : _1703116 === this.zoom3key ? void d.setZoom(0.125) : _1703116 === this.zoom4key ? void d.setZoom(0.075) : _1703116 === this.zoom5key ? void d.setZoom(0.05) : void 0;
						}
					}
				}
			}
		}, {
			'key': 'onKeyUp',
			'value'(_4193979) {
				const _5996834 = this.getKey(_4193979);
				_5996834 && (this.pressedKeys.delete(_5996834), _5996834 === this.macroFeedKey) && d.macroFeed(false);
			}
		}, {
			'key': 'setKey',
			'value'(_4193979, _1932537, _2574022) {
				let _2473550 = this.getKey(_1932537);
				const _16350690 = _2610335(_4193979).attr('name');
				false === _2473550 || ('freeSpectateKey' !== _16350690 && this.alreadyBinded(_2473550), 'DEL' === _2473550 && (_2473550 = ''), _2610335(_2574022).val(_2473550), this[_16350690] = _2473550, _1772312.set('hotkeys', _16350690, _2473550));
			}
		}, {
			'key': 'alreadyBinded',
			'value'(_4193979) {
				let _2030373 = false;
				_4193979 === this.toggleMenuKey ? _2030373 = 'toggleMenuKey' : _4193979 === this.feedKey ? _2030373 = 'feedKey' : _4193979 === this.macroFeedKey ? _2030373 = 'macroFeedKey' : _4193979 === this.splitKey ? _2030373 = 'splitKey' : _4193979 === this.doubleSplitKey ? _2030373 = 'doubleSplitKey' : _4193979 === this.split16Key ? _2030373 = 'split16Key' : _4193979 === this.stopKey ? _2030373 = 'stopKey' : _4193979 === this.chatKey ? _2030373 = 'chatKey' : _4193979 === this.multiboxTab ? _2030373 = 'multiboxTab' : _4193979 === this.toggleSplitRings ? _2030373 = 'toggleSplitRings' : _4193979 === this.toggleOpponentRings ? _2030373 = 'toggleOpponentRings' : _4193979 === this.toggleNick ? _2030373 = 'toggleNick' : _4193979 === this.toggleMass ? _2030373 = 'toggleMass' : _4193979 === this.toggleBGsectors ? _2030373 = 'toggleBGsectors' : _4193979 === this.toggleFood ? _2030373 = 'toggleFood' : _4193979 === this.toggleSkin ? _2030373 = 'toggleSkin' : _4193979 === this.togglemultiboxRing ? _2030373 = 'togglemultiboxRing' : _4193979 === this.togglemaouCircleSkin ? _2030373 = 'togglemaouCircleSkin' : _4193979 === this.respawnKey ? _2030373 = 'respawnKey' : _4193979 === this.command0Key ? _2030373 = 'command0Key' : _4193979 === this.command1Key ? _2030373 = 'command1Key' : _4193979 === this.command2Key ? _2030373 = 'command2Key' : _4193979 === this.command3Key ? _2030373 = 'command3Key' : _4193979 === this.command4Key ? _2030373 = 'command4Key' : _4193979 === this.command5Key ? _2030373 = 'command5Key' : _4193979 === this.command6Key ? _2030373 = 'command6Key' : _4193979 === this.command7Key ? _2030373 = 'command7Key' : _4193979 === this.command8Key ? _2030373 = 'command8Key' : _4193979 === this.command9Key ? _2030373 = 'command9Key' : _4193979 === this.command11Key ? _2030373 = 'command11Key' : _4193979 === this.command12Key ? _2030373 = 'command12Key' : _4193979 === this.command13Key ? _2030373 = 'command13Key' : _4193979 === this.command14Key ? _2030373 = 'command14Key' : _4193979 === this.zoom1key ? _2030373 = 'zoom1key' : _4193979 === this.zoom2key ? _2030373 = 'zoom2key' : _4193979 === this.zoom3key ? _2030373 = 'zoom3key' : _4193979 === this.zoom4key ? _2030373 = 'zoom4key' : _4193979 === this.zoom5key && (_2030373 = 'zoom5key'), _2030373 && (this[_2030373] = '', _1772312.set('hotkeys', _2030373, ''), _2610335('#hotkeys .row[name=' + _2030373 + '] input').val(''));
			}
		}, {
			'key': 'isValidKey',
			'value'(_4193979) {
				const _5192479 = _4193979.keyCode || _4193979.which;
				return 64 < _5192479 && 91 > _5192479 || 47 < _5192479 && 58 > _5192479 || 13 === _5192479 || 27 === _5192479 || 32 === _5192479 || 16 === _5192479 || 46 === _5192479 || 192 === _5192479 || 9 === _5192479 || 36 < _5192479 && 41 > _5192479;
			}
		}, {
			'key': 'getKey',
			'value'(_4193979) {
				if (!this.isValidKey(_4193979)) return false;
				const _3791391 = _4193979.keyCode || _4193979.which;
				let _5827572 = false,
					_5839807 = false;
				return _4193979.ctrlKey ? _5827572 = 'CTRL+' : _4193979.altKey && (_5827572 = 'ALT+'), 64 < _3791391 && 91 > _3791391 ? _5839807 = String.fromCharCode(_3791391) : 47 < _3791391 && 58 > _3791391 ? _5839807 = '' + (_3791391 - 48) : _5827572 || (13 === _3791391 ? _5839807 = 'ENTER' : 27 === _3791391 ? _5839807 = 'ESC' : 32 === _3791391 ? _5839807 = 'SPACE' : 16 === _3791391 ? _5839807 = 'SHIFT' : 9 === _3791391 ? _5839807 = 'TAB' : 46 === _3791391 ? _5839807 = 'DEL' : 38 === _3791391 ? _5839807 = 'UP' : 40 === _3791391 ? _5839807 = 'DOWN' : 37 === _3791391 ? _5839807 = 'LEFT' : 39 === _3791391 ? _5839807 = 'RIGHT' : 192 === _3791391 && (_5839807 = 'TILDE')), !!_5839807 && (_5827572 ? _5827572 + _5839807 : _5839807);
			}
		}]), _4193979;
    })(),
    
    
    
    _ = new((() => {
		function _4514183() {
			plzsuckmydick(this, _4514183), this.leftClick = _1772312.get('mouse', 'leftClick') || 'off', this.middleClick = _1772312.get('mouse', 'middleClick') || 'off', this.rightClick = _1772312.get('mouse', 'rightClick') || 'off', this.x = 0, this.y = 0, this.canvas = _5821427.getElementById('canvas'), this.canvasX = 0, this.canvasY = 0;
		}
		return plzdsmd(_4514183, [{
			'key': 'init',
			'value'() {
				this.setDomValues(), this.addEvents();
			}
		}, {
			'key': 'send',
			'value'() {
				const _4514183 = 2 === A.controllingTab ? G.getOffset2 : 3 === A.controllingTab ? G.getOffset3 : {
					'x': 0,
					'y': 0
				};
				return this.canvasX = (this.x - this.canvas.width / 2) / L.viewport + L.x + _4514183.x, this.canvasY = (this.y - this.canvas.height / 2) / L.viewport + L.y + _4514183.y, L.isSpectating && W.isTurnedOn ? void Q.mouse(0 | W.center.x, 0 | W.center.y) : A.movementPaused ? A.controllingTab === 1 ? void Q.mouse(0 | A.x1, 0 | A.y1) : A.controllingTab === 2 && void Q.mouse(0 | A.x2 + G.getOffset2.x, 0 | A.y2 + G.getOffset2.y) : void Q.mouse(0 | this.canvasX, 0 | this.canvasY);
			}
		}, {
			'key': 'setDomValues',
			'value'() {
				_2610335('.mouse-options').each(function () {
					const _4514183 = _2610335(this).attr('type');
					'range' === _4514183 ? _.handleRange(this, 2) : 'options' === _4514183 && _.handleOptions(this, 2);
				});
			}
		}, {
			'key': 'addEvents',
			'value'() {
				const _4514183 = this;
				_2610335('#mouse').perfectScrollbar(), _2610335('#mouse .fa-chevron-left').each(function () {
					const _4514183 = this;
					_2610335(this).click(() => {
						const _2530459 = _2610335(_4514183).parent(),
							_2314279 = _2610335(_2530459).attr('type');
						'options' === _2314279 ? _.handleOptions(_2530459, 0) : 'range' === _2314279 && _.handleRange(_2530459, 0);
					});
				}), _2610335('#mouse .fa-chevron-right').each(function () {
					const _4514183 = this;
					_2610335(this).click(() => {
						const _6184382 = _2610335(_4514183).parent(),
							_3004183 = _2610335(_6184382).attr('type');
						'options' === _3004183 ? _.handleOptions(_6184382, 1) : 'range' === _3004183 && _.handleRange(_6184382, 1);
					});
				}), this.canvas.addEventListener('mousemove', _10261862 => {
					_4514183.x = _10261862.clientX, _4514183.y = _10261862.clientY;
				}), this.canvas.addEventListener('mousedown', _5528684 => {
					_4514183.onMouseClick(_5528684);
				}), this.canvas.addEventListener('mouseup', _2422526 => {
					_4514183.onMouseRelease(_2422526);
				}), this.canvas.addEventListener('wheel', _1179545 => {
					_4514183.onMouseWheel(_1179545);
				}), this.canvas.addEventListener('contextmenu', _4514183 => {
					_4514183.preventDefault();
				});
			}
		}, {
			'key': 'onMouseWheel',
			'value'(_4514183) {
				let _2530901 = L.targetViewport;
				0 > _4514183.wheelDelta ? _2530901 *= _4629996.zoomSpeed / 100 : _2530901 /= _4629996.zoomSpeed / 100, _2530901 = 2 < _2530901 ? 2 : 0.02 > _2530901 ? 0.02 : _2530901, L.targetViewport = _2530901;
			}
		}, {
			'key': 'onMouseClick',
			'value'(_4514183) {
				let _3893703 = false;
				switch (_4514183.which) {
				case 1:
					_3893703 = 'leftClick';
					break;
				case 2:
					_3893703 = 'middleClick';
					break;
				case 3:
					_3893703 = 'rightClick';
				}
				if (_3893703) {
					if (L.isSpectating && 'on' === _4629996.targeting) {
						const _1398107 = (_4514183.clientX - (_16350690.innerWidth >> 1)) / L.viewport + L.x,
							_370437 = (_4514183.clientY - (_16350690.innerHeight >> 1)) / L.viewport + L.y;
						return void('leftClick' === _3893703 ? W.lockTarget(_1398107, _370437, 1) : 'middleClick' === _3893703 ? W.reset() : 'rightClick' == _3893703 && W.lockTarget(_1398107, _370437, 2));
					}
					const _16408265 = this[_3893703];
					return 'off' === _16408265 ? void 0 : 'feed' === _16408265 ? void d.feed() : 'macroFeed' === _16408265 ? void d.macroFeed(true) : 'split' === _16408265 ? void d.split() : 'doubleSplit' === _16408265 ? void d.doubleSplit() : 'split16' === _16408265 ? void d.split16() : 'commander' === _16408265 ? void d.commander() : void 0;
				}
			}
		}, {
			'key': 'onMouseRelease',
			'value'(_4514183) {
				let _5422644 = false;
				switch (_4514183.which) {
				case 1:
					_5422644 = 'leftClick';
					break;
				case 2:
					_5422644 = 'middleClick';
					break;
				case 3:
					_5422644 = 'rightClick';
				}
				if (_5422644) {
					if ('macroFeed' === this[_5422644]) return void d.macroFeed(false);
				}
			}
		}, {
			'key': 'handleOptions',
			'value'(_4514183, _3724175) {
				for (var _11512343, _2858313 = _2610335(_4514183).attr('name'), _16350690 = _2610335(_4514183).find('b'), _4265360 = _16350690.length, _4784167 = _4265360, _2425684 = 0; _4784167--;) _11512343 = _16350690[_4784167], 'active' === _2610335(_11512343).attr('class') && (_2425684 = _4784167);
				if (1 === _3724175) {
					const _4514183 = _2425684 + 1 < _4265360 ? _2425684 + 1 : 0;
					_2610335(_16350690[_2425684]).removeAttr('class'), _2610335(_16350690[_4514183]).attr('class', 'active');
					const _3724175 = _2610335(_16350690[_4514183]).attr('value');
					this.saveMouseOptions(_2858313, _3724175);
				} else if (0 === _3724175) {
					const _4514183 = 0 < _2425684 ? _2425684 - 1 : _4265360 - 1;
					_2610335(_16350690[_2425684]).removeAttr('class'), _2610335(_16350690[_4514183]).attr('class', 'active');
					const _3724175 = _2610335(_16350690[_4514183]).attr('value');
					this.saveMouseOptions(_2858313, _3724175);
				} else if (2 === _3724175) {
					_2610335(_16350690[_2425684]).removeAttr('class');
					for (let _4514183, _3724175 = _4265360; _3724175--;)
						if (_4514183 = _16350690[_3724175], _2610335(_4514183).attr('value') === this[_2858313]) {
							_2610335(_4514183).attr('class', 'active');
							break;
						}
				}
			}
		}, {
			'key': 'handleRange',
			'value'(_4514183, _4144055) {
				const _4205648 = _2610335(_4514183).attr('name'),
					_2540822 = _2610335(_4514183).find('span'),
					_16350690 = _2540822[0],
					_5508027 = _2540822[1],
					_4345995 = ~~_2610335(_16350690).attr('min'),
					_5104860 = ~~_2610335(_16350690).attr('max'),
					_5821427 = ~~_2610335(_16350690).attr('step'),
					_1772312 = ~~_2610335(_16350690).attr('value');
				if (1 === _4144055 && _1772312 + _5821427 <= _5104860) {
					const _4514183 = _5821427 + _1772312;
					_2610335(_16350690).attr('value', _4514183), _2610335(_5508027).css('width', ~~(100 * (_4514183 - _4345995) / (_5104860 - _4345995)) + 'px'), this.saveMouseOptions(_4205648, _4514183);
				} else if (0 === _4144055 && _1772312 - _5821427 >= _4345995) {
					const _4514183 = _1772312 - _5821427;
					_2610335(_16350690).attr('value', _4514183), _2610335(_5508027).css('width', ~~(100 * (_4514183 - _4345995) / (_5104860 - _4345995)) + 'px'), this.saveMouseOptions(_4205648, _4514183);
				} else if (2 === _4144055) {
					const _4514183 = this[_4205648];
					_2610335(_16350690).attr('value', _4514183), _2610335(_5508027).css('width', ~~(100 * (_4514183 - _4345995) / (_5104860 - _4345995)) + 'px');
				}
			}
		}, {
			'key': 'saveMouseOptions',
			'value'(_4514183, _2239697) {
				this[_4514183] = _2239697, _1772312.set('mouse', _4514183, _2239697);
			}
		}]), _4514183;
    })())(),
    
    
    
    l = atob('bmk='), u = (() => {
		function _1689046() {
			plzsuckmydick(this, _1689046);
		}
		return plzdsmd(_1689046, null, [{
			'key': 'init',
			'value'() {
				this.load(), this.setDomValues(), this.addEvents();
			}
		}, {
			'key': 'load',
			'value'() {
				this.command1 = _1772312.get('commands', 'command1') || _4428048.current.commandsMenu.command1, this.command2 = _1772312.get('commands', 'command2') || _4428048.current.commandsMenu.command2, this.command3 = _1772312.get('commands', 'command3') || _4428048.current.commandsMenu.command3, this.command4 = _1772312.get('commands', 'command4') || _4428048.current.commandsMenu.command4, this.command5 = _1772312.get('commands', 'command5') || _4428048.current.commandsMenu.command5, this.command6 = _1772312.get('commands', 'command6') || _4428048.current.commandsMenu.command6, this.command7 = _1772312.get('commands', 'command7') || _4428048.current.commandsMenu.command7, this.command8 = _1772312.get('commands', 'command8') || _4428048.current.commandsMenu.command8, this.command9 = _1772312.get('commands', 'command9') || _4428048.current.commandsMenu.command9, this.command0 = _1772312.get('commands', 'command0') || _4428048.current.commandsMenu.command0, this.command11 = _1772312.get('commands', 'command11') || _4428048.current.commandsMenu.command11, this.command12 = _1772312.get('commands', 'command12') || _4428048.current.commandsMenu.command12, this.command13 = _1772312.get('commands', 'command13') || _4428048.current.commandsMenu.command13, this.command14 = _1772312.get('commands', 'command14') || _4428048.current.commandsMenu.command14;
			}
		}, {
			'key': 'addEvents',
			'value'() {
				const _1689046 = this;
				_2610335('#commands').perfectScrollbar();
				for (let _5293893 = 15, _3457172 = () => {
						_5293893--;
						const _3457172 = 'command' + _5293893;
						_2610335('#' + _3457172).blur(() => {
							_1689046.setCommand(_3457172, _2610335('#' + _3457172).val());
						});
					}; _5293893--;) _3457172();
			}
		}, {
			'key': 'setCommand',
			'value'(_1689046, _16685317) {
				this[_1689046] = _16685317, _1772312.set('commands', _1689046, _16685317);
			}
		}, {
			'key': 'setDomValues',
			'value'() {
				for (let _1689046, _1453076 = 15; _1453076--;) _2610335('#' + (_1689046 = 'command' + _1453076)).val(this[_1689046]);
			}
		}, {
			'key': 'refresh',
			'value'() {
				this.load(), this.setDomValues();
			}
		}]), _1689046;
    })(),
    
    
    
    d = (() => {
		function _5374672() {
			plzsuckmydick(this, _5374672);
		}
		return plzdsmd(_5374672, null, [{
			'key': 'init',
			'value'() {
				this.ejectInterval = false;
			}
		}, {
			'key': 'stopMovementToggle',
			'value'() {
				A.movementPaused = !A.movementPaused;
			}
		}, {
			'key': 'feed',
			'value'() {
				_.send(), Q.eject();
			}
		}, {
			'key': 'macroFeed',
			'value'(_5374672) {
				const _3403883 = this;
				if (_5374672) {
					if (this.ejectInterval) return;
					this.feed(), this.ejectInterval = setInterval(() => {
						_3403883.feed();
					}, 80);
				} else this.ejectInterval && (clearInterval(this.ejectInterval), this.ejectInterval = false);
			}
		}, {
			'key': 'split',
			'value'(_14715242) {
				_.send(), Q.split(_14715242);
			}
		}, {
			'key': 'doubleSplit',
			'value'() {
				const _5374672 = this;
				const _5030910 = A.controllingTab;
				this.split(_5030910), setTimeout(() => {
					_5374672.split(_5030910);
				}, 40);
			}
		}, {
			'key': 'split16',
			'value'() {
				const _5374672 = this;
				const _4207817 = A.controllingTab;
				this.split(_4207817), setTimeout(() => {
					_5374672.split(_4207817);
				}, 40), setTimeout(() => {
					_5374672.split(_4207817);
				}, 80), setTimeout(() => {
					_5374672.split(_4207817);
				}, 120);
			}
		}, {
			'key': 'commander',
			'value'() {
				let _1499038 = A.controllingTab === 1 ? G.offset : G.offset2;
				let _2540777 = _.canvasX - _1499038.x;
				let _1930527 = _.canvasY - _1499038.y;
				let _4857241 = '{\"type\":\"cmder\",\"x\":' + _2540777 + ',\"y\":' + _1930527 + ',\"date\":' + Date.now() + '}';
				console.log(_4857241);
				_e.message(101, _4857241, 1);
			}
		}, {
			'key': 'toggleSpectate',
			'value': () => {
				window.freeSpec = !window.freeSpec;
				W.isTurnedOn ? (W.reset(), W.target1.turnedOn = false, W.target2.turnedOn = false, void K.mouseViewport()) : (Q.freeSpectate(), L.freeSpectate ? K.mouseViewport() : K.topViewport(), W.target1.turnedOn = false, void(W.target2.turnedOn = false));
			}
		}, {
			'key': 'chat',
			'value'() {
				w.enter();
			}
		}, {
			'key': 'command',
			'value'(_5374672) {
				let _4026961 = u['command' + _5374672];
				if (_4026961.includes('%sector%')) {
					const _5374672 = G.getLocation(L.x, L.y);
					_4026961 = _4026961.replace('%sector%', _5374672);
				}
				_e.message(102, _4026961, A.controllingTab);
			}
		}, {
			'key': 'setZoom',
			'value'(_5374672) {
				L.targetViewport = _5374672;
			}
		}, {
			'key': 'toggleCellNick',
			'value'() {
				const _5374672 = _1772312.get('settings', 'cellNick');
				_4629996.cellNick = 'off' === _4629996.cellNick ? 'off' !== _5374672 && _5374672 || 'on' : 'off';
			}
		}, {
			'key': 'toggleCellMass',
			'value'() {
				const _5374672 = _1772312.get('settings', 'cellMass');
				const _5407025 = _1772312.get('settings', 'hideOwnMass');
				_4629996.cellMass = 'off' === _4629996.cellMass ? 'off' !== _5374672 && _5374672 || 'shortened' : 'off';
				_4629996.hideOwnMass = 'off' === _4629996.hideOwnMass ? 'off' !== _5407025 && _5407025 || 'on' : 'off';
			}
		}, {
			'key': 'toggleGameFood',
			'value'() {
				const _5374672 = _1772312.get('settings', 'food');
				_4629996.food = 'off' === _4629996.food ? 'off' !== _5374672 && _5374672 || 'monoColored' : 'off';
			}
		}, {
			'key': 'toggleBGsectors',
			'value'() {
				const _5374672 = _1772312.get('settings', 'bgSectors');
				_4629996.bgSectors = 'off' === _4629996.bgSectors ? 'off' !== _5374672 && _5374672 || 'normal' : 'off';
			}
		}, {
			'key': 'toggleSkin',
			'value'() {
				const _5374672 = _1772312.get('settings', 'urlSkins');
				_4629996.urlSkins = 'off' === _4629996.urlSkins ? 'off' !== _5374672 && _5374672 || 'on' : 'off';
			}
		}, {
			'key': 'toggleSplitRings',
			'value'() {
				const _5374672 = _1772312.get('settings', 'splitRings');
				_4629996.splitRings = 'off' === _4629996.splitRings ? 'off' !== _5374672 && _5374672 || 'on' : 'off';
			}
		}, {
			'key': 'toggleOpponentRings',
			'value'() {
				const _5374672 = _1772312.get('settings', 'opponentRings');
				_4629996.opponentRings = 'off' === _4629996.opponentRings ? 'off' !== _5374672 && _5374672 || 'on' : 'off';
			}
		}, {
			'key': 'togglemultiboxRing',
			'value'() {
				const _5374672 = _1772312.get('settings', 'multiboxRing');
				_4629996.multiboxRing = 'off' === _4629996.multiboxRing ? 'off' !== _5374672 && _5374672 || 'on' : 'off';
			}
		}, {
			'key': 'togglemaouCircleSkin',
			'value'() {
				const _5374672 = _1772312.get('settings', 'maouCircleSkin');
				_4629996.maouCircleSkin = 'off' === _4629996.maouCircleSkin ? 'off' !== _5374672 && _5374672 || 'on' : 'off';
			}
		}, {
			'key': 'respawn',
			'value'() {
				q.init(q.address);
				const _5374672 = setInterval(() => {
					q.isConnected && (Q.spawn(), clearInterval(_5374672));
				}, 100);
			}
		}, {
			'key': 'multiboxTab',
			'value'() {
				1 === A.controllingTab ? (A.controllingTab = 2, !A.isAliveTab2 && Q.spawn()) : (A.controllingTab = 1, !A.isAliveTab1 && Q.spawn());
			}
		}]), _5374672;
    })(),
    
    
    
    f = new((() => {
		function _5898259() {
			plzsuckmydick(this, _5898259), this.masterUrl = 'https://webbouncer-live-v8-0.agario.miniclippt.com/v4', this.contentType = 'application/octet-stream', this.xSupportProtoVersion = '15.0.3';
		}
		return plzdsmd(_5898259, [{
			'key': 'getRegionsInfo',
			'value'() {
				const _5898259 = new XMLHttpRequest();
				try {
					_5898259.open('POST', 'https://webbouncer-live-v8-0.agario.miniclippt.com/info', false), _5898259.send();
					return JSON.parse(_5898259.responseText);
				} catch (_4461891) {}
			}
		}, {
			'key': 'getServer',
			'value'(_5898259, _4604153) {
				if (':party' === _4604153) return this.getPartyServer(_5898259, _4604153);
				const _3113598 = new Uint8Array(4 + _5898259.length + 2);
				_3113598[0] = 10, _3113598[1] = 4 + _5898259.length, _3113598[2] = 10, _3113598[3] = _5898259.length;
				for (let _4604153 = 0; _4604153 < _5898259.length; _4604153++) _3113598[4 + _4604153] = _5898259.charCodeAt(_4604153);
				_3113598[4 + _5898259.length] = 18, _3113598[5 + _5898259.length] = 0;
				const _2392078 = new XMLHttpRequest();
				_2392078.open('POST', this.masterUrl + '/findServer', false), this.setHeaders(_2392078), _2392078.send(_3113598), m.alert('HSLO', 'Searching for a party server');
				try {
					let _3113598 = JSON.parse(_2392078.responseText);
					return ':party' === _4604153 && (_3113598 = this.getToken(_5898259, _4604153)), _3113598;
				} catch (_2988658) {}
			}
		}, {
			'key': 'setHeaders',
			'value'(_5898259) {
				_5898259.setRequestHeader('Accept', 'text/plain'), _5898259.setRequestHeader('Accept', '*/*'), _5898259.setRequestHeader('Accept', 'q=0.01'), _5898259.setRequestHeader('Content-Type', this.contentType), _5898259.setRequestHeader('x-support-proto-version', this.xSupportProtoVersion), _5898259.setRequestHeader('x-client-version', '' + le.versionInt);
			}
		}, {
			'key': 'getTokenIP',
			'value'(_5898259, _5704764) {
				const _1824631 = new Uint8Array(4 + _5898259.length + 6 + _5704764.length);
				_1824631[0] = 10, _1824631[1] = _5898259.length + 4, _1824631[2] = 10, _1824631[3] = _5898259.length;
				for (let _5704764 = 0; _5704764 < _5898259.length; _5704764++) _1824631[4 + _5704764] = _5898259.charCodeAt(_5704764);
				_1824631[4 + _5898259.length] = 18, _1824631[5 + _5898259.length] = 0, _1824631[6 + _5898259.length] = 26, _1824631[7 + _5898259.length] = 8, _1824631[8 + _5898259.length] = 10, _1824631[9 + _5898259.length] = 6;
				for (let _6768163 = 0; _6768163 < _5704764.length; _6768163++) _1824631[10 + _5898259.length + _6768163] = _5704764.charCodeAt(_6768163);
				const _1481993 = new XMLHttpRequest();
				_1481993.open('POST', 'https://webbouncer-live-v8-0.agario.miniclippt.com/v4/getToken', false), this.setHeaders(_1481993), _1481993.send(_1824631), m.alert('HSLO', 'Joining game server ' + _2610335('#party-token').val());
				console.log('HSLO: Joining game server ' + _2610335('#party-token').val());
				try {
					return JSON.parse(_1481993.responseText).endpoints.https;
				} catch (_4477830) {}
			}
		}, {
			'key': 'createToken',
			'value'(_5898259, _3730858) {
				const _3822759 = _5898259 + _3730858,
					_5410414 = new Uint8Array(4 + _3822759.length + 2);
				_5410414[0] = 10, _5410414[1] = _3822759.length + 4, _5410414[2] = 10, _5410414[3] = _3822759.length;
				for (let _5898259 = 0; _5898259 < _3822759.length; _5898259++) _5410414[4 + _5898259] = _3822759.charCodeAt(_5898259);
				_5410414[4 + _3822759.length] = 18, _5410414[5 + _3822759.length] = 0;
				const _16350690 = new XMLHttpRequest();
				_16350690.open('POST', this.masterUrl + '/createToken', false), this.setHeaders(_16350690), _16350690.send(_5410414), console.log('HSLO: Creating game server token.');
				try {
					return !!_16350690.responseText && JSON.parse(_16350690.responseText).token;
				} catch (_4138292) {}
			}
		}, {
			'key': 'getPartyServer',
			'value'(_5898259, _6239242) {
				const _3761161 = this.createToken(_5898259, _6239242),
					_2860283 = new Uint8Array(10 + _5898259.length + _3761161.length);
				_2860283[0] = 10, _2860283[1] = 4 + _5898259.length, _2860283[2] = 10, _2860283[3] = _5898259.length;
				for (let _6239242 = 0; _6239242 < _5898259.length; _6239242++) _2860283[4 + _6239242] = _5898259.charCodeAt(_6239242);
				_2860283[4 + _5898259.length] = 18, _2860283[5 + _5898259.length] = 0, _2860283[6 + _5898259.length] = 26, _2860283[7 + _5898259.length] = 8, _2860283[8 + _5898259.length] = 10, _2860283[9 + _5898259.length] = _3761161.length;
				for (let _6239242 = 0; _6239242 < _3761161.length; _6239242++) _2860283[10 + _5898259.length + _6239242] = _3761161.charCodeAt(_6239242);
				const _16350690 = new XMLHttpRequest();
				try {
					_16350690.open('POST', this.masterUrl + '/getToken', false), this.setHeaders(_16350690), _16350690.send(_2860283);
				} catch (_4086507) {
					m.alert('HSLO', 'Can not get game server token.');
					console.log('HSLO: Can not get game server token.');
				} finally {
					m.alert('HSLO', 'Getting game server token.');
					console.log('HSLO: Getting gamem server token.');
				}
				try {
					const _6239242 = JSON.parse(_16350690.responseText);
					return _6239242.token = _3761161, _6239242;
				} catch (_2179654) {
					m.alert('HSLO', 'Can not get game server token.');
					console.log('HSLO: Can not get game server token.');
				}
			}
		}]), _5898259;
    })())(),
    
    
    
    g = new((() => {
		function _3325808() {
			plzsuckmydick(this, _3325808);
		}
		return plzdsmd(_3325808, [{
			'key': 'init',
			'value'() {
				this.addEvents(), this.setRegions();
			}
		}, {
			'key': 'addEvents',
			'value'() {
				const _3325808 = this;
				_2610335('#join-party').click(() => {
					_3325808.joinParty();
				}), _2610335('#create-party').click(() => {
					_3325808.createParty();
				});
			}
		}, {
			'key': 'setRegions',
			'value'() {
				for (var _3325808 = {
						'US-Atlanta': 'North America',
						'BR-Brazil': 'South America',
						'EU-London': 'Europe',
						'RU-Russia': 'Russia',
						'TK-Turkey': 'Turkey',
						'JP-Tokyo': 'East Asia',
						'CN-China': 'China',
						'SG-Singapore': 'Oceania'
					}, _4785026 = f.getRegionsInfo().regions, _3703039 = Object.keys(_3325808), _2283036 = '', _16350690 = 0; _16350690 < _3703039.length; _16350690++) {
					const _13701163 = _3703039[_16350690];
					_2283036 += '<option value=\"' + _13701163 + '\">' + _3325808[_13701163] + ' (' + _4785026[_13701163].numPlayers + ')</option>';
				}
				_2610335('#regions').html(_2283036);
			}
		}, {
			'key': 'joinParty',
			'value'() {
				if (!this.connectWithIp()) {
					const _3325808 = _2610335('#regions').val(),
						_5407271 = this.getToken();
					if (_5407271) {
						const _551915 = f.getTokenIP(_3325808, _5407271);
						console.log('IP: ' + _551915), q.init(_551915);
					}
				}
			}
		}, {
			'key': 'createParty',
			'value'() {
				const _3325808 = _2610335('#regions').val(),
					_1061349 = _2610335('#gamemode').val(),
					_4943742 = f.getServer(_3325808, _1061349);
				if (_4943742.token) _2610335('#party-token').val(_4943742.token);
				else {
					const _3325808 = _4943742.endpoints.https.match(/live-arena-([0-9a-z]{4,8})\.agar.\io\:\d{1,5}/),
						_12105870 = ':teams' === _1061349 ? 'TM' : ':experimental' === _1061349 ? 'EXP' : 'FFA';
					_3325808 && _3325808[1] && _2610335('#party-token').val(_12105870 + ':' + _3325808[1]);
				}
				_4943742.token ? q.init(_4943742.endpoints.https + '?party_id=' + encodeURIComponent(_4943742.token)) : q.init(_4943742.endpoints.https);
			}
		}, {
			'key': 'getToken',
			'value'() {
				const _3325808 = _2610335('#party-token').val().match(/\b[A-Z0-9]{6}\b/);
				if (_3325808 && _3325808[0]) {
					const _5212100 = _3325808[0];
					return _2610335('#party-token').val(_5212100), _5212100;
				}
				return false;
			}
		}, {
			'key': 'connectWithIp',
			'value'() {
				const _3325808 = _2610335('#party-token').val(),
					_2735906 = _3325808.match(/live-arena-[0-9a-z]{5,8}\.agar.\io\:\d{1,5}/);
				if (_2735906 && _2735906[0]) return q.init(_2735906[0]), _2610335('#party-token').val(_2735906[0]), true;
				const _1536791 = _3325808.match(/([A-Z]{2,3}):([0-9a-z]{5,8})/);
				if (_1536791 && 3 === _1536791.length) {
					q.init('live-arena-' + _1536791[2] + '.agar.io:80');
					const _3325808 = 'TM' === _1536791[1] ? ':teams' : 'EXP' === _1536791[1] ? ':experimental' : '';
					_2610335('#gamemode').val(_3325808);
				}
				return false;
			}
		}]), _3325808;
    })())(),
    
    
    
    y = new((() => {
		function _1686623() {
			plzsuckmydick(this, _1686623), this.siteKey = '6LfjUBcUAAAAAF6y2yIZHgHIOO5Y3cU5osS2gbMl', this.inited = false, this.container = _2610335('#captchaWindow');
		}
		return plzdsmd(_1686623, [{
			'key': 'asyncInit',
			'value'() {
				this.onloadCallback();
			}
		}, {
			'key': 'onloadCallback',
			'value'() {
				this.requestV3();
			}
		}, {
			'key': 'requestV3',
			'value'() {
				grecaptcha.v2mode = ![];
				grecaptcha.onceLoad = !![];
				grecaptcha.render('captchaWindowV3', {
					'sitekey': '6LcEt74UAAAAAIc_T6dWpsRufGCvvau5Fd7_G1tY',
					'badge': 'inline',
					'size': 'invisible',
					'callback': () => {}
				});
			}
		}, {
			'key': 'display',
			'value'(_3149367) {
				const _6212818 = this;
				if (console.log('Tab ' + _3149367 + ' got Captcha'), m.alert('Agario', 'Solve reCaptcha to spawn.'), this.container.show(), this.inited) grecaptcha.reset();
				else {
					const _4721025 = {
						'sitekey': this.siteKey,
						'callback'(_4721025) {
							let _12187820 = A.isAliveTab1 ? 2 : 1;
							console.log('Tab ' + _12187820 + ' Captcha Callback');
							_6212818.afterCheck(_4721025, _12187820);
						}
					};
					grecaptcha.render('verifyUser', _4721025), this.inited = true;
				}
			}
		}, {
			'key': 'afterCheck',
			'value'(_1686623, _2183528) {
				console.log('Tab ' + _2183528 + ' Captcha Aftercheck');
				Q.captcha(_1686623, _2183528), grecaptcha.reset(), this.container.hide();
			}
		}]), _1686623;
    })())(),
    
    
    
    oe = (() => {
		function _4989757() {
			plzsuckmydick(this, _4989757);
		}
		return plzdsmd(_4989757, null, [{
			'key': 'init',
			'value'() {
				this.isOpened = false, this.div = _2610335('#theme'), this.selectedPreset = _1772312.get('theme', 'selectedPreset') || 'custom', this.skinBorder = ~~_1772312.get('theme', 'skinBorder') || 100, this.lbSize = ~~_1772312.get('theme', 'lbSize') || 110, this.minimapSize = ~~_1772312.get('theme', 'minimapSize') || 200, this.chatFontSize = ~~_1772312.get('theme', 'chatFontSize') || 14, this.chatroomSize = ~~_1772312.get('theme', 'chatroomSize') || 50, this.cellTransparency = ~~_1772312.get('theme', 'cellTransparency') || 100, this.lightenCellColor = ~~_1772312.get('theme', 'lightenCellColor') || 100, this.borderWidth = ~~_1772312.get('theme', 'borderWidth') || 60, this.borderColor = _1772312.get('theme', 'borderColor') || '#ffffff', this.team1color = _1772312.get('theme', 'team1color') || '#aeaeae', this.team2color = _1772312.get('theme', 'team2color') || '#ff171f', this.multiboxActive = _1772312.get('theme', 'multiboxActive') || '#ff61f8', this.multiboxInactive = _1772312.get('theme', 'multiboxInactive') || '#fff', this.borderGlow = _1772312.get('theme', 'borderGlow') || '#ff0066', this.virusGlow = _1772312.get('theme', 'virusGlow') || '#ff0066', this.foodGlow = _1772312.get('theme', 'foodGlow') || '#ff0066', this.multiboxRingWidth = ~~_1772312.get('theme', 'multiboxRingWidth') || 10, this.nickColor = _1772312.get('theme', 'nickColor') || '#fff', this.nickStrokeColor = _1772312.get('theme', 'nickStrokeColor') || '#000', this.cellNickSize = ~~_1772312.get('theme', 'cellNickSize') || 120, this.nickFont = _1772312.get('theme', 'nickFont') || 'ubuntu', this.massColor = _1772312.get('theme', 'massColor') || '#fff', this.massStrokeColor = _1772312.get('theme', 'massStrokeColor') || '#000', this.cellMassSize = ~~_1772312.get('theme', 'cellMassSize') || 150, this.massFont = _1772312.get('theme', 'massFont') || 'ubuntu', this.gridWidth = ~~_1772312.get('theme', 'gridWidth') || 100, this.borderGlowSize = ~~_1772312.get('theme', 'borderGlowSize') || 20, this.borderGlowStrength = ~~_1772312.get('theme', 'borderGlowStrength') || 1, this.virusGlowSize = ~~_1772312.get('theme', 'virusGlowSize') || 20, this.virusGlowStrength = ~~_1772312.get('theme', 'virusGlowStrength') || 1, this.foodGlowSize = ~~_1772312.get('theme', 'foodGlowSize') || 20, this.foodGlowStrength = ~~_1772312.get('theme', 'foodGlowStrength') || 1, this.gridColor = _1772312.get('theme', 'gridColor') || '#111', this.gridTextColor = _1772312.get('theme', 'gridTextColor') || '#111', this.gridTextSize = _1772312.get('theme', 'gridTextSize') || 1500, this.gridTextFont = _1772312.get('theme', 'gridTextFont') || 'ubuntu', this.foodSize = ~~_1772312.get('theme', 'foodSize') || 1, this.foodColor = _1772312.get('theme', 'foodColor') || '#6111ff', this.virusColor = _1772312.get('theme', 'virusColor') || '#8f8f8f', this.virusBorderColor = _1772312.get('theme', 'virusBorderColor') || '#c2c2c2', this.virusBorderWidth = ~~_1772312.get('theme', 'virusBorderWidth') || 10, this.commanderColor = _1772312.get('theme', 'commanderColor') || '#f5e35d', this.backgroundColor = _1772312.get('theme', 'backgroundColor') || '#000000', this.indicatorSize = ~~_1772312.get('theme', 'indicatorSize') || 100, this.cursor = _1772312.get('theme', 'cursor') || 13, this.cursorLineColor = _1772312.get('theme', 'cursorLineColor') || '#ffffff', this.ghostColor = _1772312.get('theme', 'ghostColor') || '#ffae00', this.selfColor = _1772312.get('theme', 'selfColor') || '#fff', this.selfViewportColor = _1772312.get('theme', 'selfViewportColor') || '#ffffff', this.selfViewportAlpha = _1772312.get('theme', 'selfViewportAlpha') || 1, this.topViewportColor = _1772312.get('theme', 'topViewportColor') || '#ff0000', this.topViewportAlpha = _1772312.get('theme', 'topViewportAlpha') || 3, this.teammateColor = _1772312.get('theme', 'teammateColor') || '#555', this.teammateNameColor = _1772312.get('theme', 'teammateNameColor') || '#fff', this.fantasyColor = _1772312.get('theme', 'fantasyColor') || '#fff', this.fantasyAlpha = _1772312.get('theme', 'fantasyAlpha') || 0, this.addPresets(), this.setDomValues(), this.addEvents();
			}
		}, {
			'key': 'setDomValues',
			'value'() {
				_2610335('.theme-options').each(function () {
					const _1625991 = _2610335(this).attr('type');
					'range' === _1625991 ? _4989757.handleRange(this, 2) : 'options' === _1625991 ? _4989757.handleOptions(this, 2) : 'colorpicker' === _1625991 && _4989757.initColorpicker(this);
				}), this.setChatFontSize(this.chatFontSize), this.setChatroomSize(this.chatroomSize), this.setBackground(this.backgroundColor), this.setLeaderboard(this.lbSize), this.setMinimap(this.minimapSize), this.setCursor(this.cursor);
			}
		}, {
			'key': 'addEvents',
			'value'() {
				const _2599111 = this;
				_2610335('.theme-container').perfectScrollbar(), _2610335('.theme-container .fa-chevron-left').each(function () {
					const _2599111 = this;
					_2610335(this).click(() => {
						const _14889705 = _2610335(_2599111).parent(),
							_5940826 = _2610335(_14889705).attr('type');
						'options' === _5940826 ? _4989757.handleOptions(_14889705, 0) : 'range' === _5940826 && _4989757.handleRange(_14889705, 0);
					});
				}), _2610335('.theme-container span.outer').each(function () {
					const _2599111 = this;
					_2610335(this).click(_6265150 => {
						const _3604849 = _2610335(_2599111).parent();
						_4989757.handleRange(_3604849, 3, _6265150.offsetX);
					});
				}), _2610335('.theme-container .fa-chevron-right').each(function () {
					const _2599111 = this;
					_2610335(this).click(() => {
						const _5327320 = _2610335(_2599111).parent(),
							_1374935 = _2610335(_5327320).attr('type');
						'options' === _1374935 ? _4989757.handleOptions(_5327320, 1) : 'range' === _1374935 && _4989757.handleRange(_5327320, 1);
					});
				}), _2610335('.theme-close').click(() => _2599111.close());
			}
		}, {
			'key': 'toggle',
			'value'() {
				this.isOpened ? this.close() : this.open();
			}
		}, {
			'key': 'close',
			'value'() {
				this.isOpened = false, this.div.fadeOut(250);
			}
		}, {
			'key': 'open',
			'value'() {
				this.isOpened = true, this.div.fadeIn(250);
			}
		}, {
			'key': 'handleOptions',
			'value'(_4989757, _5208379) {
				for (var _5981244, _4065388 = _2610335(_4989757).attr('name'), _16350690 = _2610335(_4989757).find('b'), _3038208 = _16350690.length, _3198382 = _3038208, _3248500 = 0; _3198382--;) _5981244 = _16350690[_3198382], 'active' === _2610335(_5981244).attr('class') && (_3248500 = _3198382);
				if (1 === _5208379) {
					const _4989757 = _3248500 + 1 < _3038208 ? _3248500 + 1 : 0;
					_2610335(_16350690[_3248500]).removeAttr('class'), _2610335(_16350690[_4989757]).attr('class', 'active');
					const _5208379 = _2610335(_16350690[_4989757]).attr('value');
					this.saveTheme(_4065388, _5208379);
				} else if (0 === _5208379) {
					const _4989757 = 0 < _3248500 ? _3248500 - 1 : _3038208 - 1;
					_2610335(_16350690[_3248500]).removeAttr('class'), _2610335(_16350690[_4989757]).attr('class', 'active');
					const _5208379 = _2610335(_16350690[_4989757]).attr('value');
					this.saveTheme(_4065388, _5208379);
				} else if (2 === _5208379) {
					_2610335(_16350690[_3248500]).removeAttr('class');
					for (let _4989757, _5208379 = _3038208; _5208379--;)
						if (_4989757 = _16350690[_5208379], _2610335(_4989757).attr('value') === this[_4065388]) {
							_2610335(_4989757).attr('class', 'active');
							break;
						}
				}
			}
		}, {
			'key': 'handleRange',
			'value'(_4989757, _4156470) {
				const _5588769 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
					_9532630 = _2610335(_4989757).attr('name'),
					_16350690 = _2610335(_4989757).find('span'),
					_5428997 = _16350690[0],
					_1466059 = _16350690[1],
					_8780081 = _2610335(_16350690[2]),
					_5821427 = ~~_2610335(_5428997).attr('min'),
					_1772312 = ~~_2610335(_5428997).attr('max'),
					_3892851 = ~~_2610335(_5428997).attr('step'),
					_8237475 = ~~_2610335(_5428997).attr('value');
				if (1 === _4156470 && _8237475 + _3892851 <= _1772312) {
					const _4989757 = _3892851 + _8237475;
					_2610335(_5428997).attr('value', _4989757), _2610335(_1466059).css('width', ~~(100 * (_4989757 - _5821427) / (_1772312 - _5821427)) + 'px'), _8780081.text('. + _4989757 + '), this.saveTheme(_9532630, ~~_4989757);
				} else if (0 === _4156470 && _8237475 - _3892851 >= _5821427) {
					const _4989757 = _8237475 - _3892851;
					_2610335(_5428997).attr('value', _4989757), _2610335(_1466059).css('width', ~~(100 * (_4989757 - _5821427) / (_1772312 - _5821427)) + 'px'), _8780081.text('. + _4989757 + '), this.saveTheme(_9532630, ~~_4989757);
				} else if (2 === _4156470) {
					const _4989757 = this[_9532630];
					_2610335(_5428997).attr('value', _4989757), _2610335(_1466059).css('width', ~~(100 * (_4989757 - _5821427) / (_1772312 - _5821427)) + 'px'), _8780081.text('. + _4989757 + ');
				} else if (3 === _4156470) {
					let _4989757 = 0 | _5588769 / 100 * (_1772312 - _5821427);
					_4989757 = (0 | _4989757 / _3892851) * _3892851;
					const _4156470 = 100 * ((_4989757 += _5821427) - _5821427) / (_1772312 - _5821427);
					_2610335(_5428997).attr('value', _4989757), _2610335(_1466059).css('width', ~~_4156470 + 'px'), _8780081.text('. + _4989757 + '), this.saveTheme(_9532630, ~~_4989757);
				}
			}
		}, {
			'key': 'initColorpicker',
			'value'(_4989757) {
				const _2054623 = this,
					_4695549 = _2610335(_4989757).find('input'),
					_2797815 = _4695549.attr('id'),
					_16350690 = this[_2797815];
				_2610335(_4695549).val(_16350690);
				const _2132298 = !!~~_4695549.attr('opacity');
				_2610335('#' + _2797815).minicolors({
					'opacity': _2132298,
					'position': 'bottom right',
					'change'(_4989757) {
						_2054623.saveTheme(_2797815, _4989757);
					}
				});
			}
		}, {
			'key': 'saveTheme',
			'value'(_4989757, _4719291) {
				this[_4989757] = _4719291, 'selectedPreset' === _4989757 ? this.selectPreset(_4719291) : 'custom' !== this.selectedPreset && (this.selectedPreset = 'custom', _1772312.set('theme', 'selectedPreset', 'custom'), this.setDomValues()), 'backgroundColor' === _4989757 && this.setBackground(_4719291), 'chatFontSize' === _4989757 && this.setChatFontSize(_4719291), 'chatroomSize' === _4989757 && this.setChatroomSize(_4719291), 'lbSize' === _4989757 && this.setLeaderboard(_4719291), 'minimapSize' === _4989757 && this.setMinimap(_4719291), 'cursor' === _4989757 && this.setCursor(_4719291), 'massFont' === _4989757 && P.setMassCtxFont(), 'nickFont' === _4989757 && P.setNickCtxFont(), 'massStrokeColor' === _4989757 && P.massCaches.clear(), 'nickStrokeColor' === _4989757 && P.nickCaches.clear(), 'massColor' === _4989757 && P.massCaches.clear(), 'nickColor' === _4989757 && P.nickCaches.clear(), ('foodColor' === _4989757 || 'foodSize' === _4989757 || 'foodGlow' === _4989757 || 'foodGlowSize' === _4989757 || 'foodGlowStrength' === _4989757) && H.init(), ('borderColor' === _4989757 || 'borderWidth' === _4989757 || 'borderGlow' === _4989757 || 'borderGlowSize' === _4989757 || 'borderGlowStrength' === _4989757) && be.init(), ('virusColor' === _4989757 || 'virusBorderWidth' === _4989757 || 'virusBorderColor' === _4989757 || 'virusGlow' === _4989757 || 'virusGlowSize' === _4989757 || 'virusGlowStrength' === _4989757) && de.init(), _1772312.set('theme', _4989757, _4719291);
			}
		}, {
			'key': 'setBackground',
			'value'(_4989757) {
				_2610335('body').css('background', _4989757);
			}
		}, {
			'key': 'setChatFontSize',
			'value'(_4989757) {
				_2610335('#notifications').css('font-size', _4989757 + 'px'), _2610335('span.chattime').css('font-size', ~~(_4989757 * 12 / 14) + 'px'), _2610335('span.nick').css('font-size', _4989757 + 'px'), _2610335('span.message').css('font-size', _4989757 + 'px'), m.chatroomdiv.scrollTop(m.chatroomdiv[0].scrollHeight);
			}
		}, {
			'key': 'setChatroomSize',
			'value'(_4989757) {
				_2610335('#chatroom').css('width', ~~(_4989757 / 100 * 500) + 'px'), _2610335('#chatroom').css('height', ~~(_4989757 / 100 * 560) + 'px'), m.chatroomdiv.scrollTop(m.chatroomdiv[0].scrollHeight);
			}
		}, {
			'key': 'setLeaderboard',
			'value'(_4989757) {
				const _2115255 = _4989757 / 100;
				_2610335('#leaderboard-head').css('font-size', (0 | 24 * _2115255) + 'px'), _2610335('#leaderboard-positions').css('font-size', (0 | 13 * _2115255) + 'px');
			}
		}, {
			'key': 'setMinimap',
			'value'(_4989757) {
				S.size = _4989757, S.canvas.width = _4989757, S.canvas.height = _4989757, _2610335('#minimap-hud, .minimap-grid').css({
					'width': _4989757 + 'px',
					'height': _4989757 + 'px'
				}), _2610335('.minimap-row').css({
					'width': _4989757 + 'px',
					'height': (0 | _4989757 / 5) + 'px'
				}), _2610335('.minimap-sector').css({
					'width': (0 | _4989757 / 5) + 'px',
					'height': (0 | _4989757 / 5) + 'px',
					'font-size': (0 | 15 * _4989757 / 200) + 'px',
					'padding-top': (0 | 11 * _4989757 / 200) + 'px'
				}), _2610335('.minimap-head').css('bottom', _4989757 + 9 + 'px'), _2610335('#time-hud').css('font-size', ~~(_4989757 / 15) + 'px');
			}
		}, {
			'key': 'setCursor',
			'value': _4989757 => 1 === _4989757 ? (_2610335('body').css('cursor', 'url(),auto'), _2610335('#cursorOff').show(), void _2610335('#cursorDisplay').hide()) : (_2610335('body').css('cursor', 'url(https://jimboy3100.github.io/cursors/cursor_' + (9 < _4989757 ? _4989757 : '0' + _4989757) + '.cur),auto'), _2610335('#cursorDisplay').attr('src', 'https://jimboy3100.github.io/cursors/cursor_' + (9 < _4989757 ? _4989757 : '0' + _4989757) + '.cur'), _2610335('#cursorDisplay').show(), void _2610335('#cursorOff').hide())
		}, {
			'key': 'selectPreset',
			'value'(_4989757) {
				const _15510291 = this.presets[_4989757];
				if ('custom' !== _4989757 && _15510291) {
					for (const _4989757 in _15510291.theme) _15510291.theme.hasOwnProperty(_4989757) && void 0 !== this[_4989757] && (this[_4989757] = _15510291.theme[_4989757], _1772312.set('theme', _4989757, this[_4989757]));
					for (const _4989757 in this.setDomValues(), _15510291.settings) _15510291.settings.hasOwnProperty(_4989757) && void 0 !== _4629996[_4989757] && (_4629996[_4989757] = _15510291.settings[_4989757], _1772312.set('settings', _4989757, _4629996[_4989757]));
					_4629996.setDomValues();
				}
			}
		}, {
			'key': 'addPresets',
			'value'() {
				this.presets = {
					'Agarplus v2': {
						'author': 'Acydwarp',
						'theme': {
							'skinBorder': 100,
							'lbSize': 110,
							'minimapSize': 200,
							'chatFontSize': 18,
							'cellTransparency': 100,
							'lightenCellColor': 100,
							'borderWidth': 40,
							'borderColor': '#ffffff',
							'team1color': '#aeaeae',
							'team2color': '#fff700',
							'nickColor': '#fff',
							'nickStrokeColor': '#000',
							'cellNickSize': 140,
							'nickFont': 'ubuntu',
							'massColor': '#fff',
							'massStrokeColor': '#000',
							'cellMassSize': 140,
							'massFont': 'ubuntu',
							'gridWidth': 100,
							'gridColor': '#1a1a1a',
							'gridTextColor': '#1a1a1a',
							'gridTextSize': 1700,
							'gridTextFont': 'ubuntu',
							'foodSize': 5,
							'foodColor': '#0849d4',
							'virusColor': '#808080',
							'virusBorderColor': '#9e9e9e',
							'virusBorderWidth': 10,
							'commanderColor': '#0849d4',
							'backgroundColor': '#000000',
							'indicatorSize': 100,
							'cursor': 1
						},
						'settings': {
							'CellAnimation': 120,
							'eatAnimation': 'on',
							'cellTextAnimation': 'on',
							'cellMass': 'full',
							'food': 'monoColored',
							'bgSectors': 'normal',
							'vanillaGrid': 'off'
						}
					},
					'HKG': {
						'author': 'Num Jai',
						'theme': {
							'skinBorder': 100,
							'lbSize': 110,
							'minimapSize': 200,
							'chatFontSize': 18,
							'cellTransparency': 100,
							'lightenCellColor': 100,
							'borderWidth': 60,
							'borderColor': '#ffffff',
							'team1color': '#aeaeae',
							'team2color': '#fff700',
							'nickColor': '#fff',
							'nickStrokeColor': '#000',
							'cellNickSize': 130,
							'nickFont': 'sans-serif',
							'massColor': '#fff',
							'massStrokeColor': '#000',
							'cellMassSize': 130,
							'massFont': 'sans-serif',
							'gridWidth': 100,
							'gridColor': '#1a1a1a',
							'gridTextColor': '#1a1a1a',
							'gridTextSize': 1700,
							'gridTextFont': 'ubuntu',
							'foodSize': 5,
							'foodColor': '#6111ff',
							'virusColor': '#808080',
							'virusBorderColor': '#9e9e9e',
							'virusBorderWidth': 10,
							'commanderColor': '#0849d4',
							'backgroundColor': '#000000',
							'indicatorSize': 100,
							'cursor': 1
						},
						'settings': {
							'CellAnimation': 120,
							'eatAnimation': 'on',
							'cellTextAnimation': 'off',
							'cellMass': 'full',
							'food': 'monoColored',
							'bgSectors': 'off',
							'vanillaGrid': 'off'
						}
					},
					'Ogario v4': {
						'author': 'Szymy',
						'theme': {
							'skinBorder': 100,
							'lbSize': 100,
							'minimapSize': 240,
							'chatFontSize': 18,
							'cellTransparency': 100,
							'lightenCellColor': 90,
							'borderWidth': 40,
							'borderColor': '#01d9cc',
							'team1color': '#aeaeae',
							'team2color': '#fff700',
							'nickColor': '#fff',
							'nickStrokeColor': '#000',
							'cellNickSize': 120,
							'nickFont': 'ubuntu',
							'massColor': '#fff',
							'massStrokeColor': '#000',
							'cellMassSize': 160,
							'massFont': 'ubuntu',
							'gridWidth': 40,
							'gridColor': '#00243e',
							'gridTextColor': '#00243e',
							'gridTextSize': 1200,
							'gridTextFont': 'ubuntu',
							'foodSize': 5,
							'foodColor': '#5000ff',
							'virusColor': '#002f52',
							'virusBorderColor': '#00b9e8',
							'virusBorderWidth': 14,
							'commanderColor': '#0849d4',
							'backgroundColor': '#000a11',
							'indicatorSize': 100,
							'cursor': 1
						},
						'settings': {
							'CellAnimation': 140,
							'eatAnimation': 'on',
							'cellTextAnimation': 'on',
							'cellMass': 'shortened',
							'food': 'monoColored',
							'bgSectors': 'normal',
							'vanillaGrid': 'off'
						}
					},
					'Yin': {
						'author': 'DaChong',
						'theme': {
							'skinBorder': 100,
							'lbSize': 130,
							'minimapSize': 200,
							'chatFontSize': 18,
							'cellTransparency': 100,
							'lightenCellColor': 100,
							'borderWidth': 10,
							'borderColor': '#116111',
							'team1color': '#aeaeae',
							'team2color': '#fff700',
							'nickColor': '#fff',
							'nickStrokeColor': '#000',
							'cellNickSize': 100,
							'nickFont': 'ubuntu',
							'massColor': '#fff',
							'massStrokeColor': '#000',
							'cellMassSize': 100,
							'massFont': 'ubuntu',
							'gridWidth': 10,
							'gridColor': '#333333',
							'gridTextColor': '#333333',
							'gridTextSize': 1700,
							'gridTextFont': 'ubuntu',
							'foodSize': 1,
							'foodColor': '#555',
							'virusColor': '#6fff00',
							'virusBorderColor': '#55b304',
							'virusBorderWidth': 14,
							'commanderColor': '#00fff7',
							'backgroundColor': '#000000',
							'indicatorSize': 100,
							'cursor': 1
						},
						'settings': {
							'CellAnimation': 120,
							'eatAnimation': 'on',
							'cellTextAnimation': 'on',
							'cellMass': 'full',
							'food': 'rainbow',
							'bgSectors': 'normal',
							'vanillaGrid': 'off'
						}
					},
					'VNDOT': {
						'author': 'KSCC',
						'theme': {
							'skinBorder': 100,
							'lbSize': 100,
							'minimapSize': 200,
							'chatFontSize': 18,
							'cellTransparency': 100,
							'lightenCellColor': 100,
							'borderWidth': 10,
							'borderColor': '#333333',
							'team1color': '#aeaeae',
							'team2color': '#fff700',
							'nickColor': '#fff',
							'nickStrokeColor': '#000',
							'cellNickSize': 110,
							'nickFont': 'ubuntu',
							'massColor': '#fff',
							'massStrokeColor': '#000',
							'cellMassSize': 110,
							'massFont': 'ubuntu',
							'gridWidth': 10,
							'gridColor': '#333333',
							'gridTextColor': '#444444',
							'gridTextSize': 1200,
							'gridTextFont': 'ubuntu',
							'foodSize': 1,
							'foodColor': '#4b6efa',
							'virusColor': '#6fff00',
							'virusBorderColor': '#55b304',
							'virusBorderWidth': 14,
							'commanderColor': '#00fff7',
							'backgroundColor': '#111',
							'indicatorSize': 100,
							'cursor': 1
						},
						'settings': {
							'CellAnimation': 120,
							'eatAnimation': 'on',
							'cellTextAnimation': 'stepped',
							'cellMass': 'shortened',
							'food': 'monoColored',
							'bgSectors': 'normal',
							'vanillaGrid': 'off'
						}
					},
					'OZYDOT': {
						'author': 'Eric',
						'theme': {
							'skinBorder': 100,
							'lbSize': 100,
							'minimapSize': 200,
							'chatFontSize': 14,
							'cellTransparency': 100,
							'lightenCellColor': 100,
							'borderWidth': 20,
							'borderColor': '#666666',
							'team1color': '#aeaeae',
							'team2color': '#fff700',
							'nickColor': '#fff',
							'nickStrokeColor': '#000',
							'cellNickSize': 110,
							'nickFont': 'ubuntu',
							'massColor': '#fff',
							'massStrokeColor': '#444',
							'cellMassSize': 140,
							'massFont': 'oswald',
							'gridWidth': 100,
							'gridColor': '#222222',
							'gridTextColor': '#222222',
							'gridTextSize': 1400,
							'gridTextFont': 'sans-serif',
							'foodSize': 1,
							'foodColor': '#c9d3f5',
							'virusColor': '#e0e0e0',
							'virusBorderColor': '#9c9c9c',
							'virusBorderWidth': 10,
							'commanderColor': '#ffffff',
							'backgroundColor': '#000000',
							'indicatorSize': 100,
							'cursor': 1
						},
						'settings': {
							'CellAnimation': 120,
							'eatAnimation': 'on',
							'cellTextAnimation': 'on',
							'cellMass': 'full',
							'food': 'monoColored',
							'bgSectors': 'normal',
							'vanillaGrid': 'off'
						}
					},
					'HSLO v2': {
						'author': '2coolife',
						'theme': {
							'skinBorder': 100,
							'lbSize': 110,
							'minimapSize': 180,
							'chatFontSize': 16,
							'cellTransparency': 100,
							'lightenCellColor': 90,
							'borderWidth': 20,
							'borderColor': '#ffffff',
							'team1color': '#aeaeae',
							'team2color': '#fff700',
							'nickColor': '#fff',
							'nickStrokeColor': '#000',
							'cellNickSize': 120,
							'nickFont': 'ubuntu',
							'massColor': '#fff',
							'massStrokeColor': '#000000',
							'cellMassSize': 120,
							'massFont': 'ubuntu',
							'gridWidth': 10,
							'gridColor': '#007777',
							'gridTextColor': '#333333',
							'gridTextSize': 1600,
							'gridTextFont': 'oswald',
							'foodSize': 5,
							'foodColor': '#666666',
							'virusColor': '#444444',
							'virusBorderColor': '#007777',
							'virusBorderWidth': 14,
							'commanderColor': '#ffffff',
							'backgroundColor': '#222',
							'indicatorSize': 100,
							'cursor': 1
						},
						'settings': {
							'CellAnimation': 140,
							'eatAnimation': 'on',
							'cellTextAnimation': 'on',
							'cellMass': 'shortened',
							'food': 'monoColored',
							'bgSectors': 'normal',
							'vanillaGrid': 'off'
						}
					},
					'HSLO v3': {
						'author': '2coolife',
						'theme': {
							'skinBorder': 90,
							'lbSize': 100,
							'minimapSize': 180,
							'chatFontSize': 14,
							'cellTransparency': 100,
							'lightenCellColor': 100,
							'borderWidth': 40,
							'borderColor': '#ff006f',
							'team1color': '#aeaeae',
							'team2color': '#ff006f',
							'nickColor': '#fff',
							'nickStrokeColor': '#000000',
							'cellNickSize': 110,
							'nickFont': 'ubuntu',
							'massColor': '#fff',
							'massStrokeColor': '#000000',
							'cellMassSize': 110,
							'massFont': 'ubuntu',
							'gridWidth': 10,
							'gridColor': '#121212',
							'gridTextColor': '#121212',
							'gridTextSize': 1400,
							'gridTextFont': 'oswald',
							'foodSize': 1,
							'foodColor': '#555555',
							'virusColor': '#444444',
							'virusBorderColor': '#ff006f',
							'virusBorderWidth': 10,
							'commanderColor': '#ff006f',
							'backgroundColor': '#000000',
							'indicatorSize': 100,
							'cursor': 1
						},
						'settings': {
							'CellAnimation': 140,
							'eatAnimation': 'on',
							'cellTextAnimation': 'on',
							'cellMass': 'shortened',
							'food': 'monoColored',
							'bgSectors': 'snowflakes',
							'vanillaGrid': 'off'
						}
					},
					'HSLO v4': {
						'author': '2coolife',
						'theme': {
							'skinBorder': 90,
							'lbSize': 100,
							'minimapSize': 180,
							'chatFontSize': 14,
							'cellTransparency': 100,
							'lightenCellColor': 100,
							'borderWidth': 20,
							'borderColor': '#ff9900',
							'team1color': '#aeaeae',
							'team2color': '#ff006f',
							'nickColor': '#fff',
							'nickStrokeColor': '#000000',
							'cellNickSize': 110,
							'nickFont': 'ubuntu',
							'massColor': '#fff',
							'massStrokeColor': '#000000',
							'cellMassSize': 120,
							'massFont': 'ubuntu',
							'gridWidth': 10,
							'gridColor': '#ff9900',
							'gridTextColor': '#333333',
							'gridTextSize': 1300,
							'gridTextFont': 'ubuntu',
							'foodSize': 1,
							'foodColor': '#555555',
							'virusColor': '#444444',
							'virusBorderColor': '#ff9900',
							'virusBorderWidth': 10,
							'commanderColor': '#ff006f',
							'backgroundColor': '#222222',
							'indicatorSize': 100,
							'cursor': 1
						},
						'settings': {
							'CellAnimation': 140,
							'eatAnimation': 'on',
							'cellTextAnimation': 'on',
							'cellMass': 'shortened',
							'food': 'monoColored',
							'bgSectors': 'normal',
							'vanillaGrid': 'off'
						}
					},
					'Pastels': {
						'author': '2coolife',
						'theme': {
							'skinBorder': 90,
							'lbSize': 100,
							'minimapSize': 180,
							'chatFontSize': 14,
							'cellTransparency': 100,
							'lightenCellColor': 100,
							'borderWidth': 40,
							'borderColor': '#f5d25f',
							'team1color': '#aeaeae',
							'team2color': '#ff006f',
							'nickColor': '#fff',
							'nickStrokeColor': '#000000',
							'cellNickSize': 110,
							'nickFont': 'ubuntu',
							'massColor': '#fff',
							'massStrokeColor': '#000000',
							'cellMassSize': 120,
							'massFont': 'ubuntu',
							'gridWidth': 10,
							'gridColor': '#fa676c',
							'gridTextColor': '#333333',
							'gridTextSize': 1300,
							'gridTextFont': 'oswald',
							'foodSize': 1,
							'foodColor': '#555555',
							'virusColor': '#7a4ba3',
							'virusBorderColor': '#ead2fa',
							'virusBorderWidth': 14,
							'commanderColor': '#ff006f',
							'backgroundColor': '#222222',
							'indicatorSize': 100,
							'cursor': 1
						},
						'settings': {
							'CellAnimation': 140,
							'eatAnimation': 'on',
							'cellTextAnimation': 'on',
							'cellMass': 'shortened',
							'food': 'monoColored',
							'bgSectors': 'normal',
							'vanillaGrid': 'off'
						}
					}
				};
			}
		}]), _4989757;
    })(),
    
    
    
    window.classoe = oe, m = (() => {
		function _13897069() {
			plzsuckmydick(this, _13897069);
		}
		return plzdsmd(_13897069, null, [{
			'key': 'init',
			'value'() {
				this.div = _2610335('#notifications'), this.duration = 10000, this.animDuration = 500, this.iconChat = '<i class=\"fa fa-comment\"></i>', this.iconAlert = '<i class=\"fa fa-exclamation-circle\"></i>', this.iconBell = '<i class=\"fa fa-bell\"></i>', this.chatroomdiv = _2610335('#chatroom'), this.emojiPath = 'https://hslo.yueagar.ml/emojis/', this.emojis = {
					':01:': 'angry.png',
					':02:': 'angry-1.png',
					':03:': 'cool.png',
					':04:': 'crying.png',
					':05:': 'crying-1.png',
					':06:': 'embarrassed.png',
					':07:': 'happy.png',
					':08:': 'happy-1.png',
					':09:': 'happy-2.png',
					':10:': 'in-love.png',
					':11:': 'kiss.png',
					':12:': 'laughing.png',
					':13:': 'laughing-1.png',
					':14:': 'poo.png',
					':15:': 'sad.png',
					':16:': 'sad-1.png',
					':17:': 'shocked.png',
					':18:': 'shocked-1.png',
					':19:': 'sick.png',
					':20:': 'sleeping.png',
					':21:': 'thinking.png',
					':22:': 'tongue.png',
					':23:': 'tongue-1.png',
					':24:': 'vomit.png',
					':25:': 'wink.png',
					':26:': 'thinking-distort.png',
					':27:': 'pepe-thumbsup.png',
					':28:': 'pepe-hype.png',
					':29:': 'pepe-tears2much.png',
					':30:': 'pepe-gunfire.gif',
					':31:': 'pepe-okgame.png',
					':32:': 'pepe-heart.png',
					':33:': 'parrot-thuglife.gif',
					':34:': 'blob-happy.png',
					':35:': 'leny.png'
				}, this.displayEmojis();
			}
		}, {
			'key': 'displayEmojis',
			'value'() {
				const _13897069 = _2610335('#emojiContainer'),
					_3312436 = _3312436 => {
						const _1896399 = _2610335('<img src=\"https://hslo.yueagar.ml/emojis/' + this.emojis[_3312436] + '\" class=\"emojiPreview\">');
						_1896399.click(() => {
							const _13897069 = _2610335('#message'),
								_1896399 = _13897069.val();
							_13897069.val(_1896399 + ' ' + _3312436), w.input.focus();
						}), _13897069.append(_1896399);
					};
				for (const _13897069 in this.emojis) _3312436(_13897069);
			}
		}, {
			'key': 'normal',
			'value'(_13897069, _6111178) {
				if ('on' === _4629996.sounds && _5297403.playChat(), this.chatroom(_13897069, _6111178, this.iconChat), 'chatroom' !== _4629996.chatType) {
					const _6247812 = '<div><div class=\"normal\">' + this.iconChat + '<span class=\"nick\">' + _13897069 + '</span><span class=\"message\">' + this.putEmojis(this.cleanMessages(_6111178)) + '</span></div></div>';
					this.append(_6247812);
				}
			}
		}, {
			'key': 'command',
			'value'(_13897069, _2850878) {
				if ('on' === _4629996.sounds && _5297403.playCmd(), this.chatroom(_13897069, _2850878, this.iconAlert), 'chatroom' !== _4629996.chatType) {
					const _2970202 = '<div><div class=\"command\">' + this.iconAlert + '<span class=\"nick\">' + _13897069 + '</span><span class=\"message\">' + this.cleanMessages(_2850878) + '</span></div></div>';
					this.append(_2970202);
				}
			}
		}, {
			'key': 'alert',
			'value'(_13897069, _5059459) {
				if ('on' === _4629996.sounds && _5297403.playAlert(), this.chatroom(_13897069, _5059459, this.iconBell), 'chatroom' !== _4629996.chatType) {
					const _5488617 = '<div><div class=\"alert\">' + this.iconBell + '<span class=\"nick\">' + _13897069 + '</span><span class=\"message\">' + this.cleanMessages(_5059459) + '</span></div></div>';
					this.append(_5488617);
				}
			}
		}, {
			'key': 'append',
			'value'(_13897069) {
				const _4964074 = this,
					_2549454 = _2610335(_13897069);
				_2549454.slideUp(0), _2549454.appendTo(this.div), _2549454.slideDown(this.animDuration), setTimeout(() => {
					_2549454.slideUp(_4964074.animDuration, () => {
						_2549454.remove();
					});
				}, this.duration);
			}
		}, {
			'key': 'cleanMessages',
			'value'(_13897069) {
				return _13897069;
			}
		}, {
			'key': 'putEmojis',
			'value'(_13897069) {
				for (const _3430068 in this.emojis) {
					const _2458344 = new RegExp(_3430068, 'g');
					_13897069 = _13897069.replace(_2458344, '<img src=\"' + (this.emojiPath + this.emojis[_3430068]) + '\">');
				}
				return _13897069;
			}
		}, {
			'key': 'chatroom',
			'value'(_13897069, _4300757, _3079240) {
				const _5417660 = new Date(),
					_16350690 = (9 < _5417660.getHours() ? _5417660.getHours() : '0' + _5417660.getHours()) + ':' + (9 < _5417660.getMinutes() ? _5417660.getMinutes() : '0' + _5417660.getMinutes());
				this.chatroomdiv.append('<div class=\"chatroom-row\"><span class=\"chattime\">' + _16350690 + '</span> ' + _3079240 + ' <span class=\"nick\">' + _13897069 + '</span> <span class=\"message\">' + this.putEmojis(this.cleanMessages(_4300757)) + '</span></div>'), oe.setChatFontSize(oe.chatFontSize), this.chatroomdiv.scrollTop(this.chatroomdiv[0].scrollHeight);
			}
		}]), _13897069;
    })(),
    
    
    
    window.toaster = m;
	const _5297403 = (() => {
			function _16495873() {
				plzsuckmydick(this, _16495873);
			}
			return plzdsmd(_16495873, null, [{
				'key': 'init',
				'value'() {
					this.chatSound = new Audio('https://jimboy3100.github.io/sounds/notification_01.mp3') || {
						'play': () => {}
					}, this.cmdSound = new Audio('https://cdn.ogario.ovh/static/sounds/notification_02.mp3') || {
						'play': () => {}
					}, this.alertSound = new Audio('https://jimboy3100.github.io/sounds/chat-message.mp3') || {
						'play': () => {}
					};
				}
			}, {
				'key': 'playChat',
				'value'() {
					const _16495873 = this.chatSound.play();
					void 0 !== _16495873 && _16495873.then(() => {}).catch(() => {});
				}
			}, {
				'key': 'playCmd',
				'value'() {
					const _16495873 = this.cmdSound.play();
					void 0 !== _16495873 && _16495873.then(() => {}).catch(() => {});
				}
			}, {
				'key': 'playAlert',
				'value'() {
					const _16495873 = this.alertSound.play();
					void 0 !== _16495873 && _16495873.then(() => {}).catch(() => {});
				}
			}]), _16495873;
		})(),
		_5451753 = new((() => {
			function _2325961() {
				plzsuckmydick(this, _2325961), this.loggedIn = false, this.token = '', this.button = _2610335('#login-facebook'), this.options = {
					'appId': 677505792353827,
					'cookie': true,
					'xfbml': true,
					'status': true,
					'version': 'v2.8'
				}, this.setDomElements();
			}
			return plzdsmd(_2325961, [{
				'key': 'setDomElements',
				'value'() {
					const _2325961 = this;
					_2610335('#login-facebook').click(() => {
						_2325961.login();
					}), _2610335('#logout').click(() => {
						_2325961.logout();
					}), _16350690.FB ? FB.init(this.options) : m.alert('Facebook', _4428048.current.notif.sdk_error);
				}
			}, {
				'key': 'init',
				'value'() {
					const _2325961 = _1772312.get('extras', 'fbToken');
					if (_2325961) {
						const _6219628 = Date.now();
						return _2325961.expiry < _6219628 ? void _1772312.set('extras', 'fbToken', '') : (this.token = _2325961.token, this.loggedIn = true, this.button.addClass('active'), void m.alert('Facebook', _4428048.current.notif.login_lastSession), Q.freeCoins(1));
					}
				}
			}, {
				'key': 'login',
				'value'() {
					const _2325961 = this;
					return this.loggedIn ? void m.alert('Facebook', _4428048.current.notif.logged) : void(_16350690.FB ? _16350690.FB.login(_4701020 => {
						_2325961.afterLogin(_4701020);
					}, {
						'scope': 'public_profile, email'
					}) : m.alert('Facebook', _4428048.current.notif.sdk_error));
				}
			}, {
				'key': 'afterLogin',
				'value'(_2325961) {
					_2325961.authResponse ? (this.token = _2325961.authResponse.accessToken, _1772312.set('extras', 'fbToken', {
						'token': this.token,
						'expiry': Date.now() + 1000 * _2325961.authResponse.expiresIn
					}), this.loggedIn = true, this.button.addClass('active'), Q.fbToken(), m.alert('Facebook', _4428048.current.notif.login_success), Q.freeCoins(1)) : m.alert('Facebook', _4428048.current.notif.login_error);
				}
			}, {
				'key': 'logout',
				'value'() {
					const _2325961 = this;
					this.loggedIn && _16350690.FB.logout(_2116458 => {
						_2116458.authResponse && (_2325961.loggedIn = false, _2325961.token = null, Q.triedCoins = false, _2325961.button.removeClass('active'), m.alert('Facebook', _4428048.current.notif.logout), _1772312.set('extras', 'fbToken', ''));
					});
				}
			}]), _2325961;
        })())(),
        



		_4188507 = (() => {
			function _2033245() {
				plzsuckmydick(this, _2033245);
			}
			return plzdsmd(_2033245, null, [{
				'key': 'init',
				'value'() {
					const _2033245 = this;
					this.loggedIn = false, this.token = null;
					const _2999773 = _1772312.get('extras', 'googleToken');
					_2999773 && (_2999773.expiry > Date.now() ? (this.token = _2999773.token, this.loggedIn = true, _2610335('#login-google').addClass('active'), Q.googleToken(), m.alert('Google+', _4428048.current.notif.login_lastSession), Q.freeCoins(2)) : _1772312.set('extras', 'googleToken', false)), _16350690.gapi ? _16350690.gapi.load('auth2', () => {
						const _2999773 = gapi.auth2.init({
								'client_id': '686981379285-oroivr8u2ag1dtm3ntcs6vi05i3cpv0j.apps.googleusercontent.com',
								'cookiepolicy': 'single_host_origin'
							}),
							_4345436 = _5821427.getElementById('login-google');
						_2999773.attachClickHandler(_4345436, {}, _2999773 => {
							_2033245.afterLogin(_2999773);
						}, _2033245 => {
							console.log(_2033245);
						});
					}) : m.alert('Google+', _4428048.current.notif.sdk_error), _2610335('#logout').click(() => {
						_2033245.logout();
					});
				}
			}, {
				'key': 'afterLogin',
				'value'(_2033245) {
					const _5959619 = _2033245.getAuthResponse(true),
						_10087540 = _5959619.id_token;
					_10087540 ? (this.token = _10087540, _1772312.set('extras', 'googleToken', {
						'token': this.token,
						'expiry': _5959619.expires_at
					}), this.loggedIn = true, _2610335('#login-google').addClass('active'), Q.googleToken(), m.alert('Google+', _4428048.current.notif.login_success), Q.freeCoins(2)) : m.alert('Google+', _4428048.current.notif.login_error);
				}
			}, {
				'key': 'logout',
				'value'() {
					if (this.loggedIn) {
						gapi.auth2.getAuthInstance().signOut(), this.loggedIn = false, Q.triedCoins2 = false, this.token = null, _2610335('#login-google').removeClass('active'), m.alert('Google+', _4428048.current.notif.logout), _1772312.set('extras', 'googleToken', false);
					}
				}
			}]), _2033245;
		})(),
		_4168640 = (() => {
			function _4249194() {
				plzsuckmydick(this, _4249194);
			}
			return plzdsmd(_4249194, null, [{
				'key': 'init',
				'value'() {
					this.html = this.getHTML(1), this.dataHTML = this.getHTML(2), this.playersAmount = 0, this.list = new Set(), this.div = _2610335('#leaderboard-positions')[0], this.teamLB = _2610335('#leaderboard-chart'), this.teamLBvisible = false, this.barsCss = _5821427.createElement('style'), _2610335('head').append(this.barsCss);
				}
			}, {
				'key': 'add',
				'value'(_4249194, _4496799, _4032791, _1723722, _16350690) {
					this.list.add({
						'nick': _4249194,
						'position': _4496799,
						'isSelf': _4032791,
						'account': _16350690,
						'isFriend': _1723722
					});
				}
			}, {
				'key': 'team',
				'value'(_4249194, _8160683, _3254228) {
					this.teamLBvisible || (this.teamLB.show(), this.div.innerHTML = '', this.teamLBvisible = true), this.barsCss.innerText = '.chart-bar.red { width: ' + (0 | 150 * _4249194) + 'px } .chart-bar.green { width: ' + (0 | 150 * _8160683) + 'px } .chart-bar.blue { width: ' + (0 | 150 * _3254228) + 'px }';
				}
			}, {
				'key': 'clear',
				'value'() {
					this.list.clear();
				}
			}, {
				'key': 'update',
				'value'() {
					this.teamLBvisible && (this.teamLB.hide(), this.teamLBvisible = false);
					let _4249194 = 0;
					for (const _1194873 of this.list.values()) {
						var _5132708 = this.html[_4249194++];
						try {
							_5132708.nick.innerHTML = this.cleanNick(_1194873.nick) + ' [' + (11 != _4249194 ? ghostCells[_4249194 - 1].mass : A.mass1) + '] [' + (11 != _4249194 ? Z.calcSector(3, ghostCells[_4249194 - 1].x, ghostCells[_4249194 - 1].y) : A.location) + ']';
						} catch (_5161643) {};
						_5132708.position.innerHTML = _1194873.position, _5132708.hidden && (_5132708.element.style.display = 'block', _5132708.hidden = false);
					}
					let _1865578 = this.dataHTML[0];
					_1865578.dataAmount.innerHTML = this.playersAmount;
					for (let _5132708, _3206632 = _4249194; _3206632 < this.html.length; _3206632++)(_5132708 = this.html[_3206632]).hidden || (_5132708.element.style.display = 'none', _5132708.hidden = true);
				}
			}, {
				'key': 'cleanNick',
				'value': _4249194 => _4249194.replace(/</g, '(').replace(/>/g, ')')
			}, {
				'key': 'getHTML',
				'value'(_5916335) {
					const _4249194 = [],
						_3255325 = [],
						_2482321 = _2610335('.lb-position'),
						_5614245 = _2610335('.lb-data');
					for (const _4767513 of _2482321) {
						const _2482321 = _2610335(_4767513).children(),
							_2565903 = _2482321[0],
							_16350690 = _2482321[1];
						_4249194.push({
							'element': _4767513,
							'nick': _2565903,
							'position': _16350690,
							'hidden': false
						});
					}
					for (const _13851981 of _5614245) {
						const _2482321 = _2610335(_13851981).children(),
							_1490897 = _2482321[0],
							_16350690 = _2482321[1];
						_3255325.push({
							'element': _13851981,
							'dataName': _1490897,
							'dataAmount': _16350690,
							'hidden': false
						});
					}
					if (_5916335 === 1) return _4249194;
					if (_5916335 === 2) return _3255325;
				}
			}]), _4249194;
		})();
	window.te = _4168640;
	S = new((() => {
		function _5998834() {
			plzsuckmydick(this, _5998834), this.canvas = _2610335('#minimap-nodes')[0], this.ctx = this.canvas.getContext('2d'), this.size = 200, this.canvas.width = this.size, this.canvas.height = this.size, this.pi2 = 2 * Math.PI, this.ratio = 1, this.ctx.textAlign = 'center', this.ctx.textBaseline = 'bottom', this.ctx.lineWidth = 2;
		}
		return plzdsmd(_5998834, [{
			'key': 'run',
			'value'() {
				this.ratio = this.size / G.edge;
				this.ctx.clearRect(0, 0, this.size, this.size), this.renderViewport();
				this.renderTopViewport(), this.renderDeathLocation(), this.renderGhost(), this.renderSelf(), this.renderTeammates();
			}
		}, {
			'key': 'renderViewport',
			'value'() {
				const _5998834 = L.viewBounds,
					_4759602 = 0 | (_5998834.left - G.offset.x + 7071) * this.ratio,
					_9298316 = 0 | (_5998834.top - G.offset.y + 7071) * this.ratio,
					_2327168 = 0 | (_5998834.right - _5998834.left) * this.ratio,
					_16350690 = 0 | (_5998834.bottom - _5998834.top) * this.ratio;
				this.ctx.globalAlpha = oe.selfViewportAlpha / 10, this.ctx.fillStyle = oe.selfViewportColor, this.ctx.fillRect(_4759602, _9298316, _2327168, _16350690);
			}
		}, {
			'key': 'renderTopViewport',
			'value'() {
				const _5998834 = I.bound3,
					_13268583 = 0 | (_5998834.left - G.offset.x + 7071) * this.ratio,
					_14583207 = 0 | (_5998834.top - G.offset.y + 7071) * this.ratio,
					_4985596 = 0 | (_5998834.right - _5998834.left) * this.ratio,
					_16350690 = 0 | (_5998834.bottom - _5998834.top) * this.ratio;
				this.ctx.globalAlpha = oe.topViewportAlpha / 10, this.ctx.fillStyle = oe.topViewportColor, this.ctx.fillRect(_13268583, _14583207, _4985596, _16350690);
			}
		}, {
			'key': 'renderDeathLocation',
			'value'() {
				const _5998834 = 0 | (7071 - G.offset.x + A.deathLocation.x) * this.ratio,
					_3921942 = 0 | (7071 - G.offset.y + A.deathLocation.y) * this.ratio;
				this.ctx.globalAlpha = 1, this.ctx.strokeStyle = '#666', this.ctx.beginPath(), this.ctx.moveTo(_5998834 - 4, _3921942 - 4), this.ctx.lineTo(_5998834 + 4, _3921942 + 4), this.ctx.moveTo(_5998834 - 4, _3921942 + 4), this.ctx.lineTo(_5998834 + 4, _3921942 - 4), this.ctx.stroke();
			}
		}, {
			'key': 'renderSelf',
			'value'() {
				const _5998834 = 0 | (7071 - G.offset.x + L.x) * this.ratio,
					_4591840 = 0 | (7071 - G.offset.y + L.y) * this.ratio,
					_13273476 = 0 | (7071 - G.offset.x + A.x1) * this.ratio,
					_2824030 = 0 | (7071 - G.offset.y + A.y1) * this.ratio,
					_5568959 = 0 | (7071 - G.offset.x + A.x2) * this.ratio,
					_3936172 = 0 | (7071 - G.offset.y + A.y2) * this.ratio,
					_3049514 = A.isAlive ? 4 : 7;
				this.ctx.beginPath();
				A.isAliveTab1 ? (this.ctx.arc(_13273476, _2824030, _3049514, 0, this.pi2, false), this.ctx.moveTo(_5568959 + 4, _3936172), A.isAliveTab2 && this.ctx.arc(_5568959, _3936172, _3049514, 0, this.pi2, false)) : this.ctx.arc(_5998834, _4591840, _3049514, 0, this.pi2, false), this.ctx.closePath(), this.ctx.fillStyle = oe.selfColor, this.ctx.fill(), this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)', this.ctx.stroke();
			}
		}, {
			'key': 'renderGhost',
			'value'() {
				this.ctx.beginPath();
				for (let _5998834 = 0; _5998834 < ghostCells.length; _5998834++) {
					const _5482286 = 0 | (7071 - G.offset3.x + ghostCells[_5998834].x) * this.ratio,
						_4135819 = 0 | (7071 - G.offset3.y + ghostCells[_5998834].y) * this.ratio,
						_16350690 = ghostCells[_5998834]
['size'] * this.ratio;
					this.ctx.moveTo(_5482286 + _16350690, _4135819);
					this.ctx.arc(_5482286, _4135819, _16350690, 0, this.pi2, false);
				};
				this.ctx.closePath(), this.ctx.fillStyle = oe.ghostColor, this.ctx.fill(), this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)', this.ctx.stroke();
			}
		}, {
			'key': 'renderTeammates',
			'value'() {
				const _5998834 = this.ctx;
				_5998834.textAlign = 'center', _5998834.fillStyle = oe.teammateNameColor, _5998834.textBaseline = 'bottom', _5998834.font = '700 12px ubuntu', _5998834.beginPath();
				for (const _1052856 of se.teammates.values())
					if (_1052856.isAlive && (2000 < le.time - _1052856.lastUpdateAt || 0 === _1052856.mass) && (_1052856.isAlive = false), _1052856.isAlive) {
						if (_1052856.worldID === A.worldID || _1052856.worldID === A.worldID2) {
							void 0;
						} else {
							_1052856.animate();
							var _3741550 = _1052856.mapX,
								_4715346 = _1052856.mapY;
							_5998834.moveTo(_3741550 + 4, _4715346), _5998834.arc(_3741550, _4715346, 4, 0, this.pi2, false), 0 < _1052856.nick.length && _5998834.fillText(_1052856.nick, _3741550, _4715346 - 6);
						}
					} _5998834.closePath(), _5998834.fillStyle = oe.teammateColor, _5998834.strokeStyle = 'rgba(0, 0, 0, 0.5)', _5998834.fill(), _5998834.stroke();
			}
		}]), _5998834;
    })())(),
    
    
    
    v = () => {}, C = new((() => {
		function _4285467() {
			plzsuckmydick(this, _4285467), this.lastUpdateTime = 0, this.totalmass = 0, this.alive = 0, this.spectate = 0, this.html = '', this.temporayArray = [], this.div = {
				'positions': _2610335('#teamlist-positions')[0],
				'spectate': _2610335('#teamlist-spectate span')[0],
				'alive': _2610335('#teamlist-alive span')[0],
				'totalmass': _2610335('#teamlist-totalmass span')[0]
			};
		}
		return plzdsmd(_4285467, [{
			'key': 'update',
			'value'() {
				1000 > le.time - this.lastUpdateTime || (this.lastUpdateTime = le.time, this.generateList(), this.div.positions.innerHTML = this.html, this.div.alive.innerHTML = this.alive, this.div.totalmass.innerHTML = this.totalmass, this.div.spectate.innerHTML = this.spectate, this.reset());
			}
		}, {
			'key': 'generateList',
			'value'() {
				const _4285467 = this;
				se.teammates.forEach(_5244948 => {
					_5244948.isAlive ? (_4285467.totalmass += _5244948.mass, _4285467.temporayArray.push(_5244948), _4285467.alive++) : _4285467.spectate++;
				}), this.temporayArray.sort((_4285467, _3838028) => _3838028.mass - _4285467.mass), this.temporayArray.splice(5), A.isAliveTab1 ? (this.totalmass += A.mass1, this.temporayArray.push(A), this.alive++) : this.spectate++;
				for (let _4285467 = 0; _4285467 < this.temporayArray.length; _4285467++) {
					const _5046339 = this.temporayArray[_4285467];
					this.addPlayer(_5046339);
				}
			}
		}, {
			'key': 'addPlayer',
			'value'(_4285467) {
				const _5533385 = 100 * _4285467.mass / this.totalmass;
				const _2920208 = 100 * A.mass1 / this.totalmass;
				this.html += '<div class=\"tl-player\"><div class=\"tl-player-image\" style=\"background-image: url(' + (_4285467.skin ? _4285467.worldID === A.worldID ? N.code2url(A.skin) : _4285467.skin : N.code2url('O5k0G4p')) + '); background-color: ' + _4285467.colorHex + ';\"></div><div class=\"tl-player-info\"><div class=\"tl-player-nick\">' + (_4285467.worldID === A.worldID ? A.mass1 : _4285467.mass) + ' <i class=\"fas fa-volleyball-ball\"></i> ' + _4285467.nick + '</div><div class=\"tl-player-massbar\"><div class=\"tl-player-massbar-fill\" style=\"width: ' + (_4285467.worldID === A.worldID ? _2920208 : _5533385) + '%;\"></div></div></div></div>';
			}
		}, {
			'key': 'reset',
			'value'() {
				this.totalmass = 0, this.alive = 0, this.spectate = 0, this.temporayArray = [], this.html = '';
			}
		}, {
			'key': 'cleanNick',
			'value': _4285467 => _4285467.replace(/</g, '(').replace(/>/g, ')')
		}]), _4285467;
    })())(),
    
    
    
    w = (() => {
		function _3974962() {
			plzsuckmydick(this, _3974962);
		}
		return plzdsmd(_3974962, null, [{
			'key': 'init',
			'value'() {
				const _3974962 = this;
				this.container = _2610335('#message-hud'), this.input = _2610335('#message'), this.isOpened = false, this.isFocused = false, this.input.blur(() => {
					_3974962.isFocused = false;
				}), this.input.focus(() => {
					_3974962.isFocused = true;
				}), this.chatroom = _2610335('#chatroom'), this.chatroom.perfectScrollbar();
			}
		}, {
			'key': 'enter',
			'value'() {
				if (this.isOpened)
					if (this.isFocused) {
						let _3974962 = this.input.val();
						0 < _3974962.length && (100 < _3974962.length && (_3974962 = _3974962.substring(0, 100)), _e.message(101, _3974962, A.controllingTab), this.input.val('')), this.input.blur(), this.container.hide(), this.isOpened = false;
					} else this.input.focus();
				else this.container.show(), this.isOpened = true, this.input.focus();
			}
		}]), _3974962;
    })(),
    
    
    
    T = new((() => {
		function _4088757() {
			plzsuckmydick(this, _4088757), this.fpsCount = 0, this.lastUpdateTime = 0, this.div = _2610335('#stats-hud')[0], this.timeHud = _2610335('#time-hud')[0], this.icon = {
				'lockClosed': '<i class=\"fa fa-lock\"></i>',
				'lockOpened': '<i class=\"fa fa-unlock-alt\"></i>',
				'speedometer': '<i class=\"fa fa-tachometer-alt\"></i>',
				'iconPause': '<i class=\"fa fa-pause-circle\"></i>'
			};
		}
		return plzdsmd(_4088757, [{
			'key': 'update',
			'value'() {
				this.fpsCount++, 1000 > le.time - this.lastUpdateTime || (this.lastUpdateTime = le.time, this.refresh());
			}
		}, {
			'key': 'refresh',
			'value'() {
				let _4088757 = '';
				_4088757 += this.fps, A.isAlive && (_4088757 += this.score + this.n16 + this.STE), _4088757 += this.PIO + this.paused + this.zoomLock, this.div.innerHTML = _4088757;
				let _6124146 = new Date();
				let _1271834 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
				let _2515228 = _1271834[_6124146.getDay()];
				let _2203056 = _6124146.getFullYear() + '.' + (_6124146.getMonth() + 1) + '.' + _6124146.getDate() + ' ' + (_6124146.getHours() < 10 ? '0' + _6124146.getHours() : _6124146.getHours()) + ':' + (_6124146.getMinutes() < 10 ? '0' + _6124146.getMinutes() : _6124146.getMinutes()) + ':' + (_6124146.getSeconds() < 10 ? '0' + _6124146.getSeconds() : _6124146.getSeconds()) + ' (' + _2515228 + ')';
				this.timeHud.innerHTML = _2203056;
			}
		}, {
			'key': 'zoomLock',
			'get'() {
				return 'on' === _4629996.autoZoom ? this.icon.lockClosed : this.icon.lockOpened;
			}
		}, {
			'key': 'score',
			'get': () => 'Score: ' + A.score + '   Mass: ' + A.mass + '   '
		}, {
			'key': 'n16',
			'get': () => '[' + A.n16 + '/' + (_4629996.multiboxMode === 'on' ? '32' : '16') + ']   '
		}, {
			'key': 'STE',
			'get'() {
				const _4088757 = A.biggestPieceMass;
				return 35 < _4088757 ? 'STE: ' + (0 | _4088757 * (1000 > _4088757 ? 0.35 : 0.38)) + '   ' : '';
			}
		}, {
			'key': 'speed',
			'get'() {
				return A.animSpeed += (A.speed - A.animSpeed) / 3, A.speed = 0, this.icon.speedometer + ' ' + (0 | A.animSpeed) + 'px/s   ';
			}
		}, {
			'key': 'PIO',
			'get'() {
				const _4088757 = q.packetCount.in,
					_7525799 = q.packetCount.out;
				return q.packetCount.in = 0, q.packetCount.out = 0, 'PIO: ' + _4088757 + '|' + _7525799 + '   ';
			}
		}, {
			'key': 'paused',
			'get'() {
				return A.movementPaused ? '[' + this.icon.iconPause + ' <strong>Paused</strong>]   ' : '';
			}
		}, {
			'key': 'fps',
			'get'() {
				const _4088757 = this.fpsCount;
				return this.fpsCount = 0, 'FPS: ' + _4088757 + '   ';
			}
		}]), _4088757;
    })())(),
    
    
    
    F = () => {
		let _1276286 = new Error().stack.trim();
		return _1276286.substring(_1276286.lastIndexOf('/') + 1).split(':')[0];
	}, K = (() => {
		function _4499860() {
			plzsuckmydick(this, _4499860);
		}
		return plzdsmd(_4499860, null, [{
			'key': 'init',
			'value'() {
				this.container = _2610335('#targeting-hud'), this.DIVno1viewport = _2610335('#targeting-no-1'), this.DIVmouse = _2610335('#targeting-mouse'), this.DIVplayers = _2610335('#targeting-players'), this.DIVtotalmass = _2610335('#targeting-playersMass span.mass')[0], this.DIVplayer1 = {
					'nick': _2610335('#targeting-player1 span.nick')[0],
					'mass': _2610335('#targeting-player1 span.mass')[0]
				}, this.DIVplayer2 = {
					'nick': _2610335('#targeting-player2 span.nick')[0],
					'mass': _2610335('#targeting-player2 span.mass')[0]
				}, this.lastTime = le.time;
			}
		}, {
			'key': 'update',
			'value'() {
				if (!(1000 > le.time - this.lastTime) && (this.lastTime = le.time, L.freeSpectate && W.isTurnedOn)) {
					let _4499860 = 0;
					W.target1.turnedOn ? (this.DIVplayer1.nick.innerHTML = W.target1.nick, this.DIVplayer1.mass.innerHTML = W.target1.outOfView ? 'OUT OF VIEW' : W.target1.mass, _4499860 += W.target1.outOfView ? 0 : W.target1.mass) : (this.DIVplayer1.nick.innerHTML = 'Target 1', this.DIVplayer1.mass.innerHTML = 'NOT SELECTED'), W.target2.turnedOn ? (this.DIVplayer2.nick.innerHTML = W.target2.nick, this.DIVplayer2.mass.innerHTML = W.target2.outOfView ? 'OUT OF VIEW' : W.target2.mass, _4499860 += W.target2.outOfView ? 0 : W.target2.mass) : (this.DIVplayer2.nick.innerHTML = 'Target 2', this.DIVplayer2.mass.innerHTML = 'NOT SELECTED'), this.DIVtotalmass.innerHTML = _4499860;
				}
			}
		}, {
			'key': 'show',
			'value'() {
				A.isAliveTab1 || A.isAliveTab2 || this.container.show();
			}
		}, {
			'key': 'hide',
			'value'() {
				this.container.hide();
			}
		}, {
			'key': 'topViewport',
			'value'() {
				this.DIVno1viewport.show(), this.DIVmouse.hide(), this.DIVplayers.hide(), _2610335('#spectate-mode-top').addClass('active'), _2610335('#spectate-mode-mouse').removeClass('active'), _2610335('#spectate-mode-target').removeClass('active');
			}
		}, {
			'key': 'mouseViewport',
			'value'() {
				this.DIVmouse.show(), this.DIVno1viewport.hide(), this.DIVplayers.hide(), _2610335('#spectate-mode-top').removeClass('active'), _2610335('#spectate-mode-mouse').addClass('active'), _2610335('#spectate-mode-target').removeClass('active');
			}
		}, {
			'key': 'targetMode',
			'value'() {
				this.DIVplayers.show(), this.DIVmouse.hide(), this.DIVno1viewport.hide(), _2610335('#spectate-mode-top').removeClass('active'), _2610335('#spectate-mode-mouse').removeClass('active'), _2610335('#spectate-mode-target').addClass('active');
			}
		}]), _4499860;
    })(),
    
    
    
    z = (() => {
		function _4325503() {
			plzsuckmydick(this, _4325503);
		}
		return plzdsmd(_4325503, null, [{
			'key': 'init',
			'value'() {
				_5297403.init(), m.init(), _4629996.init(), _5326466.init(), _5736151.init(), g.init(), oe.init(), _5451753.init(), _4188507.init(), _4168640.init(), w.init(), K.init(), P.setMassUpdateInterval(), this.isOpened = true, this.gMode = ':party', this.div = _2610335('#menu-overlay'), this.streammode = !_1772312.get('extras', 'streammode') && [], this.toggleStreammode(), this.buttons(), this.versionCheck();
			}
		}, {
			'key': 'buttons',
			'value'() {
				const _4325503 = this;
				_2610335('#button-settings').click(() => {
					_4325503.closeSubMenus(), _4629996.toggle();
				}), _2610335('#button-play').click(() => {
					_4325503.play();
				}), _2610335('#button-spectate').click(() => {
					Q.spectate(3), Q.spectate(1), _e.death(1), _e.death(2), _e.join(1), _e.join(2), _4325503.close();
				}), _2610335('#button-inputs').click(() => {
					_4325503.closeSubMenus(), _5326466.toggle();
				}), _2610335('#button-theme').click(() => {
					_4325503.closeSubMenus(), oe.toggle();
				}), _2610335('#regions').change(() => {
					_1772312.set('extras', 'region', _2610335('#regions').val());
				}), _2610335('#regions').val(_1772312.get('extras', 'region') || 'JP-Tokyo'), _2610335('#gamemode').change(() => {
					_1772312.set('extras', 'gameMode', _2610335('#gamemode').val()), _4325503.gMode = _1772312.get('extras', 'gameMode');
				}), _2610335('#gamemode').val(_1772312.get('extras', 'gameMode') || ':party'), this.gMode = _1772312.get('extras', 'gameMode') || ':party', _2610335('#minimap-show-1').click(() => {
					_2610335('#minimap-show-' + S.selector).removeClass('active'), _2610335('#minimap-show-1').addClass('active'), S.selector = 1;
				}), _2610335('#minimap-show-2').click(() => {
					_2610335('#minimap-show-' + S.selector).removeClass('active'), _2610335('#minimap-show-2').addClass('active'), S.selector = 2;
				}), _2610335('#minimap-show-0').click(() => {
					_2610335('#minimap-show-' + S.selector).removeClass('active'), _2610335('#minimap-show-0').addClass('active'), S.selector = 0;
				}), _2610335('#streamMode').click(() => {
					_4325503.toggleStreammode();
				}), _2610335('#spectate-mode-top').click(() => {
					_4325503.spectateModeTop();
				}), _2610335('#spectate-mode-mouse').click(() => {
					_4325503.spectateModeMouse();
				}), _2610335('#spectate-mode-target').click(() => {
					_4325503.spectateModeTarget();
				}), _2610335('#anouncement').click(() => {
					_2610335('#anouncement').fadeOut(250);
				}), _1772312.get('extras', 'openedChangelog') || _2610335('#changelog').addClass('active'), _2610335('#changelog').click(() => {
					_1772312.set('extras', 'openedChangelog', true), _2610335('#changelog').removeClass('active');
				});
			}
		}, {
			'key': 'play',
			'value'() {
				this.close(), Q.spawn();
			}
		}, {
			'key': 'closeSubMenus',
			'value'() {
				_5326466.close(), _4629996.close(), oe.close();
			}
		}, {
			'key': 'toggle',
			'value'() {
				this.isOpened ? this.close() : this.open();
			}
		}, {
			'key': 'close',
			'value'() {
				this.isOpened = false, this.div.fadeOut(250), _2610335('#leaderboard-hud').css('top', '-2px'), _2610335('#teamlist-hud').css('top', '10px'), _2610335('.menu-bar').slideUp(250), _2610335('#targeting-hud').css('top', '0px');
			}
		}, {
			'key': 'open',
			'value'() {
				this.isOpened = true, this.div.fadeIn(250), _2610335('#leaderboard-hud').css('top', '30px'), _2610335('#teamlist-hud').css('top', '45px'), _2610335('.menu-bar').slideDown(250), _2610335('#targeting-hud').css('top', '35px');
			}
		}, {
			'key': 'toggleStreammode',
			'value'() {
				this.streammode ? (_2610335('#nick, #nick2, #tag, #skin, #skin2, #party-token').removeClass('input-hidden'), _2610335('#streamMode').html('<i class=\"fas fa-eye\"></i>'), this.streammode = false, _1772312.set('extras', 'streammode', this.streammode)) : (_2610335('#nick, #nick2, #tag, #skin, #skin2, #party-token').addClass('input-hidden'), _2610335('#streamMode').html('<i class=\"fas fa-eye-slash\"></i>'), this.streammode = true, _1772312.set('extras', 'streammode', this.streammode));
			}
		}, {
			'key': 'spectateModeTop',
			'value'() {
				!A.isAlive && L.isSpectating && L.freeSpectate && (K.topViewport(), Q.freeSpectate());
			}
		}, {
			'key': 'spectateModeMouse',
			'value'() {
				A.isAlive || !L.isSpectating || L.freeSpectate && !W.isTurnedOn || (W.isTurnedOn ? (W.target1.turnedOn = false, W.target2.turnedOn = false, K.mouseViewport()) : (Q.freeSpectate(), K.mouseViewport()));
			}
		}, {
			'key': 'spectateModeTarget',
			'value'() {
				'on' === _4629996.targeting ? m.command('HSLO', _4428048.current.notif.targeting_on) : m.command('HSLO', _4428048.current.notif.targeting_off);
			}
		}, {
			'key': 'versionCheck',
			'value'() {
				'5.3.2 (17)' !== localStorage.getItem('version') ? (console.log('Your extension is in older version.'), this.showChangelog(), localStorage.setItem('version', '5.3.2 (17)'), _1772312.set('extras', 'version', '5.3.2 (17)')) : console.log('Great! Your extension is updated!.');
			}
		}, {
			'key': 'showChangelog',
			'value'() {
				_2610335('#anouncement').html(_16350690['lang_' + _4428048.selected].updateHud.title + '<br>' + _16350690['lang_' + _4428048.selected].updateHud.desc + (!localStorage.getItem('version').includes('5.3.2') ? '<br>' + _16350690['lang_' + _4428048.selected].updateHud.versionChange : '') + '<hr>' + _16350690['lang_' + _4428048.selected].updateHud.updateContent + '<br><hr><div align=\"right\">2019-11-26</div>'), _2610335('#anouncement').fadeIn(250);
			}
		}]), _4325503;
    })(),
    
    
    
    I = new((() => {
		function _5246992() {
			plzsuckmydick(this, _5246992);
		}
		return plzdsmd(_5246992, [{
			'key': 'init',
			'value'() {
				this.cellsTab1 = new Map(), this.cellsTab2 = new Map(), this.cellsTab3 = new Map(), this.cellsIDTab1 = new Set(), this.cellsIDTab2 = new Set(), this.cellsIDTab3 = new Set(), this.myCellsTab1 = new Map(), this.myCellsTab2 = new Map(), this.myCellsTab3 = new Map(), this.bound = {
					'left': 0,
					'top': 0,
					'right': 0,
					'bottom': 0
				}, this.bound2 = {
					'left': 0,
					'top': 0,
					'right': 0,
					'bottom': 0
				}, this.bound3 = {
					'left': 0,
					'top': 0,
					'right': 0,
					'bottom': 0
				}, this.sortedCells = [], this.food = [], ie.init(), ve.init();
			}
		}, {
			'key': 'update',
			'value'() {
				const _5579078 = 'on' === _4629996.opponentRings && A.isAlive,
					_1576793 = 'on' === _4629996.virusRange && A.isAlive;
				this.updateBound(), this.food = [], this.sortedCells = [], ve.reset(), ie.reset(), this.cellsTab1.forEach((_5246992, _5044506) => {
					if (this.updateStaticBound(_5246992, 1), _5246992.fadeStartTime) {
						if (1 < (le.time - _5246992.fadeStartTime) / _4629996.CellAnimation) return void this.cellsTab1.delete(_5044506);
					}
					window.teste1 = _5246992, this.isInView(_5246992) && _5246992.worldID !== A.worldID2 && (_5246992.isFood ? this.food.push(_5246992) : (this.sortedCells.push(_5246992), _5579078 && !_5246992.isVirus && ie.segregator(_5246992, 1), _1576793 && _5246992.isVirus && ve.add(_5246992, 1)));
				}), this.cellsTab2.forEach((_5246992, _5439869) => {
					if (this.updateStaticBound(_5246992, 2), _5246992.fadeStartTime) {
						if (1 < (le.time - _5246992.fadeStartTime) / _4629996.CellAnimation) return void this.cellsTab2.delete(_5439869);
					}
					window.teste2 = _5246992, this.isInView(_5246992) && (_5246992.isMine || !this.isInView2(_5246992)) && (_5246992.isFood ? this.food.push(_5246992) : (this.sortedCells.push(_5246992), _5579078 && !_5246992.isVirus && ie.segregator(_5246992, 2), _1576793 && _5246992.isVirus && ve.add(_5246992, 2)));
				}), this.cellsTab3.forEach((_5246992, _2586679) => {
					if (this.updateStaticBound(_5246992, 3), _5246992.fadeStartTime) {
						if (1 < (le.time - _5246992.fadeStartTime) / _4629996.CellAnimation) return void this.cellsTab3.delete(_2586679);
					}
					window.teste3 = _5246992, this.isInView(_5246992) && (_5246992.isMine || !this.isInView3(_5246992, 1) && !this.isInView3(_5246992, 2)) && _5246992.worldID !== A.worldID2 && _4629996.topZoom === 'on' && (_5246992.isFood ? this.food.push(_5246992) : (this.sortedCells.push(_5246992), _5579078 && !_5246992.isVirus && ie.segregator(_5246992, 3), _1576793 && _5246992.isVirus && ve.add(_5246992, 3)));
				}), this.sortedCells.sort((_5246992, _5435265) => {
					const _5515601 = _5246992.animRadius,
						_4312851 = _5435265.animRadius;
					return _5515601 === _4312851 ? _5435265.id - _5246992.id : _5515601 - _4312851;
				});
			}
		}, {
			'key': 'getCell',
			'value'(_5246992, _2937260) {
				return (1 === _2937260 ? this.cellsTab1 : 2 === _2937260 ? this.cellsTab2 : 3 === _2937260 && this.cellsTab3).get(_5246992) || this.addCell(_5246992, _2937260);
			}
		}, {
			'key': 'addCell',
			'value'(_5246992, _3428558) {
				const _3173332 = 1 === _3428558 ? this.cellsTab1 : 2 === _3428558 ? this.cellsTab2 : 3 === _3428558 && this.cellsTab3,
					_2539892 = new M(_5246992, _3428558);
				return _3173332.set(_5246992, _2539892), this.myCellCheck(_5246992, _2539892, _3428558), _2539892;
			}
		}, {
			'key': 'myCellCheck',
			'value'(_5246992, _2881674, _3742047) {
				const _4837381 = 1 === _3742047 ? this.cellsIDTab1 : 2 === _3742047 ? this.cellsIDTab2 : 3 === _3742047 && this.cellsIDTab3,
					_16350690 = 1 === _3742047 ? this.myCellsTab1 : 2 === _3742047 ? this.myCellsTab2 : 3 === _3742047 && this.myCellsTab3;
				_4837381.has(_5246992) && (_16350690.set(_5246992, _2881674), _4837381.delete(_5246992), _2881674.isMine = true, _2881674.nick = 1 === _3742047 ? A.nick : 2 === _3742047 ? A.nick2 : '');
			}
		}, {
			'key': 'eatCell',
			'value'(_5246992, _1747417, _7526961) {
				const _3014390 = 1 === _7526961 ? this.cellsTab1 : 2 === _7526961 ? this.cellsTab2 : 3 === _7526961 && this.cellsTab3,
					_16350690 = 1 === _7526961 ? this.myCellsTab1 : 2 === _7526961 ? this.myCellsTab2 : 3 === _7526961 && this.myCellsTab3,
					_3021170 = _3014390.get(_1747417),
					_4123434 = _3014390.get(_5246992);
				_3021170 && _4123434 && (_3021170.staticX = _4123434.staticX, _3021170.staticY = _4123434.staticY, _3021170.radius = _3021170.animRadius, _3021170.lastUpdateTime = le.time, _3021170.fadeStartTime = le.time, _3021170.isMine && _16350690.delete(_1747417), _3014390.delete(_1747417), _3021170.isFood || _3014390.set(_1747417 + ':removed', _3021170));
			}
		}, {
			'key': 'removeCell',
			'value'(_5246992, _5904439) {
				const _6245666 = 1 === _5904439 ? this.cellsTab1 : 2 === _5904439 ? this.cellsTab2 : 3 === _5904439 && this.cellsTab3,
					_5546164 = 1 === _5904439 ? this.myCellsTab1 : 2 === _5904439 ? this.myCellsTab2 : 3 === _5904439 && this.myCellsTab3,
					_16350690 = _6245666.get(_5246992);
				_16350690 && (_16350690.isMine && _5546164.delete(_5246992), _6245666.delete(_5246992), _16350690.isFood || 'on' !== _4629996.eatAnimation || (_16350690.fadeStartTime = le.time, _6245666.set(_5246992 + ':removed', _16350690)));
			}
		}, {
			'key': 'isInView',
			'value'(_5246992) {
				const _4379230 = 2 === _5246992.tab ? G.getOffset2 : 3 === _5246992.tab ? G.getOffset3 : {
						'x': 0,
						'y': 0
					},
					_1595379 = L.viewBounds;
				return !(_5246992.x - _4379230.x + _5246992.animRadius < _1595379.left || _5246992.x - _4379230.x - _5246992.animRadius > _1595379.right || _5246992.y - _4379230.y + _5246992.animRadius < _1595379.top || _5246992.y - _4379230.y - _5246992.animRadius > _1595379.bottom);
			}
		}, {
			'key': 'updateBound',
			'value'() {
				I.cellsTab1.forEach(_5246992 => {
					this.bound.left = _5246992.staticX, this.bound.right = _5246992.staticX, this.bound.top = _5246992.staticY, this.bound.bottom = _5246992.staticY;
				}), I.cellsTab2.forEach(_5246992 => {
					this.bound2.left = _5246992.staticX - G.getOffset2.x, this.bound2.right = _5246992.staticX - G.getOffset2.x, this.bound2.top = _5246992.staticY - G.getOffset2.y, this.bound2.bottom = _5246992.staticY - G.getOffset2.y;
				}), I.cellsTab3.forEach(_5246992 => {
					this.bound3.left = _5246992.staticX - G.getOffset3.x, this.bound3.right = _5246992.staticX - G.getOffset3.x, this.bound3.top = _5246992.staticY - G.getOffset3.y, this.bound3.bottom = _5246992.staticY - G.getOffset3.y;
				});
			}
		}, {
			'key': 'updateStaticBound',
			'value'(_5246992, _4383652) {
				const _1772312 = _4383652 === 2 ? G.getOffset2 : _4383652 === 3 ? G.getOffset3 : {
					'x': 0,
					'y': 0
				};
				if (_4383652 === 1) {
					this.bound.left > _5246992.staticX - _1772312.x + _5246992.radius && (this.bound.left = _5246992.staticX - _1772312.x + _5246992.radius), this.bound.right < _5246992.staticX - _1772312.x - _5246992.radius && (this.bound.right = _5246992.staticX - _1772312.x - _5246992.radius), this.bound.top > _5246992.staticY - _1772312.y + _5246992.radius && (this.bound.top = _5246992.staticY - _1772312.y + _5246992.radius), this.bound.bottom < _5246992.staticY - _1772312.y - _5246992.radius && (this.bound.bottom = _5246992.staticY - _1772312.y - _5246992.radius);
				} else if (_4383652 === 2) {
					this.bound2.left > _5246992.staticX - _1772312.x + _5246992.radius && (this.bound2.left = _5246992.staticX - _1772312.x + _5246992.radius), this.bound2.right < _5246992.staticX - _1772312.x - _5246992.radius && (this.bound2.right = _5246992.staticX - _1772312.x - _5246992.radius), this.bound2.top > _5246992.staticY - _1772312.y + _5246992.radius && (this.bound2.top = _5246992.staticY - _1772312.y + _5246992.radius), this.bound2.bottom < _5246992.staticY - _1772312.y - _5246992.radius && (this.bound2.bottom = _5246992.staticY - _1772312.y - _5246992.radius);
				} else if (_4383652 === 3) {
					this.bound3.left > _5246992.staticX - _1772312.x + _5246992.radius && (this.bound3.left = _5246992.staticX - _1772312.x + _5246992.radius), this.bound3.right < _5246992.staticX - _1772312.x - _5246992.radius && (this.bound3.right = _5246992.staticX - _1772312.x - _5246992.radius), this.bound3.top > _5246992.staticY - _1772312.y + _5246992.radius && (this.bound3.top = _5246992.staticY - _1772312.y + _5246992.radius), this.bound3.bottom < _5246992.staticY - _1772312.y - _5246992.radius && (this.bound3.bottom = _5246992.staticY - _1772312.y - _5246992.radius);
				}
			}
		}, {
			'key': 'isInView2',
			'value'(_5246992) {
				const _1201755 = G.getOffset2,
					_5806257 = _5246992.staticX - _1201755.x,
					_1801904 = _5246992.staticY - _1201755.y,
					_16350690 = this.bound;
				return !(_5806257 + _5246992.radius < _16350690.left || _5806257 - _5246992.radius > _16350690.right || _1801904 + _5246992.radius < _16350690.top || _1801904 - _5246992.radius > _16350690.bottom);
			}
		}, {
			'key': 'isInView3',
			'value'(_5246992, _5622803) {
				const _4780201 = G.getOffset3,
					_2573689 = _5246992.staticX - _4780201.x,
					_923678 = _5246992.staticY - _4780201.y,
					_16350690 = _5622803 === 1 ? this.bound : _5622803 === 2 && this.bound2;
				return !(_2573689 + _5246992.radius < _16350690.left || _2573689 - _5246992.radius > _16350690.right || _923678 + _5246992.radius < _16350690.top || _923678 - _5246992.radius > _16350690.bottom);
			}
		}]), _5246992;
    })())(),
    
    
    
    window.classI = I, M = (() => {
		function _13733995(_11732835, _2315953) {
			plzsuckmydick(this, _13733995), this.id = _11732835, this.nick = '', this.skin = '', this.colorObject = new e[('getColorObject')](), this.isMine = false, this.isFood = false, this.isEjected = false, this.isVirus = false, this.isFriend = false, this.account = '', this.tab = _2315953, this.init = false, this.x = 0, this.y = 0, this.animRadius = 0, this.staticX = 0, this.staticY = 0, this.radius = 0, this.animX = 0, this.animY = 0, this._000308 = 0, this._000307 = 0, this.lastUpdateTime = 0, this.fadeStartTime = 0;
		}
		return plzdsmd(_13733995, [{
			'key': 'animate',
			'value'() {
				let _8204076 = (le.time - this.lastUpdateTime) / _4629996.CellAnimation;
				return _8204076 = 0 > _8204076 ? 0 : 1 < _8204076 ? 1 : _8204076, this.x = this.animX + (this.staticX - this.animX) * _8204076, this.y = this.animY + (this.staticY - this.animY) * _8204076, this.animRadius = this._000308 + (this.radius - this._000308) * _8204076, _8204076;
			}
		}, {
			'key': 'mass',
			'get'() {
				return 0 | this.animRadius * this.animRadius / 100;
			}
		}, {
			'key': 'staticMass',
			'get'() {
				return 0 | this.radius * this.radius / 100;
			}
		}, {
			'key': 'worldID',
			'get'() {
				return ':party' === z.gMode ? this.nick + this.colorObject.hex : this.nick;
			}
		}, {
			'key': 'isUnnamed',
			'get'() {
				return 1 > this.nick.length;
			}
		}]), _13733995;
    })(),
    
    
    
    A = (() => {
		function _4127260() {
			plzsuckmydick(this, _4127260);
		}
		return plzdsmd(_4127260, null, [{
			'key': 'init',
			'value'() {
				this._nick = _2610335('#nick').val(), this._nick2 = _2610335('#nick2').val(), this._skin = re.getImgurCode(_2610335('#skin').val()), this._skin2 = re.getImgurCode(_2610335('#skin2').val()), this._tag = _2610335('#tag').val(), this._colorObject = {
					'r': 0,
					'g': 0,
					'b': 0
				}, this.colorHexTab1 = '#000000', this.colorHexTab2 = '#000000', this.isAliveTab1 = false, this.isAliveTab2 = false, this.x = 0, this.y = 0, this.x1 = 0, this.x2 = 0, this.y1 = 0, this.y2 = 0, this.mass1 = 0, this.mass2 = 0, this.speed = 0, this.animSpeed = 0, this.mass = 0, this.biggestPieceMass = 0, this.score = 0, this.movementPaused = false, this.deathLocation = {
					'x': 100,
					'y': 100
				}, this.controlledTab = 1;
			}
		}, {
			'key': 'update',
			'value'() {
				0 < this.pieceCount ? this.playing() : this.dead(), 0 < this.pieceCount2 ? this.playing2() : this.dead2(), this.updateData();
			}
		}, {
			'key': 'playing',
			'value'() {
				if (!this.isAliveTab1) {
					this.isAliveTab1 = true, _e.spawn(1), _e.playerData(1), this.isAliveTab2 || this.sendAliveData(1);
					for (const _4127260 of I.myCellsTab1.values()) {
						this.colorObject = _4127260.colorObject, this.colorHexTab1 = _4127260.colorObject.hex;
						break;
					}
					setTimeout(() => {
						re.commanderPoints.add({
							'x': A.x1,
							'y': A.y1,
							'time': Date.now()
						});
					}, 100);
				}
			}
		}, {
			'key': 'playing2',
			'value'() {
				if (!this.isAliveTab2) {
					this.isAliveTab2 = true, _e.spawn(2), _e.playerData(2), this.isAliveTab1 || this.sendAliveData(1);
					for (const _4127260 of I.myCellsTab2.values()) {
						this.colorHexTab2 = _4127260.colorObject.hex;
						break;
					}
					setTimeout(() => {
						re.commanderPoints.add({
							'x': A.x2,
							'y': A.y2,
							'time': Date.now()
						});
					}, 100);
				}
			}
		}, {
			'key': 'updateData',
			'value'() {
				if (this.isAlive) {
					let _4127260 = 0,
						_4738368 = 0,
						_5783189 = 0,
						_5513006 = 0,
						_14235728 = 0;
					if (this.mass = 0, this.mass1 = 0, this.biggestPieceMass = 0, this.isAliveTab1)
						for (const _2546431 of I.myCellsTab1.values()) _2546431.animate(), _4127260 += _2546431.x / this.pieceCount, _5783189 += _2546431.y / this.pieceCount, _14235728 += _2546431.animRadius, this.mass1 += _2546431.staticMass, this.mass += _2546431.staticMass, this.biggestPieceMass < _2546431.staticMass && (this.biggestPieceMass = _2546431.staticMass);
					if (this.mass2 = 0, this.isAliveTab2) {
						const _1249945 = G.getOffset2;
						for (const _16350690 of I.myCellsTab2.values()) _16350690.animate(), _4738368 += (_16350690.x - _1249945.x) / this.pieceCount2, _5513006 += (_16350690.y - _1249945.y) / this.pieceCount2, _14235728 += _16350690.animRadius, this.mass2 += _16350690.staticMass, this.mass += _16350690.staticMass, this.biggestPieceMass < _16350690.staticMass && (this.biggestPieceMass = _16350690.staticMass);
					}
					if (!this.movementPaused) {
						const _14235728 = this.x - _4127260,
							_3278751 = this.y - _5783189,
							_16350690 = Math.sqrt(_14235728 * _14235728 + _3278751 * _3278751);
						this.speed += _16350690, this.x = this.isAliveTab1 && this.isAliveTab2 ? (_4127260 + _4738368) / 2 : this.isAliveTab1 ? _4127260 : this.isAliveTab2 && _4738368, this.x1 = _4127260, this.x2 = _4738368, this.y = this.isAliveTab1 && this.isAliveTab2 ? (_5783189 + _5513006) / 2 : this.isAliveTab1 ? _5783189 : this.isAliveTab2 && _5513006, this.y1 = _5783189, this.y2 = _5513006;
					}
					this.score < this.mass && (this.score = this.mass);
					const _1609444 = Math.pow(Math.min(64 / _14235728, 1), 0.4),
						_4580147 = Math.max(_16350690.innerWidth / 1920, _16350690.innerHeight / 1080);
					L.autoZoomViewport = _1609444 * _4580147;
				}
			}
		}, {
			'key': 'dead',
			'value'() {
				this.isAliveTab1 && (this.isAliveTab1 = false, _e.death(1), this.isAliveTab2 ? this.controlledTab = 2 : this.reset());
			}
		}, {
			'key': 'dead2',
			'value'() {
				this.isAliveTab2 && (this.isAliveTab2 = false, _e.death(2), this.isAliveTab1 ? this.controlledTab = 1 : this.reset());
			}
		}, {
			'key': 'reset',
			'value'() {
				this.score = 0, this.mass = 0, this.mass1 = 0, this.mass2 = 0, this.biggestPieceMass = 0, this.movementPaused = false, this.deathLocation.x = this.x, this.deathLocation.y = this.y, this.controlledTab = 1, this.sendAliveData(0), z.open();
			}
		}, {
			'key': 'sendAliveData',
			'value'(_4127260) {
				_4127260 ? (_e.spawn(1), _e.spawn(2), _e.playerData(1), _e.playerData(2)) : (_e.death(1), _e.death(2));
			}
		}, {
			'key': 'nick',
			'set'(_4127260) {
				this._nick = _4127260, _e.nick();
			},
			'get'() {
				return this._nick.substring(0, 15);
			}
		}, {
			'key': 'nick2',
			'set'(_4127260) {
				this._nick2 = _4127260, _e.nick2();
			},
			'get'() {
				return this._nick2.substring(0, 15);
			}
		}, {
			'key': 'skin',
			'set'(_4127260) {
				const _6173389 = re.getImgurCode(_4127260);
				return _6173389 ? (this._skin = _6173389, void _e.skin()) : void m.alert('HSLO', _4428048.current.notif.invalidSkinUrl);
			},
			'get'() {
				return this._skin;
			}
		}, {
			'key': 'skin2',
			'set'(_4127260) {
				const _5363525 = re.getImgurCode(_4127260);
				return _5363525 ? (this._skin2 = _5363525, void _e.skin2()) : void m.alert('HSLO', _4428048.current.notif.invalidSkinUrl);
			},
			'get'() {
				return this._skin2;
			}
		}, {
			'key': 'tag',
			'set'(_4127260) {
				this._tag = _4127260, se.teammates.clear(), C.reset(), _e.tag(), _e.join(1), _e.join(2), C.update();
			},
			'get'() {
				return this._tag;
			}
		}, {
			'key': 'colorObject',
			'set'(_4127260) {
				this._colorObject.r = _4127260.r, this._colorObject.g = _4127260.g, this._colorObject.b = _4127260.b;
			},
			'get'() {
				return this._colorObject;
			}
		}, {
			'key': 'isAlive',
			'get'() {
				return this.isAliveTab1 || this.isAliveTab2;
			}
		}, {
			'key': 'worldID',
			'get'() {
				return ':party' === z.gMode ? this.nick + this.colorHexTab1 : this.nick;
			}
		}, {
			'key': 'worldID2',
			'get'() {
				return ':party' === z.gMode ? this.nick2 + this.colorHexTab2 : this.nick2;
			}
		}, {
			'key': 'location',
			'get'() {
				return G.getLocation(this.x, this.y);
			}
		}, {
			'key': 'pieceCount',
			'get': () => I.myCellsTab1.size
		}, {
			'key': 'pieceCount2',
			'get': () => I.myCellsTab2.size
		}, {
			'key': 'n16',
			'get'() {
				return this.pieceCount + this.pieceCount2;
			}
		}, {
			'key': 'controllingTab',
			'set'(_4127260) {
				this.controlledTab = _4127260;
			},
			'get'() {
				return this.controlledTab;
			}
		}]), _4127260;
    })(),
    
    
    
    window.classA = A, O = (() => {
		function _3603880(_4930142) {
			plzsuckmydick(this, _3603880), this.id = _4930142, this.isNew = 2, this.x = 90, this.y = 90, this.isAlive = 0, this.mass = 0, this.nick = '', this.skin = '', this.colorHex = '#000', this.isRGB = false, this.animX = 90, this.animY = 90, this.timeStamp = le.time, this.lastUpdateAt = le.time, this.team = 1;
		}
		return plzdsmd(_3603880, [{
			'key': 'animate',
			'value'() {
				let _3603880 = (le.time - this.timeStamp) / 1000;
				_3603880 = 1 < _3603880 ? 1 : 0 > _3603880 ? 0 : _3603880, this.animX += (this.x - this.animX) * _3603880, this.animY += (this.y - this.animY) * _3603880, this.timeStamp = le.time;
			}
		}, {
			'key': 'worldID',
			'get'() {
				return ':party' === z.gMode ? this.nick + this.colorHex : this.nick;
			}
		}, {
			'key': 'location',
			'get'() {
				return G.getLocation(this.x + G.offset.x, this.y + G.offset.y);
			}
		}, {
			'key': 'mapX',
			'get'() {
				return (this.animX + 7071) / 14142 * S.size;
			}
		}, {
			'key': 'mapY',
			'get'() {
				return (this.animY + 7071) / 14142 * S.size;
			}
		}]), _3603880;
    })(),
    
    
    
    R = new((() => {
		function _2920938() {
			plzsuckmydick(this, _2920938), this.indicator = this.cacheIndicator();
		}
		return plzdsmd(_2920938, [{
			'key': 'cacheIndicator',
			'value'() {
				const _2920938 = _5821427.createElement('canvas'),
					_5349459 = _2920938.getContext('2d'),
					_3188647 = new Image();
				return _2920938.width = 150, _2920938.height = 150, _5349459.textAlign = 'center', _5349459.textBaseline = 'middle', _5349459.font = '600 150px FontAwesome', _5349459.fillStyle = '#ffffff', _5349459.fillText('â–¼', 75, 75), _3188647.crossOrigin = 'anonymous', _3188647.src = _2920938.toDataURL(), _3188647;
			}
		}]), _2920938;
    })())(),
    
    
    
    G = new((() => {
		function _5295042() {
			plzsuckmydick(this, _5295042), this.left = -7071, this.top = -7071, this.right = 7071, this.bottom = 7071, this.edge = 14142, this.offset = {
				'x': 0,
				'y': 0
			}, this.offset2 = {
				'x': 0,
				'y': 0
			}, this.offset3 = {
				'x': 0,
				'y': 0
			}, this.Tab2LT = {
				'left': -7071,
				'top': -7071
			}, this.Tab3LT = {
				'left': -7071,
				'top': -7071,
				'right': 7071,
				'bottom': 7071
			}, this.center = {
				'x': 0,
				'y': 0
			}, this.center2 = {
				'x': 0,
				'y': 0
			}, this.center3 = {
				'x': 0,
				'y': 0
			}, this.focusedAtCenter = false;
		}
		return plzdsmd(_5295042, [{
			'key': 'reset',
			'value'() {
				this.focusedAtCenter = false;
			}
		}, {
			'key': 'update',
			'value'(_5295042, _16023239, _2166822, _3327805) {
				14141 > _2166822 - _5295042 || 14141 > _3327805 - _16023239 || (this.left = _5295042, this.top = _16023239, this.right = _2166822, this.bottom = _3327805, this.offset.x = 7071 + _5295042, this.offset.y = 7071 + _16023239, this.center.x = _2166822 + _5295042 >> 1, this.center.y = _3327805 + _16023239 >> 1, !this.focusedAtCenter && (L.x = this.center.x, L.y = this.center.y, this.focusedAtCenter = true));
			}
		}, {
			'key': 'updateOffset2',
			'value'(_5295042, _1196477, _16178831, _5829153) {
				14141 > _16178831 - _5295042 || 14141 > _5829153 - _1196477 || (this.offset2.x = 7071 + _5295042, this.offset2.y = 7071 + _1196477, this.Tab2LT.left = _5295042, this.Tab2LT.top = _1196477);
			}
		}, {
			'key': 'updateOffset3',
			'value'(_5295042, _6132356, _3866862, _6024784) {
				14141 > _3866862 - _5295042 || 14141 > _6024784 - _6132356 || (this.offset3.x = 7071 + _5295042, this.offset3.y = 7071 + _6132356, this.Tab3LT.left = _5295042, this.Tab3LT.top = _6132356, this.Tab3LT.right = _3866862, this.Tab3LT.bottom = _6024784);
			}
		}, {
			'key': 'getLocation',
			'value'(_5295042, _10579489) {
				let _1981790 = 0 | (_5295042 - this.left) / 2828,
					_5589798 = 0 | (_10579489 - this.top) / 2828;
				return _1981790 = 0 > _1981790 ? 0 : 4 < _1981790 ? 4 : _1981790, _5589798 = 0 > _5589798 ? 0 : 4 < _5589798 ? 4 : _5589798, String.fromCharCode(65 + _5589798) + (_1981790 + 1);
			}
		}, {
			'key': 'getOffset2',
			'get'() {
				return this.center2.x = this.offset2.x - this.offset.x, this.center2.y = this.offset2.y - this.offset.y, this.center2;
			}
		}, {
			'key': 'getOffset3',
			'get'() {
				return this.center3.x = this.offset3.x - this.offset.x, this.center3.y = this.offset3.y - this.offset.y, this.center3;
			}
		}]), _5295042;
    })())(),
    
    
    
    L = new((() => {
		function _3417938() {
			plzsuckmydick(this, _3417938);
		}
		return plzdsmd(_3417938, [{
			'key': 'init',
			'value'() {
				this.x = 0, this.y = 0, this.iw = 1920, this.ih = 969, this.targetViewport = 1, this.autoZoomViewport = 1, this.Tab3Viewport = 0.2, this.viewport = 1, this.viewBounds = {
					'left': -960,
					'right': 960,
					'top': -540,
					'bottom': 540
				}, this.Tab3ViewBounds = {
					'left': -960,
					'right': 960,
					'top': -540,
					'bottom': 540
				}, this.spectatePoints = {
					'x': 0,
					'y': 0
				}, this.Tab3SpectatePoints = {
					'x': 0,
					'y': 0
				}, this._isSpectating = false, this._freeSpectate = false, W.init();
			}
		}, {
			'key': 'update',
			'value'() {
				this.isSpectating && W.update(), this.move(), this.updateView();
			}
		}, {
			'key': 'move',
			'value'() {
				A.isAlive ? (this.x += (A.x - this.x) / _4629996.cameraSpeed, this.y += (A.y - this.y) / _4629996.cameraSpeed) : this.isSpectating && (this.x = (29 * this.x + this.spectatePoints.x) / 30, this.y = (29 * this.y + this.spectatePoints.y) / 30);
			}
		}, {
			'key': 'updateView',
			'value'() {
				let _3417938 = this.targetViewport;
				'on' === _4629996.autoZoom && (_3417938 *= this.autoZoomViewport), this.viewport += (_3417938 - this.viewport) / 8;
				const _4728945 = re.canvas.width / 2 / this.viewport,
					_2424152 = re.canvas.height / 2 / this.viewport;
				const _1327288 = this.iw / 2 / this.Tab3Viewport,
					_5250531 = this.ih / 2 / this.Tab3Viewport;
				this.viewBounds.left = Math.max(-_4728945 + this.x, G.left), this.viewBounds.right = Math.min(_4728945 + this.x, G.right), this.viewBounds.top = Math.max(-_2424152 + this.y, G.top), this.viewBounds.bottom = Math.min(_2424152 + this.y, G.bottom);
				this.Tab3ViewBounds.left = Math.max(-_1327288 + ghostCells[0].x, G.Tab3LT.left), this.Tab3ViewBounds.right = Math.min(_1327288 + ghostCells[0].x, G.Tab3LT.right), this.Tab3ViewBounds.top = Math.max(-_5250531 + ghostCells[0].y, G.Tab3LT.top), this.Tab3ViewBounds.bottom = Math.min(_5250531 + ghostCells[0].y, G.Tab3LT.bottom);
			}
		}, {
			'key': 'isSpectating',
			'get'() {
				return this._isSpectating;
			},
			'set'(_3417938) {
				this._isSpectating = _3417938, _3417938 ? K.show() : K.hide();
			}
		}, {
			'key': 'freeSpectate',
			'get'() {
				return this._freeSpectate;
			},
			'set'(_3417938) {
				this._freeSpectate = _3417938, _3417938 ? K.mouseViewport() : K.topViewport();
			}
		}]), _3417938;
    })())(),
    
    
    
    P = new((() => {
		function _4421815() {
			plzsuckmydick(this, _4421815), this.nickCaches = new Map(), this.massCaches = new Map(), this.maxCacheLife = 1000, this.massUpdateInterval = _4629996.massUpdateInterval || 500, this.quality = 0.8, this.nickShadowCtx = this.newShadowContext(), this.massShadowCtx = this.newShadowContext(), this.canvasPool = [];
		}
		return plzdsmd(_4421815, [{
			'key': 'setMassUpdateInterval',
			'value'() {
				this.massUpdateInterval = _4629996.massUpdateInterval || 500;
			}
		}, {
			'key': 'nick',
			'value'(_4421815) {
				if (_4421815.isUnnamed) return false;
				const _3600459 = _4421815.animRadius * L.viewport * (oe.cellNickSize / 100) * 0.3;
				if (10 > _3600459 && 'on' === _4629996.autoHideText) return false;
				const _4882700 = this.nickCaches.get(_4421815.nick) || this.newNickCache(_4421815.nick);
				_4882700.lastUsedAt = le.time;
				const _4518494 = 0 | Math.min(_3600459 / 50, 7),
					_16350690 = _4882700.level[_4518494];
				if (_16350690) return _16350690;
				const _2032799 = this.getNewCanvas(),
					_3672979 = _2032799.getContext('2d'),
					_2610335 = 50 * (_4518494 + 1) * this.quality;
				return _2032799.height = 0 | _2610335 + 6, _2032799.width = 0 | this.getNickWidth(_4421815.nick, _2610335) + 6, _3672979.font = '700 ' + (0 | _2610335) + 'px ' + oe.nickFont, _3672979.textBaseline = 'middle', 'normal' === _4629996.nickShadow ? (_3672979.strokeStyle = oe.nickStrokeColor, _3672979.lineWidth = 6, _3672979.strokeText(_4421815.nick, 3, _2032799.height >> 1)) : 'performance' === _4629996.nickShadow && (_3672979.fillStyle = oe.nickStrokeColor, _3672979.globalAlpha = 0.75, _3672979.fillRect(0, 0, _2032799.width, _2032799.height), _3672979.globalAlpha = 1), _3672979.fillStyle = oe.nickColor, _3672979.fillText(_4421815.nick, 3, _2032799.height >> 1), _4882700.level[_4518494] = _2032799, _2032799;
			}
		}, {
			'key': 'newNickCache',
			'value'(_4421815) {
				const _3651497 = new B();
				return this.nickCaches.set(_4421815, _3651497), _3651497;
			}
		}, {
			'key': 'getNickWidth',
			'value'(_4421815, _2595051) {
				return this.nickShadowCtx.measureText(_4421815).width * _2595051 / 25;
			}
		}, {
			'key': 'setNickCtxFont',
			'value'() {
				this.nickCaches.clear(), this.nickShadowCtx.font = '700 25px ' + oe.nickFont;
			}
		}, {
			'key': 'mass',
			'value'(_4421815) {
				const _1072654 = _4421815.animRadius * L.viewport * (oe.cellMassSize / 100) * 0.3;
				if (!_4421815.isVirus && 10 > _1072654 && 'on' === _4629996.autoHideText) return false;
				const _4823735 = this.massCaches.get(_4421815.id) || this.newMassCache(_4421815.id);
				_4823735.lastUsedAt = le.time;
				const _3070973 = 'shortened' === _4629996.cellMass && 999 < _4421815.staticMass ? (0 | _4421815.staticMass / 100) / 10 + 'k' : _4421815.staticMass;
				_4823735.fontSize = _1072654;
				const _16350690 = le.time - _4823735.lastUpdateAt;
				if ((_4823735.needsRedraw || _16350690 > this.massUpdateInterval) && (_4823735.mass = _3070973), _4823735.canvas || (_4823735.canvas = this.getNewCanvas(), _4823735.ctx = _4823735.canvas.getContext('2d')), _4823735.needsRedraw) {
					_4823735.needsRedraw = false;
					const _4421815 = _4823735.canvas,
						_1072654 = _4823735.ctx;
					_4421815.height = 0 | _4823735.fontSize + 6, _4421815.width = 0 | this.getMassWidth(_4823735.mass, _4823735.fontSize) + 6, _1072654.font = '700 ' + (0 | _4823735.fontSize) + 'px ' + oe.massFont, _1072654.textBaseline = 'middle', 'normal' === _4629996.massShadow ? (_1072654.strokeStyle = oe.massStrokeColor, _1072654.lineWidth = 6, _1072654.strokeText(_4823735.mass, 3, _4421815.height >> 1)) : 'performance' === _4629996.massShadow && (_1072654.fillStyle = oe.massStrokeColor, _1072654.globalAlpha = 0.75, _1072654.fillRect(0, 0, _4421815.width, _4421815.height), _1072654.globalAlpha = 1), _1072654.fillStyle = oe.massColor, _1072654.fillText(_4823735.mass, 3, _4421815.height >> 1), _4823735.lastUpdateAt = le.time;
				}
				return _4823735.canvas;
			}
		}, {
			'key': 'newMassCache',
			'value'(_4421815) {
				const _3953903 = new E();
				return this.massCaches.set(_4421815, _3953903), _3953903;
			}
		}, {
			'key': 'getMassWidth',
			'value'(_4421815, _1856848) {
				return this.massShadowCtx.measureText(_4421815).width * _1856848 / 25;
			}
		}, {
			'key': 'setMassCtxFont',
			'value'() {
				this.massCaches.clear(), this.massShadowCtx.font = '700 25px ' + oe.massFont;
			}
		}, {
			'key': 'getScreenRadius',
			'value': _4421815 => _4421815 * L.viewport
		}, {
			'key': 'isSmall',
			'value'(_4421815) {
				return 'on' === _4629996.autoHideText && 20 > this.getScreenRadius(_4421815.animRadius);
			}
		}, {
			'key': 'getNewCanvas',
			'value'() {
				return this.canvasPool.shift() || _5821427.createElement('canvas');
			}
		}, {
			'key': 'newShadowContext',
			'value'() {
				const _4421815 = _5821427.createElement('canvas').getContext('2d');
				return _4421815.font = '700 25px ubuntu', _4421815;
			}
		}, {
			'key': 'cleaner',
			'value'() {
				this.nickCaches.forEach((_4421815, _5494248) => {
					if (le.time - _4421815.lastUsedAt > this.maxCacheLife) {
						this.nickCaches.delete(_5494248);
						for (var _2371802, _2672574 = _4421815.level, _16350690 = 0; _16350690 < _2672574.length; _16350690++)(_2371802 = _2672574[_16350690]) && this.resetCanvas(_2371802);
					}
				}), this.massCaches.forEach((_4421815, _3116172) => {
					if (le.time - _4421815.lastUsedAt > this.maxCacheLife) {
						if (this.massCaches.delete(_3116172), 50 <= this.canvasPool.length) return;
						var _15386442 = _4421815.canvas;
						this.resetCanvas(_15386442);
					}
				});
			}
		}, {
			'key': 'resetCanvas',
			'value'(_4421815) {
				!_4421815 || 75 <= this.canvasPool.length || (_4421815.width = 0, this.canvasPool.push(_4421815));
			}
		}]), _4421815;
    })())(),
    
    
    
    E = (() => {
		function _11077512() {
			plzsuckmydick(this, _11077512), this.lastUsedAt = le.time, this.lastUpdateAt = le.time, this.canvas = null, this.ctx = null, this._mass = 0, this._fontSize = 5, this.needsRedraw = true;
		}
		return plzdsmd(_11077512, [{
			'key': 'mass',
			'set'(_11077512) {
				this._mass = _11077512, this.needsRedraw = true;
			},
			'get'() {
				return this._mass;
			}
		}, {
			'key': 'fontSize',
			'set'(_11077512) {
				5 > _11077512 || (0 | _11077512) == (0 | this._fontSize) || this._fontSize > _11077512 && 0.8 < _11077512 / this._fontSize || _11077512 > this._fontSize && 0.8 < this._fontSize / _11077512 || (this._fontSize = _11077512, this.needsRedraw = true);
			},
			'get'() {
				return this._fontSize;
			}
		}]), _11077512;
    })(),
    
    
    
    B = function e() {
		plzsuckmydick(this, e), this.lastUsedAt = le.time, this.level = [null, null, null, null, null, null, null, null];
	}, H = new((() => {
		function _2315563() {
			plzsuckmydick(this, _2315563);
		}
		return plzdsmd(_2315563, [{
			'key': 'init',
			'value'() {
				this.cache();
			}
		}, {
			'key': 'render',
			'value'() {
				'off' === _4629996.food || ('monoColored' === _4629996.food ? this.monoColored() : 'rainbow' === _4629996.food && this.rainbow());
			}
		}, {
			'key': 'cache',
			'value'() {
				this.settings = {
					'radius': 10 + oe.foodSize,
					'isGlowOn': 'off' !== _4629996.foodGlow,
					'strength': 'off' !== _4629996.foodGlow && oe.foodGlowStrength ? oe.foodGlowStrength : 1
				};
				this.cacheCanvas = document.createElement('canvas');
				this.cacheCtx = this.cacheCanvas.getContext('2d');
				this.cacheCanvas.width = 400;
				this.cacheCanvas.height = 400;
				this.cacheCtx.save();
				this.cacheCtx.beginPath();
				this.cacheCtx.arc(~~(400 - this.settings.radius) / 2, ~~(400 - this.settings.radius) / 2, ~~this.settings.radius, 0, Math.PI * 2, 0);
				this.cacheCtx.closePath();
				this.settings.isGlowOn && (this.cacheCtx.shadowBlur = oe.foodGlowSize, this.cacheCtx.shadowColor = oe.foodGlow);
				this.cacheCtx.fillStyle = oe.foodColor;
				for (let _4622068 = 0; _4622068 < this.settings.strength; _4622068++) {
					this.cacheCtx.fill();
				};
				this.settings.isGlowOn && (this.cacheCtx.shadowBlur = 0);
				this.cacheCtx.restore();
			}
		}, {
			'key': 'monoColored',
			'value'() {
				const _2315563 = re.ctx;
				let _3206289 = I.food.length;
				for (; _3206289--;) {
					const _4089909 = I.food[_3206289],
						_16350690 = 2 === _4089909.tab ? G.getOffset2 : 3 === _4089909.tab ? G.getOffset3 : {
							'x': 0,
							'y': 0
						},
						_2422957 = _4089909.animRadius + oe.foodSize;
					_2315563.drawImage(this.cacheCanvas, ~~(_4089909.x - _16350690.x + _2422957 / 2 - 200), ~~(_4089909.y - _16350690.y + _2422957 / 2 - 200));
				}
			}
		}, {
			'key': 'rainbow',
			'value'() {
				for (let _2315563 = re.ctx, _2424617 = oe.foodSize, _13981775 = I.food.length; _13981775--;) {
					const _2181703 = I.food[_13981775],
						_16350690 = 2 === _2181703.tab ? G.getOffset2 : 3 === _2181703.tab ? G.getOffset3 : {
							'x': 0,
							'y': 0
						},
						_2150224 = _2181703.animRadius + _2424617;
					_2315563.fillStyle = _2181703.colorObject.hex, 2 > _2150224 * L.viewport ? _2315563.fillRect(_2181703.x - _16350690.x - _2150224, _2181703.y - _16350690.y - _2150224, 2 * _2150224, 2 * _2150224) : (_2315563.beginPath(), _2315563.arc(_2181703.x - _16350690.x, _2181703.y - _16350690.y, _2150224, 0, re.pi2, true), _2315563.closePath(), _2315563.fill());
				}
			}
		}]), _2315563;
    })())(),
    
    
    
    ie = new((() => {
		function _5896616() {
			plzsuckmydick(this, _5896616), this.init();
		}
		return plzdsmd(_5896616, [{
			'key': 'init',
			'value'() {
				this.STE = [], this.smaller = [], this.same = [], this.bigger = [], this.biggerSTE = [], this.lineWidth = 10;
			}
		}, {
			'key': 'segregator',
			'value'(_3907475) {
				const _5395709 = _3907475.mass / A.biggestPieceMass,
					_4984507 = 1000 < A.biggestPieceMass ? 0.38 : 0.35;
				_3907475.isMine ? this.same.push(_3907475) : 2.5 < _5395709 ? this.biggerSTE.push(_3907475) : 1.25 < _5395709 ? this.bigger.push(_3907475) : 0.75 < _5395709 ? this.same.push(_3907475) : _5395709 > _4984507 ? this.smaller.push(_3907475) : this.STE.push(_3907475);
			}
		}, {
			'key': 'reset',
			'value'() {
				this.STE = [], this.smaller = [], this.same = [], this.bigger = [], this.biggerSTE = [];
			}
		}, {
			'key': 'render',
			'value'() {
				const _3643066 = _4629996.opponentRings;
				if (!('off' === _3643066 || W.isSpectating)) {
					const _3443209 = re.ctx;
					this.lineWidth = 0 | Math.min(3 / L.viewport, 14), _3443209.lineWidth = this.lineWidth, this.renderGroup(this.STE, '#76FF03'), this.renderGroup(this.smaller, '#2196F3'), this.renderGroup(this.same, '#555555'), this.renderGroup(this.bigger, '#FF9800'), this.renderGroup(this.biggerSTE, '#FD0000');
				}
			}
		}, {
			'key': 'renderGroup',
			'value'(_3028328, _2354113) {
				const _2440407 = re.ctx;
				_2440407.strokeStyle = _2354113, _2440407.beginPath();
				for (let _2001444 = _3028328.length; _2001444--;) {
					const _1646767 = _3028328[_2001444];
					const _16350690 = 2 === _1646767.tab ? G.getOffset2 : 3 === _1646767.tab ? G.getOffset3 : {
						'x': 0,
						'y': 0
					};
					_2440407.moveTo(_1646767.x - _16350690.x + _1646767.animRadius + 15 + (this.lineWidth >> 1), _1646767.y - _16350690.y), _2440407.arc(_1646767.x - _16350690.x, _1646767.y - _16350690.y, _1646767.animRadius + 15 + (this.lineWidth >> 1), 0, re.pi2, true);
				}
				_2440407.closePath(), _2440407.stroke();
			}
		}]), _5896616;
    })())(),
    
    
    
    ve = new((() => {
		function _4311880() {
			plzsuckmydick(this, _4311880), this.init();
		}
		return plzdsmd(_4311880, [{
			'key': 'init',
			'value'() {
				this.viruses = new Set();
			}
		}, {
			'key': 'add',
			'value'(_13704917) {
				this.viruses.add(_13704917);
			}
		}, {
			'key': 'reset',
			'value'() {
				this.viruses.clear();
			}
		}, {
			'key': 'render',
			'value'() {
				if ('on' === _4629996.virusRange) {
					const _1715584 = re.ctx;
					_1715584.globalAlpha = 0.1, _1715584.fillStyle = '#ffffff', this.viruses.forEach(_5253006 => {
						const _16350690 = 2 === _5253006.tab ? G.getOffset2 : 3 === _5253006.tab ? G.getOffset3 : {
							'x': 0,
							'y': 0
						};
						const _4524563 = 0 < _5253006.fadeStartTime ? Math.max(1 - (le.time - _5253006.fadeStartTime) / _4629996.CellAnimation, 0) : 1;
						_1715584.globalAlpha = 0.1 * _4524563, _1715584.beginPath(), _1715584.arc(_5253006.x - _16350690.x, _5253006.y - _16350690.y, _5253006.animRadius + 760, 0, re.pi2, true), _1715584.closePath(), _1715584.fill();
					}), _1715584.globalAlpha = 1;
				}
			}
		}]), _4311880;
    })())(),
    
    
    
    N = new((() => {
		function _3741862() {
			plzsuckmydick(this, _3741862), this.skinMap = new Map(), this.downloadedSkins = new Map(), this.pi2 = 2 * Math.PI;
		}
		return plzdsmd(_3741862, [{
			'key': 'render',
			'value'() {
				this.skinMap.clear(), A.isAlive && (this.skinMap.set(A.worldID, _4629996.hideOwnSkin === 'on' ? '' : this.code2url(A.skin)), this.skinMap.set(A.worldID2, _4629996.hideOwnSkin === 'on' ? '' : this.code2url(A.skin2)));
				for (const _3741862 of se.teammates.values()) _3741862.isAlive && this.skinMap.set(_3741862.worldID, _3741862.skin ? _3741862.skin : 'https://i.imgur.com/O5k0G4p.png');
			}
		}, {
			'key': 'getCustomSkin',
			'value'(_3741862) {
				const _3048313 = this.skinMap.get(_3741862);
				if (!_3048313) return false;
				const _12510068 = this.downloadedSkins.get(_3048313);
				return void 0 === _12510068 ? (this.downloadSkin(_3048313), false) : _12510068;
			}
		}, {
			'key': 'downloadSkin',
			'value'(_3741862) {
				const _1140287 = this;
				this.downloadedSkins.set(_3741862, false);
				const _1434097 = new Image();
				_1434097.crossOrigin = 'anonymous', _1434097.onload = () => {
					const _2458502 = _5821427.createElement('canvas'),
						_16350690 = _2458502.getContext('2d');
					_2458502.width = 512, _2458502.height = 512, _16350690.beginPath(), _16350690.arc(256, 256, 256, 0, _1140287.pi2, true), _16350690.closePath(), _16350690.clip(), _16350690.drawImage(_1434097, 0, 0, 512, 512), _1434097.onload = null, _1434097.src = _2458502.toDataURL(), _1140287.downloadedSkins.set(_3741862, _1434097);
				}, _1434097.src = _3741862;
			}
		}, {
			'key': 'code2url',
			'value': _3741862 => 'https://i.imgur.com/' + _3741862 + '.png'
		}]), _3741862;
    })())(),
    
    
    
    V = new((() => {
		function _2000799() {
			plzsuckmydick(this, _2000799), this.left = 0, this.top = 0, this.sectorEdge = 0, this.edge = 0, this.halfSectorEdge = 0, this.letters = ['A', 'B', 'C', 'D', 'E'], this.visible = new Set();
		}
		return plzdsmd(_2000799, [{
			'key': 'render',
			'value'() {
				const _2000799 = _4629996.bgSectors;
				if ('off' !== _2000799 && 'fantasy' !== _2000799) {
					const _2806943 = re.ctx,
						_5657528 = oe.gridWidth,
						_3650539 = _5657528 >> 1;
					this.edge = G.edge - _5657528, this.left = G.left + _3650539, this.top = G.top + _3650539, this.sectorEdge = 0 | this.edge / 5, this.halfSectorEdge = 0 | this.edge / 10, _2806943.lineWidth = _5657528, _2806943.strokeStyle = oe.gridColor, this.sectors(), 'onlyLines' === _2000799 || (_2806943.textAlign = 'center', _2806943.textBaseline = 'middle', _2806943.fillStyle = oe.gridTextColor, this.updateViewSectors(), 'snowflakes' === _2000799 ? this.snowflakes() : this.normal());
				}
			}
		}, {
			'key': 'sectors',
			'value'() {
				const _2000799 = re.ctx;
				_2000799.beginPath(), _2000799.rect(this.left + this.sectorEdge, this.top, this.sectorEdge, this.edge), _2000799.rect(this.left + 3 * this.sectorEdge, this.top, this.sectorEdge, this.edge), _2000799.rect(this.left, this.top + this.sectorEdge, this.edge, this.sectorEdge), _2000799.rect(this.left, this.top + 3 * this.sectorEdge, this.edge, this.sectorEdge), _2000799.rect(this.left, this.top, this.edge, this.edge), _2000799.closePath(), _2000799.stroke();
			}
		}, {
			'key': 'updateViewSectors',
			'value'() {
				const _2000799 = this.visible;
				_2000799.clear();
				for (let _3019673 = L.viewBounds, _5544443 = 0 | (_3019673.left - 200 - G.left) / this.sectorEdge, _12099062 = 0 | (_3019673.top - 200 - G.top) / this.sectorEdge, _16350690 = 5 - (0 | (G.right - _3019673.right - 200) / this.sectorEdge) - _5544443, _3475071 = 5 - (0 | (G.bottom - _3019673.bottom - 200) / this.sectorEdge) - _12099062, _5579350 = 0; _5579350 < _16350690; _5579350++)
					for (let _3019673 = 0; _3019673 < _3475071; _3019673++) _2000799.add(this.letters[_12099062 + _3019673] + (_5544443 + _5579350 + 1));
			}
		}, {
			'key': 'normal',
			'value'() {
				const _2000799 = re.ctx;
				_2000799.font = '400 ' + oe.gridTextSize + 'px ' + oe.gridTextFont;
				for (let _4877965, _1618352 = 0; 5 > _1618352; _1618352++) {
					_4877965 = this.top + this.halfSectorEdge + _1618352 * this.sectorEdge;
					for (let _2575130, _16350690 = 0; 5 > _16350690; _16350690++)
						if (_2575130 = this.letters[_1618352] + (_16350690 + 1), this.visible.has(_2575130)) {
							const _1618352 = this.left + this.halfSectorEdge + _16350690 * this.sectorEdge;
							_2000799.fillText(_2575130, _1618352, _4877965);
						}
				}
			}
		}, {
			'key': 'snowflakes',
			'value'() {
				const _2000799 = re.ctx;
				_2000799.font = '400 ' + oe.gridTextSize + 'px FontAwesome';
				for (let _5965524, _5057103 = 0; 5 > _5057103; _5057103++) {
					_5965524 = this.top + this.halfSectorEdge + _5057103 * this.sectorEdge;
					for (let _4819163, _16350690 = 0; 5 > _16350690; _16350690++)
						if (_4819163 = this.letters[_5057103] + (_16350690 + 1), this.visible.has(_4819163)) {
							const _5057103 = this.left + this.halfSectorEdge + _16350690 * this.sectorEdge;
							_2000799.fillText('â†', _5057103, _5965524);
						}
				}
			}
		}]), _2000799;
    })())(),
    
    
    
    W = (() => {
		function _4348317() {
			plzsuckmydick(this, _4348317);
		}
		return plzdsmd(_4348317, null, [{
			'key': 'init',
			'value'() {
				this.target1 = {
					'turnedOn': false,
					'nick': '',
					'worldID': '',
					'mass': 0,
					'cellCount': 0,
					'position': {
						'x': 0,
						'y': 0
					},
					'outOfView': false
				}, this.target2 = {
					'turnedOn': false,
					'nick': '',
					'worldID': '',
					'mass': 0,
					'cellCount': 0,
					'position': {
						'x': 0,
						'y': 0
					},
					'outOfView': false
				}, this.center = {
					'x': 0,
					'y': 0
				};
			}
		}, {
			'key': 'update',
			'value'() {
				if (this.target1.turnedOn || this.target2.turnedOn) {
					const _4348317 = this.target1,
						_6104869 = this.target2;
					_4348317.mass = 0, _4348317.position.x = 0, _4348317.position.y = 0, _4348317.cellCount = 0, _6104869.mass = 0, _6104869.position.x = 0, _6104869.position.y = 0, _6104869.cellCount = 0, I.cellsTab1.forEach(_4569263 => {
						_4348317.turnedOn && _4348317.worldID === _4569263.worldID ? (_4348317.position.x += _4569263.x, _4348317.position.y += _4569263.y, _4348317.mass += _4569263.staticMass, _4348317.cellCount++) : _6104869.turnedOn && _6104869.worldID === _4569263.worldID && (_6104869.position.x += _4569263.x, _6104869.position.y += _4569263.y, _6104869.mass += _4569263.staticMass, _6104869.cellCount++);
					}), _4348317.mass |= 0, _6104869.mass |= 0;
					let _4404316 = 0,
						_2258760 = 0,
						_16350690 = 0;
					_4348317.turnedOn && (0 < _4348317.cellCount ? (_4348317.position.x /= _4348317.cellCount, _4348317.position.y /= _4348317.cellCount, _4348317.outOfView = false, _2258760 += _4348317.position.x, _16350690 += _4348317.position.y, _4404316++) : _4348317.outOfView = true), _6104869.turnedOn && (0 < _6104869.cellCount ? (_6104869.position.x /= _6104869.cellCount, _6104869.position.y /= _6104869.cellCount, _6104869.outOfView = false, _2258760 += _6104869.position.x, _16350690 += _6104869.position.y, _4404316++) : _6104869.outOfView = true), 0 < _4404316 && (this.center.x = 0 | _2258760 / _4404316, this.center.y = 0 | _16350690 / _4404316);
				}
			}
		}, {
			'key': 'lockTarget',
			'value'(_4348317, _7753884, _9755088) {
				if (A.isAlive) return;
				L.freeSpectate || d.toggleSpectate();
				let _1071518 = 199996164,
					_16350690 = false;
				if (I.sortedCells.forEach(_9755088 => {
						if (!_9755088.isVirus && !_9755088.isEjected) {
							const _1980722 = this.getDistanceSquare(_4348317, _7753884, _9755088.x, _9755088.y);
							_1980722 < _1071518 && (_1071518 = _1980722, _16350690 = _9755088);
						}
					}), _16350690)
					if (_16350690.isUnnamed) m.alert('HSLO', _4428048.current.notif.target_unnamed);
					else {
						const _4348317 = 1 === _9755088 ? this.target1 : this.target2;
						_4348317.turnedOn = true, _4348317.nick = _16350690.nick, _4348317.worldID = _16350690.worldID, _4348317.outOfView = false, K.targetMode();
					}
			}
		}, {
			'key': 'getDistanceSquare',
			'value'(_4348317, _15499370, _3313798, _4135633) {
				const _16350690 = _3313798 - _4348317,
					_75092 = _4135633 - _15499370;
				return _16350690 * _16350690 + _75092 * _75092;
			}
		}, {
			'key': 'reset',
			'value'() {
				this.isTurnedOn || d.toggleSpectate(), L.freeSpectate ? K.mouseViewport() : K.topViewport(), this.target1.turnedOn = false, this.target2.turnedOn = false;
			}
		}, {
			'key': 'isTurnedOn',
			'get'() {
				return this.target1.turnedOn || this.target2.turnedOn;
			}
		}]), _4348317;
    })(),
    
    
    
    D = (() => {
		function _3994358(_2593005) {
			plzsuckmydick(this, _3994358), this.dataView = _2593005, this.index = 0, this.maxIndex = _2593005.byteLength;
		}
		return plzdsmd(_3994358, [{
			'key': 'readUInt8',
			'value'() {
				const _3994358 = this.dataView.getUint8(this.index, true);
				return this.index++, _3994358;
			}
		}, {
			'key': 'readInt8',
			'value'() {
				const _3994358 = this.dataView.getInt8(this.index, true);
				return this.index++, _3994358;
			}
		}, {
			'key': 'readUInt16',
			'value'() {
				const _3994358 = this.dataView.getUint16(this.index, true);
				return this.index += 2, _3994358;
			}
		}, {
			'key': 'readInt16',
			'value'() {
				const _3994358 = this.dataView.getInt16(this.index, true);
				return this.index += 2, _3994358;
			}
		}, {
			'key': 'readUInt32',
			'value'() {
				const _3994358 = this.dataView.getUint32(this.index, true);
				return this.index += 4, _3994358;
			}
		}, {
			'key': 'readInt32',
			'value'() {
				const _3994358 = this.dataView.getInt32(this.index, true);
				return this.index += 4, _3994358;
			}
		}, {
			'key': 'readFloat32',
			'value'() {
				const _3994358 = this.dataView.getFloat32(this.index, true);
				return this.index += 4, _3994358;
			}
		}, {
			'key': 'readFloat64',
			'value'() {
				const _3994358 = this.dataView.getFloat64(this.index, true);
				return this.index += 8, _3994358;
			}
		}, {
			'key': 'readUTF8string',
			'value'() {
				for (var _3994358, _3542666 = ''; !this.endOfBuffer && 0 !== (_3994358 = this.readUInt8());) _3542666 += String.fromCharCode(_3994358);
				return _3542666;
			}
		}, {
			'key': 'readUTF16string',
			'value'() {
				for (var _3994358, _4506397 = ''; !this.endOfBuffer && 0 !== (_3994358 = this.readUInt16());) _4506397 += String.fromCharCode(_3994358);
				return _4506397;
			}
		}, {
			'key': 'readEscapedUTF8string',
			'value'() {
				const _3994358 = this.readUTF8string();
				return decodeURIComponent(escape(_3994358));
			}
		}, {
			'key': 'decompress',
			'value'() {
				const _3994358 = new Uint8Array(this.dataView.buffer),
					_1199609 = this.readUInt32(),
					_5143716 = new Uint8Array(_1199609);
				LZ4.decodeBlock(_3994358.slice(5), _5143716), this.dataView = new DataView(_5143716.buffer), this.index = 0, this.maxIndex = this.dataView.byteLength;
			}
		}, {
			'key': 'endOfBuffer',
			'get'() {
				return this.index >= this.maxIndex;
			}
		}]), _3994358;
    })(),
    
    
    
    X = (() => {
		function _2573803() {
			plzsuckmydick(this, _2573803), this.arrayBuffer = [];
		}
		return plzdsmd(_2573803, [{
			'key': 'writeUint8',
			'value'(_2573803) {
				return 0 > (_2573803 |= 0) || 255 < _2573803 ? void console.error('value out of range [Min: 0, Max: 255, Value: ' + _2573803 + ']') : void this.arrayBuffer.push(_2573803);
			}
		}, {
			'key': 'writeInt8',
			'value'(_2573803) {
				return -128 > (_2573803 |= 0) || 127 < _2573803 ? void console.error('value out of range [Min: -128, Max: 127, Value: ' + _2573803 + ']') : void this.arrayBuffer.push(_2573803);
			}
		}, {
			'key': 'writeUint16',
			'value'(_2573803) {
				return 0 > (_2573803 |= 0) || 65535 < _2573803 ? void console.error('value out of range [Min: 0, Max: 65535, Value: ' + _2573803 + ']') : void this.arrayBuffer.push(_2573803, _2573803 >> 8);
			}
		}, {
			'key': 'writeInt16',
			'value'(_2573803) {
				return -32768 > (_2573803 |= 0) || 32767 < _2573803 ? void console.error('value out of range [Min: -32768, Max: 32767, Value: ' + _2573803 + ']') : void this.arrayBuffer.push(_2573803, _2573803 >> 8);
			}
		}, {
			'key': 'writeUint32',
			'value'(_2573803) {
				return 0 > (_2573803 |= 0) || 4294967295 < _2573803 ? void console.error('value out of range [Min: 0, Max: 4294967295, Value: ' + _2573803 + ']') : void this.arrayBuffer.push(_2573803, _2573803 >> 8, _2573803 >> 16, _2573803 >> 24);
			}
		}, {
			'key': 'writeInt32',
			'value'(_2573803) {
				return -2147483648 > (_2573803 |= 0) || 2147483647 < _2573803 ? void console.error('value out of range [Min: -2147483648, Max: 2147483647, Value: ' + _2573803 + ']') : void this.arrayBuffer.push(_2573803, _2573803 >> 8, _2573803 >> 16, _2573803 >> 24);
			}
		}, {
			'key': 'writeString',
			'value'(_2573803) {
				for (let _1149220, _1080615 = 0; _1080615 < _2573803.length; _1080615++) _1149220 = _2573803.charCodeAt(_1080615), this.writeUint8(_1149220);
				this.writeUint8(0);
			}
		}, {
			'key': 'writeEncodedString',
			'value'(_2573803) {
				const _1531435 = unescape(encodeURIComponent(_2573803));
				this.writeString(_1531435);
			}
		}, {
			'key': 'writeUTF16String',
			'value'(_2573803) {
				for (let _1846393, _4410053 = 0; _4410053 < _2573803.length; _4410053++) _1846393 = _2573803.charCodeAt(_4410053), this.writeUint16(_1846393);
				this.writeUint16(0);
			}
		}, {
			'key': 'writeUTF16StringNonZero',
			'value'(_2573803) {
				for (let _6191930, _3879347 = 0; _3879347 < _2573803.length; _3879347++) _6191930 = _2573803.charCodeAt(_3879347), this.writeUint16(_6191930);
			}
		}, {
			'key': 'reset',
			'value'() {
				this.arrayBuffer = [];
			}
		}, {
			'key': 'buffer',
			'get'() {
				return new Uint8Array(this.arrayBuffer).buffer;
			}
		}]), _2573803;
    })(),
    
    
    
    q = new((() => {
		function _5525236() {
			plzsuckmydick(this, _5525236), this.ip = '', this.Tab1 = null, this.connectedTab1 = false, this.Tab2 = null, this.connectedTab2 = false, this.Tab3 = null, this.connectedTab3 = false, this.packetCount = {
				'in': 0,
				'out': 0
			}, this.ipBox = _2610335('#ip-box');
		}
		return plzdsmd(_5525236, [{
			'key': 'init',
			'value'(_5525236) {
				_5525236 && (this.disconnect(), this.resetData(), j.init(), G.reset(), this.address = _5525236, this.Tab1 = new WebSocket('wss://' + this.address), this.Tab1.binaryType = 'arraybuffer', this.Tab1.onopen = () => {
					window.Tab1WS = this.Tab1, window.Tab1 = this.onOpen(1), window.Tab1;
				}, this.Tab1.onmessage = _5525236 => {
					this.onMessage(_5525236, 1);
				}, this.Tab1.onclose = () => {
					this.onClose(1);
				}, this.Tab1.onerror = () => {
					this.onError(1);
				}, _4629996.multiboxMode === 'on' && (this.Tab2 = new WebSocket('wss://' + _5525236), this.Tab2.binaryType = 'arraybuffer', this.Tab2.onopen = () => {
					window.Tab2WS = this.Tab2, window.Tab2 = this.onOpen(2), window.Tab2;
				}, this.Tab2.onmessage = _5525236 => {
					this.onMessage(_5525236, 2);
				}, this.Tab2.onclose = () => {
					this.onClose(2);
				}, this.Tab2.onerror = () => {
					this.onError(2);
				}), this.Tab3 = new WebSocket('wss://' + _5525236), this.Tab3.binaryType = 'arraybuffer', this.Tab3.onopen = () => {
					window.Tab3WS = this.Tab3, window.Tab3 = this.onOpen(3), window.Tab3;
				}, this.Tab3.onmessage = _5525236 => {
					this.onMessage(_5525236, 3);
				}, this.Tab3.onclose = () => {
					this.onClose(3);
				}, this.Tab3.onerror = () => {
					this.onError(3);
				}, m.alert('HSLO', 'Connecting to game server ' + _2610335('#party-token').val() + '.'), console.info('Connecting to: ' + _5525236));
			}
		}, {
			'key': 'disconnect',
			'value'() {
				this.Tab1 && this.Tab1.close && (this.Tab1.close(), this.Tab1.onopen = null, this.Tab1.onmessage = null, this.Tab1.onclose = null, this.Tab1.onerror = null), this.Tab2 && this.Tab2.close && (this.Tab2.close(), this.Tab2.onopen = null, this.Tab2.onmessage = null, this.Tab2.onclose = null, this.Tab2.onerror = null), this.Tab1 = null, this.connectedTab1 = false, Q.loggedIn = false, this.Tab2 = null, this.connectedTab2 = false, Q.loggedIn2 = false, this.Tab3 = null, this.connectedTab3 = false, this.address = 'not connected';
			}
		}, {
			'key': 'resetData',
			'value'() {
				I.cellsTab1.clear(), I.cellsIDTab1.clear(), I.myCellsTab1.clear(), I.cellsTab2.clear(), I.cellsIDTab2.clear(), I.myCellsTab2.clear(), I.cellsTab3.clear(), I.cellsIDTab3.clear(), I.myCellsTab3.clear(), A.isAliveTab1 = false, A.isAliveTab2 = false, A.sendAliveData(0);
			}
		}, {
			'key': 'send',
			'value'(_5525236, _1385521) {
				this.packetCount.out++, 1 === _1385521 && this.Tab1Connected ? this.Tab1.send(_5525236) : 2 == _1385521 && this.Tab2Connected ? this.Tab2.send(_5525236) : 3 == _1385521 && this.Tab3Connected && this.Tab3.send(_5525236);
			}
		}, {
			'key': 'onOpen',
			'value'(_5525236) {
				_5525236 === 3 && setTimeout(() => {
					Q.spectate(3);
				}, 100), Q.init(_5525236), m.alert('HSLO', 'Tab ' + _5525236 + ' connected');
			}
		}, {
			'key': 'onMessage',
			'value'(_5525236, _6245387) {
				this.packetCount.in++, Z.getBuffer(_5525236, _6245387);
			}
		}, {
			'key': 'onClose',
			'value'(_5525236) {
				this.Tab1Connected || this.Tab2Connected || this.Tab3Connected || z.open(), L.isSpectating = false, L.freeSpectate = false, Z.clearCells(_5525236), m.alert('HSLO', 'Tab ' + _5525236 + ' disconnected'), console.log('Websocket Closed');
			}
		}, {
			'key': 'onError',
			'value'() {
				console.log('Websocket errored out!');
			}
		}, {
			'key': 'address',
			'set'(_5525236) {
				this.ip = _5525236, this.ipBox.text('IP: ' + _5525236 ), _e.serverToken(), _e.join(1), _e.join(2), _e.region(), _e.gameMode(), se.teammates.clear();
			},
			'get'() {
				return this.ip;
			}
		}, {
			'key': 'Tab1Connected',
			'get'() {
				return this.Tab1 && this.Tab1.readyState === this.Tab1.OPEN;
			}
		}, {
			'key': 'Tab2Connected',
			'get'() {
				return this.Tab2 && this.Tab2.readyState === this.Tab2.OPEN;
			}
		}, {
			'key': 'Tab3Connected',
			'get'() {
				return this.Tab3 && this.Tab3.readyState === this.Tab3.OPEN;
			}
		}]), _5525236;
    })())(),
    
    
    
    j = new((() => {
		function _2587362() {
			plzsuckmydick(this, _2587362);
		}
		return plzdsmd(_2587362, [{
			'key': 'init',
			'value'() {
				this.protocolKey = null, this.protocolKey2 = null, this.protocolKey3 = null, this.clientKey = null, this.clientKey2 = null, this.clientKey3 = null;
			}
		}, {
			'key': 'generateClientKey',
			'value'(_2587362) {
				let _5302083 = new Uint8Array(_2587362.dataView.buffer, _2587362.index);
				for (var _8619836 = null, _2653975 = q.address.match(/([^:]*)(:\d+)/)[1], _16350690 = _2653975.length + _5302083.byteLength, _3939963 = new Uint8Array(_16350690), _4499757 = 0; _4499757 < _2653975.length; _4499757++) _3939963[_4499757] = _2653975.charCodeAt(_4499757);
				_3939963.set(_5302083, _2653975.length);
				for (var _2610335 = new DataView(_3939963.buffer), _5039496 = _16350690 - 1, _5821427 = 0 | 4 + (-4 & _5039496 - 4), _1772312 = 255 ^ _5039496, _6093796 = 0; 3 < _5039496;) _8619836 = 0 | Math.imul(_2610335.getInt32(_6093796, true), 1540483477), _1772312 = (0 | Math.imul(_8619836 >>> 24 ^ _8619836, 1540483477)) ^ (0 | Math.imul(_1772312, 1540483477)), _5039496 -= 4, _6093796 += 4;
				switch (_5039496) {
				case 3:
					_1772312 = _3939963[_5821427 + 2] << 16 ^ _1772312, _1772312 = _3939963[_5821427 + 1] << 8 ^ _1772312;
					break;
				case 2:
					_1772312 = _3939963[_5821427 + 1] << 8 ^ _1772312;
					break;
				case 1:
					break;
				default:
					_8619836 = _1772312;
				}
				return _8619836 != _1772312 && (_8619836 = 0 | Math.imul(_3939963[_5821427] ^ _1772312, 1540483477)), _8619836 ^= _1772312 = _8619836 >>> 13, (_8619836 = 0 | Math.imul(_8619836, 1540483477)) ^ _8619836 >>> 15;
			}
		}, {
			'key': 'shiftKey',
			'value': _2587362 => (_2587362 = 0 | Math.imul(_2587362, 1540483477), _2587362 = 114296087 ^ (0 | Math.imul(_2587362 >>> 24 ^ _2587362, 1540483477)), (_2587362 = 0 | Math.imul(_2587362 >>> 13 ^ _2587362, 1540483477)) >>> 15 ^ _2587362)
		}, {
			'key': 'shiftMessage',
			'value'(_2587362, _2329653) {
				for (var _1832114 = 0; _1832114 < _2587362.byteLength; _1832114++) _2587362.setUint8(_1832114, _2587362.getUint8(_1832114) ^ 255 & _2329653 >>> _1832114 % 4 * 8);
				return _2587362;
			}
		}]), _2587362;
    })())(),
    
    
    
    window.classj = j, Z = new((() => {
		function _3580490() {
			plzsuckmydick(this, _3580490);
		}
		return plzdsmd(_3580490, [{
			'key': 'getBuffer',
			'value'(_3580490, _5516709) {
				_3580490 = new DataView(_3580490.data), 1 == _5516709 ? j.protocolKey && (_3580490 = j.shiftMessage(_3580490, j.protocolKey ^ le.versionInt)) : 2 == _5516709 ? j.protocolKey2 && (_3580490 = j.shiftMessage(_3580490, j.protocolKey2 ^ le.versionInt)) : j.protocolKey3 && (_3580490 = j.shiftMessage(_3580490, j.protocolKey3 ^ le.versionInt)), this.parse(_3580490, _5516709);
			}
		}, {
			'key': 'parse',
			'value'(_3580490, _5366527) {
				const _3749847 = new D(_3580490),
					_5056131 = _3749847.readUInt8();
				17 === _5056131 ? this.getSpectateData(_3749847, _5366527) : 18 === _5056131 ? this.clearCells(_5366527) : 32 === _5056131 ? this.getMyCellId(_3749847, _5366527) : 50 === _5056131 ? 1 === _5366527 && this.getLeaderboardTeam(_3749847) : 53 === _5056131 ? 1 === _5366527 && this.getLeaderboardFFA(_3749847) : 54 === _5056131 ? 1 === _5366527 && this.getLeaderboard(_3749847) : 69 === _5056131 ? 3 === _5366527 && this.getGhost(_3749847) : 85 === _5056131 && 3 != _5366527 ? y.display(_5366527) : 102 === _5056131 ? (this.mobileData(_3749847, _5366527), 20 > _3749847.dataView.byteLength && (1 === _5366527 ? _5451753.logout() : _4188507.logout())) : 103 === _5056131 ? 1 === _5366527 ? (Q.loggedIn = true, Q.freeCoins(1)) : (Q.loggedIn2 = true, Q.freeCoins(2)) : 226 === _5056131 ? this.ping(_3749847, _5366527) : 241 === _5056131 ? this.getReceiveKey(_3749847, _5366527) : 255 === _5056131 && this.compressedPacket(_3749847, _5366527);
			}
		}, {
			'key': 'getGhost',
			'value'(_3580490) {
				this.ghostCells = [];
				let _2843497 = _3580490.readUInt16();
				for (let _4448568 = 0; _4448568 < _2843497; _4448568++) {
					let _2843497 = _3580490.readInt32();
					let _4448568 = _3580490.readInt32();
					let _16350690 = _3580490.readUInt32();
					_3580490.index++;
					let _5740235 = ~~Math.sqrt(100 * _16350690);
					this.ghostCells.push({
						'x': _2843497,
						'y': _4448568,
						'mass': _16350690,
						'size': _5740235
					});
				}
				window.ghostCells = this.ghostCells, window.ghostData = _3580490;
			}
		}, {
			'key': 'calcSector',
			'value'(_8897051, _5326466, _13957488) {
				let _12565893 = _8897051 === 1 ? G.offset : _8897051 === 2 ? G.offset2 : _8897051 === 3 && G.offset3;
				let _1299309 = _5326466 && _5326466 - _12565893.x;
				let _4277662 = _13957488 && _13957488 - _12565893.y;
				let _1936469 = _4277662 >= -14142 && _4277662 <= -4242.6 ? 'A' : _4277662 >= -4242.6 && _4277662 <= -1414.2 ? 'B' : _4277662 >= -1414.2 && _4277662 <= 1414.2 ? 'C' : _4277662 >= 1414.2 && _4277662 <= 4242.6 ? 'D' : _4277662 >= 4242.6 && _4277662 <= 14142 && 'E';
				let _12633298 = _1299309 >= -14142 && _1299309 <= -4242.6 ? '1' : _1299309 >= -4242.6 && _1299309 <= -1414.2 ? '2' : _1299309 >= -1414.2 && _1299309 <= 1414.2 ? '3' : _1299309 >= 1414.2 && _1299309 <= 4242.6 ? '4' : _1299309 >= 4242.6 && _1299309 <= 14142 && '5';
				return _1936469 + _12633298;
			}
		}, {
			'key': 'getSpectateData',
			'value'(_3580490, _5261943) {
				3 !== _5261943 ? (2 !== _5261943 || A.isAlive) && (L.spectatePoints.x = _3580490.readFloat32(), L.spectatePoints.y = _3580490.readFloat32(), L.autoZoomViewport = _3580490.readFloat32()) : 3 === _5261943 && (L.Tab3SpectatePoints.x = _3580490.readFloat32(), L.Tab3SpectatePoints.y = _3580490.readFloat32(), L.Tab3Viewport = _3580490.readFloat32());
			}
		}, {
			'key': 'clearCells',
			'value'(_3580490) {
				console.log('Reseting World...'), 1 == _3580490 ? (j.protocolKey && (j.protocolKey = j.shiftKey(j.protocolKey)), console.log('Reset Protocol Key 1: ' + j.protocolKey)) : 2 == _3580490 ? (j.protocolKey2 && (j.protocolKey2 = j.shiftKey(j.protocolKey2)), console.log('Reset Protocol Key 2: ' + j.protocolKey2)) : (j.protocolKey3 && (j.protocolKey3 = j.shiftKey(j.protocolKey3)), console.log('Reset Protocol Key 3: ' + j.protocolKey3)), 1 == _3580490 ? (I.cellsTab1.clear(), I.cellsIDTab1.clear(), I.myCellsTab1.clear(), console.log('Clearing tab 1 world')) : 2 == _3580490 ? (I.cellsTab2.clear(), I.cellsIDTab2.clear(), I.myCellsTab2.clear(), console.log('Clearing tab 2 world')) : (I.cellsTab3.clear(), I.cellsIDTab3.clear(), I.myCellsTab3.clear(), console.log('Clearing tab 3 world'));
			}
		}, {
			'key': 'getMyCellId',
			'value'(_3580490, _2868077) {
				const _12753362 = 1 === _2868077 ? I.cellsIDTab1 : 2 === _2868077 ? I.cellsIDTab2 : I.cellsIDTab3,
					_1886557 = _3580490.readUInt32();
				_12753362.add(_1886557);
			}
		}, {
			'key': 'getLeaderboard',
			'value'(_3580490) {
				_4168640.clear();
				let _4303278, _4929279 = 0;
				for (_3580490.readUInt16(); !_3580490.endOfBuffer;) {
					_4929279++;
					let _2650671 = 'unnamed cell',
						_16350690 = false,
						_2400103 = false,
						_3372755 = false;
					1 & (_4303278 = _3580490.readUInt8()) && (_4929279 = _3580490.readUInt16()), 2 & _4303278 && (_2650671 = _3580490.readEscapedUTF8string()), 4 & _4303278 && (_16350690 = _3580490.readUInt32()), 8 & _4303278 && (_2400103 = true, _2650671 = A.nick), 16 & _4303278 && (_3372755 = true), (11 > _4929279 || _2400103) && _4168640.add(_2650671, _4929279, _2400103, _3372755, _16350690), _4168640.playersAmount = _4929279;
				}
				_4168640.update();
			}
		}, {
			'key': 'getLeaderboardFFA',
			'value'(_3580490) {
				_4168640.clear();
				for (let _4958522, _7349729 = 0; !_3580490.endOfBuffer;) {
					_7349729++;
					let _4000229 = 'unnamed cell',
						_16350690 = false,
						_3860618 = false,
						_5286696 = false;
					1 & (_4958522 = _3580490.readUInt8()) && (_7349729 = _3580490.readUInt16()), 2 & _4958522 && (_4000229 = _3580490.readEscapedUTF8string()), 4 & _4958522 && (_16350690 = _3580490.readUInt32()), 8 & _4958522 && (_3860618 = true, _4000229 = A.nick), 16 & _4958522 && (_5286696 = true), (11 > _7349729 || _3860618) && _4168640.add(_4000229, _7349729, _3860618, _5286696, _16350690), _4168640.playersAmount = _7349729;
				}
				_4168640.update();
			}
		}, {
			'key': 'getLeaderboardTeam',
			'value'(_3580490) {
				_4168640.clear(), _3580490.readUInt32(), _4168640.team(_3580490.readFloat32(), _3580490.readFloat32(), _3580490.readFloat32());
			}
		}, {
			'key': 'getReceiveKey',
			'value'(_3580490, _4288323) {
				1 == _4288323 ? (j.protocolKey = _3580490.readUInt32(), j.clientKey = j.generateClientKey(_3580490, _4288323), console.log('Protocol Key 1: ' + j.protocolKey + ' | Client Key 1: ' + j.clientKey)) : 2 == _4288323 ? (j.protocolKey2 = _3580490.readUInt32(), j.clientKey2 = j.generateClientKey(_3580490, _4288323), console.log('Protocol Key 2: ' + j.protocolKey2 + ' | Client Key 2: ' + j.clientKey2)) : (j.protocolKey3 = _3580490.readUInt32(), j.clientKey3 = j.generateClientKey(_3580490, _4288323), console.log('Protocol Key 3: ' + j.protocolKey3 + ' | Client Key 3: ' + j.clientKey3));
			}
		}, {
			'key': 'compressedPacket',
			'value'(_3580490, _1110462) {
				_3580490.decompress();
				const _5357546 = _3580490.readUInt8();
				16 === _5357546 ? this.worldUpdate(_3580490, _1110462) : 64 === _5357546 && this.borderUpdate(_3580490, _1110462);
			}
		}, {
			'key': 'worldUpdate',
			'value'(_3580490, _3356034) {
				le.refreshTime();
				for (var _16157242 = 'on' === _4629996.eatAnimation, _3096924 = _3580490.readUInt16(); _3096924--;) {
					const _3096924 = _3580490.readUInt32(),
						_16350690 = _3580490.readUInt32();
					_16157242 && I.eatCell(_3096924, _16350690, _3356034);
				}
				for (; !_3580490.endOfBuffer;) {
					const _16157242 = _3580490.readUInt32();
					if (0 === _16157242) break;
					const _3096924 = I.getCell(_16157242, _3356034),
						_16350690 = _3580490.readInt32(),
						_2848284 = _3580490.readInt32(),
						_3257758 = _3580490.readUInt16();
					_3096924.init ? (_3096924.animate(), _3096924.animX = _3096924.x, _3096924.animY = _3096924.y, _3096924._000308 = _3096924.animRadius) : (_3096924.x = _3096924.animX = _16350690, _3096924.y = _3096924.animY = _2848284, _3096924.animRadius = _3096924._000308 = _3096924.radius = _3257758, _3096924._000307 = le.time, _3096924.init = true), _3096924.staticX = _16350690, _3096924.staticY = _2848284, _3096924.radius = _3257758, _3096924.lastUpdateTime = le.time;
					const _2610335 = _3580490.readUInt8(),
						_2022776 = 128 & _2610335 ? _3580490.readUInt8() : 0;
					if (1 & _2610335 && (_3096924.isVirus = true), 2 & _2610335) {
						const _3356034 = _3580490.readUInt8(),
							_16157242 = _3580490.readUInt8(),
							_16350690 = _3580490.readUInt8();
						_3096924.colorObject.set(_3356034, _16157242, _16350690);
					}
					4 & _2610335 && (_3096924.skin = _3580490.readUTF8string()), 8 & _2610335 && (_3096924.nick = _3580490.readEscapedUTF8string()), 32 & _2610335 && (_3096924.isEjected = true), 1 & _2022776 && (_3096924.isFood = true), 2 & _2022776 && (_3096924.isFriend = true), 4 & _2022776 && (_3096924.account = _3580490.readUInt32());
				}
				for (_3096924 = _3580490.readUInt16(); _3096924--;) {
					const _16157242 = _3580490.readUInt32();
					I.removeCell(_16157242, _3356034);
				}
			}
		}, {
			'key': 'borderUpdate',
			'value'(_3580490, _5390164) {
				const _2480126 = 0 | _3580490.readFloat64(),
					_4929553 = 0 | _3580490.readFloat64(),
					_16350690 = 0 | _3580490.readFloat64(),
					_2101585 = 0 | _3580490.readFloat64();
				1 === _5390164 ? G.update(_2480126, _4929553, _16350690, _2101585) : 2 === _5390164 ? G.updateOffset2(_2480126, _4929553, _16350690, _2101585) : G.updateOffset3(_2480126, _4929553, _16350690, _2101585);
			}
		}, {
			'key': 'ping',
			'value'(_3580490, _1767698) {
				const _5595645 = _3580490.readUInt16();
				Q.pong(_5595645, _1767698);
			}
		}]), _3580490;
    })())(),
    
    
    
    Q = new((() => {
		function _5337415() {
			plzsuckmydick(this, _5337415), this.loggedIn = false, this.loggedIn2 = false, this.triedCoins = false, this.triedCoins2 = false;
		}
		return plzdsmd(_5337415, [{
			'key': 'init',
			'value'(_5337415) {
				this.handshake1(_5337415), this.handshake2(_5337415), 1 === _5337415 ? (q.connectedTab1 = true, this.fbToken()) : 2 === _5337415 ? (q.connectedTab2 = true, q.connectedTab3 = true, this.googleToken()) : this.unknownToken(), console.log('Connected to: ' + q.address);
			}
		}, {
			'key': 'createView',
			'value': _5337415 => new DataView(new ArrayBuffer(_5337415))
		}, {
			'key': 'connected',
			'value': _5337415 => 1 === _5337415 && q.connectedTab1 || 2 === _5337415 && q.connectedTab2 || 3 === _5337415 && q.connectedTab3
		}, {
			'key': 'sendPacket',
			'value'(_5337415, _2935028) {
				if (1 === _2935028) {
					if (!j.clientKey) return;
					_5337415 = j.shiftMessage(_5337415, j.clientKey), j.clientKey = j.shiftKey(j.clientKey);
				} else if (2 === _2935028) {
					if (!j.clientKey2) return;
					_5337415 = j.shiftMessage(_5337415, j.clientKey2), j.clientKey2 = j.shiftKey(j.clientKey2);
				} else {
					if (!j.clientKey3) return;
					_5337415 = j.shiftMessage(_5337415, j.clientKey3), j.clientKey3 = j.shiftKey(j.clientKey3);
				}
				q.send(_5337415.buffer, _2935028);
			}
		}, {
			'key': 'handshake1',
			'value'(_5337415) {
				const _3703912 = this.createView(5);
				_3703912.setUint8(0, 254, true), _3703912.setUint32(1, 22, true), q.send(_3703912.buffer, _5337415);
			}
		}, {
			'key': 'handshake2',
			'value'(_5337415) {
				const _5239886 = this.createView(5);
				_5239886.setUint8(0, 255, true), _5239886.setUint32(1, le.versionInt, true), q.send(_5239886.buffer, _5337415);
			}
		}, {
			'key': 'mouse',
			'value'(_5337415, _2483034) {
				const _4684425 = A.controllingTab;
				if (this.connected(_4684425)) {
					const _1423052 = 1 == _4684425 ? j.protocolKey : j.protocolKey2,
						_16350690 = this.createView(13);
					_16350690.setUint8(0, 16, true), _16350690.setInt32(1, _5337415, true), _16350690.setInt32(5, _2483034, true), _16350690.setInt32(9, _1423052, true), this.sendPacket(_16350690, _4684425);
				}
			}
		}, {
			'key': 'spectate',
			'value'(_5337415) {
				const _2301044 = _5337415 || 1;
				if (this.connected(_2301044) || !A.isAlive && !L.isSpectating || _5337415) {
					const _5337415 = this.createView(1);
					_5337415.setUint8(0, 1, true), this.sendPacket(_5337415, _2301044), _2301044 != 3 ? L.isSpectating = true : L.isSpectating = false, A.isAlive || (L.targetViewport = 0.1);
				}
			}
		}, {
			'key': 'captcha',
			'value'(_5337415, _1486970) {
				if (this.connected(_1486970)) {
					console.log('Captcha Token Sent: ' + _1486970);
					const _5124225 = _5337415.length;
					let _267378 = _5124225;
					const _16350690 = this.createView(2 + _5124225);
					for (_16350690.setUint8(0, 86, true); _267378--;) _16350690.setUint8(_267378 + 1, _5337415.charCodeAt(_267378), true);
					_16350690.setUint8(_5124225 + 1, 0, true), this.sendPacket(_16350690, _1486970);
				}
			}
		}, {
			'key': 'spawn',
			'value'() {
				const _5337415 = A.controllingTab;
				const _5238175 = this;
				try {
					grecaptcha.reset();
				} catch (_12053900) {};
				if (this.connected(_5337415) || !(A.isAliveTab1 && 1 === _5337415 || A.isAliveTab2 && 2 === _5337415)) {
					grecaptcha.ready(() => {
						grecaptcha.execute(0, {
							'action': 'play'
						}).then(function (_2064730) {
							1 === _5337415 ? Q.fbToken() : Q.googleToken(), L.isSpectating = false;
							const _3644369 = 1 === _5337415 ? A.nick : A.nick2,
								_10441906 = unescape(encodeURIComponent(_3644369)),
								_3542529 = _10441906.length,
								_1772312 = _2064730.length,
								_16350690 = _5238175.createView(3 + _3542529 + _1772312);
							_16350690.setUint8(0, 0, true);
							for (let _5337415 = 0; _5337415 < _3542529; _5337415++) _16350690.setUint8(_5337415 + 1, _10441906.charCodeAt(_5337415), true);
							_16350690.setUint8(_3542529 + 1, 0, true);
							for (let _3477933 = 0; _3477933 < _1772312; _3477933++) _16350690.setUint8(_3477933 + _3542529 + 2, _2064730.charCodeAt(_3477933), true);
							_16350690.setUint8(_1772312 + _3542529 + 2, 0, true);
							_5238175.sendPacket(_16350690, _5337415);
						});
					});
					Q.spectate(3);
				}
			}
		}, {
			'key': 'sendToken',
			'value'(_5337415, _4269747) {
				var _1312866 = 2 === _4269747 ? 1 : 4 === _4269747 ? 2 : 3;
				if (this.connected(_1312866) && (!this.loggedIn || 2 !== _4269747) && (!this.loggedIn2 || 4 !== _4269747)) {
					let _1312866 = _5337415.length,
						_2833480 = le.versionString.length,
						_1559445 = [102, 8, 1, 18];
					this.writeUint32(_1559445, _1312866 + _2833480 + 23), _1559445.push(8, 10, 82), this.writeUint32(_1559445, _1312866 + _2833480 + 18), _1559445.push(8, _4269747, 18, _2833480 + 8, 8, 5, 18, _2833480);
					for (var _5713588 = 0; _5713588 < _2833480; _5713588++) _1559445.push(le.versionString.charCodeAt(_5713588));
					for (_1559445.push(24, 0, 32, 0, 26), this.writeUint32(_1559445, _1312866 + 3), _1559445.push(10), this.writeUint32(_1559445, _1312866), _5713588 = 0; _5713588 < _1312866; _5713588++) _1559445.push(_5337415.charCodeAt(_5713588));
					_1559445 = new Uint8Array(_1559445);
					var _16350690 = new DataView(_1559445.buffer);
					2 === _4269747 ? this.sendPacket(_16350690, 1) : 4 == _4269747 && this.sendPacket(_16350690, 2);
				}
			}
		}, {
			'key': 'split',
			'value'(_4603672) {
				const _5337415 = _4603672 === 1 ? 1 : _4603672 === 2 ? 2 : A.controllingTab;
				if (this.connected(_5337415)) {
					const _5478827 = this.createView(1);
					_5478827.setUint8(0, 17, true), this.sendPacket(_5478827, _5337415);
				}
			}
		}, {
			'key': 'eject',
			'value'() {
				const _5337415 = A.controllingTab;
				if (this.connected(_5337415)) {
					const _3375071 = this.createView(1);
					_3375071.setUint8(0, 21, true), this.sendPacket(_3375071, _5337415);
				}
			}
		}, {
			'key': 'freeSpectate',
			'value'() {
				if (this.connected(1)) {
					L.freeSpectate = !L.freeSpectate;
					const _5337415 = this.createView(1);
					_5337415.setUint8(0, 18, true), this.sendPacket(_5337415, 1);
				}
			}
		}, {
			'key': 'freeCoins',
			'value'(_1440222) {
				if (_1440222 === 1 && this.triedCoins || _1440222 === 2 && this.triedCoins2) return;
				m.alert('Miniclip', 'Tab ' + _1440222 + ' trying to get free coins. Retry after 1 hour.');
				setTimeout(() => {
					this.proxyMobileData([8, 1, 18, 18, 8, 110, 242, 6, 13, 10, 11, 104, 111, 117, 114, 108, 121, 66, 111, 110, 117, 115], _1440222);
				}, 1000);
				_1440222 === 1 ? this.triedCoins = true : this.triedCoins2 = true;
				setTimeout(() => {
					_1440222 === 1 ? Q.triedCoins = false : Q.triedCoins2 = false;
					Q.freeCoins(_1440222);
				}, 3600000);
			}
		}, {
			'key': 'openPotion',
			'value'(_2669077, _1564475) {
				console.log('[Miniclip] Tab ' + _1564475 + ' trying to open potion ' + _2669077);
				setTimeout(() => {
					this.proxyMobileData([8, 1, 18, 7, 8, 124, 226, 7, 2, 8, _2669077], _1564475);
				}, 1000);
			}
		}, {
			'key': 'proxyMobileData',
			'value'(_6044846, _4832586) {
				if (_6044846[0] === 8) {
					_6044846.unshift(102);
				};
				_6044846 = new Uint8Array(_6044846);
				this.sendPacket(new DataView(_6044846.buffer), _4832586);
			}
		}, {
			'key': 'pong',
			'value'(_5337415, _3269569) {
				if (this.connected(_3269569)) {
					const _5658032 = this.createView(3);
					_5658032.setUint8(0, 227, true), _5658032.setUint16(1, _5337415, true), this.sendPacket(_5658032, _3269569);
				}
			}
		}, {
			'key': 'fbToken',
			'value'() {
				if (_5451753.loggedIn) {
					const _5337415 = _5451753.token;
					this.sendToken(_5337415, 2);
				}
			}
		}, {
			'key': 'googleToken',
			'value'() {
				if (_4188507.loggedIn) {
					const _5337415 = _4188507.token;
					this.sendToken(_5337415, 4);
				}
			}
		}, {
			'key': 'unknownToken',
			'value'() {
				if (_4188507.loggedIn) {
					const _5337415 = _4188507.token;
					this.sendToken(_5337415, 6);
				}
			}
		}, {
			'key': 'writeUint32',
			'value'(_5337415, _5134437) {
				for (;;) {
					if (0 == (-128 & _5134437)) return void _5337415.push(_5134437);
					_5337415.push(128 | 127 & _5134437), _5134437 >>>= 7;
				}
			}
		}]), _5337415;
    })())(),
    
    
    
    Y = new((() => {
		function _11953611() {
			plzsuckmydick(this, _11953611);
		}
		return plzdsmd(_11953611, [{
			'key': 'createParty',
			'value'() {
				_2610335('#loading-screen').append('<div class=\"info\"><i class=\"fas fa-copyright\"></i> 2019 HSLO.</div>'), g.createParty(), t.finishUp();
			}
		}]), _11953611;
    })())(),
    
    
    
    J = new((() => {
		function _7065734() {
			plzsuckmydick(this, _7065734), this.address = 'snez.org:8080/ws?555', this.ogarWS1 = null, this.ogarWS2 = null;
		}
		return plzdsmd(_7065734, [{
			'key': 'init',
			'value'() {
				const _7065734 = this;
				this.ogarWS1 = new WebSocket('wss://' + this.address), this.ogarWS1.binaryType = 'arraybuffer', this.ogarWS1.onopen = () => _7065734.onOpen(1), this.ogarWS1.onmessage = _5500276 => _7065734.onMessage(_5500276, 1), this.ogarWS1.onclose = () => _7065734.onClose(1), this.ogarWS1.onerror = () => _7065734.onError(1), _4629996.multiboxMode === 'on' && (this.ogarWS2 = new WebSocket('wss://' + this.address), this.ogarWS2.binaryType = 'arraybuffer', this.ogarWS2.onopen = () => _7065734.onOpen(2), this.ogarWS2.onmessage = _3141600 => _7065734.onMessage(_3141600, 2), this.ogarWS2.onclose = () => _7065734.onClose(2), this.ogarWS2.onerror = () => _7065734.onError(2)), console.log('Connecting to Ogario Networks.');
			}
		}, {
			'key': 'send',
			'value'(_7065734, _3679230) {
				_3679230 && _3679230 === 2 ? this.ogarWS2.send(_7065734) : this.ogarWS1.send(_7065734);
			}
		}, {
			'key': 'onOpen',
			'value'(_7065734) {
				_e.init(), console.log('Connected to Ogario Networks. (' + _7065734 + ')');
			}
		}, {
			'key': 'onMessage',
			'value'(_7065734, _1978932) {
				ae.parse(_7065734, _1978932);
			}
		}, {
			'key': 'onClose',
			'value'(_7065734) {
				console.log('Disconnected from Ogario server. (' + _7065734 + ')'), m.alert('OGARio', 'Tab ' + _7065734 + ' disconnected from szymy\'s server.');
			}
		}, {
			'key': 'onError',
			'value'(_7065734) {
				console.log('Connection to Ogario server errored out! (' + _7065734 + ')'), m.alert('OGARio', 'Tab ' + _7065734 + ' can not connect to szymy\'s server.');
			}
		}, {
			'key': 'isConnected',
			'value'(_7065734) {
				if (_7065734 && _7065734 === 2) {
					return this.ogarWS2 && this.ogarWS2.readyState === this.ogarWS2.OPEN;
				} else {
					return this.ogarWS1 && this.ogarWS1.readyState === this.ogarWS1.OPEN;
				}
			}
		}]), _7065734;
    })())(),
    
    
    
    _e = new((() => {
		function _4495393() {
			plzsuckmydick(this, _4495393);
		}
		return plzdsmd(_4495393, [{
			'key': 'init',
			'value'() {
				try {
					this.handshake(), this.tag(), this.partyToken(), this.serverToken(), this.nick(), this.nick2(), this.skin(), this.skin2(), this.join(1), this.join(2);
				} catch (_4358454) {}
			}
		}, {
			'key': 'handshake',
			'value'() {
				const _4495393 = new X();
				_4495393.writeUint8(0), _4495393.writeUint16(401);
				try {
					J.send(_4495393.buffer, 1), J.send(_4495393.buffer, 2);
				} catch (_5770151) {}
			}
		}, {
			'key': 'sendString',
			'value'(_4495393, _1459117, _5006946) {
				if (J.isConnected(_5006946 || 1)) {
					const _4573406 = new X();
					_4573406.writeUint8(_4495393), _4573406.writeUTF16StringNonZero(_1459117);
					try {
						J.send(_4573406.buffer, _5006946 || 1);
					} catch (_1119620) {}
					console.log(_4495393, _1459117);
				}
			}
		}, {
			'key': 'sendInteger',
			'value'(_4495393, _4604855) {
				if (J.isConnected(_4604855 || 1)) {
					const _2503420 = new X();
					_2503420.writeUint8(_4495393);
					try {
						J.send(_2503420.buffer, _4604855 || 1);
					} catch (_5479702) {}
				}
			}
		}, {
			'key': 'nick',
			'value'() {
				A.nick && this.sendString(10, A.nick, 1);
			}
		}, {
			'key': 'nick2',
			'value'() {
				A.nick2 && this.sendString(10, A.nick2, 2);
			}
		}, {
			'key': 'tag',
			'value'() {
				this.sendString(11, A._tag, 1), this.sendString(11, A._tag, 2);
			}
		}, {
			'key': 'skin',
			'value'() {
				A.skin && this.sendString(12, 'https://i.imgur.com/' + A.skin + '.png', 1);
			}
		}, {
			'key': 'skin2',
			'value'() {
				A.skin2 && this.sendString(12, 'https://i.imgur.com/' + A.skin2 + '.png', 2);
			}
		}, {
			'key': 'partyToken',
			'value'() {
				const _4495393 = _2610335('#party-token').val();
				_4495393 && this.sendString(15, _4495393, 1);
				_4495393 && this.sendString(15, _4495393, 2);
			}
		}, {
			'key': 'serverToken',
			'value'() {
				const _4495393 = !!q.address && q.address.match(/live-arena-([\w\d]+)\.agar\.io:\d+/);
				_4495393 && _4495393[1] && this.sendString(16, _4495393[1], 1);
				_4495393 && _4495393[1] && this.sendString(16, _4495393[1], 2);
			}
		}, {
			'key': 'region',
			'value'() {
				const _4495393 = _2610335('#regions').val().split('-');
				_4495393 && _4495393[0] && this.sendString(17, _4495393[0], 1);
				_4495393 && _4495393[0] && this.sendString(17, _4495393[0], 2);
			}
		}, {
			'key': 'gameMode',
			'value'() {
				this.sendString(18, 'PTY', 1);
				this.sendString(18, 'PTY', 2);
			}
		}, {
			'key': 'spawn',
			'value'(_4495393) {
				this.sendInteger(1, _4495393);
			}
		}, {
			'key': 'death',
			'value'(_4495393) {
				this.sendInteger(2, _4495393);
			}
		}, {
			'key': 'join',
			'value'(_4495393) {
				this.sendInteger(3, _4495393);
			}
		}, {
			'key': 'positionMass',
			'value'(_236093) {
				if (J.isConnected(_236093 || 1) && A.isAlive) {
					const _4495393 = new X();
					_4495393.writeUint8(30), _4495393.writeUint32(_236093 && _236093 === 2 ? se.playerID2 : se.playerID), _4495393.writeInt32((_236093 && _236093 === 2 ? A.x2 : A.x1) - G.offset.x), _4495393.writeInt32((_236093 && _236093 === 2 ? A.y2 : A.y1) - G.offset.y), _4495393.writeUint32(_236093 && _236093 === 2 ? A.mass2 : A.mass1);
					try {
						J.send(_4495393.buffer, _236093);
					} catch (_4637186) {}
				}
			}
		}, {
			'key': 'playerData',
			'value'(_3357520) {
				if (J.isConnected(_3357520 || 1) && A.isAlive && (_3357520 && _3357520 === 2 ? se.playerID2 : se.playerID)) {
					const _4495393 = new X();
					_4495393.writeUint8(20), _4495393.writeUint32(_3357520 && _3357520 === 2 ? se.playerID2 : se.playerID), _4495393.writeUTF16String(_3357520 && _3357520 === 2 ? A.nick2 : A.nick), _4495393.writeUTF16String(_3357520 && _3357520 === 2 ? N.code2url(A.skin2) : N.code2url(A.skin)), _4495393.writeUTF16String('#555555'), _4495393.writeUTF16String(_3357520 && _3357520 === 2 ? A.colorHexTab2 : A.colorHexTab1), console.log('Sending OGARio Buffer ' + _3357520);
					try {
						J.send(_4495393.buffer, _3357520);
					} catch (_5740438) {}
				}
			}
		}, {
			'key': 'message',
			'value'(_4495393, _4927149, _145661) {
				if (J.isConnected(_145661 || 1) && (_145661 && _145661 === 2 ? se.playerID2 : se.playerID)) {
					const _3422300 = new X();
					_3422300.writeUint8(100), _3422300.writeUint8(_4495393), _3422300.writeUint32(_145661 && _145661 === 2 ? se.playerID2 : se.playerID), _3422300.writeUint32(0), _3422300.writeUTF16StringNonZero((_145661 && _145661 === 2 ? A.nick2 : A.nick || 'unnamed') + ': ' + _4927149);
					try {
						J.send(_3422300.buffer, _145661);
					} catch (_6188109) {}
				}
			}
		}]), _4495393;
    })())(),
    
    
    
    window.class_e = _e, ae = new((() => {
		function _3393126() {
			plzsuckmydick(this, _3393126), this.connectedIndex = 0;
		}
		return plzdsmd(_3393126, [{
			'key': 'parse',
			'value'(_3393126, _6180385) {
				_3393126 = new DataView(_3393126.data);
				const _5165242 = new D(_3393126);
				switch (_5165242.readUInt8()) {
				case 0:
					this.selfID(_5165242, _6180385);
					break;
				case 1:
					this._000054(_6180385);
					break;
				case 20:
					_6180385 === 1 && this.prePlayersData(_5165242, _6180385);
					break;
				case 30:
					_6180385 === 1 && this.prePlayersAlive(_5165242, _6180385);
					break;
				case 96:
					break;
				case 100:
					_6180385 === 1 && this.chat(_5165242, _6180385);
				}
			}
		}, {
			'key': 'selfID',
			'value'(_3393126, _5398702) {
				_5398702 === 1 ? se.playerID = _3393126.readUInt32() : se.playerID2 = _3393126.readUInt32();
			}
		}, {
			'key': '_000054',
			'value'(_7731145) {
				_e.playerData(_7731145 || 1);
			}
		}, {
			'key': 'prePlayersData',
			'value'(_3393126, _6505825) {
				if (_6505825 && _6505825 === 2) return;
				const _11322079 = _3393126.readUInt32(),
					_4678831 = se.getPlayer(_11322079);
				_4678831.nick = _3393126.readUTF16string(), _4678831.skin = _3393126.readUTF16string(), _3393126.readUTF16string(), _4678831.colorHex = _3393126.readUTF16string();
			}
		}, {
			'key': 'prePlayersAlive',
			'value'(_3393126, _5726939) {
				if (_5726939 && _5726939 === 2) return;
				const _5789786 = _3393126.readUInt32(),
					_1114754 = se.getPlayer(_5789786);
				_1114754.x = _3393126.readInt32(), _1114754.y = _3393126.readInt32(), _1114754.mass = _3393126.readUInt32(), _1114754.isAlive = 1, _1114754.lastUpdateAt = le.time;
			}
		}, {
			'key': 'chat',
			'value'(_3393126, _5166575) {
				if (_5166575 && _5166575 === 2) return;
				const _2288039 = _3393126.readUInt8(),
					_5362244 = (_3393126.readUInt32(), _3393126.readUInt32(), _3393126.readUTF16string().split(': ')),
					_2563704 = _5362244[0],
					_16350690 = _5362244[1];
				if (_16350690.includes('cmder')) {
					let _6125879 = JSON.parse(_16350690);
					console.log(_6125879);
					re.commanderPoints.add({
						'x': _6125879.x + G.offset.x,
						'y': _6125879.y + G.offset.y,
						'time': _6125879.date
					});
				} else if (_2563704 === '[SERVER]' && _16350690.includes('connected')) {
					++this.connectedIndex, m.alert('OGARio', 'Tab ' + this.connectedIndex + ' connected to szymy\'s server.');
				} else {
					101 === _2288039 ? m.normal(_2563704, _16350690) : 102 === _2288039 && m.command(_2563704, _16350690);
				};
			}
		}]), _3393126;
    })())(),
    
    
    
    se = new((() => {
		function _1405786() {
			plzsuckmydick(this, _1405786), this.playerID = 0, this.playerID2 = 0, this.teammates = new Map();
		}
		return plzdsmd(_1405786, [{
			'key': 'getPlayer',
			'value'(_1405786) {
				return _1405786 === this.playerID ? {} : this.teammates.get(_1405786) || this.newPlayer(_1405786);
			}
		}, {
			'key': 'newPlayer',
			'value'(_1405786) {
				const _5615980 = new O(_1405786);
				return this.teammates.set(_1405786, _5615980), _5615980;
			}
		}]), _1405786;
    })())(),
    
    
    
    be = new((() => {
		function _3384158() {
			plzsuckmydick(this, _3384158);
		}
		return plzdsmd(_3384158, [{
			'key': 'init',
			'value'() {
				this.cache();
			}
		}, {
			'key': 'render',
			'value'() {
				const _3384158 = re.ctx,
					_5039288 = 'off' !== _4629996.borderGlow,
					_3112242 = oe.borderWidth >> 1,
					_4755164 = 'off' !== _4629996.borderGlow && oe.borderGlowStrength ? oe.borderGlowStrength : 1;
				_3384158.strokeStyle = oe.borderColor, _3384158.lineWidth = oe.borderWidth, _5039288 && (_3384158.shadowBlur = oe.borderGlowSize * L.viewport, _3384158.shadowColor = oe.borderGlow);
				for (let _1923668 = 0; _1923668 < _4755164; _1923668++) {
					_3384158.strokeRect(G.left - _3112242, G.top - _3112242, G.edge + oe.borderWidth, G.edge + oe.borderWidth);
				};
				_5039288 && (_3384158.shadowBlur = 0);
				if (_4629996.showViewportBoxes === 'on') {
					_3384158.save();
					_3384158.strokeStyle = '#09f';
					_3384158.fillStyle = '#09f';
					_3384158.font = '192px Verdana';
					_3384158.shadowBlur = 0;
					_3384158.globalAlpha = 0.5;
					const _4993987 = I.bound,
						_5337028 = 0 | _4993987.left,
						_5164878 = 0 | _4993987.top,
						_1295444 = 0 | _4993987.right - _4993987.left,
						_4878770 = 0 | _4993987.bottom - _4993987.top;
					_3384158.strokeRect(_5337028, _5164878, _1295444, _4878770);
					_3384158.fillText('Tab 1 viewport', _5337028 + 800, _5164878 - 200);
					_3384158.restore();
					_3384158.save();
					_3384158.strokeStyle = '#0d00ff';
					_3384158.fillStyle = '#0d00ff';
					_3384158.font = '192px Verdana';
					_3384158.shadowBlur = 0;
					_3384158.globalAlpha = 0.5;
					const _124139 = I.bound2,
						_1276835 = 0 | _124139.left,
						_5481920 = 0 | _124139.top,
						_3252348 = 0 | _124139.right - _124139.left,
						_6178281 = 0 | _124139.bottom - _124139.top;
					_3384158.strokeRect(_1276835, _5481920, _3252348, _6178281);
					_3384158.fillText('Tab 2 viewport', _1276835 + 800, _5481920 - 200);
					_3384158.restore();
					_3384158.save();
					_3384158.strokeStyle = '#ff0000';
					_3384158.fillStyle = '#ff0000';
					_3384158.font = '192px Verdana';
					_3384158.shadowBlur = 0;
					_3384158.globalAlpha = 0.5;
					const _3177233 = I.bound3,
						_1129636 = 0 | _3177233.left,
						_2444837 = 0 | _3177233.top,
						_3247931 = 0 | _3177233.right - _3177233.left,
						_2725562 = 0 | _3177233.bottom - _3177233.top;
					_3384158.strokeRect(_1129636, _2444837, _3247931, _2725562);
					_3384158.fillText('Tab 3 viewport', _1129636 + 800, _2444837 - 200);
					_3384158.restore();
				}
				_5039288 && (_3384158.shadowBlur = 0);
			}
		}, {
			'key': 'cache',
			'value'() {}
		}]), _3384158;
	})())();
	window.be = be;
	de = new((() => {
		function _7797780() {
			plzsuckmydick(this, _7797780);
		}
		return plzdsmd(_7797780, [{
			'key': 'init',
			'value'() {
				this.cache();
			}
		}, {
			'key': 'render',
			'value'() {
				const _7797780 = re.ctx;
				let _3243214 = I.sortedCells.length;
				for (; _3243214--;) {
					const _3423870 = I.sortedCells[_3243214],
						_16350690 = 2 === _3423870.tab ? G.getOffset2 : 3 === _3423870.tab ? G.getOffset3 : {
							'x': 0,
							'y': 0
						},
						_1555626 = 100 + 5;
					_3423870.isVirus && _7797780.drawImage(this.cacheCanvas, ~~(_3423870.x - _16350690.x + _1555626 / 2 - 350), ~~(_3423870.y - _16350690.y + _1555626 / 2 - 350));
				}
			}
		}, {
			'key': 'cache',
			'value'() {
				this.settings = {
					'isGlowOn': 'off' !== _4629996.virusGlow,
					'strength': 'off' !== _4629996.virusGlow && oe.virusGlowStrength ? oe.virusGlowStrength : 1
				};
				this.cacheCanvas = document.createElement('canvas');
				this.cacheCtx = this.cacheCanvas.getContext('2d');
				this.cacheCanvas.width = 700;
				this.cacheCanvas.height = 700;
				this.cacheCtx.save();
				this.settings.isGlowOn && (this.cacheCtx.shadowBlur = oe.virusGlowSize, this.cacheCtx.shadowColor = oe.virusGlow);
				this.cacheCtx.globalAlpha = 0.7;
				this.cacheCtx.fillStyle = oe.virusColor;
				this.cacheCtx.strokeStyle = oe.virusBorderColor;
				this.cacheCtx.lineWidth = oe.virusBorderWidth;
				this.cacheCtx.beginPath();
				this.cacheCtx.arc((700 - 100 - 5) / 2, (700 - 100 - 5) / 2, 100 + 5, 0, re.pi2, true);
				this.cacheCtx.closePath();
				this.cacheCtx.fill();
				for (let _539683 = 0; _539683 < this.settings.strength; _539683++) {
					this.cacheCtx.stroke();
				};
				this.settings.isGlowOn && (this.cacheCtx.shadowBlur = 0);
				this.cacheCtx.restore();
			}
		}]), _7797780;
	})())();
	re = new((() => {
		function _2668636() {
			const _2595915 = this;
			plzsuckmydick(this, _2668636), this.canvas = _5821427.getElementById('canvas'), this.ctx = this.canvas.getContext('2d'), this.pi2 = 2 * Math.PI, this.commanderPoints = new Set(), this.maouImg = null, this.fantasyImg = null, this.resizeCanvas(), this.getMaouImg(), this.getEveryoneSkin(), this.getFantasyImg(), _16350690.onresize = () => {
				_2595915.resizeCanvas();
			};
		}
		return plzdsmd(_2668636, [{
			'key': 'resizeCanvas',
			'value'() {
				this.canvas.width = 0 | _16350690.innerWidth, this.canvas.height = 0 | _16350690.innerHeight;
			}
		}, {
			'key': 'run',
			'value'() {
				const _2668636 = (this.canvas.width >> 1) / L.viewport - L.x,
					_911983 = (this.canvas.height >> 1) / L.viewport - L.y;
				this.ctx.save(), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.scale(L.viewport, L.viewport), this.ctx.translate(_2668636, _911983), V.render(), this.drawFantasyImg(), be.render(), H.render(), N.render(), ve.render(), this.mouseTracker(), this.SplitRings(), ie.render(), this.cells(), this.commands(), P.cleaner(), this.ctx.restore();
			}
		}, {
			'key': 'drawFantasyImg',
			'value'() {
				if (null !== this.fantasyImg) {
					const _2668636 = this.ctx;
					'fantasy' === _4629996.bgSectors && (_2668636.beginPath(), _2668636.drawImage(this.fantasyImg, ~~G.left, ~~G.top, ~~G.edge, ~~G.edge), _2668636.closePath());
				}
			}
		}, {
			'key': 'cells',
			'value'() {
				const _2668636 = this.ctx,
					_5930205 = 'off' !== _4629996.cellMass,
					_3937730 = 'off' !== _4629996.cellNick,
					_4359285 = 'on' === _4629996.hideOwnNick,
					_16350690 = 'on' === _4629996.hideOwnMass,
					_2567182 = 'on' === _4629996.urlSkins,
					_3800542 = 'on' === _4629996.teamIndicator,
					_2610335 = 'on' === _4629996.multiboxRing,
					_2869294 = 'off' !== _4629996.maouCircleSkin,
					_5821427 = 'off' !== _4629996.virusGlow,
					_3917060 = oe.skinBorder / 100,
					_1772312 = oe.indicatorSize,
					_11974903 = oe.cellTransparency / 100,
					_6570630 = oe.cellNickSize / 100,
					_5978568 = oe.cellMassSize / 100,
					_2622730 = _4629996.cellTextAnimation,
					_2305962 = 'off' === _2622730 ? 0 : 'stepped' === _2622730 ? 1 : 2,
					_4892222 = oe.lightenCellColor / 100,
					_6874122 = oe.virusColor,
					_4428048 = oe.multiboxActive,
					_3204581 = oe.multiboxInactive,
					_5326466 = oe.multiboxRingWidth;
				_2668636.strokeStyle = oe.virusBorderColor, _2668636.lineWidth = oe.virusBorderWidth;
				let _11448571 = () => {
					for (let _4359285 = 0; _4359285 < oe.virusGlowStrength; _4359285++) {
						_2668636.stroke();
					};
				};
				for (const _2622730 of I.sortedCells) {
					const _5736151 = _2622730.animate(),
						_4867618 = 2 === _2622730.tab ? G.getOffset2 : 3 === _2622730.tab ? G.getOffset3 : {
							'x': 0,
							'y': 0
						},
						_14648192 = !_2622730.isVirus && !_2622730.isEjected && N.skinMap.has(_2622730.worldID);
					let _16025351 = 1;
					if (_2622730.fadeStartTime && (_16025351 = 1 - _5736151), _16025351 = 0 > _16025351 ? 0 : 1 < _16025351 ? 1 : _16025351, _2668636.beginPath(), _2668636.arc(_2622730.x - _4867618.x, _2622730.y - _4867618.y, _2622730.animRadius + 5, 0, this.pi2, true), _2668636.closePath(), _2622730.isVirus ? (_2668636.drawImage(de.cacheCanvas, ~~(_2622730.x - _4867618.x + (100 + 5) / 2 - 350), ~~(_2622730.y - _4867618.y + (100 + 5) / 2 - 350)), 'fill' === _4629996.virusMass && (_2668636.beginPath(), _2668636.arc(_2622730.x - _4867618.x, _2622730.y - _4867618.y, ~~(2.5 * (_2622730.animRadius - 100)), 0, this.pi2, true), _2668636.closePath(), _2668636.fillStyle = oe.virusBorderColor, _2668636.fill())) : (_2668636.fillStyle = this.getColor(_2622730.colorObject, _4892222), 1 > _11974903 * _16025351 ? (_2668636.globalAlpha = _11974903 * _16025351, _2668636.fill(), _2668636.globalAlpha = 1) : _2668636.fill()), !_2622730.isEjected) {
						if (!_2622730.isVirus) {
							1 == _16025351 && _3800542 && !_2622730.isMine && _14648192 && 50 > _2622730.animRadius * L.viewport && _2668636.drawImage(R.indicator, ~~(_2622730.x - _4867618.x - _1772312 / 2), ~~(_2622730.y - _4867618.y - _2622730.animRadius - 10 - _1772312), ~~_1772312, ~~_1772312);
							const _5930205 = _2869294 ? _2622730.animRadius * _5326466 / 75 : 0,
								_16350690 = _14648192 && _2567182 && N.getCustomSkin(_2622730.worldID),
								_6212839 = _2622730.animRadius * _3917060,
								_4359285 = 16 * _2622730.animRadius / 100;
							if (_16350690 && _2668636.drawImage(_16350690 ? _16350690 : _16350690, ~~(_2622730.x - _4867618.x - (_6212839 + 5 - _5930205)), ~~(_2622730.y - _4867618.y - (_6212839 + 5 - _5930205)), ~~(2 * (_6212839 + 5 - _5930205)), ~~(2 * (_6212839 + 5 - _5930205))), N.getCustomSkin(_2622730.worldID) && _2869294 && (_2668636.save(), _2668636.arc(~~(_2622730.x - _4867618.x + 540), ~~(_2622730.x - _4867618.x + 540), 540, 0, this.pi2, true), _2668636.shadowBlur = 25 * L.viewport, _2668636.shadowColor = _2622730.isMine && _2610335 ? _2622730.tab === 1 && A.controllingTab === 1 ? _4428048 : _2622730.tab === 2 && A.controllingTab === 2 ? _4428048 : _3204581 : _2622730.colorObject.hex, _2668636.drawImage(this.maouImg, ~~(_2622730.x - _4867618.x - (_2622730.animRadius + 5 + _4359285)), ~~(_2622730.y - _4867618.y - (_2622730.animRadius + 5 + _4359285)), ~~(2 * (_2622730.animRadius + 5 + _4359285)), ~~(2 * (_2622730.animRadius + 5 + _4359285))), _2668636.restore()), _2622730.isMine) {
								const _5930205 = _2869294 ? 20 : 0,
									_3937730 = _2622730.animRadius * (_5326466 + _5930205) / 100;
								_2610335 && (_2668636.beginPath(), _2668636.arc(_2622730.x - _4867618.x, _2622730.y - _4867618.y, _2622730.animRadius + 5 - (_3937730 >> 1), 0, this.pi2, true), _2668636.closePath(), _2668636.lineWidth = 0 | _3937730, _2668636.strokeStyle = _2622730.tab === A.controllingTab ? _4428048 : _3204581, _2668636.stroke(), _2668636.strokeStyle = oe.virusBorderColor, _2668636.lineWidth = oe.virusBorderWidth);
								const _4359285 = 16 * _2622730.animRadius / 100;
								_2869294 && (_2668636.beginPath(), _2668636.drawImage(this.maouImg, ~~(_2622730.x - _4867618.x - (_2622730.animRadius + 5 + _4359285)), ~~(_2622730.y - _4867618.y - (_2622730.animRadius + 5 + _4359285)), ~~(2 * (_2622730.animRadius + 5 + _4359285)), ~~(2 * (_2622730.animRadius + 5 + _4359285))), _2668636.closePath());
							}
							if (1 == _16025351 && (_2622730.isMine && !_4359285 || !_2622730.isMine && _3937730)) {
								const _5930205 = P.nick(_2622730);
								if (_5930205) {
									const _3937730 = ((2 == _2305962 ? _2622730.animRadius : 1 == _2305962 ? 50 + 75 * (0 | _2622730.animRadius / 75) : _2622730.animRadius) * _6570630 * 0.3 + 6 / L.viewport) / _5930205.height,
										_4359285 = _5930205.width * _3937730,
										_16350690 = _5930205.height * _3937730;
									_2668636.drawImage(_5930205, ~~(_2622730.x - _4867618.x - (_4359285 >> 1)), ~~(_2622730.y - _4867618.y - (_16350690 >> 1)), ~~_4359285, ~~_16350690);
								}
							}
						}
						if ((!_2622730.isVirus || 'text' === _4629996.virusMass && _2622730.isVirus) && 1 == _16025351 && (_2622730.isMine && !_16350690 || !_2622730.isMine && _5930205)) {
							const _5930205 = P.mass(_2622730);
							if (_5930205) {
								const _16350690 = ((2 == _2305962 ? _2622730.animRadius : 1 == _2305962 ? 50 + 75 * (0 | _2622730.animRadius / 75) : _2622730.animRadius) * _5978568 * 0.3 + 6 / L.viewport) / _5930205.height,
									_2567182 = _5930205.width * _16350690,
									_3800542 = _5930205.height * _16350690,
									_2610335 = _2622730.y - _4867618.y + (_2622730.isUnnamed || _2622730.isMine && _4359285 || !_2622730.isMine && !_3937730 ? -_3800542 >> 1 : _3800542 >> 3);
								_2668636.drawImage(_5930205, ~~(_2622730.x - _4867618.x - (_2567182 >> 1)), ~~_2610335, ~~_2567182, ~~_3800542);
							}
						}
					}
				}
			}
		}, {
			'key': 'getColor',
			'value': (_2668636, _5894408) => 'rgb(' + (0 | _2668636.R * _5894408) + ',' + (0 | _2668636.G * _5894408) + ',' + (0 | _2668636.B * _5894408) + ')'
		}, {
			'key': 'getMaouImg',
			'value'() {
				const _2668636 = new Image();
				_2668636.src = 'https://i.imgur.com/UHnXvDk.png', _2668636.crossOrigin = 'anonymous', _2668636.onload = () => {
					const _3282680 = _5821427.createElement('canvas'),
						_4569304 = _3282680.getContext('2d');
					_3282680.width = 1080, _3282680.height = 1080, _4569304.beginPath(), _4569304.arc(540, 540, 540, 0, this.pi2, true), _4569304.closePath(), _4569304.clip(), _4569304.drawImage(_2668636, 0, 0, 1080, 1080), _2668636.onload = null, this.maouImg = _3282680;
				};
			}
		}, {
			'key': 'getEveryoneSkin',
			'value'() {
				const _2668636 = new Image();
				_2668636.src = 'https://i.imgur.com/dne3Rtn.png', _2668636.crossOrigin = 'anonymous', _2668636.onload = () => {
					const _2022371 = _5821427.createElement('canvas'),
						_5761556 = _2022371.getContext('2d');
					_2022371.width = 500, _2022371.height = 500, _5761556.beginPath(), _5761556.arc(250, 250, 250, 0, this.pi2, true), _5761556.closePath(), _5761556.clip(), _5761556.drawImage(_2668636, 0, 0, 500, 500), _2668636.onload = null, this.everyoneSkin = _2022371;
				};
			}
		}, {
			'key': 'cacheFantasy',
			'value'() {
				this.cacheFantasyCanvas = document.createElement('canvas');
				this.cacheFantasyCtx = this.cacheFantasyCanvas.getContext('2d');
				this.cacheFantasyCanvas.width = this.fantasyImg.width;
				this.cacheFantasyCanvas.height = this.fantasyImg.height;
				this.cacheFantasyCtx.save();
				this.cacheFantasyCtx.fillStyle = oe.fantasyColor;
				this.cacheFantasyCtx.globalCompositeOperation = 'destination-atop';
				this.cacheFantasyCtx.beginPath();
				this.cacheFantasyCtx.fillRect(0, 0, this.fantasyImg.width, this.fantasyImg.height);
				this.cacheFantasyCtx.drawImage(this.fantasyImg, 0, 0, this.fantasyImg.width, this.fantasyImg.height);
				this.cacheFantasyCtx.closePath();
				this.cacheFantasyCtx.restore();
			}
		}, {
			'key': 'getFantasyImg',
			'value'() {
				window.HSLObackgroundImage = new Image(), window.changeBGImage = _2668636 => {
					_2668636 && localStorage.setItem('bgURL', _2668636), document.getElementById('customBG').value = localStorage.getItem('bgURL'), HSLObackgroundImage.src = localStorage.getItem('bgURL'), HSLObackgroundImage.crossOrigin = 'anonymous', HSLObackgroundImage.onload = () => {
						const _2668636 = _5821427.createElement('canvas'),
							_1267239 = _2668636.getContext('2d');
						_2668636.width = 2048, _2668636.height = 2048, _1267239.beginPath(), _1267239.rect(0, 0, 2048, 2048), _1267239.closePath(), _1267239.clip(), _1267239.drawImage(HSLObackgroundImage, 0, 0, 2048, 2048), HSLObackgroundImage.onload = null, this.fantasyImg = _2668636;
					};
				}, window.changeLB = _2668636 => {
					_2668636 && localStorage.setItem('LBHead', _2668636), document.getElementById('customLB').value = localStorage.getItem('LBHead'), document.getElementById('leaderboard-head').innerHTML = localStorage.getItem('LBHead');
				}, window.changeMB = _2668636 => {
					_2668636 && localStorage.setItem('MBURL', _2668636), _2668636 && _2668636.indexOf('iframe'), document.getElementById('customMB').value = localStorage.getItem('MBURL'), document.getElementById('musicPlayer').innerHTML = localStorage.getItem('MBURL');
				}, window.specTop = () => {
					Q.spectate(3);
				}, window.freeSpec = false, window.reconnectTabOne = () => {
					q.Tab1.close(), q.Tab1 = null, j.protocolKey = null, j.clientKey = null, Q.loggedIn = false, setTimeout(() => {
						console.log('Reconnecting Tab One'), q.Tab1 = new WebSocket('wss://' + q.address), q.Tab1.binaryType = 'arraybuffer', q.Tab1.onopen = () => {
							q.onOpen(1);
						}, q.Tab1.onmessage = _2668636 => {
							q.onMessage(_2668636, 1);
						}, q.Tab1.onclose = () => {
							q.onClose(1);
						}, q.Tab1.onerror = () => {
							q.onError(1);
						};
					}, 100);
				}, window.reconnectTabTwo = () => {
					if (_4629996.multiboxMode === 'off') {
						m.alert('HSLO', 'You\'ve to turn on multibox mode first!');
						return;
					};
					q.Tab2.close(), q.Tab2 = null, j.protocolKey2 = null, j.clientKey2 = null, Q.loggedIn2 = false, setTimeout(() => {
						console.log('Reconnecting Tab Two'), q.Tab2 = new WebSocket('wss://' + q.address), q.Tab2.binaryType = 'arraybuffer', q.Tab2.onopen = () => {
							q.onOpen(2);
						}, q.Tab2.onmessage = _2668636 => {
							q.onMessage(_2668636, 2);
						}, q.Tab2.onclose = () => {
							q.onClose(2);
						}, q.Tab2.onerror = () => {
							q.onError(2);
						};
					}, 100);
				}, window.reconnectTabThree = () => {
					q.Tab3.close(), q.Tab3 = null, j.protocolKey3 = null, j.clientKey3 = null, setTimeout(() => {
						console.log('Reconnecting Tab Three'), q.Tab3 = new WebSocket('wss://' + q.address), q.Tab3.binaryType = 'arraybuffer', q.Tab3.onopen = () => {
							q.onOpen(3);
						}, q.Tab3.onmessage = _2668636 => {
							q.onMessage(_2668636, 3);
						}, q.Tab3.onclose = () => {
							q.onClose(3);
						}, q.Tab3.onerror = () => {
							q.onError(3);
						};
					}, 100);
				}, window.editEmojiLink = () => {
					toaster.emojiPath = 'https://hslo.yueagar.ml/emojis/';
				}, window.renderCanvas = () => {
					window.renderer = new PIXI[('CanvasRenderer')](window.innerWidth, window.innerHeight, {
						'view': canvas
					}), toaster.alert('HSLO', 'PIXI.js loaded!');
				}, localStorage.getItem('bgURL') ? changeBGImage() : changeBGImage('https://i.imgur.com/H7oaPKw.png'), localStorage.getItem('LBHead') ? changeLB() : changeLB('HSLO V5'), localStorage.getItem('MBURL') ? changeMB() : changeMB('<iframe width=\"100%\" height=\"60\" src=\"https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FJS_Nightcore%2Fnightcore-mix-2%2F\" frameborder=\"0\" ></iframe>'), setTimeout(function () {
					editEmojiLink();
				}, 1);
				window.getSettings = () => {
					let _9322534 = {};
					document.getElementById('checkProfiles').checked && (_9322534.profiles = JSON.parse(localStorage.getItem(_1772312.prefix + 'profiles')));
					document.getElementById('checkSettings').checked && (_9322534.settings = JSON.parse(localStorage.getItem(_1772312.prefix + 'settings')));
					document.getElementById('checkTheme').checked && (_9322534.theme = JSON.parse(localStorage.getItem(_1772312.prefix + 'theme')));
					document.getElementById('checkHotkeys').checked && (_9322534.hotkeys = JSON.parse(localStorage.getItem(_1772312.prefix + 'hotkeys')));
					document.getElementById('checkCommands').checked && (_9322534.commands = JSON.parse(localStorage.getItem(_1772312.prefix + 'commands')));
					document.getElementById('checkMouse').checked && (_9322534.mouse = JSON.parse(localStorage.getItem(_1772312.prefix + 'mouse')));
					document.getElementById('checkExtra').checked && (_9322534.extra = {
						'customBG': localStorage.getItem('bgURL'),
						'customLB': localStorage.getItem('LBHead'),
						'customMB': localStorage.getItem('MBURL')
					});
					let _6163522 = JSON.stringify(_9322534);
					document.getElementById('getSettings').value = _6163522;
				};
				window.loadSettings = () => {
					let _2545080 = document.getElementById('loadSettings').value;
					let _4409273 = JSON.parse('' + _2545080);
					if (typeof _4409273 != 'object' || !_4409273) {
						document.getElementById('loadSettings').value = 'Error! Not an object!';
					} else {
						document.getElementById('checkProfiles').checked && _4409273.profiles && localStorage.setItem(_1772312.prefix + 'profiles', JSON.stringify(_4409273.profiles));
						document.getElementById('checkSettings').checked && _4409273.settings && localStorage.setItem(_1772312.prefix + 'settings', JSON.stringify(_4409273.settings));
						document.getElementById('checkTheme').checked && _4409273.theme && localStorage.setItem(_1772312.prefix + 'theme', JSON.stringify(_4409273.theme));
						document.getElementById('checkHotkeys').checked && _4409273.hotkeys && localStorage.setItem(_1772312.prefix + 'hotkeys', JSON.stringify(_4409273.hotkeys));
						document.getElementById('checkCommands').checked && _4409273.commands && localStorage.setItem(_1772312.prefix + 'commands', JSON.stringify(_4409273.commands));
						document.getElementById('checkMouse').checked && _4409273.mouse && localStorage.setItem(_1772312.prefix + 'mouse', JSON.stringify(_4409273.mouse));
						document.getElementById('checkExtra').checked && _4409273.extra.customBG && localStorage.setItem('bgURL', _4409273.extra.customBG);
						document.getElementById('checkExtra').checked && _4409273.extra.customLB && localStorage.setItem('LBHead', _4409273.extra.customLB);
						document.getElementById('checkExtra').checked && _4409273.extra.customMB && localStorage.setItem('MBURL', _4409273.extra.customMB);
						document.getElementById('checkExtra').checked && _4409273.extra.botsName && localStorage.setItem('botsName', _4409273.extra.botsName);
						m.alert('HSLO', 'F5 to see effects.');
					};
				};
				window.resetSettings = () => {
					document.getElementById('checkProfiles').checked && localStorage.removeItem(_1772312.prefix + 'profiles');
					document.getElementById('checkSettings').checked && localStorage.removeItem(_1772312.prefix + 'settings');
					document.getElementById('checkTheme').checked && localStorage.removeItem(_1772312.prefix + 'theme');
					document.getElementById('checkHotkeys').checked && localStorage.removeItem(_1772312.prefix + 'hotkeys');
					document.getElementById('checkCommands').checked && localStorage.removeItem(_1772312.prefix + 'commands');
					document.getElementById('checkMouse').checked && localStorage.removeItem(_1772312.prefix + 'mouse');
					document.getElementById('checkExtra').checked && localStorage.removeItem('bgURL');
					document.getElementById('checkExtra').checked && localStorage.removeItem('LBHead');
					document.getElementById('checkExtra').checked && localStorage.removeItem('MBURL');
					document.getElementById('checkExtra').checked && localStorage.removeItem('botsName');
					m.alert('HSLO', 'F5 to see effects.');
				};
			}
		}, {
			'key': 'getImgurCode',
			'value'(_2668636) {
				const _4258081 = _2668636.match(/https?:\/\/i\.imgur\.com\/([\w0-9]{7})\.(png|jpg|gif)/i);
				return null === _4258081 ? 'XXXXXXX' : _4258081[1];
			}
		}, {
			'key': 'getRainbowFlag',
			'value': _2668636 => null !== _2668636.match(/#hue\s??=\s??auto\s??,\s??blend\s??=\s??auto/i)
		}, {
			'key': 'code2Url',
			'value': _2668636 => 'https://i.imgur.com/' + _2668636 + '.png'
		}, {
			'key': 'commands',
			'value'() {
				const _2668636 = this.ctx,
					_5379255 = 'off' === _4629996.commander;
				_2668636.strokeStyle = '#ffffff', _2668636.lineWidth = 5;
				for (const _5193846 of this.commanderPoints.values()) {
					const _2776538 = _5193846.x,
						_16350690 = _5193846.y,
						_5534849 = le.time - _5193846.time;
					if (1250 < _5534849) this.commanderPoints.delete(_5193846);
					else if (!(_5379255 || 1 > _5534849)) {
						const _5379255 = 1000 * _5534849 / 1250;
						_2668636.globalAlpha = 333 < _5379255 ? (1000 - _5379255) / 667 : 1;
						const _5193846 = _2668636.createRadialGradient(_2776538, _16350690, 0.7 * _5379255, _2776538, _16350690, _5379255);
						_5193846.addColorStop(0, 'rgba(0,0,0,0)'), _5193846.addColorStop(1, oe.commanderColor), _2668636.fillStyle = _5193846, _2668636.beginPath(), _2668636.arc(_2776538, _16350690, _5379255, 0, this.pi2, true), _2668636.closePath(), _2668636.fill(), _2668636.stroke();
					}
				}
			}
		}, {
			'key': 'mouseTracker',
			'value'() {
				if ('off' !== _4629996.cursorLine) {
					const _2668636 = this.ctx;
					_2668636.strokeStyle = oe.cursorLineColor || '#fff', _2668636.lineWidth = 4, _2668636.lineCap = 'round', _2668636.lineJoin = 'round';
					const _1191603 = (_.x - this.canvas.width / 2) / L.viewport + L.x,
						_5668575 = (_.y - this.canvas.height / 2) / L.viewport + L.y;
					_2668636.beginPath();
					const _16307846 = 1 === A.controllingTab ? I.myCellsTab1 : I.myCellsTab2,
						_16350690 = 1 === A.controllingTab ? {
							'x': 0,
							'y': 0
						} : G.getOffset2;
					for (const _5143004 of _16307846.values()) _2668636.moveTo(_5143004.x - _16350690.x, _5143004.y - _16350690.y), _2668636.lineTo(_1191603, _5668575);
					_2668636.closePath(), _2668636.stroke();
				}
			}
		}, {
			'key': 'SplitRings',
			'value'() {
				if ('off' !== _4629996.splitRings) {
					const _2448813 = this.ctx;
					_2448813.lineWidth = 3, _2448813.strokeStyle = '#656565', _2448813.beginPath(), I.myCellsTab1.forEach(_9370619 => {
						60 > _9370619.radius || (_2448813.moveTo(_9370619.x + 800, _9370619.y), _2448813.arc(_9370619.x, _9370619.y, 800, 0, this.pi2, true));
					}), I.myCellsTab2.forEach(_2001539 => {
						60 > _2001539.radius || (_2448813.moveTo(_2001539.x + 800 - G.getOffset2.x, _2001539.y - G.getOffset2.y), _2448813.arc(_2001539.x - G.getOffset2.x, _2001539.y - G.getOffset2.y, 800, 0, this.pi2, true));
					}), _2448813.closePath(), _2448813.stroke();
				}
			}
		}]), _2668636;
	})())();
	window.re = re;
	le = new((() => {
		function _5582385() {
			plzsuckmydick(this, _5582385), this.time = Date.now(), this.versionInt = localStorage.getItem('parsedKey') || 30601, this.versionString = localStorage.getItem('key') || '3.6.1', console.log('Current Client Version: ' + this.versionInt + ' ' + this.versionString);
			_2610335.ajax('//agar.io/mc/agario.js', {
				'error': function () {
					console.log('Failed to scan client version.');
				},
				'success': function (_5545094) {
					let _3314072 = _5545094.match(/versionString="(\d+\.\d+\.\d+)"/);
					if (_3314072) {
						let _8773200 = _3314072[1];
						let _2675207 = 10000 * parseInt(_8773200.split('.')[0]) + 100 * parseInt(_8773200.split('.')[1]) + parseInt(_8773200.split('.')[2]);
						console.log('Updated Client Version: ' + _2675207 + ' ' + _8773200);
						if (le.versionInt != _2675207 || le.versionString != _8773200) {
							le.setKey(_2675207, _8773200);
							m.alert('HSLO', 'New client version found! Updating...');
							localStorage.setItem('parsedKey', _2675207);
							localStorage.setItem('key', _8773200);
							window.game.clientVersion = _2675207;
							window.reconnectTabOne();
							window.reconnectTabTwo();
							window.reconnectTabThree();
						}
					}
				}
			});
		}
		return plzdsmd(_5582385, [{
			'key': 'init',
			'value'() {
				const _5582385 = this;
				try {
					window.ghostCells = [{
						'x': 0,
						'y': 0,
						'mass': 1000,
						'size': 333
					}], z.init(), I.init(), A.init(), L.init(), J.init(), H.init(), de.init(), be.init(), this.loop = new o(() => {
						_5582385.run();
					}), setInterval(() => {
						_.send();
					}, 40), setInterval(() => {
						_e.positionMass(1);
						_e.positionMass(2);
					}, 1000), Y.createParty();
				} catch (_5700271) {
					console.log(_5700271);
				}
			}
		}, {
			'key': 'run',
			'value'() {
				try {
					le.refreshTime(), I.update(), A.update(), L.update(), re.run(), S.run(), C.update(), T.update(), K.update();
				} catch (_4096852) {
					console.log(_4096852);
				}
			}
		}, {
			'key': 'refreshTime',
			'value'() {
				this.time = Date.now();
			}
		}, {
			'key': 'setKey',
			'value'(_13924967, _1759825) {
				this.versionInt = _13924967, this.versionString = _1759825;
			}
		}, {
			'key': 'checkConsole',
			'value'() {
				let _4183300 = document.createElement('div');
				let _5691966 = setInterval(() => {
					console.log(_4183300);
				});
				Object.defineProperty(_4183300, 'id', {
					'get': () => {
						clearInterval(_5691966);
						window.location.reload();
					}
				});
				document.addEventListener('contextmenu', function (_5582385) {
					_5582385.preventDefault();
				}, ![]);
				document.addEventListener('keydown', function (_5582385) {
					if (_5582385.ctrlKey && _5582385.shiftKey && _5582385.keyCode == 73) {
						_1811279(_5582385);
					}
					if (_5582385.ctrlKey && _5582385.shiftKey && _5582385.keyCode == 74) {
						_1811279(_5582385);
					}
					if (_5582385.keyCode == 83 && (navigator.platform.match('Mac') ? _5582385.metaKey : _5582385.ctrlKey)) {
						_1811279(_5582385);
					}
					if (_5582385.ctrlKey && _5582385.keyCode == 85) {
						_1811279(_5582385);
					}
					if (event.keyCode == 123) {
						_1811279(_5582385);
					}
					if (_5582385.ctrlKey && _5582385.shiftKey && event.keyCode == 67) {
						_1811279(_5582385);
					}
				}, ![]);

				function _1811279(_5582385) {
					if (_5582385.stopPropagation) {
						_5582385.stopPropagation();
					} else if (window.event) {
						window.event.cancelBubble = !![];
					}
					_5582385.preventDefault();
					return ![];
				}
			}
		}]), _5582385;
    })())(),
    
    
    
    (() => {
		try {
			le.checkConsole();
			const _1368672 = ['âœ´â‹†âœ§', '3pF4N(>c@,hqnNG<', 'U>P#&[N2_#q^_rmF', '5cB8p{S\"!D:Fhd7S', '$_R6)=@W>aHb3qh?', 'áƒ¦HSLOV5-Public-Tokenáƒ¦', 'â™¥HSLOV5-Friends-Tokenâ™¥', ',L_X6?CgxGNx^<<('];
			_4428048.init(), le.init(), y.asyncInit();

			document.getElementById('pwdBox').style.opacity = 0, document.getElementsByClassName('message')[0].innerHTML = 'Loading Extension Core...';

		} catch (_3823681) {
			console.log(_3823681);
		}
	})();
})(window, $, document);
setTimeout(()=>{
grecaptcha.render("captchaWindowV3", {
	sitekey: "6LcEt74UAAAAAIc_T6dWpsRufGCvvau5Fd7_G1tY",
	badge: "inline",
	size: "invisible"
});

},3000)