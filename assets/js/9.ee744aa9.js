(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{558:function(e,a,t){e.exports=t.p+"assets/img/c1.9586cb94.png"},559:function(e,a,t){e.exports=t.p+"assets/img/c3.4d337986.png"},560:function(e,a,t){e.exports=t.p+"assets/img/c5.641e28dd.png"},561:function(e,a,t){e.exports=t.p+"assets/img/c6.8132692a.png"},562:function(e,a,t){e.exports=t.p+"assets/img/c7.d98bdca7.png"},563:function(e,a,t){e.exports=t.p+"assets/img/c8.1445c55b.png"},564:function(e,a,t){e.exports=t.p+"assets/img/c9.6ebbd6a2.png"},565:function(e,a,t){e.exports=t.p+"assets/img/c10.22e60859.png"},566:function(e,a,t){e.exports=t.p+"assets/img/c11.d06ba500.png"},619:function(e,a,t){"use strict";t.r(a);var n=t(12),i=Object(n.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("How to develop a translation model that can take both speech and text as input and translate to target language?\nCan we borrow inspiration from human brain study to improve the speech translation models?")]),e._v(" "),n("p",[e._v("Reading Time: About 15 minutes.")]),e._v(" "),n("p",[e._v("Paper："),n("a",{attrs:{href:"https://arxiv.org/pdf/2105.03095.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://arxiv.org/pdf/2105.03095.pdf"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Github: "),n("a",{attrs:{href:"https://github.com/Glaciohound/Chimera-ST",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Glaciohound/Chimera-ST"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),n("p",[n("img",{attrs:{src:t(558),alt:"image1"}})]),e._v(" "),n("p",[e._v("Although it seems difficult for normal people to acquire more than two languages, according\nto the Wikipedia there are many polyglots who can speak tens of languages. For example,\nZiad Fazah, speaking a total of 59 world languages, is believed to be the world’s greatest living polyglot.\nHowever, compared with others in the history his record does not stand out. It was recorded that\nCardinal Giuseppe Caspar Mezzofanti, who was born in 1774, could speak 38 languages and 40 dialects.\nMeanwhile, the 10th-century Muslim polymath Al-Farabi was claimed to know 70 languages. The German Hans\nConon von der Gabelentz, born in 1807, researched and published books about grammars for 80 languages.\nThe highest record probably belongs to Sir John Bowring, Governor of Hong Kong from 1854 to 1859,\nwho was said to know 200 languages, and capable of speaking 100. But it turns out extremely difficult\nfor machine to learn natural languages like humans, in particular, despite its huge potential applications,\nspeech translation has always been a challenge for machine.\nOne common advantage is that those polyglots all benefit from not only text, but also audio corpus. However,\nhow to utilize both audio and text information to help machine speech translation has not been fully exploited.\nThe challenge comes from the intrinsic difference of modality between audio and text.")]),e._v(" "),n("p",[e._v("A recent work Chimera from ByteDance AI Lab and UIUC aims to draw strengths from both modalities\nfor speech translation [1]. Their key idea is to represent text and audio inputs differently,\nthen fuse them together by projecting audio and text features into a common semantic representation\nto boost the ST performance.")]),e._v(" "),n("p",[e._v("There are two main advantages for including audio and text data together for training one ST model.\nFirst, humans learn languages simultaneously from audio, text and videos rather than pure text. Inspired by\nthis observation, it is believed that text knowledge can provide additional insights for ST. Second,\nsince MT corpus is much larger compared with small corpus of ST, which is also expensive to create,\nincorporating MT text provides much fruitful training data and is expected to yield improvements on ST\nwhen bridging the modality gap properly.")]),e._v(" "),n("p",[e._v("Taking those benefits into consideration, the Chimera model showed significant improvements by unifying MT and ST\ntasks on the benchmark ST datasets containing more than ten languages pairs.")]),e._v(" "),n("p",[e._v("Unlike previous translation models, Chimera has established a successful paradigm of\nbridging the modality gap between text and audio for speech translation.\nThis is similar to multi-modality MT, in which images can improve the text translation quality. Considering\nthe pixel level information in images is accurately described, the audio is even noisier and leads to more challenges.")]),e._v(" "),n("p",[e._v("Chimera is designed for an end-to-end speech-to-text translation task. It has two advantages.\nFirst, the translation quality can be consistently improved by leveraging a large amount of external\nmachine translation data. In rich-resource directions, such as the largest speech translation dataset\nMuST-C, which already contains translations from English to eight languages with each pair\nconsisting of at least 385 hours of audio recordings, Chimera can still significantly improve the\nquality, reaching a new State-Of-The-Art(SOTA) BLEU score on all language pairs. In low-resource\ndirections, such as LibriSpeech dataset containing only 100 hours of training data, Chimera also\nperforms surprisingly well and consistently outperforms the previous best results.\nFinally, they verified the common knowledge conveyed between these audio and text tasks indeed comes\nfrom the shared semantic space and thus paves a new way for augmenting training resources across modalities.")]),e._v(" "),n("p",[e._v("Chimera can be thought of as a multimodal in the field of speech translation in general.\nWhen you need to develop a speech translation model but don't have enough audio data, you\nmay consider using Chimera, and it can turn out to be better than your expectation!\nThe research data, codes and resources are also kindly published by the authors.")]),e._v(" "),n("p",[e._v("Next, we will introduce and analyze Chimera from three aspects: 1) the challenges of bridging the gap\nbetween audio and text for speech translation; 2) the motivation and methods of Chimera; 3) the\nperformance and analysis of Chimera.")]),e._v(" "),n("h2",{attrs:{id:"challenges-in-speech-translation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#challenges-in-speech-translation"}},[e._v("#")]),e._v(" Challenges in speech translation")]),e._v(" "),n("p",[e._v("The current paradigm of artificial intelligence highly depends on training on a large dataset, and thus\nmake predictions on a small test set. However, different modalities of data have been labeled for\nvarious tasks but seldom been utilized together due to the modality gap of data representations. For example,\nbillions of parallel MT corpora have been ignored as additional training data for SP for a long time.\nAt the meanwhile, the data of ST is always in the dearth due to the difficulty of collection\nand high cost. Looking at the relatively smaller amount of parallel data for ST compared with MT,\nit is natural to have the idea of combining them together. Unfortunately, although they both encode human\nlanguages, they are dissimilar in both coding attributes(pitch, volume, and intonation versus words,\nsuffixes, and punctuation) and length(thousands of time frames versus tens of words). Therefore, it has\nalways been a challenge to unify representations from audio and text. The recent evidence from functional\nneuroimaging identifies certain regions in brain that the processing stream for speech sounds and visual\ntext correlates positively with the subjects' reading ability. This finding provides the intuition\nfor developing a multi-modality converged representation of audio and text in language activities. But\nonly little previous research explored this direction possibly due to the difficulties of modality fusion and\nmarginal improvements. Surprisingly, Chimera establishes a new bridge to fill the modality gap between\nspeech and text and can serve as a new foundation in this area.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(559),alt:"image2"}})]),e._v(" "),n("p",[e._v("In the above figure[2], the color represents relative contribution of unimodal visual (green), unimodal auditory\n(red), and similar contribution of visual and auditory predictors (yellow) to explaining signal variance.\nThe lateral and inferior occipital-temporal cortex were active by unimodal presentation of letters, while\nHeschl's gyrus (primary auditory cortex) and portions of the superotemporal cortex were activated by\nunimodal presentation of speech sounds. This neuroimaging evidence convinces the connection of audio and text in human\nbrain, serving as theoretical foundation of modality fusion.")]),e._v(" "),n("h2",{attrs:{id:"motivation-and-techniques-of-chimera"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#motivation-and-techniques-of-chimera"}},[e._v("#")]),e._v(" Motivation and Techniques of Chimera")]),e._v(" "),n("p",[n("img",{attrs:{src:t(560),alt:"image4"}})]),e._v(" "),n("p",[e._v('​For language learners, a very interesting phenomenon is that they learn better by audio and text\ntogether rather than text only. The aforementioned famous polyglots also stated that their success\noriginated from various interactions with native speakers in other languages, such as listening,\nreading, and speaking. Nowadays, many people also learn new languages by watching movies, in which\nthey will be immersed in audio and subtitles. In particular, the above figure is Ioannis Ikonomou, who was born\nin Greek and now works as translator for European Union. Ikonomou can speak 32 languages and could also translate\nthose languages to each other in daily work. According to his interview, he was born in a famous tourism city,\nwhere people from all over tha world visit there every day. Under the influence of different tourists,\nhe learned English at 5 years old, German at 7 years old, Italian at 10 years old, Russian at 13 years\nold, East African Swahili at the age of 14, and Turkish at the age of 16. He said "Learning Polish\ncan make Polish dumplings better. Learning Russian is to understand Dostoyevsky,\nPersian is to appreciate ancient Persian poetry, and Hungarian is to understand Hungarian folk\nsongs. For German, it is to understand the veteran show "Mirror of the World" every Sunday evening."[3].\nIt is worthy to point that he learned most languages when he was still a child, demonstrating strong language ability\nof human children.')]),e._v(" "),n("p",[n("img",{attrs:{src:t(561),alt:"image5"}})]),e._v(" "),n("p",[e._v("The above figure shows the developmental milestones of human children learners. Children first learns\nhow to speak from their family and thus how to speak fluently, read and write formally at school.")]),e._v(" "),n("p",[e._v("All those evidence demonstrates that combining audio and text could help humans learn a new language.\nA natural next step is to apply this idea in speech machine translation.")]),e._v(" "),n("p",[e._v("The design goal of Chimera is based on such considerations: design a general framework\nto learn the combination of audio and text from languages, and then it will benefit from this\ncombined pre-training when migrating to the new speech translation direction. Just like language\nlearners, after learning two modalities, the one modality becomes easier. The design of Chimera\nfollows three basic principles: first, learn the shared semantic memory module to bridge the gap\nbetween the representation of audio and text; Second, the training objective of pre-training comes from three\nparts: 1) the speech-to-text translation training, 2) the text machine translation training,\nand 3) Bi-modal contrastive training; Third, train on external MT corpora and then apply the model\nin ST task.")]),e._v(" "),n("h2",{attrs:{id:"shared-semantic-memory"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shared-semantic-memory"}},[e._v("#")]),e._v(" Shared semantic memory")]),e._v(" "),n("p",[n("img",{attrs:{src:t(562),alt:"image6"}}),e._v("\nChimera follows a transformer based encoder-decoder framework and above is an overview. Word\nembedding for text input and the Wav2vec2[4] sub-module for speech input\nare both included in the Encoder Module. The shared semantic projection Module generates\nsemantic memory with fixed-size representation from contextual features using its memory query.\nThe Decoder Module decodes semantic memory translation.")]),e._v(" "),n("p",[e._v('Since the encoder and decoder are actually standard modules based on transformer[5], which have been proven\nto be the SOTA design in many natural language processing tasks, the shared semantic memory module is\nthe key to success of Chimera. So here we will mainly discuss the fantastic design of this shared module.\nAmong this framework, the module relies heavily on shared semantic projection. In fact, contextual elements of speech\nand text can have a wide range of distributions and lengths. The shared semantic projection should,\nin theory, compute a fixed number of semantic features as output semantic memories.\nThis module takes the contextual information extracted from the encoding module as input and\noutputs semantic memories with a set length of m. It is made up of n layers of attention. It\nstores a tuple of m trainable input-dependent memory queries as the initial "memories" to\nrepresent the categories of required semantic information. Attention "keys" and "values" are\nprovided by unimodal contextual features, but attention "queries" are provided by memories.\nMemories are fed into the n shared semantic projection layers in an iterative fashion,\nwith each layer\'s output being used as input to the next layer. The semantic memory is created\nfrom the final output.')]),e._v(" "),n("h2",{attrs:{id:"dataset-and-preprocessing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dataset-and-preprocessing"}},[e._v("#")]),e._v(" Dataset and preprocessing")]),e._v(" "),n("p",[e._v("Two datasets were used for conducting experiments to verify the effectiveness of Chimera.\nOne is called MuST-C, the largest ST corpus, which contains translations from English(EN) to 8 languages: Dutch (NL), French (FR),\nGerman (DE), Italian (IT), Portuguese (PT), Romanian(RO), Russian (RU), and Spanish (ES). With\neach pair consisting of at least 385 hours of audio recordings. Another popular one is Augmented LibriSpeech Dataset\n(En-Fr), which is composed of aligned e-books in French and their human reading in English of 100 hours.\nThey also incorporate data from WMT, OpenSubtitles and OPUS100 translation tasks as pretraining corpora.")]),e._v(" "),n("p",[e._v("In practice, speech input, the 16-bit raw wave sequences are normalized by a factor of 215 to the range of\n[-1, 1), which uses the Wav2Vec2 Module following the base configuration in [4].\nThe shared Transformer encoder consists of 6 layers. The memory queries are 64 512-\ndimensional vectors. The parameters of shared semantic  projection resemble a 3-layer Transformer\nencoder. The Transformer decoder has 6 layers. Each of these Transformer layers, except for those\nin the Wav2Vec2 module, has an embedding dimension of 512, a hidden dimension of 512, and 8\nattention heads.")]),e._v(" "),n("p",[e._v("Chimera contains around 165M parameters. The whole training process for one trial on 8 Nvidia Tesla-V100 GPUs\ngenerally takes 20 –40 hours according to the translation direction.")]),e._v(" "),n("h2",{attrs:{id:"effectiveness-of-chimera"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#effectiveness-of-chimera"}},[e._v("#")]),e._v(" Effectiveness of Chimera")]),e._v(" "),n("p",[e._v("In summary, Chimera has the following advantages:")]),e._v(" "),n("ol",[n("li",[e._v("New state-of-the-art performance on all language pairs")])]),e._v(" "),n("p",[e._v("Even though they did not use Google Translate results on Augmented Librispeech as most baselines,\nChimera obtains state-of-the-art performance on all language pairs. Chimera's EN-DE results\nuse WMT14+OpenSubtitles for MT pretraining, whereas the original paper also contains a full ablation\nresearch on the effect of MT data. It's worth noting that the improvement in EN-PT isn't as\ndramatic as it is in EN-DE and EN-FR. This is due to a mismatch in data between OPUS100 and\nMuST-C. OPUS100 has a high amount of sentences from movie subtitles, which are more informal,\nfeature repeated lines, and address issues that are not covered in MuST-C public speeches.")]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Successfully share knowledge across tasks")])]),e._v(" "),n("p",[e._v("Additional trial findings corroborate their design of auxiliary tasks by demonstrating its\nability to acquire a well-structured shared semantic space as well as successfully exchange\nlearned knowledge between MT and ST.")]),e._v(" "),n("p",[e._v("Here are some representative experimental results:")]),e._v(" "),n("h3",{attrs:{id:"_1-benchmark-experiments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-benchmark-experiments"}},[e._v("#")]),e._v(" 1. Benchmark Experiments")]),e._v(" "),n("p",[e._v("The below two tables demonstrate the main results on tst-COMMON subset on all 8 languages in MuST-C dataset\namd on LibriSpeech English-French dataset.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(563),alt:"image7"}})]),e._v(" "),n("p",[e._v("Table 1: Main results on tst-COMMON subset on all 8 languages in MuST-C dataset.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(564),alt:"image8"}})]),e._v(" "),n("p",[e._v("Table 2: Results on LibriSpeech English-French dataset.")]),e._v(" "),n("h3",{attrs:{id:"_2-visualizations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-visualizations"}},[e._v("#")]),e._v(" 2. Visualizations")]),e._v(" "),n("p",[n("img",{attrs:{src:t(565),alt:"image9"}})]),e._v(" "),n("p",[e._v("Regardless of the input modality, the shared semantic projection is designed to extract only\nthe semantic categories of information required for decoding. To validate this hypothesis, a\n2-dimensional PCA projection was performed in the semantic memories across different samples.")]),e._v(" "),n("p",[e._v("In the above figure, each colored cluster (circled out) represents a semantic memory element. A '.' corresponds to\na speech semantic memory, and a “+” marks a text one. It is obvious that semantic memories are\nstrongly clustered, with each individual learning a specific region. The model's capacity to\noverlook representation disparities and bridge the modality gap is demonstrated by the close\ndistance of speech and text representations inside the same region.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(566),alt:"image9"}})]),e._v(" "),n("p",[e._v("One randomly selected semantic memory subspace was analyzed by PCA to its related cluster to get\na better look at the structure of each semantic memory subspace.")]),e._v(" "),n("p",[e._v('The above figure is the visualization of one specific semantic memory with no different samples or\nmodalities. "+" denotes text representations, while "." denotes speech representations. Marks\nof the same color are linked by dashed lines and come from the same speech-transcript pair.\nSome speech-transcript pairs have been circled and their transcripts have been annotated.\nThree different fonts denote three different sets of transcripts with similar patterns.\nAs can be seen from the circles, the matched speech and transcript inputs are indeed close to each other.\nSuch results provide strong evidence of the efficacy of the semantic memory module, especially when\nconsidering audio and text represent different modalities.')]),e._v(" "),n("h2",{attrs:{id:"summary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),n("p",[e._v("Going back to the polyglots, who successfully learn new languages through various kinds of interactions\nwith the environments such as speaking, reading and writing, Chimera makes one important step towards\ndrawing strength from text machine translation to advance speech translation.\nIn general, Chimera unites MT and ST tasks by projecting audio and text data to a shared\nsemantic representation, boosting performance on ST benchmarks MuST-C and Augmented\nLibrispeech to a new state-of-the-art. Further visualizations show that the shared semantic space does indeed\nconvey common knowledge between these two tasks, paving the path for novel ways to supplement training materials across modalities.")]),e._v(" "),n("p",[e._v("In the future, we are looking forward to more advanced techniques to solve two additional problems: 1) how to\ntightly align speech and text representations and 2) how to make the workflows of MT and ST fully shared.\nSince ST is an exciting new area, there are a lot of interesting research and progress almost every week.\nIn the near future, we believe a beautiful new world, where the real time speech translation comes true and the\nlanguage barriers among countries and nations are broken, is waiting fo us.")]),e._v(" "),n("h2",{attrs:{id:"references"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),n("p",[e._v('[1] Han, Chi, Mingxuan Wang, Heng Ji, and Lei Li. "Learning Shared Semantic Space for Speech-to-Text Translation." ACL 2021.')]),e._v(" "),n("p",[e._v('[2] Van Atteveldt, Nienke, Elia Formisano, Rainer Goebel, and Leo Blomert. "Integration of letters and speech sounds in the human brain." Neuron 43, no. 2 (2004): 271-282.')]),e._v(" "),n("p",[e._v("[3] "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ioannis_Ikonomou",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://en.wikipedia.org/wiki/Ioannis_Ikonomou"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("[4] Alexei Baevski, Yuhao Zhou, Abdelrahman Mohamed, and Michael Auli. 2020. wav2vec 2.0: A framework for self-supervised learning of speech representations. In Advances in Neural Information Processing Systems, volume 33, pages 12449–12460. Curran Associates, Inc.")]),e._v(" "),n("p",[e._v('[5] Vaswani, Ashish, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, and Illia Polosukhin. "Attention is all you need." In Advances in neural information processing systems, pp. 5998-6008. 2017.')])])}),[],!1,null,null,null);a.default=i.exports}}]);