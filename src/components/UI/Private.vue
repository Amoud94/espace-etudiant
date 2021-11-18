<template>
	<div id="private">
		<nav-header/>
		<div class="ui tow column grid">
			<div class="four wide column">
				<nav-side-bar/>
			</div>
			<div class="twelve wide column" id="view">
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script>

	import NavHeader from "@/components/nav-bars/NavHeader.vue";
	import NavSideBar from "@/components/nav-bars/NavSideBar.vue";

	export default {
		components: {
			NavHeader,
			NavSideBar,
		}
	};
</script>

<style>
	#private {
		height: 650px;
	}

	#view {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding-top: 80px;
		padding-right: 40px;
	}
</style>
