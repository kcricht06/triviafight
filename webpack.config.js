var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry : [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output : {
    path : __dirname,
    filename: './public/bundle.js'
  },
  resolve : {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Chat: 'app/components/Chat.jsx',
      Nav: 'app/components/Nav.jsx',
      Footer: 'app/components/Footer.jsx',
      Logos: 'app/components/Logos.jsx',
      Weather: 'app/components/Weather.jsx',
      About: 'app/components/About.jsx',
			Timer: 'app/components/Timer.jsx',
			CountdownForm: 'app/components/CountdownForm.jsx',
			Countdown: 'app/components/Countdown.jsx',
			Controls: 'app/components/Controls.jsx',
			Clock: 'app/components/Clock.jsx',
      Examples: 'app/components/Examples.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      applicationStyles: 'app/styles/app.scss',

    },
    extensions: ['', '.js', '.jsx']
  },
  // because the entry file is jsx we require a loader to get it started
  // babe-loader takes our files pass them through react, get output and run them through es2015 as well
  // preset tells babel what to do
  module : {
    loaders : [
      {
        loader : 'babel-loader',
        query : {
                presets: ['react', 'es2015']
                },
        test : /\.jsx?$/,
        exclude : /(node_modules | bower_components)/
      },
      {
	       test: /\.png$/,
	       loader: "url-loader?mimetype=image/png"
	     }, {
	       test: /\.jpg$/,
	       loader: "url-loader?mimetype=image/jpg"
	     }
	    ]
		},
		sassLoader: {
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss')
		]
	},
	devtool: 'cheap-module-eval-source-map'
};
