<template>
	<div class="layout-pd">
		<el-card shadow="hover">
			这里是首页
			<div>
				<VxeTem />
			</div>
		</el-card>
	</div>
</template>

<script setup lang="ts" name="home">
import { defineAsyncComponent } from 'vue'
// 引入组件
const VxeTem = defineAsyncComponent(() => import('/@/views/home/vxeTem.vue'));



</script>

<style scoped lang="scss">

</style>
