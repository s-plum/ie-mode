# Internet Explorer Mode Detection

A simple way to help your clients detect what browser/document mode they are using in Internet Explorer.

Have you ever been in a situation where a client is complaining about how their site is rendering in IE9 or 10? Ugh. Who hasn't? More times than not, the browser is running in forced compatibility mode. While you *could* walk them through the steps to help troubleshoot the issue, you can confirm it easily by downloading and connecting to a simple script.

## Usage

Download and add the following script to your site: `detect.js`

Then simply point to it:

`<script src="js/ie-mode/detect.js"></script>`

To test the page, fire up IE and run the IE Developer Toolbar (F12) to switch modes. If you don't know how to toggle between modes, check out [Testing sites with Browser Mode vs. Doc Mode](http://blogs.msdn.com/b/ie/archive/2010/10/19/testing-sites-with-browser-mode-vs-doc-mode.aspx)

To see an example of what the client will see, check out `example.html`.

Happy coding! Fight for web standards! Blue beanies on!
