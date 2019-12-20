<template>
  <div class="contract-menu" :class="showContractMenu?'on':''">
    <p class="menu-icon" @click="showContractMenu = !showContractMenu">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</p>
    <slot>

    </slot>
  </div>
</template>

<script>
export default {
	name: 'menuPlu',
  data() {
    return{
			showContractMenu: false,//是否展示导出等操作菜单
    }
  }
}
</script>
