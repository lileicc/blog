import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as s,c as d,a as c,b as e,d as t,e as n,f as i}from"./app-ZUeO6846.js";const l="/blog/assets/1-fED187Qr.png",h="/blog/assets/2-9s91EV3z.png",p="/blog/assets/3-tnY-RBFc.png",u="/blog/assets/4-FZprD6Zb.png",m={},f=e("p",null,"Speech translation (ST) has increasing demand in our daily life and work. Applications like travel assistant, simultaneous conference translation and movie subtitling can highly reduce translation costs. Building a ST system that can understand and directly translate acoustic speech signals into text in a target language is challenging. For example, people do not always premeditate what they are going to say. Not like text translation, ST lacks completed organization sometimes. Another part is that the parallel corpus for ST is not enough, compared to the MT task. Especially, most ST methods are limited by the amount of parallel corpus.",-1),g=i('<p>Such demanded applications stir interest within the research community. Over its decades history, speech translation has experienced several shifts in its primary research themes. The traditional way is coupled cascades of speech recognition and machine translation. Then, researchers emerged the exploration of tight coupling. Recently, end-to-end models have attracted much attention. To achieve end-to-end speech translation, our research community has made a lot of efforts. Today, we are going to introduce an interesting paper that helps us to break the limitations of the amount of parallel corpus.</p><h2 id="end-to-end-st" tabindex="-1"><a class="header-anchor" href="#end-to-end-st" aria-hidden="true">#</a> End-to-end ST</h2><p>Generally, we use Cascaded ST systems to achieve ST, which extracts acoustic features and source-text semantic features before translating them to the target text.</p><p><img src="'+l+'" alt="Figure 1: The process of Cascaded ST systems"></p><p>Figure 1: The process of Cascaded ST systems</p><p>However, such intermediate stages meet challenges in real cases: no sufficient supervision to guide the encoder-decoder to process the audio properly, and the amount of parallel ST training corpus is small. It may generate errors when processing the audio inputs, and then influence the quality of MT.</p><p>Therefore, end-to-end ST has been proposed to solve these issues. Methods like pre-training and multi-task learning can significantly improve performance. However, the performance of end-to-end ST is not as good as Cascaded ST for a very long time, since the ST data is insufficient to build a high-quality model.</p><p>How to utilize the best of existing ST data to improve the end-to-end ST performance? <em>Listen, Understand and Translate (LUT): Triple Supervision Decouples End-to-end Speech-to-text Translation</em> introduces a human-inspired method to complete ST tasks via understanding acoustic information at the semantic level as much as possible, just like humans. It can guide the acoustic encoder to extract information from the auditory input. Additionally, it utilizes a pre-trained BERT model to enforce the upper encoder to produce as much semantic information as possible, without extra data.</p><h2 id="inspired-by-human-—-lut" tabindex="-1"><a class="header-anchor" href="#inspired-by-human-—-lut" aria-hidden="true">#</a> Inspired by Human — LUT</h2><p>Let&#39;s take a look at the human&#39;s translation process. For example, when we want to translate Chinese audio to English, we need to listen to the audio first and try to understand the meaning of audio. After processing it in our brain, we can get the outputs.</p><p><img src="'+h+'" alt="Figure 2: The process of how humans translate."></p><p>Figure 2: The process of how humans translate.</p><p>Currently, end-to-end models are built with an encoder-decoder architecture that can directly translate speech without using explicitly generated intermediate ASR output. Methods like multi-task training and pre-training are used to incorporate additional ASR and MT data and reduce dependency on scarce end-to-end data. However, these techniques were not able to exploit ASR and MT data as effectively as Cascade methods, to get comparable translation quality.</p><p>What if we make the machine to imitate human behaviour in translation? Can we improve the quality of speech translation? The answer is yes. The significant part of LUT is it adds the &quot;understand&quot; function in ST.</p><p>LUT uses an <strong>acoustic encoder</strong> to &quot;Listen&quot;, a <strong>semantic encoder</strong> to &quot;Understand&quot;, and a <strong>translation decoder</strong> to &quot;Translate&quot;, to imitate the intermediate steps for effective end-to-end speech translation.</p><p><img src="'+p+'" alt="Figure 3: The architecture of LUT. "></p><p>Figure 3: The architecture of LUT.</p><p>Specifically, LUT consists of three modules:</p><ul><li><strong>Acoustic encoder</strong> network that encodes the audio input sequence into hidden features corresponding to the source text;</li><li><strong>Semantic encoder</strong> network that extracts hidden semantic representation for translation, which behaves like a normal machine translation encoder;</li><li><strong>Translation decoder</strong> network that outputs sentence tokens in the target language.</li></ul><p>The most interesting feature of LUT is utilizing Connectionist Temporal Classification (CTC) + distance Loss to optimize the encoders, and break the limitation of insufficient parallel ST data within BERT. This is particularly interesting because it is hard to train an end-to-end ST model well with a small number of data (compared to MT). This strategy helps LUT to learn semantic features, meanwhile, it can predict recognition results while predicting translation results. Thus, we can diagnose whether the wrong prediction for translation is caused by the wrong acoustic modelling.</p><h2 id="evaluation-of-the-lut" tabindex="-1"><a class="header-anchor" href="#evaluation-of-the-lut" aria-hidden="true">#</a> <strong>Evaluation of the LUT</strong></h2><p>To test the effectiveness of LUT, the paper includes Augmented Librispeech English-French, IWSLT2018 English-German, and TED English-Chinese test.LUT achieves all the best performance. Compared to the Cascaded model, LUT is lighter (fewer parameters), which can perform a faster translation.</p><h3 id="semantic-analysis" tabindex="-1"><a class="header-anchor" href="#semantic-analysis" aria-hidden="true">#</a> Semantic Analysis</h3><p>LUT compares the acoustic encoder and semantic encoder in this paper. Figure 3 shows the attention for different module layers. It is interesting that the acoustic encoder focuses on the local features, while the semantic encoder can capture more global features.</p><p><img src="'+u+'" alt="Figure 4: The visualization of attention for different module layers. (a), (b) visualize the attention of the last layer of the acoustic encoder and the first layer of semantic encoder respectively. "></p><p>Figure 4: The visualization of attention for different module layers. (a), (b) visualize the attention of the last layer of the acoustic encoder and the first layer of semantic encoder respectively.</p><p>It also compares the acoustic encoder and semantic encoder on the Fluent Speech Commands dataset, to test SpeakerVer (identify the speaker) and IntentIde (intention recognition). In Table 1, the semantic encoder only gets 46.3 accuracy on the SpeakerVer task, showing that the semantic encoder can focus on the translation task.</p><table><thead><tr><th></th><th>SpeakerVer</th><th>IntentIde</th></tr></thead><tbody><tr><td>Acoustic Encoder</td><td>97.6</td><td>91.0</td></tr><tr><td>Semantic Encoder</td><td>46.3</td><td>93.1</td></tr></tbody></table><p>Table 1: Classification accuracy on speaker verification and intent identification.</p><p>It finds acoustic information is modelled at low-level layers and semantic information is captured at high-level layers.</p><h3 id="lut-vs-cascaded-model" tabindex="-1"><a class="header-anchor" href="#lut-vs-cascaded-model" aria-hidden="true">#</a> LUT vs Cascaded Model</h3><table><thead><tr><th>Transcription</th><th>LUT</th></tr></thead><tbody><tr><td>reference</td><td>it was mister jack maldon</td></tr><tr><td>hypothesis</td><td>it was mister jack mal</td></tr><tr><td>Translation</td><td></td></tr><tr><td>reference</td><td>c&#39;était m. jack maldon</td></tr><tr><td>hypothesis</td><td>c&#39;était m. jack maldon</td></tr></tbody></table><table><thead><tr><th>Transcription</th><th>Cascaded</th></tr></thead><tbody><tr><td>reference</td><td>it was mister jack maldon</td></tr><tr><td>hypothesis</td><td>it was mister jack mal</td></tr><tr><td>Translation</td><td></td></tr><tr><td>reference</td><td>c&#39;était m. jack maldon</td></tr><tr><td>hypothesis</td><td>c&#39;était m. jack mal</td></tr></tbody></table><p>Here is an example of transcription and translation on En-Fr test set generated by the LUT and Cascaded model. It has a recognition error in the transcription stage (mal). LUT can translate correctly, ignoring the mistake that happened in transcription, while Cascaded Model can not correct the error and continue to pass the incorrect signal.</p><p>LUT not only can directly translate to the target language within the original audio information, but also is fault-tolerant during the acoustic modelling.</p><h1 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> Summary</h1><p>LUT is a unified training framework to decouple the end-to-end speech translation task, under the supervision of the acoustic, semantic, linguistic level. It is effective and utilizes existing data to solve the problem of insufficient ST data.</p>',37),T={href:"https://github.com/dqqcasia/st",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/dqqcasia/st",target:"_blank",rel:"noopener noreferrer"},b={href:"https://arxiv.org/pdf/2009.09704.pdf",target:"_blank",rel:"noopener noreferrer"},S=i('<h1 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h1><ol><li><p>Dong Q, Ye R, Wang M, et al. &quot; Listen, Understand and Translate&quot;: Triple Supervision Decouples End-to-end Speech-to-text Translation[J]. AAAI 2021.</p></li><li><p>Sperber M, Paulik M. Speech Translation and the End-to-End Promise: Taking Stock of Where We Are[C]//Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics. 2020: 7409-7421.</p></li><li><p>Stoian M C, Bansal S, Goldwater S. Analyzing ASR pretraining for low-resource speech-to-text translation[C]//ICASSP 2020-2020 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP). IEEE, 2020: 7909-7913</p></li><li><p>Weiss R J, Chorowski J, Jaitly N, et al. Sequence-to-sequence models can directly translate foreign speech[J]. arXiv preprint arXiv:1703.08581, 2017.</p></li></ol><h1 id="supplemental-materials" tabindex="-1"><a class="header-anchor" href="#supplemental-materials" aria-hidden="true">#</a> Supplemental Materials</h1><ol><li><p>Baevski A, Zhou H, Mohamed A, et al. wav2vec 2.0: A framework for self-supervised learning of speech representations[J]. arXiv preprint arXiv:2006.11477, 2020.</p></li><li><p>Han C, Wang M, Ji H, et al. Learning Shared Semantic Space for Speech-to-Text Translation[J]. arXiv preprint arXiv:2105.03095, 2021.</p></li><li><p>Vaswani A, Shazeer N, Parmar N, et al. Attention is all you need[C]//Advances in neural information processing systems. 2017: 5998-6008.</p></li></ol>',4);function v(w,k){const a=o("ExternalLinkIcon");return s(),d("div",null,[f,c(" more "),g,e("p",null,[t("The code can be found at: "),e("a",T,[t("https://github.com/dqqcasia/st"),n(a)])]),e("p",null,[e("a",y,[t("GitHub - dqqcasia/st: End-to-end Speech Translation"),n(a)])]),e("p",null,[t("Paper: "),e("a",b,[t("https://arxiv.org/pdf/2009.09704.pdf"),n(a)])]),S])}const C=r(m,[["render",v],["__file","index.html.vue"]]);export{C as default};
