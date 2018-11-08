export default {
	data() {
		return {
			title: 'This is a title of the application',
			simpleText: 'For detailed explanation on how things work, consult the docs for vue-loader.',
		};
  },
	computed: {
		reversedTitle() {
			return [...this.title].reverse().join('');
		},
		countedText() {
      const wordsCount = this.simpleText.split(' ').length;
      return `${this.simpleText} (${wordsCount})`;
		},
	},
};