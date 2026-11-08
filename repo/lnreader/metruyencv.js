var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var e_1, _b;
var ha = Object.create;
var ce = Object.defineProperty, pa = Object.defineProperties, ga = Object.getOwnPropertyDescriptor, ba = Object.getOwnPropertyDescriptors, ma = Object.getOwnPropertyNames, er = Object.getOwnPropertySymbols, xa = Object.getPrototypeOf, rr = Object.prototype.hasOwnProperty, ya = Object.prototype.propertyIsEnumerable;
var ur = function (e, t, r) { return t in e ? ce(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r; }, St = function (e, t) {
    var e_2, _b;
    for (var r in t || (t = {}))
        rr.call(t, r) && ur(e, r, t[r]);
    if (er)
        try {
            for (var _c = __values(er(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var r = _d.value;
                ya.call(t, r) && ur(e, r, t[r]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    return e;
}, Vt = function (e, t) { return pa(e, ba(t)); };
var va = function (e, t) { return function () { return (t || e((t = { exports: {} }).exports, t), t.exports); }; }, ru = function (e, t) { for (var r in t)
    ce(e, r, { get: t[r], enumerable: !0 }); }, ar = function (e, t, r, n) {
    var e_3, _b;
    if (t && typeof t == "object" || typeof t == "function") {
        var _loop_1 = function (s) {
            !rr.call(e, s) && s !== r && ce(e, s, { get: function () { return t[s]; }, enumerable: !(n = ga(t, s)) || n.enumerable });
        };
        try {
            for (var _c = __values(ma(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var s = _d.value;
                _loop_1(s);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }
    return e;
};
var Gt = function (e, t, r) { return (r = e != null ? ha(xa(e)) : {}, ar(t || !e || !e.__esModule ? ce(r, "default", { value: e, enumerable: !0 }) : r, e)); }, wa = function (e) { return ar(ce({}, "__esModule", { value: !0 }), e); };
var Bt = va(function (Si, Ur) { Ur.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var Qn = {};
ru(Qn, { default: function () { return $n; } });
module.exports = wa(Qn);
var Ae = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (e) { return e.charCodeAt(0); }));
var Ce = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (e) { return e.charCodeAt(0); }));
var au, Sa = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Xt = (au = String.fromCodePoint) !== null && au !== void 0 ? au : function (e) { var t = ""; return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t; };
function nu(e) { var t; return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = Sa.get(e)) !== null && t !== void 0 ? t : e; }
var nt;
(function (e) { e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z"; })(nt || (nt = {}));
var Ta = 32, Dt;
(function (e) { e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE"; })(Dt || (Dt = {}));
function iu(e) { return e >= nt.ZERO && e <= nt.NINE; }
function Aa(e) { return e >= nt.UPPER_A && e <= nt.UPPER_F || e >= nt.LOWER_A && e <= nt.LOWER_F; }
function Ca(e) { return e >= nt.UPPER_A && e <= nt.UPPER_Z || e >= nt.LOWER_A && e <= nt.LOWER_Z || iu(e); }
function Ea(e) { return e === nt.EQUALS || Ca(e); }
var at;
(function (e) { e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity"; })(at || (at = {}));
var xt;
(function (e) { e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute"; })(xt || (xt = {}));
var Jt = (function () {
    function Jt(t, r, n) {
        this.decodeTree = t, this.emitCodePoint = r, this.errors = n, this.state = at.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = xt.Strict;
    }
    Jt.prototype.startEntity = function (t) { this.decodeMode = t, this.state = at.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    Jt.prototype.write = function (t, r) { switch (this.state) {
        case at.EntityStart: return t.charCodeAt(r) === nt.NUM ? (this.state = at.NumericStart, this.consumed += 1, this.stateNumericStart(t, r + 1)) : (this.state = at.NamedEntity, this.stateNamedEntity(t, r));
        case at.NumericStart: return this.stateNumericStart(t, r);
        case at.NumericDecimal: return this.stateNumericDecimal(t, r);
        case at.NumericHex: return this.stateNumericHex(t, r);
        case at.NamedEntity: return this.stateNamedEntity(t, r);
    } };
    Jt.prototype.stateNumericStart = function (t, r) { return r >= t.length ? -1 : (t.charCodeAt(r) | Ta) === nt.LOWER_X ? (this.state = at.NumericHex, this.consumed += 1, this.stateNumericHex(t, r + 1)) : (this.state = at.NumericDecimal, this.stateNumericDecimal(t, r)); };
    Jt.prototype.addToNumericResult = function (t, r, n, s) { if (r !== n) {
        var o = n - r;
        this.result = this.result * Math.pow(s, o) + parseInt(t.substr(r, o), s), this.consumed += o;
    } };
    Jt.prototype.stateNumericHex = function (t, r) { var n = r; for (; r < t.length;) {
        var s = t.charCodeAt(r);
        if (iu(s) || Aa(s))
            r += 1;
        else
            return this.addToNumericResult(t, n, r, 16), this.emitNumericEntity(s, 3);
    } return this.addToNumericResult(t, n, r, 16), -1; };
    Jt.prototype.stateNumericDecimal = function (t, r) { var n = r; for (; r < t.length;) {
        var s = t.charCodeAt(r);
        if (iu(s))
            r += 1;
        else
            return this.addToNumericResult(t, n, r, 10), this.emitNumericEntity(s, 2);
    } return this.addToNumericResult(t, n, r, 10), -1; };
    Jt.prototype.emitNumericEntity = function (t, r) { var n; if (this.consumed <= r)
        return (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (t === nt.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === xt.Strict)
        return 0; return this.emitCodePoint(nu(this.result), this.consumed), this.errors && (t !== nt.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    Jt.prototype.stateNamedEntity = function (t, r) { var n = this.decodeTree, s = n[this.treeIndex], o = (s & Dt.VALUE_LENGTH) >> 14; for (; r < t.length; r++, this.excess++) {
        var f = t.charCodeAt(r);
        if (this.treeIndex = Na(n, s, this.treeIndex + Math.max(1, o), f), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === xt.Attribute && (o === 0 || Ea(f)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (s = n[this.treeIndex], o = (s & Dt.VALUE_LENGTH) >> 14, o !== 0) {
            if (f === nt.SEMI)
                return this.emitNamedEntityData(this.treeIndex, o, this.consumed + this.excess);
            this.decodeMode !== xt.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    Jt.prototype.emitNotTerminatedNamedEntity = function () { var t; var _b = this, r = _b.result, n = _b.decodeTree, s = (n[r] & Dt.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(r, s, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed; };
    Jt.prototype.emitNamedEntityData = function (t, r, n) { var s = this.decodeTree; return this.emitCodePoint(r === 1 ? s[t] & ~Dt.VALUE_LENGTH : s[t + 1], n), r === 3 && this.emitCodePoint(s[t + 2], n), n; };
    Jt.prototype.end = function () { var t; switch (this.state) {
        case at.NamedEntity: return this.result !== 0 && (this.decodeMode !== xt.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case at.NumericDecimal: return this.emitNumericEntity(0, 2);
        case at.NumericHex: return this.emitNumericEntity(0, 3);
        case at.NumericStart: return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case at.EntityStart: return 0;
    } };
    return Jt;
}());
function nr(e) { var t = "", r = new Jt(e, function (n) { return t += Xt(n); }); return function (s, o) { var f = 0, d = 0; for (; (d = s.indexOf("&", d)) >= 0;) {
    t += s.slice(f, d), r.startEntity(o);
    var g = r.write(s, d + 1);
    if (g < 0) {
        f = d + r.end();
        break;
    }
    f = d + g, d = g === 0 ? f + 1 : f;
} var p = t + s.slice(f); return t = "", p; }; }
function Na(e, t, r, n) { var s = (t & Dt.BRANCH_LENGTH) >> 7, o = t & Dt.JUMP_TABLE; if (s === 0)
    return o !== 0 && n === o ? r : -1; if (o) {
    var p = n - o;
    return p < 0 || p >= s ? -1 : e[r + p] - 1;
} var f = r, d = f + s - 1; for (; f <= d;) {
    var p = f + d >>> 1, g = e[p];
    if (g < n)
        f = p + 1;
    else if (g > n)
        d = p - 1;
    else
        return e[p + s];
} return -1; }
var u0 = nr(Ae), r0 = nr(Ce);
var k;
(function (e) { e[e.Tab = 9] = "Tab", e[e.NewLine = 10] = "NewLine", e[e.FormFeed = 12] = "FormFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.Number = 35] = "Number", e[e.Amp = 38] = "Amp", e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Dash = 45] = "Dash", e[e.Slash = 47] = "Slash", e[e.Zero = 48] = "Zero", e[e.Nine = 57] = "Nine", e[e.Semi = 59] = "Semi", e[e.Lt = 60] = "Lt", e[e.Eq = 61] = "Eq", e[e.Gt = 62] = "Gt", e[e.Questionmark = 63] = "Questionmark", e[e.UpperA = 65] = "UpperA", e[e.LowerA = 97] = "LowerA", e[e.UpperF = 70] = "UpperF", e[e.LowerF = 102] = "LowerF", e[e.UpperZ = 90] = "UpperZ", e[e.LowerZ = 122] = "LowerZ", e[e.LowerX = 120] = "LowerX", e[e.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(k || (k = {}));
var y;
(function (e) { e[e.Text = 1] = "Text", e[e.BeforeTagName = 2] = "BeforeTagName", e[e.InTagName = 3] = "InTagName", e[e.InSelfClosingTag = 4] = "InSelfClosingTag", e[e.BeforeClosingTagName = 5] = "BeforeClosingTagName", e[e.InClosingTagName = 6] = "InClosingTagName", e[e.AfterClosingTagName = 7] = "AfterClosingTagName", e[e.BeforeAttributeName = 8] = "BeforeAttributeName", e[e.InAttributeName = 9] = "InAttributeName", e[e.AfterAttributeName = 10] = "AfterAttributeName", e[e.BeforeAttributeValue = 11] = "BeforeAttributeValue", e[e.InAttributeValueDq = 12] = "InAttributeValueDq", e[e.InAttributeValueSq = 13] = "InAttributeValueSq", e[e.InAttributeValueNq = 14] = "InAttributeValueNq", e[e.BeforeDeclaration = 15] = "BeforeDeclaration", e[e.InDeclaration = 16] = "InDeclaration", e[e.InProcessingInstruction = 17] = "InProcessingInstruction", e[e.BeforeComment = 18] = "BeforeComment", e[e.CDATASequence = 19] = "CDATASequence", e[e.InSpecialComment = 20] = "InSpecialComment", e[e.InCommentLike = 21] = "InCommentLike", e[e.BeforeSpecialS = 22] = "BeforeSpecialS", e[e.BeforeSpecialT = 23] = "BeforeSpecialT", e[e.SpecialStartSequence = 24] = "SpecialStartSequence", e[e.InSpecialTag = 25] = "InSpecialTag", e[e.InEntity = 26] = "InEntity"; })(y || (y = {}));
function Et(e) { return e === k.Space || e === k.NewLine || e === k.Tab || e === k.FormFeed || e === k.CarriageReturn; }
function Ee(e) { return e === k.Slash || e === k.Gt || Et(e); }
function ka(e) { return e >= k.LowerA && e <= k.LowerZ || e >= k.UpperA && e <= k.UpperZ; }
var yt;
(function (e) { e[e.NoValue = 0] = "NoValue", e[e.Unquoted = 1] = "Unquoted", e[e.Single = 2] = "Single", e[e.Double = 3] = "Double"; })(yt || (yt = {}));
var st = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Zt = (function () {
    function Zt(_b, n) {
        var _c = _b.xmlMode, t = _c === void 0 ? !1 : _c, _d = _b.decodeEntities, r = _d === void 0 ? !0 : _d;
        var _this = this;
        this.cbs = n, this.state = y.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = y.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = t, this.decodeEntities = r, this.entityDecoder = new Jt(t ? Ce : Ae, function (s, o) { return _this.emitCodePoint(s, o); });
    }
    Zt.prototype.reset = function () { this.state = y.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = y.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Zt.prototype.write = function (t) { this.offset += this.buffer.length, this.buffer = t, this.parse(); };
    Zt.prototype.end = function () { this.running && this.finish(); };
    Zt.prototype.pause = function () { this.running = !1; };
    Zt.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Zt.prototype.stateText = function (t) { t === k.Lt || !this.decodeEntities && this.fastForwardTo(k.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = y.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && t === k.Amp && this.startEntity(); };
    Zt.prototype.stateSpecialStartSequence = function (t) { var r = this.sequenceIndex === this.currentSequence.length; if (!(r ? Ee(t) : (t | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!r) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = y.InTagName, this.stateInTagName(t); };
    Zt.prototype.stateInSpecialTag = function (t) { if (this.sequenceIndex === this.currentSequence.length) {
        if (t === k.Gt || Et(t)) {
            var r = this.index - this.currentSequence.length;
            if (this.sectionStart < r) {
                var n = this.index;
                this.index = r, this.cbs.ontext(this.sectionStart, r), this.index = n;
            }
            this.isSpecial = !1, this.sectionStart = r + 2, this.stateInClosingTagName(t);
            return;
        }
        this.sequenceIndex = 0;
    } (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === st.TitleEnd ? this.decodeEntities && t === k.Amp && this.startEntity() : this.fastForwardTo(k.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === k.Lt); };
    Zt.prototype.stateCDATASequence = function (t) { t === st.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === st.Cdata.length && (this.state = y.InCommentLike, this.currentSequence = st.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = y.InDeclaration, this.stateInDeclaration(t)); };
    Zt.prototype.fastForwardTo = function (t) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === t)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Zt.prototype.stateInCommentLike = function (t) { t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === st.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = y.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Zt.prototype.isTagStartChar = function (t) { return this.xmlMode ? !Ee(t) : ka(t); };
    Zt.prototype.startSpecial = function (t, r) { this.isSpecial = !0, this.currentSequence = t, this.sequenceIndex = r, this.state = y.SpecialStartSequence; };
    Zt.prototype.stateBeforeTagName = function (t) { if (t === k.ExclamationMark)
        this.state = y.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (t === k.Questionmark)
        this.state = y.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(t)) {
        var r = t | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = y.InTagName : r === st.ScriptEnd[2] ? this.state = y.BeforeSpecialS : r === st.TitleEnd[2] ? this.state = y.BeforeSpecialT : this.state = y.InTagName;
    }
    else
        t === k.Slash ? this.state = y.BeforeClosingTagName : (this.state = y.Text, this.stateText(t)); };
    Zt.prototype.stateInTagName = function (t) { Ee(t) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = y.BeforeAttributeName, this.stateBeforeAttributeName(t)); };
    Zt.prototype.stateBeforeClosingTagName = function (t) { Et(t) || (t === k.Gt ? this.state = y.Text : (this.state = this.isTagStartChar(t) ? y.InClosingTagName : y.InSpecialComment, this.sectionStart = this.index)); };
    Zt.prototype.stateInClosingTagName = function (t) { (t === k.Gt || Et(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = y.AfterClosingTagName, this.stateAfterClosingTagName(t)); };
    Zt.prototype.stateAfterClosingTagName = function (t) { (t === k.Gt || this.fastForwardTo(k.Gt)) && (this.state = y.Text, this.sectionStart = this.index + 1); };
    Zt.prototype.stateBeforeAttributeName = function (t) { t === k.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = y.InSpecialTag, this.sequenceIndex = 0) : this.state = y.Text, this.sectionStart = this.index + 1) : t === k.Slash ? this.state = y.InSelfClosingTag : Et(t) || (this.state = y.InAttributeName, this.sectionStart = this.index); };
    Zt.prototype.stateInSelfClosingTag = function (t) { t === k.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = y.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : Et(t) || (this.state = y.BeforeAttributeName, this.stateBeforeAttributeName(t)); };
    Zt.prototype.stateInAttributeName = function (t) { (t === k.Eq || Ee(t)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = y.AfterAttributeName, this.stateAfterAttributeName(t)); };
    Zt.prototype.stateAfterAttributeName = function (t) { t === k.Eq ? this.state = y.BeforeAttributeValue : t === k.Slash || t === k.Gt ? (this.cbs.onattribend(yt.NoValue, this.sectionStart), this.sectionStart = -1, this.state = y.BeforeAttributeName, this.stateBeforeAttributeName(t)) : Et(t) || (this.cbs.onattribend(yt.NoValue, this.sectionStart), this.state = y.InAttributeName, this.sectionStart = this.index); };
    Zt.prototype.stateBeforeAttributeValue = function (t) { t === k.DoubleQuote ? (this.state = y.InAttributeValueDq, this.sectionStart = this.index + 1) : t === k.SingleQuote ? (this.state = y.InAttributeValueSq, this.sectionStart = this.index + 1) : Et(t) || (this.sectionStart = this.index, this.state = y.InAttributeValueNq, this.stateInAttributeValueNoQuotes(t)); };
    Zt.prototype.handleInAttributeValue = function (t, r) { t === r || !this.decodeEntities && this.fastForwardTo(r) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(r === k.DoubleQuote ? yt.Double : yt.Single, this.index + 1), this.state = y.BeforeAttributeName) : this.decodeEntities && t === k.Amp && this.startEntity(); };
    Zt.prototype.stateInAttributeValueDoubleQuotes = function (t) { this.handleInAttributeValue(t, k.DoubleQuote); };
    Zt.prototype.stateInAttributeValueSingleQuotes = function (t) { this.handleInAttributeValue(t, k.SingleQuote); };
    Zt.prototype.stateInAttributeValueNoQuotes = function (t) { Et(t) || t === k.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(yt.Unquoted, this.index), this.state = y.BeforeAttributeName, this.stateBeforeAttributeName(t)) : this.decodeEntities && t === k.Amp && this.startEntity(); };
    Zt.prototype.stateBeforeDeclaration = function (t) { t === k.OpeningSquareBracket ? (this.state = y.CDATASequence, this.sequenceIndex = 0) : this.state = t === k.Dash ? y.BeforeComment : y.InDeclaration; };
    Zt.prototype.stateInDeclaration = function (t) { (t === k.Gt || this.fastForwardTo(k.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = y.Text, this.sectionStart = this.index + 1); };
    Zt.prototype.stateInProcessingInstruction = function (t) { (t === k.Gt || this.fastForwardTo(k.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = y.Text, this.sectionStart = this.index + 1); };
    Zt.prototype.stateBeforeComment = function (t) { t === k.Dash ? (this.state = y.InCommentLike, this.currentSequence = st.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = y.InDeclaration; };
    Zt.prototype.stateInSpecialComment = function (t) { (t === k.Gt || this.fastForwardTo(k.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = y.Text, this.sectionStart = this.index + 1); };
    Zt.prototype.stateBeforeSpecialS = function (t) { var r = t | 32; r === st.ScriptEnd[3] ? this.startSpecial(st.ScriptEnd, 4) : r === st.StyleEnd[3] ? this.startSpecial(st.StyleEnd, 4) : (this.state = y.InTagName, this.stateInTagName(t)); };
    Zt.prototype.stateBeforeSpecialT = function (t) { var r = t | 32; r === st.TitleEnd[3] ? this.startSpecial(st.TitleEnd, 4) : r === st.TextareaEnd[3] ? this.startSpecial(st.TextareaEnd, 4) : (this.state = y.InTagName, this.stateInTagName(t)); };
    Zt.prototype.startEntity = function () { this.baseState = this.state, this.state = y.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? xt.Strict : this.baseState === y.Text || this.baseState === y.InSpecialTag ? xt.Legacy : xt.Attribute); };
    Zt.prototype.stateInEntity = function () { var t = this.entityDecoder.write(this.buffer, this.index - this.offset); t >= 0 ? (this.state = this.baseState, t === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Zt.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === y.Text || this.state === y.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === y.InAttributeValueDq || this.state === y.InAttributeValueSq || this.state === y.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Zt.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Zt.prototype.parse = function () { for (; this.shouldContinue();) {
        var t = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case y.Text: {
                this.stateText(t);
                break;
            }
            case y.SpecialStartSequence: {
                this.stateSpecialStartSequence(t);
                break;
            }
            case y.InSpecialTag: {
                this.stateInSpecialTag(t);
                break;
            }
            case y.CDATASequence: {
                this.stateCDATASequence(t);
                break;
            }
            case y.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(t);
                break;
            }
            case y.InAttributeName: {
                this.stateInAttributeName(t);
                break;
            }
            case y.InCommentLike: {
                this.stateInCommentLike(t);
                break;
            }
            case y.InSpecialComment: {
                this.stateInSpecialComment(t);
                break;
            }
            case y.BeforeAttributeName: {
                this.stateBeforeAttributeName(t);
                break;
            }
            case y.InTagName: {
                this.stateInTagName(t);
                break;
            }
            case y.InClosingTagName: {
                this.stateInClosingTagName(t);
                break;
            }
            case y.BeforeTagName: {
                this.stateBeforeTagName(t);
                break;
            }
            case y.AfterAttributeName: {
                this.stateAfterAttributeName(t);
                break;
            }
            case y.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(t);
                break;
            }
            case y.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(t);
                break;
            }
            case y.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(t);
                break;
            }
            case y.AfterClosingTagName: {
                this.stateAfterClosingTagName(t);
                break;
            }
            case y.BeforeSpecialS: {
                this.stateBeforeSpecialS(t);
                break;
            }
            case y.BeforeSpecialT: {
                this.stateBeforeSpecialT(t);
                break;
            }
            case y.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(t);
                break;
            }
            case y.InSelfClosingTag: {
                this.stateInSelfClosingTag(t);
                break;
            }
            case y.InDeclaration: {
                this.stateInDeclaration(t);
                break;
            }
            case y.BeforeDeclaration: {
                this.stateBeforeDeclaration(t);
                break;
            }
            case y.BeforeComment: {
                this.stateBeforeComment(t);
                break;
            }
            case y.InProcessingInstruction: {
                this.stateInProcessingInstruction(t);
                break;
            }
            case y.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Zt.prototype.finish = function () { this.state === y.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Zt.prototype.handleTrailingData = function () { var t = this.buffer.length + this.offset; this.sectionStart >= t || (this.state === y.InCommentLike ? this.currentSequence === st.CdataEnd ? this.cbs.oncdata(this.sectionStart, t, 0) : this.cbs.oncomment(this.sectionStart, t, 0) : this.state === y.InTagName || this.state === y.BeforeAttributeName || this.state === y.BeforeAttributeValue || this.state === y.AfterAttributeName || this.state === y.InAttributeName || this.state === y.InAttributeValueSq || this.state === y.InAttributeValueDq || this.state === y.InAttributeValueNq || this.state === y.InClosingTagName || this.cbs.ontext(this.sectionStart, t)); };
    Zt.prototype.emitCodePoint = function (t, r) { this.baseState !== y.Text && this.baseState !== y.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + r, this.index = this.sectionStart - 1, this.cbs.onattribentity(t)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + r, this.index = this.sectionStart - 1, this.cbs.ontextentity(t, this.sectionStart)); };
    return Zt;
}());
var Kt = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), P = new Set(["p"]), ir = new Set(["thead", "tbody"]), sr = new Set(["dd", "dt"]), cr = new Set(["rt", "rp"]), La = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", P], ["h1", P], ["h2", P], ["h3", P], ["h4", P], ["h5", P], ["h6", P], ["select", Kt], ["input", Kt], ["output", Kt], ["button", Kt], ["datalist", Kt], ["textarea", Kt], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", sr], ["dt", sr], ["address", P], ["article", P], ["aside", P], ["blockquote", P], ["details", P], ["div", P], ["dl", P], ["fieldset", P], ["figcaption", P], ["figure", P], ["footer", P], ["form", P], ["header", P], ["hr", P], ["main", P], ["nav", P], ["ol", P], ["pre", P], ["section", P], ["table", P], ["ul", P], ["rt", cr], ["rp", cr], ["tbody", ir], ["tfoot", ir]]), qa = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), or = new Set(["math", "svg"]), lr = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), Oa = /\s|\//, oe = (function () {
    function oe(t, r) {
        if (r === void 0) { r = {}; }
        var n, s, o, f, d, p;
        this.options = r, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = t != null ? t : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (n = r.lowerCaseTags) !== null && n !== void 0 ? n : this.htmlMode, this.lowerCaseAttributeNames = (s = r.lowerCaseAttributeNames) !== null && s !== void 0 ? s : this.htmlMode, this.recognizeSelfClosing = (o = r.recognizeSelfClosing) !== null && o !== void 0 ? o : !this.htmlMode, this.tokenizer = new ((f = r.Tokenizer) !== null && f !== void 0 ? f : Zt)(this.options, this), this.foreignContext = [!this.htmlMode], (p = (d = this.cbs).onparserinit) === null || p === void 0 || p.call(d, this);
    }
    oe.prototype.ontext = function (t, r) { var n, s; var o = this.getSlice(t, r); this.endIndex = r - 1, (s = (n = this.cbs).ontext) === null || s === void 0 || s.call(n, o), this.startIndex = r; };
    oe.prototype.ontextentity = function (t, r) { var n, s; this.endIndex = r - 1, (s = (n = this.cbs).ontext) === null || s === void 0 || s.call(n, Xt(t)), this.startIndex = r; };
    oe.prototype.isVoidElement = function (t) { return this.htmlMode && qa.has(t); };
    oe.prototype.onopentagname = function (t, r) { this.endIndex = r; var n = this.getSlice(t, r); this.lowerCaseTagNames && (n = n.toLowerCase()), this.emitOpenTag(n); };
    oe.prototype.emitOpenTag = function (t) { var r, n, s, o; this.openTagStart = this.startIndex, this.tagname = t; var f = this.htmlMode && La.get(t); if (f)
        for (; this.stack.length > 0 && f.has(this.stack[0]);) {
            var d = this.stack.shift();
            (n = (r = this.cbs).onclosetag) === null || n === void 0 || n.call(r, d, !0);
        } this.isVoidElement(t) || (this.stack.unshift(t), this.htmlMode && (or.has(t) ? this.foreignContext.unshift(!0) : lr.has(t) && this.foreignContext.unshift(!1))), (o = (s = this.cbs).onopentagname) === null || o === void 0 || o.call(s, t), this.cbs.onopentag && (this.attribs = {}); };
    oe.prototype.endOpenTag = function (t) { var r, n; this.startIndex = this.openTagStart, this.attribs && ((n = (r = this.cbs).onopentag) === null || n === void 0 || n.call(r, this.tagname, this.attribs, t), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    oe.prototype.onopentagend = function (t) { this.endIndex = t, this.endOpenTag(!1), this.startIndex = t + 1; };
    oe.prototype.onclosetag = function (t, r) { var n, s, o, f, d, p, g, v; this.endIndex = r; var N = this.getSlice(t, r); if (this.lowerCaseTagNames && (N = N.toLowerCase()), this.htmlMode && (or.has(N) || lr.has(N)) && this.foreignContext.shift(), this.isVoidElement(N))
        this.htmlMode && N === "br" && ((f = (o = this.cbs).onopentagname) === null || f === void 0 || f.call(o, "br"), (p = (d = this.cbs).onopentag) === null || p === void 0 || p.call(d, "br", {}, !0), (v = (g = this.cbs).onclosetag) === null || v === void 0 || v.call(g, "br", !1));
    else {
        var C = this.stack.indexOf(N);
        if (C !== -1)
            for (var S = 0; S <= C; S++) {
                var L = this.stack.shift();
                (s = (n = this.cbs).onclosetag) === null || s === void 0 || s.call(n, L, S !== C);
            }
        else
            this.htmlMode && N === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = r + 1; };
    oe.prototype.onselfclosingtag = function (t) { this.endIndex = t, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = t + 1) : this.onopentagend(t); };
    oe.prototype.closeCurrentTag = function (t) { var r, n; var s = this.tagname; this.endOpenTag(t), this.stack[0] === s && ((n = (r = this.cbs).onclosetag) === null || n === void 0 || n.call(r, s, !t), this.stack.shift()); };
    oe.prototype.onattribname = function (t, r) { this.startIndex = t; var n = this.getSlice(t, r); this.attribname = this.lowerCaseAttributeNames ? n.toLowerCase() : n; };
    oe.prototype.onattribdata = function (t, r) { this.attribvalue += this.getSlice(t, r); };
    oe.prototype.onattribentity = function (t) { this.attribvalue += Xt(t); };
    oe.prototype.onattribend = function (t, r) { var n, s; this.endIndex = r, (s = (n = this.cbs).onattribute) === null || s === void 0 || s.call(n, this.attribname, this.attribvalue, t === yt.Double ? '"' : t === yt.Single ? "'" : t === yt.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    oe.prototype.getInstructionName = function (t) { var r = t.search(Oa), n = r < 0 ? t : t.substr(0, r); return this.lowerCaseTagNames && (n = n.toLowerCase()), n; };
    oe.prototype.ondeclaration = function (t, r) { this.endIndex = r; var n = this.getSlice(t, r); if (this.cbs.onprocessinginstruction) {
        var s = this.getInstructionName(n);
        this.cbs.onprocessinginstruction("!".concat(s), "!".concat(n));
    } this.startIndex = r + 1; };
    oe.prototype.onprocessinginstruction = function (t, r) { this.endIndex = r; var n = this.getSlice(t, r); if (this.cbs.onprocessinginstruction) {
        var s = this.getInstructionName(n);
        this.cbs.onprocessinginstruction("?".concat(s), "?".concat(n));
    } this.startIndex = r + 1; };
    oe.prototype.oncomment = function (t, r, n) { var s, o, f, d; this.endIndex = r, (o = (s = this.cbs).oncomment) === null || o === void 0 || o.call(s, this.getSlice(t, r - n)), (d = (f = this.cbs).oncommentend) === null || d === void 0 || d.call(f), this.startIndex = r + 1; };
    oe.prototype.oncdata = function (t, r, n) { var s, o, f, d, p, g, v, N, C, S; this.endIndex = r; var L = this.getSlice(t, r - n); !this.htmlMode || this.options.recognizeCDATA ? ((o = (s = this.cbs).oncdatastart) === null || o === void 0 || o.call(s), (d = (f = this.cbs).ontext) === null || d === void 0 || d.call(f, L), (g = (p = this.cbs).oncdataend) === null || g === void 0 || g.call(p)) : ((N = (v = this.cbs).oncomment) === null || N === void 0 || N.call(v, "[CDATA[".concat(L, "]]")), (S = (C = this.cbs).oncommentend) === null || S === void 0 || S.call(C)), this.startIndex = r + 1; };
    oe.prototype.onend = function () { var t, r; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var n = 0; n < this.stack.length; n++)
            this.cbs.onclosetag(this.stack[n], !0);
    } (r = (t = this.cbs).onend) === null || r === void 0 || r.call(t); };
    oe.prototype.reset = function () { var t, r, n, s; (r = (t = this.cbs).onreset) === null || r === void 0 || r.call(t), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (s = (n = this.cbs).onparserinit) === null || s === void 0 || s.call(n, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    oe.prototype.parseComplete = function (t) { this.reset(), this.end(t); };
    oe.prototype.getSlice = function (t, r) { for (; t - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var n = this.buffers[0].slice(t - this.bufferOffset, r - this.bufferOffset); for (; r - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), n += this.buffers[0].slice(0, r - this.bufferOffset); return n; };
    oe.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    oe.prototype.write = function (t) { var r, n; if (this.ended) {
        (n = (r = this.cbs).onerror) === null || n === void 0 || n.call(r, new Error(".write() after done!"));
        return;
    } this.buffers.push(t), this.tokenizer.running && (this.tokenizer.write(t), this.writeIndex++); };
    oe.prototype.end = function (t) { var r, n; if (this.ended) {
        (n = (r = this.cbs).onerror) === null || n === void 0 || n.call(r, new Error(".end() after done!"));
        return;
    } t && this.write(t), this.ended = !0, this.tokenizer.end(); };
    oe.prototype.pause = function () { this.tokenizer.pause(); };
    oe.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    oe.prototype.parseChunk = function (t) { this.write(t); };
    oe.prototype.done = function (t) { this.end(t); };
    return oe;
}());
var Ne = {};
ru(Ne, { CDATA: function () { return gu; }, Comment: function () { return fu; }, Directive: function () { return lu; }, Doctype: function () { return bu; }, ElementType: function () { return D; }, Root: function () { return cu; }, Script: function () { return du; }, Style: function () { return hu; }, Tag: function () { return pu; }, Text: function () { return ou; }, isTag: function () { return su; } });
var D;
(function (e) { e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"; })(D || (D = {}));
function su(e) { return e.type === D.Tag || e.type === D.Script || e.type === D.Style; }
var cu = D.Root, ou = D.Text, lu = D.Directive, fu = D.Comment, du = D.Script, hu = D.Style, pu = D.Tag, gu = D.CDATA, bu = D.Doctype;
var ke = (function () {
    function ke() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(ke.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (t) { this.parent = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ke.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (t) { this.prev = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ke.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (t) { this.next = t; },
        enumerable: false,
        configurable: true
    });
    ke.prototype.cloneNode = function (t) {
        if (t === void 0) { t = !1; }
        return fr(this, t);
    };
    return ke;
}()), le = (function (_super) {
    __extends(le, _super);
    function le(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = t;
        return _this;
    }
    Object.defineProperty(le.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (t) { this.data = t; },
        enumerable: false,
        configurable: true
    });
    return le;
}(ke)), Yt = (function (_super) {
    __extends(Yt, _super);
    function Yt() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = D.Text;
        return _this;
    }
    Object.defineProperty(Yt.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return Yt;
}(le)), fe = (function (_super) {
    __extends(fe, _super);
    function fe() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = D.Comment;
        return _this;
    }
    Object.defineProperty(fe.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return fe;
}(le)), de = (function (_super) {
    __extends(de, _super);
    function de(t, r) {
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = t, _this.type = D.Directive;
        return _this;
    }
    Object.defineProperty(de.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return de;
}(le)), he = (function (_super) {
    __extends(he, _super);
    function he(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = t;
        return _this;
    }
    Object.defineProperty(he.prototype, "firstChild", {
        get: function () { var t; return (t = this.children[0]) !== null && t !== void 0 ? t : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(he.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(he.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (t) { this.children = t; },
        enumerable: false,
        configurable: true
    });
    return he;
}(ke)), pe = (function (_super) {
    __extends(pe, _super);
    function pe() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = D.CDATA;
        return _this;
    }
    Object.defineProperty(pe.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return pe;
}(he)), te = (function (_super) {
    __extends(te, _super);
    function te() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = D.Root;
        return _this;
    }
    Object.defineProperty(te.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return te;
}(he)), ge = (function (_super) {
    __extends(ge, _super);
    function ge(t, r, n, s) {
        if (n === void 0) { n = []; }
        if (s === void 0) { s = t === "script" ? D.Script : t === "style" ? D.Style : D.Tag; }
        var _this = this;
        _this = _super.call(this, n) || this, _this.name = t, _this.attribs = r, _this.type = s;
        return _this;
    }
    Object.defineProperty(ge.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ge.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (t) { this.name = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ge.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (t) { var r, n; return { name: t, value: _this.attribs[t], namespace: (r = _this["x-attribsNamespace"]) === null || r === void 0 ? void 0 : r[t], prefix: (n = _this["x-attribsPrefix"]) === null || n === void 0 ? void 0 : n[t] }; });
        },
        enumerable: false,
        configurable: true
    });
    return ge;
}(he));
function R(e) { return su(e); }
function ee(e) { return e.type === D.CDATA; }
function Tt(e) { return e.type === D.Text; }
function be(e) { return e.type === D.Comment; }
function Da(e) { return e.type === D.Directive; }
function xu(e) { return e.type === D.Root; }
function ct(e) { return Object.prototype.hasOwnProperty.call(e, "children"); }
function fr(e, t) {
    if (t === void 0) { t = !1; }
    var r;
    if (Tt(e))
        r = new Yt(e.data);
    else if (be(e))
        r = new fe(e.data);
    else if (R(e)) {
        var n = t ? mu(e.children) : [], s_1 = new ge(e.name, St({}, e.attribs), n);
        n.forEach(function (o) { return o.parent = s_1; }), e.namespace != null && (s_1.namespace = e.namespace), e["x-attribsNamespace"] && (s_1["x-attribsNamespace"] = St({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (s_1["x-attribsPrefix"] = St({}, e["x-attribsPrefix"])), r = s_1;
    }
    else if (ee(e)) {
        var n = t ? mu(e.children) : [], s_2 = new pe(n);
        n.forEach(function (o) { return o.parent = s_2; }), r = s_2;
    }
    else if (xu(e)) {
        var n = t ? mu(e.children) : [], s_3 = new te(n);
        n.forEach(function (o) { return o.parent = s_3; }), e["x-mode"] && (s_3["x-mode"] = e["x-mode"]), r = s_3;
    }
    else if (Da(e)) {
        var n = new de(e.name, e.data);
        e["x-name"] != null && (n["x-name"] = e["x-name"], n["x-publicId"] = e["x-publicId"], n["x-systemId"] = e["x-systemId"]), r = n;
    }
    else
        throw new Error("Not implemented yet: ".concat(e.type));
    return r.startIndex = e.startIndex, r.endIndex = e.endIndex, e.sourceCodeLocation != null && (r.sourceCodeLocation = e.sourceCodeLocation), r;
}
function mu(e) { var t = e.map(function (r) { return fr(r, !0); }); for (var r = 1; r < t.length; r++)
    t[r].prev = t[r - 1], t[r - 1].next = t[r]; return t; }
var dr = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, ue = (function () {
    function ue(t, r, n) {
        this.dom = [], this.root = new te(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof r == "function" && (n = r, r = dr), typeof t == "object" && (r = t, t = void 0), this.callback = t != null ? t : null, this.options = r != null ? r : dr, this.elementCB = n != null ? n : null;
    }
    ue.prototype.onparserinit = function (t) { this.parser = t; };
    ue.prototype.onreset = function () { this.dom = [], this.root = new te(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    ue.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    ue.prototype.onerror = function (t) { this.handleCallback(t); };
    ue.prototype.onclosetag = function () { this.lastNode = null; var t = this.tagStack.pop(); this.options.withEndIndices && (t.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(t); };
    ue.prototype.onopentag = function (t, r) { var n = this.options.xmlMode ? D.Tag : void 0, s = new ge(t, r, void 0, n); this.addNode(s), this.tagStack.push(s); };
    ue.prototype.ontext = function (t) { var r = this.lastNode; if (r && r.type === D.Text)
        r.data += t, this.options.withEndIndices && (r.endIndex = this.parser.endIndex);
    else {
        var n = new Yt(t);
        this.addNode(n), this.lastNode = n;
    } };
    ue.prototype.oncomment = function (t) { if (this.lastNode && this.lastNode.type === D.Comment) {
        this.lastNode.data += t;
        return;
    } var r = new fe(t); this.addNode(r), this.lastNode = r; };
    ue.prototype.oncommentend = function () { this.lastNode = null; };
    ue.prototype.oncdatastart = function () { var t = new Yt(""), r = new pe([t]); this.addNode(r), t.parent = r, this.lastNode = t; };
    ue.prototype.oncdataend = function () { this.lastNode = null; };
    ue.prototype.onprocessinginstruction = function (t, r) { var n = new de(t, r); this.addNode(n); };
    ue.prototype.handleCallback = function (t) { if (typeof this.callback == "function")
        this.callback(t, this.dom);
    else if (t)
        throw t; };
    ue.prototype.addNode = function (t) { var r = this.tagStack[this.tagStack.length - 1], n = r.children[r.children.length - 1]; this.options.withStartIndices && (t.startIndex = this.parser.startIndex), this.options.withEndIndices && (t.endIndex = this.parser.endIndex), r.children.push(t), n && (t.prev = n, n.next = t), t.parent = r, this.lastNode = null; };
    return ue;
}());
var At = {};
ru(At, { DocumentPosition: function () { return vt; }, append: function () { return Ka; }, appendChild: function () { return Za; }, compareDocumentPosition: function () { return Nr; }, existsOne: function () { return Cr; }, filter: function () { return ae; }, find: function () { return Pe; }, findAll: function () { return en; }, findOne: function () { return Be; }, findOneChild: function () { return tn; }, getAttributeValue: function () { return Qa; }, getChildren: function () { return Ue; }, getElementById: function () { return nn; }, getElements: function () { return an; }, getElementsByClassName: function () { return sn; }, getElementsByTagName: function () { return jt; }, getElementsByTagType: function () { return cn; }, getFeed: function () { return qu; }, getInnerHTML: function () { return $a; }, getName: function () { return Xa; }, getOuterHTML: function () { return Tr; }, getParent: function () { return Ar; }, getSiblings: function () { return Re; }, getText: function () { return De; }, hasAttrib: function () { return Wa; }, hasChildren: function () { return ct; }, innerText: function () { return Au; }, isCDATA: function () { return ee; }, isComment: function () { return be; }, isDocument: function () { return xu; }, isTag: function () { return R; }, isText: function () { return Tt; }, nextElementSibling: function () { return Cu; }, prepend: function () { return Nu; }, prependChild: function () { return Ya; }, prevElementSibling: function () { return Eu; }, removeElement: function () { return Nt; }, removeSubsets: function () { return on; }, replaceElement: function () { return Ja; }, testElement: function () { return rn; }, textContent: function () { return Ut; }, uniqueSort: function () { return Lu; } });
function Le(e) { for (var t = 1; t < e.length; t++)
    e[t][0] += e[t - 1][0] + 1; return e; }
var Ua = new Map(Le([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(Le([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(Le([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(Le([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var yu = /["&'<>$\x80-\uFFFF]/g, hr = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), pr = String.prototype.codePointAt != null ? function (e, t) { return e.codePointAt(t); } : function (e, t) { return (e.charCodeAt(t) & 64512) === 55296 ? (e.charCodeAt(t) - 55296) * 1024 + e.charCodeAt(t + 1) - 56320 + 65536 : e.charCodeAt(t); };
function me(e) { var t = "", r = 0, n; for (; (n = yu.exec(e)) !== null;) {
    var s = n.index, o = e.charCodeAt(s), f = hr.get(o);
    f !== void 0 ? (t += e.substring(r, s) + f, r = s + 1) : (t += "".concat(e.substring(r, s), "&#x").concat(pr(e, s).toString(16), ";"), r = yu.lastIndex += +((o & 64512) === 55296));
} return t + e.substr(r); }
function vu(e, t) { return function (n) { var s, o = 0, f = ""; for (; s = e.exec(n);)
    o !== s.index && (f += n.substring(o, s.index)), f += t.get(s[0].charCodeAt(0)), o = s.index + 1; return f + n.substring(o); }; }
var gr = vu(/[&<>'"]/g, hr), qe = vu(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), Oe = vu(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var br;
(function (e) { e[e.XML = 0] = "XML", e[e.HTML = 1] = "HTML"; })(br || (br = {}));
var mr;
(function (e) { e[e.UTF8 = 0] = "UTF8", e[e.ASCII = 1] = "ASCII", e[e.Extensive = 2] = "Extensive", e[e.Attribute = 3] = "Attribute", e[e.Text = 4] = "Text"; })(mr || (mr = {}));
var vr = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (e) { return [e.toLowerCase(), e]; })), wr = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (e) { return [e.toLowerCase(), e]; }));
var Pa = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function Ba(e) { return e.replace(/"/g, "&quot;"); }
function Ha(e, t) { var r; if (!e)
    return; var n = ((r = t.encodeEntities) !== null && r !== void 0 ? r : t.decodeEntities) === !1 ? Ba : t.xmlMode || t.encodeEntities !== "utf8" ? me : qe; return Object.keys(e).map(function (s) { var o, f; var d = (o = e[s]) !== null && o !== void 0 ? o : ""; return t.xmlMode === "foreign" && (s = (f = wr.get(s)) !== null && f !== void 0 ? f : s), !t.emptyAttrs && !t.xmlMode && d === "" ? s : "".concat(s, "=\"").concat(n(d), "\""); }).join(" "); }
var Sr = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function Tu(e, t) {
    if (t === void 0) { t = {}; }
    var r = "length" in e ? e : [e], n = "";
    for (var s = 0; s < r.length; s++)
        n += Ma(r[s], t);
    return n;
}
var re = Tu;
function Ma(e, t) { switch (e.type) {
    case cu: return Tu(e.children, t);
    case bu:
    case lu: return Va(e);
    case fu: return za(e);
    case gu: return ja(e);
    case du:
    case hu:
    case pu: return Ia(e, t);
    case ou: return Ga(e, t);
} }
var Fa = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), _a = new Set(["svg", "math"]);
function Ia(e, t) { var r; t.xmlMode === "foreign" && (e.name = (r = vr.get(e.name)) !== null && r !== void 0 ? r : e.name, e.parent && Fa.has(e.parent.name) && (t = Vt(St({}, t), { xmlMode: !1 }))), !t.xmlMode && _a.has(e.name) && (t = Vt(St({}, t), { xmlMode: "foreign" })); var n = "<".concat(e.name), s = Ha(e.attribs, t); return s && (n += " ".concat(s)), e.children.length === 0 && (t.xmlMode ? t.selfClosingTags !== !1 : t.selfClosingTags && Sr.has(e.name)) ? (t.xmlMode || (n += " "), n += "/>") : (n += ">", e.children.length > 0 && (n += Tu(e.children, t)), (t.xmlMode || !Sr.has(e.name)) && (n += "</".concat(e.name, ">"))), n; }
function Va(e) { return "<".concat(e.data, ">"); }
function Ga(e, t) { var r; var n = e.data || ""; return ((r = t.encodeEntities) !== null && r !== void 0 ? r : t.decodeEntities) !== !1 && !(!t.xmlMode && e.parent && Pa.has(e.parent.name)) && (n = t.xmlMode || t.encodeEntities !== "utf8" ? me(n) : Oe(n)), n; }
function ja(e) { return "<![CDATA[".concat(e.children[0].data, "]]>"); }
function za(e) { return "<!--".concat(e.data, "-->"); }
function Tr(e, t) { return re(e, t); }
function $a(e, t) { return ct(e) ? e.children.map(function (r) { return Tr(r, t); }).join("") : ""; }
function De(e) {
    return Array.isArray(e) ? e.map(De).join("") : R(e) ? e.name === "br" ? "\n" : De(e.children) : ee(e) ? De(e.children) : Tt(e) ? e.data : "";
}
function Ut(e) { return Array.isArray(e) ? e.map(Ut).join("") : ct(e) && !be(e) ? Ut(e.children) : Tt(e) ? e.data : ""; }
function Au(e) { return Array.isArray(e) ? e.map(Au).join("") : ct(e) && (e.type === D.Tag || ee(e)) ? Au(e.children) : Tt(e) ? e.data : ""; }
function Ue(e) { return ct(e) ? e.children : []; }
function Ar(e) { return e.parent || null; }
function Re(e) {
    var _b, _c;
    var t = Ar(e);
    if (t != null)
        return Ue(t);
    var r = [e], n = e.prev, s = e.next;
    for (; n != null;)
        r.unshift(n), _b = n, n = _b.prev;
    for (; s != null;)
        r.push(s), _c = s, s = _c.next;
    return r;
}
function Qa(e, t) { var r; return (r = e.attribs) === null || r === void 0 ? void 0 : r[t]; }
function Wa(e, t) { return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, t) && e.attribs[t] != null; }
function Xa(e) { return e.name; }
function Cu(e) {
    var _b;
    var t = e.next;
    for (; t !== null && !R(t);)
        (_b = t, t = _b.next);
    return t;
}
function Eu(e) {
    var _b;
    var t = e.prev;
    for (; t !== null && !R(t);)
        (_b = t, t = _b.prev);
    return t;
}
function Nt(e) { if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var t = e.parent.children, r = t.lastIndexOf(e);
    r >= 0 && t.splice(r, 1);
} e.next = null, e.prev = null, e.parent = null; }
function Ja(e, t) { var r = t.prev = e.prev; r && (r.next = t); var n = t.next = e.next; n && (n.prev = t); var s = t.parent = e.parent; if (s) {
    var o = s.children;
    o[o.lastIndexOf(e)] = t, e.parent = null;
} }
function Za(e, t) { if (Nt(t), t.next = null, t.parent = e, e.children.push(t) > 1) {
    var r = e.children[e.children.length - 2];
    r.next = t, t.prev = r;
}
else
    t.prev = null; }
function Ka(e, t) { Nt(t); var r = e.parent, n = e.next; if (t.next = n, t.prev = e, e.next = t, t.parent = r, n) {
    if (n.prev = t, r) {
        var s = r.children;
        s.splice(s.lastIndexOf(n), 0, t);
    }
}
else
    r && r.children.push(t); }
function Ya(e, t) { if (Nt(t), t.parent = e, t.prev = null, e.children.unshift(t) !== 1) {
    var r = e.children[1];
    r.prev = t, t.next = r;
}
else
    t.next = null; }
function Nu(e, t) { Nt(t); var r = e.parent; if (r) {
    var n = r.children;
    n.splice(n.indexOf(e), 0, t);
} e.prev && (e.prev.next = t), t.parent = r, t.prev = e.prev, t.next = e, e.prev = t; }
function ae(e, t, r, n) {
    if (r === void 0) { r = !0; }
    if (n === void 0) { n = 1 / 0; }
    return Pe(e, Array.isArray(t) ? t : [t], r, n);
}
function Pe(e, t, r, n) { var s = [], o = [Array.isArray(t) ? t : [t]], f = [0]; for (;;) {
    if (f[0] >= o[0].length) {
        if (f.length === 1)
            return s;
        o.shift(), f.shift();
        continue;
    }
    var d = o[0][f[0]++];
    if (e(d) && (s.push(d), --n <= 0))
        return s;
    r && ct(d) && d.children.length > 0 && (f.unshift(0), o.unshift(d.children));
} }
function tn(e, t) { return t.find(e); }
function Be(e, t, r) {
    if (r === void 0) { r = !0; }
    var n = Array.isArray(t) ? t : [t];
    for (var s = 0; s < n.length; s++) {
        var o = n[s];
        if (R(o) && e(o))
            return o;
        if (r && ct(o) && o.children.length > 0) {
            var f = Be(e, o.children, !0);
            if (f)
                return f;
        }
    }
    return null;
}
function Cr(e, t) { return (Array.isArray(t) ? t : [t]).some(function (r) { return R(r) && e(r) || ct(r) && Cr(e, r.children); }); }
function en(e, t) { var r = [], n = [Array.isArray(t) ? t : [t]], s = [0]; for (;;) {
    if (s[0] >= n[0].length) {
        if (n.length === 1)
            return r;
        n.shift(), s.shift();
        continue;
    }
    var o = n[0][s[0]++];
    R(o) && e(o) && r.push(o), ct(o) && o.children.length > 0 && (s.unshift(0), n.unshift(o.children));
} }
var He = { tag_name: function (e) { return typeof e == "function" ? function (t) { return R(t) && e(t.name); } : e === "*" ? R : function (t) { return R(t) && t.name === e; }; }, tag_type: function (e) { return typeof e == "function" ? function (t) { return e(t.type); } : function (t) { return t.type === e; }; }, tag_contains: function (e) { return typeof e == "function" ? function (t) { return Tt(t) && e(t.data); } : function (t) { return Tt(t) && t.data === e; }; } };
function ku(e, t) { return typeof t == "function" ? function (r) { return R(r) && t(r.attribs[e]); } : function (r) { return R(r) && r.attribs[e] === t; }; }
function un(e, t) { return function (r) { return e(r) || t(r); }; }
function Er(e) { var t = Object.keys(e).map(function (r) { var n = e[r]; return Object.prototype.hasOwnProperty.call(He, r) ? He[r](n) : ku(r, n); }); return t.length === 0 ? null : t.reduce(un); }
function rn(e, t) { var r = Er(e); return r ? r(t) : !0; }
function an(e, t, r, n) {
    if (n === void 0) { n = 1 / 0; }
    var s = Er(e);
    return s ? ae(s, t, r, n) : [];
}
function nn(e, t, r) {
    if (r === void 0) { r = !0; }
    return Array.isArray(t) || (t = [t]), Be(ku("id", e), t, r);
}
function jt(e, t, r, n) {
    if (r === void 0) { r = !0; }
    if (n === void 0) { n = 1 / 0; }
    return ae(He.tag_name(e), t, r, n);
}
function sn(e, t, r, n) {
    if (r === void 0) { r = !0; }
    if (n === void 0) { n = 1 / 0; }
    return ae(ku("class", e), t, r, n);
}
function cn(e, t, r, n) {
    if (r === void 0) { r = !0; }
    if (n === void 0) { n = 1 / 0; }
    return ae(He.tag_type(e), t, r, n);
}
function on(e) { var t = e.length; for (; --t >= 0;) {
    var r = e[t];
    if (t > 0 && e.lastIndexOf(r, t - 1) >= 0) {
        e.splice(t, 1);
        continue;
    }
    for (var n = r.parent; n; n = n.parent)
        if (e.includes(n)) {
            e.splice(t, 1);
            break;
        }
} return e; }
var vt;
(function (e) { e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.PRECEDING = 2] = "PRECEDING", e[e.FOLLOWING = 4] = "FOLLOWING", e[e.CONTAINS = 8] = "CONTAINS", e[e.CONTAINED_BY = 16] = "CONTAINED_BY"; })(vt || (vt = {}));
function Nr(e, t) { var r = [], n = []; if (e === t)
    return 0; var s = ct(e) ? e : e.parent; for (; s;)
    r.unshift(s), s = s.parent; for (s = ct(t) ? t : t.parent; s;)
    n.unshift(s), s = s.parent; var o = Math.min(r.length, n.length), f = 0; for (; f < o && r[f] === n[f];)
    f++; if (f === 0)
    return vt.DISCONNECTED; var d = r[f - 1], p = d.children, g = r[f], v = n[f]; return p.indexOf(g) > p.indexOf(v) ? d === t ? vt.FOLLOWING | vt.CONTAINED_BY : vt.FOLLOWING : d === e ? vt.PRECEDING | vt.CONTAINS : vt.PRECEDING; }
function Lu(e) { return e = e.filter(function (t, r, n) { return !n.includes(t, r + 1); }), e.sort(function (t, r) { var n = Nr(t, r); return n & vt.PRECEDING ? -1 : n & vt.FOLLOWING ? 1 : 0; }), e; }
function qu(e) { var t = Me(pn, e); return t ? t.name === "feed" ? ln(t) : fn(t) : null; }
function ln(e) { var t; var r = e.children, n = { type: "atom", items: jt("entry", r).map(function (f) { var d; var p = f.children, g = { media: kr(p) }; ft(g, "id", "id", p), ft(g, "title", "title", p); var v = (d = Me("link", p)) === null || d === void 0 ? void 0 : d.attribs.href; v && (g.link = v); var N = Rt("summary", p) || Rt("content", p); N && (g.description = N); var C = Rt("updated", p); return C && (g.pubDate = new Date(C)), g; }) }; ft(n, "id", "id", r), ft(n, "title", "title", r); var s = (t = Me("link", r)) === null || t === void 0 ? void 0 : t.attribs.href; s && (n.link = s), ft(n, "description", "subtitle", r); var o = Rt("updated", r); return o && (n.updated = new Date(o)), ft(n, "author", "email", r, !0), n; }
function fn(e) { var t, r; var n = (r = (t = Me("channel", e.children)) === null || t === void 0 ? void 0 : t.children) !== null && r !== void 0 ? r : [], s = { type: e.name.substr(0, 3), id: "", items: jt("item", e.children).map(function (f) { var d = f.children, p = { media: kr(d) }; ft(p, "id", "guid", d), ft(p, "title", "title", d), ft(p, "link", "link", d), ft(p, "description", "description", d); var g = Rt("pubDate", d) || Rt("dc:date", d); return g && (p.pubDate = new Date(g)), p; }) }; ft(s, "title", "title", n), ft(s, "link", "link", n), ft(s, "description", "description", n); var o = Rt("lastBuildDate", n); return o && (s.updated = new Date(o)), ft(s, "author", "managingEditor", n, !0), s; }
var dn = ["url", "type", "lang"], hn = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function kr(e) { return jt("media:content", e).map(function (t) {
    var e_4, _b, e_5, _c;
    var r = t.attribs, n = { medium: r.medium, isDefault: !!r.isDefault };
    try {
        for (var dn_1 = __values(dn), dn_1_1 = dn_1.next(); !dn_1_1.done; dn_1_1 = dn_1.next()) {
            var s = dn_1_1.value;
            r[s] && (n[s] = r[s]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (dn_1_1 && !dn_1_1.done && (_b = dn_1.return)) _b.call(dn_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var hn_1 = __values(hn), hn_1_1 = hn_1.next(); !hn_1_1.done; hn_1_1 = hn_1.next()) {
            var s = hn_1_1.value;
            r[s] && (n[s] = parseInt(r[s], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (hn_1_1 && !hn_1_1.done && (_c = hn_1.return)) _c.call(hn_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return r.expression && (n.expression = r.expression), n;
}); }
function Me(e, t) { return jt(e, t, !0, 1)[0]; }
function Rt(e, t, r) {
    if (r === void 0) { r = !1; }
    return Ut(jt(e, t, r, 1)).trim();
}
function ft(e, t, r, n, s) {
    if (s === void 0) { s = !1; }
    var o = Rt(r, n, s);
    o && (e[t] = o);
}
function pn(e) { return e === "rss" || e === "feed" || e === "rdf:RDF"; }
function Lr(e, t) { var r = new ue(void 0, t); return new oe(r, t).end(e), r.root; }
var A;
(function (e) { e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"; })(A || (A = {}));
var G;
(function (e) { e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"; })(G || (G = {}));
var qr = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, gn = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, bn = new Map([[126, G.Element], [94, G.Start], [36, G.End], [42, G.Any], [33, G.Not], [124, G.Hyphen]]), mn = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function zt(e) { switch (e.type) {
    case A.Adjacent:
    case A.Child:
    case A.Descendant:
    case A.Parent:
    case A.Sibling:
    case A.ColumnCombinator: return !0;
    default: return !1;
} }
var xn = new Set(["contains", "icontains"]);
function yn(e, t, r) { var n = parseInt(t, 16) - 65536; return n !== n || r ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320); }
function xe(e) { return e.replace(gn, yn); }
function Ou(e) { return e === 39 || e === 34; }
function Or(e) { return e === 32 || e === 9 || e === 10 || e === 12 || e === 13; }
function Pt(e) { var t = [], r = Dr(t, "".concat(e), 0); if (r < e.length)
    throw new Error("Unmatched selector: ".concat(e.slice(r))); return t; }
function Dr(e, t, r) { var n = []; function s(C) { var S = t.slice(r + C).match(qr); if (!S)
    throw new Error("Expected name, found ".concat(t.slice(r))); var _b = __read(S, 1), L = _b[0]; return r += C + L.length, xe(L); } function o(C) { for (r += C; r < t.length && Or(t.charCodeAt(r));)
    r++; } function f() { r += 1; var C = r, S = 1; for (; S > 0 && r < t.length; r++)
    t.charCodeAt(r) === 40 && !d(r) ? S++ : t.charCodeAt(r) === 41 && !d(r) && S--; if (S)
    throw new Error("Parenthesis not matched"); return xe(t.slice(C, r - 1)); } function d(C) { var S = 0; for (; t.charCodeAt(--C) === 92;)
    S++; return (S & 1) === 1; } function p() { if (n.length > 0 && zt(n[n.length - 1]))
    throw new Error("Did not expect successive traversals."); } function g(C) { if (n.length > 0 && n[n.length - 1].type === A.Descendant) {
    n[n.length - 1].type = C;
    return;
} p(), n.push({ type: C }); } function v(C, S) { n.push({ type: A.Attribute, name: C, action: S, value: s(1), namespace: null, ignoreCase: "quirks" }); } function N() { if (n.length && n[n.length - 1].type === A.Descendant && n.pop(), n.length === 0)
    throw new Error("Empty sub-selector"); e.push(n); } if (o(0), t.length === r)
    return r; t: for (; r < t.length;) {
    var C = t.charCodeAt(r);
    switch (C) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (n.length === 0 || n[0].type !== A.Descendant) && (p(), n.push({ type: A.Descendant })), o(1);
            break;
        }
        case 62: {
            g(A.Child), o(1);
            break;
        }
        case 60: {
            g(A.Parent), o(1);
            break;
        }
        case 126: {
            g(A.Sibling), o(1);
            break;
        }
        case 43: {
            g(A.Adjacent), o(1);
            break;
        }
        case 46: {
            v("class", G.Element);
            break;
        }
        case 35: {
            v("id", G.Equals);
            break;
        }
        case 91: {
            o(1);
            var S = void 0, L = null;
            t.charCodeAt(r) === 124 ? S = s(1) : t.startsWith("*|", r) ? (L = "*", S = s(2)) : (S = s(0), t.charCodeAt(r) === 124 && t.charCodeAt(r + 1) !== 61 && (L = S, S = s(1))), o(0);
            var B = G.Exists, ut = bn.get(t.charCodeAt(r));
            if (ut) {
                if (B = ut, t.charCodeAt(r + 1) !== 61)
                    throw new Error("Expected `=`");
                o(2);
            }
            else
                t.charCodeAt(r) === 61 && (B = G.Equals, o(1));
            var M = "", et = null;
            if (B !== "exists") {
                if (Ou(t.charCodeAt(r))) {
                    var F = t.charCodeAt(r), w = r + 1;
                    for (; w < t.length && (t.charCodeAt(w) !== F || d(w));)
                        w += 1;
                    if (t.charCodeAt(w) !== F)
                        throw new Error("Attribute value didn't end");
                    M = xe(t.slice(r + 1, w)), r = w + 1;
                }
                else {
                    var F = r;
                    for (; r < t.length && (!Or(t.charCodeAt(r)) && t.charCodeAt(r) !== 93 || d(r));)
                        r += 1;
                    M = xe(t.slice(F, r));
                }
                o(0);
                var rt = t.charCodeAt(r) | 32;
                rt === 115 ? (et = !1, o(1)) : rt === 105 && (et = !0, o(1));
            }
            if (t.charCodeAt(r) !== 93)
                throw new Error("Attribute selector didn't terminate");
            r += 1;
            var x = { type: A.Attribute, name: S, action: B, value: M, namespace: L, ignoreCase: et };
            n.push(x);
            break;
        }
        case 58: {
            if (t.charCodeAt(r + 1) === 58) {
                n.push({ type: A.PseudoElement, name: s(2).toLowerCase(), data: t.charCodeAt(r) === 40 ? f() : null });
                continue;
            }
            var S = s(1).toLowerCase(), L = null;
            if (t.charCodeAt(r) === 40)
                if (mn.has(S)) {
                    if (Ou(t.charCodeAt(r + 1)))
                        throw new Error("Pseudo-selector ".concat(S, " cannot be quoted"));
                    if (L = [], r = Dr(L, t, r + 1), t.charCodeAt(r) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(S, " (").concat(t, ")"));
                    r += 1;
                }
                else {
                    if (L = f(), xn.has(S)) {
                        var B = L.charCodeAt(0);
                        B === L.charCodeAt(L.length - 1) && Ou(B) && (L = L.slice(1, -1));
                    }
                    L = xe(L);
                }
            n.push({ type: A.Pseudo, name: S, data: L });
            break;
        }
        case 44: {
            N(), n = [], o(1);
            break;
        }
        default: {
            if (t.startsWith("/*", r)) {
                var B = t.indexOf("*/", r + 2);
                if (B < 0)
                    throw new Error("Comment was not terminated");
                r = B + 2, n.length === 0 && o(0);
                break;
            }
            var S = null, L = void 0;
            if (C === 42)
                r += 1, L = "*";
            else if (C === 124) {
                if (L = "", t.charCodeAt(r + 1) === 124) {
                    g(A.ColumnCombinator), o(2);
                    break;
                }
            }
            else if (qr.test(t.slice(r)))
                L = s(0);
            else
                break t;
            t.charCodeAt(r) === 124 && t.charCodeAt(r + 1) !== 124 && (S = L, t.charCodeAt(r + 1) === 42 ? (L = "*", r += 2) : L = s(1)), n.push(L === "*" ? { type: A.Universal, namespace: S } : { type: A.Tag, name: L, namespace: S });
        }
    }
} return N(), r; }
var Vu = Gt(Bt(), 1);
var kt = Gt(Bt(), 1);
var Rr = new Map([[A.Universal, 50], [A.Tag, 30], [A.Attribute, 1], [A.Pseudo, 0]]);
function ye(e) { return !Rr.has(e.type); }
var vn = new Map([[G.Exists, 10], [G.Equals, 8], [G.Not, 7], [G.Start, 6], [G.End, 6], [G.Any, 5]]);
function Du(e) { var t = e.map(Pr); for (var r = 1; r < e.length; r++) {
    var n = t[r];
    if (!(n < 0))
        for (var s = r - 1; s >= 0 && n < t[s]; s--) {
            var o = e[s + 1];
            e[s + 1] = e[s], e[s] = o, t[s + 1] = t[s], t[s] = n;
        }
} }
function Pr(e) { var t, r; var n = (t = Rr.get(e.type)) !== null && t !== void 0 ? t : -1; return e.type === A.Attribute ? (n = (r = vn.get(e.action)) !== null && r !== void 0 ? r : 4, e.action === G.Equals && e.name === "id" && (n = 9), e.ignoreCase && (n >>= 1)) : e.type === A.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? n = 0 : Array.isArray(e.data) ? (n = Math.min.apply(Math, __spreadArray([], __read(e.data.map(function (s) { return Math.min.apply(Math, __spreadArray([], __read(s.map(Pr)), false)); })), false)), n < 0 && (n = 0)) : n = 2 : n = 3), n; }
var ve = Gt(Bt(), 1), wn = /[-[\]{}()*+?.,\\^$|#\s]/g;
function Br(e) { return e.replace(wn, "\\$&"); }
var Sn = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function $t(e, t) { return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!t.quirksMode : !t.xmlMode && Sn.has(e.name); }
var Hr = { equals: function (e, t, r) { var n = r.adapter, s = t.name, o = t.value; return $t(t, r) ? (o = o.toLowerCase(), function (f) { var d = n.getAttributeValue(f, s); return d != null && d.length === o.length && d.toLowerCase() === o && e(f); }) : function (f) { return n.getAttributeValue(f, s) === o && e(f); }; }, hyphen: function (e, t, r) { var n = r.adapter, s = t.name, o = t.value, f = o.length; return $t(t, r) ? (o = o.toLowerCase(), function (p) { var g = n.getAttributeValue(p, s); return g != null && (g.length === f || g.charAt(f) === "-") && g.substr(0, f).toLowerCase() === o && e(p); }) : function (p) { var g = n.getAttributeValue(p, s); return g != null && (g.length === f || g.charAt(f) === "-") && g.substr(0, f) === o && e(p); }; }, element: function (e, t, r) { var n = r.adapter, s = t.name, o = t.value; if (/\s/.test(o))
        return ve.default.falseFunc; var f = new RegExp("(?:^|\\s)".concat(Br(o), "(?:$|\\s)"), $t(t, r) ? "i" : ""); return function (p) { var g = n.getAttributeValue(p, s); return g != null && g.length >= o.length && f.test(g) && e(p); }; }, exists: function (e, _b, _c) {
        var t = _b.name;
        var r = _c.adapter;
        return function (n) { return r.hasAttrib(n, t) && e(n); };
    }, start: function (e, t, r) { var n = r.adapter, s = t.name, o = t.value, f = o.length; return f === 0 ? ve.default.falseFunc : $t(t, r) ? (o = o.toLowerCase(), function (d) { var p = n.getAttributeValue(d, s); return p != null && p.length >= f && p.substr(0, f).toLowerCase() === o && e(d); }) : function (d) { var p; return !!(!((p = n.getAttributeValue(d, s)) === null || p === void 0) && p.startsWith(o)) && e(d); }; }, end: function (e, t, r) { var n = r.adapter, s = t.name, o = t.value, f = -o.length; return f === 0 ? ve.default.falseFunc : $t(t, r) ? (o = o.toLowerCase(), function (d) { var p; return ((p = n.getAttributeValue(d, s)) === null || p === void 0 ? void 0 : p.substr(f).toLowerCase()) === o && e(d); }) : function (d) { var p; return !!(!((p = n.getAttributeValue(d, s)) === null || p === void 0) && p.endsWith(o)) && e(d); }; }, any: function (e, t, r) { var n = r.adapter, s = t.name, o = t.value; if (o === "")
        return ve.default.falseFunc; if ($t(t, r)) {
        var f_1 = new RegExp(Br(o), "i");
        return function (p) { var g = n.getAttributeValue(p, s); return g != null && g.length >= o.length && f_1.test(g) && e(p); };
    } return function (f) { var d; return !!(!((d = n.getAttributeValue(f, s)) === null || d === void 0) && d.includes(o)) && e(f); }; }, not: function (e, t, r) { var n = r.adapter, s = t.name, o = t.value; return o === "" ? function (f) { return !!n.getAttributeValue(f, s) && e(f); } : $t(t, r) ? (o = o.toLowerCase(), function (f) { var d = n.getAttributeValue(f, s); return (d == null || d.length !== o.length || d.toLowerCase() !== o) && e(f); }) : function (f) { return n.getAttributeValue(f, s) !== o && e(f); }; } };
var Tn = new Set([9, 10, 12, 13, 32]), Mr = 48, An = 57;
function Fr(e) { if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0]; if (e === "odd")
    return [2, 1]; var t = 0, r = 0, n = o(), s = f(); if (t < e.length && e.charAt(t) === "n" && (t++, r = n * (s != null ? s : 1), d(), t < e.length ? (n = o(), d(), s = f()) : n = s = 0), s === null || t < e.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(e, "')")); return [r, n * s]; function o() { return e.charAt(t) === "-" ? (t++, -1) : (e.charAt(t) === "+" && t++, 1); } function f() { var p = t, g = 0; for (; t < e.length && e.charCodeAt(t) >= Mr && e.charCodeAt(t) <= An;)
    g = g * 10 + (e.charCodeAt(t) - Mr), t++; return t === p ? null : g; } function d() { for (; t < e.length && Tn.has(e.charCodeAt(t));)
    t++; } }
var Uu = Gt(Bt(), 1);
function _r(e) { var t = e[0], r = e[1] - 1; if (r < 0 && t <= 0)
    return Uu.default.falseFunc; if (t === -1)
    return function (o) { return o <= r; }; if (t === 0)
    return function (o) { return o === r; }; if (t === 1)
    return r < 0 ? Uu.default.trueFunc : function (o) { return o >= r; }; var n = Math.abs(t), s = (r % n + n) % n; return t > 1 ? function (o) { return o >= r && o % n === s; } : function (o) { return o <= r && o % n === s; }; }
function ne(e) { return _r(Fr(e)); }
var dt = Gt(Bt(), 1);
function Fe(e, t) { return function (r) { var n = t.getParent(r); return n != null && t.isTag(n) && e(r); }; }
var ie = { contains: function (e, t, _b) {
        var r = _b.adapter;
        return function (s) { return e(s) && r.getText(s).includes(t); };
    }, icontains: function (e, t, _b) {
        var r = _b.adapter;
        var n = t.toLowerCase();
        return function (o) { return e(o) && r.getText(o).toLowerCase().includes(n); };
    }, "nth-child": function (e, t, _b) {
        var r = _b.adapter, n = _b.equals;
        var s = ne(t);
        return s === dt.default.falseFunc ? dt.default.falseFunc : s === dt.default.trueFunc ? Fe(e, r) : function (f) { var d = r.getSiblings(f), p = 0; for (var g = 0; g < d.length && !n(f, d[g]); g++)
            r.isTag(d[g]) && p++; return s(p) && e(f); };
    }, "nth-last-child": function (e, t, _b) {
        var r = _b.adapter, n = _b.equals;
        var s = ne(t);
        return s === dt.default.falseFunc ? dt.default.falseFunc : s === dt.default.trueFunc ? Fe(e, r) : function (f) { var d = r.getSiblings(f), p = 0; for (var g = d.length - 1; g >= 0 && !n(f, d[g]); g--)
            r.isTag(d[g]) && p++; return s(p) && e(f); };
    }, "nth-of-type": function (e, t, _b) {
        var r = _b.adapter, n = _b.equals;
        var s = ne(t);
        return s === dt.default.falseFunc ? dt.default.falseFunc : s === dt.default.trueFunc ? Fe(e, r) : function (f) { var d = r.getSiblings(f), p = 0; for (var g = 0; g < d.length; g++) {
            var v = d[g];
            if (n(f, v))
                break;
            r.isTag(v) && r.getName(v) === r.getName(f) && p++;
        } return s(p) && e(f); };
    }, "nth-last-of-type": function (e, t, _b) {
        var r = _b.adapter, n = _b.equals;
        var s = ne(t);
        return s === dt.default.falseFunc ? dt.default.falseFunc : s === dt.default.trueFunc ? Fe(e, r) : function (f) { var d = r.getSiblings(f), p = 0; for (var g = d.length - 1; g >= 0; g--) {
            var v = d[g];
            if (n(f, v))
                break;
            r.isTag(v) && r.getName(v) === r.getName(f) && p++;
        } return s(p) && e(f); };
    }, root: function (e, t, _b) {
        var r = _b.adapter;
        return function (n) { var s = r.getParent(n); return (s == null || !r.isTag(s)) && e(n); };
    }, scope: function (e, t, r, n) { var s = r.equals; return !n || n.length === 0 ? ie.root(e, t, r) : n.length === 1 ? function (o) { return s(n[0], o) && e(o); } : function (o) { return n.includes(o) && e(o); }; }, hover: Ru("isHovered"), visited: Ru("isVisited"), active: Ru("isActive") };
function Ru(e) { return function (r, n, _b) {
    var s = _b.adapter;
    var o = s[e];
    return typeof o != "function" ? dt.default.falseFunc : function (d) { return o(d) && r(d); };
}; }
var we = { empty: function (e, _b) {
        var t = _b.adapter;
        return !t.getChildren(e).some(function (r) { return t.isTag(r) || t.getText(r) !== ""; });
    }, "first-child": function (e, _b) {
        var t = _b.adapter, r = _b.equals;
        if (t.prevElementSibling)
            return t.prevElementSibling(e) == null;
        var n = t.getSiblings(e).find(function (s) { return t.isTag(s); });
        return n != null && r(e, n);
    }, "last-child": function (e, _b) {
        var t = _b.adapter, r = _b.equals;
        var n = t.getSiblings(e);
        for (var s = n.length - 1; s >= 0; s--) {
            if (r(e, n[s]))
                return !0;
            if (t.isTag(n[s]))
                break;
        }
        return !1;
    }, "first-of-type": function (e, _b) {
        var t = _b.adapter, r = _b.equals;
        var n = t.getSiblings(e), s = t.getName(e);
        for (var o = 0; o < n.length; o++) {
            var f = n[o];
            if (r(e, f))
                return !0;
            if (t.isTag(f) && t.getName(f) === s)
                break;
        }
        return !1;
    }, "last-of-type": function (e, _b) {
        var t = _b.adapter, r = _b.equals;
        var n = t.getSiblings(e), s = t.getName(e);
        for (var o = n.length - 1; o >= 0; o--) {
            var f = n[o];
            if (r(e, f))
                return !0;
            if (t.isTag(f) && t.getName(f) === s)
                break;
        }
        return !1;
    }, "only-of-type": function (e, _b) {
        var t = _b.adapter, r = _b.equals;
        var n = t.getName(e);
        return t.getSiblings(e).every(function (s) { return r(e, s) || !t.isTag(s) || t.getName(s) !== n; });
    }, "only-child": function (e, _b) {
        var t = _b.adapter, r = _b.equals;
        return t.getSiblings(e).every(function (n) { return r(e, n) || !t.isTag(n); });
    } };
function Pu(e, t, r, n) { if (r === null) {
    if (e.length > n)
        throw new Error("Pseudo-class :".concat(t, " requires an argument"));
}
else if (e.length === n)
    throw new Error("Pseudo-class :".concat(t, " doesn't have any arguments")); }
var _e = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var wt = Gt(Bt(), 1);
var Mu = {};
function Fu(e, t) { return e === wt.default.falseFunc ? wt.default.falseFunc : function (r) { return t.isTag(r) && e(r); }; }
function _u(e, t) { var r = t.getSiblings(e); if (r.length <= 1)
    return []; var n = r.indexOf(e); return n < 0 || n === r.length - 1 ? [] : r.slice(n + 1).filter(t.isTag); }
function Hu(e) { return { xmlMode: !!e.xmlMode, lowerCaseAttributeNames: !!e.lowerCaseAttributeNames, lowerCaseTags: !!e.lowerCaseTags, quirksMode: !!e.quirksMode, cacheResults: !!e.cacheResults, pseudos: e.pseudos, adapter: e.adapter, equals: e.equals }; }
var Bu = function (e, t, r, n, s) { var o = s(t, Hu(r), n); return o === wt.default.trueFunc ? e : o === wt.default.falseFunc ? wt.default.falseFunc : function (f) { return o(f) && e(f); }; }, Ie = { is: Bu, matches: Bu, where: Bu, not: function (e, t, r, n, s) { var o = s(t, Hu(r), n); return o === wt.default.falseFunc ? e : o === wt.default.trueFunc ? wt.default.falseFunc : function (f) { return !o(f) && e(f); }; }, has: function (e, t, r, n, s) { var o = r.adapter, f = Hu(r); f.relativeSelector = !0; var d = t.some(function (v) { return v.some(ye); }) ? [Mu] : void 0, p = s(t, f, d); if (p === wt.default.falseFunc)
        return wt.default.falseFunc; var g = Fu(p, o); if (d && p !== wt.default.trueFunc) {
        var _b = p.shouldTestNextSiblings, v_1 = _b === void 0 ? !1 : _b;
        return function (N) { if (!e(N))
            return !1; d[0] = N; var C = o.getChildren(N), S = v_1 ? __spreadArray(__spreadArray([], __read(C), false), __read(_u(N, o)), false) : C; return o.existsOne(g, S); };
    } return function (v) { return e(v) && o.existsOne(g, o.getChildren(v)); }; } };
function Ir(e, t, r, n, s) { var o; var f = t.name, d = t.data; if (Array.isArray(d)) {
    if (!(f in Ie))
        throw new Error("Unknown pseudo-class :".concat(f, "(").concat(d, ")"));
    return Ie[f](e, d, r, n, s);
} var p = (o = r.pseudos) === null || o === void 0 ? void 0 : o[f], g = typeof p == "string" ? p : _e[f]; if (typeof g == "string") {
    if (d != null)
        throw new Error("Pseudo ".concat(f, " doesn't have any arguments"));
    var v = Pt(g);
    return Ie.is(e, v, r, n, s);
} if (typeof p == "function")
    return Pu(p, f, d, 1), function (v) { return p(v, d) && e(v); }; if (f in ie)
    return ie[f](e, d, r, n); if (f in we) {
    var v_2 = we[f];
    return Pu(v_2, f, d, 2), function (N) { return v_2(N, r, d) && e(N); };
} throw new Error("Unknown pseudo-class :".concat(f)); }
function Iu(e, t) { var r = t.getParent(e); return r && t.isTag(r) ? r : null; }
function Vr(e, t, r, n, s) { var o = r.adapter, f = r.equals; switch (t.type) {
    case A.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case A.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case A.Attribute: {
        if (t.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!r.xmlMode || r.lowerCaseAttributeNames) && (t.name = t.name.toLowerCase()), Hr[t.action](e, t, r);
    }
    case A.Pseudo: return Ir(e, t, r, n, s);
    case A.Tag: {
        if (t.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var d_1 = t.name;
        return (!r.xmlMode || r.lowerCaseTags) && (d_1 = d_1.toLowerCase()), function (g) { return o.getName(g) === d_1 && e(g); };
    }
    case A.Descendant: {
        if (r.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (g) { var v = g; for (; v = Iu(v, o);)
                if (e(v))
                    return !0; return !1; };
        var d_2 = new WeakSet;
        return function (g) { var v = g; for (; v = Iu(v, o);)
            if (!d_2.has(v)) {
                if (o.isTag(v) && e(v))
                    return !0;
                d_2.add(v);
            } return !1; };
    }
    case "_flexibleDescendant": return function (p) { var g = p; do
        if (e(g))
            return !0;
    while (g = Iu(g, o)); return !1; };
    case A.Parent: return function (p) { return o.getChildren(p).some(function (g) { return o.isTag(g) && e(g); }); };
    case A.Child: return function (p) { var g = o.getParent(p); return g != null && o.isTag(g) && e(g); };
    case A.Sibling: return function (p) { var g = o.getSiblings(p); for (var v = 0; v < g.length; v++) {
        var N = g[v];
        if (f(p, N))
            break;
        if (o.isTag(N) && e(N))
            return !0;
    } return !1; };
    case A.Adjacent: return o.prevElementSibling ? function (p) { var g = o.prevElementSibling(p); return g != null && e(g); } : function (p) { var g = o.getSiblings(p), v; for (var N = 0; N < g.length; N++) {
        var C = g[N];
        if (f(p, C))
            break;
        o.isTag(C) && (v = C);
    } return !!v && e(v); };
    case A.Universal: {
        if (t.namespace != null && t.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return e;
    }
} }
function Gr(e, t, r) { var n = Ve(e, t, r); return Fu(n, t.adapter); }
function Ve(e, t, r) { var n = typeof e == "string" ? Pt(e) : e; return Ge(n, t, r); }
function jr(e) { return e.type === A.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(function (t) { return t.some(jr); })); }
var Cn = { type: A.Descendant }, En = { type: "_flexibleDescendant" }, Nn = { type: A.Pseudo, name: "scope", data: null };
function kn(e, _b, r) {
    var e_6, _c;
    var t = _b.adapter;
    var n = !!(r != null && r.every(function (s) { var o = t.isTag(s) && t.getParent(s); return s === Mu || o && t.isTag(o); }));
    try {
        for (var e_7 = __values(e), e_7_1 = e_7.next(); !e_7_1.done; e_7_1 = e_7.next()) {
            var s = e_7_1.value;
            if (!(s.length > 0 && ye(s[0]) && s[0].type !== A.Descendant))
                if (n && !s.some(jr))
                    s.unshift(Cn);
                else
                    continue;
            s.unshift(Nn);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (e_7_1 && !e_7_1.done && (_c = e_7.return)) _c.call(e_7);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
function Ge(e, t, r) { var n; e.forEach(Du), r = (n = t.context) !== null && n !== void 0 ? n : r; var s = Array.isArray(r), o = r && (Array.isArray(r) ? r : [r]); if (t.relativeSelector !== !1)
    kn(e, t, o);
else if (e.some(function (p) { return p.length > 0 && ye(p[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var f = !1, d = e.map(function (p) { if (p.length >= 2) {
    var _b = __read(p, 2), g = _b[0], v = _b[1];
    g.type !== A.Pseudo || g.name !== "scope" || (s && v.type === A.Descendant ? p[1] = En : (v.type === A.Adjacent || v.type === A.Sibling) && (f = !0));
} return Ln(p, t, o); }).reduce(qn, kt.default.falseFunc); return d.shouldTestNextSiblings = f, d; }
function Ln(e, t, r) { var n; return e.reduce(function (s, o) { return s === kt.default.falseFunc ? kt.default.falseFunc : Vr(s, o, t, r, Ge); }, (n = t.rootFunc) !== null && n !== void 0 ? n : kt.default.trueFunc); }
function qn(e, t) { return t === kt.default.falseFunc || e === kt.default.trueFunc ? e : e === kt.default.falseFunc || t === kt.default.trueFunc ? t : function (n) { return e(n) || t(n); }; }
var zr = function (e, t) { return e === t; }, On = { adapter: At, equals: zr };
function $r(e) { var t, r, n, s; var o = e != null ? e : On; return (t = o.adapter) !== null && t !== void 0 || (o.adapter = At), (r = o.equals) !== null && r !== void 0 || (o.equals = (s = (n = o.adapter) === null || n === void 0 ? void 0 : n.equals) !== null && s !== void 0 ? s : zr), o; }
function Gu(e) { return function (r, n, s) { var o = $r(n); return e(r, o, s); }; }
var es = Gu(Gr), us = Gu(Ve), je = Gu(Ge);
function Qr(e) { return function (r, n, s) { var o = $r(s); typeof r != "function" && (r = Ve(r, o, n)); var f = ze(n, o.adapter, r.shouldTestNextSiblings); return e(r, f, o); }; }
function ze(e, t, r) {
    if (r === void 0) { r = !1; }
    return r && (e = Dn(e, t)), Array.isArray(e) ? t.removeSubsets(e) : t.getChildren(e);
}
function Dn(e, t) { var r = Array.isArray(e) ? e.slice(0) : [e], n = r.length; for (var s = 0; s < n; s++) {
    var o = _u(r[s], t);
    r.push.apply(r, __spreadArray([], __read(o), false));
} return r; }
var rs = Qr(function (e, t, r) { return e === Vu.default.falseFunc || !t || t.length === 0 ? [] : r.adapter.findAll(e, t); }), as = Qr(function (e, t, r) { return e === Vu.default.falseFunc || !t || t.length === 0 ? null : r.adapter.findOne(e, t); });
var Qe = Gt(Bt(), 1);
var Un = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function se(e) { return e.type !== "pseudo" ? !1 : Un.has(e.name) ? !0 : e.name === "not" && Array.isArray(e.data) ? e.data.some(function (t) { return t.some(se); }) : !1; }
function Wr(e, t, r) { var n = t != null ? parseInt(t, 10) : NaN; switch (e) {
    case "first": return 1;
    case "nth":
    case "eq": return isFinite(n) ? n >= 0 ? n + 1 : 1 / 0 : 0;
    case "lt": return isFinite(n) ? n >= 0 ? Math.min(n, r) : 1 / 0 : 0;
    case "gt": return isFinite(n) ? 1 / 0 : 0;
    case "odd": return 2 * r;
    case "even": return 2 * r - 1;
    case "last":
    case "not": return 1 / 0;
} }
function Xr(e) { for (; e.parent;)
    e = e.parent; return e; }
function $e(e) {
    var e_8, _b;
    var t = [], r = [];
    try {
        for (var e_9 = __values(e), e_9_1 = e_9.next(); !e_9_1.done; e_9_1 = e_9.next()) {
            var n = e_9_1.value;
            n.some(se) ? t.push(n) : r.push(n);
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (e_9_1 && !e_9_1.done && (_b = e_9.return)) _b.call(e_9);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return [r, t];
}
var Rn = { type: A.Universal, namespace: null }, Pn = { type: A.Pseudo, name: "scope", data: null };
function $u(e, t, r) {
    if (r === void 0) { r = {}; }
    return Bn([e], t, r);
}
function Bn(e, t, r) {
    if (r === void 0) { r = {}; }
    if (typeof t == "function")
        return e.some(t);
    var _b = __read($e(Pt(t)), 2), n = _b[0], s = _b[1];
    return n.length > 0 && e.some(je(n, r)) || s.some(function (o) { return Jr(o, e, r).length > 0; });
}
function Hn(e, t, r, n) { var s = typeof r == "string" ? parseInt(r, 10) : NaN; switch (e) {
    case "first":
    case "lt": return t;
    case "last": return t.length > 0 ? [t[t.length - 1]] : t;
    case "nth":
    case "eq": return isFinite(s) && Math.abs(s) < t.length ? [s < 0 ? t[t.length + s] : t[s]] : [];
    case "gt": return isFinite(s) ? t.slice(s + 1) : [];
    case "even": return t.filter(function (o, f) { return f % 2 === 0; });
    case "odd": return t.filter(function (o, f) { return f % 2 === 1; });
    case "not": {
        var o_1 = new Set(Mn(r, t, n));
        return t.filter(function (f) { return !o_1.has(f); });
    }
} }
function Mn(e, t, r) { if (t.length === 0)
    return []; var _b = __read($e(e), 2), n = _b[0], s = _b[1], o; if (n.length) {
    var f = zu(t, n, r);
    if (s.length === 0)
        return f;
    f.length && (o = new Set(f));
} for (var f = 0; f < s.length && (o == null ? void 0 : o.size) !== t.length; f++) {
    var d = s[f];
    if ((o ? t.filter(function (v) { return R(v) && !o.has(v); }) : t).length === 0)
        break;
    var g = Jr(d, t, r);
    if (g.length)
        if (o)
            g.forEach(function (v) { return o.add(v); });
        else {
            if (f === s.length - 1)
                return g;
            o = new Set(g);
        }
} return typeof o != "undefined" ? o.size === t.length ? t : t.filter(function (f) { return o.has(f); }) : []; }
function Jr(e, t, r) { var n; if (e.some(zt)) {
    var s = (n = r.root) !== null && n !== void 0 ? n : Xr(t[0]), o = Vt(St({}, r), { context: t, relativeSelector: !1 });
    return e.push(Pn), We(s, e, o, !0, t.length);
} return We(t, e, r, !1, t.length); }
function Qu(e, t, r, n) {
    if (r === void 0) { r = {}; }
    if (n === void 0) { n = 1 / 0; }
    if (typeof e == "function")
        return Zr(t, e);
    var _b = __read($e(Pt(e)), 2), s = _b[0], o = _b[1], f = o.map(function (d) { return We(t, d, r, !0, n); });
    return s.length && f.push(ju(t, s, r, n)), f.length === 0 ? [] : f.length === 1 ? f[0] : Lu(f.reduce(function (d, p) { return __spreadArray(__spreadArray([], __read(d), false), __read(p), false); }));
}
function We(e, t, r, n, s) { var o = t.findIndex(se), f = t.slice(0, o), d = t[o], p = t.length - 1 === o ? s : 1 / 0, g = Wr(d.name, d.data, p); if (g === 0)
    return []; var N = (f.length === 0 && !Array.isArray(e) ? Ue(e).filter(R) : f.length === 0 ? (Array.isArray(e) ? e : [e]).filter(R) : n || f.some(zt) ? ju(e, [f], r, g) : zu(e, [f], r)).slice(0, g), C = Hn(d.name, N, d.data, r); if (C.length === 0 || t.length === o + 1)
    return C; var S = t.slice(o + 1), L = S.some(zt); if (L) {
    if (zt(S[0])) {
        var B = S[0].type;
        (B === A.Sibling || B === A.Adjacent) && (C = ze(C, At, !0)), S.unshift(Rn);
    }
    r = Vt(St({}, r), { relativeSelector: !1, rootFunc: function (B) { return C.includes(B); } });
}
else
    r.rootFunc && r.rootFunc !== Qe.trueFunc && (r = Vt(St({}, r), { rootFunc: Qe.trueFunc })); return S.some(se) ? We(C, S, r, !1, s) : L ? ju(C, [S], r, s) : zu(C, [S], r); }
function ju(e, t, r, n) { var s = je(t, r, e); return Zr(e, s, n); }
function Zr(e, t, r) {
    if (r === void 0) { r = 1 / 0; }
    var n = ze(e, At, t.shouldTestNextSiblings);
    return Pe(function (s) { return R(s) && t(s); }, n, !0, r);
}
function zu(e, t, r) { var n = (Array.isArray(e) ? e : [e]).filter(R); if (n.length === 0)
    return n; var s = je(t, r); return s === Qe.trueFunc ? n : n.filter(s); }
function Kr(e) { var t = /^(?:([a-zA-Z][\w+.-]*):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/.exec(e) || []; return { scheme: t[1], auth: t[2], path: t[3] || "", query: t[4], frag: t[5] }; }
function Wu(e) { var t = [], r = e.split("/"); for (var n = 0; n < r.length; n++) {
    var s = r[n];
    s === ".." ? (t.length > 1 && t.pop(), n === r.length - 1 && t.push("")) : s === "." ? n === r.length - 1 && t.push("") : t.push(s);
} return t.join("/"); }
function Je(e, t) { t = t == null ? "" : String(t).trim(); var r = Kr(t); if (r.scheme || !e)
    return t; var n = Kr(String(e)); if (!n.scheme)
    return t; var s = n.auth, o, f; if (r.auth !== void 0)
    s = r.auth, o = Wu(r.path), f = r.query;
else if (!r.path)
    o = n.path, f = r.query !== void 0 ? r.query : n.query;
else {
    if (r.path.charAt(0) === "/")
        o = Wu(r.path);
    else {
        var d = s !== void 0 && !n.path ? "/" : n.path.slice(0, n.path.lastIndexOf("/") + 1);
        o = Wu(d + r.path);
    }
    f = r.query;
} return s !== void 0 && o.charAt(0) !== "/" && (o = "/" + o), n.scheme + ":" + (s !== void 0 ? "//" + s : "") + o + (f !== void 0 ? "?" + f : "") + (r.frag !== void 0 ? "#" + r.frag : ""); }
var Xe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function Yr(e) { if (typeof btoa == "function")
    return btoa(e); var t = ""; for (var r = 0; r < e.length; r += 3) {
    var n = e.charCodeAt(r), s = e.charCodeAt(r + 1), o = e.charCodeAt(r + 2), f = n << 16 | (s || 0) << 8 | (o || 0);
    t += Xe[f >> 18 & 63] + Xe[f >> 12 & 63] + (r + 1 < e.length ? Xe[f >> 6 & 63] : "=") + (r + 2 < e.length ? Xe[f & 63] : "=");
} return t; }
var Fn = function (e, t, r) { return Qu(e, t, r); }, ra = function (e, t, r) { return Qu(e, t, r, 1)[0] || null; }, aa = /[\s ]+/g, ta = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), _n = { containsOwn: function (e, t) { return Ju(e).toLowerCase().includes(String(t).toLowerCase()); }, matches: function (e, t) { return ea(t).test(Xu(e)); }, matchesOwn: function (e, t) { return ea(t).test(Ju(e)); }, containsData: function (e, t) { return Ut(e).includes(t); }, "contains-ci": function (e, t) { return Xu(e).toLowerCase().includes(String(t).toLowerCase()); } };
function ea(e) { try {
    return new RegExp(e);
}
catch (t) {
    return /$^/;
} }
var Ze = { pseudos: _n, xmlMode: !1, lowerCaseTags: !0 };
function Ke(e) { return String(e).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function Xu(e) { if (!e)
    return ""; if (e.type === "text")
    return e.data; var t = "", r = function (n) {
    var e_10, _b;
    try {
        for (var _c = __values(n.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var s = _d.value;
            s.type === "text" ? t += s.data : (s.type === "tag" || s.type === "script" || s.type === "style") && (s.name === "br" ? t += " " : s.type === "tag" && (ta.has(s.name) && (t += " "), r(s), ta.has(s.name) && (t += " ")));
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_10) throw e_10.error; }
    }
}; return r(e), t.replace(aa, " ").trim(); }
function Ju(e) {
    var e_11, _b;
    var t = "";
    try {
        for (var _c = __values(e.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var r = _d.value;
            r.type === "text" && (t += r.data);
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return t.replace(aa, " ").trim();
}
function na(e, t) { if (!t)
    return ""; try {
    return Je(e, t);
}
catch (r) {
    return e ? "" : t;
} }
var Qt = (function () {
    function e(t, r) {
        this.node = t, this.doc = r;
    }
    Object.defineProperty(e.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    e.prototype.select = function (t) { return Ct.of(Fn(Ke(t), this.node, Ze), this.doc); };
    e.prototype.selectFirst = function (t) { var r = ra(Ke(t), this.node, Ze); return r ? new e(r, this.doc) : null; };
    e.prototype.is = function (t) { return $u(this.node, Ke(t), Ze); };
    e.prototype.text = function () { return Xu(this.node); };
    e.prototype.ownText = function () { return Ju(this.node); };
    e.prototype.wholeText = function () { return Ut(this.node); };
    e.prototype.data = function () { return (this.node.children || []).filter(function (t) { return t.type === "text"; }).map(function (t) { return t.data; }).join(""); };
    e.prototype.html = function () { return (this.node.children || []).map(function (t) { return re(t, { decodeEntities: !1 }); }).join("").trim(); };
    e.prototype.outerHtml = function () { return re(this.node, { decodeEntities: !1 }); };
    e.prototype.toString = function () { return this.outerHtml(); };
    e.prototype.tagName = function () { return this.node.name || ""; };
    e.prototype.nodeName = function () { return this.node.name || "#" + this.node.type; };
    e.prototype.id = function () { return this.attr("id"); };
    e.prototype.className = function () { return this.attr("class"); };
    e.prototype.classNames = function () { return this.className().split(/\s+/).filter(Boolean); };
    e.prototype.hasClass = function (t) { return this.classNames().includes(t); };
    e.prototype.attr = function (t, r) { if (r !== void 0)
        return this.node.attribs && (this.node.attribs[t] = String(r)), this; if (!this.node.attribs)
        return ""; if (t.startsWith("abs:"))
        return na(this.baseUri, this.node.attribs[t.slice(4)] || ""); var n = this.node.attribs[t]; return n == null ? "" : n; };
    e.prototype.absUrl = function (t) { return this.attr("abs:" + t); };
    e.prototype.hasAttr = function (t) { return !!(this.node.attribs && (t.startsWith("abs:") ? t.slice(4) : t) in this.node.attribs); };
    e.prototype.removeAttr = function (t) { return this.node.attribs && delete this.node.attribs[t], this; };
    e.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    e.prototype.dataset = function () {
        var e_12, _b;
        var t = {};
        try {
            for (var _c = __values(Object.entries(this.node.attribs || {})), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _f = __read(_d.value, 2), r = _f[0], n = _f[1];
                r.startsWith("data-") && (t[r.slice(5)] = n);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return t;
    };
    e.prototype.val = function () { return this.attr("value"); };
    e.prototype.parent = function () { var t = this.node.parent; return t && t.type !== "root" ? new e(t, this.doc) : null; };
    e.prototype.parents = function () { var t = [], r = this.node.parent; for (; r && r.type !== "root";)
        t.push(r), r = r.parent; return Ct.of(t, this.doc); };
    e.prototype.closest = function (t) { var r = this.node; for (; r && r.type !== "root";) {
        if (r.type === "tag" && $u(r, Ke(t), Ze))
            return new e(r, this.doc);
        r = r.parent;
    } return null; };
    e.prototype.children = function () { return Ct.of((this.node.children || []).filter(R), this.doc); };
    e.prototype.child = function (t) { var r = (this.node.children || []).filter(R)[t]; return r ? new e(r, this.doc) : null; };
    e.prototype.childrenSize = function () { return (this.node.children || []).filter(R).length; };
    e.prototype.nextElementSibling = function () { var t = Cu(this.node); return t ? new e(t, this.doc) : null; };
    e.prototype.previousElementSibling = function () { var t = Eu(this.node); return t ? new e(t, this.doc) : null; };
    e.prototype.siblingElements = function () {
        var _this = this;
        return Ct.of(Re(this.node).filter(function (t) { return t !== _this.node && R(t); }), this.doc);
    };
    e.prototype.elementSiblingIndex = function () { return Re(this.node).filter(R).indexOf(this.node); };
    e.prototype.getElementsByTag = function (t) { return this.select(t); };
    e.prototype.getElementsByClass = function (t) { return this.select("." + t); };
    e.prototype.getElementById = function (t) { return this.selectFirst("#" + t); };
    e.prototype.remove = function () { return Nt(this.node), this; };
    e.prototype.empty = function () { return this.node.children = [], this; };
    e.prototype.textNodes = function () { return (this.node.children || []).filter(function (t) { return t.type === "text"; }).map(function (t) { return ({ text: function () { return t.data; }, toString: function () { return t.data; } }); }); };
    e.prototype.title = function () { var t = this.selectFirst("title"); return t ? t.text() : ""; };
    e.prototype.body = function () { return this.selectFirst("body") || this; };
    e.prototype.head = function () { return this.selectFirst("head") || this; };
    e.prototype.location = function () { return this.baseUri; };
    return e;
}()), Ku = Object.create(Array.prototype), Ct = { of: Zu, prototype: Ku };
function Zu(e, t) {
    var e_13, _b;
    var r = [];
    try {
        for (var _c = __values(e || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var n = _d.value;
            r.push(n instanceof Qt ? n : new Qt(n, t));
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return Object.setPrototypeOf(r, Ku), r;
}
var ua = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (e) { return this[e] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (e) { return Ct.of(this[e] ? [this[e]] : [], null); }, text: function () { return this.map(function (e) { return e.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (e) { return e.text(); }).filter(Boolean); }, html: function () {
        return this.map(function (e) { return e.html(); }).join("\n");
    }, outerHtml: function () {
        return this.map(function (e) { return e.outerHtml(); }).join("\n");
    }, toString: function () { return this.outerHtml(); }, attr: function (e, t) {
        var e_14, _b;
        if (t !== void 0)
            return this.forEach(function (r) { return r.attr(e, t); }), this;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var r = _d.value;
                if (r.hasAttr(e))
                    return r.attr(e);
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_14) throw e_14.error; }
        }
        return "";
    }, eachAttr: function (e) { return this.filter(function (t) { return t.hasAttr(e); }).map(function (t) { return t.attr(e); }); }, hasAttr: function (e) { return this.some(function (t) { return t.hasAttr(e); }); }, hasClass: function (e) { return this.some(function (t) { return t.hasClass(e); }); }, val: function () { return this.length ? this[0].val() : ""; }, select: function (e) {
        var e_15, _b, e_16, _c;
        var t = Zu([]), r = new Set;
        try {
            for (var _d = __values(this), _f = _d.next(); !_f.done; _f = _d.next()) {
                var n = _f.value;
                try {
                    for (var _g = (e_16 = void 0, __values(n.select(e))), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var s = _h.value;
                        r.has(s.node) || (r.add(s.node), t.push(s));
                    }
                }
                catch (e_16_1) { e_16 = { error: e_16_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_c = _g.return)) _c.call(_g);
                    }
                    finally { if (e_16) throw e_16.error; }
                }
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return t;
    }, selectFirst: function (e) {
        var e_17, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var t = _d.value;
                var r = t.selectFirst(e);
                if (r)
                    return r;
            }
        }
        catch (e_17_1) { e_17 = { error: e_17_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_17) throw e_17.error; }
        }
        return null;
    }, is: function (e) { return this.some(function (t) { return t.is(e); }); }, not: function (e) { return Ct.of(this.filter(function (t) { return !t.is(e); }), null); }, parents: function () {
        var e_18, _b;
        var e = Zu([]);
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var t = _d.value;
                e.push.apply(e, __spreadArray([], __read(t.parents()), false));
            }
        }
        catch (e_18_1) { e_18 = { error: e_18_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_18) throw e_18.error; }
        }
        return e;
    }, next: function () { return Ct.of(this.map(function (e) { return e.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return Ct.of(this.map(function (e) { return e.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (e) { return e.remove(); }), this; }, empty: function () { return this.forEach(function (e) { return e.empty(); }), this; }, removeAttr: function (e) { return this.forEach(function (t) { return t.removeAttr(e); }), this; } };
try {
    for (var _c = __values(Object.keys(ua)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var e = _d.value;
        Object.defineProperty(Ku, e, { value: ua[e], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
function Ye(e, t) { var r = Lr(String(e == null ? "" : e), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), n = new Qt(r, null); n.doc = n, n.__base = t || ""; var s = ra("base[href]", r); return s && s.attribs.href && (n.__base = na(n.__base, s.attribs.href)), n; }
function ia(e, t) { var r = new Set((t || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), n = Ye(e), s = function (o) {
    var e_19, _b, e_20, _c;
    try {
        for (var _d = __values((o.children || []).slice()), _f = _d.next(); !_f.done; _f = _d.next()) {
            var f = _f.value;
            if (f.type === "script" || f.type === "style" || f.type === "comment") {
                Nt(f);
                continue;
            }
            if (f.type === "tag" && (s(f), !r.has(f.name))) {
                var d = (f.children || []).slice();
                try {
                    for (var d_3 = (e_20 = void 0, __values(d)), d_3_1 = d_3.next(); !d_3_1.done; d_3_1 = d_3.next()) {
                        var p = d_3_1.value;
                        Nu(f, p);
                    }
                }
                catch (e_20_1) { e_20 = { error: e_20_1 }; }
                finally {
                    try {
                        if (d_3_1 && !d_3_1.done && (_c = d_3.return)) _c.call(d_3);
                    }
                    finally { if (e_20) throw e_20.error; }
                }
                Nt(f);
            }
        }
    }
    catch (e_19_1) { e_19 = { error: e_19_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_b = _d.return)) _b.call(_d);
        }
        finally { if (e_19) throw e_19.error; }
    }
}; return s(n.node), re(n.node.children, { decodeEntities: !1 }); }
var Se = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function In(e) { if (typeof Buffer != "undefined")
    return Buffer.from(e).toString("base64"); var t = ""; for (var r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]); return Yr(t); }
function sa(e) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(e) : Uint8Array.from(unescape(encodeURIComponent(e)), function (t) { return t.charCodeAt(0); }); }
function Vn(e) { var t = ""; for (var r = 0; r < e.length; r++) {
    var n = e.charCodeAt(r);
    if (n < 128) {
        t += e[r];
        continue;
    }
    if (n === 128) {
        t += "€";
        continue;
    }
    var s = e.charCodeAt(r + 1);
    n >= 129 && n <= 254 && s >= 64 && s <= 254 && s !== 127 ? (t += __GBK_TABLE[(n - 129) * 190 + (s - 64) - (s > 127 ? 1 : 0)], r++) : t += "�";
} return t; }
var tu = (function () {
    function tu(t, r) {
        this.status = t.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText || String(this.status), this.url = t.url || r.url, this.headers = t.headers || {}, this._raw = t, this.request = { url: r.url, headers: r.headers || {} };
    }
    tu.prototype.header = function (t) { var r = Object.keys(this.headers).find(function (n) { return n.toLowerCase() === String(t).toLowerCase(); }); return r ? this.headers[r] : ""; };
    tu.prototype.text = function (t) { if (t && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(t).toLowerCase()).decode(this._raw.bytes);
        }
        catch (n) { } var r = this._raw.text == null ? "" : String(this._raw.text); return t || (t = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), t && /^(gbk|gb2312|gb18030)$/i.test(String(t)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(r) && !/[^\x00-\xff]/.test(r) ? Vn(r) : r; };
    tu.prototype.string = function (t) { return this.text(t); };
    tu.prototype.html = function (t) { return Ye(this.text(t), this.url); };
    tu.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (t) {
        return null;
    } };
    tu.prototype.base64 = function () { return In(this._raw.bytes || sa(this.text())); };
    tu.prototype.blob = function () { var t = this; return { size: (this._raw.bytes || sa(this.text())).length, type: this.header("content-type"), base64: function () { return t.base64(); } }; };
    return tu;
}());
function Gn(e) {
    var e_21, _b;
    var t = {};
    if (!e)
        return t;
    if (typeof e.forEach == "function" && !Array.isArray(e) && typeof e.entries == "function")
        return e.forEach(function (r, n) { t[n] = r; }), t;
    try {
        for (var _c = __values(Object.keys(e)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var r = _d.value;
            t[r] = String(e[r]);
        }
    }
    catch (e_21_1) { e_21 = { error: e_21_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_21) throw e_21.error; }
    }
    return t;
}
function oa(e, t) {
    var r = function (d) { return ({ getItem: function (p) { var g = e.storageGet(d + p); return g == null ? null : g; }, setItem: function (p, g) { return e.storageSet(d + p, g == null ? null : String(g)); }, removeItem: function (p) { return e.storageSet(d + p, null); }, clear: function () { return e.storageClear && e.storageClear(d); } }); }, n = "__cookie__", s = [], o = {};
    o.Response = { success: function (d, p) { return ({ code: 0, data: d === void 0 ? null : d, data2: p === void 0 ? null : p }); }, error: function (d) { return ({ code: 1, data: d == null ? "" : String(d) }); } }, o.fetch = function (p, g) {
        return __awaiter(this, void 0, void 0, function () {
            var v, M, N, C, S, M, L, B, M_2, et, ut, M_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        g = g || {};
                        v = String(p);
                        if (g.queries) {
                            M = Object.entries(g.queries).map(function (_b) {
                                var _c = __read(_b, 2), et = _c[0], x = _c[1];
                                return encodeURIComponent(et) + "=" + encodeURIComponent(x);
                            }).join("&");
                            M && (v += (v.includes("?") ? "&" : "?") + M);
                        }
                        N = Object.assign({ "User-Agent": Se }, Gn(g.headers)), C = e.storageGet(n);
                        C && !Object.keys(N).some(function (M) { return M.toLowerCase() === "cookie"; }) && (N.Cookie = C);
                        S = g.body;
                        if (S != null && typeof S == "object") {
                            M = Object.keys(N).find(function (et) { return et.toLowerCase() === "content-type"; });
                            M && /json/i.test(N[M]) ? S = JSON.stringify(S) : (S = Object.entries(S).map(function (_b) {
                                var _c = __read(_b, 2), et = _c[0], x = _c[1];
                                return encodeURIComponent(et) + "=" + encodeURIComponent(x);
                            }).join("&"), M || (N["Content-Type"] = "application/x-www-form-urlencoded"));
                        }
                        L = { url: v, method: (g.method || (S != null ? "POST" : "GET")).toUpperCase(), headers: N, body: S, timeout: g.timeout }, B = L.method === "GET" && S == null ? v + "\n" + JSON.stringify(N) : null;
                        if (B) {
                            M_2 = Date.now(), et = s.find(function (x) { return x.k === B && M_2 - x.t < 6e4; });
                            if (et)
                                return [2, new tu(et.raw, L)];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4, e.request(L)];
                    case 2:
                        ut = _b.sent();
                        return [3, 4];
                    case 3:
                        M_1 = _b.sent();
                        ut = { status: 0, url: v, headers: {}, text: "", error: String(M_1 && M_1.message || M_1) };
                        return [3, 4];
                    case 4: return [2, (B && ut && ut.status === 200 && String(ut.text == null ? "" : ut.text).length < 3e6 && (s.push({ k: B, t: Date.now(), raw: ut }), s.length > 6 && s.shift()), new tu(ut, L))];
                }
            });
        });
    }, o.Http = { get: function (d) { return ca(o, "GET", d); }, post: function (d) { return ca(o, "POST", d); } }, o.Html = { parse: function (d, p) { return Ye(d, p || ""); }, clean: function (d, p) { return ia(d, p); } }, o.localStorage = r("ls:"), o.cacheStorage = r("cs:"), o.localConfig = { getItem: function (d) { return e.config(d); } }, o.localCookie = { setCookie: function (d) { e.storageSet(n, String(d).split(";")[0]); }, getCookie: function () { return e.storageGet(n) || ""; } }, o.sleep = function (d) { return new Promise(function (p) { return typeof setTimeout == "function" ? setTimeout(p, Math.min(Number(d) || 0, 1e4)) : p(); }); };
    var f = function () {
        var d = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            d[_i] = arguments[_i];
        }
        try {
            e.log && e.log(d.map(function (p) { return typeof p == "string" ? p : JSON.stringify(p); }).join(" "));
        }
        catch (p) { }
    };
    return o.Log = { log: f }, o.console = { log: f, error: f, warn: f, info: f }, o.Console = o.console, o.log = f, o.UserAgent = { system: function () { return Se; }, chrome: function () { return Se; }, android: function () { return Se; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, o.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (e.name || "host") + ")"); } }, o.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, o.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, o.Elements = Ct, o.Element = Qt, o.__meta = t, o;
}
function ca(e, t, r) { var n = { method: t, url: r, headers: {}, body: void 0, queries: void 0 }, s = { headers: function (o) { return Object.assign(n.headers, o || {}), s; }, header: function (o, f) { return n.headers[o] = f, s; }, params: function (o) { return n.queries = o, s; }, queries: function (o) { return n.queries = o, s; }, body: function (o) { return n.body = o, s; }, html: function (o) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(n.url, n)];
                case 1: return [2, (_b.sent()).html(o)];
            }
        }); });
    }, string: function (o) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(n.url, n)];
                case 1: return [2, (_b.sent()).text(o)];
            }
        }); });
    }, text: function (o) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(n.url, n)];
                case 1: return [2, (_b.sent()).text(o)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(n.url, n)];
                case 1: return [2, (_b.sent()).json()];
            }
        }); });
    } }; return s; }
function Wt(e, t) { if (!t)
    return ""; if (t = String(t).trim(), /^data:|^blob:/.test(t))
    return t; if (t.startsWith("//"))
    return "https:" + t; if (typeof __abs == "function")
    return __abs(e, t); try {
    return Je(e, t);
}
catch (r) {
    return t;
} }
var H = function (e) { return e == null ? "" : String(e); }, jn = function (e) { return e.filter(function (t, r) { return t && e.indexOf(t) === r; }); }, eu = (function () {
    function class_1(t) {
        var r = t.meta, n = t.scripts, s = t.host;
        this.meta = r, this.host = s, this.env = t.env || oa(s, r), this.scripts = n, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return H(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "origins", {
        get: function () { if (this._orig)
            return this._orig; var t = (this.meta.config || {}).DOMAIN || {}, r = function (o) { var f = /^https?:\/\/(?:www\.|m\.)?([^/?#:]+)/i.exec(H(o).trim()); return f ? f[1].toLowerCase() : ""; }, n = {}; [this.meta.source, t.default].concat(t.values || []).map(r).filter(Boolean).forEach(function (o) { n[o] = 1; }); var s = /^https?:\/\/[^/?#]+/i.exec(H(this.meta.source)); return this._orig = { key: r, hosts: n, def: s ? s[0] : "" }, this._orig; },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.canon = function (t) { t = H(t); var r = this.origins; if (!r.def)
        return t; var n = /^https?:\/\/[^/?#]+/i.exec(t); if (!n)
        return t; var s = r.key(n[0]); return r.hosts[s] === 1 || s === r.key(this.base) ? r.def + t.slice(n[0].length) : t; };
    class_1.prototype.decanon = function (t) { t = H(t); var r = this.origins; if (!r.def)
        return t; var n = (/^https?:\/\/[^/?#]+/i.exec(this.base) || [])[0]; return !n || n === r.def ? t : t.slice(0, r.def.length) === r.def ? n + t.slice(r.def.length) : t; };
    class_1.prototype.has = function (t) { return !!this.scripts[t]; };
    class_1.prototype.run = function (t) {
        var r = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            r[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var n, s, o, f;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        n = this.scripts[t];
                        if (!n)
                            throw new Error("script " + t + " missing");
                        s = function (d) { var p = _this.host.config(d); return p == null ? (_this.meta.configDefaults || {})[d] : p; };
                        return [4, n(this.env, s)];
                    case 1:
                        o = _b.sent();
                        if (typeof o != "function")
                            throw new Error(t + ": execute() not defined");
                        return [4, o.apply(void 0, __spreadArray([], __read(r.map(H)), false))];
                    case 2:
                        f = _b.sent();
                        if (!f)
                            throw new Error(t + ": empty result");
                        if (f.code !== 0)
                            throw new Error(t + ": " + H(f.data || "error"));
                        return [2, f];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (t) { return H(t).replace(/\.js$/, ""); };
    class_1.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () { var t, _b, r_1, r_2; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (this.cache.tabs)
                        return [2, this.cache.tabs];
                    t = [];
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, , 5]);
                    _b = this.has("home");
                    if (!_b) return [3, 3];
                    return [4, this.run("home")];
                case 2:
                    _b = (t = (_c.sent()).data || []);
                    _c.label = 3;
                case 3:
                    _b;
                    return [3, 5];
                case 4:
                    r_1 = _c.sent();
                    this.host.log && this.host.log("home: " + r_1.message);
                    return [3, 5];
                case 5:
                    if (!(!t.length && this.has("genre"))) return [3, 9];
                    _c.label = 6;
                case 6:
                    _c.trys.push([6, 8, , 9]);
                    return [4, this.run("genre")];
                case 7:
                    t = ((_c.sent()).data || []).slice(0, 2);
                    return [3, 9];
                case 8:
                    r_2 = _c.sent();
                    return [3, 9];
                case 9: return [2, (this.cache.tabs = t.filter(function (r) { return r && r.script; }), this.cache.tabs)];
            }
        }); });
    };
    class_1.prototype.list = function (t, r, n) {
        return __awaiter(this, void 0, void 0, function () {
            var s, o, f, d, p;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        s = t + "|" + r;
                        n = Math.max(1, n | 0);
                        o = n === 1 ? "" : this.tokens[s + "|" + n];
                        if (n > 1 && o == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(t, r, o)];
                    case 1:
                        f = _b.sent(), d = H(f.data2);
                        d && (this.tokens[s + "|" + (n + 1)] = d);
                        p = (f.data || []).filter(Boolean).map(function (g) { return ({ name: H(g.name).trim(), link: _this.canon(Wt(g.host || _this.base + "/", g.link)), cover: Wt(g.host || _this.base + "/", g.cover), description: H(g.description), tag: H(g.tag) }); }).filter(function (g) { return g.name && g.link; });
                        return [2, { items: p, hasNext: !!d && p.length > 0 }];
                }
            });
        });
    };
    class_1.prototype.popular = function (t) {
        return __awaiter(this, void 0, void 0, function () { var r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    r = _b.sent();
                    return [2, r[0] ? this.list(this.scriptFile(r[0].script), H(r[0].input), t) : this.search("", t)];
            }
        }); });
    };
    class_1.prototype.latest = function (t) {
        return __awaiter(this, void 0, void 0, function () { var r, n; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    r = _b.sent(), n = r[1] || r[0];
                    return [2, n ? this.list(this.scriptFile(n.script), H(n.input), t) : this.search("", t)];
            }
        }); });
    };
    class_1.prototype.search = function (t, r) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, this.has("search") ? this.list("search", t, r) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (t) {
        return __awaiter(this, void 0, void 0, function () { var r, n; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    t = this.decanon(t);
                    return [4, this.run("detail", t)];
                case 1:
                    r = (_b.sent()).data || {}, n = [].concat(r.genres || [], r.tags || []).map(function (s) { return typeof s == "string" ? s : s && s.title; }).filter(Boolean);
                    return [2, { name: H(r.name).trim(), cover: Wt(r.host || this.base + "/", r.cover), author: H(r.author).trim(), description: la(H(r.description)), detail: la(H(r.detail)), ongoing: r.ongoing !== !1 && r.ongoing !== "false", genres: jn(n.map(function (s) { return String(s).trim(); })), url: this.canon(t), format: H(r.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var r, n, n_1, n_1_1, s, _b, _c, e_22_1, _d;
            var e_22, _f;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        t = this.decanon(t);
                        r = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", t)];
                    case 1:
                        n = (_g.sent()).data || [t];
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 7, 8, 9]);
                        n_1 = __values(n), n_1_1 = n_1.next();
                        _g.label = 3;
                    case 3:
                        if (!!n_1_1.done) return [3, 6];
                        s = n_1_1.value;
                        _c = (_b = r).concat;
                        return [4, this.run("toc", H(s))];
                    case 4:
                        r = _c.apply(_b, [(_g.sent()).data || []]);
                        _g.label = 5;
                    case 5:
                        n_1_1 = n_1.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_22_1 = _g.sent();
                        e_22 = { error: e_22_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (n_1_1 && !n_1_1.done && (_f = n_1.return)) _f.call(n_1);
                        }
                        finally { if (e_22) throw e_22.error; }
                        return [7];
                    case 9: return [3, 13];
                    case 10:
                        _d = this.has("toc");
                        if (!_d) return [3, 12];
                        return [4, this.run("toc", t)];
                    case 11:
                        _d = (r = (_g.sent()).data || []);
                        _g.label = 12;
                    case 12:
                        _d;
                        _g.label = 13;
                    case 13: return [2, r.filter(function (n) { return n && n.url && n.type !== "section"; }).map(function (n, s) { return ({ name: H(n.name).trim() || "#" + (s + 1), url: _this.canon(Wt(n.host || _this.base + "/", n.url)), pay: !!(n.pay || n.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var r, _b, _c, n, s;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        t = this.decanon(t);
                        if (!(this.has("chap") && this.meta.type === "comic")) return [3, 2];
                        return [4, this.run("chap", t)];
                    case 1:
                        _b = r = (_d.sent()).data;
                        return [3, 6];
                    case 2:
                        if (!this.has("page")) return [3, 4];
                        return [4, this.run("page", t)];
                    case 3:
                        _c = r = (_d.sent()).data;
                        return [3, 5];
                    case 4:
                        _c = r = [t];
                        _d.label = 5;
                    case 5:
                        _b = _c;
                        _d.label = 6;
                    case 6:
                        _b, typeof r == "string" && (r = r.split(/[\n,]+/));
                        n = function (o) { return !o || /^data:|loading|lazy|blank|placeholder|spacer|\/nocover|1x1\./i.test(String(o)); }, s = function (o) { if (typeof o == "string")
                            return o; if (!o)
                            return ""; var f = o.link || o.url || o.data, d = Array.isArray(o.fallback) ? o.fallback.filter(Boolean) : []; return n(f) && d.length ? d[0] : f; };
                        return [2, (r || []).map(function (o) { return Wt(_this.base + "/", s(o)); }).filter(Boolean)];
                }
            });
        });
    };
    class_1.prototype.content = function (t) {
        return __awaiter(this, void 0, void 0, function () { var r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    t = this.decanon(t);
                    return [4, this.run("chap", t)];
                case 1:
                    r = _b.sent();
                    return [2, { html: H(r.data), title: H(r.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var r, s, n, r_3, r_3_1, s, o, f, f_2, f_2_1, d, p, o_2, e_23_1;
            var e_23, _b, e_24, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        t = this.decanon(t);
                        r = [{ title: "Default", data: t }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", t)];
                    case 1:
                        s = (_d.sent()).data;
                        Array.isArray(s) && s.length && (r = s.map(function (o) { return typeof o == "string" ? { title: "Server", data: o } : { title: H(o.title || o.name || "Server"), data: H(o.data || o.url || o.link) }; }));
                        _d.label = 2;
                    case 2:
                        n = [];
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 10, 11, 12]);
                        r_3 = __values(r), r_3_1 = r_3.next();
                        _d.label = 4;
                    case 4:
                        if (!!r_3_1.done) return [3, 9];
                        s = r_3_1.value;
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 7, , 8]);
                        return [4, this.run("track", s.data)];
                    case 6:
                        o = (_d.sent()).data || {}, f = Array.isArray(o) ? o : [o];
                        try {
                            for (f_2 = (e_24 = void 0, __values(f)), f_2_1 = f_2.next(); !f_2_1.done; f_2_1 = f_2.next()) {
                                d = f_2_1.value;
                                if (!d || !d.data || d.type === "webview")
                                    continue;
                                p = Wt(d.host || this.base + "/", d.data);
                                n.push({ url: p, quality: s.title + (d.quality ? " " + d.quality : ""), headers: d.headers || { Referer: this.base + "/" }, subtitles: (d.subtitles || (d.subtitle ? [{ data: d.subtitle, label: "Sub" }] : [])).map(function (g) { return ({ file: Wt(_this.base + "/", g.data || g.file), label: H(g.label || g.language || "Sub") }); }), mimeType: H(d.mimeType) });
                            }
                        }
                        catch (e_24_1) { e_24 = { error: e_24_1 }; }
                        finally {
                            try {
                                if (f_2_1 && !f_2_1.done && (_c = f_2.return)) _c.call(f_2);
                            }
                            finally { if (e_24) throw e_24.error; }
                        }
                        return [3, 8];
                    case 7:
                        o_2 = _d.sent();
                        this.host.log && this.host.log("track " + s.title + ": " + o_2.message);
                        return [3, 8];
                    case 8:
                        r_3_1 = r_3.next();
                        return [3, 4];
                    case 9: return [3, 12];
                    case 10:
                        e_23_1 = _d.sent();
                        e_23 = { error: e_23_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (r_3_1 && !r_3_1.done && (_b = r_3.return)) _b.call(r_3);
                        }
                        finally { if (e_23) throw e_23.error; }
                        return [7];
                    case 12: return [2, n];
                }
            });
        });
    };
    return class_1;
}());
function la(e) {
    return String(e).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
var Lt = { id: "metruyencv", name: "Mê Truyện CV", source: "https://metruyencv.xyz", type: "novel", locale: "vi", nsfw: !1, version: 2, config: {}, configDefaults: {}, itemType: 2, short: !1, shorts: !1, lnId: "kiritokmn.metruyencv", lnIcon: "", lnVersion: "1.4.2" }, fa = { book: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (r, n, s, o, f, d, p, g, v, N, C, S, L, B, ut, M, et) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function F(a) { return a ? /^https?:\/\//i.test(a) ? a : a.indexOf("//") === 0 ? "https:" + a : a.charAt(0) === "/" ? x + a : x + "/" + a.replace(/^\/+/, "") : ""; } function w(a) { return a ? /^https?:\/\//i.test(a) ? a.replace(/^(https?:\/\/)(www\.)?[^\/?#]+/i, x) : F(a) : x; } function m(a) { return (a || "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim(); } function j(a) { try {
                                        return decodeURIComponent(a || "");
                                    }
                                    catch (u) {
                                        return a || "";
                                    } } function T(a) { return Array.isArray(a) ? a[0] : a; } function z(a) { var u = {}; try {
                                        var i = (a || "").split("?")[1] || "";
                                        if (!i)
                                            return u;
                                        i.split("&").forEach(function (c) { if (c) {
                                            var l = c.split("="), h = j(l[0]).trim(), b = j(l.slice(1).join("="));
                                            h && (u.hasOwnProperty(h) ? (Array.isArray(u[h]) || (u[h] = [u[h]]), u[h].push(b)) : u[h] = b);
                                        } });
                                    }
                                    catch (c) { } return u; } function q(a) { var u = []; return a ? (Object.keys(a).forEach(function (i) { var c = a[i]; if (c != null) {
                                        if (Array.isArray(c)) {
                                            c.forEach(function (l) { l != null && u.push(encodeURIComponent(i) + "=" + encodeURIComponent(String(l))); });
                                            return;
                                        }
                                        u.push(encodeURIComponent(i) + "=" + encodeURIComponent(String(c)));
                                    } }), u.join("&")) : ""; } function U(a) { var u = w(a || "").match(/\/truyen\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function _(a) { var u = w(a || "").match(/\/truyen\/[^\/?#]+\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function ht(a) { var u = w(a || "").match(/\/the-loai\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function V(a) { return m((a || "").replace(/-/g, " ")); } function $(a) { var u = m(a).toLowerCase(); return u ? u.indexOf("hoàn thành") === -1 && u.indexOf("hoan thanh") === -1 && u.indexOf("hoan-thanh") === -1 && u.indexOf("/trang-thai/hoan-thanh/") === -1 && u.indexOf("full") === -1 && u.indexOf(" end") === -1 && u.indexOf("đã hoàn thành") === -1 : !0; } function it(a, u) { var i = w(a || x), c = z(i), l = { s: T(c.s), post_type: T(c.post_type) || "wp-manga" }, h = ht(i); return l.s === void 0 && (l.s = ""), h && (l["genre[]"] = h), c.hasOwnProperty("genre[]") && (l["genre[]"] = c["genre[]"]), c.hasOwnProperty("status[0]") && (l["status[0]"] = c["status[0]"]), c.hasOwnProperty("m_orderby") && (l.m_orderby = c.m_orderby), c.hasOwnProperty("author") && (l.author = c.author), c.hasOwnProperty("release") && (l.release = c.release), c.hasOwnProperty("adult") && (l.adult = c.adult), /\/trang-thai\/hoan-thanh\/?$/i.test(i) && (l["status[0]"] = "end"), !l.s && !l["genre[]"] && !l["status[0]"] && !l.m_orderby && (l.m_orderby = "latest"), u && (l.paged = String(u)), x + "/?" + q(l); } function Ht(a) { return x + "/?" + q({ s: "", post_type: "wp-manga", "genre[]": a }); } function pt(a, u) { return { title: m(a), input: it(u, 1), script: "book.js" }; } function gt(a) { if (!a)
                                        return ""; var u = a.attr("src"); return (!u || u.indexOf("data:image") === 0) && (u = a.attr("data-src") || a.attr("data-lazy-src") || a.attr("data-original") || u), F(u); } function Q(a, u, i) { var c = U(a), l = c ? x + "/truyen/" + c + "/" : w(a), h = {}; u && (h.manga_id = u), i && (i.title && (h.title = i.title), i.cover && (h.cover = i.cover), i.statusText && (h.status = i.statusText), i.latestChapterSlug && (h.latest = i.latestChapterSlug)); var b = q(h); return b ? l + "?" + b : l; } function Mt(a, u, i) { var c = typeof a == "string" ? I(a) : a, l = c.slug || U(i), h = l && u ? x + "/truyen/" + l + "/" + u + "/" : w(i), b = {}; c.mangaId && (b.manga_id = c.mangaId), c.title && (b.title = c.title), c.cover && (b.cover = c.cover), c.statusText && (b.status = c.statusText), u && (b.chapter = u); var E = q(b); return E ? h + "?" + E : h; } function I(a) { var u = w(a || ""), i = z(u); return { url: u, slug: U(u), mangaId: m(T(i.manga_id) || ""), title: m(T(i.title) || ""), cover: T(i.cover) || "", statusText: m(T(i.status) || ""), latestChapterSlug: m(T(i.latest) || ""), chapterSlug: m(T(i.chapter) || _(u)) }; } function W(a) { var u = a.select(".post-title a, h3 a").first(); if (!u)
                                        return null; var i = a.select(".except-summary").first(), c = a.select(".latest-chap a, .font-meta.chapter a, .chapter-item a, .list-chapter a").first(), l = m(u.text()), h = w(u.attr("href")), b = a.select(".trangthai, .summary-content, .mg_status").first(), E = b ? b.select("a").last() : null, J = m((E ? E.attr("href") + " " : "") + (b ? b.text() : "")), Z = []; a.select(".genres-content-search a, .genres-content a").forEach(function (K) { var Y = m(K.text()), tt = K.attr("href"); !Y || !tt || Z.push(pt(Y, tt)); }); var O = { title: l, rawLink: h, slug: U(h), mangaId: m(i ? i.attr("data-manga-id") : ""), cover: gt(a.select("img").first()), descriptionHtml: i && i.html() || "", descriptionText: m(i ? i.text() : ""), statusText: J, ongoing: $(J), genres: Z, latestChapterSlug: m(c ? _(c.attr("href")) || c.attr("value") : ""), latestChapterName: m(c ? c.text() : ""), latestChapterUrl: c ? w(c.attr("href")) : "", host: x }; return O.link = Q(O.rawLink, O.mangaId, O), O; } function ot(a) { var u = []; return a.select(".row.c-tabs-item__content").forEach(function (i) { var c = W(i); c && u.push(c); }), u.length === 0 && a.select(".page-item-detail").forEach(function (i) { var c = W(i); c && u.push(c); }), u; } function qt(a) { return { name: a.title, link: a.link, cover: a.cover, author: "N/A", description: a.descriptionText, host: x }; } function Ot(a) { var u = a.select("#madara_goto_page").first(); if (!u)
                                        return ""; var i = parseInt(u.attr("placeholder") || "1", 10), c = parseInt(u.attr("max") || "0", 10); return !isNaN(i) && !isNaN(c) && i < c ? String(i + 1) : ""; } function bt(a, u) { var i; for (i = 0; i < a.length; i++)
                                        if (u.mangaId && a[i].mangaId === u.mangaId)
                                            return a[i]; for (i = 0; i < a.length; i++)
                                        if (u.slug && a[i].slug === u.slug)
                                            return a[i]; for (i = 0; i < a.length; i++)
                                        if (u.title && m(a[i].title).toLowerCase() === m(u.title).toLowerCase())
                                            return a[i]; return a.length ? a[0] : null; } function mt(a, u) { var i = { url: a.url, slug: u && u.slug ? u.slug : a.slug, mangaId: u && u.mangaId ? u.mangaId : a.mangaId, title: u && u.title ? u.title : a.title || V(a.slug), cover: u && u.cover ? u.cover : a.cover, statusText: u && u.statusText ? u.statusText : a.statusText, descriptionHtml: u && u.descriptionHtml ? u.descriptionHtml : "", descriptionText: u && u.descriptionText ? u.descriptionText : "", ongoing: u ? u.ongoing : $(a.statusText), genres: u && u.genres ? u.genres : [], latestChapterSlug: u && u.latestChapterSlug ? u.latestChapterSlug : a.latestChapterSlug, latestChapterName: u && u.latestChapterName ? u.latestChapterName : "", latestChapterUrl: u && u.latestChapterUrl ? u.latestChapterUrl : "", host: x }; return i.link = Q(u && u.rawLink ? u.rawLink : a.url, i.mangaId, i), i; } function Ft(a) {
                                        return __awaiter(this, void 0, void 0, function () { var u, i, c, l; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    u = I(a), i = u.title || V(u.slug), c = null;
                                                    if (!i) return [3, 2];
                                                    return [4, r(x, { queries: { s: i, post_type: "wp-manga" } })];
                                                case 1:
                                                    l = _b.sent();
                                                    l && l.ok && (c = bt(ot(l.html()), u));
                                                    _b.label = 2;
                                                case 2: return [2, mt(u, c)];
                                            }
                                        }); });
                                    } function _t(a) {
                                        return __awaiter(this, void 0, void 0, function () { var u, i, c, l, h; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    if (!a)
                                                        return [2, ""];
                                                    return [4, r(rt + "?" + q({ action: "get_first_chapter_content", manga_id: a }))];
                                                case 1:
                                                    u = _b.sent();
                                                    if (!u || !u.ok)
                                                        return [2, ""];
                                                    i = u.json(), c = lt(i);
                                                    if (!c)
                                                        return [2, ""];
                                                    l = s.parse(c), h = l.select("#wp-manga-current-chap").first();
                                                    return [2, m(h ? h.attr("value") : "")];
                                            }
                                        }); });
                                    } function lt(a) { return a ? typeof a == "string" ? a : a.data && typeof a.data == "string" ? a.data : a.data && a.data.content ? a.data.content : a.data && a.data.data && a.data.data.content ? a.data.data.content : a.content ? a.content : "" : ""; } function It(a) { return (a || "").replace(/<!--[\s\S]*?-->/g, "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").trim(); } function X(a, u) {
                                        return __awaiter(this, void 0, void 0, function () { var i, c, l, h; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    i = it(a || x, u || "1");
                                                    return [4, r(i)];
                                                case 1:
                                                    c = _b.sent();
                                                    if (!c || !c.ok)
                                                        return [2, null];
                                                    l = c.html(), h = [];
                                                    return [2, (ot(l).forEach(function (b) { h.push(qt(b)); }), o.success(h, Ot(l)))];
                                            }
                                        }); });
                                    } var x, rt; return __generator(this, function (_b) {
                                        x = "https://metruyencv.xyz";
                                        try {
                                            CONFIG_URL && (x = CONFIG_URL.replace(/\/+$/, ""));
                                        }
                                        catch (a) { }
                                        rt = x + "/wp-admin/admin-ajax.php";
                                        return [2, typeof X == "function" ? X : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, detail: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (r, n, s, o, f, d, p, g, v, N, C, S, L, B, ut, M, et) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function F(a) { return a ? /^https?:\/\//i.test(a) ? a : a.indexOf("//") === 0 ? "https:" + a : a.charAt(0) === "/" ? x + a : x + "/" + a.replace(/^\/+/, "") : ""; } function w(a) { return a ? /^https?:\/\//i.test(a) ? a.replace(/^(https?:\/\/)(www\.)?[^\/?#]+/i, x) : F(a) : x; } function m(a) { return (a || "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim(); } function j(a) { try {
                                        return decodeURIComponent(a || "");
                                    }
                                    catch (u) {
                                        return a || "";
                                    } } function T(a) { return Array.isArray(a) ? a[0] : a; } function z(a) { var u = {}; try {
                                        var i = (a || "").split("?")[1] || "";
                                        if (!i)
                                            return u;
                                        i.split("&").forEach(function (c) { if (c) {
                                            var l = c.split("="), h = j(l[0]).trim(), b = j(l.slice(1).join("="));
                                            h && (u.hasOwnProperty(h) ? (Array.isArray(u[h]) || (u[h] = [u[h]]), u[h].push(b)) : u[h] = b);
                                        } });
                                    }
                                    catch (c) { } return u; } function q(a) { var u = []; return a ? (Object.keys(a).forEach(function (i) { var c = a[i]; if (c != null) {
                                        if (Array.isArray(c)) {
                                            c.forEach(function (l) { l != null && u.push(encodeURIComponent(i) + "=" + encodeURIComponent(String(l))); });
                                            return;
                                        }
                                        u.push(encodeURIComponent(i) + "=" + encodeURIComponent(String(c)));
                                    } }), u.join("&")) : ""; } function U(a) { var u = w(a || "").match(/\/truyen\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function _(a) { var u = w(a || "").match(/\/truyen\/[^\/?#]+\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function ht(a) { var u = w(a || "").match(/\/the-loai\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function V(a) { return m((a || "").replace(/-/g, " ")); } function $(a) { var u = m(a).toLowerCase(); return u ? u.indexOf("hoàn thành") === -1 && u.indexOf("hoan thanh") === -1 && u.indexOf("hoan-thanh") === -1 && u.indexOf("/trang-thai/hoan-thanh/") === -1 && u.indexOf("full") === -1 && u.indexOf(" end") === -1 && u.indexOf("đã hoàn thành") === -1 : !0; } function it(a, u) { var i = w(a || x), c = z(i), l = { s: T(c.s), post_type: T(c.post_type) || "wp-manga" }, h = ht(i); return l.s === void 0 && (l.s = ""), h && (l["genre[]"] = h), c.hasOwnProperty("genre[]") && (l["genre[]"] = c["genre[]"]), c.hasOwnProperty("status[0]") && (l["status[0]"] = c["status[0]"]), c.hasOwnProperty("m_orderby") && (l.m_orderby = c.m_orderby), c.hasOwnProperty("author") && (l.author = c.author), c.hasOwnProperty("release") && (l.release = c.release), c.hasOwnProperty("adult") && (l.adult = c.adult), /\/trang-thai\/hoan-thanh\/?$/i.test(i) && (l["status[0]"] = "end"), !l.s && !l["genre[]"] && !l["status[0]"] && !l.m_orderby && (l.m_orderby = "latest"), u && (l.paged = String(u)), x + "/?" + q(l); } function Ht(a) { return x + "/?" + q({ s: "", post_type: "wp-manga", "genre[]": a }); } function pt(a, u) { return { title: m(a), input: it(u, 1), script: "book.js" }; } function gt(a) { if (!a)
                                        return ""; var u = a.attr("src"); return (!u || u.indexOf("data:image") === 0) && (u = a.attr("data-src") || a.attr("data-lazy-src") || a.attr("data-original") || u), F(u); } function Q(a, u, i) { var c = U(a), l = c ? x + "/truyen/" + c + "/" : w(a), h = {}; u && (h.manga_id = u), i && (i.title && (h.title = i.title), i.cover && (h.cover = i.cover), i.statusText && (h.status = i.statusText), i.latestChapterSlug && (h.latest = i.latestChapterSlug)); var b = q(h); return b ? l + "?" + b : l; } function Mt(a, u, i) { var c = typeof a == "string" ? I(a) : a, l = c.slug || U(i), h = l && u ? x + "/truyen/" + l + "/" + u + "/" : w(i), b = {}; c.mangaId && (b.manga_id = c.mangaId), c.title && (b.title = c.title), c.cover && (b.cover = c.cover), c.statusText && (b.status = c.statusText), u && (b.chapter = u); var E = q(b); return E ? h + "?" + E : h; } function I(a) { var u = w(a || ""), i = z(u); return { url: u, slug: U(u), mangaId: m(T(i.manga_id) || ""), title: m(T(i.title) || ""), cover: T(i.cover) || "", statusText: m(T(i.status) || ""), latestChapterSlug: m(T(i.latest) || ""), chapterSlug: m(T(i.chapter) || _(u)) }; } function W(a) { var u = a.select(".post-title a, h3 a").first(); if (!u)
                                        return null; var i = a.select(".except-summary").first(), c = a.select(".latest-chap a, .font-meta.chapter a, .chapter-item a, .list-chapter a").first(), l = m(u.text()), h = w(u.attr("href")), b = a.select(".trangthai, .summary-content, .mg_status").first(), E = b ? b.select("a").last() : null, J = m((E ? E.attr("href") + " " : "") + (b ? b.text() : "")), Z = []; a.select(".genres-content-search a, .genres-content a").forEach(function (K) { var Y = m(K.text()), tt = K.attr("href"); !Y || !tt || Z.push(pt(Y, tt)); }); var O = { title: l, rawLink: h, slug: U(h), mangaId: m(i ? i.attr("data-manga-id") : ""), cover: gt(a.select("img").first()), descriptionHtml: i && i.html() || "", descriptionText: m(i ? i.text() : ""), statusText: J, ongoing: $(J), genres: Z, latestChapterSlug: m(c ? _(c.attr("href")) || c.attr("value") : ""), latestChapterName: m(c ? c.text() : ""), latestChapterUrl: c ? w(c.attr("href")) : "", host: x }; return O.link = Q(O.rawLink, O.mangaId, O), O; } function ot(a) { var u = []; return a.select(".row.c-tabs-item__content").forEach(function (i) { var c = W(i); c && u.push(c); }), u.length === 0 && a.select(".page-item-detail").forEach(function (i) { var c = W(i); c && u.push(c); }), u; } function qt(a) { return { name: a.title, link: a.link, cover: a.cover, author: "N/A", description: a.descriptionText, host: x }; } function Ot(a) { var u = a.select("#madara_goto_page").first(); if (!u)
                                        return ""; var i = parseInt(u.attr("placeholder") || "1", 10), c = parseInt(u.attr("max") || "0", 10); return !isNaN(i) && !isNaN(c) && i < c ? String(i + 1) : ""; } function bt(a, u) { var i; for (i = 0; i < a.length; i++)
                                        if (u.mangaId && a[i].mangaId === u.mangaId)
                                            return a[i]; for (i = 0; i < a.length; i++)
                                        if (u.slug && a[i].slug === u.slug)
                                            return a[i]; for (i = 0; i < a.length; i++)
                                        if (u.title && m(a[i].title).toLowerCase() === m(u.title).toLowerCase())
                                            return a[i]; return a.length ? a[0] : null; } function mt(a, u) { var i = { url: a.url, slug: u && u.slug ? u.slug : a.slug, mangaId: u && u.mangaId ? u.mangaId : a.mangaId, title: u && u.title ? u.title : a.title || V(a.slug), cover: u && u.cover ? u.cover : a.cover, statusText: u && u.statusText ? u.statusText : a.statusText, descriptionHtml: u && u.descriptionHtml ? u.descriptionHtml : "", descriptionText: u && u.descriptionText ? u.descriptionText : "", ongoing: u ? u.ongoing : $(a.statusText), genres: u && u.genres ? u.genres : [], latestChapterSlug: u && u.latestChapterSlug ? u.latestChapterSlug : a.latestChapterSlug, latestChapterName: u && u.latestChapterName ? u.latestChapterName : "", latestChapterUrl: u && u.latestChapterUrl ? u.latestChapterUrl : "", host: x }; return i.link = Q(u && u.rawLink ? u.rawLink : a.url, i.mangaId, i), i; } function Ft(a) {
                                        return __awaiter(this, void 0, void 0, function () { var u, i, c, l; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    u = I(a), i = u.title || V(u.slug), c = null;
                                                    if (!i) return [3, 2];
                                                    return [4, r(x, { queries: { s: i, post_type: "wp-manga" } })];
                                                case 1:
                                                    l = _b.sent();
                                                    l && l.ok && (c = bt(ot(l.html()), u));
                                                    _b.label = 2;
                                                case 2: return [2, mt(u, c)];
                                            }
                                        }); });
                                    } function _t(a) {
                                        return __awaiter(this, void 0, void 0, function () { var u, i, c, l, h; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    if (!a)
                                                        return [2, ""];
                                                    return [4, r(rt + "?" + q({ action: "get_first_chapter_content", manga_id: a }))];
                                                case 1:
                                                    u = _b.sent();
                                                    if (!u || !u.ok)
                                                        return [2, ""];
                                                    i = u.json(), c = lt(i);
                                                    if (!c)
                                                        return [2, ""];
                                                    l = s.parse(c), h = l.select("#wp-manga-current-chap").first();
                                                    return [2, m(h ? h.attr("value") : "")];
                                            }
                                        }); });
                                    } function lt(a) { return a ? typeof a == "string" ? a : a.data && typeof a.data == "string" ? a.data : a.data && a.data.content ? a.data.content : a.data && a.data.data && a.data.data.content ? a.data.data.content : a.content ? a.content : "" : ""; } function It(a) { return (a || "").replace(/<!--[\s\S]*?-->/g, "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").trim(); } function X(a) {
                                        return __awaiter(this, void 0, void 0, function () { var u; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0: return [4, Ft(a)];
                                                case 1:
                                                    u = _b.sent();
                                                    return [2, o.success({ name: u.title || V(u.slug), cover: u.cover || "", host: x, author: "N/A", description: u.descriptionHtml || u.descriptionText || "", ongoing: u.ongoing !== !1, genres: u.genres || [] })];
                                            }
                                        }); });
                                    } var x, rt; return __generator(this, function (_b) {
                                        x = "https://metruyencv.xyz";
                                        try {
                                            CONFIG_URL && (x = CONFIG_URL.replace(/\/+$/, ""));
                                        }
                                        catch (a) { }
                                        rt = x + "/wp-admin/admin-ajax.php";
                                        return [2, typeof X == "function" ? X : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, toc: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (r, n, s, o, f, d, p, g, v, N, C, S, L, B, ut, M, et) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function F(a) { return a ? /^https?:\/\//i.test(a) ? a : a.indexOf("//") === 0 ? "https:" + a : a.charAt(0) === "/" ? x + a : x + "/" + a.replace(/^\/+/, "") : ""; } function w(a) { return a ? /^https?:\/\//i.test(a) ? a.replace(/^(https?:\/\/)(www\.)?[^\/?#]+/i, x) : F(a) : x; } function m(a) { return (a || "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim(); } function j(a) { try {
                                        return decodeURIComponent(a || "");
                                    }
                                    catch (u) {
                                        return a || "";
                                    } } function T(a) { return Array.isArray(a) ? a[0] : a; } function z(a) { var u = {}; try {
                                        var i = (a || "").split("?")[1] || "";
                                        if (!i)
                                            return u;
                                        i.split("&").forEach(function (c) { if (c) {
                                            var l = c.split("="), h = j(l[0]).trim(), b = j(l.slice(1).join("="));
                                            h && (u.hasOwnProperty(h) ? (Array.isArray(u[h]) || (u[h] = [u[h]]), u[h].push(b)) : u[h] = b);
                                        } });
                                    }
                                    catch (c) { } return u; } function q(a) { var u = []; return a ? (Object.keys(a).forEach(function (i) { var c = a[i]; if (c != null) {
                                        if (Array.isArray(c)) {
                                            c.forEach(function (l) { l != null && u.push(encodeURIComponent(i) + "=" + encodeURIComponent(String(l))); });
                                            return;
                                        }
                                        u.push(encodeURIComponent(i) + "=" + encodeURIComponent(String(c)));
                                    } }), u.join("&")) : ""; } function U(a) { var u = w(a || "").match(/\/truyen\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function _(a) { var u = w(a || "").match(/\/truyen\/[^\/?#]+\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function ht(a) { var u = w(a || "").match(/\/the-loai\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function V(a) { return m((a || "").replace(/-/g, " ")); } function $(a) { var u = m(a).toLowerCase(); return u ? u.indexOf("hoàn thành") === -1 && u.indexOf("hoan thanh") === -1 && u.indexOf("hoan-thanh") === -1 && u.indexOf("/trang-thai/hoan-thanh/") === -1 && u.indexOf("full") === -1 && u.indexOf(" end") === -1 && u.indexOf("đã hoàn thành") === -1 : !0; } function it(a, u) { var i = w(a || x), c = z(i), l = { s: T(c.s), post_type: T(c.post_type) || "wp-manga" }, h = ht(i); return l.s === void 0 && (l.s = ""), h && (l["genre[]"] = h), c.hasOwnProperty("genre[]") && (l["genre[]"] = c["genre[]"]), c.hasOwnProperty("status[0]") && (l["status[0]"] = c["status[0]"]), c.hasOwnProperty("m_orderby") && (l.m_orderby = c.m_orderby), c.hasOwnProperty("author") && (l.author = c.author), c.hasOwnProperty("release") && (l.release = c.release), c.hasOwnProperty("adult") && (l.adult = c.adult), /\/trang-thai\/hoan-thanh\/?$/i.test(i) && (l["status[0]"] = "end"), !l.s && !l["genre[]"] && !l["status[0]"] && !l.m_orderby && (l.m_orderby = "latest"), u && (l.paged = String(u)), x + "/?" + q(l); } function Ht(a) { return x + "/?" + q({ s: "", post_type: "wp-manga", "genre[]": a }); } function pt(a, u) { return { title: m(a), input: it(u, 1), script: "book.js" }; } function gt(a) { if (!a)
                                        return ""; var u = a.attr("src"); return (!u || u.indexOf("data:image") === 0) && (u = a.attr("data-src") || a.attr("data-lazy-src") || a.attr("data-original") || u), F(u); } function Q(a, u, i) { var c = U(a), l = c ? x + "/truyen/" + c + "/" : w(a), h = {}; u && (h.manga_id = u), i && (i.title && (h.title = i.title), i.cover && (h.cover = i.cover), i.statusText && (h.status = i.statusText), i.latestChapterSlug && (h.latest = i.latestChapterSlug)); var b = q(h); return b ? l + "?" + b : l; } function Mt(a, u, i) { var c = typeof a == "string" ? I(a) : a, l = c.slug || U(i), h = l && u ? x + "/truyen/" + l + "/" + u + "/" : w(i), b = {}; c.mangaId && (b.manga_id = c.mangaId), c.title && (b.title = c.title), c.cover && (b.cover = c.cover), c.statusText && (b.status = c.statusText), u && (b.chapter = u); var E = q(b); return E ? h + "?" + E : h; } function I(a) { var u = w(a || ""), i = z(u); return { url: u, slug: U(u), mangaId: m(T(i.manga_id) || ""), title: m(T(i.title) || ""), cover: T(i.cover) || "", statusText: m(T(i.status) || ""), latestChapterSlug: m(T(i.latest) || ""), chapterSlug: m(T(i.chapter) || _(u)) }; } function W(a) { var u = a.select(".post-title a, h3 a").first(); if (!u)
                                        return null; var i = a.select(".except-summary").first(), c = a.select(".latest-chap a, .font-meta.chapter a, .chapter-item a, .list-chapter a").first(), l = m(u.text()), h = w(u.attr("href")), b = a.select(".trangthai, .summary-content, .mg_status").first(), E = b ? b.select("a").last() : null, J = m((E ? E.attr("href") + " " : "") + (b ? b.text() : "")), Z = []; a.select(".genres-content-search a, .genres-content a").forEach(function (K) { var Y = m(K.text()), tt = K.attr("href"); !Y || !tt || Z.push(pt(Y, tt)); }); var O = { title: l, rawLink: h, slug: U(h), mangaId: m(i ? i.attr("data-manga-id") : ""), cover: gt(a.select("img").first()), descriptionHtml: i && i.html() || "", descriptionText: m(i ? i.text() : ""), statusText: J, ongoing: $(J), genres: Z, latestChapterSlug: m(c ? _(c.attr("href")) || c.attr("value") : ""), latestChapterName: m(c ? c.text() : ""), latestChapterUrl: c ? w(c.attr("href")) : "", host: x }; return O.link = Q(O.rawLink, O.mangaId, O), O; } function ot(a) { var u = []; return a.select(".row.c-tabs-item__content").forEach(function (i) { var c = W(i); c && u.push(c); }), u.length === 0 && a.select(".page-item-detail").forEach(function (i) { var c = W(i); c && u.push(c); }), u; } function qt(a) { return { name: a.title, link: a.link, cover: a.cover, author: "N/A", description: a.descriptionText, host: x }; } function Ot(a) { var u = a.select("#madara_goto_page").first(); if (!u)
                                        return ""; var i = parseInt(u.attr("placeholder") || "1", 10), c = parseInt(u.attr("max") || "0", 10); return !isNaN(i) && !isNaN(c) && i < c ? String(i + 1) : ""; } function bt(a, u) { var i; for (i = 0; i < a.length; i++)
                                        if (u.mangaId && a[i].mangaId === u.mangaId)
                                            return a[i]; for (i = 0; i < a.length; i++)
                                        if (u.slug && a[i].slug === u.slug)
                                            return a[i]; for (i = 0; i < a.length; i++)
                                        if (u.title && m(a[i].title).toLowerCase() === m(u.title).toLowerCase())
                                            return a[i]; return a.length ? a[0] : null; } function mt(a, u) { var i = { url: a.url, slug: u && u.slug ? u.slug : a.slug, mangaId: u && u.mangaId ? u.mangaId : a.mangaId, title: u && u.title ? u.title : a.title || V(a.slug), cover: u && u.cover ? u.cover : a.cover, statusText: u && u.statusText ? u.statusText : a.statusText, descriptionHtml: u && u.descriptionHtml ? u.descriptionHtml : "", descriptionText: u && u.descriptionText ? u.descriptionText : "", ongoing: u ? u.ongoing : $(a.statusText), genres: u && u.genres ? u.genres : [], latestChapterSlug: u && u.latestChapterSlug ? u.latestChapterSlug : a.latestChapterSlug, latestChapterName: u && u.latestChapterName ? u.latestChapterName : "", latestChapterUrl: u && u.latestChapterUrl ? u.latestChapterUrl : "", host: x }; return i.link = Q(u && u.rawLink ? u.rawLink : a.url, i.mangaId, i), i; } function Ft(a) {
                                        return __awaiter(this, void 0, void 0, function () { var u, i, c, l; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    u = I(a), i = u.title || V(u.slug), c = null;
                                                    if (!i) return [3, 2];
                                                    return [4, r(x, { queries: { s: i, post_type: "wp-manga" } })];
                                                case 1:
                                                    l = _b.sent();
                                                    l && l.ok && (c = bt(ot(l.html()), u));
                                                    _b.label = 2;
                                                case 2: return [2, mt(u, c)];
                                            }
                                        }); });
                                    } function _t(a) {
                                        return __awaiter(this, void 0, void 0, function () { var u, i, c, l, h; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    if (!a)
                                                        return [2, ""];
                                                    return [4, r(rt + "?" + q({ action: "get_first_chapter_content", manga_id: a }))];
                                                case 1:
                                                    u = _b.sent();
                                                    if (!u || !u.ok)
                                                        return [2, ""];
                                                    i = u.json(), c = lt(i);
                                                    if (!c)
                                                        return [2, ""];
                                                    l = s.parse(c), h = l.select("#wp-manga-current-chap").first();
                                                    return [2, m(h ? h.attr("value") : "")];
                                            }
                                        }); });
                                    } function lt(a) { return a ? typeof a == "string" ? a : a.data && typeof a.data == "string" ? a.data : a.data && a.data.content ? a.data.content : a.data && a.data.data && a.data.data.content ? a.data.data.content : a.content ? a.content : "" : ""; } function It(a) { return (a || "").replace(/<!--[\s\S]*?-->/g, "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").trim(); } function X(a) {
                                        return __awaiter(this, void 0, void 0, function () { var u, i, _b, c, l, h; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0:
                                                    u = I(a), i = u.latestChapterSlug;
                                                    _b = i;
                                                    if (_b) return [3, 2];
                                                    return [4, _t(u.mangaId)];
                                                case 1:
                                                    _b = (i = _c.sent());
                                                    _c.label = 2;
                                                case 2:
                                                    if (_b, !u.mangaId || !i)
                                                        return [2, o.success([])];
                                                    return [4, r(rt, { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", "x-requested-with": "XMLHttpRequest" }, body: q({ action: "manga_get_reading_nav", manga: u.mangaId, chapter: i, volume_id: 0, style: "select", type: "manga" }) })];
                                                case 3:
                                                    c = _c.sent();
                                                    if (!c || !c.ok)
                                                        return [2, o.success([])];
                                                    l = s.parse(c.text()), h = [];
                                                    return [2, (l.select("option").forEach(function (b) { var E = m(b.attr("value") || _(b.attr("data-redirect"))); E && h.push({ name: m(b.text()), url: Mt(u, E, b.attr("data-redirect")), host: x }); }), h.reverse(), o.success(h))];
                                            }
                                        }); });
                                    } var x, rt; return __generator(this, function (_b) {
                                        x = "https://metruyencv.xyz";
                                        try {
                                            CONFIG_URL && (x = CONFIG_URL.replace(/\/+$/, ""));
                                        }
                                        catch (a) { }
                                        rt = x + "/wp-admin/admin-ajax.php";
                                        return [2, typeof X == "function" ? X : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, chap: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (r, n, s, o, f, d, p, g, v, N, C, S, L, B, ut, M, et) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function F(a) { return a ? /^https?:\/\//i.test(a) ? a : a.indexOf("//") === 0 ? "https:" + a : a.charAt(0) === "/" ? x + a : x + "/" + a.replace(/^\/+/, "") : ""; } function w(a) { return a ? /^https?:\/\//i.test(a) ? a.replace(/^(https?:\/\/)(www\.)?[^\/?#]+/i, x) : F(a) : x; } function m(a) { return (a || "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim(); } function j(a) { try {
                                        return decodeURIComponent(a || "");
                                    }
                                    catch (u) {
                                        return a || "";
                                    } } function T(a) { return Array.isArray(a) ? a[0] : a; } function z(a) { var u = {}; try {
                                        var i = (a || "").split("?")[1] || "";
                                        if (!i)
                                            return u;
                                        i.split("&").forEach(function (c) { if (c) {
                                            var l = c.split("="), h = j(l[0]).trim(), b = j(l.slice(1).join("="));
                                            h && (u.hasOwnProperty(h) ? (Array.isArray(u[h]) || (u[h] = [u[h]]), u[h].push(b)) : u[h] = b);
                                        } });
                                    }
                                    catch (c) { } return u; } function q(a) { var u = []; return a ? (Object.keys(a).forEach(function (i) { var c = a[i]; if (c != null) {
                                        if (Array.isArray(c)) {
                                            c.forEach(function (l) { l != null && u.push(encodeURIComponent(i) + "=" + encodeURIComponent(String(l))); });
                                            return;
                                        }
                                        u.push(encodeURIComponent(i) + "=" + encodeURIComponent(String(c)));
                                    } }), u.join("&")) : ""; } function U(a) { var u = w(a || "").match(/\/truyen\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function _(a) { var u = w(a || "").match(/\/truyen\/[^\/?#]+\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function ht(a) { var u = w(a || "").match(/\/the-loai\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function V(a) { return m((a || "").replace(/-/g, " ")); } function $(a) { var u = m(a).toLowerCase(); return u ? u.indexOf("hoàn thành") === -1 && u.indexOf("hoan thanh") === -1 && u.indexOf("hoan-thanh") === -1 && u.indexOf("/trang-thai/hoan-thanh/") === -1 && u.indexOf("full") === -1 && u.indexOf(" end") === -1 && u.indexOf("đã hoàn thành") === -1 : !0; } function it(a, u) { var i = w(a || x), c = z(i), l = { s: T(c.s), post_type: T(c.post_type) || "wp-manga" }, h = ht(i); return l.s === void 0 && (l.s = ""), h && (l["genre[]"] = h), c.hasOwnProperty("genre[]") && (l["genre[]"] = c["genre[]"]), c.hasOwnProperty("status[0]") && (l["status[0]"] = c["status[0]"]), c.hasOwnProperty("m_orderby") && (l.m_orderby = c.m_orderby), c.hasOwnProperty("author") && (l.author = c.author), c.hasOwnProperty("release") && (l.release = c.release), c.hasOwnProperty("adult") && (l.adult = c.adult), /\/trang-thai\/hoan-thanh\/?$/i.test(i) && (l["status[0]"] = "end"), !l.s && !l["genre[]"] && !l["status[0]"] && !l.m_orderby && (l.m_orderby = "latest"), u && (l.paged = String(u)), x + "/?" + q(l); } function Ht(a) { return x + "/?" + q({ s: "", post_type: "wp-manga", "genre[]": a }); } function pt(a, u) { return { title: m(a), input: it(u, 1), script: "book.js" }; } function gt(a) { if (!a)
                                        return ""; var u = a.attr("src"); return (!u || u.indexOf("data:image") === 0) && (u = a.attr("data-src") || a.attr("data-lazy-src") || a.attr("data-original") || u), F(u); } function Q(a, u, i) { var c = U(a), l = c ? x + "/truyen/" + c + "/" : w(a), h = {}; u && (h.manga_id = u), i && (i.title && (h.title = i.title), i.cover && (h.cover = i.cover), i.statusText && (h.status = i.statusText), i.latestChapterSlug && (h.latest = i.latestChapterSlug)); var b = q(h); return b ? l + "?" + b : l; } function Mt(a, u, i) { var c = typeof a == "string" ? I(a) : a, l = c.slug || U(i), h = l && u ? x + "/truyen/" + l + "/" + u + "/" : w(i), b = {}; c.mangaId && (b.manga_id = c.mangaId), c.title && (b.title = c.title), c.cover && (b.cover = c.cover), c.statusText && (b.status = c.statusText), u && (b.chapter = u); var E = q(b); return E ? h + "?" + E : h; } function I(a) { var u = w(a || ""), i = z(u); return { url: u, slug: U(u), mangaId: m(T(i.manga_id) || ""), title: m(T(i.title) || ""), cover: T(i.cover) || "", statusText: m(T(i.status) || ""), latestChapterSlug: m(T(i.latest) || ""), chapterSlug: m(T(i.chapter) || _(u)) }; } function W(a) { var u = a.select(".post-title a, h3 a").first(); if (!u)
                                        return null; var i = a.select(".except-summary").first(), c = a.select(".latest-chap a, .font-meta.chapter a, .chapter-item a, .list-chapter a").first(), l = m(u.text()), h = w(u.attr("href")), b = a.select(".trangthai, .summary-content, .mg_status").first(), E = b ? b.select("a").last() : null, J = m((E ? E.attr("href") + " " : "") + (b ? b.text() : "")), Z = []; a.select(".genres-content-search a, .genres-content a").forEach(function (K) { var Y = m(K.text()), tt = K.attr("href"); !Y || !tt || Z.push(pt(Y, tt)); }); var O = { title: l, rawLink: h, slug: U(h), mangaId: m(i ? i.attr("data-manga-id") : ""), cover: gt(a.select("img").first()), descriptionHtml: i && i.html() || "", descriptionText: m(i ? i.text() : ""), statusText: J, ongoing: $(J), genres: Z, latestChapterSlug: m(c ? _(c.attr("href")) || c.attr("value") : ""), latestChapterName: m(c ? c.text() : ""), latestChapterUrl: c ? w(c.attr("href")) : "", host: x }; return O.link = Q(O.rawLink, O.mangaId, O), O; } function ot(a) { var u = []; return a.select(".row.c-tabs-item__content").forEach(function (i) { var c = W(i); c && u.push(c); }), u.length === 0 && a.select(".page-item-detail").forEach(function (i) { var c = W(i); c && u.push(c); }), u; } function qt(a) { return { name: a.title, link: a.link, cover: a.cover, author: "N/A", description: a.descriptionText, host: x }; } function Ot(a) { var u = a.select("#madara_goto_page").first(); if (!u)
                                        return ""; var i = parseInt(u.attr("placeholder") || "1", 10), c = parseInt(u.attr("max") || "0", 10); return !isNaN(i) && !isNaN(c) && i < c ? String(i + 1) : ""; } function bt(a, u) { var i; for (i = 0; i < a.length; i++)
                                        if (u.mangaId && a[i].mangaId === u.mangaId)
                                            return a[i]; for (i = 0; i < a.length; i++)
                                        if (u.slug && a[i].slug === u.slug)
                                            return a[i]; for (i = 0; i < a.length; i++)
                                        if (u.title && m(a[i].title).toLowerCase() === m(u.title).toLowerCase())
                                            return a[i]; return a.length ? a[0] : null; } function mt(a, u) { var i = { url: a.url, slug: u && u.slug ? u.slug : a.slug, mangaId: u && u.mangaId ? u.mangaId : a.mangaId, title: u && u.title ? u.title : a.title || V(a.slug), cover: u && u.cover ? u.cover : a.cover, statusText: u && u.statusText ? u.statusText : a.statusText, descriptionHtml: u && u.descriptionHtml ? u.descriptionHtml : "", descriptionText: u && u.descriptionText ? u.descriptionText : "", ongoing: u ? u.ongoing : $(a.statusText), genres: u && u.genres ? u.genres : [], latestChapterSlug: u && u.latestChapterSlug ? u.latestChapterSlug : a.latestChapterSlug, latestChapterName: u && u.latestChapterName ? u.latestChapterName : "", latestChapterUrl: u && u.latestChapterUrl ? u.latestChapterUrl : "", host: x }; return i.link = Q(u && u.rawLink ? u.rawLink : a.url, i.mangaId, i), i; } function Ft(a) {
                                        return __awaiter(this, void 0, void 0, function () { var u, i, c, l; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    u = I(a), i = u.title || V(u.slug), c = null;
                                                    if (!i) return [3, 2];
                                                    return [4, r(x, { queries: { s: i, post_type: "wp-manga" } })];
                                                case 1:
                                                    l = _b.sent();
                                                    l && l.ok && (c = bt(ot(l.html()), u));
                                                    _b.label = 2;
                                                case 2: return [2, mt(u, c)];
                                            }
                                        }); });
                                    } function _t(a) {
                                        return __awaiter(this, void 0, void 0, function () { var u, i, c, l, h; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    if (!a)
                                                        return [2, ""];
                                                    return [4, r(rt + "?" + q({ action: "get_first_chapter_content", manga_id: a }))];
                                                case 1:
                                                    u = _b.sent();
                                                    if (!u || !u.ok)
                                                        return [2, ""];
                                                    i = u.json(), c = lt(i);
                                                    if (!c)
                                                        return [2, ""];
                                                    l = s.parse(c), h = l.select("#wp-manga-current-chap").first();
                                                    return [2, m(h ? h.attr("value") : "")];
                                            }
                                        }); });
                                    } function lt(a) { return a ? typeof a == "string" ? a : a.data && typeof a.data == "string" ? a.data : a.data && a.data.content ? a.data.content : a.data && a.data.data && a.data.data.content ? a.data.data.content : a.content ? a.content : "" : ""; } function It(a) { return (a || "").replace(/<!--[\s\S]*?-->/g, "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").trim(); } function X(a) {
                                        return __awaiter(this, void 0, void 0, function () { var u, i, c, l, h, b, E; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    u = I(a), i = u.chapterSlug || _(a);
                                                    if (!u.mangaId || !i)
                                                        return [2, null];
                                                    return [4, r(rt + "?" + q({ postID: u.mangaId, chapter: i, "truyen-paged": 1, style: "paged", action: "chapter_navigate_page" }), { headers: { accept: "application/json, text/javascript, */*; q=0.01", "x-requested-with": "XMLHttpRequest" } })];
                                                case 1:
                                                    c = _b.sent();
                                                    if (!c || !c.ok)
                                                        return [2, null];
                                                    l = c.json(), h = lt(l);
                                                    if (!h)
                                                        return [2, null];
                                                    b = s.parse(h);
                                                    b.select("script").remove(), b.select("style").remove();
                                                    E = b.select(".text-left").html();
                                                    return [2, (E || (E = b.select(".reading-content").html()), E || (E = h), o.success(It(E)))];
                                            }
                                        }); });
                                    } var x, rt; return __generator(this, function (_b) {
                                        x = "https://metruyencv.xyz";
                                        try {
                                            CONFIG_URL && (x = CONFIG_URL.replace(/\/+$/, ""));
                                        }
                                        catch (a) { }
                                        rt = x + "/wp-admin/admin-ajax.php";
                                        return [2, typeof X == "function" ? X : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, home: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (r, n, s, o, f, d, p, g, v, N, C, S, L, B, ut, M, et) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function F(a) { return a ? /^https?:\/\//i.test(a) ? a : a.indexOf("//") === 0 ? "https:" + a : a.charAt(0) === "/" ? x + a : x + "/" + a.replace(/^\/+/, "") : ""; } function w(a) { return a ? /^https?:\/\//i.test(a) ? a.replace(/^(https?:\/\/)(www\.)?[^\/?#]+/i, x) : F(a) : x; } function m(a) { return (a || "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim(); } function j(a) { try {
                                        return decodeURIComponent(a || "");
                                    }
                                    catch (u) {
                                        return a || "";
                                    } } function T(a) { return Array.isArray(a) ? a[0] : a; } function z(a) { var u = {}; try {
                                        var i = (a || "").split("?")[1] || "";
                                        if (!i)
                                            return u;
                                        i.split("&").forEach(function (c) { if (c) {
                                            var l = c.split("="), h = j(l[0]).trim(), b = j(l.slice(1).join("="));
                                            h && (u.hasOwnProperty(h) ? (Array.isArray(u[h]) || (u[h] = [u[h]]), u[h].push(b)) : u[h] = b);
                                        } });
                                    }
                                    catch (c) { } return u; } function q(a) { var u = []; return a ? (Object.keys(a).forEach(function (i) { var c = a[i]; if (c != null) {
                                        if (Array.isArray(c)) {
                                            c.forEach(function (l) { l != null && u.push(encodeURIComponent(i) + "=" + encodeURIComponent(String(l))); });
                                            return;
                                        }
                                        u.push(encodeURIComponent(i) + "=" + encodeURIComponent(String(c)));
                                    } }), u.join("&")) : ""; } function U(a) { var u = w(a || "").match(/\/truyen\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function _(a) { var u = w(a || "").match(/\/truyen\/[^\/?#]+\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function ht(a) { var u = w(a || "").match(/\/the-loai\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function V(a) { return m((a || "").replace(/-/g, " ")); } function $(a) { var u = m(a).toLowerCase(); return u ? u.indexOf("hoàn thành") === -1 && u.indexOf("hoan thanh") === -1 && u.indexOf("hoan-thanh") === -1 && u.indexOf("/trang-thai/hoan-thanh/") === -1 && u.indexOf("full") === -1 && u.indexOf(" end") === -1 && u.indexOf("đã hoàn thành") === -1 : !0; } function it(a, u) { var i = w(a || x), c = z(i), l = { s: T(c.s), post_type: T(c.post_type) || "wp-manga" }, h = ht(i); return l.s === void 0 && (l.s = ""), h && (l["genre[]"] = h), c.hasOwnProperty("genre[]") && (l["genre[]"] = c["genre[]"]), c.hasOwnProperty("status[0]") && (l["status[0]"] = c["status[0]"]), c.hasOwnProperty("m_orderby") && (l.m_orderby = c.m_orderby), c.hasOwnProperty("author") && (l.author = c.author), c.hasOwnProperty("release") && (l.release = c.release), c.hasOwnProperty("adult") && (l.adult = c.adult), /\/trang-thai\/hoan-thanh\/?$/i.test(i) && (l["status[0]"] = "end"), !l.s && !l["genre[]"] && !l["status[0]"] && !l.m_orderby && (l.m_orderby = "latest"), u && (l.paged = String(u)), x + "/?" + q(l); } function Ht(a) { return x + "/?" + q({ s: "", post_type: "wp-manga", "genre[]": a }); } function pt(a, u) { return { title: m(a), input: it(u, 1), script: "book.js" }; } function gt(a) { if (!a)
                                        return ""; var u = a.attr("src"); return (!u || u.indexOf("data:image") === 0) && (u = a.attr("data-src") || a.attr("data-lazy-src") || a.attr("data-original") || u), F(u); } function Q(a, u, i) { var c = U(a), l = c ? x + "/truyen/" + c + "/" : w(a), h = {}; u && (h.manga_id = u), i && (i.title && (h.title = i.title), i.cover && (h.cover = i.cover), i.statusText && (h.status = i.statusText), i.latestChapterSlug && (h.latest = i.latestChapterSlug)); var b = q(h); return b ? l + "?" + b : l; } function Mt(a, u, i) { var c = typeof a == "string" ? I(a) : a, l = c.slug || U(i), h = l && u ? x + "/truyen/" + l + "/" + u + "/" : w(i), b = {}; c.mangaId && (b.manga_id = c.mangaId), c.title && (b.title = c.title), c.cover && (b.cover = c.cover), c.statusText && (b.status = c.statusText), u && (b.chapter = u); var E = q(b); return E ? h + "?" + E : h; } function I(a) { var u = w(a || ""), i = z(u); return { url: u, slug: U(u), mangaId: m(T(i.manga_id) || ""), title: m(T(i.title) || ""), cover: T(i.cover) || "", statusText: m(T(i.status) || ""), latestChapterSlug: m(T(i.latest) || ""), chapterSlug: m(T(i.chapter) || _(u)) }; } function W(a) { var u = a.select(".post-title a, h3 a").first(); if (!u)
                                        return null; var i = a.select(".except-summary").first(), c = a.select(".latest-chap a, .font-meta.chapter a, .chapter-item a, .list-chapter a").first(), l = m(u.text()), h = w(u.attr("href")), b = a.select(".trangthai, .summary-content, .mg_status").first(), E = b ? b.select("a").last() : null, J = m((E ? E.attr("href") + " " : "") + (b ? b.text() : "")), Z = []; a.select(".genres-content-search a, .genres-content a").forEach(function (K) { var Y = m(K.text()), tt = K.attr("href"); !Y || !tt || Z.push(pt(Y, tt)); }); var O = { title: l, rawLink: h, slug: U(h), mangaId: m(i ? i.attr("data-manga-id") : ""), cover: gt(a.select("img").first()), descriptionHtml: i && i.html() || "", descriptionText: m(i ? i.text() : ""), statusText: J, ongoing: $(J), genres: Z, latestChapterSlug: m(c ? _(c.attr("href")) || c.attr("value") : ""), latestChapterName: m(c ? c.text() : ""), latestChapterUrl: c ? w(c.attr("href")) : "", host: x }; return O.link = Q(O.rawLink, O.mangaId, O), O; } function ot(a) { var u = []; return a.select(".row.c-tabs-item__content").forEach(function (i) { var c = W(i); c && u.push(c); }), u.length === 0 && a.select(".page-item-detail").forEach(function (i) { var c = W(i); c && u.push(c); }), u; } function qt(a) { return { name: a.title, link: a.link, cover: a.cover, author: "N/A", description: a.descriptionText, host: x }; } function Ot(a) { var u = a.select("#madara_goto_page").first(); if (!u)
                                        return ""; var i = parseInt(u.attr("placeholder") || "1", 10), c = parseInt(u.attr("max") || "0", 10); return !isNaN(i) && !isNaN(c) && i < c ? String(i + 1) : ""; } function bt(a, u) { var i; for (i = 0; i < a.length; i++)
                                        if (u.mangaId && a[i].mangaId === u.mangaId)
                                            return a[i]; for (i = 0; i < a.length; i++)
                                        if (u.slug && a[i].slug === u.slug)
                                            return a[i]; for (i = 0; i < a.length; i++)
                                        if (u.title && m(a[i].title).toLowerCase() === m(u.title).toLowerCase())
                                            return a[i]; return a.length ? a[0] : null; } function mt(a, u) { var i = { url: a.url, slug: u && u.slug ? u.slug : a.slug, mangaId: u && u.mangaId ? u.mangaId : a.mangaId, title: u && u.title ? u.title : a.title || V(a.slug), cover: u && u.cover ? u.cover : a.cover, statusText: u && u.statusText ? u.statusText : a.statusText, descriptionHtml: u && u.descriptionHtml ? u.descriptionHtml : "", descriptionText: u && u.descriptionText ? u.descriptionText : "", ongoing: u ? u.ongoing : $(a.statusText), genres: u && u.genres ? u.genres : [], latestChapterSlug: u && u.latestChapterSlug ? u.latestChapterSlug : a.latestChapterSlug, latestChapterName: u && u.latestChapterName ? u.latestChapterName : "", latestChapterUrl: u && u.latestChapterUrl ? u.latestChapterUrl : "", host: x }; return i.link = Q(u && u.rawLink ? u.rawLink : a.url, i.mangaId, i), i; } function Ft(a) {
                                        return __awaiter(this, void 0, void 0, function () { var u, i, c, l; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    u = I(a), i = u.title || V(u.slug), c = null;
                                                    if (!i) return [3, 2];
                                                    return [4, r(x, { queries: { s: i, post_type: "wp-manga" } })];
                                                case 1:
                                                    l = _b.sent();
                                                    l && l.ok && (c = bt(ot(l.html()), u));
                                                    _b.label = 2;
                                                case 2: return [2, mt(u, c)];
                                            }
                                        }); });
                                    } function _t(a) {
                                        return __awaiter(this, void 0, void 0, function () { var u, i, c, l, h; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    if (!a)
                                                        return [2, ""];
                                                    return [4, r(rt + "?" + q({ action: "get_first_chapter_content", manga_id: a }))];
                                                case 1:
                                                    u = _b.sent();
                                                    if (!u || !u.ok)
                                                        return [2, ""];
                                                    i = u.json(), c = lt(i);
                                                    if (!c)
                                                        return [2, ""];
                                                    l = s.parse(c), h = l.select("#wp-manga-current-chap").first();
                                                    return [2, m(h ? h.attr("value") : "")];
                                            }
                                        }); });
                                    } function lt(a) { return a ? typeof a == "string" ? a : a.data && typeof a.data == "string" ? a.data : a.data && a.data.content ? a.data.content : a.data && a.data.data && a.data.data.content ? a.data.data.content : a.content ? a.content : "" : ""; } function It(a) { return (a || "").replace(/<!--[\s\S]*?-->/g, "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").trim(); } function X() {
                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                            return [2, o.success([{ title: "Trang chủ", input: it(x, 1), script: "book.js" }, { title: "TOP", input: it(x + "/?m_orderby=views", 1), script: "book.js" }, { title: "Truyện Full", input: x + "/?" + q({ s: "", post_type: "wp-manga", "status[0]": "end", m_orderby: "latest", paged: 1 }), script: "book.js" }])];
                                        }); });
                                    } var x, rt; return __generator(this, function (_b) {
                                        x = "https://metruyencv.xyz";
                                        try {
                                            CONFIG_URL && (x = CONFIG_URL.replace(/\/+$/, ""));
                                        }
                                        catch (a) { }
                                        rt = x + "/wp-admin/admin-ajax.php";
                                        return [2, typeof X == "function" ? X : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, genre: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (r, n, s, o, f, d, p, g, v, N, C, S, L, B, ut, M, et) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function F(a) { return a ? /^https?:\/\//i.test(a) ? a : a.indexOf("//") === 0 ? "https:" + a : a.charAt(0) === "/" ? x + a : x + "/" + a.replace(/^\/+/, "") : ""; } function w(a) { return a ? /^https?:\/\//i.test(a) ? a.replace(/^(https?:\/\/)(www\.)?[^\/?#]+/i, x) : F(a) : x; } function m(a) { return (a || "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim(); } function j(a) { try {
                                        return decodeURIComponent(a || "");
                                    }
                                    catch (u) {
                                        return a || "";
                                    } } function T(a) { return Array.isArray(a) ? a[0] : a; } function z(a) { var u = {}; try {
                                        var i = (a || "").split("?")[1] || "";
                                        if (!i)
                                            return u;
                                        i.split("&").forEach(function (c) { if (c) {
                                            var l = c.split("="), h = j(l[0]).trim(), b = j(l.slice(1).join("="));
                                            h && (u.hasOwnProperty(h) ? (Array.isArray(u[h]) || (u[h] = [u[h]]), u[h].push(b)) : u[h] = b);
                                        } });
                                    }
                                    catch (c) { } return u; } function q(a) { var u = []; return a ? (Object.keys(a).forEach(function (i) { var c = a[i]; if (c != null) {
                                        if (Array.isArray(c)) {
                                            c.forEach(function (l) { l != null && u.push(encodeURIComponent(i) + "=" + encodeURIComponent(String(l))); });
                                            return;
                                        }
                                        u.push(encodeURIComponent(i) + "=" + encodeURIComponent(String(c)));
                                    } }), u.join("&")) : ""; } function U(a) { var u = w(a || "").match(/\/truyen\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function _(a) { var u = w(a || "").match(/\/truyen\/[^\/?#]+\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function ht(a) { var u = w(a || "").match(/\/the-loai\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function V(a) { return m((a || "").replace(/-/g, " ")); } function $(a) { var u = m(a).toLowerCase(); return u ? u.indexOf("hoàn thành") === -1 && u.indexOf("hoan thanh") === -1 && u.indexOf("hoan-thanh") === -1 && u.indexOf("/trang-thai/hoan-thanh/") === -1 && u.indexOf("full") === -1 && u.indexOf(" end") === -1 && u.indexOf("đã hoàn thành") === -1 : !0; } function it(a, u) { var i = w(a || x), c = z(i), l = { s: T(c.s), post_type: T(c.post_type) || "wp-manga" }, h = ht(i); return l.s === void 0 && (l.s = ""), h && (l["genre[]"] = h), c.hasOwnProperty("genre[]") && (l["genre[]"] = c["genre[]"]), c.hasOwnProperty("status[0]") && (l["status[0]"] = c["status[0]"]), c.hasOwnProperty("m_orderby") && (l.m_orderby = c.m_orderby), c.hasOwnProperty("author") && (l.author = c.author), c.hasOwnProperty("release") && (l.release = c.release), c.hasOwnProperty("adult") && (l.adult = c.adult), /\/trang-thai\/hoan-thanh\/?$/i.test(i) && (l["status[0]"] = "end"), !l.s && !l["genre[]"] && !l["status[0]"] && !l.m_orderby && (l.m_orderby = "latest"), u && (l.paged = String(u)), x + "/?" + q(l); } function Ht(a) { return x + "/?" + q({ s: "", post_type: "wp-manga", "genre[]": a }); } function pt(a, u) { return { title: m(a), input: it(u, 1), script: "book.js" }; } function gt(a) { if (!a)
                                        return ""; var u = a.attr("src"); return (!u || u.indexOf("data:image") === 0) && (u = a.attr("data-src") || a.attr("data-lazy-src") || a.attr("data-original") || u), F(u); } function Q(a, u, i) { var c = U(a), l = c ? x + "/truyen/" + c + "/" : w(a), h = {}; u && (h.manga_id = u), i && (i.title && (h.title = i.title), i.cover && (h.cover = i.cover), i.statusText && (h.status = i.statusText), i.latestChapterSlug && (h.latest = i.latestChapterSlug)); var b = q(h); return b ? l + "?" + b : l; } function Mt(a, u, i) { var c = typeof a == "string" ? I(a) : a, l = c.slug || U(i), h = l && u ? x + "/truyen/" + l + "/" + u + "/" : w(i), b = {}; c.mangaId && (b.manga_id = c.mangaId), c.title && (b.title = c.title), c.cover && (b.cover = c.cover), c.statusText && (b.status = c.statusText), u && (b.chapter = u); var E = q(b); return E ? h + "?" + E : h; } function I(a) { var u = w(a || ""), i = z(u); return { url: u, slug: U(u), mangaId: m(T(i.manga_id) || ""), title: m(T(i.title) || ""), cover: T(i.cover) || "", statusText: m(T(i.status) || ""), latestChapterSlug: m(T(i.latest) || ""), chapterSlug: m(T(i.chapter) || _(u)) }; } function W(a) { var u = a.select(".post-title a, h3 a").first(); if (!u)
                                        return null; var i = a.select(".except-summary").first(), c = a.select(".latest-chap a, .font-meta.chapter a, .chapter-item a, .list-chapter a").first(), l = m(u.text()), h = w(u.attr("href")), b = a.select(".trangthai, .summary-content, .mg_status").first(), E = b ? b.select("a").last() : null, J = m((E ? E.attr("href") + " " : "") + (b ? b.text() : "")), Z = []; a.select(".genres-content-search a, .genres-content a").forEach(function (K) { var Y = m(K.text()), tt = K.attr("href"); !Y || !tt || Z.push(pt(Y, tt)); }); var O = { title: l, rawLink: h, slug: U(h), mangaId: m(i ? i.attr("data-manga-id") : ""), cover: gt(a.select("img").first()), descriptionHtml: i && i.html() || "", descriptionText: m(i ? i.text() : ""), statusText: J, ongoing: $(J), genres: Z, latestChapterSlug: m(c ? _(c.attr("href")) || c.attr("value") : ""), latestChapterName: m(c ? c.text() : ""), latestChapterUrl: c ? w(c.attr("href")) : "", host: x }; return O.link = Q(O.rawLink, O.mangaId, O), O; } function ot(a) { var u = []; return a.select(".row.c-tabs-item__content").forEach(function (i) { var c = W(i); c && u.push(c); }), u.length === 0 && a.select(".page-item-detail").forEach(function (i) { var c = W(i); c && u.push(c); }), u; } function qt(a) { return { name: a.title, link: a.link, cover: a.cover, author: "N/A", description: a.descriptionText, host: x }; } function Ot(a) { var u = a.select("#madara_goto_page").first(); if (!u)
                                        return ""; var i = parseInt(u.attr("placeholder") || "1", 10), c = parseInt(u.attr("max") || "0", 10); return !isNaN(i) && !isNaN(c) && i < c ? String(i + 1) : ""; } function bt(a, u) { var i; for (i = 0; i < a.length; i++)
                                        if (u.mangaId && a[i].mangaId === u.mangaId)
                                            return a[i]; for (i = 0; i < a.length; i++)
                                        if (u.slug && a[i].slug === u.slug)
                                            return a[i]; for (i = 0; i < a.length; i++)
                                        if (u.title && m(a[i].title).toLowerCase() === m(u.title).toLowerCase())
                                            return a[i]; return a.length ? a[0] : null; } function mt(a, u) { var i = { url: a.url, slug: u && u.slug ? u.slug : a.slug, mangaId: u && u.mangaId ? u.mangaId : a.mangaId, title: u && u.title ? u.title : a.title || V(a.slug), cover: u && u.cover ? u.cover : a.cover, statusText: u && u.statusText ? u.statusText : a.statusText, descriptionHtml: u && u.descriptionHtml ? u.descriptionHtml : "", descriptionText: u && u.descriptionText ? u.descriptionText : "", ongoing: u ? u.ongoing : $(a.statusText), genres: u && u.genres ? u.genres : [], latestChapterSlug: u && u.latestChapterSlug ? u.latestChapterSlug : a.latestChapterSlug, latestChapterName: u && u.latestChapterName ? u.latestChapterName : "", latestChapterUrl: u && u.latestChapterUrl ? u.latestChapterUrl : "", host: x }; return i.link = Q(u && u.rawLink ? u.rawLink : a.url, i.mangaId, i), i; } function Ft(a) {
                                        return __awaiter(this, void 0, void 0, function () { var u, i, c, l; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    u = I(a), i = u.title || V(u.slug), c = null;
                                                    if (!i) return [3, 2];
                                                    return [4, r(x, { queries: { s: i, post_type: "wp-manga" } })];
                                                case 1:
                                                    l = _b.sent();
                                                    l && l.ok && (c = bt(ot(l.html()), u));
                                                    _b.label = 2;
                                                case 2: return [2, mt(u, c)];
                                            }
                                        }); });
                                    } function _t(a) {
                                        return __awaiter(this, void 0, void 0, function () { var u, i, c, l, h; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    if (!a)
                                                        return [2, ""];
                                                    return [4, r(rt + "?" + q({ action: "get_first_chapter_content", manga_id: a }))];
                                                case 1:
                                                    u = _b.sent();
                                                    if (!u || !u.ok)
                                                        return [2, ""];
                                                    i = u.json(), c = lt(i);
                                                    if (!c)
                                                        return [2, ""];
                                                    l = s.parse(c), h = l.select("#wp-manga-current-chap").first();
                                                    return [2, m(h ? h.attr("value") : "")];
                                            }
                                        }); });
                                    } function lt(a) { return a ? typeof a == "string" ? a : a.data && typeof a.data == "string" ? a.data : a.data && a.data.content ? a.data.content : a.data && a.data.data && a.data.data.content ? a.data.data.content : a.content ? a.content : "" : ""; } function It(a) { return (a || "").replace(/<!--[\s\S]*?-->/g, "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").trim(); } function X() {
                                        return __awaiter(this, void 0, void 0, function () { var a, u, i; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0: return [4, r(x, { queries: { s: "", post_type: "wp-manga" } })];
                                                case 1:
                                                    a = _b.sent();
                                                    if (!a || !a.ok)
                                                        return [2, null];
                                                    u = a.html(), i = [];
                                                    return [2, (u.select("input[name='genre[]']").forEach(function (c) { var l = m(c.attr("value")), h = c.attr("id"), b = l, E = h ? u.select("label[for='" + h + "']").first() : null; E && (b = m(E.text())), !(!l || !b) && i.push({ title: b, input: Ht(l), script: "book.js" }); }), o.success(i))];
                                            }
                                        }); });
                                    } var x, rt; return __generator(this, function (_b) {
                                        x = "https://metruyencv.xyz";
                                        try {
                                            CONFIG_URL && (x = CONFIG_URL.replace(/\/+$/, ""));
                                        }
                                        catch (a) { }
                                        rt = x + "/wp-admin/admin-ajax.php";
                                        return [2, typeof X == "function" ? X : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, search: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (r, n, s, o, f, d, p, g, v, N, C, S, L, B, ut, M, et) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function F(a) { return a ? /^https?:\/\//i.test(a) ? a : a.indexOf("//") === 0 ? "https:" + a : a.charAt(0) === "/" ? x + a : x + "/" + a.replace(/^\/+/, "") : ""; } function w(a) { return a ? /^https?:\/\//i.test(a) ? a.replace(/^(https?:\/\/)(www\.)?[^\/?#]+/i, x) : F(a) : x; } function m(a) { return (a || "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim(); } function j(a) { try {
                                        return decodeURIComponent(a || "");
                                    }
                                    catch (u) {
                                        return a || "";
                                    } } function T(a) { return Array.isArray(a) ? a[0] : a; } function z(a) { var u = {}; try {
                                        var i = (a || "").split("?")[1] || "";
                                        if (!i)
                                            return u;
                                        i.split("&").forEach(function (c) { if (c) {
                                            var l = c.split("="), h = j(l[0]).trim(), b = j(l.slice(1).join("="));
                                            h && (u.hasOwnProperty(h) ? (Array.isArray(u[h]) || (u[h] = [u[h]]), u[h].push(b)) : u[h] = b);
                                        } });
                                    }
                                    catch (c) { } return u; } function q(a) { var u = []; return a ? (Object.keys(a).forEach(function (i) { var c = a[i]; if (c != null) {
                                        if (Array.isArray(c)) {
                                            c.forEach(function (l) { l != null && u.push(encodeURIComponent(i) + "=" + encodeURIComponent(String(l))); });
                                            return;
                                        }
                                        u.push(encodeURIComponent(i) + "=" + encodeURIComponent(String(c)));
                                    } }), u.join("&")) : ""; } function U(a) { var u = w(a || "").match(/\/truyen\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function _(a) { var u = w(a || "").match(/\/truyen\/[^\/?#]+\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function ht(a) { var u = w(a || "").match(/\/the-loai\/([^\/?#]+)(?:\/|$)/i); return u ? u[1] : ""; } function V(a) { return m((a || "").replace(/-/g, " ")); } function $(a) { var u = m(a).toLowerCase(); return u ? u.indexOf("hoàn thành") === -1 && u.indexOf("hoan thanh") === -1 && u.indexOf("hoan-thanh") === -1 && u.indexOf("/trang-thai/hoan-thanh/") === -1 && u.indexOf("full") === -1 && u.indexOf(" end") === -1 && u.indexOf("đã hoàn thành") === -1 : !0; } function it(a, u) { var i = w(a || x), c = z(i), l = { s: T(c.s), post_type: T(c.post_type) || "wp-manga" }, h = ht(i); return l.s === void 0 && (l.s = ""), h && (l["genre[]"] = h), c.hasOwnProperty("genre[]") && (l["genre[]"] = c["genre[]"]), c.hasOwnProperty("status[0]") && (l["status[0]"] = c["status[0]"]), c.hasOwnProperty("m_orderby") && (l.m_orderby = c.m_orderby), c.hasOwnProperty("author") && (l.author = c.author), c.hasOwnProperty("release") && (l.release = c.release), c.hasOwnProperty("adult") && (l.adult = c.adult), /\/trang-thai\/hoan-thanh\/?$/i.test(i) && (l["status[0]"] = "end"), !l.s && !l["genre[]"] && !l["status[0]"] && !l.m_orderby && (l.m_orderby = "latest"), u && (l.paged = String(u)), x + "/?" + q(l); } function Ht(a) { return x + "/?" + q({ s: "", post_type: "wp-manga", "genre[]": a }); } function pt(a, u) { return { title: m(a), input: it(u, 1), script: "book.js" }; } function gt(a) { if (!a)
                                        return ""; var u = a.attr("src"); return (!u || u.indexOf("data:image") === 0) && (u = a.attr("data-src") || a.attr("data-lazy-src") || a.attr("data-original") || u), F(u); } function Q(a, u, i) { var c = U(a), l = c ? x + "/truyen/" + c + "/" : w(a), h = {}; u && (h.manga_id = u), i && (i.title && (h.title = i.title), i.cover && (h.cover = i.cover), i.statusText && (h.status = i.statusText), i.latestChapterSlug && (h.latest = i.latestChapterSlug)); var b = q(h); return b ? l + "?" + b : l; } function Mt(a, u, i) { var c = typeof a == "string" ? I(a) : a, l = c.slug || U(i), h = l && u ? x + "/truyen/" + l + "/" + u + "/" : w(i), b = {}; c.mangaId && (b.manga_id = c.mangaId), c.title && (b.title = c.title), c.cover && (b.cover = c.cover), c.statusText && (b.status = c.statusText), u && (b.chapter = u); var E = q(b); return E ? h + "?" + E : h; } function I(a) { var u = w(a || ""), i = z(u); return { url: u, slug: U(u), mangaId: m(T(i.manga_id) || ""), title: m(T(i.title) || ""), cover: T(i.cover) || "", statusText: m(T(i.status) || ""), latestChapterSlug: m(T(i.latest) || ""), chapterSlug: m(T(i.chapter) || _(u)) }; } function W(a) { var u = a.select(".post-title a, h3 a").first(); if (!u)
                                        return null; var i = a.select(".except-summary").first(), c = a.select(".latest-chap a, .font-meta.chapter a, .chapter-item a, .list-chapter a").first(), l = m(u.text()), h = w(u.attr("href")), b = a.select(".trangthai, .summary-content, .mg_status").first(), E = b ? b.select("a").last() : null, J = m((E ? E.attr("href") + " " : "") + (b ? b.text() : "")), Z = []; a.select(".genres-content-search a, .genres-content a").forEach(function (K) { var Y = m(K.text()), tt = K.attr("href"); !Y || !tt || Z.push(pt(Y, tt)); }); var O = { title: l, rawLink: h, slug: U(h), mangaId: m(i ? i.attr("data-manga-id") : ""), cover: gt(a.select("img").first()), descriptionHtml: i && i.html() || "", descriptionText: m(i ? i.text() : ""), statusText: J, ongoing: $(J), genres: Z, latestChapterSlug: m(c ? _(c.attr("href")) || c.attr("value") : ""), latestChapterName: m(c ? c.text() : ""), latestChapterUrl: c ? w(c.attr("href")) : "", host: x }; return O.link = Q(O.rawLink, O.mangaId, O), O; } function ot(a) { var u = []; return a.select(".row.c-tabs-item__content").forEach(function (i) { var c = W(i); c && u.push(c); }), u.length === 0 && a.select(".page-item-detail").forEach(function (i) { var c = W(i); c && u.push(c); }), u; } function qt(a) { return { name: a.title, link: a.link, cover: a.cover, author: "N/A", description: a.descriptionText, host: x }; } function Ot(a) { var u = a.select("#madara_goto_page").first(); if (!u)
                                        return ""; var i = parseInt(u.attr("placeholder") || "1", 10), c = parseInt(u.attr("max") || "0", 10); return !isNaN(i) && !isNaN(c) && i < c ? String(i + 1) : ""; } function bt(a, u) { var i; for (i = 0; i < a.length; i++)
                                        if (u.mangaId && a[i].mangaId === u.mangaId)
                                            return a[i]; for (i = 0; i < a.length; i++)
                                        if (u.slug && a[i].slug === u.slug)
                                            return a[i]; for (i = 0; i < a.length; i++)
                                        if (u.title && m(a[i].title).toLowerCase() === m(u.title).toLowerCase())
                                            return a[i]; return a.length ? a[0] : null; } function mt(a, u) { var i = { url: a.url, slug: u && u.slug ? u.slug : a.slug, mangaId: u && u.mangaId ? u.mangaId : a.mangaId, title: u && u.title ? u.title : a.title || V(a.slug), cover: u && u.cover ? u.cover : a.cover, statusText: u && u.statusText ? u.statusText : a.statusText, descriptionHtml: u && u.descriptionHtml ? u.descriptionHtml : "", descriptionText: u && u.descriptionText ? u.descriptionText : "", ongoing: u ? u.ongoing : $(a.statusText), genres: u && u.genres ? u.genres : [], latestChapterSlug: u && u.latestChapterSlug ? u.latestChapterSlug : a.latestChapterSlug, latestChapterName: u && u.latestChapterName ? u.latestChapterName : "", latestChapterUrl: u && u.latestChapterUrl ? u.latestChapterUrl : "", host: x }; return i.link = Q(u && u.rawLink ? u.rawLink : a.url, i.mangaId, i), i; } function Ft(a) {
                                        return __awaiter(this, void 0, void 0, function () { var u, i, c, l; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    u = I(a), i = u.title || V(u.slug), c = null;
                                                    if (!i) return [3, 2];
                                                    return [4, r(x, { queries: { s: i, post_type: "wp-manga" } })];
                                                case 1:
                                                    l = _b.sent();
                                                    l && l.ok && (c = bt(ot(l.html()), u));
                                                    _b.label = 2;
                                                case 2: return [2, mt(u, c)];
                                            }
                                        }); });
                                    } function _t(a) {
                                        return __awaiter(this, void 0, void 0, function () { var u, i, c, l, h; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    if (!a)
                                                        return [2, ""];
                                                    return [4, r(rt + "?" + q({ action: "get_first_chapter_content", manga_id: a }))];
                                                case 1:
                                                    u = _b.sent();
                                                    if (!u || !u.ok)
                                                        return [2, ""];
                                                    i = u.json(), c = lt(i);
                                                    if (!c)
                                                        return [2, ""];
                                                    l = s.parse(c), h = l.select("#wp-manga-current-chap").first();
                                                    return [2, m(h ? h.attr("value") : "")];
                                            }
                                        }); });
                                    } function lt(a) { return a ? typeof a == "string" ? a : a.data && typeof a.data == "string" ? a.data : a.data && a.data.content ? a.data.content : a.data && a.data.data && a.data.data.content ? a.data.data.content : a.content ? a.content : "" : ""; } function It(a) { return (a || "").replace(/<!--[\s\S]*?-->/g, "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").trim(); } function X(a, u) {
                                        return __awaiter(this, void 0, void 0, function () { var i, c, l, h; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    i = it(x + "/?" + q({ s: a || "", post_type: "wp-manga" }), u || "1");
                                                    return [4, r(i)];
                                                case 1:
                                                    c = _b.sent();
                                                    if (!c || !c.ok)
                                                        return [2, null];
                                                    l = c.html(), h = [];
                                                    return [2, (ot(l).forEach(function (b) { h.push(qt(b)); }), o.success(h, Ot(l)))];
                                            }
                                        }); });
                                    } var x, rt; return __generator(this, function (_b) {
                                        x = "https://metruyencv.xyz";
                                        try {
                                            CONFIG_URL && (x = CONFIG_URL.replace(/\/+$/, ""));
                                        }
                                        catch (a) { }
                                        rt = x + "/wp-admin/admin-ajax.php";
                                        return [2, typeof X == "function" ? X : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    } };
function da(e) { return new eu({ meta: Lt, scripts: fa, host: e }); }
var zn = require("@libs/fetch").fetchApi, Te = null;
try {
    Te = require("@libs/storage");
}
catch (e) {
    Te = null;
}
var Yu = {}, uu = Te && Te.storage ? Te.storage : { get: function (e) { return Yu[e]; }, set: function (e, t) { Yu[e] = t; }, delete: function (e) { delete Yu[e]; } }, tr = (function () {
    function class_2() {
        var _this = this;
        this.id = Lt.lnId, this.name = Lt.name, this.icon = Lt.lnIcon, this.site = Lt.source, this.version = Lt.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = da({ name: "LNReader", request: function (t) { return __awaiter(_this, void 0, void 0, function () {
                var r, n, s;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            r = { method: t.method, headers: t.headers };
                            t.body != null && t.method !== "GET" && (r.body = t.body);
                            return [4, zn(t.url, r)];
                        case 1:
                            n = _c.sent(), s = {};
                            try {
                                n.headers.forEach(function (o, f) { s[f] = o; });
                            }
                            catch (o) { }
                            _b = { status: n.status, url: n.url || t.url, headers: s };
                            return [4, n.text()];
                        case 2: return [2, (_b.text = _c.sent(), _b)];
                    }
                });
            }); }, storageGet: function (t) { var r = uu.get("vb_" + t); return r == null ? null : String(r); }, storageSet: function (t, r) { r == null ? uu.delete && uu.delete("vb_" + t) : uu.set("vb_" + t, String(r)); }, config: function (t) { return null; }, log: function (t) { return console.log(t); } });
    }
    class_2.prototype.popularNovels = function (t, r) {
        return __awaiter(this, void 0, void 0, function () { var _b; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(r && r.showLatestNovels)) return [3, 2];
                    return [4, this.engine.latest(t)];
                case 1:
                    _b = _c.sent();
                    return [3, 4];
                case 2: return [4, this.engine.popular(t)];
                case 3:
                    _b = _c.sent();
                    _c.label = 4;
                case 4: return [2, (_b).items.map(function (s) { return ({ name: s.name, path: s.link, cover: s.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (t, r) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.search(t, r)];
                case 1: return [2, (_b.sent()).items.map(function (s) { return ({ name: s.name, path: s.link, cover: s.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (t) {
        return __awaiter(this, void 0, void 0, function () { var r, n; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.detail(t)];
                case 1:
                    r = _b.sent();
                    return [4, this.engine.chapters(t)];
                case 2:
                    n = _b.sent();
                    return [2, { path: t, name: r.name || "Untitled", cover: r.cover, summary: r.description, author: r.author, status: r.ongoing ? "Ongoing" : "Completed", genres: r.genres.join(","), chapters: n.map(function (s, o) { return ({ name: s.name, path: s.url, chapterNumber: o + 1 }); }) }];
            }
        }); });
    };
    class_2.prototype.parseChapter = function (t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.content(t)];
                case 1: return [2, (_b.sent()).html];
            }
        }); });
    };
    class_2.prototype.resolveUrl = function (t, r) { return /^https?:/i.test(t) ? t : Lt.source.replace(/\/+$/, "") + "/" + String(t).replace(/^\/+/, ""); };
    return class_2;
}()), $n = new tr;

if (typeof exports === "object" && exports && module.exports !== exports && module.exports && module.exports.default) exports.default = module.exports.default;
