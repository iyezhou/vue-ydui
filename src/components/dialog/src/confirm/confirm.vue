<template>
    <div class="yd-dialog-black-mask">
        <div class="yd-confirm">
            <div class="yd-confirm-hd" style="text-align: center"><strong class="yd-confirm-title" v-html="title"></strong></div>
            <div class="yd-confirm-bd" v-html="mes"></div>
            <template v-if="typeof opts == 'function'">
                <div class="yd-confirm-ft">
                    <a href="javascript:;" class="yd-confirm-btn default" @click.stop="closeConfirm(false)">{{cancel_mes}}</a>
                    <a href="javascript:;" class="yd-confirm-btn primary" @click.stop="closeConfirm(false, opts)">{{ok_mes}}</a>
                </div>
            </template>
            <template v-else>
                <div class="yd-confirm-ft">
                    <a href="javascript:;"
                       class="yd-confirm-btn"
                       :key="key"
                       v-for="item, key in opts"
                       :class="typeof item.color == 'boolean' ? (item.color ? 'primary' : 'default') : ''"
                       :style="{color: item.color}"
                       @click.stop="closeConfirm(item.stay, item.callback)"
                    >{{item.txt}}</a>
                </div>
            </template>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            title: String,
            mes: String,
            cancel_mes: String,
            ok_mes: String,
            opts: {
                type: [Array, Function],
                default: () => {
                }
            }
        }
    }
</script>
