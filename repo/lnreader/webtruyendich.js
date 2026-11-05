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
var e_1, _a;
var rr = Object.create;
var Qe = Object.defineProperty, nr = Object.defineProperties, ar = Object.getOwnPropertyDescriptor, ir = Object.getOwnPropertyDescriptors, sr = Object.getOwnPropertyNames, zt = Object.getOwnPropertySymbols, cr = Object.getPrototypeOf, $t = Object.prototype.hasOwnProperty, or = Object.prototype.propertyIsEnumerable;
var Wt = function (e, u, t) { return u in e ? Qe(e, u, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[u] = t; }, le = function (e, u) {
    var e_2, _a;
    for (var t in u || (u = {}))
        $t.call(u, t) && Wt(e, t, u[t]);
    if (zt)
        try {
            for (var _b = __values(zt(u)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                or.call(u, t) && Wt(e, t, u[t]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    return e;
}, qe = function (e, u) { return nr(e, ir(u)); };
var fr = function (e, u) { return function () { return (u || e((u = { exports: {} }).exports, u), u.exports); }; }, Wu = function (e, u) { for (var t in u)
    Qe(e, t, { get: u[t], enumerable: !0 }); }, Jt = function (e, u, t, r) {
    var e_3, _a;
    if (u && typeof u == "object" || typeof u == "function") {
        var _loop_1 = function (n) {
            !$t.call(e, n) && n !== t && Qe(e, n, { get: function () { return u[n]; }, enumerable: !(r = ar(u, n)) || r.enumerable });
        };
        try {
            for (var _b = __values(sr(u)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var n = _c.value;
                _loop_1(n);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }
    return e;
};
var ke = function (e, u, t) { return (t = e != null ? rr(cr(e)) : {}, Jt(u || !e || !e.__esModule ? Qe(t, "default", { value: e, enumerable: !0 }) : t, e)); }, lr = function (e) { return Jt(Qe({}, "__esModule", { value: !0 }), e); };
var Ce = fr(function (di, w0) { w0.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var Mn = {};
Wu(Mn, { default: function () { return Fn; } });
module.exports = lr(Mn);
var hu = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (e) { return e.charCodeAt(0); }));
var bu = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (e) { return e.charCodeAt(0); }));
var $u, dr = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Me = ($u = String.fromCodePoint) !== null && $u !== void 0 ? $u : function (e) { var u = ""; return e > 65535 && (e -= 65536, u += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), u += String.fromCharCode(e), u; };
function Ju(e) { var u; return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (u = dr.get(e)) !== null && u !== void 0 ? u : e; }
var W;
(function (e) { e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z"; })(W || (W = {}));
var hr = 32, we;
(function (e) { e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE"; })(we || (we = {}));
function Ku(e) { return e >= W.ZERO && e <= W.NINE; }
function br(e) { return e >= W.UPPER_A && e <= W.UPPER_F || e >= W.LOWER_A && e <= W.LOWER_F; }
function pr(e) { return e >= W.UPPER_A && e <= W.UPPER_Z || e >= W.LOWER_A && e <= W.LOWER_Z || Ku(e); }
function gr(e) { return e === W.EQUALS || pr(e); }
var z;
(function (e) { e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity"; })(z || (z = {}));
var ne;
(function (e) { e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute"; })(ne || (ne = {}));
var Be = (function () {
    function Be(u, t, r) {
        this.decodeTree = u, this.emitCodePoint = t, this.errors = r, this.state = z.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = ne.Strict;
    }
    Be.prototype.startEntity = function (u) { this.decodeMode = u, this.state = z.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    Be.prototype.write = function (u, t) { switch (this.state) {
        case z.EntityStart: return u.charCodeAt(t) === W.NUM ? (this.state = z.NumericStart, this.consumed += 1, this.stateNumericStart(u, t + 1)) : (this.state = z.NamedEntity, this.stateNamedEntity(u, t));
        case z.NumericStart: return this.stateNumericStart(u, t);
        case z.NumericDecimal: return this.stateNumericDecimal(u, t);
        case z.NumericHex: return this.stateNumericHex(u, t);
        case z.NamedEntity: return this.stateNamedEntity(u, t);
    } };
    Be.prototype.stateNumericStart = function (u, t) { return t >= u.length ? -1 : (u.charCodeAt(t) | hr) === W.LOWER_X ? (this.state = z.NumericHex, this.consumed += 1, this.stateNumericHex(u, t + 1)) : (this.state = z.NumericDecimal, this.stateNumericDecimal(u, t)); };
    Be.prototype.addToNumericResult = function (u, t, r, n) { if (t !== r) {
        var i = r - t;
        this.result = this.result * Math.pow(n, i) + parseInt(u.substr(t, i), n), this.consumed += i;
    } };
    Be.prototype.stateNumericHex = function (u, t) { var r = t; for (; t < u.length;) {
        var n = u.charCodeAt(t);
        if (Ku(n) || br(n))
            t += 1;
        else
            return this.addToNumericResult(u, r, t, 16), this.emitNumericEntity(n, 3);
    } return this.addToNumericResult(u, r, t, 16), -1; };
    Be.prototype.stateNumericDecimal = function (u, t) { var r = t; for (; t < u.length;) {
        var n = u.charCodeAt(t);
        if (Ku(n))
            t += 1;
        else
            return this.addToNumericResult(u, r, t, 10), this.emitNumericEntity(n, 2);
    } return this.addToNumericResult(u, r, t, 10), -1; };
    Be.prototype.emitNumericEntity = function (u, t) { var r; if (this.consumed <= t)
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (u === W.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === ne.Strict)
        return 0; return this.emitCodePoint(Ju(this.result), this.consumed), this.errors && (u !== W.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    Be.prototype.stateNamedEntity = function (u, t) { var r = this.decodeTree, n = r[this.treeIndex], i = (n & we.VALUE_LENGTH) >> 14; for (; t < u.length; t++, this.excess++) {
        var s = u.charCodeAt(t);
        if (this.treeIndex = mr(r, n, this.treeIndex + Math.max(1, i), s), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === ne.Attribute && (i === 0 || gr(s)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (n = r[this.treeIndex], i = (n & we.VALUE_LENGTH) >> 14, i !== 0) {
            if (s === W.SEMI)
                return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this.excess);
            this.decodeMode !== ne.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    Be.prototype.emitNotTerminatedNamedEntity = function () { var u; var _a = this, t = _a.result, r = _a.decodeTree, n = (r[t] & we.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(t, n, this.consumed), (u = this.errors) === null || u === void 0 || u.missingSemicolonAfterCharacterReference(), this.consumed; };
    Be.prototype.emitNamedEntityData = function (u, t, r) { var n = this.decodeTree; return this.emitCodePoint(t === 1 ? n[u] & ~we.VALUE_LENGTH : n[u + 1], r), t === 3 && this.emitCodePoint(n[u + 2], r), r; };
    Be.prototype.end = function () { var u; switch (this.state) {
        case z.NamedEntity: return this.result !== 0 && (this.decodeMode !== ne.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case z.NumericDecimal: return this.emitNumericEntity(0, 2);
        case z.NumericHex: return this.emitNumericEntity(0, 3);
        case z.NumericStart: return (u = this.errors) === null || u === void 0 || u.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case z.EntityStart: return 0;
    } };
    return Be;
}());
function Kt(e) { var u = "", t = new Be(e, function (r) { return u += Me(r); }); return function (n, i) { var s = 0, c = 0; for (; (c = n.indexOf("&", c)) >= 0;) {
    u += n.slice(s, c), t.startEntity(i);
    var d = t.write(n, c + 1);
    if (d < 0) {
        s = c + t.end();
        break;
    }
    s = c + d, c = d === 0 ? s + 1 : s;
} var l = u + n.slice(s); return u = "", l; }; }
function mr(e, u, t, r) { var n = (u & we.BRANCH_LENGTH) >> 7, i = u & we.JUMP_TABLE; if (n === 0)
    return i !== 0 && r === i ? t : -1; if (i) {
    var l = r - i;
    return l < 0 || l >= n ? -1 : e[t + l] - 1;
} var s = t, c = s + n - 1; for (; s <= c;) {
    var l = s + c >>> 1, d = e[l];
    if (d < r)
        s = l + 1;
    else if (d > r)
        c = l - 1;
    else
        return e[l + n];
} return -1; }
var Wn = Kt(hu), $n = Kt(bu);
var A;
(function (e) { e[e.Tab = 9] = "Tab", e[e.NewLine = 10] = "NewLine", e[e.FormFeed = 12] = "FormFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.Number = 35] = "Number", e[e.Amp = 38] = "Amp", e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Dash = 45] = "Dash", e[e.Slash = 47] = "Slash", e[e.Zero = 48] = "Zero", e[e.Nine = 57] = "Nine", e[e.Semi = 59] = "Semi", e[e.Lt = 60] = "Lt", e[e.Eq = 61] = "Eq", e[e.Gt = 62] = "Gt", e[e.Questionmark = 63] = "Questionmark", e[e.UpperA = 65] = "UpperA", e[e.LowerA = 97] = "LowerA", e[e.UpperF = 70] = "UpperF", e[e.LowerF = 102] = "LowerF", e[e.UpperZ = 90] = "UpperZ", e[e.LowerZ = 122] = "LowerZ", e[e.LowerX = 120] = "LowerX", e[e.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(A || (A = {}));
var b;
(function (e) { e[e.Text = 1] = "Text", e[e.BeforeTagName = 2] = "BeforeTagName", e[e.InTagName = 3] = "InTagName", e[e.InSelfClosingTag = 4] = "InSelfClosingTag", e[e.BeforeClosingTagName = 5] = "BeforeClosingTagName", e[e.InClosingTagName = 6] = "InClosingTagName", e[e.AfterClosingTagName = 7] = "AfterClosingTagName", e[e.BeforeAttributeName = 8] = "BeforeAttributeName", e[e.InAttributeName = 9] = "InAttributeName", e[e.AfterAttributeName = 10] = "AfterAttributeName", e[e.BeforeAttributeValue = 11] = "BeforeAttributeValue", e[e.InAttributeValueDq = 12] = "InAttributeValueDq", e[e.InAttributeValueSq = 13] = "InAttributeValueSq", e[e.InAttributeValueNq = 14] = "InAttributeValueNq", e[e.BeforeDeclaration = 15] = "BeforeDeclaration", e[e.InDeclaration = 16] = "InDeclaration", e[e.InProcessingInstruction = 17] = "InProcessingInstruction", e[e.BeforeComment = 18] = "BeforeComment", e[e.CDATASequence = 19] = "CDATASequence", e[e.InSpecialComment = 20] = "InSpecialComment", e[e.InCommentLike = 21] = "InCommentLike", e[e.BeforeSpecialS = 22] = "BeforeSpecialS", e[e.BeforeSpecialT = 23] = "BeforeSpecialT", e[e.SpecialStartSequence = 24] = "SpecialStartSequence", e[e.InSpecialTag = 25] = "InSpecialTag", e[e.InEntity = 26] = "InEntity"; })(b || (b = {}));
function ye(e) { return e === A.Space || e === A.NewLine || e === A.Tab || e === A.FormFeed || e === A.CarriageReturn; }
function pu(e) { return e === A.Slash || e === A.Gt || ye(e); }
function xr(e) { return e >= A.LowerA && e <= A.LowerZ || e >= A.UpperA && e <= A.UpperZ; }
var se;
(function (e) { e[e.NoValue = 0] = "NoValue", e[e.Unquoted = 1] = "Unquoted", e[e.Single = 2] = "Single", e[e.Double = 3] = "Double"; })(se || (se = {}));
var $ = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Ge = (function () {
    function Ge(_a, r) {
        var _b = _a.xmlMode, u = _b === void 0 ? !1 : _b, _c = _a.decodeEntities, t = _c === void 0 ? !0 : _c;
        var _this = this;
        this.cbs = r, this.state = b.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = b.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = u, this.decodeEntities = t, this.entityDecoder = new Be(u ? bu : hu, function (n, i) { return _this.emitCodePoint(n, i); });
    }
    Ge.prototype.reset = function () { this.state = b.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = b.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Ge.prototype.write = function (u) { this.offset += this.buffer.length, this.buffer = u, this.parse(); };
    Ge.prototype.end = function () { this.running && this.finish(); };
    Ge.prototype.pause = function () { this.running = !1; };
    Ge.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Ge.prototype.stateText = function (u) { u === A.Lt || !this.decodeEntities && this.fastForwardTo(A.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = b.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && u === A.Amp && this.startEntity(); };
    Ge.prototype.stateSpecialStartSequence = function (u) { var t = this.sequenceIndex === this.currentSequence.length; if (!(t ? pu(u) : (u | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!t) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = b.InTagName, this.stateInTagName(u); };
    Ge.prototype.stateInSpecialTag = function (u) { if (this.sequenceIndex === this.currentSequence.length) {
        if (u === A.Gt || ye(u)) {
            var t = this.index - this.currentSequence.length;
            if (this.sectionStart < t) {
                var r = this.index;
                this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = r;
            }
            this.isSpecial = !1, this.sectionStart = t + 2, this.stateInClosingTagName(u);
            return;
        }
        this.sequenceIndex = 0;
    } (u | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === $.TitleEnd ? this.decodeEntities && u === A.Amp && this.startEntity() : this.fastForwardTo(A.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(u === A.Lt); };
    Ge.prototype.stateCDATASequence = function (u) { u === $.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === $.Cdata.length && (this.state = b.InCommentLike, this.currentSequence = $.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = b.InDeclaration, this.stateInDeclaration(u)); };
    Ge.prototype.fastForwardTo = function (u) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === u)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Ge.prototype.stateInCommentLike = function (u) { u === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === $.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = b.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : u !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Ge.prototype.isTagStartChar = function (u) { return this.xmlMode ? !pu(u) : xr(u); };
    Ge.prototype.startSpecial = function (u, t) { this.isSpecial = !0, this.currentSequence = u, this.sequenceIndex = t, this.state = b.SpecialStartSequence; };
    Ge.prototype.stateBeforeTagName = function (u) { if (u === A.ExclamationMark)
        this.state = b.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (u === A.Questionmark)
        this.state = b.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(u)) {
        var t = u | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = b.InTagName : t === $.ScriptEnd[2] ? this.state = b.BeforeSpecialS : t === $.TitleEnd[2] ? this.state = b.BeforeSpecialT : this.state = b.InTagName;
    }
    else
        u === A.Slash ? this.state = b.BeforeClosingTagName : (this.state = b.Text, this.stateText(u)); };
    Ge.prototype.stateInTagName = function (u) { pu(u) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = b.BeforeAttributeName, this.stateBeforeAttributeName(u)); };
    Ge.prototype.stateBeforeClosingTagName = function (u) { ye(u) || (u === A.Gt ? this.state = b.Text : (this.state = this.isTagStartChar(u) ? b.InClosingTagName : b.InSpecialComment, this.sectionStart = this.index)); };
    Ge.prototype.stateInClosingTagName = function (u) { (u === A.Gt || ye(u)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = b.AfterClosingTagName, this.stateAfterClosingTagName(u)); };
    Ge.prototype.stateAfterClosingTagName = function (u) { (u === A.Gt || this.fastForwardTo(A.Gt)) && (this.state = b.Text, this.sectionStart = this.index + 1); };
    Ge.prototype.stateBeforeAttributeName = function (u) { u === A.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = b.InSpecialTag, this.sequenceIndex = 0) : this.state = b.Text, this.sectionStart = this.index + 1) : u === A.Slash ? this.state = b.InSelfClosingTag : ye(u) || (this.state = b.InAttributeName, this.sectionStart = this.index); };
    Ge.prototype.stateInSelfClosingTag = function (u) { u === A.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = b.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : ye(u) || (this.state = b.BeforeAttributeName, this.stateBeforeAttributeName(u)); };
    Ge.prototype.stateInAttributeName = function (u) { (u === A.Eq || pu(u)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = b.AfterAttributeName, this.stateAfterAttributeName(u)); };
    Ge.prototype.stateAfterAttributeName = function (u) { u === A.Eq ? this.state = b.BeforeAttributeValue : u === A.Slash || u === A.Gt ? (this.cbs.onattribend(se.NoValue, this.sectionStart), this.sectionStart = -1, this.state = b.BeforeAttributeName, this.stateBeforeAttributeName(u)) : ye(u) || (this.cbs.onattribend(se.NoValue, this.sectionStart), this.state = b.InAttributeName, this.sectionStart = this.index); };
    Ge.prototype.stateBeforeAttributeValue = function (u) { u === A.DoubleQuote ? (this.state = b.InAttributeValueDq, this.sectionStart = this.index + 1) : u === A.SingleQuote ? (this.state = b.InAttributeValueSq, this.sectionStart = this.index + 1) : ye(u) || (this.sectionStart = this.index, this.state = b.InAttributeValueNq, this.stateInAttributeValueNoQuotes(u)); };
    Ge.prototype.handleInAttributeValue = function (u, t) { u === t || !this.decodeEntities && this.fastForwardTo(t) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(t === A.DoubleQuote ? se.Double : se.Single, this.index + 1), this.state = b.BeforeAttributeName) : this.decodeEntities && u === A.Amp && this.startEntity(); };
    Ge.prototype.stateInAttributeValueDoubleQuotes = function (u) { this.handleInAttributeValue(u, A.DoubleQuote); };
    Ge.prototype.stateInAttributeValueSingleQuotes = function (u) { this.handleInAttributeValue(u, A.SingleQuote); };
    Ge.prototype.stateInAttributeValueNoQuotes = function (u) { ye(u) || u === A.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(se.Unquoted, this.index), this.state = b.BeforeAttributeName, this.stateBeforeAttributeName(u)) : this.decodeEntities && u === A.Amp && this.startEntity(); };
    Ge.prototype.stateBeforeDeclaration = function (u) { u === A.OpeningSquareBracket ? (this.state = b.CDATASequence, this.sequenceIndex = 0) : this.state = u === A.Dash ? b.BeforeComment : b.InDeclaration; };
    Ge.prototype.stateInDeclaration = function (u) { (u === A.Gt || this.fastForwardTo(A.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = b.Text, this.sectionStart = this.index + 1); };
    Ge.prototype.stateInProcessingInstruction = function (u) { (u === A.Gt || this.fastForwardTo(A.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = b.Text, this.sectionStart = this.index + 1); };
    Ge.prototype.stateBeforeComment = function (u) { u === A.Dash ? (this.state = b.InCommentLike, this.currentSequence = $.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = b.InDeclaration; };
    Ge.prototype.stateInSpecialComment = function (u) { (u === A.Gt || this.fastForwardTo(A.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = b.Text, this.sectionStart = this.index + 1); };
    Ge.prototype.stateBeforeSpecialS = function (u) { var t = u | 32; t === $.ScriptEnd[3] ? this.startSpecial($.ScriptEnd, 4) : t === $.StyleEnd[3] ? this.startSpecial($.StyleEnd, 4) : (this.state = b.InTagName, this.stateInTagName(u)); };
    Ge.prototype.stateBeforeSpecialT = function (u) { var t = u | 32; t === $.TitleEnd[3] ? this.startSpecial($.TitleEnd, 4) : t === $.TextareaEnd[3] ? this.startSpecial($.TextareaEnd, 4) : (this.state = b.InTagName, this.stateInTagName(u)); };
    Ge.prototype.startEntity = function () { this.baseState = this.state, this.state = b.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? ne.Strict : this.baseState === b.Text || this.baseState === b.InSpecialTag ? ne.Legacy : ne.Attribute); };
    Ge.prototype.stateInEntity = function () { var u = this.entityDecoder.write(this.buffer, this.index - this.offset); u >= 0 ? (this.state = this.baseState, u === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Ge.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === b.Text || this.state === b.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === b.InAttributeValueDq || this.state === b.InAttributeValueSq || this.state === b.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Ge.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Ge.prototype.parse = function () { for (; this.shouldContinue();) {
        var u = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case b.Text: {
                this.stateText(u);
                break;
            }
            case b.SpecialStartSequence: {
                this.stateSpecialStartSequence(u);
                break;
            }
            case b.InSpecialTag: {
                this.stateInSpecialTag(u);
                break;
            }
            case b.CDATASequence: {
                this.stateCDATASequence(u);
                break;
            }
            case b.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(u);
                break;
            }
            case b.InAttributeName: {
                this.stateInAttributeName(u);
                break;
            }
            case b.InCommentLike: {
                this.stateInCommentLike(u);
                break;
            }
            case b.InSpecialComment: {
                this.stateInSpecialComment(u);
                break;
            }
            case b.BeforeAttributeName: {
                this.stateBeforeAttributeName(u);
                break;
            }
            case b.InTagName: {
                this.stateInTagName(u);
                break;
            }
            case b.InClosingTagName: {
                this.stateInClosingTagName(u);
                break;
            }
            case b.BeforeTagName: {
                this.stateBeforeTagName(u);
                break;
            }
            case b.AfterAttributeName: {
                this.stateAfterAttributeName(u);
                break;
            }
            case b.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(u);
                break;
            }
            case b.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(u);
                break;
            }
            case b.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(u);
                break;
            }
            case b.AfterClosingTagName: {
                this.stateAfterClosingTagName(u);
                break;
            }
            case b.BeforeSpecialS: {
                this.stateBeforeSpecialS(u);
                break;
            }
            case b.BeforeSpecialT: {
                this.stateBeforeSpecialT(u);
                break;
            }
            case b.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(u);
                break;
            }
            case b.InSelfClosingTag: {
                this.stateInSelfClosingTag(u);
                break;
            }
            case b.InDeclaration: {
                this.stateInDeclaration(u);
                break;
            }
            case b.BeforeDeclaration: {
                this.stateBeforeDeclaration(u);
                break;
            }
            case b.BeforeComment: {
                this.stateBeforeComment(u);
                break;
            }
            case b.InProcessingInstruction: {
                this.stateInProcessingInstruction(u);
                break;
            }
            case b.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Ge.prototype.finish = function () { this.state === b.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Ge.prototype.handleTrailingData = function () { var u = this.buffer.length + this.offset; this.sectionStart >= u || (this.state === b.InCommentLike ? this.currentSequence === $.CdataEnd ? this.cbs.oncdata(this.sectionStart, u, 0) : this.cbs.oncomment(this.sectionStart, u, 0) : this.state === b.InTagName || this.state === b.BeforeAttributeName || this.state === b.BeforeAttributeValue || this.state === b.AfterAttributeName || this.state === b.InAttributeName || this.state === b.InAttributeValueSq || this.state === b.InAttributeValueDq || this.state === b.InAttributeValueNq || this.state === b.InClosingTagName || this.cbs.ontext(this.sectionStart, u)); };
    Ge.prototype.emitCodePoint = function (u, t) { this.baseState !== b.Text && this.baseState !== b.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.onattribentity(u)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.ontextentity(u, this.sectionStart)); };
    return Ge;
}());
var He = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), U = new Set(["p"]), Xt = new Set(["thead", "tbody"]), Qt = new Set(["dd", "dt"]), Yt = new Set(["rt", "rp"]), yr = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", U], ["h1", U], ["h2", U], ["h3", U], ["h4", U], ["h5", U], ["h6", U], ["select", He], ["input", He], ["output", He], ["button", He], ["datalist", He], ["textarea", He], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", Qt], ["dt", Qt], ["address", U], ["article", U], ["aside", U], ["blockquote", U], ["details", U], ["div", U], ["dl", U], ["fieldset", U], ["figcaption", U], ["figure", U], ["footer", U], ["form", U], ["header", U], ["hr", U], ["main", U], ["nav", U], ["ol", U], ["pre", U], ["section", U], ["table", U], ["ul", U], ["rt", Yt], ["rp", Yt], ["tbody", Xt], ["tfoot", Xt]]), vr = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Zt = new Set(["math", "svg"]), e0 = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), Sr = /\s|\//, Ye = (function () {
    function Ye(u, t) {
        if (t === void 0) { t = {}; }
        var r, n, i, s, c, l;
        this.options = t, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = u != null ? u : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r = t.lowerCaseTags) !== null && r !== void 0 ? r : this.htmlMode, this.lowerCaseAttributeNames = (n = t.lowerCaseAttributeNames) !== null && n !== void 0 ? n : this.htmlMode, this.recognizeSelfClosing = (i = t.recognizeSelfClosing) !== null && i !== void 0 ? i : !this.htmlMode, this.tokenizer = new ((s = t.Tokenizer) !== null && s !== void 0 ? s : Ge)(this.options, this), this.foreignContext = [!this.htmlMode], (l = (c = this.cbs).onparserinit) === null || l === void 0 || l.call(c, this);
    }
    Ye.prototype.ontext = function (u, t) { var r, n; var i = this.getSlice(u, t); this.endIndex = t - 1, (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, i), this.startIndex = t; };
    Ye.prototype.ontextentity = function (u, t) { var r, n; this.endIndex = t - 1, (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, Me(u)), this.startIndex = t; };
    Ye.prototype.isVoidElement = function (u) { return this.htmlMode && vr.has(u); };
    Ye.prototype.onopentagname = function (u, t) { this.endIndex = t; var r = this.getSlice(u, t); this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r); };
    Ye.prototype.emitOpenTag = function (u) { var t, r, n, i; this.openTagStart = this.startIndex, this.tagname = u; var s = this.htmlMode && yr.get(u); if (s)
        for (; this.stack.length > 0 && s.has(this.stack[0]);) {
            var c = this.stack.shift();
            (r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, c, !0);
        } this.isVoidElement(u) || (this.stack.unshift(u), this.htmlMode && (Zt.has(u) ? this.foreignContext.unshift(!0) : e0.has(u) && this.foreignContext.unshift(!1))), (i = (n = this.cbs).onopentagname) === null || i === void 0 || i.call(n, u), this.cbs.onopentag && (this.attribs = {}); };
    Ye.prototype.endOpenTag = function (u) { var t, r; this.startIndex = this.openTagStart, this.attribs && ((r = (t = this.cbs).onopentag) === null || r === void 0 || r.call(t, this.tagname, this.attribs, u), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    Ye.prototype.onopentagend = function (u) { this.endIndex = u, this.endOpenTag(!1), this.startIndex = u + 1; };
    Ye.prototype.onclosetag = function (u, t) { var r, n, i, s, c, l, d, g; this.endIndex = t; var w = this.getSlice(u, t); if (this.lowerCaseTagNames && (w = w.toLowerCase()), this.htmlMode && (Zt.has(w) || e0.has(w)) && this.foreignContext.shift(), this.isVoidElement(w))
        this.htmlMode && w === "br" && ((s = (i = this.cbs).onopentagname) === null || s === void 0 || s.call(i, "br"), (l = (c = this.cbs).onopentag) === null || l === void 0 || l.call(c, "br", {}, !0), (g = (d = this.cbs).onclosetag) === null || g === void 0 || g.call(d, "br", !1));
    else {
        var x = this.stack.indexOf(w);
        if (x !== -1)
            for (var y = 0; y <= x; y++) {
                var E = this.stack.shift();
                (n = (r = this.cbs).onclosetag) === null || n === void 0 || n.call(r, E, y !== x);
            }
        else
            this.htmlMode && w === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = t + 1; };
    Ye.prototype.onselfclosingtag = function (u) { this.endIndex = u, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = u + 1) : this.onopentagend(u); };
    Ye.prototype.closeCurrentTag = function (u) { var t, r; var n = this.tagname; this.endOpenTag(u), this.stack[0] === n && ((r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, n, !u), this.stack.shift()); };
    Ye.prototype.onattribname = function (u, t) { this.startIndex = u; var r = this.getSlice(u, t); this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r; };
    Ye.prototype.onattribdata = function (u, t) { this.attribvalue += this.getSlice(u, t); };
    Ye.prototype.onattribentity = function (u) { this.attribvalue += Me(u); };
    Ye.prototype.onattribend = function (u, t) { var r, n; this.endIndex = t, (n = (r = this.cbs).onattribute) === null || n === void 0 || n.call(r, this.attribname, this.attribvalue, u === se.Double ? '"' : u === se.Single ? "'" : u === se.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    Ye.prototype.getInstructionName = function (u) { var t = u.search(Sr), r = t < 0 ? u : u.substr(0, t); return this.lowerCaseTagNames && (r = r.toLowerCase()), r; };
    Ye.prototype.ondeclaration = function (u, t) { this.endIndex = t; var r = this.getSlice(u, t); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(n), "!".concat(r));
    } this.startIndex = t + 1; };
    Ye.prototype.onprocessinginstruction = function (u, t) { this.endIndex = t; var r = this.getSlice(u, t); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(n), "?".concat(r));
    } this.startIndex = t + 1; };
    Ye.prototype.oncomment = function (u, t, r) { var n, i, s, c; this.endIndex = t, (i = (n = this.cbs).oncomment) === null || i === void 0 || i.call(n, this.getSlice(u, t - r)), (c = (s = this.cbs).oncommentend) === null || c === void 0 || c.call(s), this.startIndex = t + 1; };
    Ye.prototype.oncdata = function (u, t, r) { var n, i, s, c, l, d, g, w, x, y; this.endIndex = t; var E = this.getSlice(u, t - r); !this.htmlMode || this.options.recognizeCDATA ? ((i = (n = this.cbs).oncdatastart) === null || i === void 0 || i.call(n), (c = (s = this.cbs).ontext) === null || c === void 0 || c.call(s, E), (d = (l = this.cbs).oncdataend) === null || d === void 0 || d.call(l)) : ((w = (g = this.cbs).oncomment) === null || w === void 0 || w.call(g, "[CDATA[".concat(E, "]]")), (y = (x = this.cbs).oncommentend) === null || y === void 0 || y.call(x)), this.startIndex = t + 1; };
    Ye.prototype.onend = function () { var u, t; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = 0; r < this.stack.length; r++)
            this.cbs.onclosetag(this.stack[r], !0);
    } (t = (u = this.cbs).onend) === null || t === void 0 || t.call(u); };
    Ye.prototype.reset = function () { var u, t, r, n; (t = (u = this.cbs).onreset) === null || t === void 0 || t.call(u), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (n = (r = this.cbs).onparserinit) === null || n === void 0 || n.call(r, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    Ye.prototype.parseComplete = function (u) { this.reset(), this.end(u); };
    Ye.prototype.getSlice = function (u, t) { for (; u - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var r = this.buffers[0].slice(u - this.bufferOffset, t - this.bufferOffset); for (; t - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), r += this.buffers[0].slice(0, t - this.bufferOffset); return r; };
    Ye.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    Ye.prototype.write = function (u) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".write() after done!"));
        return;
    } this.buffers.push(u), this.tokenizer.running && (this.tokenizer.write(u), this.writeIndex++); };
    Ye.prototype.end = function (u) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".end() after done!"));
        return;
    } u && this.write(u), this.ended = !0, this.tokenizer.end(); };
    Ye.prototype.pause = function () { this.tokenizer.pause(); };
    Ye.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    Ye.prototype.parseChunk = function (u) { this.write(u); };
    Ye.prototype.done = function (u) { this.end(u); };
    return Ye;
}());
var gu = {};
Wu(gu, { CDATA: function () { return nt; }, Comment: function () { return et; }, Directive: function () { return Zu; }, Doctype: function () { return at; }, ElementType: function () { return q; }, Root: function () { return Qu; }, Script: function () { return ut; }, Style: function () { return tt; }, Tag: function () { return rt; }, Text: function () { return Yu; }, isTag: function () { return Xu; } });
var q;
(function (e) { e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"; })(q || (q = {}));
function Xu(e) { return e.type === q.Tag || e.type === q.Script || e.type === q.Style; }
var Qu = q.Root, Yu = q.Text, Zu = q.Directive, et = q.Comment, ut = q.Script, tt = q.Style, rt = q.Tag, nt = q.CDATA, at = q.Doctype;
var mu = (function () {
    function mu() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(mu.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (u) { this.parent = u; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mu.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (u) { this.prev = u; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mu.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (u) { this.next = u; },
        enumerable: false,
        configurable: true
    });
    mu.prototype.cloneNode = function (u) {
        if (u === void 0) { u = !1; }
        return u0(this, u);
    };
    return mu;
}()), Ze = (function (_super) {
    __extends(Ze, _super);
    function Ze(u) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = u;
        return _this;
    }
    Object.defineProperty(Ze.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (u) { this.data = u; },
        enumerable: false,
        configurable: true
    });
    return Ze;
}(mu)), Pe = (function (_super) {
    __extends(Pe, _super);
    function Pe() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = q.Text;
        return _this;
    }
    Object.defineProperty(Pe.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return Pe;
}(Ze)), eu = (function (_super) {
    __extends(eu, _super);
    function eu() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = q.Comment;
        return _this;
    }
    Object.defineProperty(eu.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return eu;
}(Ze)), uu = (function (_super) {
    __extends(uu, _super);
    function uu(u, t) {
        var _this = this;
        _this = _super.call(this, t) || this, _this.name = u, _this.type = q.Directive;
        return _this;
    }
    Object.defineProperty(uu.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return uu;
}(Ze)), tu = (function (_super) {
    __extends(tu, _super);
    function tu(u) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = u;
        return _this;
    }
    Object.defineProperty(tu.prototype, "firstChild", {
        get: function () { var u; return (u = this.children[0]) !== null && u !== void 0 ? u : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(tu.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(tu.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (u) { this.children = u; },
        enumerable: false,
        configurable: true
    });
    return tu;
}(mu)), ru = (function (_super) {
    __extends(ru, _super);
    function ru() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = q.CDATA;
        return _this;
    }
    Object.defineProperty(ru.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return ru;
}(tu)), _e = (function (_super) {
    __extends(_e, _super);
    function _e() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = q.Root;
        return _this;
    }
    Object.defineProperty(_e.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return _e;
}(tu)), nu = (function (_super) {
    __extends(nu, _super);
    function nu(u, t, r, n) {
        if (r === void 0) { r = []; }
        if (n === void 0) { n = u === "script" ? q.Script : u === "style" ? q.Style : q.Tag; }
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = u, _this.attribs = t, _this.type = n;
        return _this;
    }
    Object.defineProperty(nu.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(nu.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (u) { this.name = u; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(nu.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (u) { var t, r; return { name: u, value: _this.attribs[u], namespace: (t = _this["x-attribsNamespace"]) === null || t === void 0 ? void 0 : t[u], prefix: (r = _this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[u] }; });
        },
        enumerable: false,
        configurable: true
    });
    return nu;
}(tu));
function k(e) { return Xu(e); }
function Ve(e) { return e.type === q.CDATA; }
function he(e) { return e.type === q.Text; }
function au(e) { return e.type === q.Comment; }
function Ar(e) { return e.type === q.Directive; }
function st(e) { return e.type === q.Root; }
function X(e) { return Object.prototype.hasOwnProperty.call(e, "children"); }
function u0(e, u) {
    if (u === void 0) { u = !1; }
    var t;
    if (he(e))
        t = new Pe(e.data);
    else if (au(e))
        t = new eu(e.data);
    else if (k(e)) {
        var r = u ? it(e.children) : [], n_1 = new nu(e.name, le({}, e.attribs), r);
        r.forEach(function (i) { return i.parent = n_1; }), e.namespace != null && (n_1.namespace = e.namespace), e["x-attribsNamespace"] && (n_1["x-attribsNamespace"] = le({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (n_1["x-attribsPrefix"] = le({}, e["x-attribsPrefix"])), t = n_1;
    }
    else if (Ve(e)) {
        var r = u ? it(e.children) : [], n_2 = new ru(r);
        r.forEach(function (i) { return i.parent = n_2; }), t = n_2;
    }
    else if (st(e)) {
        var r = u ? it(e.children) : [], n_3 = new _e(r);
        r.forEach(function (i) { return i.parent = n_3; }), e["x-mode"] && (n_3["x-mode"] = e["x-mode"]), t = n_3;
    }
    else if (Ar(e)) {
        var r = new uu(e.name, e.data);
        e["x-name"] != null && (r["x-name"] = e["x-name"], r["x-publicId"] = e["x-publicId"], r["x-systemId"] = e["x-systemId"]), t = r;
    }
    else
        throw new Error("Not implemented yet: ".concat(e.type));
    return t.startIndex = e.startIndex, t.endIndex = e.endIndex, e.sourceCodeLocation != null && (t.sourceCodeLocation = e.sourceCodeLocation), t;
}
function it(e) { var u = e.map(function (t) { return u0(t, !0); }); for (var t = 1; t < u.length; t++)
    u[t].prev = u[t - 1], u[t - 1].next = u[t]; return u; }
var t0 = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, je = (function () {
    function je(u, t, r) {
        this.dom = [], this.root = new _e(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof t == "function" && (r = t, t = t0), typeof u == "object" && (t = u, u = void 0), this.callback = u != null ? u : null, this.options = t != null ? t : t0, this.elementCB = r != null ? r : null;
    }
    je.prototype.onparserinit = function (u) { this.parser = u; };
    je.prototype.onreset = function () { this.dom = [], this.root = new _e(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    je.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    je.prototype.onerror = function (u) { this.handleCallback(u); };
    je.prototype.onclosetag = function () { this.lastNode = null; var u = this.tagStack.pop(); this.options.withEndIndices && (u.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(u); };
    je.prototype.onopentag = function (u, t) { var r = this.options.xmlMode ? q.Tag : void 0, n = new nu(u, t, void 0, r); this.addNode(n), this.tagStack.push(n); };
    je.prototype.ontext = function (u) { var t = this.lastNode; if (t && t.type === q.Text)
        t.data += u, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
    else {
        var r = new Pe(u);
        this.addNode(r), this.lastNode = r;
    } };
    je.prototype.oncomment = function (u) { if (this.lastNode && this.lastNode.type === q.Comment) {
        this.lastNode.data += u;
        return;
    } var t = new eu(u); this.addNode(t), this.lastNode = t; };
    je.prototype.oncommentend = function () { this.lastNode = null; };
    je.prototype.oncdatastart = function () { var u = new Pe(""), t = new ru([u]); this.addNode(t), u.parent = t, this.lastNode = u; };
    je.prototype.oncdataend = function () { this.lastNode = null; };
    je.prototype.onprocessinginstruction = function (u, t) { var r = new uu(u, t); this.addNode(r); };
    je.prototype.handleCallback = function (u) { if (typeof this.callback == "function")
        this.callback(u, this.dom);
    else if (u)
        throw u; };
    je.prototype.addNode = function (u) { var t = this.tagStack[this.tagStack.length - 1], r = t.children[t.children.length - 1]; this.options.withStartIndices && (u.startIndex = this.parser.startIndex), this.options.withEndIndices && (u.endIndex = this.parser.endIndex), t.children.push(u), r && (u.prev = r, r.next = u), u.parent = t, this.lastNode = null; };
    return je;
}());
var be = {};
Wu(be, { DocumentPosition: function () { return ce; }, append: function () { return _r; }, appendChild: function () { return Pr; }, compareDocumentPosition: function () { return m0; }, existsOne: function () { return p0; }, filter: function () { return We; }, find: function () { return Eu; }, findAll: function () { return zr; }, findOne: function () { return Tu; }, findOneChild: function () { return jr; }, getAttributeValue: function () { return Mr; }, getChildren: function () { return Au; }, getElementById: function () { return Kr; }, getElements: function () { return Jr; }, getElementsByClassName: function () { return Xr; }, getElementsByTagName: function () { return Le; }, getElementsByTagType: function () { return Qr; }, getFeed: function () { return yt; }, getInnerHTML: function () { return Fr; }, getName: function () { return Gr; }, getOuterHTML: function () { return h0; }, getParent: function () { return b0; }, getSiblings: function () { return wu; }, getText: function () { return Su; }, hasAttrib: function () { return Br; }, hasChildren: function () { return X; }, innerText: function () { return ht; }, isCDATA: function () { return Ve; }, isComment: function () { return au; }, isDocument: function () { return st; }, isTag: function () { return k; }, isText: function () { return he; }, nextElementSibling: function () { return bt; }, prepend: function () { return gt; }, prependChild: function () { return Vr; }, prevElementSibling: function () { return pt; }, removeElement: function () { return ve; }, removeSubsets: function () { return Yr; }, replaceElement: function () { return Hr; }, testElement: function () { return $r; }, textContent: function () { return Ee; }, uniqueSort: function () { return xt; } });
function xu(e) { for (var u = 1; u < e.length; u++)
    e[u][0] += e[u - 1][0] + 1; return e; }
var wr = new Map(xu([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(xu([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(xu([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(xu([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var ct = /["&'<>$\x80-\uFFFF]/g, r0 = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), n0 = String.prototype.codePointAt != null ? function (e, u) { return e.codePointAt(u); } : function (e, u) { return (e.charCodeAt(u) & 64512) === 55296 ? (e.charCodeAt(u) - 55296) * 1024 + e.charCodeAt(u + 1) - 56320 + 65536 : e.charCodeAt(u); };
function iu(e) { var u = "", t = 0, r; for (; (r = ct.exec(e)) !== null;) {
    var n = r.index, i = e.charCodeAt(n), s = r0.get(i);
    s !== void 0 ? (u += e.substring(t, n) + s, t = n + 1) : (u += "".concat(e.substring(t, n), "&#x").concat(n0(e, n).toString(16), ";"), t = ct.lastIndex += +((i & 64512) === 55296));
} return u + e.substr(t); }
function ot(e, u) { return function (r) { var n, i = 0, s = ""; for (; n = e.exec(r);)
    i !== n.index && (s += r.substring(i, n.index)), s += u.get(n[0].charCodeAt(0)), i = n.index + 1; return s + r.substring(i); }; }
var a0 = ot(/[&<>'"]/g, r0), yu = ot(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), vu = ot(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var i0;
(function (e) { e[e.XML = 0] = "XML", e[e.HTML = 1] = "HTML"; })(i0 || (i0 = {}));
var s0;
(function (e) { e[e.UTF8 = 0] = "UTF8", e[e.ASCII = 1] = "ASCII", e[e.Extensive = 2] = "Extensive", e[e.Attribute = 3] = "Attribute", e[e.Text = 4] = "Text"; })(s0 || (s0 = {}));
var f0 = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (e) { return [e.toLowerCase(), e]; })), l0 = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (e) { return [e.toLowerCase(), e]; }));
var Tr = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function Nr(e) { return e.replace(/"/g, "&quot;"); }
function Cr(e, u) { var t; if (!e)
    return; var r = ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) === !1 ? Nr : u.xmlMode || u.encodeEntities !== "utf8" ? iu : yu; return Object.keys(e).map(function (n) { var i, s; var c = (i = e[n]) !== null && i !== void 0 ? i : ""; return u.xmlMode === "foreign" && (n = (s = l0.get(n)) !== null && s !== void 0 ? s : n), !u.emptyAttrs && !u.xmlMode && c === "" ? n : "".concat(n, "=\"").concat(r(c), "\""); }).join(" "); }
var d0 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function dt(e, u) {
    if (u === void 0) { u = {}; }
    var t = "length" in e ? e : [e], r = "";
    for (var n = 0; n < t.length; n++)
        r += Ir(t[n], u);
    return r;
}
var ze = dt;
function Ir(e, u) { switch (e.type) {
    case Qu: return dt(e.children, u);
    case at:
    case Zu: return Ur(e);
    case et: return Rr(e);
    case nt: return Dr(e);
    case ut:
    case tt:
    case rt: return Lr(e, u);
    case Yu: return Or(e, u);
} }
var qr = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), kr = new Set(["svg", "math"]);
function Lr(e, u) { var t; u.xmlMode === "foreign" && (e.name = (t = f0.get(e.name)) !== null && t !== void 0 ? t : e.name, e.parent && qr.has(e.parent.name) && (u = qe(le({}, u), { xmlMode: !1 }))), !u.xmlMode && kr.has(e.name) && (u = qe(le({}, u), { xmlMode: "foreign" })); var r = "<".concat(e.name), n = Cr(e.attribs, u); return n && (r += " ".concat(n)), e.children.length === 0 && (u.xmlMode ? u.selfClosingTags !== !1 : u.selfClosingTags && d0.has(e.name)) ? (u.xmlMode || (r += " "), r += "/>") : (r += ">", e.children.length > 0 && (r += dt(e.children, u)), (u.xmlMode || !d0.has(e.name)) && (r += "</".concat(e.name, ">"))), r; }
function Ur(e) { return "<".concat(e.data, ">"); }
function Or(e, u) { var t; var r = e.data || ""; return ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) !== !1 && !(!u.xmlMode && e.parent && Tr.has(e.parent.name)) && (r = u.xmlMode || u.encodeEntities !== "utf8" ? iu(r) : vu(r)), r; }
function Dr(e) { return "<![CDATA[".concat(e.children[0].data, "]]>"); }
function Rr(e) { return "<!--".concat(e.data, "-->"); }
function h0(e, u) { return ze(e, u); }
function Fr(e, u) { return X(e) ? e.children.map(function (t) { return h0(t, u); }).join("") : ""; }
function Su(e) {
    return Array.isArray(e) ? e.map(Su).join("") : k(e) ? e.name === "br" ? "\n" : Su(e.children) : Ve(e) ? Su(e.children) : he(e) ? e.data : "";
}
function Ee(e) { return Array.isArray(e) ? e.map(Ee).join("") : X(e) && !au(e) ? Ee(e.children) : he(e) ? e.data : ""; }
function ht(e) { return Array.isArray(e) ? e.map(ht).join("") : X(e) && (e.type === q.Tag || Ve(e)) ? ht(e.children) : he(e) ? e.data : ""; }
function Au(e) { return X(e) ? e.children : []; }
function b0(e) { return e.parent || null; }
function wu(e) {
    var _a, _b;
    var u = b0(e);
    if (u != null)
        return Au(u);
    var t = [e], r = e.prev, n = e.next;
    for (; r != null;)
        t.unshift(r), _a = r, r = _a.prev;
    for (; n != null;)
        t.push(n), _b = n, n = _b.next;
    return t;
}
function Mr(e, u) { var t; return (t = e.attribs) === null || t === void 0 ? void 0 : t[u]; }
function Br(e, u) { return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, u) && e.attribs[u] != null; }
function Gr(e) { return e.name; }
function bt(e) {
    var _a;
    var u = e.next;
    for (; u !== null && !k(u);)
        (_a = u, u = _a.next);
    return u;
}
function pt(e) {
    var _a;
    var u = e.prev;
    for (; u !== null && !k(u);)
        (_a = u, u = _a.prev);
    return u;
}
function ve(e) { if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var u = e.parent.children, t = u.lastIndexOf(e);
    t >= 0 && u.splice(t, 1);
} e.next = null, e.prev = null, e.parent = null; }
function Hr(e, u) { var t = u.prev = e.prev; t && (t.next = u); var r = u.next = e.next; r && (r.prev = u); var n = u.parent = e.parent; if (n) {
    var i = n.children;
    i[i.lastIndexOf(e)] = u, e.parent = null;
} }
function Pr(e, u) { if (ve(u), u.next = null, u.parent = e, e.children.push(u) > 1) {
    var t = e.children[e.children.length - 2];
    t.next = u, u.prev = t;
}
else
    u.prev = null; }
function _r(e, u) { ve(u); var t = e.parent, r = e.next; if (u.next = r, u.prev = e, e.next = u, u.parent = t, r) {
    if (r.prev = u, t) {
        var n = t.children;
        n.splice(n.lastIndexOf(r), 0, u);
    }
}
else
    t && t.children.push(u); }
function Vr(e, u) { if (ve(u), u.parent = e, u.prev = null, e.children.unshift(u) !== 1) {
    var t = e.children[1];
    t.prev = u, u.next = t;
}
else
    u.next = null; }
function gt(e, u) { ve(u); var t = e.parent; if (t) {
    var r = t.children;
    r.splice(r.indexOf(e), 0, u);
} e.prev && (e.prev.next = u), u.parent = t, u.prev = e.prev, u.next = e, e.prev = u; }
function We(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Eu(e, Array.isArray(u) ? u : [u], t, r);
}
function Eu(e, u, t, r) { var n = [], i = [Array.isArray(u) ? u : [u]], s = [0]; for (;;) {
    if (s[0] >= i[0].length) {
        if (s.length === 1)
            return n;
        i.shift(), s.shift();
        continue;
    }
    var c = i[0][s[0]++];
    if (e(c) && (n.push(c), --r <= 0))
        return n;
    t && X(c) && c.children.length > 0 && (s.unshift(0), i.unshift(c.children));
} }
function jr(e, u) { return u.find(e); }
function Tu(e, u, t) {
    if (t === void 0) { t = !0; }
    var r = Array.isArray(u) ? u : [u];
    for (var n = 0; n < r.length; n++) {
        var i = r[n];
        if (k(i) && e(i))
            return i;
        if (t && X(i) && i.children.length > 0) {
            var s = Tu(e, i.children, !0);
            if (s)
                return s;
        }
    }
    return null;
}
function p0(e, u) { return (Array.isArray(u) ? u : [u]).some(function (t) { return k(t) && e(t) || X(t) && p0(e, t.children); }); }
function zr(e, u) { var t = [], r = [Array.isArray(u) ? u : [u]], n = [0]; for (;;) {
    if (n[0] >= r[0].length) {
        if (r.length === 1)
            return t;
        r.shift(), n.shift();
        continue;
    }
    var i = r[0][n[0]++];
    k(i) && e(i) && t.push(i), X(i) && i.children.length > 0 && (n.unshift(0), r.unshift(i.children));
} }
var Nu = { tag_name: function (e) { return typeof e == "function" ? function (u) { return k(u) && e(u.name); } : e === "*" ? k : function (u) { return k(u) && u.name === e; }; }, tag_type: function (e) { return typeof e == "function" ? function (u) { return e(u.type); } : function (u) { return u.type === e; }; }, tag_contains: function (e) { return typeof e == "function" ? function (u) { return he(u) && e(u.data); } : function (u) { return he(u) && u.data === e; }; } };
function mt(e, u) { return typeof u == "function" ? function (t) { return k(t) && u(t.attribs[e]); } : function (t) { return k(t) && t.attribs[e] === u; }; }
function Wr(e, u) { return function (t) { return e(t) || u(t); }; }
function g0(e) { var u = Object.keys(e).map(function (t) { var r = e[t]; return Object.prototype.hasOwnProperty.call(Nu, t) ? Nu[t](r) : mt(t, r); }); return u.length === 0 ? null : u.reduce(Wr); }
function $r(e, u) { var t = g0(e); return t ? t(u) : !0; }
function Jr(e, u, t, r) {
    if (r === void 0) { r = 1 / 0; }
    var n = g0(e);
    return n ? We(n, u, t, r) : [];
}
function Kr(e, u, t) {
    if (t === void 0) { t = !0; }
    return Array.isArray(u) || (u = [u]), Tu(mt("id", e), u, t);
}
function Le(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return We(Nu.tag_name(e), u, t, r);
}
function Xr(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return We(mt("class", e), u, t, r);
}
function Qr(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return We(Nu.tag_type(e), u, t, r);
}
function Yr(e) { var u = e.length; for (; --u >= 0;) {
    var t = e[u];
    if (u > 0 && e.lastIndexOf(t, u - 1) >= 0) {
        e.splice(u, 1);
        continue;
    }
    for (var r = t.parent; r; r = r.parent)
        if (e.includes(r)) {
            e.splice(u, 1);
            break;
        }
} return e; }
var ce;
(function (e) { e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.PRECEDING = 2] = "PRECEDING", e[e.FOLLOWING = 4] = "FOLLOWING", e[e.CONTAINS = 8] = "CONTAINS", e[e.CONTAINED_BY = 16] = "CONTAINED_BY"; })(ce || (ce = {}));
function m0(e, u) { var t = [], r = []; if (e === u)
    return 0; var n = X(e) ? e : e.parent; for (; n;)
    t.unshift(n), n = n.parent; for (n = X(u) ? u : u.parent; n;)
    r.unshift(n), n = n.parent; var i = Math.min(t.length, r.length), s = 0; for (; s < i && t[s] === r[s];)
    s++; if (s === 0)
    return ce.DISCONNECTED; var c = t[s - 1], l = c.children, d = t[s], g = r[s]; return l.indexOf(d) > l.indexOf(g) ? c === u ? ce.FOLLOWING | ce.CONTAINED_BY : ce.FOLLOWING : c === e ? ce.PRECEDING | ce.CONTAINS : ce.PRECEDING; }
function xt(e) { return e = e.filter(function (u, t, r) { return !r.includes(u, t + 1); }), e.sort(function (u, t) { var r = m0(u, t); return r & ce.PRECEDING ? -1 : r & ce.FOLLOWING ? 1 : 0; }), e; }
function yt(e) { var u = Cu(rn, e); return u ? u.name === "feed" ? Zr(u) : en(u) : null; }
function Zr(e) { var u; var t = e.children, r = { type: "atom", items: Le("entry", t).map(function (s) { var c; var l = s.children, d = { media: x0(l) }; ee(d, "id", "id", l), ee(d, "title", "title", l); var g = (c = Cu("link", l)) === null || c === void 0 ? void 0 : c.attribs.href; g && (d.link = g); var w = Te("summary", l) || Te("content", l); w && (d.description = w); var x = Te("updated", l); return x && (d.pubDate = new Date(x)), d; }) }; ee(r, "id", "id", t), ee(r, "title", "title", t); var n = (u = Cu("link", t)) === null || u === void 0 ? void 0 : u.attribs.href; n && (r.link = n), ee(r, "description", "subtitle", t); var i = Te("updated", t); return i && (r.updated = new Date(i)), ee(r, "author", "email", t, !0), r; }
function en(e) { var u, t; var r = (t = (u = Cu("channel", e.children)) === null || u === void 0 ? void 0 : u.children) !== null && t !== void 0 ? t : [], n = { type: e.name.substr(0, 3), id: "", items: Le("item", e.children).map(function (s) { var c = s.children, l = { media: x0(c) }; ee(l, "id", "guid", c), ee(l, "title", "title", c), ee(l, "link", "link", c), ee(l, "description", "description", c); var d = Te("pubDate", c) || Te("dc:date", c); return d && (l.pubDate = new Date(d)), l; }) }; ee(n, "title", "title", r), ee(n, "link", "link", r), ee(n, "description", "description", r); var i = Te("lastBuildDate", r); return i && (n.updated = new Date(i)), ee(n, "author", "managingEditor", r, !0), n; }
var un = ["url", "type", "lang"], tn = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function x0(e) { return Le("media:content", e).map(function (u) {
    var e_4, _a, e_5, _b;
    var t = u.attribs, r = { medium: t.medium, isDefault: !!t.isDefault };
    try {
        for (var un_1 = __values(un), un_1_1 = un_1.next(); !un_1_1.done; un_1_1 = un_1.next()) {
            var n = un_1_1.value;
            t[n] && (r[n] = t[n]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (un_1_1 && !un_1_1.done && (_a = un_1.return)) _a.call(un_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var tn_1 = __values(tn), tn_1_1 = tn_1.next(); !tn_1_1.done; tn_1_1 = tn_1.next()) {
            var n = tn_1_1.value;
            t[n] && (r[n] = parseInt(t[n], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (tn_1_1 && !tn_1_1.done && (_b = tn_1.return)) _b.call(tn_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return t.expression && (r.expression = t.expression), r;
}); }
function Cu(e, u) { return Le(e, u, !0, 1)[0]; }
function Te(e, u, t) {
    if (t === void 0) { t = !1; }
    return Ee(Le(e, u, t, 1)).trim();
}
function ee(e, u, t, r, n) {
    if (n === void 0) { n = !1; }
    var i = Te(t, r, n);
    i && (e[u] = i);
}
function rn(e) { return e === "rss" || e === "feed" || e === "rdf:RDF"; }
function y0(e, u) { var t = new je(void 0, u); return new Ye(t, u).end(e), t.root; }
var S;
(function (e) { e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"; })(S || (S = {}));
var P;
(function (e) { e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"; })(P || (P = {}));
var v0 = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, nn = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, an = new Map([[126, P.Element], [94, P.Start], [36, P.End], [42, P.Any], [33, P.Not], [124, P.Hyphen]]), sn = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function Ue(e) { switch (e.type) {
    case S.Adjacent:
    case S.Child:
    case S.Descendant:
    case S.Parent:
    case S.Sibling:
    case S.ColumnCombinator: return !0;
    default: return !1;
} }
var cn = new Set(["contains", "icontains"]);
function on(e, u, t) { var r = parseInt(u, 16) - 65536; return r !== r || t ? u : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320); }
function su(e) { return e.replace(nn, on); }
function vt(e) { return e === 39 || e === 34; }
function S0(e) { return e === 32 || e === 9 || e === 10 || e === 12 || e === 13; }
function Ne(e) { var u = [], t = A0(u, "".concat(e), 0); if (t < e.length)
    throw new Error("Unmatched selector: ".concat(e.slice(t))); return u; }
function A0(e, u, t) { var r = []; function n(x) { var y = u.slice(t + x).match(v0); if (!y)
    throw new Error("Expected name, found ".concat(u.slice(t))); var _a = __read(y, 1), E = _a[0]; return t += x + E.length, su(E); } function i(x) { for (t += x; t < u.length && S0(u.charCodeAt(t));)
    t++; } function s() { t += 1; var x = t, y = 1; for (; y > 0 && t < u.length; t++)
    u.charCodeAt(t) === 40 && !c(t) ? y++ : u.charCodeAt(t) === 41 && !c(t) && y--; if (y)
    throw new Error("Parenthesis not matched"); return su(u.slice(x, t - 1)); } function c(x) { var y = 0; for (; u.charCodeAt(--x) === 92;)
    y++; return (y & 1) === 1; } function l() { if (r.length > 0 && Ue(r[r.length - 1]))
    throw new Error("Did not expect successive traversals."); } function d(x) { if (r.length > 0 && r[r.length - 1].type === S.Descendant) {
    r[r.length - 1].type = x;
    return;
} l(), r.push({ type: x }); } function g(x, y) { r.push({ type: S.Attribute, name: x, action: y, value: n(1), namespace: null, ignoreCase: "quirks" }); } function w() { if (r.length && r[r.length - 1].type === S.Descendant && r.pop(), r.length === 0)
    throw new Error("Empty sub-selector"); e.push(r); } if (i(0), u.length === t)
    return t; e: for (; t < u.length;) {
    var x = u.charCodeAt(t);
    switch (x) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (r.length === 0 || r[0].type !== S.Descendant) && (l(), r.push({ type: S.Descendant })), i(1);
            break;
        }
        case 62: {
            d(S.Child), i(1);
            break;
        }
        case 60: {
            d(S.Parent), i(1);
            break;
        }
        case 126: {
            d(S.Sibling), i(1);
            break;
        }
        case 43: {
            d(S.Adjacent), i(1);
            break;
        }
        case 46: {
            g("class", P.Element);
            break;
        }
        case 35: {
            g("id", P.Equals);
            break;
        }
        case 91: {
            i(1);
            var y = void 0, E = null;
            u.charCodeAt(t) === 124 ? y = n(1) : u.startsWith("*|", t) ? (E = "*", y = n(2)) : (y = n(0), u.charCodeAt(t) === 124 && u.charCodeAt(t + 1) !== 61 && (E = y, y = n(1))), i(0);
            var C = P.Exists, J = an.get(u.charCodeAt(t));
            if (J) {
                if (C = J, u.charCodeAt(t + 1) !== 61)
                    throw new Error("Expected `=`");
                i(2);
            }
            else
                u.charCodeAt(t) === 61 && (C = P.Equals, i(1));
            var Q = "", fe = null;
            if (C !== "exists") {
                if (vt(u.charCodeAt(t))) {
                    var _ = u.charCodeAt(t), m = t + 1;
                    for (; m < u.length && (u.charCodeAt(m) !== _ || c(m));)
                        m += 1;
                    if (u.charCodeAt(m) !== _)
                        throw new Error("Attribute value didn't end");
                    Q = su(u.slice(t + 1, m)), t = m + 1;
                }
                else {
                    var _ = t;
                    for (; t < u.length && (!S0(u.charCodeAt(t)) && u.charCodeAt(t) !== 93 || c(t));)
                        t += 1;
                    Q = su(u.slice(_, t));
                }
                i(0);
                var L = u.charCodeAt(t) | 32;
                L === 115 ? (fe = !1, i(1)) : L === 105 && (fe = !0, i(1));
            }
            if (u.charCodeAt(t) !== 93)
                throw new Error("Attribute selector didn't terminate");
            t += 1;
            var N = { type: S.Attribute, name: y, action: C, value: Q, namespace: E, ignoreCase: fe };
            r.push(N);
            break;
        }
        case 58: {
            if (u.charCodeAt(t + 1) === 58) {
                r.push({ type: S.PseudoElement, name: n(2).toLowerCase(), data: u.charCodeAt(t) === 40 ? s() : null });
                continue;
            }
            var y = n(1).toLowerCase(), E = null;
            if (u.charCodeAt(t) === 40)
                if (sn.has(y)) {
                    if (vt(u.charCodeAt(t + 1)))
                        throw new Error("Pseudo-selector ".concat(y, " cannot be quoted"));
                    if (E = [], t = A0(E, u, t + 1), u.charCodeAt(t) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(y, " (").concat(u, ")"));
                    t += 1;
                }
                else {
                    if (E = s(), cn.has(y)) {
                        var C = E.charCodeAt(0);
                        C === E.charCodeAt(E.length - 1) && vt(C) && (E = E.slice(1, -1));
                    }
                    E = su(E);
                }
            r.push({ type: S.Pseudo, name: y, data: E });
            break;
        }
        case 44: {
            w(), r = [], i(1);
            break;
        }
        default: {
            if (u.startsWith("/*", t)) {
                var C = u.indexOf("*/", t + 2);
                if (C < 0)
                    throw new Error("Comment was not terminated");
                t = C + 2, r.length === 0 && i(0);
                break;
            }
            var y = null, E = void 0;
            if (x === 42)
                t += 1, E = "*";
            else if (x === 124) {
                if (E = "", u.charCodeAt(t + 1) === 124) {
                    d(S.ColumnCombinator), i(2);
                    break;
                }
            }
            else if (v0.test(u.slice(t)))
                E = n(0);
            else
                break e;
            u.charCodeAt(t) === 124 && u.charCodeAt(t + 1) !== 124 && (y = E, u.charCodeAt(t + 1) === 42 ? (E = "*", t += 2) : E = n(1)), r.push(E === "*" ? { type: S.Universal, namespace: y } : { type: S.Tag, name: E, namespace: y });
        }
    }
} return w(), t; }
var Lt = ke(Ce(), 1);
var Se = ke(Ce(), 1);
var E0 = new Map([[S.Universal, 50], [S.Tag, 30], [S.Attribute, 1], [S.Pseudo, 0]]);
function cu(e) { return !E0.has(e.type); }
var fn = new Map([[P.Exists, 10], [P.Equals, 8], [P.Not, 7], [P.Start, 6], [P.End, 6], [P.Any, 5]]);
function St(e) { var u = e.map(T0); for (var t = 1; t < e.length; t++) {
    var r = u[t];
    if (!(r < 0))
        for (var n = t - 1; n >= 0 && r < u[n]; n--) {
            var i = e[n + 1];
            e[n + 1] = e[n], e[n] = i, u[n + 1] = u[n], u[n] = r;
        }
} }
function T0(e) { var u, t; var r = (u = E0.get(e.type)) !== null && u !== void 0 ? u : -1; return e.type === S.Attribute ? (r = (t = fn.get(e.action)) !== null && t !== void 0 ? t : 4, e.action === P.Equals && e.name === "id" && (r = 9), e.ignoreCase && (r >>= 1)) : e.type === S.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? r = 0 : Array.isArray(e.data) ? (r = Math.min.apply(Math, __spreadArray([], __read(e.data.map(function (n) { return Math.min.apply(Math, __spreadArray([], __read(n.map(T0)), false)); })), false)), r < 0 && (r = 0)) : r = 2 : r = 3), r; }
var ou = ke(Ce(), 1), ln = /[-[\]{}()*+?.,\\^$|#\s]/g;
function N0(e) { return e.replace(ln, "\\$&"); }
var dn = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function Oe(e, u) { return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!u.quirksMode : !u.xmlMode && dn.has(e.name); }
var C0 = { equals: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value; return Oe(u, t) ? (i = i.toLowerCase(), function (s) { var c = r.getAttributeValue(s, n); return c != null && c.length === i.length && c.toLowerCase() === i && e(s); }) : function (s) { return r.getAttributeValue(s, n) === i && e(s); }; }, hyphen: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value, s = i.length; return Oe(u, t) ? (i = i.toLowerCase(), function (l) { var d = r.getAttributeValue(l, n); return d != null && (d.length === s || d.charAt(s) === "-") && d.substr(0, s).toLowerCase() === i && e(l); }) : function (l) { var d = r.getAttributeValue(l, n); return d != null && (d.length === s || d.charAt(s) === "-") && d.substr(0, s) === i && e(l); }; }, element: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value; if (/\s/.test(i))
        return ou.default.falseFunc; var s = new RegExp("(?:^|\\s)".concat(N0(i), "(?:$|\\s)"), Oe(u, t) ? "i" : ""); return function (l) { var d = r.getAttributeValue(l, n); return d != null && d.length >= i.length && s.test(d) && e(l); }; }, exists: function (e, _a, _b) {
        var u = _a.name;
        var t = _b.adapter;
        return function (r) { return t.hasAttrib(r, u) && e(r); };
    }, start: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value, s = i.length; return s === 0 ? ou.default.falseFunc : Oe(u, t) ? (i = i.toLowerCase(), function (c) { var l = r.getAttributeValue(c, n); return l != null && l.length >= s && l.substr(0, s).toLowerCase() === i && e(c); }) : function (c) { var l; return !!(!((l = r.getAttributeValue(c, n)) === null || l === void 0) && l.startsWith(i)) && e(c); }; }, end: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value, s = -i.length; return s === 0 ? ou.default.falseFunc : Oe(u, t) ? (i = i.toLowerCase(), function (c) { var l; return ((l = r.getAttributeValue(c, n)) === null || l === void 0 ? void 0 : l.substr(s).toLowerCase()) === i && e(c); }) : function (c) { var l; return !!(!((l = r.getAttributeValue(c, n)) === null || l === void 0) && l.endsWith(i)) && e(c); }; }, any: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value; if (i === "")
        return ou.default.falseFunc; if (Oe(u, t)) {
        var s_1 = new RegExp(N0(i), "i");
        return function (l) { var d = r.getAttributeValue(l, n); return d != null && d.length >= i.length && s_1.test(d) && e(l); };
    } return function (s) { var c; return !!(!((c = r.getAttributeValue(s, n)) === null || c === void 0) && c.includes(i)) && e(s); }; }, not: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value; return i === "" ? function (s) { return !!r.getAttributeValue(s, n) && e(s); } : Oe(u, t) ? (i = i.toLowerCase(), function (s) { var c = r.getAttributeValue(s, n); return (c == null || c.length !== i.length || c.toLowerCase() !== i) && e(s); }) : function (s) { return r.getAttributeValue(s, n) !== i && e(s); }; } };
var hn = new Set([9, 10, 12, 13, 32]), I0 = 48, bn = 57;
function q0(e) { if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0]; if (e === "odd")
    return [2, 1]; var u = 0, t = 0, r = i(), n = s(); if (u < e.length && e.charAt(u) === "n" && (u++, t = r * (n != null ? n : 1), c(), u < e.length ? (r = i(), c(), n = s()) : r = n = 0), n === null || u < e.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(e, "')")); return [t, r * n]; function i() { return e.charAt(u) === "-" ? (u++, -1) : (e.charAt(u) === "+" && u++, 1); } function s() { var l = u, d = 0; for (; u < e.length && e.charCodeAt(u) >= I0 && e.charCodeAt(u) <= bn;)
    d = d * 10 + (e.charCodeAt(u) - I0), u++; return u === l ? null : d; } function c() { for (; u < e.length && hn.has(e.charCodeAt(u));)
    u++; } }
var At = ke(Ce(), 1);
function k0(e) { var u = e[0], t = e[1] - 1; if (t < 0 && u <= 0)
    return At.default.falseFunc; if (u === -1)
    return function (i) { return i <= t; }; if (u === 0)
    return function (i) { return i === t; }; if (u === 1)
    return t < 0 ? At.default.trueFunc : function (i) { return i >= t; }; var r = Math.abs(u), n = (t % r + r) % r; return u > 1 ? function (i) { return i >= t && i % r === n; } : function (i) { return i <= t && i % r === n; }; }
function $e(e) { return k0(q0(e)); }
var ue = ke(Ce(), 1);
function Iu(e, u) { return function (t) { var r = u.getParent(t); return r != null && u.isTag(r) && e(t); }; }
var Je = { contains: function (e, u, _a) {
        var t = _a.adapter;
        return function (n) { return e(n) && t.getText(n).includes(u); };
    }, icontains: function (e, u, _a) {
        var t = _a.adapter;
        var r = u.toLowerCase();
        return function (i) { return e(i) && t.getText(i).toLowerCase().includes(r); };
    }, "nth-child": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = $e(u);
        return n === ue.default.falseFunc ? ue.default.falseFunc : n === ue.default.trueFunc ? Iu(e, t) : function (s) { var c = t.getSiblings(s), l = 0; for (var d = 0; d < c.length && !r(s, c[d]); d++)
            t.isTag(c[d]) && l++; return n(l) && e(s); };
    }, "nth-last-child": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = $e(u);
        return n === ue.default.falseFunc ? ue.default.falseFunc : n === ue.default.trueFunc ? Iu(e, t) : function (s) { var c = t.getSiblings(s), l = 0; for (var d = c.length - 1; d >= 0 && !r(s, c[d]); d--)
            t.isTag(c[d]) && l++; return n(l) && e(s); };
    }, "nth-of-type": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = $e(u);
        return n === ue.default.falseFunc ? ue.default.falseFunc : n === ue.default.trueFunc ? Iu(e, t) : function (s) { var c = t.getSiblings(s), l = 0; for (var d = 0; d < c.length; d++) {
            var g = c[d];
            if (r(s, g))
                break;
            t.isTag(g) && t.getName(g) === t.getName(s) && l++;
        } return n(l) && e(s); };
    }, "nth-last-of-type": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = $e(u);
        return n === ue.default.falseFunc ? ue.default.falseFunc : n === ue.default.trueFunc ? Iu(e, t) : function (s) { var c = t.getSiblings(s), l = 0; for (var d = c.length - 1; d >= 0; d--) {
            var g = c[d];
            if (r(s, g))
                break;
            t.isTag(g) && t.getName(g) === t.getName(s) && l++;
        } return n(l) && e(s); };
    }, root: function (e, u, _a) {
        var t = _a.adapter;
        return function (r) { var n = t.getParent(r); return (n == null || !t.isTag(n)) && e(r); };
    }, scope: function (e, u, t, r) { var n = t.equals; return !r || r.length === 0 ? Je.root(e, u, t) : r.length === 1 ? function (i) { return n(r[0], i) && e(i); } : function (i) { return r.includes(i) && e(i); }; }, hover: wt("isHovered"), visited: wt("isVisited"), active: wt("isActive") };
function wt(e) { return function (t, r, _a) {
    var n = _a.adapter;
    var i = n[e];
    return typeof i != "function" ? ue.default.falseFunc : function (c) { return i(c) && t(c); };
}; }
var fu = { empty: function (e, _a) {
        var u = _a.adapter;
        return !u.getChildren(e).some(function (t) { return u.isTag(t) || u.getText(t) !== ""; });
    }, "first-child": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        if (u.prevElementSibling)
            return u.prevElementSibling(e) == null;
        var r = u.getSiblings(e).find(function (n) { return u.isTag(n); });
        return r != null && t(e, r);
    }, "last-child": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getSiblings(e);
        for (var n = r.length - 1; n >= 0; n--) {
            if (t(e, r[n]))
                return !0;
            if (u.isTag(r[n]))
                break;
        }
        return !1;
    }, "first-of-type": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getSiblings(e), n = u.getName(e);
        for (var i = 0; i < r.length; i++) {
            var s = r[i];
            if (t(e, s))
                return !0;
            if (u.isTag(s) && u.getName(s) === n)
                break;
        }
        return !1;
    }, "last-of-type": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getSiblings(e), n = u.getName(e);
        for (var i = r.length - 1; i >= 0; i--) {
            var s = r[i];
            if (t(e, s))
                return !0;
            if (u.isTag(s) && u.getName(s) === n)
                break;
        }
        return !1;
    }, "only-of-type": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getName(e);
        return u.getSiblings(e).every(function (n) { return t(e, n) || !u.isTag(n) || u.getName(n) !== r; });
    }, "only-child": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        return u.getSiblings(e).every(function (r) { return t(e, r) || !u.isTag(r); });
    } };
function Et(e, u, t, r) { if (t === null) {
    if (e.length > r)
        throw new Error("Pseudo-class :".concat(u, " requires an argument"));
}
else if (e.length === r)
    throw new Error("Pseudo-class :".concat(u, " doesn't have any arguments")); }
var qu = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var oe = ke(Ce(), 1);
var Ct = {};
function It(e, u) { return e === oe.default.falseFunc ? oe.default.falseFunc : function (t) { return u.isTag(t) && e(t); }; }
function qt(e, u) { var t = u.getSiblings(e); if (t.length <= 1)
    return []; var r = t.indexOf(e); return r < 0 || r === t.length - 1 ? [] : t.slice(r + 1).filter(u.isTag); }
function Nt(e) { return { xmlMode: !!e.xmlMode, lowerCaseAttributeNames: !!e.lowerCaseAttributeNames, lowerCaseTags: !!e.lowerCaseTags, quirksMode: !!e.quirksMode, cacheResults: !!e.cacheResults, pseudos: e.pseudos, adapter: e.adapter, equals: e.equals }; }
var Tt = function (e, u, t, r, n) { var i = n(u, Nt(t), r); return i === oe.default.trueFunc ? e : i === oe.default.falseFunc ? oe.default.falseFunc : function (s) { return i(s) && e(s); }; }, ku = { is: Tt, matches: Tt, where: Tt, not: function (e, u, t, r, n) { var i = n(u, Nt(t), r); return i === oe.default.falseFunc ? e : i === oe.default.trueFunc ? oe.default.falseFunc : function (s) { return !i(s) && e(s); }; }, has: function (e, u, t, r, n) { var i = t.adapter, s = Nt(t); s.relativeSelector = !0; var c = u.some(function (g) { return g.some(cu); }) ? [Ct] : void 0, l = n(u, s, c); if (l === oe.default.falseFunc)
        return oe.default.falseFunc; var d = It(l, i); if (c && l !== oe.default.trueFunc) {
        var _a = l.shouldTestNextSiblings, g_1 = _a === void 0 ? !1 : _a;
        return function (w) { if (!e(w))
            return !1; c[0] = w; var x = i.getChildren(w), y = g_1 ? __spreadArray(__spreadArray([], __read(x), false), __read(qt(w, i)), false) : x; return i.existsOne(d, y); };
    } return function (g) { return e(g) && i.existsOne(d, i.getChildren(g)); }; } };
function L0(e, u, t, r, n) { var i; var s = u.name, c = u.data; if (Array.isArray(c)) {
    if (!(s in ku))
        throw new Error("Unknown pseudo-class :".concat(s, "(").concat(c, ")"));
    return ku[s](e, c, t, r, n);
} var l = (i = t.pseudos) === null || i === void 0 ? void 0 : i[s], d = typeof l == "string" ? l : qu[s]; if (typeof d == "string") {
    if (c != null)
        throw new Error("Pseudo ".concat(s, " doesn't have any arguments"));
    var g = Ne(d);
    return ku.is(e, g, t, r, n);
} if (typeof l == "function")
    return Et(l, s, c, 1), function (g) { return l(g, c) && e(g); }; if (s in Je)
    return Je[s](e, c, t, r); if (s in fu) {
    var g_2 = fu[s];
    return Et(g_2, s, c, 2), function (w) { return g_2(w, t, c) && e(w); };
} throw new Error("Unknown pseudo-class :".concat(s)); }
function kt(e, u) { var t = u.getParent(e); return t && u.isTag(t) ? t : null; }
function U0(e, u, t, r, n) { var i = t.adapter, s = t.equals; switch (u.type) {
    case S.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case S.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case S.Attribute: {
        if (u.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!t.xmlMode || t.lowerCaseAttributeNames) && (u.name = u.name.toLowerCase()), C0[u.action](e, u, t);
    }
    case S.Pseudo: return L0(e, u, t, r, n);
    case S.Tag: {
        if (u.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var c_1 = u.name;
        return (!t.xmlMode || t.lowerCaseTags) && (c_1 = c_1.toLowerCase()), function (d) { return i.getName(d) === c_1 && e(d); };
    }
    case S.Descendant: {
        if (t.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (d) { var g = d; for (; g = kt(g, i);)
                if (e(g))
                    return !0; return !1; };
        var c_2 = new WeakSet;
        return function (d) { var g = d; for (; g = kt(g, i);)
            if (!c_2.has(g)) {
                if (i.isTag(g) && e(g))
                    return !0;
                c_2.add(g);
            } return !1; };
    }
    case "_flexibleDescendant": return function (l) { var d = l; do
        if (e(d))
            return !0;
    while (d = kt(d, i)); return !1; };
    case S.Parent: return function (l) { return i.getChildren(l).some(function (d) { return i.isTag(d) && e(d); }); };
    case S.Child: return function (l) { var d = i.getParent(l); return d != null && i.isTag(d) && e(d); };
    case S.Sibling: return function (l) { var d = i.getSiblings(l); for (var g = 0; g < d.length; g++) {
        var w = d[g];
        if (s(l, w))
            break;
        if (i.isTag(w) && e(w))
            return !0;
    } return !1; };
    case S.Adjacent: return i.prevElementSibling ? function (l) { var d = i.prevElementSibling(l); return d != null && e(d); } : function (l) { var d = i.getSiblings(l), g; for (var w = 0; w < d.length; w++) {
        var x = d[w];
        if (s(l, x))
            break;
        i.isTag(x) && (g = x);
    } return !!g && e(g); };
    case S.Universal: {
        if (u.namespace != null && u.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return e;
    }
} }
function O0(e, u, t) { var r = Lu(e, u, t); return It(r, u.adapter); }
function Lu(e, u, t) { var r = typeof e == "string" ? Ne(e) : e; return Uu(r, u, t); }
function D0(e) { return e.type === S.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(function (u) { return u.some(D0); })); }
var pn = { type: S.Descendant }, gn = { type: "_flexibleDescendant" }, mn = { type: S.Pseudo, name: "scope", data: null };
function xn(e, _a, t) {
    var e_6, _b;
    var u = _a.adapter;
    var r = !!(t != null && t.every(function (n) { var i = u.isTag(n) && u.getParent(n); return n === Ct || i && u.isTag(i); }));
    try {
        for (var e_7 = __values(e), e_7_1 = e_7.next(); !e_7_1.done; e_7_1 = e_7.next()) {
            var n = e_7_1.value;
            if (!(n.length > 0 && cu(n[0]) && n[0].type !== S.Descendant))
                if (r && !n.some(D0))
                    n.unshift(pn);
                else
                    continue;
            n.unshift(mn);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (e_7_1 && !e_7_1.done && (_b = e_7.return)) _b.call(e_7);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
function Uu(e, u, t) { var r; e.forEach(St), t = (r = u.context) !== null && r !== void 0 ? r : t; var n = Array.isArray(t), i = t && (Array.isArray(t) ? t : [t]); if (u.relativeSelector !== !1)
    xn(e, u, i);
else if (e.some(function (l) { return l.length > 0 && cu(l[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var s = !1, c = e.map(function (l) { if (l.length >= 2) {
    var _a = __read(l, 2), d = _a[0], g = _a[1];
    d.type !== S.Pseudo || d.name !== "scope" || (n && g.type === S.Descendant ? l[1] = gn : (g.type === S.Adjacent || g.type === S.Sibling) && (s = !0));
} return yn(l, u, i); }).reduce(vn, Se.default.falseFunc); return c.shouldTestNextSiblings = s, c; }
function yn(e, u, t) { var r; return e.reduce(function (n, i) { return n === Se.default.falseFunc ? Se.default.falseFunc : U0(n, i, u, t, Uu); }, (r = u.rootFunc) !== null && r !== void 0 ? r : Se.default.trueFunc); }
function vn(e, u) { return u === Se.default.falseFunc || e === Se.default.trueFunc ? e : e === Se.default.falseFunc || u === Se.default.trueFunc ? u : function (r) { return e(r) || u(r); }; }
var R0 = function (e, u) { return e === u; }, Sn = { adapter: be, equals: R0 };
function F0(e) { var u, t, r, n; var i = e != null ? e : Sn; return (u = i.adapter) !== null && u !== void 0 || (i.adapter = be), (t = i.equals) !== null && t !== void 0 || (i.equals = (n = (r = i.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && n !== void 0 ? n : R0), i; }
function Ut(e) { return function (t, r, n) { var i = F0(r); return e(t, i, n); }; }
var zi = Ut(O0), Wi = Ut(Lu), Ou = Ut(Uu);
function M0(e) { return function (t, r, n) { var i = F0(n); typeof t != "function" && (t = Lu(t, i, r)); var s = Du(r, i.adapter, t.shouldTestNextSiblings); return e(t, s, i); }; }
function Du(e, u, t) {
    if (t === void 0) { t = !1; }
    return t && (e = An(e, u)), Array.isArray(e) ? u.removeSubsets(e) : u.getChildren(e);
}
function An(e, u) { var t = Array.isArray(e) ? e.slice(0) : [e], r = t.length; for (var n = 0; n < r; n++) {
    var i = qt(t[n], u);
    t.push.apply(t, __spreadArray([], __read(i), false));
} return t; }
var $i = M0(function (e, u, t) { return e === Lt.default.falseFunc || !u || u.length === 0 ? [] : t.adapter.findAll(e, u); }), Ji = M0(function (e, u, t) { return e === Lt.default.falseFunc || !u || u.length === 0 ? null : t.adapter.findOne(e, u); });
var Fu = ke(Ce(), 1);
var wn = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function Ke(e) { return e.type !== "pseudo" ? !1 : wn.has(e.name) ? !0 : e.name === "not" && Array.isArray(e.data) ? e.data.some(function (u) { return u.some(Ke); }) : !1; }
function B0(e, u, t) { var r = u != null ? parseInt(u, 10) : NaN; switch (e) {
    case "first": return 1;
    case "nth":
    case "eq": return isFinite(r) ? r >= 0 ? r + 1 : 1 / 0 : 0;
    case "lt": return isFinite(r) ? r >= 0 ? Math.min(r, t) : 1 / 0 : 0;
    case "gt": return isFinite(r) ? 1 / 0 : 0;
    case "odd": return 2 * t;
    case "even": return 2 * t - 1;
    case "last":
    case "not": return 1 / 0;
} }
function G0(e) { for (; e.parent;)
    e = e.parent; return e; }
function Ru(e) {
    var e_8, _a;
    var u = [], t = [];
    try {
        for (var e_9 = __values(e), e_9_1 = e_9.next(); !e_9_1.done; e_9_1 = e_9.next()) {
            var r = e_9_1.value;
            r.some(Ke) ? u.push(r) : t.push(r);
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (e_9_1 && !e_9_1.done && (_a = e_9.return)) _a.call(e_9);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return [t, u];
}
var En = { type: S.Universal, namespace: null }, Tn = { type: S.Pseudo, name: "scope", data: null };
function Rt(e, u, t) {
    if (t === void 0) { t = {}; }
    return Nn([e], u, t);
}
function Nn(e, u, t) {
    if (t === void 0) { t = {}; }
    if (typeof u == "function")
        return e.some(u);
    var _a = __read(Ru(Ne(u)), 2), r = _a[0], n = _a[1];
    return r.length > 0 && e.some(Ou(r, t)) || n.some(function (i) { return H0(i, e, t).length > 0; });
}
function Cn(e, u, t, r) { var n = typeof t == "string" ? parseInt(t, 10) : NaN; switch (e) {
    case "first":
    case "lt": return u;
    case "last": return u.length > 0 ? [u[u.length - 1]] : u;
    case "nth":
    case "eq": return isFinite(n) && Math.abs(n) < u.length ? [n < 0 ? u[u.length + n] : u[n]] : [];
    case "gt": return isFinite(n) ? u.slice(n + 1) : [];
    case "even": return u.filter(function (i, s) { return s % 2 === 0; });
    case "odd": return u.filter(function (i, s) { return s % 2 === 1; });
    case "not": {
        var i_1 = new Set(In(t, u, r));
        return u.filter(function (s) { return !i_1.has(s); });
    }
} }
function In(e, u, t) { if (u.length === 0)
    return []; var _a = __read(Ru(e), 2), r = _a[0], n = _a[1], i; if (r.length) {
    var s = Dt(u, r, t);
    if (n.length === 0)
        return s;
    s.length && (i = new Set(s));
} for (var s = 0; s < n.length && (i == null ? void 0 : i.size) !== u.length; s++) {
    var c = n[s];
    if ((i ? u.filter(function (g) { return k(g) && !i.has(g); }) : u).length === 0)
        break;
    var d = H0(c, u, t);
    if (d.length)
        if (i)
            d.forEach(function (g) { return i.add(g); });
        else {
            if (s === n.length - 1)
                return d;
            i = new Set(d);
        }
} return typeof i != "undefined" ? i.size === u.length ? u : u.filter(function (s) { return i.has(s); }) : []; }
function H0(e, u, t) { var r; if (e.some(Ue)) {
    var n = (r = t.root) !== null && r !== void 0 ? r : G0(u[0]), i = qe(le({}, t), { context: u, relativeSelector: !1 });
    return e.push(Tn), Mu(n, e, i, !0, u.length);
} return Mu(u, e, t, !1, u.length); }
function Ft(e, u, t, r) {
    if (t === void 0) { t = {}; }
    if (r === void 0) { r = 1 / 0; }
    if (typeof e == "function")
        return P0(u, e);
    var _a = __read(Ru(Ne(e)), 2), n = _a[0], i = _a[1], s = i.map(function (c) { return Mu(u, c, t, !0, r); });
    return n.length && s.push(Ot(u, n, t, r)), s.length === 0 ? [] : s.length === 1 ? s[0] : xt(s.reduce(function (c, l) { return __spreadArray(__spreadArray([], __read(c), false), __read(l), false); }));
}
function Mu(e, u, t, r, n) { var i = u.findIndex(Ke), s = u.slice(0, i), c = u[i], l = u.length - 1 === i ? n : 1 / 0, d = B0(c.name, c.data, l); if (d === 0)
    return []; var w = (s.length === 0 && !Array.isArray(e) ? Au(e).filter(k) : s.length === 0 ? (Array.isArray(e) ? e : [e]).filter(k) : r || s.some(Ue) ? Ot(e, [s], t, d) : Dt(e, [s], t)).slice(0, d), x = Cn(c.name, w, c.data, t); if (x.length === 0 || u.length === i + 1)
    return x; var y = u.slice(i + 1), E = y.some(Ue); if (E) {
    if (Ue(y[0])) {
        var C = y[0].type;
        (C === S.Sibling || C === S.Adjacent) && (x = Du(x, be, !0)), y.unshift(En);
    }
    t = qe(le({}, t), { relativeSelector: !1, rootFunc: function (C) { return x.includes(C); } });
}
else
    t.rootFunc && t.rootFunc !== Fu.trueFunc && (t = qe(le({}, t), { rootFunc: Fu.trueFunc })); return y.some(Ke) ? Mu(x, y, t, !1, n) : E ? Ot(x, [y], t, n) : Dt(x, [y], t); }
function Ot(e, u, t, r) { var n = Ou(u, t, e); return P0(e, n, r); }
function P0(e, u, t) {
    if (t === void 0) { t = 1 / 0; }
    var r = Du(e, be, u.shouldTestNextSiblings);
    return Eu(function (n) { return k(n) && u(n); }, r, !0, t);
}
function Dt(e, u, t) { var r = (Array.isArray(e) ? e : [e]).filter(k); if (r.length === 0)
    return r; var n = Ou(u, t); return n === Fu.trueFunc ? r : r.filter(n); }
function _0(e) { var u = /^(?:([a-zA-Z][\w+.-]*):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/.exec(e) || []; return { scheme: u[1], auth: u[2], path: u[3] || "", query: u[4], frag: u[5] }; }
function Mt(e) { var u = [], t = e.split("/"); for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n === ".." ? (u.length > 1 && u.pop(), r === t.length - 1 && u.push("")) : n === "." ? r === t.length - 1 && u.push("") : u.push(n);
} return u.join("/"); }
function Gu(e, u) { u = u == null ? "" : String(u).trim(); var t = _0(u); if (t.scheme || !e)
    return u; var r = _0(String(e)); if (!r.scheme)
    return u; var n = r.auth, i, s; if (t.auth !== void 0)
    n = t.auth, i = Mt(t.path), s = t.query;
else if (!t.path)
    i = r.path, s = t.query !== void 0 ? t.query : r.query;
else {
    if (t.path.charAt(0) === "/")
        i = Mt(t.path);
    else {
        var c = n !== void 0 && !r.path ? "/" : r.path.slice(0, r.path.lastIndexOf("/") + 1);
        i = Mt(c + t.path);
    }
    s = t.query;
} return n !== void 0 && i.charAt(0) !== "/" && (i = "/" + i), r.scheme + ":" + (n !== void 0 ? "//" + n : "") + i + (s !== void 0 ? "?" + s : "") + (t.frag !== void 0 ? "#" + t.frag : ""); }
var Bu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function V0(e) { if (typeof btoa == "function")
    return btoa(e); var u = ""; for (var t = 0; t < e.length; t += 3) {
    var r = e.charCodeAt(t), n = e.charCodeAt(t + 1), i = e.charCodeAt(t + 2), s = r << 16 | (n || 0) << 8 | (i || 0);
    u += Bu[s >> 18 & 63] + Bu[s >> 12 & 63] + (t + 1 < e.length ? Bu[s >> 6 & 63] : "=") + (t + 2 < e.length ? Bu[s & 63] : "=");
} return u; }
var qn = function (e, u, t) { return Ft(e, u, t); }, $0 = function (e, u, t) { return Ft(e, u, t, 1)[0] || null; }, J0 = /[\s ]+/g, j0 = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), kn = { containsOwn: function (e, u) { return Gt(e).toLowerCase().includes(String(u).toLowerCase()); }, matches: function (e, u) { return z0(u).test(Bt(e)); }, matchesOwn: function (e, u) { return z0(u).test(Gt(e)); }, containsData: function (e, u) { return Ee(e).includes(u); }, "contains-ci": function (e, u) { return Bt(e).toLowerCase().includes(String(u).toLowerCase()); } };
function z0(e) { try {
    return new RegExp(e);
}
catch (u) {
    return /$^/;
} }
var Hu = { pseudos: kn, xmlMode: !1, lowerCaseTags: !0 };
function Pu(e) { return String(e).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function Bt(e) { if (!e)
    return ""; if (e.type === "text")
    return e.data; var u = "", t = function (r) {
    var e_10, _a;
    try {
        for (var _b = __values(r.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var n = _c.value;
            n.type === "text" ? u += n.data : (n.type === "tag" || n.type === "script" || n.type === "style") && (n.name === "br" ? u += " " : n.type === "tag" && (j0.has(n.name) && (u += " "), t(n), j0.has(n.name) && (u += " ")));
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_10) throw e_10.error; }
    }
}; return t(e), u.replace(J0, " ").trim(); }
function Gt(e) {
    var e_11, _a;
    var u = "";
    try {
        for (var _b = __values(e.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var t = _c.value;
            t.type === "text" && (u += t.data);
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return u.replace(J0, " ").trim();
}
function K0(e, u) { if (!u)
    return ""; try {
    return Gu(e, u);
}
catch (t) {
    return e ? "" : u;
} }
var De = (function () {
    function e(u, t) {
        this.node = u, this.doc = t;
    }
    Object.defineProperty(e.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    e.prototype.select = function (u) { return pe.of(qn(Pu(u), this.node, Hu), this.doc); };
    e.prototype.selectFirst = function (u) { var t = $0(Pu(u), this.node, Hu); return t ? new e(t, this.doc) : null; };
    e.prototype.is = function (u) { return Rt(this.node, Pu(u), Hu); };
    e.prototype.text = function () { return Bt(this.node); };
    e.prototype.ownText = function () { return Gt(this.node); };
    e.prototype.wholeText = function () { return Ee(this.node); };
    e.prototype.data = function () { return (this.node.children || []).filter(function (u) { return u.type === "text"; }).map(function (u) { return u.data; }).join(""); };
    e.prototype.html = function () { return (this.node.children || []).map(function (u) { return ze(u, { decodeEntities: !1 }); }).join("").trim(); };
    e.prototype.outerHtml = function () { return ze(this.node, { decodeEntities: !1 }); };
    e.prototype.toString = function () { return this.outerHtml(); };
    e.prototype.tagName = function () { return this.node.name || ""; };
    e.prototype.nodeName = function () { return this.node.name || "#" + this.node.type; };
    e.prototype.id = function () { return this.attr("id"); };
    e.prototype.className = function () { return this.attr("class"); };
    e.prototype.classNames = function () { return this.className().split(/\s+/).filter(Boolean); };
    e.prototype.hasClass = function (u) { return this.classNames().includes(u); };
    e.prototype.attr = function (u, t) { if (t !== void 0)
        return this.node.attribs && (this.node.attribs[u] = String(t)), this; if (!this.node.attribs)
        return ""; if (u.startsWith("abs:"))
        return K0(this.baseUri, this.node.attribs[u.slice(4)] || ""); var r = this.node.attribs[u]; return r == null ? "" : r; };
    e.prototype.absUrl = function (u) { return this.attr("abs:" + u); };
    e.prototype.hasAttr = function (u) { return !!(this.node.attribs && (u.startsWith("abs:") ? u.slice(4) : u) in this.node.attribs); };
    e.prototype.removeAttr = function (u) { return this.node.attribs && delete this.node.attribs[u], this; };
    e.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    e.prototype.dataset = function () {
        var e_12, _a;
        var u = {};
        try {
            for (var _b = __values(Object.entries(this.node.attribs || {})), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), t = _d[0], r = _d[1];
                t.startsWith("data-") && (u[t.slice(5)] = r);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return u;
    };
    e.prototype.val = function () { return this.attr("value"); };
    e.prototype.parent = function () { var u = this.node.parent; return u && u.type !== "root" ? new e(u, this.doc) : null; };
    e.prototype.parents = function () { var u = [], t = this.node.parent; for (; t && t.type !== "root";)
        u.push(t), t = t.parent; return pe.of(u, this.doc); };
    e.prototype.closest = function (u) { var t = this.node; for (; t && t.type !== "root";) {
        if (t.type === "tag" && Rt(t, Pu(u), Hu))
            return new e(t, this.doc);
        t = t.parent;
    } return null; };
    e.prototype.children = function () { return pe.of((this.node.children || []).filter(k), this.doc); };
    e.prototype.child = function (u) { var t = (this.node.children || []).filter(k)[u]; return t ? new e(t, this.doc) : null; };
    e.prototype.childrenSize = function () { return (this.node.children || []).filter(k).length; };
    e.prototype.nextElementSibling = function () { var u = bt(this.node); return u ? new e(u, this.doc) : null; };
    e.prototype.previousElementSibling = function () { var u = pt(this.node); return u ? new e(u, this.doc) : null; };
    e.prototype.siblingElements = function () {
        var _this = this;
        return pe.of(wu(this.node).filter(function (u) { return u !== _this.node && k(u); }), this.doc);
    };
    e.prototype.elementSiblingIndex = function () { return wu(this.node).filter(k).indexOf(this.node); };
    e.prototype.getElementsByTag = function (u) { return this.select(u); };
    e.prototype.getElementsByClass = function (u) { return this.select("." + u); };
    e.prototype.getElementById = function (u) { return this.selectFirst("#" + u); };
    e.prototype.remove = function () { return ve(this.node), this; };
    e.prototype.empty = function () { return this.node.children = [], this; };
    e.prototype.textNodes = function () { return (this.node.children || []).filter(function (u) { return u.type === "text"; }).map(function (u) { return ({ text: function () { return u.data; }, toString: function () { return u.data; } }); }); };
    e.prototype.title = function () { var u = this.selectFirst("title"); return u ? u.text() : ""; };
    e.prototype.body = function () { return this.selectFirst("body") || this; };
    e.prototype.head = function () { return this.selectFirst("head") || this; };
    e.prototype.location = function () { return this.baseUri; };
    return e;
}()), Pt = Object.create(Array.prototype), pe = { of: Ht, prototype: Pt };
function Ht(e, u) {
    var e_13, _a;
    var t = [];
    try {
        for (var _b = __values(e || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var r = _c.value;
            t.push(r instanceof De ? r : new De(r, u));
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return Object.setPrototypeOf(t, Pt), t;
}
var W0 = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (e) { return this[e] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (e) { return pe.of(this[e] ? [this[e]] : [], null); }, text: function () { return this.map(function (e) { return e.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (e) { return e.text(); }).filter(Boolean); }, html: function () {
        return this.map(function (e) { return e.html(); }).join("\n");
    }, outerHtml: function () {
        return this.map(function (e) { return e.outerHtml(); }).join("\n");
    }, toString: function () { return this.outerHtml(); }, attr: function (e, u) {
        var e_14, _a;
        if (u !== void 0)
            return this.forEach(function (t) { return t.attr(e, u); }), this;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                if (t.hasAttr(e))
                    return t.attr(e);
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_14) throw e_14.error; }
        }
        return "";
    }, eachAttr: function (e) { return this.filter(function (u) { return u.hasAttr(e); }).map(function (u) { return u.attr(e); }); }, hasAttr: function (e) { return this.some(function (u) { return u.hasAttr(e); }); }, hasClass: function (e) { return this.some(function (u) { return u.hasClass(e); }); }, val: function () { return this.length ? this[0].val() : ""; }, select: function (e) {
        var e_15, _a, e_16, _b;
        var u = Ht([]), t = new Set;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var r = _d.value;
                try {
                    for (var _f = (e_16 = void 0, __values(r.select(e))), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var n = _g.value;
                        t.has(n.node) || (t.add(n.node), u.push(n));
                    }
                }
                catch (e_16_1) { e_16 = { error: e_16_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_16) throw e_16.error; }
                }
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return u;
    }, selectFirst: function (e) {
        var e_17, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var u = _c.value;
                var t = u.selectFirst(e);
                if (t)
                    return t;
            }
        }
        catch (e_17_1) { e_17 = { error: e_17_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_17) throw e_17.error; }
        }
        return null;
    }, is: function (e) { return this.some(function (u) { return u.is(e); }); }, not: function (e) { return pe.of(this.filter(function (u) { return !u.is(e); }), null); }, parents: function () {
        var e_18, _a;
        var e = Ht([]);
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var u = _c.value;
                e.push.apply(e, __spreadArray([], __read(u.parents()), false));
            }
        }
        catch (e_18_1) { e_18 = { error: e_18_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_18) throw e_18.error; }
        }
        return e;
    }, next: function () { return pe.of(this.map(function (e) { return e.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return pe.of(this.map(function (e) { return e.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (e) { return e.remove(); }), this; }, empty: function () { return this.forEach(function (e) { return e.empty(); }), this; }, removeAttr: function (e) { return this.forEach(function (u) { return u.removeAttr(e); }), this; } };
try {
    for (var _b = __values(Object.keys(W0)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var e = _c.value;
        Object.defineProperty(Pt, e, { value: W0[e], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
function _u(e, u) { var t = y0(String(e == null ? "" : e), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), r = new De(t, null); r.doc = r, r.__base = u || ""; var n = $0("base[href]", t); return n && n.attribs.href && (r.__base = K0(r.__base, n.attribs.href)), r; }
function X0(e, u) { var t = new Set((u || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), r = _u(e), n = function (i) {
    var e_19, _a, e_20, _b;
    try {
        for (var _c = __values((i.children || []).slice()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var s = _d.value;
            if (s.type === "script" || s.type === "style" || s.type === "comment") {
                ve(s);
                continue;
            }
            if (s.type === "tag" && (n(s), !t.has(s.name))) {
                var c = (s.children || []).slice();
                try {
                    for (var c_3 = (e_20 = void 0, __values(c)), c_3_1 = c_3.next(); !c_3_1.done; c_3_1 = c_3.next()) {
                        var l = c_3_1.value;
                        gt(s, l);
                    }
                }
                catch (e_20_1) { e_20 = { error: e_20_1 }; }
                finally {
                    try {
                        if (c_3_1 && !c_3_1.done && (_b = c_3.return)) _b.call(c_3);
                    }
                    finally { if (e_20) throw e_20.error; }
                }
                ve(s);
            }
        }
    }
    catch (e_19_1) { e_19 = { error: e_19_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_19) throw e_19.error; }
    }
}; return n(r.node), ze(r.node.children, { decodeEntities: !1 }); }
var lu = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function Ln(e) { if (typeof Buffer != "undefined")
    return Buffer.from(e).toString("base64"); var u = ""; for (var t = 0; t < e.length; t++)
    u += String.fromCharCode(e[t]); return V0(u); }
function Q0(e) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(e) : Uint8Array.from(unescape(encodeURIComponent(e)), function (u) { return u.charCodeAt(0); }); }
function Un(e) { var u = ""; for (var t = 0; t < e.length; t++) {
    var r = e.charCodeAt(t);
    if (r < 128) {
        u += e[t];
        continue;
    }
    if (r === 128) {
        u += "€";
        continue;
    }
    var n = e.charCodeAt(t + 1);
    r >= 129 && r <= 254 && n >= 64 && n <= 254 && n !== 127 ? (u += __GBK_TABLE[(r - 129) * 190 + (n - 64) - (n > 127 ? 1 : 0)], t++) : u += "�";
} return u; }
var _t = (function () {
    function _t(u, t) {
        this.status = u.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = u.statusText || String(this.status), this.url = u.url || t.url, this.headers = u.headers || {}, this._raw = u, this.request = { url: t.url, headers: t.headers || {} };
    }
    _t.prototype.header = function (u) { var t = Object.keys(this.headers).find(function (r) { return r.toLowerCase() === String(u).toLowerCase(); }); return t ? this.headers[t] : ""; };
    _t.prototype.text = function (u) { if (u && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(u).toLowerCase()).decode(this._raw.bytes);
        }
        catch (r) { } var t = this._raw.text == null ? "" : String(this._raw.text); return u || (u = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), u && /^(gbk|gb2312|gb18030)$/i.test(String(u)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(t) && !/[^\x00-\xff]/.test(t) ? Un(t) : t; };
    _t.prototype.string = function (u) { return this.text(u); };
    _t.prototype.html = function (u) { return _u(this.text(u), this.url); };
    _t.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (u) {
        return null;
    } };
    _t.prototype.base64 = function () { return Ln(this._raw.bytes || Q0(this.text())); };
    _t.prototype.blob = function () { var u = this; return { size: (this._raw.bytes || Q0(this.text())).length, type: this.header("content-type"), base64: function () { return u.base64(); } }; };
    return _t;
}());
function On(e) {
    var e_21, _a;
    var u = {};
    if (!e)
        return u;
    if (typeof e.forEach == "function" && !Array.isArray(e) && typeof e.entries == "function")
        return e.forEach(function (t, r) { u[r] = t; }), u;
    try {
        for (var _b = __values(Object.keys(e)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var t = _c.value;
            u[t] = String(e[t]);
        }
    }
    catch (e_21_1) { e_21 = { error: e_21_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_21) throw e_21.error; }
    }
    return u;
}
function Z0(e, u) { var t = function (s) { return ({ getItem: function (c) { var l = e.storageGet(s + c); return l == null ? null : l; }, setItem: function (c, l) { return e.storageSet(s + c, l == null ? null : String(l)); }, removeItem: function (c) { return e.storageSet(s + c, null); }, clear: function () { return e.storageClear && e.storageClear(s); } }); }, r = "__cookie__", n = {}; n.Response = { success: function (s, c) { return ({ code: 0, data: s === void 0 ? null : s, data2: c === void 0 ? null : c }); }, error: function (s) { return ({ code: 1, data: s == null ? "" : String(s) }); } }, n.fetch = function (c, l) {
    return __awaiter(this, void 0, void 0, function () { var d, C, g, w, x, C, y, E, C_1; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                l = l || {};
                d = String(c);
                if (l.queries) {
                    C = Object.entries(l.queries).map(function (_a) {
                        var _b = __read(_a, 2), J = _b[0], Q = _b[1];
                        return encodeURIComponent(J) + "=" + encodeURIComponent(Q);
                    }).join("&");
                    C && (d += (d.includes("?") ? "&" : "?") + C);
                }
                g = Object.assign({ "User-Agent": lu }, On(l.headers)), w = e.storageGet(r);
                w && !Object.keys(g).some(function (C) { return C.toLowerCase() === "cookie"; }) && (g.Cookie = w);
                x = l.body;
                if (x != null && typeof x == "object") {
                    C = Object.keys(g).find(function (J) { return J.toLowerCase() === "content-type"; });
                    C && /json/i.test(g[C]) ? x = JSON.stringify(x) : (x = Object.entries(x).map(function (_a) {
                        var _b = __read(_a, 2), J = _b[0], Q = _b[1];
                        return encodeURIComponent(J) + "=" + encodeURIComponent(Q);
                    }).join("&"), C || (g["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                y = { url: d, method: (l.method || (x != null ? "POST" : "GET")).toUpperCase(), headers: g, body: x, timeout: l.timeout };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, e.request(y)];
            case 2:
                E = _a.sent();
                return [3, 4];
            case 3:
                C_1 = _a.sent();
                E = { status: 0, url: d, headers: {}, text: "", error: String(C_1 && C_1.message || C_1) };
                return [3, 4];
            case 4: return [2, new _t(E, y)];
        }
    }); });
}, n.Http = { get: function (s) { return Y0(n, "GET", s); }, post: function (s) { return Y0(n, "POST", s); } }, n.Html = { parse: function (s, c) { return _u(s, c || ""); }, clean: function (s, c) { return X0(s, c); } }, n.localStorage = t("ls:"), n.cacheStorage = t("cs:"), n.localConfig = { getItem: function (s) { return e.config(s); } }, n.localCookie = { setCookie: function (s) { e.storageSet(r, String(s).split(";")[0]); }, getCookie: function () { return e.storageGet(r) || ""; } }, n.sleep = function (s) { return new Promise(function (c) { return typeof setTimeout == "function" ? setTimeout(c, Math.min(Number(s) || 0, 1e4)) : c(); }); }; var i = function () {
    var s = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        s[_i] = arguments[_i];
    }
    try {
        e.log && e.log(s.map(function (c) { return typeof c == "string" ? c : JSON.stringify(c); }).join(" "));
    }
    catch (c) { }
}; return n.Log = { log: i }, n.console = { log: i, error: i, warn: i, info: i }, n.Console = n.console, n.log = i, n.UserAgent = { system: function () { return lu; }, chrome: function () { return lu; }, android: function () { return lu; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, n.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (e.name || "host") + ")"); } }, n.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, n.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, n.Elements = pe, n.Element = De, n.__meta = u, n; }
function Y0(e, u, t) { var r = { method: u, url: t, headers: {}, body: void 0, queries: void 0 }, n = { headers: function (i) { return Object.assign(r.headers, i || {}), n; }, header: function (i, s) { return r.headers[i] = s, n; }, params: function (i) { return r.queries = i, n; }, queries: function (i) { return r.queries = i, n; }, body: function (i) { return r.body = i, n; }, html: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).html(i)];
            }
        }); });
    }, string: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(i)];
            }
        }); });
    }, text: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(i)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).json()];
            }
        }); });
    } }; return n; }
function Re(e, u) { if (!u)
    return ""; if (u = String(u).trim(), /^data:|^blob:/.test(u))
    return u; if (u.startsWith("//"))
    return "https:" + u; if (typeof __abs == "function")
    return __abs(e, u); try {
    return Gu(e, u);
}
catch (t) {
    return u;
} }
var F = function (e) { return e == null ? "" : String(e); }, Dn = function (e) { return e.filter(function (u, t) { return u && e.indexOf(u) === t; }); }, Vu = (function () {
    function class_1(u) {
        var t = u.meta, r = u.scripts, n = u.host;
        this.meta = t, this.host = n, this.env = u.env || Z0(n, t), this.scripts = r, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return F(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.has = function (u) { return !!this.scripts[u]; };
    class_1.prototype.run = function (u) {
        var t = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            t[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var r, n, i, s;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = this.scripts[u];
                        if (!r)
                            throw new Error("script " + u + " missing");
                        n = function (c) { var l = _this.host.config(c); return l == null ? (_this.meta.configDefaults || {})[c] : l; };
                        return [4, r(this.env, n)];
                    case 1:
                        i = _a.sent();
                        if (typeof i != "function")
                            throw new Error(u + ": execute() not defined");
                        return [4, i.apply(void 0, __spreadArray([], __read(t.map(F)), false))];
                    case 2:
                        s = _a.sent();
                        if (!s)
                            throw new Error(u + ": empty result");
                        if (s.code !== 0)
                            throw new Error(u + ": " + F(s.data || "error"));
                        return [2, s];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (u) { return F(u).replace(/\.js$/, ""); };
    class_1.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () { var u, _a, t_1, t_2; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (this.cache.tabs)
                        return [2, this.cache.tabs];
                    u = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    _a = this.has("home");
                    if (!_a) return [3, 3];
                    return [4, this.run("home")];
                case 2:
                    _a = (u = (_b.sent()).data || []);
                    _b.label = 3;
                case 3:
                    _a;
                    return [3, 5];
                case 4:
                    t_1 = _b.sent();
                    this.host.log && this.host.log("home: " + t_1.message);
                    return [3, 5];
                case 5:
                    if (!(!u.length && this.has("genre"))) return [3, 9];
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4, this.run("genre")];
                case 7:
                    u = ((_b.sent()).data || []).slice(0, 2);
                    return [3, 9];
                case 8:
                    t_2 = _b.sent();
                    return [3, 9];
                case 9: return [2, (this.cache.tabs = u.filter(function (t) { return t && t.script; }), this.cache.tabs)];
            }
        }); });
    };
    class_1.prototype.list = function (u, t, r) {
        return __awaiter(this, void 0, void 0, function () {
            var n, i, s, c, l;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        n = u + "|" + t;
                        r = Math.max(1, r | 0);
                        i = r === 1 ? "" : this.tokens[n + "|" + r];
                        if (r > 1 && i == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(u, t, i)];
                    case 1:
                        s = _a.sent(), c = F(s.data2);
                        c && (this.tokens[n + "|" + (r + 1)] = c);
                        l = (s.data || []).filter(Boolean).map(function (d) { return ({ name: F(d.name).trim(), link: Re(d.host || _this.base + "/", d.link), cover: Re(d.host || _this.base + "/", d.cover), description: F(d.description), tag: F(d.tag) }); }).filter(function (d) { return d.name && d.link; });
                        return [2, { items: l, hasNext: !!c && l.length > 0 }];
                }
            });
        });
    };
    class_1.prototype.popular = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _a.sent();
                    return [2, t[0] ? this.list(this.scriptFile(t[0].script), F(t[0].input), u) : this.search("", u)];
            }
        }); });
    };
    class_1.prototype.latest = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _a.sent(), r = t[1] || t[0];
                    return [2, r ? this.list(this.scriptFile(r.script), F(r.input), u) : this.search("", u)];
            }
        }); });
    };
    class_1.prototype.search = function (u, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, this.has("search") ? this.list("search", u, t) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.run("detail", u)];
                case 1:
                    t = (_a.sent()).data || {}, r = [].concat(t.genres || [], t.tags || []).map(function (n) { return typeof n == "string" ? n : n && n.title; }).filter(Boolean);
                    return [2, { name: F(t.name).trim(), cover: Re(t.host || this.base + "/", t.cover), author: F(t.author).trim(), description: er(F(t.description)), detail: er(F(t.detail)), ongoing: t.ongoing !== !1 && t.ongoing !== "false", genres: Dn(r.map(function (n) { return String(n).trim(); })), url: u, format: F(t.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var t, r, r_1, r_1_1, n, _a, _b, e_22_1, _c;
            var e_22, _d;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        t = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", u)];
                    case 1:
                        r = (_f.sent()).data || [u];
                        _f.label = 2;
                    case 2:
                        _f.trys.push([2, 7, 8, 9]);
                        r_1 = __values(r), r_1_1 = r_1.next();
                        _f.label = 3;
                    case 3:
                        if (!!r_1_1.done) return [3, 6];
                        n = r_1_1.value;
                        _b = (_a = t).concat;
                        return [4, this.run("toc", F(n))];
                    case 4:
                        t = _b.apply(_a, [(_f.sent()).data || []]);
                        _f.label = 5;
                    case 5:
                        r_1_1 = r_1.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_22_1 = _f.sent();
                        e_22 = { error: e_22_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (r_1_1 && !r_1_1.done && (_d = r_1.return)) _d.call(r_1);
                        }
                        finally { if (e_22) throw e_22.error; }
                        return [7];
                    case 9: return [3, 13];
                    case 10:
                        _c = this.has("toc");
                        if (!_c) return [3, 12];
                        return [4, this.run("toc", u)];
                    case 11:
                        _c = (t = (_f.sent()).data || []);
                        _f.label = 12;
                    case 12:
                        _c;
                        _f.label = 13;
                    case 13: return [2, t.filter(function (r) { return r && r.url && r.type !== "section"; }).map(function (r, n) { return ({ name: F(r.name).trim() || "#" + (n + 1), url: Re(r.host || _this.base + "/", r.url), pay: !!(r.pay || r.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var t, _a, _b, r, n;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.has("chap") && this.meta.type === "comic")) return [3, 2];
                        return [4, this.run("chap", u)];
                    case 1:
                        _a = t = (_c.sent()).data;
                        return [3, 6];
                    case 2:
                        if (!this.has("page")) return [3, 4];
                        return [4, this.run("page", u)];
                    case 3:
                        _b = t = (_c.sent()).data;
                        return [3, 5];
                    case 4:
                        _b = t = [u];
                        _c.label = 5;
                    case 5:
                        _a = _b;
                        _c.label = 6;
                    case 6:
                        _a, typeof t == "string" && (t = t.split(/[\n,]+/));
                        r = function (i) { return !i || /^data:|loading|lazy|blank|placeholder|spacer|\/nocover|1x1\./i.test(String(i)); }, n = function (i) { if (typeof i == "string")
                            return i; if (!i)
                            return ""; var s = i.link || i.url || i.data, c = Array.isArray(i.fallback) ? i.fallback.filter(Boolean) : []; return r(s) && c.length ? c[0] : s; };
                        return [2, (t || []).map(function (i) { return Re(_this.base + "/", n(i)); }).filter(Boolean)];
                }
            });
        });
    };
    class_1.prototype.content = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.run("chap", u)];
                case 1:
                    t = _a.sent();
                    return [2, { html: F(t.data), title: F(t.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var t, n, r, t_3, t_3_1, n, i, s, s_2, s_2_1, c, i_2, e_23_1;
            var e_23, _a, e_24, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        t = [{ title: "Default", data: u }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", u)];
                    case 1:
                        n = (_c.sent()).data;
                        Array.isArray(n) && n.length && (t = n.map(function (i) { return typeof i == "string" ? { title: "Server", data: i } : { title: F(i.title || i.name || "Server"), data: F(i.data || i.url || i.link) }; }));
                        _c.label = 2;
                    case 2:
                        r = [];
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 10, 11, 12]);
                        t_3 = __values(t), t_3_1 = t_3.next();
                        _c.label = 4;
                    case 4:
                        if (!!t_3_1.done) return [3, 9];
                        n = t_3_1.value;
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 7, , 8]);
                        return [4, this.run("track", n.data)];
                    case 6:
                        i = (_c.sent()).data || {}, s = Array.isArray(i) ? i : [i];
                        try {
                            for (s_2 = (e_24 = void 0, __values(s)), s_2_1 = s_2.next(); !s_2_1.done; s_2_1 = s_2.next()) {
                                c = s_2_1.value;
                                !c || !c.data || c.type !== "webview" && r.push({ url: Re(c.host || this.base + "/", c.data), quality: n.title + (c.quality ? " " + c.quality : ""), headers: c.headers || { Referer: this.base + "/" }, subtitles: (c.subtitles || (c.subtitle ? [{ data: c.subtitle, label: "Sub" }] : [])).map(function (l) { return ({ file: Re(_this.base + "/", l.data || l.file), label: F(l.label || l.language || "Sub") }); }), mimeType: F(c.mimeType) });
                            }
                        }
                        catch (e_24_1) { e_24 = { error: e_24_1 }; }
                        finally {
                            try {
                                if (s_2_1 && !s_2_1.done && (_b = s_2.return)) _b.call(s_2);
                            }
                            finally { if (e_24) throw e_24.error; }
                        }
                        return [3, 8];
                    case 7:
                        i_2 = _c.sent();
                        this.host.log && this.host.log("track " + n.title + ": " + i_2.message);
                        return [3, 8];
                    case 8:
                        t_3_1 = t_3.next();
                        return [3, 4];
                    case 9: return [3, 12];
                    case 10:
                        e_23_1 = _c.sent();
                        e_23 = { error: e_23_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (t_3_1 && !t_3_1.done && (_a = t_3.return)) _a.call(t_3);
                        }
                        finally { if (e_23) throw e_23.error; }
                        return [7];
                    case 12: return [2, r];
                }
            });
        });
    };
    return class_1;
}());
function er(e) {
    return String(e).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
var Ae = { id: "webtruyendich", name: "Web Truyện Dịch", source: "https://webtruyendich.com/", type: "novel", locale: "vi_VN", nsfw: !1, version: 1, config: {}, configDefaults: {}, itemType: 2, lnId: "kiritokmn.webtruyendich", lnIcon: "", lnVersion: "1.1.1" }, ur = { home: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, s, c, l, d, g, w, x, y, E, C, J, Q, fe) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function j(a) { return !a || (a = String(a).trim(), !a) ? "" : a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http://") === 0 || a.indexOf("https://") === 0 ? a.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, m) : a.charAt(0) === "/" ? m + a : m + "/" + a; } function Ie(a) { if (!a)
                                        return ""; a = j(a); try {
                                        var o = new URL(a);
                                        return o.pathname = o.pathname.split("/").map(function (f) { try {
                                            return encodeURIComponent(decodeURIComponent(f));
                                        }
                                        catch (h) {
                                            return encodeURIComponent(f);
                                        } }).join("/"), o.toString() + "";
                                    }
                                    catch (f) {
                                        return encodeURI(a) + "";
                                    } } function ge(a) { return a ? String(a).replace(/\s+/g, " ").trim() : ""; } function R(a) { return a ? (a = String(a).trim(), a.indexOf("http") === 0 ? a : a.indexOf("//") === 0 ? "https:" + a : m + (a.indexOf("/") === 0 ? "" : "/") + a) : ""; } function me(a) { if (!a)
                                        return null; var o = String(a.title || a.name || a.novel_title || "").trim(); o && (o = o.replace(/^Bìa truyện\s+/i, "").trim()); var f = String(a.url || a.slug || a.novel_slug || "").trim(), h = f.indexOf("http") === 0 ? f : m + "/truyen/" + f, v = R(a.thumbnail || a.cover || a.image || ""), p = []; return (a.author || a.novel_author) && p.push(a.author || a.novel_author), a.genre_name && p.push(a.genre_name), (a.status || a.novel_status) && p.push(a.status || a.novel_status), a.max_chapters && p.push(a.max_chapters + " chương"), { name: o, link: R(h), cover: v, description: p.join(" · "), host: m }; } function xe(a, o) {
                                        return __awaiter(this, void 0, void 0, function () { var f, h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    o || (o = {});
                                                    f = { "User-Agent": L, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.8", Referer: m + "/" };
                                                    if (o.headers)
                                                        for (h in o.headers)
                                                            f[h] = o.headers[h];
                                                    o.headers = f;
                                                    return [4, t(a, o)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function M() {
                                        return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_a) {
                                            a = [{ title: "Truyện Mới Cập Nhật", input: "/tim-truyen?sort=update", script: "gen.js" }, { title: "Xem Nhiều Tuần", input: "/tim-truyen?sort=view-weekly", script: "gen.js" }, { title: "Xem Nhiều Tháng", input: "/tim-truyen?sort=view-monthly", script: "gen.js" }, { title: "Đề Cử Tuần", input: "/tim-truyen?sort=push-weekly", script: "gen.js" }, { title: "Đề Cử Tháng", input: "/tim-truyen?sort=push-monthly", script: "gen.js" }, { title: "Bán Chạy", input: "/xep-hang/ban-chay", script: "gen.js" }, { title: "Bảng Xếp Hạng Đọc", input: "/xep-hang/chi-so-doc", script: "gen.js" }];
                                            return [2, I.success(a)];
                                        }); });
                                    } var N, L, _, m, I; return __generator(this, function (_a) {
                                        N = "https://webtruyendich.com", L = "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36", _ = "Vietphrase";
                                        try {
                                            typeof CONFIG_URL != "undefined" && CONFIG_URL && (N = CONFIG_URL + ""), typeof CONFIG_UA != "undefined" && CONFIG_UA && (L = CONFIG_UA + ""), typeof CONFIG_AI != "undefined" && CONFIG_AI && (_ = CONFIG_AI + "");
                                        }
                                        catch (a) { }
                                        m = String(N || "").replace(/\/+$/, "");
                                        if (typeof I == "undefined")
                                            I = { success: function (a, o) { return JSON.stringify({ code: 0, data: a, data2: o }); }, error: function (a) { return JSON.stringify({ code: 1, data: a }); } };
                                        return [2, typeof M == "function" ? M : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, detail: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, s, c, l, d, g, w, x, y, E, C, J, Q, fe) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function j(a) { return !a || (a = String(a).trim(), !a) ? "" : a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http://") === 0 || a.indexOf("https://") === 0 ? a.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, m) : a.charAt(0) === "/" ? m + a : m + "/" + a; } function Ie(a) { if (!a)
                                        return ""; a = j(a); try {
                                        var o = new URL(a);
                                        return o.pathname = o.pathname.split("/").map(function (f) { try {
                                            return encodeURIComponent(decodeURIComponent(f));
                                        }
                                        catch (h) {
                                            return encodeURIComponent(f);
                                        } }).join("/"), o.toString() + "";
                                    }
                                    catch (f) {
                                        return encodeURI(a) + "";
                                    } } function ge(a) { return a ? String(a).replace(/\s+/g, " ").trim() : ""; } function R(a) { return a ? (a = String(a).trim(), a.indexOf("http") === 0 ? a : a.indexOf("//") === 0 ? "https:" + a : m + (a.indexOf("/") === 0 ? "" : "/") + a) : ""; } function me(a) { if (!a)
                                        return null; var o = String(a.title || a.name || a.novel_title || "").trim(); o && (o = o.replace(/^Bìa truyện\s+/i, "").trim()); var f = String(a.url || a.slug || a.novel_slug || "").trim(), h = f.indexOf("http") === 0 ? f : m + "/truyen/" + f, v = R(a.thumbnail || a.cover || a.image || ""), p = []; return (a.author || a.novel_author) && p.push(a.author || a.novel_author), a.genre_name && p.push(a.genre_name), (a.status || a.novel_status) && p.push(a.status || a.novel_status), a.max_chapters && p.push(a.max_chapters + " chương"), { name: o, link: R(h), cover: v, description: p.join(" · "), host: m }; } function xe(a, o) {
                                        return __awaiter(this, void 0, void 0, function () { var f, h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    o || (o = {});
                                                    f = { "User-Agent": L, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.8", Referer: m + "/" };
                                                    if (o.headers)
                                                        for (h in o.headers)
                                                            f[h] = o.headers[h];
                                                    o.headers = f;
                                                    return [4, t(a, o)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function M(a) {
                                        return __awaiter(this, void 0, void 0, function () { var o, f, h, v, p, T, O, G, D, V, H, Y, B, Z, te, ae; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, t(a)];
                                                case 1:
                                                    o = _a.sent();
                                                    if (!o || !o.ok)
                                                        return [2, null];
                                                    f = o.html(), h = f.select("h1").text().trim() + "", v = f.select('meta[property="og:image"]').attr("content") + "";
                                                    v && v.indexOf("//") === 0 ? v = "https:" + v : v && v.indexOf("/") === 0 && (v = N + v);
                                                    p = f.select('meta[property="book:author"]').attr("content") + "";
                                                    if (!p) {
                                                        T = f.select('a[href*="keyword="]').first();
                                                        T && (p = T.text().trim() + "");
                                                    }
                                                    p || (p = "Đang cập nhật");
                                                    O = "", G = f.select(".text-xl.font-bold").first().text().trim() + "", D = f.select(".bg-green-100").text().trim() + "";
                                                    D || (D = "Đang ra"), f.select("p").forEach(function (ie) { var K = ie.text().trim() + ""; if (K.indexOf("Tên gốc:") === 0 && !O)
                                                        O = K.substring(8).trim();
                                                    else if (K.indexOf("Số chương:") === 0 && !G)
                                                        G = K.substring(10).trim();
                                                    else if (K.indexOf("Tình trạng:") === 0 && D === "Đang ra") {
                                                        var re = K.substring(11).trim();
                                                        re && (D = re);
                                                    } });
                                                    V = f.select(".lg\\:col-span-2 p").html() + "", H = [], Y = f.select(".flex.flex-wrap.gap-2").first();
                                                    Y && Y.select("a").forEach(function (ie) { var K = ie.text().trim() + ""; if (K && ie.select(".material-symbols-outlined").size() === 0) {
                                                        var re = ie.attr("href") + "", de = re.indexOf("http") === 0 ? re : N + (re.indexOf("/") === 0 ? "" : "/") + re;
                                                        H.push({ title: K, input: de, script: "gen.js" });
                                                    } });
                                                    B = f.select('#gioi-thieu a[href*="/chuong-"]').first(), Z = B ? B.text().trim() + "" : "", te = H.map(function (ie) { return ie.title; }).join(", ");
                                                    p && p !== "Đang cập nhật" && H.unshift({ title: p, input: N + "/api/search-novels?keyword=" + encodeURIComponent(p) + "&page=1", script: "gen.js" });
                                                    ae = "<div><p>Tác giả: " + p + "</p>" + (O ? "<p>Tên gốc: " + O + "</p>" : "") + (te ? "<p>Thể loại: " + te + "</p>" : "") + "<p>Tình trạng: " + D + "</p>" + (G ? "<p>Số chương: " + G + "</p>" : "") + (Z ? "<p>Chương mới: " + Z + "</p>" : "") + "</div>";
                                                    return [2, I.success({ name: h, cover: v, author: p, description: V, genres: H, detail: ae, ongoing: D.indexOf("Đang ra") >= 0, host: N })];
                                            }
                                        }); });
                                    } var N, L, _, m, I; return __generator(this, function (_a) {
                                        N = "https://webtruyendich.com", L = "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36", _ = "Vietphrase";
                                        try {
                                            typeof CONFIG_URL != "undefined" && CONFIG_URL && (N = CONFIG_URL + ""), typeof CONFIG_UA != "undefined" && CONFIG_UA && (L = CONFIG_UA + ""), typeof CONFIG_AI != "undefined" && CONFIG_AI && (_ = CONFIG_AI + "");
                                        }
                                        catch (a) { }
                                        m = String(N || "").replace(/\/+$/, "");
                                        if (typeof I == "undefined")
                                            I = { success: function (a, o) { return JSON.stringify({ code: 0, data: a, data2: o }); }, error: function (a) { return JSON.stringify({ code: 1, data: a }); } };
                                        return [2, typeof M == "function" ? M : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, toc: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, s, c, l, d, g, w, x, y, E, C, J, Q, fe) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function j(a) { return !a || (a = String(a).trim(), !a) ? "" : a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http://") === 0 || a.indexOf("https://") === 0 ? a.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, m) : a.charAt(0) === "/" ? m + a : m + "/" + a; } function Ie(a) { if (!a)
                                        return ""; a = j(a); try {
                                        var o = new URL(a);
                                        return o.pathname = o.pathname.split("/").map(function (f) { try {
                                            return encodeURIComponent(decodeURIComponent(f));
                                        }
                                        catch (h) {
                                            return encodeURIComponent(f);
                                        } }).join("/"), o.toString() + "";
                                    }
                                    catch (f) {
                                        return encodeURI(a) + "";
                                    } } function ge(a) { return a ? String(a).replace(/\s+/g, " ").trim() : ""; } function R(a) { return a ? (a = String(a).trim(), a.indexOf("http") === 0 ? a : a.indexOf("//") === 0 ? "https:" + a : m + (a.indexOf("/") === 0 ? "" : "/") + a) : ""; } function me(a) { if (!a)
                                        return null; var o = String(a.title || a.name || a.novel_title || "").trim(); o && (o = o.replace(/^Bìa truyện\s+/i, "").trim()); var f = String(a.url || a.slug || a.novel_slug || "").trim(), h = f.indexOf("http") === 0 ? f : m + "/truyen/" + f, v = R(a.thumbnail || a.cover || a.image || ""), p = []; return (a.author || a.novel_author) && p.push(a.author || a.novel_author), a.genre_name && p.push(a.genre_name), (a.status || a.novel_status) && p.push(a.status || a.novel_status), a.max_chapters && p.push(a.max_chapters + " chương"), { name: o, link: R(h), cover: v, description: p.join(" · "), host: m }; } function xe(a, o) {
                                        return __awaiter(this, void 0, void 0, function () { var f, h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    o || (o = {});
                                                    f = { "User-Agent": L, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.8", Referer: m + "/" };
                                                    if (o.headers)
                                                        for (h in o.headers)
                                                            f[h] = o.headers[h];
                                                    o.headers = f;
                                                    return [4, t(a, o)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function M(a) {
                                        return __awaiter(this, void 0, void 0, function () { var o, f, h, v, p, T, O, G, D, V, H, Y, B, Z, te, ae, ie, K, re; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    a = j(a);
                                                    return [4, xe(a)];
                                                case 1:
                                                    o = _a.sent();
                                                    if (!o || !o.ok)
                                                        return [2, I.success([])];
                                                    f = o.text() + "", h = f.match(/novel_id\s*=\s*["'](\d+)["']/) || f.match(/data-novel-id=["'](\d+)["']/), v = f.match(/defaultSource\s*=\s*["']([^"']+)["']/) || f.match(/source_name\s*=\s*['"]([^'"]+)['"]/), p = f.match(/novel_url\s*=\s*["']([^"']+)["']/), T = p ? p[1] : a.split("/").filter(Boolean).pop() || "";
                                                    if (!T) {
                                                        O = a.match(/\/truyen\/([^\/\?#]+)/i);
                                                        O && (T = O[1]);
                                                    }
                                                    G = h ? h[1] : "", D = v ? v[1] : "sudugu", V = [], H = {};
                                                    if (!G) return [3, 3];
                                                    Y = N + "/api/novels/" + G + "/chapters?source=" + encodeURIComponent(D) + "&limit=10000";
                                                    return [4, xe(Y, { headers: { "X-Requested-With": "XMLHttpRequest", Accept: "application/json" } })];
                                                case 2:
                                                    B = _a.sent();
                                                    if (B && B.ok) {
                                                        Z = B.json(), te = Z && Z.data ? Z.data : Z && Z.items ? Z.items : [];
                                                        if (te && te.length > 0) {
                                                            for (ae = 0; ae < te.length; ae++) {
                                                                ie = te[ae].chapter_url || te[ae].slug, K = N + "/truyen/" + T + "/" + D + "/" + ie;
                                                                H[K] || (V.push({ name: ge(te[ae].title || te[ae].name || "Chương " + (ae + 1)), url: K, host: N }), H[K] = !0);
                                                            }
                                                            return [2, I.success(V)];
                                                        }
                                                    }
                                                    _a.label = 3;
                                                case 3:
                                                    re = o.html();
                                                    return [2, (re && re.select("a[href*='/chuong-'], a[href*='/chuong']").forEach(function (de) { var Xe = de.attr("href") + "", Fe = ge(de.text() + ""); if (Xe && Fe && Xe.indexOf("danh-sach-chuong") < 0) {
                                                            var zu = j(Xe);
                                                            H[zu] || (V.push({ name: Fe, url: zu, host: N }), H[zu] = !0);
                                                        } }), I.success(V))];
                                            }
                                        }); });
                                    } var N, L, _, m, I; return __generator(this, function (_a) {
                                        N = "https://webtruyendich.com", L = "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36", _ = "Vietphrase";
                                        try {
                                            typeof CONFIG_URL != "undefined" && CONFIG_URL && (N = CONFIG_URL + ""), typeof CONFIG_UA != "undefined" && CONFIG_UA && (L = CONFIG_UA + ""), typeof CONFIG_AI != "undefined" && CONFIG_AI && (_ = CONFIG_AI + "");
                                        }
                                        catch (a) { }
                                        m = String(N || "").replace(/\/+$/, "");
                                        if (typeof I == "undefined")
                                            I = { success: function (a, o) { return JSON.stringify({ code: 0, data: a, data2: o }); }, error: function (a) { return JSON.stringify({ code: 1, data: a }); } };
                                        return [2, typeof M == "function" ? M : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, chap: function (e, u) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, (function (t, r, n, i, s, c, l, d, g, w, x, y, E, C, J, Q, fe) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, (function () {
                                            return __awaiter(this, void 0, void 0, function () {
                                                function j(f) { return !f || (f = String(f).trim(), !f) ? "" : f.indexOf("//") === 0 ? "https:" + f : f.indexOf("http://") === 0 || f.indexOf("https://") === 0 ? f.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, m) : f.charAt(0) === "/" ? m + f : m + "/" + f; }
                                                function Ie(f) { if (!f)
                                                    return ""; f = j(f); try {
                                                    var h = new URL(f);
                                                    return h.pathname = h.pathname.split("/").map(function (v) { try {
                                                        return encodeURIComponent(decodeURIComponent(v));
                                                    }
                                                    catch (p) {
                                                        return encodeURIComponent(v);
                                                    } }).join("/"), h.toString() + "";
                                                }
                                                catch (v) {
                                                    return encodeURI(f) + "";
                                                } }
                                                function ge(f) { return f ? String(f).replace(/\s+/g, " ").trim() : ""; }
                                                function R(f) { return f ? (f = String(f).trim(), f.indexOf("http") === 0 ? f : f.indexOf("//") === 0 ? "https:" + f : m + (f.indexOf("/") === 0 ? "" : "/") + f) : ""; }
                                                function me(f) { if (!f)
                                                    return null; var h = String(f.title || f.name || f.novel_title || "").trim(); h && (h = h.replace(/^Bìa truyện\s+/i, "").trim()); var v = String(f.url || f.slug || f.novel_slug || "").trim(), p = v.indexOf("http") === 0 ? v : m + "/truyen/" + v, T = R(f.thumbnail || f.cover || f.image || ""), O = []; return (f.author || f.novel_author) && O.push(f.author || f.novel_author), f.genre_name && O.push(f.genre_name), (f.status || f.novel_status) && O.push(f.status || f.novel_status), f.max_chapters && O.push(f.max_chapters + " chương"), { name: h, link: R(p), cover: T, description: O.join(" · "), host: m }; }
                                                function xe(f, h) {
                                                    return __awaiter(this, void 0, void 0, function () { var v, p; return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                h || (h = {});
                                                                v = { "User-Agent": L, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.8", Referer: m + "/" };
                                                                if (h.headers)
                                                                    for (p in h.headers)
                                                                        v[p] = h.headers[p];
                                                                h.headers = v;
                                                                return [4, t(f, h)];
                                                            case 1: return [2, _a.sent()];
                                                        }
                                                    }); });
                                                }
                                                function M(f) {
                                                    return __awaiter(this, void 0, void 0, function () { var h, v, p, T, O, G, D, V, H, Y, B, Z, te, ae, ie, K, re, de_1; return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                _a.trys.push([0, 3, , 4]);
                                                                return [4, t(f)];
                                                            case 1:
                                                                h = _a.sent();
                                                                if (!h || !h.ok)
                                                                    return [2, I.error("Lỗi kết nối: " + f)];
                                                                v = h.text(), p = function (de, Xe) { var Fe = v.match(de); return Fe && Fe[1] ? Fe[1] : Xe || ""; }, T = p(/chapter_id\s*[=:]\s*["']?(\d+)["']?/), O = p(/novel_id\s*[=:]\s*["']?(\d+)["']?/), G = p(/source_name\s*[=:]\s*["']([^"']+)["']/, "fanqie"), D = p(/sourceId\s*[=:]\s*["']?(\d+)["']?/), V = p(/chapterUrl\s*[=:]\s*["']([^"']+)["']/), H = p(/novel_url\s*[=:]\s*["']([^"']+)["']/);
                                                                if (!T || !O)
                                                                    return [2, I.error("Không tìm thấy chapter_id/novel_id.")];
                                                                Y = JSON.stringify({ chapter_id: T, novel_id: O, source_name: G, source_id: D, chapter_url: V, novel_url: H, translator: "Vietphrase" });
                                                                return [4, t(N + "/api/getChapter", { method: "POST", headers: { "Content-Type": "application/json" }, body: Y })];
                                                            case 2:
                                                                B = _a.sent();
                                                                if (B && B.ok) {
                                                                    Z = B.text();
                                                                    if (Z)
                                                                        try {
                                                                            te = JSON.parse(Z), ae = te.content || te.data || "";
                                                                            if (a(ae))
                                                                                return [2, I.success(o(ae))];
                                                                        }
                                                                        catch (de) {
                                                                            if (a(Z))
                                                                                return [2, I.success(o(Z))];
                                                                        }
                                                                }
                                                                ie = h.html();
                                                                if (ie) {
                                                                    K = ie.select("#article, #chapter-content-body").first();
                                                                    if (K) {
                                                                        re = "" + K.html();
                                                                        if (a(re))
                                                                            return [2, I.success(o(re))];
                                                                    }
                                                                }
                                                                return [2, I.error("Không lấy được nội dung chương.")];
                                                            case 3:
                                                                de_1 = _a.sent();
                                                                return [2, I.error("Lỗi: " + (de_1 ? de_1.message : ""))];
                                                            case 4: return [2];
                                                        }
                                                    }); });
                                                }
                                                function a(f) { if (!f || ("" + f).replace(/\s/g, "").length < 50)
                                                    return !1; var h = ("" + f).toLowerCase(); if (h.indexOf("mô hình ai hiện đang quá tải") >= 0 || h.indexOf("vui lòng thử lại sau") >= 0 || h.indexOf("cloudflare") >= 0 || h.indexOf("just a moment") >= 0 || h.indexOf("chờ một chút") >= 0)
                                                    return !1; var v = ("" + f).replace(/^\s+|\s+$/g, ""); return !(v.charAt(0) === "{" && v.indexOf('"detail"') >= 0); }
                                                function o(f) {
                                                    var h = "" + f;
                                                    return h = h.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ""), h = h.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ""), h = h.replace(/<ins[^>]*>[\s\S]*?<\/ins>/gi, ""), h = h.replace(/<\/?(p|div|article|section|h[1-6]|blockquote|li|tr|ul|ol)[^>]*>/gi, "\n"), h = h.replace(/<br\s*\/?>/gi, "\n"), h = h.replace(/<[^>]+>/g, ""), h = h.replace(/&nbsp;/gi, " "), h = h.replace(/&quot;/gi, '"'), h = h.replace(/&#39;/gi, "'"), h = h.replace(/&lt;/gi, "<"), h = h.replace(/&gt;/gi, ">"), h = h.replace(/&amp;/gi, "&"), h = h.replace(/[ \t]+/g, " "), h = h.replace(/ *\n */g, "\n"), h = h.replace(/\n{3,}/g, "\n\n"), h = h.replace(/^\s+|\s+$/g, ""), h.replace(/\n/g, "<br>");
                                                }
                                                var N, L, _, m, I;
                                                return __generator(this, function (_a) {
                                                    N = "https://webtruyendich.com", L = "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36", _ = "Vietphrase";
                                                    try {
                                                        typeof CONFIG_URL != "undefined" && CONFIG_URL && (N = CONFIG_URL + ""), typeof CONFIG_UA != "undefined" && CONFIG_UA && (L = CONFIG_UA + ""), typeof CONFIG_AI != "undefined" && CONFIG_AI && (_ = CONFIG_AI + "");
                                                    }
                                                    catch (f) { }
                                                    m = String(N || "").replace(/\/+$/, "");
                                                    if (typeof I == "undefined")
                                                        I = { success: function (f, h) { return JSON.stringify({ code: 0, data: f, data2: h }); }, error: function (f) { return JSON.stringify({ code: 1, data: f }); } };
                                                    return [2, typeof M == "function" ? M : void 0];
                                                });
                                            });
                                        })()];
                                    case 1: return [2, _a.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, page: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, s, c, l, d, g, w, x, y, E, C, J, Q, fe) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function j(a) { return !a || (a = String(a).trim(), !a) ? "" : a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http://") === 0 || a.indexOf("https://") === 0 ? a.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, m) : a.charAt(0) === "/" ? m + a : m + "/" + a; } function Ie(a) { if (!a)
                                        return ""; a = j(a); try {
                                        var o = new URL(a);
                                        return o.pathname = o.pathname.split("/").map(function (f) { try {
                                            return encodeURIComponent(decodeURIComponent(f));
                                        }
                                        catch (h) {
                                            return encodeURIComponent(f);
                                        } }).join("/"), o.toString() + "";
                                    }
                                    catch (f) {
                                        return encodeURI(a) + "";
                                    } } function ge(a) { return a ? String(a).replace(/\s+/g, " ").trim() : ""; } function R(a) { return a ? (a = String(a).trim(), a.indexOf("http") === 0 ? a : a.indexOf("//") === 0 ? "https:" + a : m + (a.indexOf("/") === 0 ? "" : "/") + a) : ""; } function me(a) { if (!a)
                                        return null; var o = String(a.title || a.name || a.novel_title || "").trim(); o && (o = o.replace(/^Bìa truyện\s+/i, "").trim()); var f = String(a.url || a.slug || a.novel_slug || "").trim(), h = f.indexOf("http") === 0 ? f : m + "/truyen/" + f, v = R(a.thumbnail || a.cover || a.image || ""), p = []; return (a.author || a.novel_author) && p.push(a.author || a.novel_author), a.genre_name && p.push(a.genre_name), (a.status || a.novel_status) && p.push(a.status || a.novel_status), a.max_chapters && p.push(a.max_chapters + " chương"), { name: o, link: R(h), cover: v, description: p.join(" · "), host: m }; } function xe(a, o) {
                                        return __awaiter(this, void 0, void 0, function () { var f, h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    o || (o = {});
                                                    f = { "User-Agent": L, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.8", Referer: m + "/" };
                                                    if (o.headers)
                                                        for (h in o.headers)
                                                            f[h] = o.headers[h];
                                                    o.headers = f;
                                                    return [4, t(a, o)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function M(a) {
                                        return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_a) {
                                            a = j(a);
                                            o = [a];
                                            return [2, I.success(o)];
                                        }); });
                                    } var N, L, _, m, I; return __generator(this, function (_a) {
                                        N = "https://webtruyendich.com", L = "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36", _ = "Vietphrase";
                                        try {
                                            typeof CONFIG_URL != "undefined" && CONFIG_URL && (N = CONFIG_URL + ""), typeof CONFIG_UA != "undefined" && CONFIG_UA && (L = CONFIG_UA + ""), typeof CONFIG_AI != "undefined" && CONFIG_AI && (_ = CONFIG_AI + "");
                                        }
                                        catch (a) { }
                                        m = String(N || "").replace(/\/+$/, "");
                                        if (typeof I == "undefined")
                                            I = { success: function (a, o) { return JSON.stringify({ code: 0, data: a, data2: o }); }, error: function (a) { return JSON.stringify({ code: 1, data: a }); } };
                                        return [2, typeof M == "function" ? M : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, search: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, s, c, l, d, g, w, x, y, E, C, J, Q, fe) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function j(a) { return !a || (a = String(a).trim(), !a) ? "" : a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http://") === 0 || a.indexOf("https://") === 0 ? a.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, m) : a.charAt(0) === "/" ? m + a : m + "/" + a; } function Ie(a) { if (!a)
                                        return ""; a = j(a); try {
                                        var o = new URL(a);
                                        return o.pathname = o.pathname.split("/").map(function (f) { try {
                                            return encodeURIComponent(decodeURIComponent(f));
                                        }
                                        catch (h) {
                                            return encodeURIComponent(f);
                                        } }).join("/"), o.toString() + "";
                                    }
                                    catch (f) {
                                        return encodeURI(a) + "";
                                    } } function ge(a) { return a ? String(a).replace(/\s+/g, " ").trim() : ""; } function R(a) { return a ? (a = String(a).trim(), a.indexOf("http") === 0 ? a : a.indexOf("//") === 0 ? "https:" + a : m + (a.indexOf("/") === 0 ? "" : "/") + a) : ""; } function me(a) { if (!a)
                                        return null; var o = String(a.title || a.name || a.novel_title || "").trim(); o && (o = o.replace(/^Bìa truyện\s+/i, "").trim()); var f = String(a.url || a.slug || a.novel_slug || "").trim(), h = f.indexOf("http") === 0 ? f : m + "/truyen/" + f, v = R(a.thumbnail || a.cover || a.image || ""), p = []; return (a.author || a.novel_author) && p.push(a.author || a.novel_author), a.genre_name && p.push(a.genre_name), (a.status || a.novel_status) && p.push(a.status || a.novel_status), a.max_chapters && p.push(a.max_chapters + " chương"), { name: o, link: R(h), cover: v, description: p.join(" · "), host: m }; } function xe(a, o) {
                                        return __awaiter(this, void 0, void 0, function () { var f, h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    o || (o = {});
                                                    f = { "User-Agent": L, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.8", Referer: m + "/" };
                                                    if (o.headers)
                                                        for (h in o.headers)
                                                            f[h] = o.headers[h];
                                                    o.headers = f;
                                                    return [4, t(a, o)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function M(a, o) {
                                        return __awaiter(this, void 0, void 0, function () { var f, h, v, p, T, O, G, D, V, H, Y, B; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    f = "";
                                                    Array.isArray(a) ? (f = a[0] || "", o || (o = a[1] || 1)) : (f = a || "", o || (o = 1));
                                                    h = N + "/api/search-novels?keyword=" + encodeURIComponent(f) + "&page=" + (o || 1);
                                                    return [4, t(h, { headers: { "X-Requested-With": "XMLHttpRequest", Accept: "application/json" } })];
                                                case 1:
                                                    v = _a.sent();
                                                    if (!v || !v.ok)
                                                        return [2, I.success([])];
                                                    p = v.json();
                                                    if (!p)
                                                        return [2, I.success([])];
                                                    for (T = p.data || p.novels || p.items || (Array.isArray(p) ? p : []), O = [], G = 0; G < T.length; G++) {
                                                        D = me(T[G]);
                                                        D && D.name && D.link && O.push(D);
                                                    }
                                                    V = "", H = parseInt(o || "1", 10), Y = p.current_page || p.page || H, B = p.last_page || p.total_pages;
                                                    return [2, (B && Y < B ? V = String(Y + 1) : O.length >= 10 && (V = String(H + 1)), I.success(O, V))];
                                            }
                                        }); });
                                    } var N, L, _, m, I; return __generator(this, function (_a) {
                                        N = "https://webtruyendich.com", L = "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36", _ = "Vietphrase";
                                        try {
                                            typeof CONFIG_URL != "undefined" && CONFIG_URL && (N = CONFIG_URL + ""), typeof CONFIG_UA != "undefined" && CONFIG_UA && (L = CONFIG_UA + ""), typeof CONFIG_AI != "undefined" && CONFIG_AI && (_ = CONFIG_AI + "");
                                        }
                                        catch (a) { }
                                        m = String(N || "").replace(/\/+$/, "");
                                        if (typeof I == "undefined")
                                            I = { success: function (a, o) { return JSON.stringify({ code: 0, data: a, data2: o }); }, error: function (a) { return JSON.stringify({ code: 1, data: a }); } };
                                        return [2, typeof M == "function" ? M : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, genre: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, s, c, l, d, g, w, x, y, E, C, J, Q, fe) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function j(a) { return !a || (a = String(a).trim(), !a) ? "" : a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http://") === 0 || a.indexOf("https://") === 0 ? a.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, m) : a.charAt(0) === "/" ? m + a : m + "/" + a; } function Ie(a) { if (!a)
                                        return ""; a = j(a); try {
                                        var o = new URL(a);
                                        return o.pathname = o.pathname.split("/").map(function (f) { try {
                                            return encodeURIComponent(decodeURIComponent(f));
                                        }
                                        catch (h) {
                                            return encodeURIComponent(f);
                                        } }).join("/"), o.toString() + "";
                                    }
                                    catch (f) {
                                        return encodeURI(a) + "";
                                    } } function ge(a) { return a ? String(a).replace(/\s+/g, " ").trim() : ""; } function R(a) { return a ? (a = String(a).trim(), a.indexOf("http") === 0 ? a : a.indexOf("//") === 0 ? "https:" + a : m + (a.indexOf("/") === 0 ? "" : "/") + a) : ""; } function me(a) { if (!a)
                                        return null; var o = String(a.title || a.name || a.novel_title || "").trim(); o && (o = o.replace(/^Bìa truyện\s+/i, "").trim()); var f = String(a.url || a.slug || a.novel_slug || "").trim(), h = f.indexOf("http") === 0 ? f : m + "/truyen/" + f, v = R(a.thumbnail || a.cover || a.image || ""), p = []; return (a.author || a.novel_author) && p.push(a.author || a.novel_author), a.genre_name && p.push(a.genre_name), (a.status || a.novel_status) && p.push(a.status || a.novel_status), a.max_chapters && p.push(a.max_chapters + " chương"), { name: o, link: R(h), cover: v, description: p.join(" · "), host: m }; } function xe(a, o) {
                                        return __awaiter(this, void 0, void 0, function () { var f, h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    o || (o = {});
                                                    f = { "User-Agent": L, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.8", Referer: m + "/" };
                                                    if (o.headers)
                                                        for (h in o.headers)
                                                            f[h] = o.headers[h];
                                                    o.headers = f;
                                                    return [4, t(a, o)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function M() {
                                        return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_a) {
                                            a = [{ title: "Huyền Huyễn", input: "/the-loai/huyen-huyen", script: "gen.js" }, { title: "Tiên Hiệp", input: "/the-loai/tien-hiep", script: "gen.js" }, { title: "Đô Thị", input: "/the-loai/do-thi", script: "gen.js" }, { title: "Kiếm Hiệp", input: "/the-loai/kiem-hiep", script: "gen.js" }, { title: "Khoa Học Viễn Tưởng", input: "/the-loai/khoa-hoc-vien-tuong", script: "gen.js" }, { title: "Đồng Nhân", input: "/the-loai/dong-nhan", script: "gen.js" }, { title: "Quân Sự", input: "/the-loai/quan-su", script: "gen.js" }, { title: "Lịch Sử", input: "/the-loai/lich-su", script: "gen.js" }, { title: "Game", input: "/the-loai/game", script: "gen.js" }, { title: "Võng Du", input: "/the-loai/vong-du", script: "gen.js" }, { title: "Kỳ Huyễn", input: "/the-loai/ky-huyen", script: "gen.js" }, { title: "Linh Dị", input: "/the-loai/linh-di", script: "gen.js" }];
                                            return [2, I.success(a)];
                                        }); });
                                    } var N, L, _, m, I; return __generator(this, function (_a) {
                                        N = "https://webtruyendich.com", L = "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36", _ = "Vietphrase";
                                        try {
                                            typeof CONFIG_URL != "undefined" && CONFIG_URL && (N = CONFIG_URL + ""), typeof CONFIG_UA != "undefined" && CONFIG_UA && (L = CONFIG_UA + ""), typeof CONFIG_AI != "undefined" && CONFIG_AI && (_ = CONFIG_AI + "");
                                        }
                                        catch (a) { }
                                        m = String(N || "").replace(/\/+$/, "");
                                        if (typeof I == "undefined")
                                            I = { success: function (a, o) { return JSON.stringify({ code: 0, data: a, data2: o }); }, error: function (a) { return JSON.stringify({ code: 1, data: a }); } };
                                        return [2, typeof M == "function" ? M : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, gen: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, s, c, l, d, g, w, x, y, E, C, J, Q, fe) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function j(o) { return !o || (o = String(o).trim(), !o) ? "" : o.indexOf("//") === 0 ? "https:" + o : o.indexOf("http://") === 0 || o.indexOf("https://") === 0 ? o.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, m) : o.charAt(0) === "/" ? m + o : m + "/" + o; } function Ie(o) { if (!o)
                                        return ""; o = j(o); try {
                                        var f = new URL(o);
                                        return f.pathname = f.pathname.split("/").map(function (h) { try {
                                            return encodeURIComponent(decodeURIComponent(h));
                                        }
                                        catch (v) {
                                            return encodeURIComponent(h);
                                        } }).join("/"), f.toString() + "";
                                    }
                                    catch (h) {
                                        return encodeURI(o) + "";
                                    } } function ge(o) { return o ? String(o).replace(/\s+/g, " ").trim() : ""; } function R(o) { return o ? (o = String(o).trim(), o.indexOf("http") === 0 ? o : o.indexOf("//") === 0 ? "https:" + o : m + (o.indexOf("/") === 0 ? "" : "/") + o) : ""; } function me(o) { if (!o)
                                        return null; var f = String(o.title || o.name || o.novel_title || "").trim(); f && (f = f.replace(/^Bìa truyện\s+/i, "").trim()); var h = String(o.url || o.slug || o.novel_slug || "").trim(), v = h.indexOf("http") === 0 ? h : m + "/truyen/" + h, p = R(o.thumbnail || o.cover || o.image || ""), T = []; return (o.author || o.novel_author) && T.push(o.author || o.novel_author), o.genre_name && T.push(o.genre_name), (o.status || o.novel_status) && T.push(o.status || o.novel_status), o.max_chapters && T.push(o.max_chapters + " chương"), { name: f, link: R(v), cover: p, description: T.join(" · "), host: m }; } function xe(o, f) {
                                        return __awaiter(this, void 0, void 0, function () { var h, v; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    f || (f = {});
                                                    h = { "User-Agent": L, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.8", Referer: m + "/" };
                                                    if (f.headers)
                                                        for (v in f.headers)
                                                            h[v] = f.headers[v];
                                                    f.headers = h;
                                                    return [4, t(o, f)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function M(o, f) { if (!o)
                                        return N + "/api/search-novels?page=" + (f || 1); var h = o + ""; if (h.indexOf("http") < 0 && h.indexOf("/") < 0 && h.indexOf("webtruyendich.com") < 0)
                                        return N + "/api/search-novels?keyword=" + encodeURIComponent(h) + "&page=" + (f || 1); var v = h.split("?")[0], p = h.split("?")[1] || "", T = {}; if (p)
                                        for (var O = p.split("&"), G = 0; G < O.length; G++) {
                                            var D = O[G].split("=");
                                            D[0] && (T[D[0]] = decodeURIComponent(D[1] || ""));
                                        } if (v.indexOf("/the-loai/") >= 0) {
                                        var V = v.split("/the-loai/")[1];
                                        V && (T.genre = V);
                                    } if (v.indexOf("/xep-hang/") >= 0) {
                                        var H = v.split("/xep-hang/")[1];
                                        H && (T.sort = H);
                                    } T.page = String(f || 1); var Y = []; for (var B in T)
                                        T[B] !== void 0 && T[B] !== null && T[B] !== "" && Y.push(encodeURIComponent(B) + "=" + encodeURIComponent(T[B])); return N + "/api/search-novels?" + Y.join("&"); } function a(o, f) {
                                        return __awaiter(this, void 0, void 0, function () { var h, v, p, T, O, G, D, V, H, Y, B; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    h = parseInt(f || "1", 10), v = M(o, h);
                                                    return [4, t(v, { headers: { "User-Agent": typeof L != "undefined" ? L : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36", "X-Requested-With": "XMLHttpRequest", Accept: "application/json, text/plain, */*" } })];
                                                case 1:
                                                    p = _a.sent();
                                                    if (!p || !p.ok)
                                                        return [2, I.success([])];
                                                    T = p.json();
                                                    if (!T)
                                                        return [2, I.success([])];
                                                    for (O = T.novels || T.data || T.items || (Array.isArray(T) ? T : []), G = [], D = 0; D < O.length; D++) {
                                                        V = me(O[D]);
                                                        V && V.name && V.link && G.push(V);
                                                    }
                                                    H = "", Y = T.page || T.current_page || h, B = T.total_pages || T.last_page;
                                                    return [2, (B && Y < B ? H = String(Y + 1) : G.length >= 10 && (H = String(h + 1)), I.success(G, H))];
                                            }
                                        }); });
                                    } var N, L, _, m, I; return __generator(this, function (_a) {
                                        N = "https://webtruyendich.com", L = "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36", _ = "Vietphrase";
                                        try {
                                            typeof CONFIG_URL != "undefined" && CONFIG_URL && (N = CONFIG_URL + ""), typeof CONFIG_UA != "undefined" && CONFIG_UA && (L = CONFIG_UA + ""), typeof CONFIG_AI != "undefined" && CONFIG_AI && (_ = CONFIG_AI + "");
                                        }
                                        catch (o) { }
                                        m = String(N || "").replace(/\/+$/, "");
                                        if (typeof I == "undefined")
                                            I = { success: function (o, f) { return JSON.stringify({ code: 0, data: o, data2: f }); }, error: function (o) { return JSON.stringify({ code: 1, data: o }); } };
                                        return [2, typeof a == "function" ? a : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    } };
function tr(e) { return new Vu({ meta: Ae, scripts: ur, host: e }); }
var Rn = require("@libs/fetch").fetchApi, du = null;
try {
    du = require("@libs/storage");
}
catch (e) {
    du = null;
}
var Vt = {}, ju = du && du.storage ? du.storage : { get: function (e) { return Vt[e]; }, set: function (e, u) { Vt[e] = u; }, delete: function (e) { delete Vt[e]; } }, jt = (function () {
    function class_2() {
        var _this = this;
        this.id = Ae.lnId, this.name = Ae.name, this.icon = Ae.lnIcon, this.site = Ae.source, this.version = Ae.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = tr({ name: "LNReader", request: function (u) { return __awaiter(_this, void 0, void 0, function () {
                var t, r, n;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            t = { method: u.method, headers: u.headers };
                            u.body != null && u.method !== "GET" && (t.body = u.body);
                            return [4, Rn(u.url, t)];
                        case 1:
                            r = _b.sent(), n = {};
                            try {
                                r.headers.forEach(function (i, s) { n[s] = i; });
                            }
                            catch (i) { }
                            _a = { status: r.status, url: r.url || u.url, headers: n };
                            return [4, r.text()];
                        case 2: return [2, (_a.text = _b.sent(), _a)];
                    }
                });
            }); }, storageGet: function (u) { var t = ju.get("vb_" + u); return t == null ? null : String(t); }, storageSet: function (u, t) { t == null ? ju.delete && ju.delete("vb_" + u) : ju.set("vb_" + u, String(t)); }, config: function (u) { return null; }, log: function (u) { return console.log(u); } });
    }
    class_2.prototype.popularNovels = function (u, t) {
        return __awaiter(this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(t && t.showLatestNovels)) return [3, 2];
                    return [4, this.engine.latest(u)];
                case 1:
                    _a = _b.sent();
                    return [3, 4];
                case 2: return [4, this.engine.popular(u)];
                case 3:
                    _a = _b.sent();
                    _b.label = 4;
                case 4: return [2, (_a).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (u, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.search(u, t)];
                case 1: return [2, (_a.sent()).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.detail(u)];
                case 1:
                    t = _a.sent();
                    return [4, this.engine.chapters(u)];
                case 2:
                    r = _a.sent();
                    return [2, { path: u, name: t.name || "Untitled", cover: t.cover, summary: t.description, author: t.author, status: t.ongoing ? "Ongoing" : "Completed", genres: t.genres.join(","), chapters: r.map(function (n, i) { return ({ name: n.name, path: n.url, chapterNumber: i + 1 }); }) }];
            }
        }); });
    };
    class_2.prototype.parseChapter = function (u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.content(u)];
                case 1: return [2, (_a.sent()).html];
            }
        }); });
    };
    class_2.prototype.resolveUrl = function (u, t) { return /^https?:/i.test(u) ? u : Ae.source.replace(/\/+$/, "") + "/" + String(u).replace(/^\/+/, ""); };
    return class_2;
}()), Fn = new jt;
