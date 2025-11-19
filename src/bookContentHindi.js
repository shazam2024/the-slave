export const bookDataHindi = {
  title: "दास",
  author: "कलश अग्रवाल",
  description: "आजादी, चेतना, और उन जंजीरों की एक गहरी दार्शनिक खोज जो मानव आत्मा को बांधती हैं। यह किताब उन अदृश्य शक्तियों में गहराई से उतरती है जो हमें गुलाम बनाती हैं और सच्ची मुक्ति के रास्ते को दिखाती है।",
  parts: [
    {
      partNumber: 1,
      partTitle: "सवाल जो पूछने से हम डरते हैं",
      chapters: [
        {
          id: 1,
          title: "परिचय - वो सवाल जो हम नहीं पूछते",
          content: `
            <style>
              .lead {
                font-size: 1.35rem;
                line-height: 1.8;
                font-weight: 400;
                color: #1a1a1a;
                margin-bottom: 2rem;
                font-style: italic;
                border-left: 4px solid #d97706;
                padding-left: 1.5rem;
                background: #fef3c7;
                padding: 1.5rem;
                border-radius: 8px;
              }

              p {
                font-size: 1.125rem;
                line-height: 1.9;
                color: #2d3748;
                margin-bottom: 1.5rem;
                text-align: justify;
              }

              h2 {
                font-size: 2rem;
                font-weight: 700;
                color: #78350f;
                margin-top: 3rem;
                margin-bottom: 1.5rem;
                border-bottom: 3px solid #d97706;
                padding-bottom: 0.5rem;
              }

              h3 {
                font-size: 1.5rem;
                font-weight: 600;
                color: #92400e;
                margin-bottom: 1rem;
              }

              .question-block {
                background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
                border-left: 5px solid #d97706;
                padding: 2rem;
                margin: 2rem 0;
                border-radius: 12px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
              }

              .question-block:hover {
                transform: translateX(8px);
                box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
              }

              .question-block h3 {
                margin-top: 0;
                color: #78350f;
                font-size: 1.4rem;
              }

              .question-block p {
                margin-bottom: 0;
                color: #451a03;
              }

              .closing-thought {
                font-size: 1.2rem;
                line-height: 1.8;
                color: #451a03;
                margin-top: 3rem;
                padding: 1.5rem;
                background: #fef3c7;
                border-radius: 8px;
                text-align: center;
              }

              .closing-thought em {
                font-size: 1.3rem;
                color: #78350f;
                font-weight: 600;
              }

              blockquote {
                border-left: 4px solid #d97706;
                padding-left: 1.5rem;
                margin: 2rem 0;
                font-style: italic;
                color: #78350f;
                font-size: 1.2rem;
                background: #fffbeb;
                padding: 1.5rem;
                border-radius: 8px;
              }
            </style>

            <p class="lead">कुछ सवाल ऐसे होते हैं जो रात की खामोशी में हमें सताते हैं, जो अकेलेपन के पलों में उभर आते हैं, जो सवाल हम पूरी जिंदगी टालते रहते हैं क्योंकि उनके जवाब शायद उन आरामदायक झूठों को तोड़ दें जो हमने अपने चारों ओर बुन रखे हैं।</p>
            
            <p>यह किताब उन सवालों का सामना करने की एक कोशिश है। किसी परफेक्ट जवाब तक पहुंचने की नहीं, बल्कि उन्हें ईमानदारी से समझने की - बिना किसी धार्मिक सिद्धांत की सुरक्षा के, बिना किसी परंपरागत सोच के आरामदायक कंबल के।</p>

            <p>मैं कोई गुरु नहीं हूं, कोई मास्टर नहीं, कोई ऐसा व्यक्ति नहीं जो "पहुंच" गया है। मैं एक खोजी हूं, बिल्कुल तुम्हारी तरह। और ये पन्ने मेरी यात्रा का रिकॉर्ड हैं - अस्तित्व के जंगल से गुजरते हुए।</p>

            <h2>सात सवाल</h2>

            <div class="question-block">
              <h3>1. क्या हम सच में आजाद हैं?</h3>
              <p>हम दावा करते हैं कि हम आजाद हैं, हम आजादी का जश्न मनाते हैं, उसके नाम पर जंग लड़ते हैं। लेकिन क्या वाकई हम आजाद हैं? या फिर हम अदृश्य जंजीरों के गुलाम हैं - हमारी कंडीशनिंग की, हमारे विश्वासों की, हमारे डर की, समाज की उन उम्मीदों की जो हमें अदृश्य रस्सियों की तरह जकड़े हुए हैं?</p>
            </div>

            <div class="question-block">
              <h3>2. हम एक्जिस्ट क्यों करते हैं?</h3>
              <p>यह मानव इतिहास का सबसे पुराना सवाल है। जन्म से मौत तक, हम समय और स्पेस में चलते रहते हैं - लेकिन क्यों? क्या हमारे अस्तित्व का कोई उद्देश्य है, या फिर हम बस एक उदासीन ब्रह्मांड में तैरते हुए cosmic accidents हैं?</p>
            </div>

            <div class="question-block">
              <h3>3. क्या भगवान सच में एक्जिस्ट करता है?</h3>
              <p>अरबों लोग किसी ऐसी चीज से प्रार्थना करते हैं जिसे वो देख नहीं सकते। मंदिर, चर्च, मस्जिद - ये सब विश्वास के स्मारक हैं। लेकिन क्या वाकई कोई दिव्य चेतना सुन रही है, या फिर भगवान वो सबसे बड़ी कहानी है जो हमने खुद को सुनाई है - निरर्थकता के डर से निपटने के लिए?</p>
            </div>

            <div class="question-block">
              <h3>4. हमें जीना सिखाया, मरना क्यों नहीं?</h3>
              <p>जिस पल हम पैदा होते हैं, हमें सिखाया जाता है कैसे जीना है - स्कूल जाओ, नौकरी करो, परिवार बनाओ। लेकिन मौत, जो जीवन की एकमात्र निश्चितता है, वो सबसे बड़ा टैबू बना हुआ है। कोई हमें मरना क्यों नहीं सिखाता?</p>
            </div>

            <div class="question-block">
              <h3>5. प्यार क्या है?</h3>
              <p>सबसे ज्यादा इस्तेमाल होने वाला शब्द, सबसे कम समझा जाने वाला इमोशन। हम इसके बारे में गाते हैं, इस पर फिल्में बनाते हैं, इसके लिए मारते हैं, मरते हैं। लेकिन प्यार है क्या, वाकई में? क्या यह बायोलॉजी है? केमिस्ट्री? या कुछ ऐसा जो हमारी समझ से परे है?</p>
            </div>

            <div class="question-block">
              <h3>6. एनलाइटनमेंट क्या है?</h3>
              <p>बुद्ध को मिली, रमण महर्षि ने इसे पाया, अनगिनत साधकों ने इसका पीछा किया। लेकिन एनलाइटनमेंट है क्या? क्या वाकई में ऐसी कोई स्थिति exist करती है? और अगर कोई enlightened हो जाए, तो क्या वो वाकई में फ्री हो जाता है?</p>
            </div>

            <div class="question-block">
              <h3>7. Nihilism क्या है और क्या यह हमारे लिए अच्छा है?</h3>
              <p>कुछ लोग कहते हैं कि कुछ भी matter नहीं करता। जीवन निरर्थक है, उद्देश्य एक भ्रम है, और हमारी सारी जद्दोजहद अंततः बेकार है। क्या यह सच है? और अगर है, तो क्या इस सच को स्वीकार करना liberation है या depression?</p>
            </div>

            <p class="closing-thought">आने वाले chapters में हम इन सवालों के जवाब तलाशेंगे। जवाब परफेक्ट नहीं होंगे, पूरे नहीं होंगे, लेकिन ईमानदार होंगे। क्योंकि यह यात्रा किसी अंतिम मंजिल तक पहुंचने के लिए नहीं है - यह खुद को समझने के लिए है।</p>
            
            <p class="closing-thought"><em>चलो शुरू करते हैं...</em></p>
          `,
          readingTime: "5 मिनट"
        }
      ]
    },
    {
      partNumber: 2,
      partTitle: "आजादी और उसके भ्रम",
      chapters: [
        {
          id: 2,
          title: "क्या हम सच में आजाद हैं?",
          content: `
            <style>
              .lead {
                font-size: 1.35rem;
                line-height: 1.8;
                font-weight: 400;
                color: #1a1a1a;
                margin-bottom: 2rem;
                font-style: italic;
                border-left: 4px solid #d97706;
                padding-left: 1.5rem;
                background: #fef3c7;
                padding: 1.5rem;
                border-radius: 8px;
              }

              p {
                font-size: 1.125rem;
                line-height: 1.9;
                color: #2d3748;
                margin-bottom: 1.5rem;
                text-align: justify;
              }

              h2 {
                font-size: 2rem;
                font-weight: 700;
                color: #78350f;
                margin-top: 3rem;
                margin-bottom: 1.5rem;
                border-bottom: 3px solid #d97706;
                padding-bottom: 0.5rem;
              }

              h3 {
                font-size: 1.5rem;
                font-weight: 600;
                color: #92400e;
                margin-bottom: 1rem;
              }

              blockquote {
                border-left: 4px solid #d97706;
                padding-left: 1.5rem;
                margin: 2rem 0;
                font-style: italic;
                color: #78350f;
                font-size: 1.2rem;
                background: #fffbeb;
                padding: 1.5rem;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
              }

              strong {
                color: #78350f;
                font-weight: 600;
                font-size: 1.15rem;
              }

              .highlight-box {
                background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
                border: 2px solid #fbbf24;
                padding: 1.5rem;
                margin: 2rem 0;
                border-radius: 12px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
              }

              .section-divider {
                height: 2px;
                background: linear-gradient(to right, transparent, #d97706, transparent);
                margin: 3rem 0;
              }
            </style>

            <p class="lead">आजादी मानव शब्दावली का सबसे कीमती शब्द है। हम इसके लिए लड़ते हैं, इसके लिए मरते हैं, इसका जश्न मनाते हैं। लेकिन क्या होगा अगर जिस आजादी को हम अपना मानते हैं, वो सिर्फ गुलामी का एक और रूप हो?</p>
            
            <h2>अदृश्य पिंजरा</h2>
            <p>अपनी जिंदगी को देखो। वाकई देखो। तुम्हारे कितने फैसले सच में तुम्हारे हैं? वो करियर जो तुमने चुना - क्या वो वाकई तुम्हारी पसंद थी, या समाज की उम्मीदों ने तुम्हारा हाथ पकड़कर तुम्हें वहां ले गया? जो विश्वास तुम रखते हो - क्या तुमने उन्हें चुना, या वो तुम्हारे अंदर program कर दिए गए इससे पहले कि तुम सोच भी पाते?</p>

            <p>हम एक ऐसी दुनिया में पैदा होते हैं जो तुरंत हमें shape करना शुरू कर देती है। हमारे माता-पिता हमें सिखाते हैं क्या सही है और क्या गलत। स्कूल हमें condition करते हैं कि कैसे सोचना है। समाज conformity को reward करता है और अलग होने को punish करता है। जब तक हम adults बनते हैं, तब तक हम दूसरे लोगों के ideas, beliefs, और expectations का चलता-फिरता collection बन चुके होते हैं।</p>

            <div class="section-divider"></div>

            <h2>कंडीशनिंग का खेल</h2>
            <p>हर दिन के हर पल, हमें condition किया जा रहा है। विज्ञापन हमें बताते हैं कि क्या चाहना है। सोशल मीडिया दिखाता है कि क्या value करना है। न्यूज़ चैनल्स बताते हैं कि किससे डरना है। और धीरे-धीरे, बिना एहसास किए, हम इन अदृश्य forces के गुलाम बन जाते हैं।</p>

            <blockquote>"इंसान आजाद पैदा होता है, और हर जगह वो जंजीरों में जकड़ा हुआ है।" — जीन-जैक्स रूसो</blockquote>

            <p>लेकिन असली जाल यह है: हमें यह एहसास भी नहीं होता कि हम जंजीरों में हैं। हम इसे "नॉर्मल लाइफ" कहते हैं, "प्रैक्टिकल होना", "बड़े होना"। हम पिंजरे को आजादी समझ लेते हैं क्योंकि हमने कभी इसके अलावा कुछ जाना ही नहीं।</p>

            <div class="section-divider"></div>

            <h2>आजादी से परे की आजादी</h2>
            <p>सच्ची आजादी का मतलब यह नहीं है कि तुम जो चाहो वो करो। सच्ची आजादी का मतलब है उन सभी अदृश्य forces के बारे में aware हो जाना जो तुम्हें control कर रहे हैं - और फिर consciously यह चुनना कि किसको रखना है और किसको छोड़ देना है।</p>

            <p>यह हर उस चीज को question करने के बारे में है जिस पर तुम believe करते हो। Cynical बनने के लिए नहीं, बल्कि authentic बनने के लिए। Conditioning की सारी layers को उतारने के लिए और यह जानने के लिए कि तुम असल में कौन हो।</p>

            <div class="highlight-box">
              <p><strong>आजादी की तरफ पहला कदम है अपनी गुलामी को पहचानना।</strong></p>
            </div>

            <p>और यह सबसे मुश्किल कदम है। क्योंकि इसका मतलब है यह स्वीकार करना कि तुम जो "तुम" हो उसका ज्यादातर हिस्सा असल में तुम हो ही नहीं। यह borrowed ideas का, inherited beliefs का, और programmed responses का collection है।</p>

            <div class="section-divider"></div>

            <h2>चुनाव</h2>
            <p>तो क्या हम वाकई आजाद हैं? नहीं। अभी नहीं। लेकिन हम हो सकते हैं।</p>

            <p>आजादी हमारा जन्मसिद्ध अधिकार नहीं है। यह कुछ ऐसा है जो हमें awareness के through, questioning के through, collective unconsciousness के खिलाफ अकेले खड़े होने की हिम्मत के through कमाना पड़ता है।</p>

            <p><strong>पिंजरे का दरवाजा कभी बंद था ही नहीं। हमने बस कभी उसे धकेलने की कोशिश ही नहीं की।</strong></p>
          `,
          readingTime: "6 मिनट"
        }
      ]
    },
    {
      partNumber: 3,
      partTitle: "उद्देश्य और अस्तित्व",
      chapters: [
        {
          id: 3,
          title: "हम एक्जिस्ट क्यों करते हैं?",
          content: `
            <p class="lead">यह वो सवाल है जिसने मानवता को तब से परेशान किया है जब से हम इसे पूछने के लिए काफी conscious हुए। हम यहां क्यों हैं? इस सबका क्या मतलब है?</p>
            
            <p><em>Content जल्द आ रहा है...</em></p>

            <p>इस chapter में हम existence, purpose, meaning, और इस बात को explore करेंगे कि क्या सवाल खुद ही problem है।</p>
          `,
          readingTime: "5 मिनट"
        }
      ]
    },
    {
      partNumber: 4,
      partTitle: "भगवान का सवाल",
      chapters: [
        {
          id: 4,
          title: "क्या भगवान सच में एक्जिस्ट करता है?",
          content: `
            <p class="lead">अरबों लोग किसी ऐसी चीज से प्रार्थना करते हैं जिसे वो न देख सकते हैं, न सुन सकते हैं, न छू सकते हैं। क्या यह विश्वास है या भ्रम? बुद्धिमत्ता है या wishful thinking?</p>
            
            <p><em>Content जल्द आ रहा है...</em></p>

            <p>इस chapter में हम divine के different perspectives को examine करेंगे, atheism से लेकर mysticism तक।</p>
          `,
          readingTime: "6 मिनट"
        }
      ]
    },
    {
      partNumber: 5,
      partTitle: "मौत और उसका इनकार",
      chapters: [
        {
          id: 5,
          title: "हमें जीना सिखाया, मरना क्यों नहीं?",
          content: `
            <p class="lead">मौत जीवन की एकमात्र निश्चितता है, फिर भी यह हमारा सबसे बड़ा taboo बना हुआ है। क्यों?</p>
            
            <p><em>Content जल्द आ रहा है...</em></p>

            <p>इस chapter में हम mortality के साथ हमारे relationship को explore करेंगे और यह देखेंगे कि हम अपनी मृत्यु का सामना करने से क्यों बचते हैं।</p>
          `,
          readingTime: "5 मिनट"
        }
      ]
    },
    {
      partNumber: 6,
      partTitle: "प्यार का खुलासा",
      chapters: [
        {
          id: 6,
          title: "प्यार क्या है?",
          content: `
            <p class="lead">मानव अनुभव में सबसे powerful force, और सबसे misunderstood। प्यार वाकई में है क्या?</p>
            
            <p><em>Content जल्द आ रहा है...</em></p>

            <p>इस chapter में हम love को dissect करेंगे - romantic, platonic, divine - और इसकी सच्ची nature को समझने की कोशिश करेंगे।</p>
          `,
          readingTime: "5 मिनट"
        }
      ]
    },
    {
      partNumber: 7,
      partTitle: "एनलाइटनमेंट का विरोधाभास",
      chapters: [
        {
          id: 7,
          title: "एनलाइटनमेंट क्या है?",
          content: `
            <p class="lead">आध्यात्मिक खोज का ultimate promise। लेकिन क्या enlightenment वाकई exist करती है? और अगर करती है, तो उसके बाद क्या होता है?</p>
            
            <p><em>Content जल्द आ रहा है...</em></p>

            <p>इस chapter में हम enlightenment, awakening को explore करेंगे और देखेंगे कि क्या सच्ची freedom संभव है।</p>
          `,
          readingTime: "6 मिनट"
        }
      ]
    },
    {
      partNumber: 8,
      partTitle: "शून्यता को अपनाना",
      chapters: [
        {
          id: 8,
          title: "Nihilism क्या है और क्या यह हमारे लिए अच्छा है?",
          content: `
            <p class="lead">कुछ भी matter नहीं करता। सब कुछ meaningless है। क्या यह निराशा है या मुक्ति?</p>
            
            <p><em>Content जल्द आ रहा है...</em></p>

            <p>इस chapter में हम nihilism को examine करेंगे - इसका वास्तविक मतलब क्या है, और क्या यह हमें destroy करता है या free करता है।</p>
          `,
          readingTime: "5 मिनट"
        }
      ]
    }
  ]
};