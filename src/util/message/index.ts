export interface InjectedJavaScript {
  os: 'ios' | 'android' | 'windows' | 'macos' | 'web';
  width: number;
  height: number;
}

export const getInjectedJavaScript = (args: InjectedJavaScript) => {
  const {os, width, height} = args;

  return `
	const meta = document.createElement('meta');
		meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, maximum-scale=1.0, target-densityDpi=device-dpi');
		meta.setAttribute('name', 'viewport');
		document.getElementsByTagName('head')[0].appendChild(meta);
		const styleSheet = document.createElement("style")
		styleSheet.type = "text/css"
    window.appWidth = ${width}
    window.appHeight = ${height}
    window.os = ${os}
		document.head.appendChild(styleSheet);
		document.cookie = device_type=${os};close_drawer=true;
		(function() {
					history.pushState = wrap(history.pushState);
					history.replaceState = wrap(history.replaceState);
					window.addEventListener('popstate', function() {
						window.ReactNativeWebView.postMessage(window.location.href);
					});					
		})();
`;
};
