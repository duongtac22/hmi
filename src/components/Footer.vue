<template>
  <div class="footer flex flex-col mt-4">
    <div class="flex justify-start px-3 py-2 w-full">
      <div class="form-check form-switch text-gray-200">
        <input class="form-check-input appearance-none w-9 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="switchonoff" checked>
        <label class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200" for="switchonoff">Switch On/Off</label>
      </div>
    </div>
    <div class="flex justify-start px-3 py-2 w-full">
      <div class="form-check form-switch text-gray-200">
        <input class="form-check-input appearance-none w-9 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="switchchannel" checked>
        <label class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200" for="switchchannel">Switch Channel</label>
      </div>
    </div>
    

    <div class="mt-4">
      <button type="button" class="border-white border-[2px] rounded-[15px] text-white text-[14px] flex items-center justify-center w-full h-full py-[10px] px-[15px]">
        25-Mar-2022<br>
        06:19:45 PM
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .check-option-gr .active{
    background-color: #fff;
    color: #333;
  }
  .form-check-input:checked {
    background-color: #0d6efd;
    border-color: #0d6efd
  }

  .form-check-input:checked[type=checkbox] {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e")
  }

  .form-check-input:checked[type=radio] {
      background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%22-4 -4 8 8%22%3E%3Ccircle r=%222%22 fill=%22%23fff%22/%3E%3C/svg%3E")
  }

  .form-check-input[type=checkbox]:indeterminate {
      background-color: #0d6efd;
      border-color: #0d6efd;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e")
  }

  .form-check-input:disabled {
      pointer-events: none;
      filter: none;
      opacity: .5
  }
  .form-switch .form-check-input {
      margin-top: .1rem;
      background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%22-4 -4 8 8%22%3E%3Ccircle r=%223%22 fill=%22%23fff%22/%3E%3C/svg%3E");
      background-position: 0;
      transition: background-position .15s ease-in-out
  }

  .form-switch .form-check-input:focus {
      background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%22-4 -4 8 8%22%3E%3Ccircle r=%223%22 fill=%22%23fff%22/%3E%3C/svg%3E")
  }

  .form-switch .form-check-input:checked {
      background-position: 100%;
      background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%22-4 -4 8 8%22%3E%3Ccircle r=%223%22 fill=%22%23fff%22/%3E%3C/svg%3E")
  }

  .form-check-inline {
      display: inline-block;
      margin-right: 1rem
  }
</style>