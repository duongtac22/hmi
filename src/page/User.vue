<template>
    <form  class="justify-center items-center w-full bg-white px-6 flex flex-col lg:w-1/2 xl:w-1/3 m-auto">
        <h2 class="text-2xl mb-4 mt-[20px]">Đăng nhập</h2>
        <div class="w-full p-2 justify-start flex flex-col">
            <div class=" flex flex-row">
                <span class="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0 border-blue" mode="render" block="">
                    <font-awesome-icon class="text-[18px] text-blue" :icon="['fa','user']" />
                </span>
                <input value="" class="border border-blue rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-3 shadow-0" id="username" name="" required="false" placeholder="username">
            </div>
            
            <div class="my-4 flex flex-row">
                <span class="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0 border-blue" mode="render" block="">
                   <font-awesome-icon class="text-[18px] text-blue" :icon="['fa','key']" />
                </span>
                <input type="password" value="" class="h-10 border border-blue rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-3 shadow-0" id="password" name="" placeholder="password" required="false" autocomplete="true">
            </div>
            <button value="button" class="px-4 py-2 rounded bg-blue text-white my-4 w-full">Đăng nhập</button>
        </div>
    </form>
</template>

<script>
export default {

}
</script>

<style>

</style>