<template>
    <div class="yd-input">
        <template v-if="regex == 'mobile'">
            <input ref="input" type="tel" pattern="[0-9]*"
                   v-model="currentValue" :name="name" @focus="focusHandler" @blur="blurHandler" maxlength="11" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled"
            >
        </template>
        <template v-else>
            <template v-if="type == 'password'">
                <input ref="input" v-if="!showPwd" type="password"
                       v-model="currentValue" :name="name" @focus="focusHandler" @blur="blurHandler" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled"
                >
                <input ref="input" v-if="showPwd" type="text"
                       v-model="currentValue" :name="name" @focus="focusHandler" @blur="blurHandler" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled"
                >
            </template>
            <input ref="input" v-if="type == 'text'" type="text"
                   v-model="currentValue" :name="name" @focus="focusHandler" @blur="blurHandler" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled"
            >
            <input ref="input" v-if="type == 'search'" type="search"
                   v-model="currentValue" :name="name" @focus="focusHandler" @blur="blurHandler" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled"
            >
            <input ref="input" v-if="type == 'number'" type="number"
                   v-model="currentValue" :name="name" @focus="focusHandler" @blur="blurHandler" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled"
            >
            <input ref="input" v-if="type == 'email'" type="email"
                   v-model="currentValue" :name="name" @focus="focusHandler" @blur="blurHandler" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled"
            >
            <input ref="input" v-if="type == 'tel'" type="tel"
                   v-model="currentValue" :name="name" @focus="focusHandler" @blur="blurHandler" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled"
            >
            <input ref="input" v-if="type == 'datetime-local'" type="datetime-local"
                   v-model="currentValue" :name="name" @focus="focusHandler" @blur="blurHandler" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled"
            >
            <input ref="input" v-if="type == 'date'" type="date"
                   v-model="currentValue" :name="name" @focus="focusHandler" @blur="blurHandler" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled"
            >
            <input ref="input" v-if="type == 'time'" type="time"
                   v-model="currentValue" :name="name" @focus="focusHandler" @blur="blurHandler" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled"
            >
        </template>
        <a href="javascript:;" class="yd-input-clear" tabindex="-1" @click="clearInput" v-show="showClearIcon && showClear && !isempty"></a>
        <span class="yd-input-error" v-if="showErrorIcon" v-show="(!!regex || !!min || !!max || required) && iserror && initError"></span>
        <span class="yd-input-warn" v-if="showRequiredIcon && showErrorIcon" v-show="(required || (!!min && min > 0)) && isempty && showWarn"></span>
        <span class="yd-input-success" v-if="showSuccessIcon" v-show="(!!regex || !!min || !!max || required) && !iserror && currentValue != ''"></span>
        <a href="javascript:;" v-if="type == 'password'" class="yd-input-password" :class="showPwd ? 'yd-input-password-open' : ''" tabindex="-1" @click.stop="showPwd = !showPwd"></a>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'yd-input',
        data() {
            return {
                currentValue: this.value,
                isempty: !this.value,
                iserror: false,
                showPwd: false,
                showClear: false,
                showWarn: true,
                initError: false,
                valid: true,
                errorMsg: '',
                errorCode: '',
                regexObj: {
                    email: '^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$',
                    mobile: '^(86){0,1}1[3-9]{1}\\d{9}$',
                    bankcard: '^\\d{15,19}$',
                    money:'^(([1-9]\d{0,9})|0)(\.\d{1,2})?$',
                    cnmoney:'^(([1-9]\d{0,9})|0)(\.\d{1,2})?$',
                    brmoney:'^(([1-9]\d{0,9})|0)(\.\d{1,2})?$',
                    cpf:'^\\d{11}$',
                    zipcode:'^\\d{8}$'
                }
            }
        },
        props: {
            name: String,
            placeholder: String,
            value: [String, Number],
            readonly: Boolean,
            disabled: Boolean,
            regex: String,
            autocomplete: {
                type: String,
                default: 'off'
            },
            showClearIcon: {
                type: Boolean,
                default: true
            },
            showErrorIcon: {
                type: Boolean,
                default: true
            },
            showSuccessIcon: {
                type: Boolean,
                default: true
            },
            showRequiredIcon: {
                type: Boolean,
                default: true
            },
            required: {
                type: Boolean,
                default: false
            },
            type: {
                validator (value) {
                    return ['text', 'password', 'search', 'email', 'number', 'tel', 'datetime-local', 'date', 'time'].indexOf(value) > -1;
                },
                default: 'text'
            },
            max: {
                validator(val) {
                    return /^\d*$/.test(val);
                }
            },
            min: {
                validator(val) {
                    return /^\d*$/.test(val);
                }
            },
            onBlur: {
                type: Function
            },
            onFocus: {
                type: Function
            }
        },
        watch: {
            value(val) {
                this.currentValue = val;
                this.emitInput();
            },
            currentValue(val) {
                this.isempty = !val;
                this.validatorInput(val, true);
                this.emitInput();
            },
            required(val) {
                this.required = val;
                this.validatorInput(this.currentValue, false);
            }
        },
        methods: {
            validatorInput(val, showError) {

                this.initError = showError;

                if(showError) this.showWarn = false;

                if(this.required && val === '') {
                    this.setError('不能为空', 'NOT_NULL');
                    this.iserror = true;
                    return;
                }

                if (this.min && val.length < this.min) {
                    this.setError(`最少输入${this.min}位字符`, 'NOT_MIN_SIZE');
                    this.iserror = true;
                    return;
                }

                var v = this.regex === 'bankcard' ? val.replace(/\s/g, '') : '';
                var reg = this.regexObj[this.regex] ? this.regexObj[this.regex] : this.trim(this.regex, '/');
                //console.log(v)
                //console.log(reg)
                if (!!v && this.regex && !new RegExp(reg).test(v)) {
                    //console.log('BankCard不符合规则')
                    this.setError('输入字符不符合规则', 'NOT_REGEX_RULE');
                    this.iserror = true;
                    return;
                }

                v = this.regex === 'cpf' ? val.replace(/\.|\-/g, '') : '';
                reg = this.regexObj[this.regex] ? this.regexObj[this.regex] : this.trim(this.regex, '/');
                //console.log(v)
                //console.log(reg)
                if (!!v && this.regex && !new RegExp(reg).test(v)) {
                    //console.log('CPF不符合规则')
                    this.setError('输入字符不符合规则', 'NOT_REGEX_RULE');
                    this.iserror = true;
                    return;
                }

                this.iserror = false;
                this.valid = true;
                this.errorMsg = '';
                this.errorCode = '';
            },
            blurHandler(e) {
                this.validatorInput(this.currentValue, true);

                setTimeout(() => {
                    this.showClear = false;
                }, 200);

                this.onBlur && this.onBlur(e);
            },
            focusHandler(e) {
                this.showClear = true;
                this.onFocus && this.onFocus(e);
            },
            clearInput() {
                this.currentValue = '';
                this.emitInput();
            },
            emitInput() {
                if (this.regex === 'bankcard') {
                    if (/\S{5}/.test(this.currentValue)) {
                        this.currentValue = this.currentValue.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");
                    }
                    this.$emit('input', this.currentValue.replace(/\s/g, ''));
                    return;
                }
                if (this.regex === 'money'){
                    var zero_regex =/^[0]+/
                    this.currentValue=this.currentValue.replace(zero_regex,"");
                    this.currentValue=this.currentValue.replace(/[a-zA-Z]/g,"");
                    this.$emit('input', this.currentValue.replace(/\s/g, ''));
                    return;
                }
                if (this.regex === 'cpf'){
                    this.currentValue=this.currentValue.replace(/[^0-9]/g, '');
                    if (/^[0-9]{4,9}$/.test(this.currentValue)) {
                        this.currentValue = this.currentValue.replace(/\s/g, '').replace(/(\d{3})(?=\d)/g, "$1.");
                    }else if(this.currentValue.length > 9){
                        if(this.currentValue.length > 11){
                            this.currentValue = this.currentValue.substring(0,11);
                        }else{
                            this.currentValue = this.currentValue.substring(0,9).replace(/\s/g, '').replace(/(\d{3})(?=\d)/g, "$1.")+"-"+this.currentValue.substring(9);
                        }
                    }
                    this.$emit('input', this.currentValue.replace(/\s/g, ''));
                }
                if (this.regex === 'zipcode'){
                    this.currentValue=this.currentValue.replace(/[^0-9]/g, '');
                    if (/^[0-9]{4,9}$/.test(this.currentValue)) {
                        this.currentValue = this.currentValue.replace(/\s/g, '').replace(/(\d{3})(?=\d)/g, "$1.");
                    }else if(this.currentValue.length > 9){
                        if(this.currentValue.length > 11){
                            this.currentValue = this.currentValue.substring(0,11);
                        }else{
                            this.currentValue = this.currentValue.substring(0,9).replace(/\s/g, '').replace(/(\d{3})(?=\d)/g, "$1.")+"-"+this.currentValue.substring(9);
                        }
                    }
                    this.$emit('input', this.currentValue.replace(/\s/g, ''));
                }

                this.$emit('input', this.currentValue);
            },
            setError(error, code) {
                this.errorMsg = error;
                this.errorCode = code;
                this.valid = false;
            },
            trim(str, char) {
                if (!!str) {
                    return str.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
                }
                return str;
            },
            setFocus() {
                this.$refs.input.focus();
            },
            setBlur() {
                this.$refs.input.blur();
            }
        },
        mounted() {
            this.validatorInput(this.currentValue, false);
        }
    }
</script>

<style lang="less">
    @import "../../../styles/components/input.less";
</style>
