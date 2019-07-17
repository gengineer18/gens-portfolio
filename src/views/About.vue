<template>
  <section class="about">
    <v-layout justify-center>
      <h2>About Me</h2>
    </v-layout>

    <transition-group name="slide-career" appear>
      <div class="slide-career-enter" :key="timeLines">
        <h3>名前：妹尾 弦</h3>
        <h3>生年月日：1991/5/17</h3>
        <h3>学歴：早稲田大学 社会科学部 2015/3卒業</h3>
        <h3>職歴：金融ユーザー系SIer(2015/4-2019/8)</h3>
      </div>
    </transition-group>

    <v-divider class="mt-2"/>

    <transition-group name="slide-timeline" appear>
      <div v-for="(timeLine, index) in timeLines" :key="index" class="slide-item mt-2">
        <h3>{{ timeLine.name }}</h3>
        <p>{{ timeLine.explain1 }}</p>
        <p>{{ timeLine.explain2 }}</p>
        <p>{{ timeLine.explain3 }}</p>
      </div>
    </transition-group>

  </section>
</template>

<script>
  export default {
    name: "about",
    data: () => {
      return {
        timeLines: [{
          name: '幼少期',
          explain1: '1991年、香川県に生まれる。うどんはソウルフードである。',
          explain2: '父の仕事の都合で岡山、東京と移り住むこととなる。',
        }, {
          name: '小学〜高校時代',
          explain1: 'サッカーに明け暮れる。味スタの杮落としの試合を見てFC東京ファンになる。いつも心に青と赤。',
          explain2: 'その一方で高校時代にボーカロイドにハマりオタクと化す。'
        }, {
          name: '大学時代',
          explain1: '早稲田大学社会科学部へ進学。多くの友人に恵まれる。',
          explain2: '尊敬する先輩に誘われWeb制作のアルバイトを始める。振り返れば私のエンジニアとしての第一歩であった。',
        }, {
          name: '留学',
          explain1: '上海への短期留学、大学を休学しサンフランシスコへの長期留学を経験する。',
          explain2: '海外で暮らすことの不便さから、日本の素晴らしさをより実感した。',
        }, {
          name: '社会人(SIer時代)',
          explain1: '某金融ユーザーSIerに就職。エンジニアとして上流工程から下流工程まで一連の開発経験を積んだ。',
          explain2: '社会人5年目にして結婚。夫婦力を合わせて暮らしている。',
          explain3: 'その一方、エンジニアとしての実力を向上できない環境(工数管理、保守作業が中心の仕事)に疑問を感じるようになる。',
        }, {
          name: '社会人(フリーランス時代)',
          explain1: 'フリーランスという働き方を知る。自分のキャリアを自分で創ることができる点に大きな魅力を感じる。',
          explain2: 'そして退職、フリーランスエンジニアとしてのキャリアを進むことを決意する。',
          explain3: '正社員として守られる立場ではなく、自分自身で道を切り開いていく。',
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
.slide-career-enter-active {
  transition: all 1.5s;
}

.slide-career-enter {
  opacity: 0;
  transform: translateY(-5px);
}

.slide-timeline-enter-active {
  transition: all 2s ease-in-out 1s;
}

.slide-timeline-enter {
  opacity: 0;
  transform: translateX(-10px);
}
</style>