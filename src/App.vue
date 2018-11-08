<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>

        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <h2>{{ title | reverse }}</h2>

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <p>{{ simpleText | count-words }}</p>

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <h2>{{ reversedTitle }}</h2>
        <p>{{ countedText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import computedMixin from './computedMixin.js';

export default {
  // Exercise 4
  // Share the Computed Property rebuilding Exercise 2 via a Mixin
  mixins: [computedMixin],
	filters: {
		reverse(val) {
			return [...val].reverse().join('');
		},
	},
};
</script>

<style>
</style>
