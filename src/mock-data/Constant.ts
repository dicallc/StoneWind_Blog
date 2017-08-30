/**
 * Created by Administrator on 2017/8/26 0026.
 */
/*头部*/
export const mock_toobar_left_list:string[] =['Hi, 请登录', '我要注册', '找回密码'];
export const mock_toobar_right_list:string[] =['读者墙', '标签云', '文章归档','友情链接','网址导航','个人简历','关于本站'];
export const mock_navigation_list=[{name:'首页',icon:'icon-shouye',select:true},{name:'android前沿学习',icon:'icon-zhifeiji',select:false} ,{name:'android心得',icon:'icon-xinde',select:false} ,{name:'android开发者须知',icon:'icon-jiuhuashantubiao-',select:false}];
/*头部*/
export const callboard_list: any = [
  'Volley的框架解读准备一HttpURLConnection',
  '设计模式的杂记',
  'Java集合干货系列-（三）HashMap源码解析',
  'Java集合干货系列-（二）LinkedList源码解析',
  'Java集合干货系列-（一）ArrayList源码解析'
]
export const card_list: any =
  ['1', '2', '3'];
export const hot_tag_list: any =
  ['android(11)', '成长(3)', 'dagger2(3)', 'java(2)', 'react(1)', 'ui(3)', 'mvp(2)', 'androidstudio(1)', 'pua(1)'];
export const web_statistics: any =
  ['日志总数：63', '评论总数：78', '标签总数：10', '页面总数：8', '分类总数：22', '链接总数：2'];
export const blog_detail=`<blockquote>浮躁的过后，也即是技术的积累</blockquote>
<a href="http://dicallc.com/wordpress/wp-content/uploads/2017/07/TIM截图20170720105229.png"><img class="aligncenter size-full wp-image-391" src="http://dicallc.com/wordpress/wp-content/uploads/2017/07/TIM截图20170720105229.png" alt="" width="495" height="310" /></a>
<h2>1.前言</h2>
手持pixel,为了省电，我将谷歌商店都给割掉了，然而手机还是卡，耗电。

深度玩机的小伙伴，肯定知道谷歌版和国内版的app区别，即是这样，国产的互相唤醒也是对于耗电，卡顿最大幕后黑手。

黑域，阻止唤醒，冰箱等App,牛逼哄哄为打压黑手出世。

现在原生系统7.12，已Root+黑域+冻结应用，终于结束了国产互相唤醒时代，手机从此安宁了...
<h2>2.正文：</h2>
为什么要用这个标题呢，容我慢慢道来

因为自从进入androidstudio(后文称<strong>AS</strong>)时代后，各种开源库引入简单的不能再简单了，也因为<strong>AS</strong>自带依赖最新的V7包，即是你创建一个空项目，然后打个包也有1.9M。
<h5>实验：</h5>
新项目依赖
<pre><code>compile fileTree(dir:'libs',include: ['*.jar'])
androidTestCompile('com.android.support.test.espresso:espresso-core:2.2.2', {
excludegroup:'com.android.support',module:'support-annotations'
})

compile'com.android.support:appcompat-v7:25.3.1'

testCompile'junit:junit:4.12'

compile'com.android.support.constraint:constraint-layout:1.0.2'

compile'com.android.support:design:25.3.1'
</code></pre>
<h5>实现结果：打包debug包1.9M</h5>
<blockquote>你肯定会跟我说没有开启混淆，你没有打release包，但是你得知道少多少？300K？</blockquote>
回到标题：如何开发app能在1M以下，我为什么会纠缠这个问题

因为作为一个android开发程序员(虽然我已经转前端一年了....)，在使用冻结应用中有各种不爽，
如冰箱，有时候总是崩溃了，还限制只能冰冻5个....

最近公司也不是很忙，就假装加班在做app，每当PM过来，看到我在用AS，还问我AS还能开发前端？我就一阵汗颜。

前期，真的为了研究原理，像这种工具类app，真心得看你基础了，网路上没有多少资料，能找到也有限。

当然这是并不能拦住一个能够把自己手机真正掌握在手里的人，最后找到了办法冻结应用，后面也花了几天时间写完了。

当然其实我心中有个梗，别人空调狗App395KB，虽然最新App体积是415KB，我想自己应该差不多吧。

最后我开发后的APK体积是1.5M

Fuck！

Fcuk！

我可是混淆和腾讯的AndResGuard都加进去了最后体积是

1.2M
<h2>3.探索</h2>
急急忙忙拿着AS自带工具去看，别人APP，明明有support包啊，但是一对比，不对啊，为啥他的包里support里方法那么少。

我继续打开混淆规则，因为我知道我的混淆规则基本是对于support包全部都保留了

此刻我沉默了，难道别人的混淆的规则更加细致点

然后我打开酷安，找冻结应用，100KB的应用的都有，当然难免做的不是很好看。
<h2>4.结论</h2>
写到这里，其实我是知道该怎么做的，能让app在1M以下~但是我做不到，很多人做不到。

写点自己的见解：

1.如果想APK小一点，就不要加入多余的包，为了一个螺丝，把一个玩具车拿进来了。

2.如果想APK在小一点，就把图片加载，网络加载，数据库框架等等自己写，你懂的

3.如果你想apk在小小一点，我想系统的support的包你得找一个体积小一点的版本了，当然不要是最好的，

能这么做的人，对于自己APP也算是真爱了，不然我找不出其他理由，能把一个APP做到100KB，而且是大把，当然我相信做到这些你已经是一个高手了，相信理由也不用说了。
<h2>5.结语</h2>
听着PM怒吼，急急忙忙关掉AS，打开webstrom继续写我的网页。心中浮现一句话
<blockquote>浮躁的过后，也即是技术的积累</blockquote>`;

