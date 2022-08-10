<template>
    <div class="m-card" :style="width? {width: width + 'px'} : {}">
        <div class="m-card-img" :style="imgHeight? {imgHeight: imgHeight+ 'px'} : {}">
            <img :src="imgSrc" alt="img"/>
        </div>
        <div class="m-card-summary" v-if="summary">
            {{summary}}
        </div>
        <div class="m-card-summary" v-else>
            <slot></slot>
        </div>
        <slot name="footer"></slot>
        <!-- <div class="m-card-footer">
            footer
        </div> -->
    </div>
</template>

<script>
export default {
    name:'m-card',
    props:{
        width:{ //卡片宽度
            type: Number,
            default: 0,
        },
        imgSrc:{    //卡片图片资源地址
            type: String,
            default: ''
        },
        imgHeight:{ //卡片图片高度
            type:Number,
            default: 0
        },
        summary:{   //卡片摘要
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import './card.scss';

.m-card-summary{
    text-align: left;
}
</style>