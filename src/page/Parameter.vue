<template>
    <div class="bg-blue flex text-white w-full ">
            <div class="flex w-full px-5">
                <div class="p-4 grow  text-center">Parameter</div>
                <div class="p-4 w-[110px] text-center">Unit</div>
                <div class="p-4 w-[110px] text-center">Value</div>
            </div>
    </div>
    <div class="overflow-y-scroll w-full" style="height: 50vh;">
        <ul class="tree">
            <li>
                <div class="flex w-full">
                    <div class="grow text-left">Root </div>
                    <div class="w-[110px] text-center"></div>
                    <div class="w-[110px] text-center"></div>
                </div>
                <ul>
                    <li>
                        <div class="flex w-full">
                            <div class="grow px-5 text-left">Sub 1</div>
                            <div class="w-[110px] text-center">V</div>
                            <div class="w-[110px] text-center">542.58</div>
                        </div>
                    </li>
                    <li>
                        <div class="flex w-full">
                            <div class="grow px-5 text-left">Sub 2</div>
                            <div class="w-[110px] text-center">A</div>
                            <div class="w-[110px] text-center">13.800</div>
                        </div>
                    <ul>
                        <li>
                            <div class="flex w-full">
                                <div class="grow px-5 text-left">Sub 2.1</div>
                                <div class="w-[110px] text-center">A</div>
                                <div class="w-[110px] text-center">542.58</div>
                            </div>
                            <ul>
                                <li>
                                    <div class="flex w-full">
                                        <div class="grow px-5 text-left">Sub 2.1.1</div>
                                        <div class="w-[110px] text-center">A</div>
                                        <div class="w-[110px] text-center">542.58</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex w-full">
                                        <div class="grow px-5 text-left">Sub 2.1.2</div>
                                        <div class="w-[110px] text-center">A</div>
                                        <div class="w-[110px] text-center">13.800</div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div class="flex w-full">
                                <div class="grow px-5 text-left">Sub 2.2</div>
                                <div class="w-[110px] text-center">A</div>
                                <div class="w-[110px] text-center">13.800</div>
                            </div>
                        </li>
                    </ul>
                    </li>
                    <li>
                        <div class="flex w-full">
                            <div class="grow px-5 text-left">Sub 2.3</div>
                            <div class="w-[110px] text-center">A</div>
                            <div class="w-[110px] text-center">542.58</div>
                        </div>
                    </li>
                     <li>
                        <div class="flex w-full">
                            <div class="grow px-5 text-left">Sub 1</div>
                            <div class="w-[110px] text-center">V</div>
                            <div class="w-[110px] text-center">542.58</div>
                        </div>
                    </li>
                    <li>
                        <div class="flex w-full">
                            <div class="grow px-5 text-left">Sub 2</div>
                            <div class="w-[110px] text-center">A</div>
                            <div class="w-[110px] text-center">13.800</div>
                        </div>
                    <ul>
                        <li>
                            <div class="flex w-full">
                                <div class="grow px-5 text-left">Sub 2.1</div>
                                <div class="w-[110px] text-center">A</div>
                                <div class="w-[110px] text-center">542.58</div>
                            </div>
                            <ul>
                                <li>
                                    <div class="flex w-full">
                                        <div class="grow px-5 text-left">Sub 2.1.1</div>
                                        <div class="w-[110px] text-center">A</div>
                                        <div class="w-[110px] text-center">542.58</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex w-full">
                                        <div class="grow px-5 text-left">Sub 2.1.2</div>
                                        <div class="w-[110px] text-center">A</div>
                                        <div class="w-[110px] text-center">13.800</div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div class="flex w-full">
                                <div class="grow px-5 text-left">Sub 2.2</div>
                                <div class="w-[110px] text-center">A</div>
                                <div class="w-[110px] text-center">13.800</div>
                            </div>
                        </li>
                    </ul>
                    </li>
                    <li>
                        <div class="flex w-full">
                            <div class="grow px-5 text-left">Sub 2.3</div>
                            <div class="w-[110px] text-center">A</div>
                            <div class="w-[110px] text-center">542.58</div>
                        </div>
                    </li>
                     <li>
                        <div class="flex w-full">
                            <div class="grow px-5 text-left">Sub 1</div>
                            <div class="w-[110px] text-center">V</div>
                            <div class="w-[110px] text-center">542.58</div>
                        </div>
                    </li>
                    <li>
                        <div class="flex w-full">
                            <div class="grow px-5 text-left">Sub 2</div>
                            <div class="w-[110px] text-center">A</div>
                            <div class="w-[110px] text-center">13.800</div>
                        </div>
                    <ul>
                        <li>
                            <div class="flex w-full">
                                <div class="grow px-5 text-left">Sub 2.1</div>
                                <div class="w-[110px] text-center">A</div>
                                <div class="w-[110px] text-center">542.58</div>
                            </div>
                            <ul>
                                <li>
                                    <div class="flex w-full">
                                        <div class="grow px-5 text-left">Sub 2.1.1</div>
                                        <div class="w-[110px] text-center">A</div>
                                        <div class="w-[110px] text-center">542.58</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex w-full">
                                        <div class="grow px-5 text-left">Sub 2.1.2</div>
                                        <div class="w-[110px] text-center">A</div>
                                        <div class="w-[110px] text-center">13.800</div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div class="flex w-full">
                                <div class="grow px-5 text-left">Sub 2.2</div>
                                <div class="w-[110px] text-center">A</div>
                                <div class="w-[110px] text-center">13.800</div>
                            </div>
                        </li>
                    </ul>
                    </li>
                    <li>
                        <div class="flex w-full">
                            <div class="grow px-5 text-left">Sub 2.3</div>
                            <div class="w-[110px] text-center">A</div>
                            <div class="w-[110px] text-center">542.58</div>
                        </div>
                    </li>
                </ul>
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {

}
</script>



<style>


.tree,
.tree ul {
  margin:0 0 0 1em; /* indentation */
  padding:0;
  list-style:none;
  color:#369;
  position:relative;
}

.tree ul {margin-left:.5em} /* (indentation/2) */
.tree ul ul { margin-left : 1.25em}
.tree ul:not(:first-child):before {
  content:"";
  display:block;
  width:0;
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  border-left:1px solid;
}

.tree li {
  margin:0;
  /* padding:0 1.5em; indentation + .5em */
  line-height:2em; /* default list item's `line-height` */
  font-weight:bold;
  position:relative;
}

.tree li:before {
  content:"";
  display:block;
  width:10px; /* same with indentation */
  height:0;
  border-top:1px solid;
  margin-top:-1px; /* border top width */
  position:absolute;
  top:1em; /* (line-height/2) */
  left:0;
}
.tree > li:first-child:before {
    display: none;
}
.tree li:last-child:before {
  background:white; /* same with body background */
  height:auto;
  top:1em; /* (line-height/2) */
  bottom:0;
}
</style>