<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false" style="box-shadow: 0 1px 6px rgba(0,0,0,.2);
    border-color: #eee;">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip">未注册账号，<a href="/register">去注册</a></p>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                userName: '',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    this.$store.dispatch('FETCH_LOGIN', {
                        userName: this.form.userName,
                        password: this.form.password
                    }).then((res) => {
                        if(res.data.result === 'TRUE') {
                            this.$store.commit('SET_USER', res.data.data);
                            this.$Message.success(res.data.message);
                            window.location.href = '/';
                        } else {
                            this.$Message.error(res.data.message);
                        }
                    })
                }
            });
        }
    }
};
</script>

<style>
.login{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
    &-con{
        position: absolute;
        right: 160px;
        top: 50%;
        transform: translateY(-60%);
        width: 300px;
        &-header{
            font-size: 16px;
            font-weight: 300;
            text-align: center;
            padding: 30px 0;
        }
        .form-con{
            padding: 10px 0 0;
        }
        .login-tip{
            font-size: 10px;
            text-align: center;
            color: #c3c3c3;
        }
    }
}
.login-con {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 300px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.login-con .login-tip {
    font-size: 10px;
    text-align: center;
    color: #c3c3c3;
}
</style>