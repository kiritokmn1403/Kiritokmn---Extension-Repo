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
var Wt = function (u, e, t) { return e in u ? Qe(u, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : u[e] = t; }, le = function (u, e) {
    var e_2, _a;
    for (var t in e || (e = {}))
        $t.call(e, t) && Wt(u, t, e[t]);
    if (zt)
        try {
            for (var _b = __values(zt(e)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                or.call(e, t) && Wt(u, t, e[t]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    return u;
}, ke = function (u, e) { return nr(u, ir(e)); };
var fr = function (u, e) { return function () { return (e || u((e = { exports: {} }).exports, e), e.exports); }; }, $u = function (u, e) { for (var t in e)
    Qe(u, t, { get: e[t], enumerable: !0 }); }, Jt = function (u, e, t, r) {
    var e_3, _a;
    if (e && typeof e == "object" || typeof e == "function") {
        var _loop_1 = function (n) {
            !$t.call(u, n) && n !== t && Qe(u, n, { get: function () { return e[n]; }, enumerable: !(r = ar(e, n)) || r.enumerable });
        };
        try {
            for (var _b = __values(sr(e)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return u;
};
var qe = function (u, e, t) { return (t = u != null ? rr(cr(u)) : {}, Jt(e || !u || !u.__esModule ? Qe(t, "default", { value: u, enumerable: !0 }) : t, u)); }, lr = function (u) { return Jt(Qe({}, "__esModule", { value: !0 }), u); };
var Ce = fr(function (di, w0) { w0.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var Mn = {};
$u(Mn, { default: function () { return Fn; } });
module.exports = lr(Mn);
var hu = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (u) { return u.charCodeAt(0); }));
var bu = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (u) { return u.charCodeAt(0); }));
var Ju, dr = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Me = (Ju = String.fromCodePoint) !== null && Ju !== void 0 ? Ju : function (u) { var e = ""; return u > 65535 && (u -= 65536, e += String.fromCharCode(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), e += String.fromCharCode(u), e; };
function Ku(u) { var e; return u >= 55296 && u <= 57343 || u > 1114111 ? 65533 : (e = dr.get(u)) !== null && e !== void 0 ? e : u; }
var K;
(function (u) { u[u.NUM = 35] = "NUM", u[u.SEMI = 59] = "SEMI", u[u.EQUALS = 61] = "EQUALS", u[u.ZERO = 48] = "ZERO", u[u.NINE = 57] = "NINE", u[u.LOWER_A = 97] = "LOWER_A", u[u.LOWER_F = 102] = "LOWER_F", u[u.LOWER_X = 120] = "LOWER_X", u[u.LOWER_Z = 122] = "LOWER_Z", u[u.UPPER_A = 65] = "UPPER_A", u[u.UPPER_F = 70] = "UPPER_F", u[u.UPPER_Z = 90] = "UPPER_Z"; })(K || (K = {}));
var hr = 32, we;
(function (u) { u[u.VALUE_LENGTH = 49152] = "VALUE_LENGTH", u[u.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", u[u.JUMP_TABLE = 127] = "JUMP_TABLE"; })(we || (we = {}));
function Xu(u) { return u >= K.ZERO && u <= K.NINE; }
function br(u) { return u >= K.UPPER_A && u <= K.UPPER_F || u >= K.LOWER_A && u <= K.LOWER_F; }
function pr(u) { return u >= K.UPPER_A && u <= K.UPPER_Z || u >= K.LOWER_A && u <= K.LOWER_Z || Xu(u); }
function gr(u) { return u === K.EQUALS || pr(u); }
var J;
(function (u) { u[u.EntityStart = 0] = "EntityStart", u[u.NumericStart = 1] = "NumericStart", u[u.NumericDecimal = 2] = "NumericDecimal", u[u.NumericHex = 3] = "NumericHex", u[u.NamedEntity = 4] = "NamedEntity"; })(J || (J = {}));
var ae;
(function (u) { u[u.Legacy = 0] = "Legacy", u[u.Strict = 1] = "Strict", u[u.Attribute = 2] = "Attribute"; })(ae || (ae = {}));
var Be = (function () {
    function Be(e, t, r) {
        this.decodeTree = e, this.emitCodePoint = t, this.errors = r, this.state = J.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = ae.Strict;
    }
    Be.prototype.startEntity = function (e) { this.decodeMode = e, this.state = J.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    Be.prototype.write = function (e, t) { switch (this.state) {
        case J.EntityStart: return e.charCodeAt(t) === K.NUM ? (this.state = J.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1)) : (this.state = J.NamedEntity, this.stateNamedEntity(e, t));
        case J.NumericStart: return this.stateNumericStart(e, t);
        case J.NumericDecimal: return this.stateNumericDecimal(e, t);
        case J.NumericHex: return this.stateNumericHex(e, t);
        case J.NamedEntity: return this.stateNamedEntity(e, t);
    } };
    Be.prototype.stateNumericStart = function (e, t) { return t >= e.length ? -1 : (e.charCodeAt(t) | hr) === K.LOWER_X ? (this.state = J.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = J.NumericDecimal, this.stateNumericDecimal(e, t)); };
    Be.prototype.addToNumericResult = function (e, t, r, n) { if (t !== r) {
        var i = r - t;
        this.result = this.result * Math.pow(n, i) + parseInt(e.substr(t, i), n), this.consumed += i;
    } };
    Be.prototype.stateNumericHex = function (e, t) { var r = t; for (; t < e.length;) {
        var n = e.charCodeAt(t);
        if (Xu(n) || br(n))
            t += 1;
        else
            return this.addToNumericResult(e, r, t, 16), this.emitNumericEntity(n, 3);
    } return this.addToNumericResult(e, r, t, 16), -1; };
    Be.prototype.stateNumericDecimal = function (e, t) { var r = t; for (; t < e.length;) {
        var n = e.charCodeAt(t);
        if (Xu(n))
            t += 1;
        else
            return this.addToNumericResult(e, r, t, 10), this.emitNumericEntity(n, 2);
    } return this.addToNumericResult(e, r, t, 10), -1; };
    Be.prototype.emitNumericEntity = function (e, t) { var r; if (this.consumed <= t)
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (e === K.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === ae.Strict)
        return 0; return this.emitCodePoint(Ku(this.result), this.consumed), this.errors && (e !== K.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    Be.prototype.stateNamedEntity = function (e, t) { var r = this.decodeTree, n = r[this.treeIndex], i = (n & we.VALUE_LENGTH) >> 14; for (; t < e.length; t++, this.excess++) {
        var s = e.charCodeAt(t);
        if (this.treeIndex = mr(r, n, this.treeIndex + Math.max(1, i), s), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === ae.Attribute && (i === 0 || gr(s)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (n = r[this.treeIndex], i = (n & we.VALUE_LENGTH) >> 14, i !== 0) {
            if (s === K.SEMI)
                return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this.excess);
            this.decodeMode !== ae.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    Be.prototype.emitNotTerminatedNamedEntity = function () { var e; var _a = this, t = _a.result, r = _a.decodeTree, n = (r[t] & we.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(t, n, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed; };
    Be.prototype.emitNamedEntityData = function (e, t, r) { var n = this.decodeTree; return this.emitCodePoint(t === 1 ? n[e] & ~we.VALUE_LENGTH : n[e + 1], r), t === 3 && this.emitCodePoint(n[e + 2], r), r; };
    Be.prototype.end = function () { var e; switch (this.state) {
        case J.NamedEntity: return this.result !== 0 && (this.decodeMode !== ae.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case J.NumericDecimal: return this.emitNumericEntity(0, 2);
        case J.NumericHex: return this.emitNumericEntity(0, 3);
        case J.NumericStart: return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case J.EntityStart: return 0;
    } };
    return Be;
}());
function Kt(u) { var e = "", t = new Be(u, function (r) { return e += Me(r); }); return function (n, i) { var s = 0, c = 0; for (; (c = n.indexOf("&", c)) >= 0;) {
    e += n.slice(s, c), t.startEntity(i);
    var d = t.write(n, c + 1);
    if (d < 0) {
        s = c + t.end();
        break;
    }
    s = c + d, c = d === 0 ? s + 1 : s;
} var l = e + n.slice(s); return e = "", l; }; }
function mr(u, e, t, r) { var n = (e & we.BRANCH_LENGTH) >> 7, i = e & we.JUMP_TABLE; if (n === 0)
    return i !== 0 && r === i ? t : -1; if (i) {
    var l = r - i;
    return l < 0 || l >= n ? -1 : u[t + l] - 1;
} var s = t, c = s + n - 1; for (; s <= c;) {
    var l = s + c >>> 1, d = u[l];
    if (d < r)
        s = l + 1;
    else if (d > r)
        c = l - 1;
    else
        return u[l + n];
} return -1; }
var Wn = Kt(hu), $n = Kt(bu);
var w;
(function (u) { u[u.Tab = 9] = "Tab", u[u.NewLine = 10] = "NewLine", u[u.FormFeed = 12] = "FormFeed", u[u.CarriageReturn = 13] = "CarriageReturn", u[u.Space = 32] = "Space", u[u.ExclamationMark = 33] = "ExclamationMark", u[u.Number = 35] = "Number", u[u.Amp = 38] = "Amp", u[u.SingleQuote = 39] = "SingleQuote", u[u.DoubleQuote = 34] = "DoubleQuote", u[u.Dash = 45] = "Dash", u[u.Slash = 47] = "Slash", u[u.Zero = 48] = "Zero", u[u.Nine = 57] = "Nine", u[u.Semi = 59] = "Semi", u[u.Lt = 60] = "Lt", u[u.Eq = 61] = "Eq", u[u.Gt = 62] = "Gt", u[u.Questionmark = 63] = "Questionmark", u[u.UpperA = 65] = "UpperA", u[u.LowerA = 97] = "LowerA", u[u.UpperF = 70] = "UpperF", u[u.LowerF = 102] = "LowerF", u[u.UpperZ = 90] = "UpperZ", u[u.LowerZ = 122] = "LowerZ", u[u.LowerX = 120] = "LowerX", u[u.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(w || (w = {}));
var b;
(function (u) { u[u.Text = 1] = "Text", u[u.BeforeTagName = 2] = "BeforeTagName", u[u.InTagName = 3] = "InTagName", u[u.InSelfClosingTag = 4] = "InSelfClosingTag", u[u.BeforeClosingTagName = 5] = "BeforeClosingTagName", u[u.InClosingTagName = 6] = "InClosingTagName", u[u.AfterClosingTagName = 7] = "AfterClosingTagName", u[u.BeforeAttributeName = 8] = "BeforeAttributeName", u[u.InAttributeName = 9] = "InAttributeName", u[u.AfterAttributeName = 10] = "AfterAttributeName", u[u.BeforeAttributeValue = 11] = "BeforeAttributeValue", u[u.InAttributeValueDq = 12] = "InAttributeValueDq", u[u.InAttributeValueSq = 13] = "InAttributeValueSq", u[u.InAttributeValueNq = 14] = "InAttributeValueNq", u[u.BeforeDeclaration = 15] = "BeforeDeclaration", u[u.InDeclaration = 16] = "InDeclaration", u[u.InProcessingInstruction = 17] = "InProcessingInstruction", u[u.BeforeComment = 18] = "BeforeComment", u[u.CDATASequence = 19] = "CDATASequence", u[u.InSpecialComment = 20] = "InSpecialComment", u[u.InCommentLike = 21] = "InCommentLike", u[u.BeforeSpecialS = 22] = "BeforeSpecialS", u[u.BeforeSpecialT = 23] = "BeforeSpecialT", u[u.SpecialStartSequence = 24] = "SpecialStartSequence", u[u.InSpecialTag = 25] = "InSpecialTag", u[u.InEntity = 26] = "InEntity"; })(b || (b = {}));
function ye(u) { return u === w.Space || u === w.NewLine || u === w.Tab || u === w.FormFeed || u === w.CarriageReturn; }
function pu(u) { return u === w.Slash || u === w.Gt || ye(u); }
function xr(u) { return u >= w.LowerA && u <= w.LowerZ || u >= w.UpperA && u <= w.UpperZ; }
var ce;
(function (u) { u[u.NoValue = 0] = "NoValue", u[u.Unquoted = 1] = "Unquoted", u[u.Single = 2] = "Single", u[u.Double = 3] = "Double"; })(ce || (ce = {}));
var X = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Ge = (function () {
    function Ge(_a, r) {
        var _b = _a.xmlMode, e = _b === void 0 ? !1 : _b, _c = _a.decodeEntities, t = _c === void 0 ? !0 : _c;
        var _this = this;
        this.cbs = r, this.state = b.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = b.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = e, this.decodeEntities = t, this.entityDecoder = new Be(e ? bu : hu, function (n, i) { return _this.emitCodePoint(n, i); });
    }
    Ge.prototype.reset = function () { this.state = b.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = b.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Ge.prototype.write = function (e) { this.offset += this.buffer.length, this.buffer = e, this.parse(); };
    Ge.prototype.end = function () { this.running && this.finish(); };
    Ge.prototype.pause = function () { this.running = !1; };
    Ge.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Ge.prototype.stateText = function (e) { e === w.Lt || !this.decodeEntities && this.fastForwardTo(w.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = b.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && e === w.Amp && this.startEntity(); };
    Ge.prototype.stateSpecialStartSequence = function (e) { var t = this.sequenceIndex === this.currentSequence.length; if (!(t ? pu(e) : (e | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!t) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = b.InTagName, this.stateInTagName(e); };
    Ge.prototype.stateInSpecialTag = function (e) { if (this.sequenceIndex === this.currentSequence.length) {
        if (e === w.Gt || ye(e)) {
            var t = this.index - this.currentSequence.length;
            if (this.sectionStart < t) {
                var r = this.index;
                this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = r;
            }
            this.isSpecial = !1, this.sectionStart = t + 2, this.stateInClosingTagName(e);
            return;
        }
        this.sequenceIndex = 0;
    } (e | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === X.TitleEnd ? this.decodeEntities && e === w.Amp && this.startEntity() : this.fastForwardTo(w.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(e === w.Lt); };
    Ge.prototype.stateCDATASequence = function (e) { e === X.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === X.Cdata.length && (this.state = b.InCommentLike, this.currentSequence = X.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = b.InDeclaration, this.stateInDeclaration(e)); };
    Ge.prototype.fastForwardTo = function (e) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === e)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Ge.prototype.stateInCommentLike = function (e) { e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === X.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = b.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Ge.prototype.isTagStartChar = function (e) { return this.xmlMode ? !pu(e) : xr(e); };
    Ge.prototype.startSpecial = function (e, t) { this.isSpecial = !0, this.currentSequence = e, this.sequenceIndex = t, this.state = b.SpecialStartSequence; };
    Ge.prototype.stateBeforeTagName = function (e) { if (e === w.ExclamationMark)
        this.state = b.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (e === w.Questionmark)
        this.state = b.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(e)) {
        var t = e | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = b.InTagName : t === X.ScriptEnd[2] ? this.state = b.BeforeSpecialS : t === X.TitleEnd[2] ? this.state = b.BeforeSpecialT : this.state = b.InTagName;
    }
    else
        e === w.Slash ? this.state = b.BeforeClosingTagName : (this.state = b.Text, this.stateText(e)); };
    Ge.prototype.stateInTagName = function (e) { pu(e) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = b.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Ge.prototype.stateBeforeClosingTagName = function (e) { ye(e) || (e === w.Gt ? this.state = b.Text : (this.state = this.isTagStartChar(e) ? b.InClosingTagName : b.InSpecialComment, this.sectionStart = this.index)); };
    Ge.prototype.stateInClosingTagName = function (e) { (e === w.Gt || ye(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = b.AfterClosingTagName, this.stateAfterClosingTagName(e)); };
    Ge.prototype.stateAfterClosingTagName = function (e) { (e === w.Gt || this.fastForwardTo(w.Gt)) && (this.state = b.Text, this.sectionStart = this.index + 1); };
    Ge.prototype.stateBeforeAttributeName = function (e) { e === w.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = b.InSpecialTag, this.sequenceIndex = 0) : this.state = b.Text, this.sectionStart = this.index + 1) : e === w.Slash ? this.state = b.InSelfClosingTag : ye(e) || (this.state = b.InAttributeName, this.sectionStart = this.index); };
    Ge.prototype.stateInSelfClosingTag = function (e) { e === w.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = b.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : ye(e) || (this.state = b.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Ge.prototype.stateInAttributeName = function (e) { (e === w.Eq || pu(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = b.AfterAttributeName, this.stateAfterAttributeName(e)); };
    Ge.prototype.stateAfterAttributeName = function (e) { e === w.Eq ? this.state = b.BeforeAttributeValue : e === w.Slash || e === w.Gt ? (this.cbs.onattribend(ce.NoValue, this.sectionStart), this.sectionStart = -1, this.state = b.BeforeAttributeName, this.stateBeforeAttributeName(e)) : ye(e) || (this.cbs.onattribend(ce.NoValue, this.sectionStart), this.state = b.InAttributeName, this.sectionStart = this.index); };
    Ge.prototype.stateBeforeAttributeValue = function (e) { e === w.DoubleQuote ? (this.state = b.InAttributeValueDq, this.sectionStart = this.index + 1) : e === w.SingleQuote ? (this.state = b.InAttributeValueSq, this.sectionStart = this.index + 1) : ye(e) || (this.sectionStart = this.index, this.state = b.InAttributeValueNq, this.stateInAttributeValueNoQuotes(e)); };
    Ge.prototype.handleInAttributeValue = function (e, t) { e === t || !this.decodeEntities && this.fastForwardTo(t) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(t === w.DoubleQuote ? ce.Double : ce.Single, this.index + 1), this.state = b.BeforeAttributeName) : this.decodeEntities && e === w.Amp && this.startEntity(); };
    Ge.prototype.stateInAttributeValueDoubleQuotes = function (e) { this.handleInAttributeValue(e, w.DoubleQuote); };
    Ge.prototype.stateInAttributeValueSingleQuotes = function (e) { this.handleInAttributeValue(e, w.SingleQuote); };
    Ge.prototype.stateInAttributeValueNoQuotes = function (e) { ye(e) || e === w.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(ce.Unquoted, this.index), this.state = b.BeforeAttributeName, this.stateBeforeAttributeName(e)) : this.decodeEntities && e === w.Amp && this.startEntity(); };
    Ge.prototype.stateBeforeDeclaration = function (e) { e === w.OpeningSquareBracket ? (this.state = b.CDATASequence, this.sequenceIndex = 0) : this.state = e === w.Dash ? b.BeforeComment : b.InDeclaration; };
    Ge.prototype.stateInDeclaration = function (e) { (e === w.Gt || this.fastForwardTo(w.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = b.Text, this.sectionStart = this.index + 1); };
    Ge.prototype.stateInProcessingInstruction = function (e) { (e === w.Gt || this.fastForwardTo(w.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = b.Text, this.sectionStart = this.index + 1); };
    Ge.prototype.stateBeforeComment = function (e) { e === w.Dash ? (this.state = b.InCommentLike, this.currentSequence = X.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = b.InDeclaration; };
    Ge.prototype.stateInSpecialComment = function (e) { (e === w.Gt || this.fastForwardTo(w.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = b.Text, this.sectionStart = this.index + 1); };
    Ge.prototype.stateBeforeSpecialS = function (e) { var t = e | 32; t === X.ScriptEnd[3] ? this.startSpecial(X.ScriptEnd, 4) : t === X.StyleEnd[3] ? this.startSpecial(X.StyleEnd, 4) : (this.state = b.InTagName, this.stateInTagName(e)); };
    Ge.prototype.stateBeforeSpecialT = function (e) { var t = e | 32; t === X.TitleEnd[3] ? this.startSpecial(X.TitleEnd, 4) : t === X.TextareaEnd[3] ? this.startSpecial(X.TextareaEnd, 4) : (this.state = b.InTagName, this.stateInTagName(e)); };
    Ge.prototype.startEntity = function () { this.baseState = this.state, this.state = b.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? ae.Strict : this.baseState === b.Text || this.baseState === b.InSpecialTag ? ae.Legacy : ae.Attribute); };
    Ge.prototype.stateInEntity = function () { var e = this.entityDecoder.write(this.buffer, this.index - this.offset); e >= 0 ? (this.state = this.baseState, e === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Ge.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === b.Text || this.state === b.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === b.InAttributeValueDq || this.state === b.InAttributeValueSq || this.state === b.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Ge.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Ge.prototype.parse = function () { for (; this.shouldContinue();) {
        var e = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case b.Text: {
                this.stateText(e);
                break;
            }
            case b.SpecialStartSequence: {
                this.stateSpecialStartSequence(e);
                break;
            }
            case b.InSpecialTag: {
                this.stateInSpecialTag(e);
                break;
            }
            case b.CDATASequence: {
                this.stateCDATASequence(e);
                break;
            }
            case b.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(e);
                break;
            }
            case b.InAttributeName: {
                this.stateInAttributeName(e);
                break;
            }
            case b.InCommentLike: {
                this.stateInCommentLike(e);
                break;
            }
            case b.InSpecialComment: {
                this.stateInSpecialComment(e);
                break;
            }
            case b.BeforeAttributeName: {
                this.stateBeforeAttributeName(e);
                break;
            }
            case b.InTagName: {
                this.stateInTagName(e);
                break;
            }
            case b.InClosingTagName: {
                this.stateInClosingTagName(e);
                break;
            }
            case b.BeforeTagName: {
                this.stateBeforeTagName(e);
                break;
            }
            case b.AfterAttributeName: {
                this.stateAfterAttributeName(e);
                break;
            }
            case b.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(e);
                break;
            }
            case b.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(e);
                break;
            }
            case b.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(e);
                break;
            }
            case b.AfterClosingTagName: {
                this.stateAfterClosingTagName(e);
                break;
            }
            case b.BeforeSpecialS: {
                this.stateBeforeSpecialS(e);
                break;
            }
            case b.BeforeSpecialT: {
                this.stateBeforeSpecialT(e);
                break;
            }
            case b.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(e);
                break;
            }
            case b.InSelfClosingTag: {
                this.stateInSelfClosingTag(e);
                break;
            }
            case b.InDeclaration: {
                this.stateInDeclaration(e);
                break;
            }
            case b.BeforeDeclaration: {
                this.stateBeforeDeclaration(e);
                break;
            }
            case b.BeforeComment: {
                this.stateBeforeComment(e);
                break;
            }
            case b.InProcessingInstruction: {
                this.stateInProcessingInstruction(e);
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
    Ge.prototype.handleTrailingData = function () { var e = this.buffer.length + this.offset; this.sectionStart >= e || (this.state === b.InCommentLike ? this.currentSequence === X.CdataEnd ? this.cbs.oncdata(this.sectionStart, e, 0) : this.cbs.oncomment(this.sectionStart, e, 0) : this.state === b.InTagName || this.state === b.BeforeAttributeName || this.state === b.BeforeAttributeValue || this.state === b.AfterAttributeName || this.state === b.InAttributeName || this.state === b.InAttributeValueSq || this.state === b.InAttributeValueDq || this.state === b.InAttributeValueNq || this.state === b.InClosingTagName || this.cbs.ontext(this.sectionStart, e)); };
    Ge.prototype.emitCodePoint = function (e, t) { this.baseState !== b.Text && this.baseState !== b.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.onattribentity(e)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.ontextentity(e, this.sectionStart)); };
    return Ge;
}());
var He = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), U = new Set(["p"]), Xt = new Set(["thead", "tbody"]), Qt = new Set(["dd", "dt"]), Yt = new Set(["rt", "rp"]), yr = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", U], ["h1", U], ["h2", U], ["h3", U], ["h4", U], ["h5", U], ["h6", U], ["select", He], ["input", He], ["output", He], ["button", He], ["datalist", He], ["textarea", He], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", Qt], ["dt", Qt], ["address", U], ["article", U], ["aside", U], ["blockquote", U], ["details", U], ["div", U], ["dl", U], ["fieldset", U], ["figcaption", U], ["figure", U], ["footer", U], ["form", U], ["header", U], ["hr", U], ["main", U], ["nav", U], ["ol", U], ["pre", U], ["section", U], ["table", U], ["ul", U], ["rt", Yt], ["rp", Yt], ["tbody", Xt], ["tfoot", Xt]]), vr = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Zt = new Set(["math", "svg"]), e0 = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), Sr = /\s|\//, Ye = (function () {
    function Ye(e, t) {
        if (t === void 0) { t = {}; }
        var r, n, i, s, c, l;
        this.options = t, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = e != null ? e : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r = t.lowerCaseTags) !== null && r !== void 0 ? r : this.htmlMode, this.lowerCaseAttributeNames = (n = t.lowerCaseAttributeNames) !== null && n !== void 0 ? n : this.htmlMode, this.recognizeSelfClosing = (i = t.recognizeSelfClosing) !== null && i !== void 0 ? i : !this.htmlMode, this.tokenizer = new ((s = t.Tokenizer) !== null && s !== void 0 ? s : Ge)(this.options, this), this.foreignContext = [!this.htmlMode], (l = (c = this.cbs).onparserinit) === null || l === void 0 || l.call(c, this);
    }
    Ye.prototype.ontext = function (e, t) { var r, n; var i = this.getSlice(e, t); this.endIndex = t - 1, (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, i), this.startIndex = t; };
    Ye.prototype.ontextentity = function (e, t) { var r, n; this.endIndex = t - 1, (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, Me(e)), this.startIndex = t; };
    Ye.prototype.isVoidElement = function (e) { return this.htmlMode && vr.has(e); };
    Ye.prototype.onopentagname = function (e, t) { this.endIndex = t; var r = this.getSlice(e, t); this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r); };
    Ye.prototype.emitOpenTag = function (e) { var t, r, n, i; this.openTagStart = this.startIndex, this.tagname = e; var s = this.htmlMode && yr.get(e); if (s)
        for (; this.stack.length > 0 && s.has(this.stack[0]);) {
            var c = this.stack.shift();
            (r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, c, !0);
        } this.isVoidElement(e) || (this.stack.unshift(e), this.htmlMode && (Zt.has(e) ? this.foreignContext.unshift(!0) : e0.has(e) && this.foreignContext.unshift(!1))), (i = (n = this.cbs).onopentagname) === null || i === void 0 || i.call(n, e), this.cbs.onopentag && (this.attribs = {}); };
    Ye.prototype.endOpenTag = function (e) { var t, r; this.startIndex = this.openTagStart, this.attribs && ((r = (t = this.cbs).onopentag) === null || r === void 0 || r.call(t, this.tagname, this.attribs, e), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    Ye.prototype.onopentagend = function (e) { this.endIndex = e, this.endOpenTag(!1), this.startIndex = e + 1; };
    Ye.prototype.onclosetag = function (e, t) { var r, n, i, s, c, l, d, g; this.endIndex = t; var A = this.getSlice(e, t); if (this.lowerCaseTagNames && (A = A.toLowerCase()), this.htmlMode && (Zt.has(A) || e0.has(A)) && this.foreignContext.shift(), this.isVoidElement(A))
        this.htmlMode && A === "br" && ((s = (i = this.cbs).onopentagname) === null || s === void 0 || s.call(i, "br"), (l = (c = this.cbs).onopentag) === null || l === void 0 || l.call(c, "br", {}, !0), (g = (d = this.cbs).onclosetag) === null || g === void 0 || g.call(d, "br", !1));
    else {
        var S = this.stack.indexOf(A);
        if (S !== -1)
            for (var x = 0; x <= S; x++) {
                var E = this.stack.shift();
                (n = (r = this.cbs).onclosetag) === null || n === void 0 || n.call(r, E, x !== S);
            }
        else
            this.htmlMode && A === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = t + 1; };
    Ye.prototype.onselfclosingtag = function (e) { this.endIndex = e, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = e + 1) : this.onopentagend(e); };
    Ye.prototype.closeCurrentTag = function (e) { var t, r; var n = this.tagname; this.endOpenTag(e), this.stack[0] === n && ((r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, n, !e), this.stack.shift()); };
    Ye.prototype.onattribname = function (e, t) { this.startIndex = e; var r = this.getSlice(e, t); this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r; };
    Ye.prototype.onattribdata = function (e, t) { this.attribvalue += this.getSlice(e, t); };
    Ye.prototype.onattribentity = function (e) { this.attribvalue += Me(e); };
    Ye.prototype.onattribend = function (e, t) { var r, n; this.endIndex = t, (n = (r = this.cbs).onattribute) === null || n === void 0 || n.call(r, this.attribname, this.attribvalue, e === ce.Double ? '"' : e === ce.Single ? "'" : e === ce.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    Ye.prototype.getInstructionName = function (e) { var t = e.search(Sr), r = t < 0 ? e : e.substr(0, t); return this.lowerCaseTagNames && (r = r.toLowerCase()), r; };
    Ye.prototype.ondeclaration = function (e, t) { this.endIndex = t; var r = this.getSlice(e, t); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(n), "!".concat(r));
    } this.startIndex = t + 1; };
    Ye.prototype.onprocessinginstruction = function (e, t) { this.endIndex = t; var r = this.getSlice(e, t); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(n), "?".concat(r));
    } this.startIndex = t + 1; };
    Ye.prototype.oncomment = function (e, t, r) { var n, i, s, c; this.endIndex = t, (i = (n = this.cbs).oncomment) === null || i === void 0 || i.call(n, this.getSlice(e, t - r)), (c = (s = this.cbs).oncommentend) === null || c === void 0 || c.call(s), this.startIndex = t + 1; };
    Ye.prototype.oncdata = function (e, t, r) { var n, i, s, c, l, d, g, A, S, x; this.endIndex = t; var E = this.getSlice(e, t - r); !this.htmlMode || this.options.recognizeCDATA ? ((i = (n = this.cbs).oncdatastart) === null || i === void 0 || i.call(n), (c = (s = this.cbs).ontext) === null || c === void 0 || c.call(s, E), (d = (l = this.cbs).oncdataend) === null || d === void 0 || d.call(l)) : ((A = (g = this.cbs).oncomment) === null || A === void 0 || A.call(g, "[CDATA[".concat(E, "]]")), (x = (S = this.cbs).oncommentend) === null || x === void 0 || x.call(S)), this.startIndex = t + 1; };
    Ye.prototype.onend = function () { var e, t; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = 0; r < this.stack.length; r++)
            this.cbs.onclosetag(this.stack[r], !0);
    } (t = (e = this.cbs).onend) === null || t === void 0 || t.call(e); };
    Ye.prototype.reset = function () { var e, t, r, n; (t = (e = this.cbs).onreset) === null || t === void 0 || t.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (n = (r = this.cbs).onparserinit) === null || n === void 0 || n.call(r, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    Ye.prototype.parseComplete = function (e) { this.reset(), this.end(e); };
    Ye.prototype.getSlice = function (e, t) { for (; e - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var r = this.buffers[0].slice(e - this.bufferOffset, t - this.bufferOffset); for (; t - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), r += this.buffers[0].slice(0, t - this.bufferOffset); return r; };
    Ye.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    Ye.prototype.write = function (e) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".write() after done!"));
        return;
    } this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++); };
    Ye.prototype.end = function (e) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".end() after done!"));
        return;
    } e && this.write(e), this.ended = !0, this.tokenizer.end(); };
    Ye.prototype.pause = function () { this.tokenizer.pause(); };
    Ye.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    Ye.prototype.parseChunk = function (e) { this.write(e); };
    Ye.prototype.done = function (e) { this.end(e); };
    return Ye;
}());
var gu = {};
$u(gu, { CDATA: function () { return at; }, Comment: function () { return ut; }, Directive: function () { return et; }, Doctype: function () { return it; }, ElementType: function () { return I; }, Root: function () { return Yu; }, Script: function () { return tt; }, Style: function () { return rt; }, Tag: function () { return nt; }, Text: function () { return Zu; }, isTag: function () { return Qu; } });
var I;
(function (u) { u.Root = "root", u.Text = "text", u.Directive = "directive", u.Comment = "comment", u.Script = "script", u.Style = "style", u.Tag = "tag", u.CDATA = "cdata", u.Doctype = "doctype"; })(I || (I = {}));
function Qu(u) { return u.type === I.Tag || u.type === I.Script || u.type === I.Style; }
var Yu = I.Root, Zu = I.Text, et = I.Directive, ut = I.Comment, tt = I.Script, rt = I.Style, nt = I.Tag, at = I.CDATA, it = I.Doctype;
var mu = (function () {
    function mu() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(mu.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (e) { this.parent = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mu.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (e) { this.prev = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mu.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (e) { this.next = e; },
        enumerable: false,
        configurable: true
    });
    mu.prototype.cloneNode = function (e) {
        if (e === void 0) { e = !1; }
        return u0(this, e);
    };
    return mu;
}()), Ze = (function (_super) {
    __extends(Ze, _super);
    function Ze(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = e;
        return _this;
    }
    Object.defineProperty(Ze.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (e) { this.data = e; },
        enumerable: false,
        configurable: true
    });
    return Ze;
}(mu)), Pe = (function (_super) {
    __extends(Pe, _super);
    function Pe() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = I.Text;
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
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = I.Comment;
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
    function uu(e, t) {
        var _this = this;
        _this = _super.call(this, t) || this, _this.name = e, _this.type = I.Directive;
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
    function tu(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = e;
        return _this;
    }
    Object.defineProperty(tu.prototype, "firstChild", {
        get: function () { var e; return (e = this.children[0]) !== null && e !== void 0 ? e : null; },
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
        set: function (e) { this.children = e; },
        enumerable: false,
        configurable: true
    });
    return tu;
}(mu)), ru = (function (_super) {
    __extends(ru, _super);
    function ru() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = I.CDATA;
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
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = I.Root;
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
    function nu(e, t, r, n) {
        if (r === void 0) { r = []; }
        if (n === void 0) { n = e === "script" ? I.Script : e === "style" ? I.Style : I.Tag; }
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = e, _this.attribs = t, _this.type = n;
        return _this;
    }
    Object.defineProperty(nu.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(nu.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (e) { this.name = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(nu.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (e) { var t, r; return { name: e, value: _this.attribs[e], namespace: (t = _this["x-attribsNamespace"]) === null || t === void 0 ? void 0 : t[e], prefix: (r = _this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[e] }; });
        },
        enumerable: false,
        configurable: true
    });
    return nu;
}(tu));
function k(u) { return Qu(u); }
function Ve(u) { return u.type === I.CDATA; }
function he(u) { return u.type === I.Text; }
function au(u) { return u.type === I.Comment; }
function Ar(u) { return u.type === I.Directive; }
function ct(u) { return u.type === I.Root; }
function Y(u) { return Object.prototype.hasOwnProperty.call(u, "children"); }
function u0(u, e) {
    if (e === void 0) { e = !1; }
    var t;
    if (he(u))
        t = new Pe(u.data);
    else if (au(u))
        t = new eu(u.data);
    else if (k(u)) {
        var r = e ? st(u.children) : [], n_1 = new nu(u.name, le({}, u.attribs), r);
        r.forEach(function (i) { return i.parent = n_1; }), u.namespace != null && (n_1.namespace = u.namespace), u["x-attribsNamespace"] && (n_1["x-attribsNamespace"] = le({}, u["x-attribsNamespace"])), u["x-attribsPrefix"] && (n_1["x-attribsPrefix"] = le({}, u["x-attribsPrefix"])), t = n_1;
    }
    else if (Ve(u)) {
        var r = e ? st(u.children) : [], n_2 = new ru(r);
        r.forEach(function (i) { return i.parent = n_2; }), t = n_2;
    }
    else if (ct(u)) {
        var r = e ? st(u.children) : [], n_3 = new _e(r);
        r.forEach(function (i) { return i.parent = n_3; }), u["x-mode"] && (n_3["x-mode"] = u["x-mode"]), t = n_3;
    }
    else if (Ar(u)) {
        var r = new uu(u.name, u.data);
        u["x-name"] != null && (r["x-name"] = u["x-name"], r["x-publicId"] = u["x-publicId"], r["x-systemId"] = u["x-systemId"]), t = r;
    }
    else
        throw new Error("Not implemented yet: ".concat(u.type));
    return t.startIndex = u.startIndex, t.endIndex = u.endIndex, u.sourceCodeLocation != null && (t.sourceCodeLocation = u.sourceCodeLocation), t;
}
function st(u) { var e = u.map(function (t) { return u0(t, !0); }); for (var t = 1; t < e.length; t++)
    e[t].prev = e[t - 1], e[t - 1].next = e[t]; return e; }
var t0 = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, je = (function () {
    function je(e, t, r) {
        this.dom = [], this.root = new _e(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof t == "function" && (r = t, t = t0), typeof e == "object" && (t = e, e = void 0), this.callback = e != null ? e : null, this.options = t != null ? t : t0, this.elementCB = r != null ? r : null;
    }
    je.prototype.onparserinit = function (e) { this.parser = e; };
    je.prototype.onreset = function () { this.dom = [], this.root = new _e(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    je.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    je.prototype.onerror = function (e) { this.handleCallback(e); };
    je.prototype.onclosetag = function () { this.lastNode = null; var e = this.tagStack.pop(); this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e); };
    je.prototype.onopentag = function (e, t) { var r = this.options.xmlMode ? I.Tag : void 0, n = new nu(e, t, void 0, r); this.addNode(n), this.tagStack.push(n); };
    je.prototype.ontext = function (e) { var t = this.lastNode; if (t && t.type === I.Text)
        t.data += e, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
    else {
        var r = new Pe(e);
        this.addNode(r), this.lastNode = r;
    } };
    je.prototype.oncomment = function (e) { if (this.lastNode && this.lastNode.type === I.Comment) {
        this.lastNode.data += e;
        return;
    } var t = new eu(e); this.addNode(t), this.lastNode = t; };
    je.prototype.oncommentend = function () { this.lastNode = null; };
    je.prototype.oncdatastart = function () { var e = new Pe(""), t = new ru([e]); this.addNode(t), e.parent = t, this.lastNode = e; };
    je.prototype.oncdataend = function () { this.lastNode = null; };
    je.prototype.onprocessinginstruction = function (e, t) { var r = new uu(e, t); this.addNode(r); };
    je.prototype.handleCallback = function (e) { if (typeof this.callback == "function")
        this.callback(e, this.dom);
    else if (e)
        throw e; };
    je.prototype.addNode = function (e) { var t = this.tagStack[this.tagStack.length - 1], r = t.children[t.children.length - 1]; this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), t.children.push(e), r && (e.prev = r, r.next = e), e.parent = t, this.lastNode = null; };
    return je;
}());
var be = {};
$u(be, { DocumentPosition: function () { return oe; }, append: function () { return _r; }, appendChild: function () { return Pr; }, compareDocumentPosition: function () { return m0; }, existsOne: function () { return p0; }, filter: function () { return We; }, find: function () { return Eu; }, findAll: function () { return zr; }, findOne: function () { return Tu; }, findOneChild: function () { return jr; }, getAttributeValue: function () { return Mr; }, getChildren: function () { return Au; }, getElementById: function () { return Kr; }, getElements: function () { return Jr; }, getElementsByClassName: function () { return Xr; }, getElementsByTagName: function () { return Le; }, getElementsByTagType: function () { return Qr; }, getFeed: function () { return vt; }, getInnerHTML: function () { return Fr; }, getName: function () { return Gr; }, getOuterHTML: function () { return h0; }, getParent: function () { return b0; }, getSiblings: function () { return wu; }, getText: function () { return Su; }, hasAttrib: function () { return Br; }, hasChildren: function () { return Y; }, innerText: function () { return bt; }, isCDATA: function () { return Ve; }, isComment: function () { return au; }, isDocument: function () { return ct; }, isTag: function () { return k; }, isText: function () { return he; }, nextElementSibling: function () { return pt; }, prepend: function () { return mt; }, prependChild: function () { return Vr; }, prevElementSibling: function () { return gt; }, removeElement: function () { return ve; }, removeSubsets: function () { return Yr; }, replaceElement: function () { return Hr; }, testElement: function () { return $r; }, textContent: function () { return Ee; }, uniqueSort: function () { return yt; } });
function xu(u) { for (var e = 1; e < u.length; e++)
    u[e][0] += u[e - 1][0] + 1; return u; }
var wr = new Map(xu([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(xu([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(xu([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(xu([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var ot = /["&'<>$\x80-\uFFFF]/g, r0 = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), n0 = String.prototype.codePointAt != null ? function (u, e) { return u.codePointAt(e); } : function (u, e) { return (u.charCodeAt(e) & 64512) === 55296 ? (u.charCodeAt(e) - 55296) * 1024 + u.charCodeAt(e + 1) - 56320 + 65536 : u.charCodeAt(e); };
function iu(u) { var e = "", t = 0, r; for (; (r = ot.exec(u)) !== null;) {
    var n = r.index, i = u.charCodeAt(n), s = r0.get(i);
    s !== void 0 ? (e += u.substring(t, n) + s, t = n + 1) : (e += "".concat(u.substring(t, n), "&#x").concat(n0(u, n).toString(16), ";"), t = ot.lastIndex += +((i & 64512) === 55296));
} return e + u.substr(t); }
function ft(u, e) { return function (r) { var n, i = 0, s = ""; for (; n = u.exec(r);)
    i !== n.index && (s += r.substring(i, n.index)), s += e.get(n[0].charCodeAt(0)), i = n.index + 1; return s + r.substring(i); }; }
var a0 = ft(/[&<>'"]/g, r0), yu = ft(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), vu = ft(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var i0;
(function (u) { u[u.XML = 0] = "XML", u[u.HTML = 1] = "HTML"; })(i0 || (i0 = {}));
var s0;
(function (u) { u[u.UTF8 = 0] = "UTF8", u[u.ASCII = 1] = "ASCII", u[u.Extensive = 2] = "Extensive", u[u.Attribute = 3] = "Attribute", u[u.Text = 4] = "Text"; })(s0 || (s0 = {}));
var f0 = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (u) { return [u.toLowerCase(), u]; })), l0 = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (u) { return [u.toLowerCase(), u]; }));
var Tr = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function Nr(u) { return u.replace(/"/g, "&quot;"); }
function Cr(u, e) { var t; if (!u)
    return; var r = ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) === !1 ? Nr : e.xmlMode || e.encodeEntities !== "utf8" ? iu : yu; return Object.keys(u).map(function (n) { var i, s; var c = (i = u[n]) !== null && i !== void 0 ? i : ""; return e.xmlMode === "foreign" && (n = (s = l0.get(n)) !== null && s !== void 0 ? s : n), !e.emptyAttrs && !e.xmlMode && c === "" ? n : "".concat(n, "=\"").concat(r(c), "\""); }).join(" "); }
var d0 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function ht(u, e) {
    if (e === void 0) { e = {}; }
    var t = "length" in u ? u : [u], r = "";
    for (var n = 0; n < t.length; n++)
        r += Ir(t[n], e);
    return r;
}
var ze = ht;
function Ir(u, e) { switch (u.type) {
    case Yu: return ht(u.children, e);
    case it:
    case et: return Ur(u);
    case ut: return Rr(u);
    case at: return Dr(u);
    case tt:
    case rt:
    case nt: return Lr(u, e);
    case Zu: return Or(u, e);
} }
var kr = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), qr = new Set(["svg", "math"]);
function Lr(u, e) { var t; e.xmlMode === "foreign" && (u.name = (t = f0.get(u.name)) !== null && t !== void 0 ? t : u.name, u.parent && kr.has(u.parent.name) && (e = ke(le({}, e), { xmlMode: !1 }))), !e.xmlMode && qr.has(u.name) && (e = ke(le({}, e), { xmlMode: "foreign" })); var r = "<".concat(u.name), n = Cr(u.attribs, e); return n && (r += " ".concat(n)), u.children.length === 0 && (e.xmlMode ? e.selfClosingTags !== !1 : e.selfClosingTags && d0.has(u.name)) ? (e.xmlMode || (r += " "), r += "/>") : (r += ">", u.children.length > 0 && (r += ht(u.children, e)), (e.xmlMode || !d0.has(u.name)) && (r += "</".concat(u.name, ">"))), r; }
function Ur(u) { return "<".concat(u.data, ">"); }
function Or(u, e) { var t; var r = u.data || ""; return ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) !== !1 && !(!e.xmlMode && u.parent && Tr.has(u.parent.name)) && (r = e.xmlMode || e.encodeEntities !== "utf8" ? iu(r) : vu(r)), r; }
function Dr(u) { return "<![CDATA[".concat(u.children[0].data, "]]>"); }
function Rr(u) { return "<!--".concat(u.data, "-->"); }
function h0(u, e) { return ze(u, e); }
function Fr(u, e) { return Y(u) ? u.children.map(function (t) { return h0(t, e); }).join("") : ""; }
function Su(u) {
    return Array.isArray(u) ? u.map(Su).join("") : k(u) ? u.name === "br" ? "\n" : Su(u.children) : Ve(u) ? Su(u.children) : he(u) ? u.data : "";
}
function Ee(u) { return Array.isArray(u) ? u.map(Ee).join("") : Y(u) && !au(u) ? Ee(u.children) : he(u) ? u.data : ""; }
function bt(u) { return Array.isArray(u) ? u.map(bt).join("") : Y(u) && (u.type === I.Tag || Ve(u)) ? bt(u.children) : he(u) ? u.data : ""; }
function Au(u) { return Y(u) ? u.children : []; }
function b0(u) { return u.parent || null; }
function wu(u) {
    var _a, _b;
    var e = b0(u);
    if (e != null)
        return Au(e);
    var t = [u], r = u.prev, n = u.next;
    for (; r != null;)
        t.unshift(r), _a = r, r = _a.prev;
    for (; n != null;)
        t.push(n), _b = n, n = _b.next;
    return t;
}
function Mr(u, e) { var t; return (t = u.attribs) === null || t === void 0 ? void 0 : t[e]; }
function Br(u, e) { return u.attribs != null && Object.prototype.hasOwnProperty.call(u.attribs, e) && u.attribs[e] != null; }
function Gr(u) { return u.name; }
function pt(u) {
    var _a;
    var e = u.next;
    for (; e !== null && !k(e);)
        (_a = e, e = _a.next);
    return e;
}
function gt(u) {
    var _a;
    var e = u.prev;
    for (; e !== null && !k(e);)
        (_a = e, e = _a.prev);
    return e;
}
function ve(u) { if (u.prev && (u.prev.next = u.next), u.next && (u.next.prev = u.prev), u.parent) {
    var e = u.parent.children, t = e.lastIndexOf(u);
    t >= 0 && e.splice(t, 1);
} u.next = null, u.prev = null, u.parent = null; }
function Hr(u, e) { var t = e.prev = u.prev; t && (t.next = e); var r = e.next = u.next; r && (r.prev = e); var n = e.parent = u.parent; if (n) {
    var i = n.children;
    i[i.lastIndexOf(u)] = e, u.parent = null;
} }
function Pr(u, e) { if (ve(e), e.next = null, e.parent = u, u.children.push(e) > 1) {
    var t = u.children[u.children.length - 2];
    t.next = e, e.prev = t;
}
else
    e.prev = null; }
function _r(u, e) { ve(e); var t = u.parent, r = u.next; if (e.next = r, e.prev = u, u.next = e, e.parent = t, r) {
    if (r.prev = e, t) {
        var n = t.children;
        n.splice(n.lastIndexOf(r), 0, e);
    }
}
else
    t && t.children.push(e); }
function Vr(u, e) { if (ve(e), e.parent = u, e.prev = null, u.children.unshift(e) !== 1) {
    var t = u.children[1];
    t.prev = e, e.next = t;
}
else
    e.next = null; }
function mt(u, e) { ve(e); var t = u.parent; if (t) {
    var r = t.children;
    r.splice(r.indexOf(u), 0, e);
} u.prev && (u.prev.next = e), e.parent = t, e.prev = u.prev, e.next = u, u.prev = e; }
function We(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Eu(u, Array.isArray(e) ? e : [e], t, r);
}
function Eu(u, e, t, r) { var n = [], i = [Array.isArray(e) ? e : [e]], s = [0]; for (;;) {
    if (s[0] >= i[0].length) {
        if (s.length === 1)
            return n;
        i.shift(), s.shift();
        continue;
    }
    var c = i[0][s[0]++];
    if (u(c) && (n.push(c), --r <= 0))
        return n;
    t && Y(c) && c.children.length > 0 && (s.unshift(0), i.unshift(c.children));
} }
function jr(u, e) { return e.find(u); }
function Tu(u, e, t) {
    if (t === void 0) { t = !0; }
    var r = Array.isArray(e) ? e : [e];
    for (var n = 0; n < r.length; n++) {
        var i = r[n];
        if (k(i) && u(i))
            return i;
        if (t && Y(i) && i.children.length > 0) {
            var s = Tu(u, i.children, !0);
            if (s)
                return s;
        }
    }
    return null;
}
function p0(u, e) { return (Array.isArray(e) ? e : [e]).some(function (t) { return k(t) && u(t) || Y(t) && p0(u, t.children); }); }
function zr(u, e) { var t = [], r = [Array.isArray(e) ? e : [e]], n = [0]; for (;;) {
    if (n[0] >= r[0].length) {
        if (r.length === 1)
            return t;
        r.shift(), n.shift();
        continue;
    }
    var i = r[0][n[0]++];
    k(i) && u(i) && t.push(i), Y(i) && i.children.length > 0 && (n.unshift(0), r.unshift(i.children));
} }
var Nu = { tag_name: function (u) { return typeof u == "function" ? function (e) { return k(e) && u(e.name); } : u === "*" ? k : function (e) { return k(e) && e.name === u; }; }, tag_type: function (u) { return typeof u == "function" ? function (e) { return u(e.type); } : function (e) { return e.type === u; }; }, tag_contains: function (u) { return typeof u == "function" ? function (e) { return he(e) && u(e.data); } : function (e) { return he(e) && e.data === u; }; } };
function xt(u, e) { return typeof e == "function" ? function (t) { return k(t) && e(t.attribs[u]); } : function (t) { return k(t) && t.attribs[u] === e; }; }
function Wr(u, e) { return function (t) { return u(t) || e(t); }; }
function g0(u) { var e = Object.keys(u).map(function (t) { var r = u[t]; return Object.prototype.hasOwnProperty.call(Nu, t) ? Nu[t](r) : xt(t, r); }); return e.length === 0 ? null : e.reduce(Wr); }
function $r(u, e) { var t = g0(u); return t ? t(e) : !0; }
function Jr(u, e, t, r) {
    if (r === void 0) { r = 1 / 0; }
    var n = g0(u);
    return n ? We(n, e, t, r) : [];
}
function Kr(u, e, t) {
    if (t === void 0) { t = !0; }
    return Array.isArray(e) || (e = [e]), Tu(xt("id", u), e, t);
}
function Le(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return We(Nu.tag_name(u), e, t, r);
}
function Xr(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return We(xt("class", u), e, t, r);
}
function Qr(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return We(Nu.tag_type(u), e, t, r);
}
function Yr(u) { var e = u.length; for (; --e >= 0;) {
    var t = u[e];
    if (e > 0 && u.lastIndexOf(t, e - 1) >= 0) {
        u.splice(e, 1);
        continue;
    }
    for (var r = t.parent; r; r = r.parent)
        if (u.includes(r)) {
            u.splice(e, 1);
            break;
        }
} return u; }
var oe;
(function (u) { u[u.DISCONNECTED = 1] = "DISCONNECTED", u[u.PRECEDING = 2] = "PRECEDING", u[u.FOLLOWING = 4] = "FOLLOWING", u[u.CONTAINS = 8] = "CONTAINS", u[u.CONTAINED_BY = 16] = "CONTAINED_BY"; })(oe || (oe = {}));
function m0(u, e) { var t = [], r = []; if (u === e)
    return 0; var n = Y(u) ? u : u.parent; for (; n;)
    t.unshift(n), n = n.parent; for (n = Y(e) ? e : e.parent; n;)
    r.unshift(n), n = n.parent; var i = Math.min(t.length, r.length), s = 0; for (; s < i && t[s] === r[s];)
    s++; if (s === 0)
    return oe.DISCONNECTED; var c = t[s - 1], l = c.children, d = t[s], g = r[s]; return l.indexOf(d) > l.indexOf(g) ? c === e ? oe.FOLLOWING | oe.CONTAINED_BY : oe.FOLLOWING : c === u ? oe.PRECEDING | oe.CONTAINS : oe.PRECEDING; }
function yt(u) { return u = u.filter(function (e, t, r) { return !r.includes(e, t + 1); }), u.sort(function (e, t) { var r = m0(e, t); return r & oe.PRECEDING ? -1 : r & oe.FOLLOWING ? 1 : 0; }), u; }
function vt(u) { var e = Cu(rn, u); return e ? e.name === "feed" ? Zr(e) : en(e) : null; }
function Zr(u) { var e; var t = u.children, r = { type: "atom", items: Le("entry", t).map(function (s) { var c; var l = s.children, d = { media: x0(l) }; ue(d, "id", "id", l), ue(d, "title", "title", l); var g = (c = Cu("link", l)) === null || c === void 0 ? void 0 : c.attribs.href; g && (d.link = g); var A = Te("summary", l) || Te("content", l); A && (d.description = A); var S = Te("updated", l); return S && (d.pubDate = new Date(S)), d; }) }; ue(r, "id", "id", t), ue(r, "title", "title", t); var n = (e = Cu("link", t)) === null || e === void 0 ? void 0 : e.attribs.href; n && (r.link = n), ue(r, "description", "subtitle", t); var i = Te("updated", t); return i && (r.updated = new Date(i)), ue(r, "author", "email", t, !0), r; }
function en(u) { var e, t; var r = (t = (e = Cu("channel", u.children)) === null || e === void 0 ? void 0 : e.children) !== null && t !== void 0 ? t : [], n = { type: u.name.substr(0, 3), id: "", items: Le("item", u.children).map(function (s) { var c = s.children, l = { media: x0(c) }; ue(l, "id", "guid", c), ue(l, "title", "title", c), ue(l, "link", "link", c), ue(l, "description", "description", c); var d = Te("pubDate", c) || Te("dc:date", c); return d && (l.pubDate = new Date(d)), l; }) }; ue(n, "title", "title", r), ue(n, "link", "link", r), ue(n, "description", "description", r); var i = Te("lastBuildDate", r); return i && (n.updated = new Date(i)), ue(n, "author", "managingEditor", r, !0), n; }
var un = ["url", "type", "lang"], tn = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function x0(u) { return Le("media:content", u).map(function (e) {
    var e_4, _a, e_5, _b;
    var t = e.attribs, r = { medium: t.medium, isDefault: !!t.isDefault };
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
function Cu(u, e) { return Le(u, e, !0, 1)[0]; }
function Te(u, e, t) {
    if (t === void 0) { t = !1; }
    return Ee(Le(u, e, t, 1)).trim();
}
function ue(u, e, t, r, n) {
    if (n === void 0) { n = !1; }
    var i = Te(t, r, n);
    i && (u[e] = i);
}
function rn(u) { return u === "rss" || u === "feed" || u === "rdf:RDF"; }
function y0(u, e) { var t = new je(void 0, e); return new Ye(t, e).end(u), t.root; }
var v;
(function (u) { u.Attribute = "attribute", u.Pseudo = "pseudo", u.PseudoElement = "pseudo-element", u.Tag = "tag", u.Universal = "universal", u.Adjacent = "adjacent", u.Child = "child", u.Descendant = "descendant", u.Parent = "parent", u.Sibling = "sibling", u.ColumnCombinator = "column-combinator"; })(v || (v = {}));
var _;
(function (u) { u.Any = "any", u.Element = "element", u.End = "end", u.Equals = "equals", u.Exists = "exists", u.Hyphen = "hyphen", u.Not = "not", u.Start = "start"; })(_ || (_ = {}));
var v0 = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, nn = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, an = new Map([[126, _.Element], [94, _.Start], [36, _.End], [42, _.Any], [33, _.Not], [124, _.Hyphen]]), sn = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function Ue(u) { switch (u.type) {
    case v.Adjacent:
    case v.Child:
    case v.Descendant:
    case v.Parent:
    case v.Sibling:
    case v.ColumnCombinator: return !0;
    default: return !1;
} }
var cn = new Set(["contains", "icontains"]);
function on(u, e, t) { var r = parseInt(e, 16) - 65536; return r !== r || t ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320); }
function su(u) { return u.replace(nn, on); }
function St(u) { return u === 39 || u === 34; }
function S0(u) { return u === 32 || u === 9 || u === 10 || u === 12 || u === 13; }
function Ne(u) { var e = [], t = A0(e, "".concat(u), 0); if (t < u.length)
    throw new Error("Unmatched selector: ".concat(u.slice(t))); return e; }
function A0(u, e, t) { var r = []; function n(S) { var x = e.slice(t + S).match(v0); if (!x)
    throw new Error("Expected name, found ".concat(e.slice(t))); var _a = __read(x, 1), E = _a[0]; return t += S + E.length, su(E); } function i(S) { for (t += S; t < e.length && S0(e.charCodeAt(t));)
    t++; } function s() { t += 1; var S = t, x = 1; for (; x > 0 && t < e.length; t++)
    e.charCodeAt(t) === 40 && !c(t) ? x++ : e.charCodeAt(t) === 41 && !c(t) && x--; if (x)
    throw new Error("Parenthesis not matched"); return su(e.slice(S, t - 1)); } function c(S) { var x = 0; for (; e.charCodeAt(--S) === 92;)
    x++; return (x & 1) === 1; } function l() { if (r.length > 0 && Ue(r[r.length - 1]))
    throw new Error("Did not expect successive traversals."); } function d(S) { if (r.length > 0 && r[r.length - 1].type === v.Descendant) {
    r[r.length - 1].type = S;
    return;
} l(), r.push({ type: S }); } function g(S, x) { r.push({ type: v.Attribute, name: S, action: x, value: n(1), namespace: null, ignoreCase: "quirks" }); } function A() { if (r.length && r[r.length - 1].type === v.Descendant && r.pop(), r.length === 0)
    throw new Error("Empty sub-selector"); u.push(r); } if (i(0), e.length === t)
    return t; e: for (; t < e.length;) {
    var S = e.charCodeAt(t);
    switch (S) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (r.length === 0 || r[0].type !== v.Descendant) && (l(), r.push({ type: v.Descendant })), i(1);
            break;
        }
        case 62: {
            d(v.Child), i(1);
            break;
        }
        case 60: {
            d(v.Parent), i(1);
            break;
        }
        case 126: {
            d(v.Sibling), i(1);
            break;
        }
        case 43: {
            d(v.Adjacent), i(1);
            break;
        }
        case 46: {
            g("class", _.Element);
            break;
        }
        case 35: {
            g("id", _.Equals);
            break;
        }
        case 91: {
            i(1);
            var x = void 0, E = null;
            e.charCodeAt(t) === 124 ? x = n(1) : e.startsWith("*|", t) ? (E = "*", x = n(2)) : (x = n(0), e.charCodeAt(t) === 124 && e.charCodeAt(t + 1) !== 61 && (E = x, x = n(1))), i(0);
            var q = _.Exists, W = an.get(e.charCodeAt(t));
            if (W) {
                if (q = W, e.charCodeAt(t + 1) !== 61)
                    throw new Error("Expected `=`");
                i(2);
            }
            else
                e.charCodeAt(t) === 61 && (q = _.Equals, i(1));
            var D = "", V = null;
            if (q !== "exists") {
                if (St(e.charCodeAt(t))) {
                    var j = e.charCodeAt(t), m = t + 1;
                    for (; m < e.length && (e.charCodeAt(m) !== j || c(m));)
                        m += 1;
                    if (e.charCodeAt(m) !== j)
                        throw new Error("Attribute value didn't end");
                    D = su(e.slice(t + 1, m)), t = m + 1;
                }
                else {
                    var j = t;
                    for (; t < e.length && (!S0(e.charCodeAt(t)) && e.charCodeAt(t) !== 93 || c(t));)
                        t += 1;
                    D = su(e.slice(j, t));
                }
                i(0);
                var L = e.charCodeAt(t) | 32;
                L === 115 ? (V = !1, i(1)) : L === 105 && (V = !0, i(1));
            }
            if (e.charCodeAt(t) !== 93)
                throw new Error("Attribute selector didn't terminate");
            t += 1;
            var T = { type: v.Attribute, name: x, action: q, value: D, namespace: E, ignoreCase: V };
            r.push(T);
            break;
        }
        case 58: {
            if (e.charCodeAt(t + 1) === 58) {
                r.push({ type: v.PseudoElement, name: n(2).toLowerCase(), data: e.charCodeAt(t) === 40 ? s() : null });
                continue;
            }
            var x = n(1).toLowerCase(), E = null;
            if (e.charCodeAt(t) === 40)
                if (sn.has(x)) {
                    if (St(e.charCodeAt(t + 1)))
                        throw new Error("Pseudo-selector ".concat(x, " cannot be quoted"));
                    if (E = [], t = A0(E, e, t + 1), e.charCodeAt(t) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(x, " (").concat(e, ")"));
                    t += 1;
                }
                else {
                    if (E = s(), cn.has(x)) {
                        var q = E.charCodeAt(0);
                        q === E.charCodeAt(E.length - 1) && St(q) && (E = E.slice(1, -1));
                    }
                    E = su(E);
                }
            r.push({ type: v.Pseudo, name: x, data: E });
            break;
        }
        case 44: {
            A(), r = [], i(1);
            break;
        }
        default: {
            if (e.startsWith("/*", t)) {
                var q = e.indexOf("*/", t + 2);
                if (q < 0)
                    throw new Error("Comment was not terminated");
                t = q + 2, r.length === 0 && i(0);
                break;
            }
            var x = null, E = void 0;
            if (S === 42)
                t += 1, E = "*";
            else if (S === 124) {
                if (E = "", e.charCodeAt(t + 1) === 124) {
                    d(v.ColumnCombinator), i(2);
                    break;
                }
            }
            else if (v0.test(e.slice(t)))
                E = n(0);
            else
                break e;
            e.charCodeAt(t) === 124 && e.charCodeAt(t + 1) !== 124 && (x = E, e.charCodeAt(t + 1) === 42 ? (E = "*", t += 2) : E = n(1)), r.push(E === "*" ? { type: v.Universal, namespace: x } : { type: v.Tag, name: E, namespace: x });
        }
    }
} return A(), t; }
var Ut = qe(Ce(), 1);
var Se = qe(Ce(), 1);
var E0 = new Map([[v.Universal, 50], [v.Tag, 30], [v.Attribute, 1], [v.Pseudo, 0]]);
function cu(u) { return !E0.has(u.type); }
var fn = new Map([[_.Exists, 10], [_.Equals, 8], [_.Not, 7], [_.Start, 6], [_.End, 6], [_.Any, 5]]);
function At(u) { var e = u.map(T0); for (var t = 1; t < u.length; t++) {
    var r = e[t];
    if (!(r < 0))
        for (var n = t - 1; n >= 0 && r < e[n]; n--) {
            var i = u[n + 1];
            u[n + 1] = u[n], u[n] = i, e[n + 1] = e[n], e[n] = r;
        }
} }
function T0(u) { var e, t; var r = (e = E0.get(u.type)) !== null && e !== void 0 ? e : -1; return u.type === v.Attribute ? (r = (t = fn.get(u.action)) !== null && t !== void 0 ? t : 4, u.action === _.Equals && u.name === "id" && (r = 9), u.ignoreCase && (r >>= 1)) : u.type === v.Pseudo && (u.data ? u.name === "has" || u.name === "contains" ? r = 0 : Array.isArray(u.data) ? (r = Math.min.apply(Math, __spreadArray([], __read(u.data.map(function (n) { return Math.min.apply(Math, __spreadArray([], __read(n.map(T0)), false)); })), false)), r < 0 && (r = 0)) : r = 2 : r = 3), r; }
var ou = qe(Ce(), 1), ln = /[-[\]{}()*+?.,\\^$|#\s]/g;
function N0(u) { return u.replace(ln, "\\$&"); }
var dn = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function Oe(u, e) { return typeof u.ignoreCase == "boolean" ? u.ignoreCase : u.ignoreCase === "quirks" ? !!e.quirksMode : !e.xmlMode && dn.has(u.name); }
var C0 = { equals: function (u, e, t) { var r = t.adapter, n = e.name, i = e.value; return Oe(e, t) ? (i = i.toLowerCase(), function (s) { var c = r.getAttributeValue(s, n); return c != null && c.length === i.length && c.toLowerCase() === i && u(s); }) : function (s) { return r.getAttributeValue(s, n) === i && u(s); }; }, hyphen: function (u, e, t) { var r = t.adapter, n = e.name, i = e.value, s = i.length; return Oe(e, t) ? (i = i.toLowerCase(), function (l) { var d = r.getAttributeValue(l, n); return d != null && (d.length === s || d.charAt(s) === "-") && d.substr(0, s).toLowerCase() === i && u(l); }) : function (l) { var d = r.getAttributeValue(l, n); return d != null && (d.length === s || d.charAt(s) === "-") && d.substr(0, s) === i && u(l); }; }, element: function (u, e, t) { var r = t.adapter, n = e.name, i = e.value; if (/\s/.test(i))
        return ou.default.falseFunc; var s = new RegExp("(?:^|\\s)".concat(N0(i), "(?:$|\\s)"), Oe(e, t) ? "i" : ""); return function (l) { var d = r.getAttributeValue(l, n); return d != null && d.length >= i.length && s.test(d) && u(l); }; }, exists: function (u, _a, _b) {
        var e = _a.name;
        var t = _b.adapter;
        return function (r) { return t.hasAttrib(r, e) && u(r); };
    }, start: function (u, e, t) { var r = t.adapter, n = e.name, i = e.value, s = i.length; return s === 0 ? ou.default.falseFunc : Oe(e, t) ? (i = i.toLowerCase(), function (c) { var l = r.getAttributeValue(c, n); return l != null && l.length >= s && l.substr(0, s).toLowerCase() === i && u(c); }) : function (c) { var l; return !!(!((l = r.getAttributeValue(c, n)) === null || l === void 0) && l.startsWith(i)) && u(c); }; }, end: function (u, e, t) { var r = t.adapter, n = e.name, i = e.value, s = -i.length; return s === 0 ? ou.default.falseFunc : Oe(e, t) ? (i = i.toLowerCase(), function (c) { var l; return ((l = r.getAttributeValue(c, n)) === null || l === void 0 ? void 0 : l.substr(s).toLowerCase()) === i && u(c); }) : function (c) { var l; return !!(!((l = r.getAttributeValue(c, n)) === null || l === void 0) && l.endsWith(i)) && u(c); }; }, any: function (u, e, t) { var r = t.adapter, n = e.name, i = e.value; if (i === "")
        return ou.default.falseFunc; if (Oe(e, t)) {
        var s_1 = new RegExp(N0(i), "i");
        return function (l) { var d = r.getAttributeValue(l, n); return d != null && d.length >= i.length && s_1.test(d) && u(l); };
    } return function (s) { var c; return !!(!((c = r.getAttributeValue(s, n)) === null || c === void 0) && c.includes(i)) && u(s); }; }, not: function (u, e, t) { var r = t.adapter, n = e.name, i = e.value; return i === "" ? function (s) { return !!r.getAttributeValue(s, n) && u(s); } : Oe(e, t) ? (i = i.toLowerCase(), function (s) { var c = r.getAttributeValue(s, n); return (c == null || c.length !== i.length || c.toLowerCase() !== i) && u(s); }) : function (s) { return r.getAttributeValue(s, n) !== i && u(s); }; } };
var hn = new Set([9, 10, 12, 13, 32]), I0 = 48, bn = 57;
function k0(u) { if (u = u.trim().toLowerCase(), u === "even")
    return [2, 0]; if (u === "odd")
    return [2, 1]; var e = 0, t = 0, r = i(), n = s(); if (e < u.length && u.charAt(e) === "n" && (e++, t = r * (n != null ? n : 1), c(), e < u.length ? (r = i(), c(), n = s()) : r = n = 0), n === null || e < u.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(u, "')")); return [t, r * n]; function i() { return u.charAt(e) === "-" ? (e++, -1) : (u.charAt(e) === "+" && e++, 1); } function s() { var l = e, d = 0; for (; e < u.length && u.charCodeAt(e) >= I0 && u.charCodeAt(e) <= bn;)
    d = d * 10 + (u.charCodeAt(e) - I0), e++; return e === l ? null : d; } function c() { for (; e < u.length && hn.has(u.charCodeAt(e));)
    e++; } }
var wt = qe(Ce(), 1);
function q0(u) { var e = u[0], t = u[1] - 1; if (t < 0 && e <= 0)
    return wt.default.falseFunc; if (e === -1)
    return function (i) { return i <= t; }; if (e === 0)
    return function (i) { return i === t; }; if (e === 1)
    return t < 0 ? wt.default.trueFunc : function (i) { return i >= t; }; var r = Math.abs(e), n = (t % r + r) % r; return e > 1 ? function (i) { return i >= t && i % r === n; } : function (i) { return i <= t && i % r === n; }; }
function $e(u) { return q0(k0(u)); }
var te = qe(Ce(), 1);
function Iu(u, e) { return function (t) { var r = e.getParent(t); return r != null && e.isTag(r) && u(t); }; }
var Je = { contains: function (u, e, _a) {
        var t = _a.adapter;
        return function (n) { return u(n) && t.getText(n).includes(e); };
    }, icontains: function (u, e, _a) {
        var t = _a.adapter;
        var r = e.toLowerCase();
        return function (i) { return u(i) && t.getText(i).toLowerCase().includes(r); };
    }, "nth-child": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = $e(e);
        return n === te.default.falseFunc ? te.default.falseFunc : n === te.default.trueFunc ? Iu(u, t) : function (s) { var c = t.getSiblings(s), l = 0; for (var d = 0; d < c.length && !r(s, c[d]); d++)
            t.isTag(c[d]) && l++; return n(l) && u(s); };
    }, "nth-last-child": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = $e(e);
        return n === te.default.falseFunc ? te.default.falseFunc : n === te.default.trueFunc ? Iu(u, t) : function (s) { var c = t.getSiblings(s), l = 0; for (var d = c.length - 1; d >= 0 && !r(s, c[d]); d--)
            t.isTag(c[d]) && l++; return n(l) && u(s); };
    }, "nth-of-type": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = $e(e);
        return n === te.default.falseFunc ? te.default.falseFunc : n === te.default.trueFunc ? Iu(u, t) : function (s) { var c = t.getSiblings(s), l = 0; for (var d = 0; d < c.length; d++) {
            var g = c[d];
            if (r(s, g))
                break;
            t.isTag(g) && t.getName(g) === t.getName(s) && l++;
        } return n(l) && u(s); };
    }, "nth-last-of-type": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = $e(e);
        return n === te.default.falseFunc ? te.default.falseFunc : n === te.default.trueFunc ? Iu(u, t) : function (s) { var c = t.getSiblings(s), l = 0; for (var d = c.length - 1; d >= 0; d--) {
            var g = c[d];
            if (r(s, g))
                break;
            t.isTag(g) && t.getName(g) === t.getName(s) && l++;
        } return n(l) && u(s); };
    }, root: function (u, e, _a) {
        var t = _a.adapter;
        return function (r) { var n = t.getParent(r); return (n == null || !t.isTag(n)) && u(r); };
    }, scope: function (u, e, t, r) { var n = t.equals; return !r || r.length === 0 ? Je.root(u, e, t) : r.length === 1 ? function (i) { return n(r[0], i) && u(i); } : function (i) { return r.includes(i) && u(i); }; }, hover: Et("isHovered"), visited: Et("isVisited"), active: Et("isActive") };
function Et(u) { return function (t, r, _a) {
    var n = _a.adapter;
    var i = n[u];
    return typeof i != "function" ? te.default.falseFunc : function (c) { return i(c) && t(c); };
}; }
var fu = { empty: function (u, _a) {
        var e = _a.adapter;
        return !e.getChildren(u).some(function (t) { return e.isTag(t) || e.getText(t) !== ""; });
    }, "first-child": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        if (e.prevElementSibling)
            return e.prevElementSibling(u) == null;
        var r = e.getSiblings(u).find(function (n) { return e.isTag(n); });
        return r != null && t(u, r);
    }, "last-child": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getSiblings(u);
        for (var n = r.length - 1; n >= 0; n--) {
            if (t(u, r[n]))
                return !0;
            if (e.isTag(r[n]))
                break;
        }
        return !1;
    }, "first-of-type": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getSiblings(u), n = e.getName(u);
        for (var i = 0; i < r.length; i++) {
            var s = r[i];
            if (t(u, s))
                return !0;
            if (e.isTag(s) && e.getName(s) === n)
                break;
        }
        return !1;
    }, "last-of-type": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getSiblings(u), n = e.getName(u);
        for (var i = r.length - 1; i >= 0; i--) {
            var s = r[i];
            if (t(u, s))
                return !0;
            if (e.isTag(s) && e.getName(s) === n)
                break;
        }
        return !1;
    }, "only-of-type": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getName(u);
        return e.getSiblings(u).every(function (n) { return t(u, n) || !e.isTag(n) || e.getName(n) !== r; });
    }, "only-child": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        return e.getSiblings(u).every(function (r) { return t(u, r) || !e.isTag(r); });
    } };
function Tt(u, e, t, r) { if (t === null) {
    if (u.length > r)
        throw new Error("Pseudo-class :".concat(e, " requires an argument"));
}
else if (u.length === r)
    throw new Error("Pseudo-class :".concat(e, " doesn't have any arguments")); }
var ku = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var fe = qe(Ce(), 1);
var It = {};
function kt(u, e) { return u === fe.default.falseFunc ? fe.default.falseFunc : function (t) { return e.isTag(t) && u(t); }; }
function qt(u, e) { var t = e.getSiblings(u); if (t.length <= 1)
    return []; var r = t.indexOf(u); return r < 0 || r === t.length - 1 ? [] : t.slice(r + 1).filter(e.isTag); }
function Ct(u) { return { xmlMode: !!u.xmlMode, lowerCaseAttributeNames: !!u.lowerCaseAttributeNames, lowerCaseTags: !!u.lowerCaseTags, quirksMode: !!u.quirksMode, cacheResults: !!u.cacheResults, pseudos: u.pseudos, adapter: u.adapter, equals: u.equals }; }
var Nt = function (u, e, t, r, n) { var i = n(e, Ct(t), r); return i === fe.default.trueFunc ? u : i === fe.default.falseFunc ? fe.default.falseFunc : function (s) { return i(s) && u(s); }; }, qu = { is: Nt, matches: Nt, where: Nt, not: function (u, e, t, r, n) { var i = n(e, Ct(t), r); return i === fe.default.falseFunc ? u : i === fe.default.trueFunc ? fe.default.falseFunc : function (s) { return !i(s) && u(s); }; }, has: function (u, e, t, r, n) { var i = t.adapter, s = Ct(t); s.relativeSelector = !0; var c = e.some(function (g) { return g.some(cu); }) ? [It] : void 0, l = n(e, s, c); if (l === fe.default.falseFunc)
        return fe.default.falseFunc; var d = kt(l, i); if (c && l !== fe.default.trueFunc) {
        var _a = l.shouldTestNextSiblings, g_1 = _a === void 0 ? !1 : _a;
        return function (A) { if (!u(A))
            return !1; c[0] = A; var S = i.getChildren(A), x = g_1 ? __spreadArray(__spreadArray([], __read(S), false), __read(qt(A, i)), false) : S; return i.existsOne(d, x); };
    } return function (g) { return u(g) && i.existsOne(d, i.getChildren(g)); }; } };
function L0(u, e, t, r, n) { var i; var s = e.name, c = e.data; if (Array.isArray(c)) {
    if (!(s in qu))
        throw new Error("Unknown pseudo-class :".concat(s, "(").concat(c, ")"));
    return qu[s](u, c, t, r, n);
} var l = (i = t.pseudos) === null || i === void 0 ? void 0 : i[s], d = typeof l == "string" ? l : ku[s]; if (typeof d == "string") {
    if (c != null)
        throw new Error("Pseudo ".concat(s, " doesn't have any arguments"));
    var g = Ne(d);
    return qu.is(u, g, t, r, n);
} if (typeof l == "function")
    return Tt(l, s, c, 1), function (g) { return l(g, c) && u(g); }; if (s in Je)
    return Je[s](u, c, t, r); if (s in fu) {
    var g_2 = fu[s];
    return Tt(g_2, s, c, 2), function (A) { return g_2(A, t, c) && u(A); };
} throw new Error("Unknown pseudo-class :".concat(s)); }
function Lt(u, e) { var t = e.getParent(u); return t && e.isTag(t) ? t : null; }
function U0(u, e, t, r, n) { var i = t.adapter, s = t.equals; switch (e.type) {
    case v.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case v.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case v.Attribute: {
        if (e.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!t.xmlMode || t.lowerCaseAttributeNames) && (e.name = e.name.toLowerCase()), C0[e.action](u, e, t);
    }
    case v.Pseudo: return L0(u, e, t, r, n);
    case v.Tag: {
        if (e.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var c_1 = e.name;
        return (!t.xmlMode || t.lowerCaseTags) && (c_1 = c_1.toLowerCase()), function (d) { return i.getName(d) === c_1 && u(d); };
    }
    case v.Descendant: {
        if (t.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (d) { var g = d; for (; g = Lt(g, i);)
                if (u(g))
                    return !0; return !1; };
        var c_2 = new WeakSet;
        return function (d) { var g = d; for (; g = Lt(g, i);)
            if (!c_2.has(g)) {
                if (i.isTag(g) && u(g))
                    return !0;
                c_2.add(g);
            } return !1; };
    }
    case "_flexibleDescendant": return function (l) { var d = l; do
        if (u(d))
            return !0;
    while (d = Lt(d, i)); return !1; };
    case v.Parent: return function (l) { return i.getChildren(l).some(function (d) { return i.isTag(d) && u(d); }); };
    case v.Child: return function (l) { var d = i.getParent(l); return d != null && i.isTag(d) && u(d); };
    case v.Sibling: return function (l) { var d = i.getSiblings(l); for (var g = 0; g < d.length; g++) {
        var A = d[g];
        if (s(l, A))
            break;
        if (i.isTag(A) && u(A))
            return !0;
    } return !1; };
    case v.Adjacent: return i.prevElementSibling ? function (l) { var d = i.prevElementSibling(l); return d != null && u(d); } : function (l) { var d = i.getSiblings(l), g; for (var A = 0; A < d.length; A++) {
        var S = d[A];
        if (s(l, S))
            break;
        i.isTag(S) && (g = S);
    } return !!g && u(g); };
    case v.Universal: {
        if (e.namespace != null && e.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return u;
    }
} }
function O0(u, e, t) { var r = Lu(u, e, t); return kt(r, e.adapter); }
function Lu(u, e, t) { var r = typeof u == "string" ? Ne(u) : u; return Uu(r, e, t); }
function D0(u) { return u.type === v.Pseudo && (u.name === "scope" || Array.isArray(u.data) && u.data.some(function (e) { return e.some(D0); })); }
var pn = { type: v.Descendant }, gn = { type: "_flexibleDescendant" }, mn = { type: v.Pseudo, name: "scope", data: null };
function xn(u, _a, t) {
    var e_6, _b;
    var e = _a.adapter;
    var r = !!(t != null && t.every(function (n) { var i = e.isTag(n) && e.getParent(n); return n === It || i && e.isTag(i); }));
    try {
        for (var u_1 = __values(u), u_1_1 = u_1.next(); !u_1_1.done; u_1_1 = u_1.next()) {
            var n = u_1_1.value;
            if (!(n.length > 0 && cu(n[0]) && n[0].type !== v.Descendant))
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
            if (u_1_1 && !u_1_1.done && (_b = u_1.return)) _b.call(u_1);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
function Uu(u, e, t) { var r; u.forEach(At), t = (r = e.context) !== null && r !== void 0 ? r : t; var n = Array.isArray(t), i = t && (Array.isArray(t) ? t : [t]); if (e.relativeSelector !== !1)
    xn(u, e, i);
else if (u.some(function (l) { return l.length > 0 && cu(l[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var s = !1, c = u.map(function (l) { if (l.length >= 2) {
    var _a = __read(l, 2), d = _a[0], g = _a[1];
    d.type !== v.Pseudo || d.name !== "scope" || (n && g.type === v.Descendant ? l[1] = gn : (g.type === v.Adjacent || g.type === v.Sibling) && (s = !0));
} return yn(l, e, i); }).reduce(vn, Se.default.falseFunc); return c.shouldTestNextSiblings = s, c; }
function yn(u, e, t) { var r; return u.reduce(function (n, i) { return n === Se.default.falseFunc ? Se.default.falseFunc : U0(n, i, e, t, Uu); }, (r = e.rootFunc) !== null && r !== void 0 ? r : Se.default.trueFunc); }
function vn(u, e) { return e === Se.default.falseFunc || u === Se.default.trueFunc ? u : u === Se.default.falseFunc || e === Se.default.trueFunc ? e : function (r) { return u(r) || e(r); }; }
var R0 = function (u, e) { return u === e; }, Sn = { adapter: be, equals: R0 };
function F0(u) { var e, t, r, n; var i = u != null ? u : Sn; return (e = i.adapter) !== null && e !== void 0 || (i.adapter = be), (t = i.equals) !== null && t !== void 0 || (i.equals = (n = (r = i.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && n !== void 0 ? n : R0), i; }
function Ot(u) { return function (t, r, n) { var i = F0(r); return u(t, i, n); }; }
var zi = Ot(O0), Wi = Ot(Lu), Ou = Ot(Uu);
function M0(u) { return function (t, r, n) { var i = F0(n); typeof t != "function" && (t = Lu(t, i, r)); var s = Du(r, i.adapter, t.shouldTestNextSiblings); return u(t, s, i); }; }
function Du(u, e, t) {
    if (t === void 0) { t = !1; }
    return t && (u = An(u, e)), Array.isArray(u) ? e.removeSubsets(u) : e.getChildren(u);
}
function An(u, e) { var t = Array.isArray(u) ? u.slice(0) : [u], r = t.length; for (var n = 0; n < r; n++) {
    var i = qt(t[n], e);
    t.push.apply(t, __spreadArray([], __read(i), false));
} return t; }
var $i = M0(function (u, e, t) { return u === Ut.default.falseFunc || !e || e.length === 0 ? [] : t.adapter.findAll(u, e); }), Ji = M0(function (u, e, t) { return u === Ut.default.falseFunc || !e || e.length === 0 ? null : t.adapter.findOne(u, e); });
var Fu = qe(Ce(), 1);
var wn = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function Ke(u) { return u.type !== "pseudo" ? !1 : wn.has(u.name) ? !0 : u.name === "not" && Array.isArray(u.data) ? u.data.some(function (e) { return e.some(Ke); }) : !1; }
function B0(u, e, t) { var r = e != null ? parseInt(e, 10) : NaN; switch (u) {
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
function G0(u) { for (; u.parent;)
    u = u.parent; return u; }
function Ru(u) {
    var e_7, _a;
    var e = [], t = [];
    try {
        for (var u_2 = __values(u), u_2_1 = u_2.next(); !u_2_1.done; u_2_1 = u_2.next()) {
            var r = u_2_1.value;
            r.some(Ke) ? e.push(r) : t.push(r);
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (u_2_1 && !u_2_1.done && (_a = u_2.return)) _a.call(u_2);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return [t, e];
}
var En = { type: v.Universal, namespace: null }, Tn = { type: v.Pseudo, name: "scope", data: null };
function Ft(u, e, t) {
    if (t === void 0) { t = {}; }
    return Nn([u], e, t);
}
function Nn(u, e, t) {
    if (t === void 0) { t = {}; }
    if (typeof e == "function")
        return u.some(e);
    var _a = __read(Ru(Ne(e)), 2), r = _a[0], n = _a[1];
    return r.length > 0 && u.some(Ou(r, t)) || n.some(function (i) { return H0(i, u, t).length > 0; });
}
function Cn(u, e, t, r) { var n = typeof t == "string" ? parseInt(t, 10) : NaN; switch (u) {
    case "first":
    case "lt": return e;
    case "last": return e.length > 0 ? [e[e.length - 1]] : e;
    case "nth":
    case "eq": return isFinite(n) && Math.abs(n) < e.length ? [n < 0 ? e[e.length + n] : e[n]] : [];
    case "gt": return isFinite(n) ? e.slice(n + 1) : [];
    case "even": return e.filter(function (i, s) { return s % 2 === 0; });
    case "odd": return e.filter(function (i, s) { return s % 2 === 1; });
    case "not": {
        var i_1 = new Set(In(t, e, r));
        return e.filter(function (s) { return !i_1.has(s); });
    }
} }
function In(u, e, t) { if (e.length === 0)
    return []; var _a = __read(Ru(u), 2), r = _a[0], n = _a[1], i; if (r.length) {
    var s = Rt(e, r, t);
    if (n.length === 0)
        return s;
    s.length && (i = new Set(s));
} for (var s = 0; s < n.length && (i == null ? void 0 : i.size) !== e.length; s++) {
    var c = n[s];
    if ((i ? e.filter(function (g) { return k(g) && !i.has(g); }) : e).length === 0)
        break;
    var d = H0(c, e, t);
    if (d.length)
        if (i)
            d.forEach(function (g) { return i.add(g); });
        else {
            if (s === n.length - 1)
                return d;
            i = new Set(d);
        }
} return typeof i != "undefined" ? i.size === e.length ? e : e.filter(function (s) { return i.has(s); }) : []; }
function H0(u, e, t) { var r; if (u.some(Ue)) {
    var n = (r = t.root) !== null && r !== void 0 ? r : G0(e[0]), i = ke(le({}, t), { context: e, relativeSelector: !1 });
    return u.push(Tn), Mu(n, u, i, !0, e.length);
} return Mu(e, u, t, !1, e.length); }
function Mt(u, e, t, r) {
    if (t === void 0) { t = {}; }
    if (r === void 0) { r = 1 / 0; }
    if (typeof u == "function")
        return P0(e, u);
    var _a = __read(Ru(Ne(u)), 2), n = _a[0], i = _a[1], s = i.map(function (c) { return Mu(e, c, t, !0, r); });
    return n.length && s.push(Dt(e, n, t, r)), s.length === 0 ? [] : s.length === 1 ? s[0] : yt(s.reduce(function (c, l) { return __spreadArray(__spreadArray([], __read(c), false), __read(l), false); }));
}
function Mu(u, e, t, r, n) { var i = e.findIndex(Ke), s = e.slice(0, i), c = e[i], l = e.length - 1 === i ? n : 1 / 0, d = B0(c.name, c.data, l); if (d === 0)
    return []; var A = (s.length === 0 && !Array.isArray(u) ? Au(u).filter(k) : s.length === 0 ? (Array.isArray(u) ? u : [u]).filter(k) : r || s.some(Ue) ? Dt(u, [s], t, d) : Rt(u, [s], t)).slice(0, d), S = Cn(c.name, A, c.data, t); if (S.length === 0 || e.length === i + 1)
    return S; var x = e.slice(i + 1), E = x.some(Ue); if (E) {
    if (Ue(x[0])) {
        var q = x[0].type;
        (q === v.Sibling || q === v.Adjacent) && (S = Du(S, be, !0)), x.unshift(En);
    }
    t = ke(le({}, t), { relativeSelector: !1, rootFunc: function (q) { return S.includes(q); } });
}
else
    t.rootFunc && t.rootFunc !== Fu.trueFunc && (t = ke(le({}, t), { rootFunc: Fu.trueFunc })); return x.some(Ke) ? Mu(S, x, t, !1, n) : E ? Dt(S, [x], t, n) : Rt(S, [x], t); }
function Dt(u, e, t, r) { var n = Ou(e, t, u); return P0(u, n, r); }
function P0(u, e, t) {
    if (t === void 0) { t = 1 / 0; }
    var r = Du(u, be, e.shouldTestNextSiblings);
    return Eu(function (n) { return k(n) && e(n); }, r, !0, t);
}
function Rt(u, e, t) { var r = (Array.isArray(u) ? u : [u]).filter(k); if (r.length === 0)
    return r; var n = Ou(e, t); return n === Fu.trueFunc ? r : r.filter(n); }
function _0(u) { var e = /^(?:([a-zA-Z][\w+.-]*):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/.exec(u) || []; return { scheme: e[1], auth: e[2], path: e[3] || "", query: e[4], frag: e[5] }; }
function Bt(u) { var e = [], t = u.split("/"); for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n === ".." ? (e.length > 1 && e.pop(), r === t.length - 1 && e.push("")) : n === "." ? r === t.length - 1 && e.push("") : e.push(n);
} return e.join("/"); }
function Gu(u, e) { e = e == null ? "" : String(e).trim(); var t = _0(e); if (t.scheme || !u)
    return e; var r = _0(String(u)); if (!r.scheme)
    return e; var n = r.auth, i, s; if (t.auth !== void 0)
    n = t.auth, i = Bt(t.path), s = t.query;
else if (!t.path)
    i = r.path, s = t.query !== void 0 ? t.query : r.query;
else {
    if (t.path.charAt(0) === "/")
        i = Bt(t.path);
    else {
        var c = n !== void 0 && !r.path ? "/" : r.path.slice(0, r.path.lastIndexOf("/") + 1);
        i = Bt(c + t.path);
    }
    s = t.query;
} return n !== void 0 && i.charAt(0) !== "/" && (i = "/" + i), r.scheme + ":" + (n !== void 0 ? "//" + n : "") + i + (s !== void 0 ? "?" + s : "") + (t.frag !== void 0 ? "#" + t.frag : ""); }
var Bu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function V0(u) { if (typeof btoa == "function")
    return btoa(u); var e = ""; for (var t = 0; t < u.length; t += 3) {
    var r = u.charCodeAt(t), n = u.charCodeAt(t + 1), i = u.charCodeAt(t + 2), s = r << 16 | (n || 0) << 8 | (i || 0);
    e += Bu[s >> 18 & 63] + Bu[s >> 12 & 63] + (t + 1 < u.length ? Bu[s >> 6 & 63] : "=") + (t + 2 < u.length ? Bu[s & 63] : "=");
} return e; }
var kn = function (u, e, t) { return Mt(u, e, t); }, $0 = function (u, e, t) { return Mt(u, e, t, 1)[0] || null; }, J0 = /[\s ]+/g, j0 = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), qn = { containsOwn: function (u, e) { return Ht(u).toLowerCase().includes(String(e).toLowerCase()); }, matches: function (u, e) { return z0(e).test(Gt(u)); }, matchesOwn: function (u, e) { return z0(e).test(Ht(u)); }, containsData: function (u, e) { return Ee(u).includes(e); }, "contains-ci": function (u, e) { return Gt(u).toLowerCase().includes(String(e).toLowerCase()); } };
function z0(u) { try {
    return new RegExp(u);
}
catch (e) {
    return /$^/;
} }
var Hu = { pseudos: qn, xmlMode: !1, lowerCaseTags: !0 };
function Pu(u) { return String(u).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function Gt(u) { if (!u)
    return ""; if (u.type === "text")
    return u.data; var e = "", t = function (r) {
    var e_8, _a;
    try {
        for (var _b = __values(r.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var n = _c.value;
            n.type === "text" ? e += n.data : (n.type === "tag" || n.type === "script" || n.type === "style") && (n.name === "br" ? e += " " : n.type === "tag" && (j0.has(n.name) && (e += " "), t(n), j0.has(n.name) && (e += " ")));
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_8) throw e_8.error; }
    }
}; return t(u), e.replace(J0, " ").trim(); }
function Ht(u) {
    var e_9, _a;
    var e = "";
    try {
        for (var _b = __values(u.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var t = _c.value;
            t.type === "text" && (e += t.data);
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return e.replace(J0, " ").trim();
}
function K0(u, e) { if (!e)
    return ""; try {
    return Gu(u, e);
}
catch (t) {
    return u ? "" : e;
} }
var De = (function () {
    function u(e, t) {
        this.node = e, this.doc = t;
    }
    Object.defineProperty(u.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    u.prototype.select = function (e) { return pe.of(kn(Pu(e), this.node, Hu), this.doc); };
    u.prototype.selectFirst = function (e) { var t = $0(Pu(e), this.node, Hu); return t ? new u(t, this.doc) : null; };
    u.prototype.is = function (e) { return Ft(this.node, Pu(e), Hu); };
    u.prototype.text = function () { return Gt(this.node); };
    u.prototype.ownText = function () { return Ht(this.node); };
    u.prototype.wholeText = function () { return Ee(this.node); };
    u.prototype.data = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return e.data; }).join(""); };
    u.prototype.html = function () { return (this.node.children || []).map(function (e) { return ze(e, { decodeEntities: !1 }); }).join("").trim(); };
    u.prototype.outerHtml = function () { return ze(this.node, { decodeEntities: !1 }); };
    u.prototype.toString = function () { return this.outerHtml(); };
    u.prototype.tagName = function () { return this.node.name || ""; };
    u.prototype.nodeName = function () { return this.node.name || "#" + this.node.type; };
    u.prototype.id = function () { return this.attr("id"); };
    u.prototype.className = function () { return this.attr("class"); };
    u.prototype.classNames = function () { return this.className().split(/\s+/).filter(Boolean); };
    u.prototype.hasClass = function (e) { return this.classNames().includes(e); };
    u.prototype.attr = function (e, t) { if (t !== void 0)
        return this.node.attribs && (this.node.attribs[e] = String(t)), this; if (!this.node.attribs)
        return ""; if (e.startsWith("abs:"))
        return K0(this.baseUri, this.node.attribs[e.slice(4)] || ""); var r = this.node.attribs[e]; return r == null ? "" : r; };
    u.prototype.absUrl = function (e) { return this.attr("abs:" + e); };
    u.prototype.hasAttr = function (e) { return !!(this.node.attribs && (e.startsWith("abs:") ? e.slice(4) : e) in this.node.attribs); };
    u.prototype.removeAttr = function (e) { return this.node.attribs && delete this.node.attribs[e], this; };
    u.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    u.prototype.dataset = function () {
        var e_10, _a;
        var e = {};
        try {
            for (var _b = __values(Object.entries(this.node.attribs || {})), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), t = _d[0], r = _d[1];
                t.startsWith("data-") && (e[t.slice(5)] = r);
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return e;
    };
    u.prototype.val = function () { return this.attr("value"); };
    u.prototype.parent = function () { var e = this.node.parent; return e && e.type !== "root" ? new u(e, this.doc) : null; };
    u.prototype.parents = function () { var e = [], t = this.node.parent; for (; t && t.type !== "root";)
        e.push(t), t = t.parent; return pe.of(e, this.doc); };
    u.prototype.closest = function (e) { var t = this.node; for (; t && t.type !== "root";) {
        if (t.type === "tag" && Ft(t, Pu(e), Hu))
            return new u(t, this.doc);
        t = t.parent;
    } return null; };
    u.prototype.children = function () { return pe.of((this.node.children || []).filter(k), this.doc); };
    u.prototype.child = function (e) { var t = (this.node.children || []).filter(k)[e]; return t ? new u(t, this.doc) : null; };
    u.prototype.childrenSize = function () { return (this.node.children || []).filter(k).length; };
    u.prototype.nextElementSibling = function () { var e = pt(this.node); return e ? new u(e, this.doc) : null; };
    u.prototype.previousElementSibling = function () { var e = gt(this.node); return e ? new u(e, this.doc) : null; };
    u.prototype.siblingElements = function () {
        var _this = this;
        return pe.of(wu(this.node).filter(function (e) { return e !== _this.node && k(e); }), this.doc);
    };
    u.prototype.elementSiblingIndex = function () { return wu(this.node).filter(k).indexOf(this.node); };
    u.prototype.getElementsByTag = function (e) { return this.select(e); };
    u.prototype.getElementsByClass = function (e) { return this.select("." + e); };
    u.prototype.getElementById = function (e) { return this.selectFirst("#" + e); };
    u.prototype.remove = function () { return ve(this.node), this; };
    u.prototype.empty = function () { return this.node.children = [], this; };
    u.prototype.textNodes = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return ({ text: function () { return e.data; }, toString: function () { return e.data; } }); }); };
    u.prototype.title = function () { var e = this.selectFirst("title"); return e ? e.text() : ""; };
    u.prototype.body = function () { return this.selectFirst("body") || this; };
    u.prototype.head = function () { return this.selectFirst("head") || this; };
    u.prototype.location = function () { return this.baseUri; };
    return u;
}()), _t = Object.create(Array.prototype), pe = { of: Pt, prototype: _t };
function Pt(u, e) {
    var e_11, _a;
    var t = [];
    try {
        for (var _b = __values(u || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var r = _c.value;
            t.push(r instanceof De ? r : new De(r, e));
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return Object.setPrototypeOf(t, _t), t;
}
var W0 = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (u) { return this[u] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (u) { return pe.of(this[u] ? [this[u]] : [], null); }, text: function () { return this.map(function (u) { return u.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (u) { return u.text(); }).filter(Boolean); }, html: function () {
        return this.map(function (u) { return u.html(); }).join("\n");
    }, outerHtml: function () {
        return this.map(function (u) { return u.outerHtml(); }).join("\n");
    }, toString: function () { return this.outerHtml(); }, attr: function (u, e) {
        var e_12, _a;
        if (e !== void 0)
            return this.forEach(function (t) { return t.attr(u, e); }), this;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                if (t.hasAttr(u))
                    return t.attr(u);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return "";
    }, eachAttr: function (u) { return this.filter(function (e) { return e.hasAttr(u); }).map(function (e) { return e.attr(u); }); }, hasAttr: function (u) { return this.some(function (e) { return e.hasAttr(u); }); }, hasClass: function (u) { return this.some(function (e) { return e.hasClass(u); }); }, val: function () { return this.length ? this[0].val() : ""; }, select: function (u) {
        var e_13, _a, e_14, _b;
        var e = Pt([]), t = new Set;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var r = _d.value;
                try {
                    for (var _f = (e_14 = void 0, __values(r.select(u))), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var n = _g.value;
                        t.has(n.node) || (t.add(n.node), e.push(n));
                    }
                }
                catch (e_14_1) { e_14 = { error: e_14_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_14) throw e_14.error; }
                }
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return e;
    }, selectFirst: function (u) {
        var e_15, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var e = _c.value;
                var t = e.selectFirst(u);
                if (t)
                    return t;
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return null;
    }, is: function (u) { return this.some(function (e) { return e.is(u); }); }, not: function (u) { return pe.of(this.filter(function (e) { return !e.is(u); }), null); }, parents: function () {
        var e_16, _a;
        var u = Pt([]);
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var e = _c.value;
                u.push.apply(u, __spreadArray([], __read(e.parents()), false));
            }
        }
        catch (e_16_1) { e_16 = { error: e_16_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_16) throw e_16.error; }
        }
        return u;
    }, next: function () { return pe.of(this.map(function (u) { return u.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return pe.of(this.map(function (u) { return u.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (u) { return u.remove(); }), this; }, empty: function () { return this.forEach(function (u) { return u.empty(); }), this; }, removeAttr: function (u) { return this.forEach(function (e) { return e.removeAttr(u); }), this; } };
try {
    for (var _b = __values(Object.keys(W0)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var u = _c.value;
        Object.defineProperty(_t, u, { value: W0[u], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
function _u(u, e) { var t = y0(String(u == null ? "" : u), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), r = new De(t, null); r.doc = r, r.__base = e || ""; var n = $0("base[href]", t); return n && n.attribs.href && (r.__base = K0(r.__base, n.attribs.href)), r; }
function X0(u, e) { var t = new Set((e || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), r = _u(u), n = function (i) {
    var e_17, _a, e_18, _b;
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
                    for (var c_3 = (e_18 = void 0, __values(c)), c_3_1 = c_3.next(); !c_3_1.done; c_3_1 = c_3.next()) {
                        var l = c_3_1.value;
                        mt(s, l);
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (c_3_1 && !c_3_1.done && (_b = c_3.return)) _b.call(c_3);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
                ve(s);
            }
        }
    }
    catch (e_17_1) { e_17 = { error: e_17_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_17) throw e_17.error; }
    }
}; return n(r.node), ze(r.node.children, { decodeEntities: !1 }); }
var lu = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function Ln(u) { if (typeof Buffer != "undefined")
    return Buffer.from(u).toString("base64"); var e = ""; for (var t = 0; t < u.length; t++)
    e += String.fromCharCode(u[t]); return V0(e); }
function Q0(u) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(u) : Uint8Array.from(unescape(encodeURIComponent(u)), function (e) { return e.charCodeAt(0); }); }
function Un(u) { var e = ""; for (var t = 0; t < u.length; t++) {
    var r = u.charCodeAt(t);
    if (r < 128) {
        e += u[t];
        continue;
    }
    if (r === 128) {
        e += "€";
        continue;
    }
    var n = u.charCodeAt(t + 1);
    r >= 129 && r <= 254 && n >= 64 && n <= 254 && n !== 127 ? (e += __GBK_TABLE[(r - 129) * 190 + (n - 64) - (n > 127 ? 1 : 0)], t++) : e += "�";
} return e; }
var Vu = (function () {
    function Vu(e, t) {
        this.status = e.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = e.statusText || String(this.status), this.url = e.url || t.url, this.headers = e.headers || {}, this._raw = e, this.request = { url: t.url, headers: t.headers || {} };
    }
    Vu.prototype.header = function (e) { var t = Object.keys(this.headers).find(function (r) { return r.toLowerCase() === String(e).toLowerCase(); }); return t ? this.headers[t] : ""; };
    Vu.prototype.text = function (e) { if (e && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(e).toLowerCase()).decode(this._raw.bytes);
        }
        catch (r) { } var t = this._raw.text == null ? "" : String(this._raw.text); return e || (e = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), e && /^(gbk|gb2312|gb18030)$/i.test(String(e)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(t) && !/[^\x00-\xff]/.test(t) ? Un(t) : t; };
    Vu.prototype.string = function (e) { return this.text(e); };
    Vu.prototype.html = function (e) { return _u(this.text(e), this.url); };
    Vu.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (e) {
        return null;
    } };
    Vu.prototype.base64 = function () { return Ln(this._raw.bytes || Q0(this.text())); };
    Vu.prototype.blob = function () { var e = this; return { size: (this._raw.bytes || Q0(this.text())).length, type: this.header("content-type"), base64: function () { return e.base64(); } }; };
    return Vu;
}());
function On(u) {
    var e_19, _a;
    var e = {};
    if (!u)
        return e;
    if (typeof u.forEach == "function" && !Array.isArray(u) && typeof u.entries == "function")
        return u.forEach(function (t, r) { e[r] = t; }), e;
    try {
        for (var _b = __values(Object.keys(u)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var t = _c.value;
            e[t] = String(u[t]);
        }
    }
    catch (e_19_1) { e_19 = { error: e_19_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_19) throw e_19.error; }
    }
    return e;
}
function Z0(u, e) {
    var t = function (c) { return ({ getItem: function (l) { var d = u.storageGet(c + l); return d == null ? null : d; }, setItem: function (l, d) { return u.storageSet(c + l, d == null ? null : String(d)); }, removeItem: function (l) { return u.storageSet(c + l, null); }, clear: function () { return u.storageClear && u.storageClear(c); } }); }, r = "__cookie__", n = [], i = {};
    i.Response = { success: function (c, l) { return ({ code: 0, data: c === void 0 ? null : c, data2: l === void 0 ? null : l }); }, error: function (c) { return ({ code: 1, data: c == null ? "" : String(c) }); } }, i.fetch = function (l, d) {
        return __awaiter(this, void 0, void 0, function () {
            var g, D, A, S, x, D, E, q, D_2, V, W, D_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        d = d || {};
                        g = String(l);
                        if (d.queries) {
                            D = Object.entries(d.queries).map(function (_a) {
                                var _b = __read(_a, 2), V = _b[0], T = _b[1];
                                return encodeURIComponent(V) + "=" + encodeURIComponent(T);
                            }).join("&");
                            D && (g += (g.includes("?") ? "&" : "?") + D);
                        }
                        A = Object.assign({ "User-Agent": lu }, On(d.headers)), S = u.storageGet(r);
                        S && !Object.keys(A).some(function (D) { return D.toLowerCase() === "cookie"; }) && (A.Cookie = S);
                        x = d.body;
                        if (x != null && typeof x == "object") {
                            D = Object.keys(A).find(function (V) { return V.toLowerCase() === "content-type"; });
                            D && /json/i.test(A[D]) ? x = JSON.stringify(x) : (x = Object.entries(x).map(function (_a) {
                                var _b = __read(_a, 2), V = _b[0], T = _b[1];
                                return encodeURIComponent(V) + "=" + encodeURIComponent(T);
                            }).join("&"), D || (A["Content-Type"] = "application/x-www-form-urlencoded"));
                        }
                        E = { url: g, method: (d.method || (x != null ? "POST" : "GET")).toUpperCase(), headers: A, body: x, timeout: d.timeout }, q = E.method === "GET" && x == null ? g + "\n" + JSON.stringify(A) : null;
                        if (q) {
                            D_2 = Date.now(), V = n.find(function (T) { return T.k === q && D_2 - T.t < 6e4; });
                            if (V)
                                return [2, new Vu(V.raw, E)];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, u.request(E)];
                    case 2:
                        W = _a.sent();
                        return [3, 4];
                    case 3:
                        D_1 = _a.sent();
                        W = { status: 0, url: g, headers: {}, text: "", error: String(D_1 && D_1.message || D_1) };
                        return [3, 4];
                    case 4: return [2, (q && W && W.status === 200 && String(W.text == null ? "" : W.text).length < 3e6 && (n.push({ k: q, t: Date.now(), raw: W }), n.length > 6 && n.shift()), new Vu(W, E))];
                }
            });
        });
    }, i.Http = { get: function (c) { return Y0(i, "GET", c); }, post: function (c) { return Y0(i, "POST", c); } }, i.Html = { parse: function (c, l) { return _u(c, l || ""); }, clean: function (c, l) { return X0(c, l); } }, i.localStorage = t("ls:"), i.cacheStorage = t("cs:"), i.localConfig = { getItem: function (c) { return u.config(c); } }, i.localCookie = { setCookie: function (c) { u.storageSet(r, String(c).split(";")[0]); }, getCookie: function () { return u.storageGet(r) || ""; } }, i.sleep = function (c) { return new Promise(function (l) { return typeof setTimeout == "function" ? setTimeout(l, Math.min(Number(c) || 0, 1e4)) : l(); }); };
    var s = function () {
        var c = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            c[_i] = arguments[_i];
        }
        try {
            u.log && u.log(c.map(function (l) { return typeof l == "string" ? l : JSON.stringify(l); }).join(" "));
        }
        catch (l) { }
    };
    return i.Log = { log: s }, i.console = { log: s, error: s, warn: s, info: s }, i.Console = i.console, i.log = s, i.UserAgent = { system: function () { return lu; }, chrome: function () { return lu; }, android: function () { return lu; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, i.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (u.name || "host") + ")"); } }, i.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, i.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, i.Elements = pe, i.Element = De, i.__meta = e, i;
}
function Y0(u, e, t) { var r = { method: e, url: t, headers: {}, body: void 0, queries: void 0 }, n = { headers: function (i) { return Object.assign(r.headers, i || {}), n; }, header: function (i, s) { return r.headers[i] = s, n; }, params: function (i) { return r.queries = i, n; }, queries: function (i) { return r.queries = i, n; }, body: function (i) { return r.body = i, n; }, html: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).html(i)];
            }
        }); });
    }, string: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(i)];
            }
        }); });
    }, text: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(i)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).json()];
            }
        }); });
    } }; return n; }
function Re(u, e) { if (!e)
    return ""; if (e = String(e).trim(), /^data:|^blob:/.test(e))
    return e; if (e.startsWith("//"))
    return "https:" + e; if (typeof __abs == "function")
    return __abs(u, e); try {
    return Gu(u, e);
}
catch (t) {
    return e;
} }
var O = function (u) { return u == null ? "" : String(u); }, Dn = function (u) { return u.filter(function (e, t) { return e && u.indexOf(e) === t; }); }, ju = (function () {
    function class_1(e) {
        var t = e.meta, r = e.scripts, n = e.host;
        this.meta = t, this.host = n, this.env = e.env || Z0(n, t), this.scripts = r, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return O(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "origins", {
        get: function () { if (this._orig)
            return this._orig; var e = (this.meta.config || {}).DOMAIN || {}, t = function (i) { var s = /^https?:\/\/(?:www\.|m\.)?([^/?#:]+)/i.exec(O(i).trim()); return s ? s[1].toLowerCase() : ""; }, r = {}; [this.meta.source, e.default].concat(e.values || []).map(t).filter(Boolean).forEach(function (i) { r[i] = 1; }); var n = /^https?:\/\/[^/?#]+/i.exec(O(this.meta.source)); return this._orig = { key: t, hosts: r, def: n ? n[0] : "" }, this._orig; },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.canon = function (e) { e = O(e); var t = this.origins; if (!t.def)
        return e; var r = /^https?:\/\/[^/?#]+/i.exec(e); if (!r)
        return e; var n = t.key(r[0]); return t.hosts[n] === 1 || n === t.key(this.base) ? t.def + e.slice(r[0].length) : e; };
    class_1.prototype.decanon = function (e) { e = O(e); var t = this.origins; if (!t.def)
        return e; var r = (/^https?:\/\/[^/?#]+/i.exec(this.base) || [])[0]; return !r || r === t.def ? e : e.slice(0, t.def.length) === t.def ? r + e.slice(t.def.length) : e; };
    class_1.prototype.has = function (e) { return !!this.scripts[e]; };
    class_1.prototype.run = function (e) {
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
                        r = this.scripts[e];
                        if (!r)
                            throw new Error("script " + e + " missing");
                        n = function (c) { var l = _this.host.config(c); return l == null ? (_this.meta.configDefaults || {})[c] : l; };
                        return [4, r(this.env, n)];
                    case 1:
                        i = _a.sent();
                        if (typeof i != "function")
                            throw new Error(e + ": execute() not defined");
                        return [4, i.apply(void 0, __spreadArray([], __read(t.map(O)), false))];
                    case 2:
                        s = _a.sent();
                        if (!s)
                            throw new Error(e + ": empty result");
                        if (s.code !== 0)
                            throw new Error(e + ": " + O(s.data || "error"));
                        return [2, s];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (e) { return O(e).replace(/\.js$/, ""); };
    class_1.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () { var e, _a, t_1, t_2; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (this.cache.tabs)
                        return [2, this.cache.tabs];
                    e = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    _a = this.has("home");
                    if (!_a) return [3, 3];
                    return [4, this.run("home")];
                case 2:
                    _a = (e = (_b.sent()).data || []);
                    _b.label = 3;
                case 3:
                    _a;
                    return [3, 5];
                case 4:
                    t_1 = _b.sent();
                    this.host.log && this.host.log("home: " + t_1.message);
                    return [3, 5];
                case 5:
                    if (!(!e.length && this.has("genre"))) return [3, 9];
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4, this.run("genre")];
                case 7:
                    e = ((_b.sent()).data || []).slice(0, 2);
                    return [3, 9];
                case 8:
                    t_2 = _b.sent();
                    return [3, 9];
                case 9: return [2, (this.cache.tabs = e.filter(function (t) { return t && t.script; }), this.cache.tabs)];
            }
        }); });
    };
    class_1.prototype.list = function (e, t, r) {
        return __awaiter(this, void 0, void 0, function () {
            var n, i, s, c, l;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        n = e + "|" + t;
                        r = Math.max(1, r | 0);
                        i = r === 1 ? "" : this.tokens[n + "|" + r];
                        if (r > 1 && i == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(e, t, i)];
                    case 1:
                        s = _a.sent(), c = O(s.data2);
                        c && (this.tokens[n + "|" + (r + 1)] = c);
                        l = (s.data || []).filter(Boolean).map(function (d) { return ({ name: O(d.name).trim(), link: _this.canon(Re(d.host || _this.base + "/", d.link)), cover: Re(d.host || _this.base + "/", d.cover), description: O(d.description), tag: O(d.tag) }); }).filter(function (d) { return d.name && d.link; });
                        return [2, { items: l, hasNext: !!c && l.length > 0 }];
                }
            });
        });
    };
    class_1.prototype.popular = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _a.sent();
                    return [2, t[0] ? this.list(this.scriptFile(t[0].script), O(t[0].input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.latest = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _a.sent(), r = t[1] || t[0];
                    return [2, r ? this.list(this.scriptFile(r.script), O(r.input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.search = function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, this.has("search") ? this.list("search", e, t) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e = this.decanon(e);
                    return [4, this.run("detail", e)];
                case 1:
                    t = (_a.sent()).data || {}, r = [].concat(t.genres || [], t.tags || []).map(function (n) { return typeof n == "string" ? n : n && n.title; }).filter(Boolean);
                    return [2, { name: O(t.name).trim(), cover: Re(t.host || this.base + "/", t.cover), author: O(t.author).trim(), description: er(O(t.description)), detail: er(O(t.detail)), ongoing: t.ongoing !== !1 && t.ongoing !== "false", genres: Dn(r.map(function (n) { return String(n).trim(); })), url: this.canon(e), format: O(t.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, r, r_1, r_1_1, n, _a, _b, e_20_1, _c;
            var e_20, _d;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        e = this.decanon(e);
                        t = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", e)];
                    case 1:
                        r = (_f.sent()).data || [e];
                        _f.label = 2;
                    case 2:
                        _f.trys.push([2, 7, 8, 9]);
                        r_1 = __values(r), r_1_1 = r_1.next();
                        _f.label = 3;
                    case 3:
                        if (!!r_1_1.done) return [3, 6];
                        n = r_1_1.value;
                        _b = (_a = t).concat;
                        return [4, this.run("toc", O(n))];
                    case 4:
                        t = _b.apply(_a, [(_f.sent()).data || []]);
                        _f.label = 5;
                    case 5:
                        r_1_1 = r_1.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_20_1 = _f.sent();
                        e_20 = { error: e_20_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (r_1_1 && !r_1_1.done && (_d = r_1.return)) _d.call(r_1);
                        }
                        finally { if (e_20) throw e_20.error; }
                        return [7];
                    case 9: return [3, 13];
                    case 10:
                        _c = this.has("toc");
                        if (!_c) return [3, 12];
                        return [4, this.run("toc", e)];
                    case 11:
                        _c = (t = (_f.sent()).data || []);
                        _f.label = 12;
                    case 12:
                        _c;
                        _f.label = 13;
                    case 13: return [2, t.filter(function (r) { return r && r.url && r.type !== "section"; }).map(function (r, n) { return ({ name: O(r.name).trim() || "#" + (n + 1), url: _this.canon(Re(r.host || _this.base + "/", r.url)), pay: !!(r.pay || r.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, _a, _b, r, n;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        e = this.decanon(e);
                        if (!(this.has("chap") && this.meta.type === "comic")) return [3, 2];
                        return [4, this.run("chap", e)];
                    case 1:
                        _a = t = (_c.sent()).data;
                        return [3, 6];
                    case 2:
                        if (!this.has("page")) return [3, 4];
                        return [4, this.run("page", e)];
                    case 3:
                        _b = t = (_c.sent()).data;
                        return [3, 5];
                    case 4:
                        _b = t = [e];
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
    class_1.prototype.content = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e = this.decanon(e);
                    return [4, this.run("chap", e)];
                case 1:
                    t = _a.sent();
                    return [2, { html: O(t.data), title: O(t.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, n, r, t_3, t_3_1, n, i, s, s_2, s_2_1, c, l, i_2, e_21_1;
            var e_21, _a, e_22, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        e = this.decanon(e);
                        t = [{ title: "Default", data: e }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", e)];
                    case 1:
                        n = (_c.sent()).data;
                        Array.isArray(n) && n.length && (t = n.map(function (i) { return typeof i == "string" ? { title: "Server", data: i } : { title: O(i.title || i.name || "Server"), data: O(i.data || i.url || i.link) }; }));
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
                            for (s_2 = (e_22 = void 0, __values(s)), s_2_1 = s_2.next(); !s_2_1.done; s_2_1 = s_2.next()) {
                                c = s_2_1.value;
                                if (!c || !c.data || c.type === "webview")
                                    continue;
                                l = Re(c.host || this.base + "/", c.data);
                                r.push({ url: l, quality: n.title + (c.quality ? " " + c.quality : ""), headers: c.headers || { Referer: this.base + "/" }, subtitles: (c.subtitles || (c.subtitle ? [{ data: c.subtitle, label: "Sub" }] : [])).map(function (d) { return ({ file: Re(_this.base + "/", d.data || d.file), label: O(d.label || d.language || "Sub") }); }), mimeType: O(c.mimeType) });
                            }
                        }
                        catch (e_22_1) { e_22 = { error: e_22_1 }; }
                        finally {
                            try {
                                if (s_2_1 && !s_2_1.done && (_b = s_2.return)) _b.call(s_2);
                            }
                            finally { if (e_22) throw e_22.error; }
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
                        e_21_1 = _c.sent();
                        e_21 = { error: e_21_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (t_3_1 && !t_3_1.done && (_a = t_3.return)) _a.call(t_3);
                        }
                        finally { if (e_21) throw e_21.error; }
                        return [7];
                    case 12: return [2, r];
                }
            });
        });
    };
    return class_1;
}());
function er(u) {
    return String(u).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
var Ae = { id: "webtruyendich", name: "Web Truyện Dịch", source: "https://webtruyendich.com/", type: "novel", locale: "vi", nsfw: !1, version: 1, config: {}, configDefaults: {}, itemType: 2, short: !1, shorts: !1, lnId: "kiritokmn.webtruyendich", lnIcon: "", lnVersion: "1.4.1" }, ur = { home: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, s, c, l, d, g, A, S, x, E, q, W, D, V) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function $(a) { return !a || (a = String(a).trim(), !a) ? "" : a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http://") === 0 || a.indexOf("https://") === 0 ? a.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, m) : a.charAt(0) === "/" ? m + a : m + "/" + a; } function Ie(a) { if (!a)
                                        return ""; a = $(a); try {
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
                                    } } function ge(a) { return a ? String(a).replace(/\s+/g, " ").trim() : ""; } function M(a) { return a ? (a = String(a).trim(), a.indexOf("http") === 0 ? a : a.indexOf("//") === 0 ? "https:" + a : m + (a.indexOf("/") === 0 ? "" : "/") + a) : ""; } function me(a) { if (!a)
                                        return null; var o = String(a.title || a.name || a.novel_title || "").trim(); o && (o = o.replace(/^Bìa truyện\s+/i, "").trim()); var f = String(a.url || a.slug || a.novel_slug || "").trim(), h = f.indexOf("http") === 0 ? f : m + "/truyen/" + f, y = M(a.thumbnail || a.cover || a.image || ""), p = []; return (a.author || a.novel_author) && p.push(a.author || a.novel_author), a.genre_name && p.push(a.genre_name), (a.status || a.novel_status) && p.push(a.status || a.novel_status), a.max_chapters && p.push(a.max_chapters + " chương"), { name: o, link: M(h), cover: y, description: p.join(" · "), host: m }; } function xe(a, o) {
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
                                    } function B() {
                                        return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_a) {
                                            a = [{ title: "Truyện Mới Cập Nhật", input: "/tim-truyen?sort=update", script: "gen.js" }, { title: "Xem Nhiều Tuần", input: "/tim-truyen?sort=view-weekly", script: "gen.js" }, { title: "Xem Nhiều Tháng", input: "/tim-truyen?sort=view-monthly", script: "gen.js" }, { title: "Đề Cử Tuần", input: "/tim-truyen?sort=push-weekly", script: "gen.js" }, { title: "Đề Cử Tháng", input: "/tim-truyen?sort=push-monthly", script: "gen.js" }, { title: "Bán Chạy", input: "/xep-hang/ban-chay", script: "gen.js" }, { title: "Bảng Xếp Hạng Đọc", input: "/xep-hang/chi-so-doc", script: "gen.js" }];
                                            return [2, C.success(a)];
                                        }); });
                                    } var T, L, j, m, C; return __generator(this, function (_a) {
                                        T = "https://webtruyendich.com", L = "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36", j = "Vietphrase";
                                        try {
                                            typeof CONFIG_URL != "undefined" && CONFIG_URL && (T = CONFIG_URL + ""), typeof CONFIG_UA != "undefined" && CONFIG_UA && (L = CONFIG_UA + ""), typeof CONFIG_AI != "undefined" && CONFIG_AI && (j = CONFIG_AI + "");
                                        }
                                        catch (a) { }
                                        m = String(T || "").replace(/\/+$/, "");
                                        if (typeof C == "undefined")
                                            C = { success: function (a, o) { return JSON.stringify({ code: 0, data: a, data2: o }); }, error: function (a) { return JSON.stringify({ code: 1, data: a }); } };
                                        return [2, typeof B == "function" ? B : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, detail: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, s, c, l, d, g, A, S, x, E, q, W, D, V) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function $(a) { return !a || (a = String(a).trim(), !a) ? "" : a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http://") === 0 || a.indexOf("https://") === 0 ? a.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, m) : a.charAt(0) === "/" ? m + a : m + "/" + a; } function Ie(a) { if (!a)
                                        return ""; a = $(a); try {
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
                                    } } function ge(a) { return a ? String(a).replace(/\s+/g, " ").trim() : ""; } function M(a) { return a ? (a = String(a).trim(), a.indexOf("http") === 0 ? a : a.indexOf("//") === 0 ? "https:" + a : m + (a.indexOf("/") === 0 ? "" : "/") + a) : ""; } function me(a) { if (!a)
                                        return null; var o = String(a.title || a.name || a.novel_title || "").trim(); o && (o = o.replace(/^Bìa truyện\s+/i, "").trim()); var f = String(a.url || a.slug || a.novel_slug || "").trim(), h = f.indexOf("http") === 0 ? f : m + "/truyen/" + f, y = M(a.thumbnail || a.cover || a.image || ""), p = []; return (a.author || a.novel_author) && p.push(a.author || a.novel_author), a.genre_name && p.push(a.genre_name), (a.status || a.novel_status) && p.push(a.status || a.novel_status), a.max_chapters && p.push(a.max_chapters + " chương"), { name: o, link: M(h), cover: y, description: p.join(" · "), host: m }; } function xe(a, o) {
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
                                    } function B(a) {
                                        return __awaiter(this, void 0, void 0, function () { var o, f, h, y, p, N, R, H, F, z, P, Z, G, ee, re, ie; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, t(a)];
                                                case 1:
                                                    o = _a.sent();
                                                    if (!o || !o.ok)
                                                        return [2, null];
                                                    f = o.html(), h = f.select("h1").text().trim() + "", y = f.select('meta[property="og:image"]').attr("content") + "";
                                                    y && y.indexOf("//") === 0 ? y = "https:" + y : y && y.indexOf("/") === 0 && (y = T + y);
                                                    p = f.select('meta[property="book:author"]').attr("content") + "";
                                                    if (!p) {
                                                        N = f.select('a[href*="keyword="]').first();
                                                        N && (p = N.text().trim() + "");
                                                    }
                                                    p || (p = "Đang cập nhật");
                                                    R = "", H = f.select(".text-xl.font-bold").first().text().trim() + "", F = f.select(".bg-green-100").text().trim() + "";
                                                    F || (F = "Đang ra"), f.select("p").forEach(function (se) { var Q = se.text().trim() + ""; if (Q.indexOf("Tên gốc:") === 0 && !R)
                                                        R = Q.substring(8).trim();
                                                    else if (Q.indexOf("Số chương:") === 0 && !H)
                                                        H = Q.substring(10).trim();
                                                    else if (Q.indexOf("Tình trạng:") === 0 && F === "Đang ra") {
                                                        var ne = Q.substring(11).trim();
                                                        ne && (F = ne);
                                                    } });
                                                    z = f.select(".lg\\:col-span-2 p").html() + "", P = [], Z = f.select(".flex.flex-wrap.gap-2").first();
                                                    Z && Z.select("a").forEach(function (se) { var Q = se.text().trim() + ""; if (Q && se.select(".material-symbols-outlined").size() === 0) {
                                                        var ne = se.attr("href") + "", de = ne.indexOf("http") === 0 ? ne : T + (ne.indexOf("/") === 0 ? "" : "/") + ne;
                                                        P.push({ title: Q, input: de, script: "gen.js" });
                                                    } });
                                                    G = f.select('#gioi-thieu a[href*="/chuong-"]').first(), ee = G ? G.text().trim() + "" : "", re = P.map(function (se) { return se.title; }).join(", ");
                                                    p && p !== "Đang cập nhật" && P.unshift({ title: p, input: T + "/api/search-novels?keyword=" + encodeURIComponent(p) + "&page=1", script: "gen.js" });
                                                    ie = "<div><p>Tác giả: " + p + "</p>" + (R ? "<p>Tên gốc: " + R + "</p>" : "") + (re ? "<p>Thể loại: " + re + "</p>" : "") + "<p>Tình trạng: " + F + "</p>" + (H ? "<p>Số chương: " + H + "</p>" : "") + (ee ? "<p>Chương mới: " + ee + "</p>" : "") + "</div>";
                                                    return [2, C.success({ name: h, cover: y, author: p, description: z, genres: P, detail: ie, ongoing: F.indexOf("Đang ra") >= 0, host: T })];
                                            }
                                        }); });
                                    } var T, L, j, m, C; return __generator(this, function (_a) {
                                        T = "https://webtruyendich.com", L = "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36", j = "Vietphrase";
                                        try {
                                            typeof CONFIG_URL != "undefined" && CONFIG_URL && (T = CONFIG_URL + ""), typeof CONFIG_UA != "undefined" && CONFIG_UA && (L = CONFIG_UA + ""), typeof CONFIG_AI != "undefined" && CONFIG_AI && (j = CONFIG_AI + "");
                                        }
                                        catch (a) { }
                                        m = String(T || "").replace(/\/+$/, "");
                                        if (typeof C == "undefined")
                                            C = { success: function (a, o) { return JSON.stringify({ code: 0, data: a, data2: o }); }, error: function (a) { return JSON.stringify({ code: 1, data: a }); } };
                                        return [2, typeof B == "function" ? B : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, toc: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, s, c, l, d, g, A, S, x, E, q, W, D, V) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function $(a) { return !a || (a = String(a).trim(), !a) ? "" : a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http://") === 0 || a.indexOf("https://") === 0 ? a.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, m) : a.charAt(0) === "/" ? m + a : m + "/" + a; } function Ie(a) { if (!a)
                                        return ""; a = $(a); try {
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
                                    } } function ge(a) { return a ? String(a).replace(/\s+/g, " ").trim() : ""; } function M(a) { return a ? (a = String(a).trim(), a.indexOf("http") === 0 ? a : a.indexOf("//") === 0 ? "https:" + a : m + (a.indexOf("/") === 0 ? "" : "/") + a) : ""; } function me(a) { if (!a)
                                        return null; var o = String(a.title || a.name || a.novel_title || "").trim(); o && (o = o.replace(/^Bìa truyện\s+/i, "").trim()); var f = String(a.url || a.slug || a.novel_slug || "").trim(), h = f.indexOf("http") === 0 ? f : m + "/truyen/" + f, y = M(a.thumbnail || a.cover || a.image || ""), p = []; return (a.author || a.novel_author) && p.push(a.author || a.novel_author), a.genre_name && p.push(a.genre_name), (a.status || a.novel_status) && p.push(a.status || a.novel_status), a.max_chapters && p.push(a.max_chapters + " chương"), { name: o, link: M(h), cover: y, description: p.join(" · "), host: m }; } function xe(a, o) {
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
                                    } function B(a) {
                                        return __awaiter(this, void 0, void 0, function () { var o, f, h, y, p, N, R, H, F, z, P, Z, G, ee, re, ie, se, Q, ne; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    a = $(a);
                                                    return [4, xe(a)];
                                                case 1:
                                                    o = _a.sent();
                                                    if (!o || !o.ok)
                                                        return [2, C.success([])];
                                                    f = o.text() + "", h = f.match(/novel_id\s*=\s*["'](\d+)["']/) || f.match(/data-novel-id=["'](\d+)["']/), y = f.match(/defaultSource\s*=\s*["']([^"']+)["']/) || f.match(/source_name\s*=\s*['"]([^'"]+)['"]/), p = f.match(/novel_url\s*=\s*["']([^"']+)["']/), N = p ? p[1] : a.split("/").filter(Boolean).pop() || "";
                                                    if (!N) {
                                                        R = a.match(/\/truyen\/([^\/\?#]+)/i);
                                                        R && (N = R[1]);
                                                    }
                                                    H = h ? h[1] : "", F = y ? y[1] : "sudugu", z = [], P = {};
                                                    if (!H) return [3, 3];
                                                    Z = T + "/api/novels/" + H + "/chapters?source=" + encodeURIComponent(F) + "&limit=10000";
                                                    return [4, xe(Z, { headers: { "X-Requested-With": "XMLHttpRequest", Accept: "application/json" } })];
                                                case 2:
                                                    G = _a.sent();
                                                    if (G && G.ok) {
                                                        ee = G.json(), re = ee && ee.data ? ee.data : ee && ee.items ? ee.items : [];
                                                        if (re && re.length > 0) {
                                                            for (ie = 0; ie < re.length; ie++) {
                                                                se = re[ie].chapter_url || re[ie].slug, Q = T + "/truyen/" + N + "/" + F + "/" + se;
                                                                P[Q] || (z.push({ name: ge(re[ie].title || re[ie].name || "Chương " + (ie + 1)), url: Q, host: T }), P[Q] = !0);
                                                            }
                                                            return [2, C.success(z)];
                                                        }
                                                    }
                                                    _a.label = 3;
                                                case 3:
                                                    ne = o.html();
                                                    return [2, (ne && ne.select("a[href*='/chuong-'], a[href*='/chuong']").forEach(function (de) { var Xe = de.attr("href") + "", Fe = ge(de.text() + ""); if (Xe && Fe && Xe.indexOf("danh-sach-chuong") < 0) {
                                                            var Wu = $(Xe);
                                                            P[Wu] || (z.push({ name: Fe, url: Wu, host: T }), P[Wu] = !0);
                                                        } }), C.success(z))];
                                            }
                                        }); });
                                    } var T, L, j, m, C; return __generator(this, function (_a) {
                                        T = "https://webtruyendich.com", L = "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36", j = "Vietphrase";
                                        try {
                                            typeof CONFIG_URL != "undefined" && CONFIG_URL && (T = CONFIG_URL + ""), typeof CONFIG_UA != "undefined" && CONFIG_UA && (L = CONFIG_UA + ""), typeof CONFIG_AI != "undefined" && CONFIG_AI && (j = CONFIG_AI + "");
                                        }
                                        catch (a) { }
                                        m = String(T || "").replace(/\/+$/, "");
                                        if (typeof C == "undefined")
                                            C = { success: function (a, o) { return JSON.stringify({ code: 0, data: a, data2: o }); }, error: function (a) { return JSON.stringify({ code: 1, data: a }); } };
                                        return [2, typeof B == "function" ? B : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, chap: function (u, e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, (function (t, r, n, i, s, c, l, d, g, A, S, x, E, q, W, D, V) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, (function () {
                                            return __awaiter(this, void 0, void 0, function () {
                                                function $(f) { return !f || (f = String(f).trim(), !f) ? "" : f.indexOf("//") === 0 ? "https:" + f : f.indexOf("http://") === 0 || f.indexOf("https://") === 0 ? f.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, m) : f.charAt(0) === "/" ? m + f : m + "/" + f; }
                                                function Ie(f) { if (!f)
                                                    return ""; f = $(f); try {
                                                    var h = new URL(f);
                                                    return h.pathname = h.pathname.split("/").map(function (y) { try {
                                                        return encodeURIComponent(decodeURIComponent(y));
                                                    }
                                                    catch (p) {
                                                        return encodeURIComponent(y);
                                                    } }).join("/"), h.toString() + "";
                                                }
                                                catch (y) {
                                                    return encodeURI(f) + "";
                                                } }
                                                function ge(f) { return f ? String(f).replace(/\s+/g, " ").trim() : ""; }
                                                function M(f) { return f ? (f = String(f).trim(), f.indexOf("http") === 0 ? f : f.indexOf("//") === 0 ? "https:" + f : m + (f.indexOf("/") === 0 ? "" : "/") + f) : ""; }
                                                function me(f) { if (!f)
                                                    return null; var h = String(f.title || f.name || f.novel_title || "").trim(); h && (h = h.replace(/^Bìa truyện\s+/i, "").trim()); var y = String(f.url || f.slug || f.novel_slug || "").trim(), p = y.indexOf("http") === 0 ? y : m + "/truyen/" + y, N = M(f.thumbnail || f.cover || f.image || ""), R = []; return (f.author || f.novel_author) && R.push(f.author || f.novel_author), f.genre_name && R.push(f.genre_name), (f.status || f.novel_status) && R.push(f.status || f.novel_status), f.max_chapters && R.push(f.max_chapters + " chương"), { name: h, link: M(p), cover: N, description: R.join(" · "), host: m }; }
                                                function xe(f, h) {
                                                    return __awaiter(this, void 0, void 0, function () { var y, p; return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                h || (h = {});
                                                                y = { "User-Agent": L, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.8", Referer: m + "/" };
                                                                if (h.headers)
                                                                    for (p in h.headers)
                                                                        y[p] = h.headers[p];
                                                                h.headers = y;
                                                                return [4, t(f, h)];
                                                            case 1: return [2, _a.sent()];
                                                        }
                                                    }); });
                                                }
                                                function B(f) {
                                                    return __awaiter(this, void 0, void 0, function () { var h, y, p, N, R, H, F, z, P, Z, G, ee, re, ie, se, Q, ne, de_1; return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                _a.trys.push([0, 3, , 4]);
                                                                return [4, t(f)];
                                                            case 1:
                                                                h = _a.sent();
                                                                if (!h || !h.ok)
                                                                    return [2, C.error("Lỗi kết nối: " + f)];
                                                                y = h.text(), p = function (de, Xe) { var Fe = y.match(de); return Fe && Fe[1] ? Fe[1] : Xe || ""; }, N = p(/chapter_id\s*[=:]\s*["']?(\d+)["']?/), R = p(/novel_id\s*[=:]\s*["']?(\d+)["']?/), H = p(/source_name\s*[=:]\s*["']([^"']+)["']/, "fanqie"), F = p(/sourceId\s*[=:]\s*["']?(\d+)["']?/), z = p(/chapterUrl\s*[=:]\s*["']([^"']+)["']/), P = p(/novel_url\s*[=:]\s*["']([^"']+)["']/);
                                                                if (!N || !R)
                                                                    return [2, C.error("Không tìm thấy chapter_id/novel_id.")];
                                                                Z = JSON.stringify({ chapter_id: N, novel_id: R, source_name: H, source_id: F, chapter_url: z, novel_url: P, translator: "Vietphrase" });
                                                                return [4, t(T + "/api/getChapter", { method: "POST", headers: { "Content-Type": "application/json" }, body: Z })];
                                                            case 2:
                                                                G = _a.sent();
                                                                if (G && G.ok) {
                                                                    ee = G.text();
                                                                    if (ee)
                                                                        try {
                                                                            re = JSON.parse(ee), ie = re.content || re.data || "";
                                                                            if (a(ie))
                                                                                return [2, C.success(o(ie))];
                                                                        }
                                                                        catch (de) {
                                                                            if (a(ee))
                                                                                return [2, C.success(o(ee))];
                                                                        }
                                                                }
                                                                se = h.html();
                                                                if (se) {
                                                                    Q = se.select("#article, #chapter-content-body").first();
                                                                    if (Q) {
                                                                        ne = "" + Q.html();
                                                                        if (a(ne))
                                                                            return [2, C.success(o(ne))];
                                                                    }
                                                                }
                                                                return [2, C.error("Không lấy được nội dung chương.")];
                                                            case 3:
                                                                de_1 = _a.sent();
                                                                return [2, C.error("Lỗi: " + (de_1 ? de_1.message : ""))];
                                                            case 4: return [2];
                                                        }
                                                    }); });
                                                }
                                                function a(f) { if (!f || ("" + f).replace(/\s/g, "").length < 50)
                                                    return !1; var h = ("" + f).toLowerCase(); if (h.indexOf("mô hình ai hiện đang quá tải") >= 0 || h.indexOf("vui lòng thử lại sau") >= 0 || h.indexOf("cloudflare") >= 0 || h.indexOf("just a moment") >= 0 || h.indexOf("chờ một chút") >= 0)
                                                    return !1; var y = ("" + f).replace(/^\s+|\s+$/g, ""); return !(y.charAt(0) === "{" && y.indexOf('"detail"') >= 0); }
                                                function o(f) {
                                                    var h = "" + f;
                                                    return h = h.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ""), h = h.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ""), h = h.replace(/<ins[^>]*>[\s\S]*?<\/ins>/gi, ""), h = h.replace(/<\/?(p|div|article|section|h[1-6]|blockquote|li|tr|ul|ol)[^>]*>/gi, "\n"), h = h.replace(/<br\s*\/?>/gi, "\n"), h = h.replace(/<[^>]+>/g, ""), h = h.replace(/&nbsp;/gi, " "), h = h.replace(/&quot;/gi, '"'), h = h.replace(/&#39;/gi, "'"), h = h.replace(/&lt;/gi, "<"), h = h.replace(/&gt;/gi, ">"), h = h.replace(/&amp;/gi, "&"), h = h.replace(/[ \t]+/g, " "), h = h.replace(/ *\n */g, "\n"), h = h.replace(/\n{3,}/g, "\n\n"), h = h.replace(/^\s+|\s+$/g, ""), h.replace(/\n/g, "<br>");
                                                }
                                                var T, L, j, m, C;
                                                return __generator(this, function (_a) {
                                                    T = "https://webtruyendich.com", L = "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36", j = "Vietphrase";
                                                    try {
                                                        typeof CONFIG_URL != "undefined" && CONFIG_URL && (T = CONFIG_URL + ""), typeof CONFIG_UA != "undefined" && CONFIG_UA && (L = CONFIG_UA + ""), typeof CONFIG_AI != "undefined" && CONFIG_AI && (j = CONFIG_AI + "");
                                                    }
                                                    catch (f) { }
                                                    m = String(T || "").replace(/\/+$/, "");
                                                    if (typeof C == "undefined")
                                                        C = { success: function (f, h) { return JSON.stringify({ code: 0, data: f, data2: h }); }, error: function (f) { return JSON.stringify({ code: 1, data: f }); } };
                                                    return [2, typeof B == "function" ? B : void 0];
                                                });
                                            });
                                        })()];
                                    case 1: return [2, _a.sent()];
                                }
                            });
                        });
                    })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
            });
        });
    }, page: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, s, c, l, d, g, A, S, x, E, q, W, D, V) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function $(a) { return !a || (a = String(a).trim(), !a) ? "" : a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http://") === 0 || a.indexOf("https://") === 0 ? a.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, m) : a.charAt(0) === "/" ? m + a : m + "/" + a; } function Ie(a) { if (!a)
                                        return ""; a = $(a); try {
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
                                    } } function ge(a) { return a ? String(a).replace(/\s+/g, " ").trim() : ""; } function M(a) { return a ? (a = String(a).trim(), a.indexOf("http") === 0 ? a : a.indexOf("//") === 0 ? "https:" + a : m + (a.indexOf("/") === 0 ? "" : "/") + a) : ""; } function me(a) { if (!a)
                                        return null; var o = String(a.title || a.name || a.novel_title || "").trim(); o && (o = o.replace(/^Bìa truyện\s+/i, "").trim()); var f = String(a.url || a.slug || a.novel_slug || "").trim(), h = f.indexOf("http") === 0 ? f : m + "/truyen/" + f, y = M(a.thumbnail || a.cover || a.image || ""), p = []; return (a.author || a.novel_author) && p.push(a.author || a.novel_author), a.genre_name && p.push(a.genre_name), (a.status || a.novel_status) && p.push(a.status || a.novel_status), a.max_chapters && p.push(a.max_chapters + " chương"), { name: o, link: M(h), cover: y, description: p.join(" · "), host: m }; } function xe(a, o) {
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
                                    } function B(a) {
                                        return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_a) {
                                            a = $(a);
                                            o = [a];
                                            return [2, C.success(o)];
                                        }); });
                                    } var T, L, j, m, C; return __generator(this, function (_a) {
                                        T = "https://webtruyendich.com", L = "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36", j = "Vietphrase";
                                        try {
                                            typeof CONFIG_URL != "undefined" && CONFIG_URL && (T = CONFIG_URL + ""), typeof CONFIG_UA != "undefined" && CONFIG_UA && (L = CONFIG_UA + ""), typeof CONFIG_AI != "undefined" && CONFIG_AI && (j = CONFIG_AI + "");
                                        }
                                        catch (a) { }
                                        m = String(T || "").replace(/\/+$/, "");
                                        if (typeof C == "undefined")
                                            C = { success: function (a, o) { return JSON.stringify({ code: 0, data: a, data2: o }); }, error: function (a) { return JSON.stringify({ code: 1, data: a }); } };
                                        return [2, typeof B == "function" ? B : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, search: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, s, c, l, d, g, A, S, x, E, q, W, D, V) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function $(a) { return !a || (a = String(a).trim(), !a) ? "" : a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http://") === 0 || a.indexOf("https://") === 0 ? a.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, m) : a.charAt(0) === "/" ? m + a : m + "/" + a; } function Ie(a) { if (!a)
                                        return ""; a = $(a); try {
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
                                    } } function ge(a) { return a ? String(a).replace(/\s+/g, " ").trim() : ""; } function M(a) { return a ? (a = String(a).trim(), a.indexOf("http") === 0 ? a : a.indexOf("//") === 0 ? "https:" + a : m + (a.indexOf("/") === 0 ? "" : "/") + a) : ""; } function me(a) { if (!a)
                                        return null; var o = String(a.title || a.name || a.novel_title || "").trim(); o && (o = o.replace(/^Bìa truyện\s+/i, "").trim()); var f = String(a.url || a.slug || a.novel_slug || "").trim(), h = f.indexOf("http") === 0 ? f : m + "/truyen/" + f, y = M(a.thumbnail || a.cover || a.image || ""), p = []; return (a.author || a.novel_author) && p.push(a.author || a.novel_author), a.genre_name && p.push(a.genre_name), (a.status || a.novel_status) && p.push(a.status || a.novel_status), a.max_chapters && p.push(a.max_chapters + " chương"), { name: o, link: M(h), cover: y, description: p.join(" · "), host: m }; } function xe(a, o) {
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
                                    } function B(a, o) {
                                        return __awaiter(this, void 0, void 0, function () { var f, h, y, p, N, R, H, F, z, P, Z, G; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    f = "";
                                                    Array.isArray(a) ? (f = a[0] || "", o || (o = a[1] || 1)) : (f = a || "", o || (o = 1));
                                                    h = T + "/api/search-novels?keyword=" + encodeURIComponent(f) + "&page=" + (o || 1);
                                                    return [4, t(h, { headers: { "X-Requested-With": "XMLHttpRequest", Accept: "application/json" } })];
                                                case 1:
                                                    y = _a.sent();
                                                    if (!y || !y.ok)
                                                        return [2, C.success([])];
                                                    p = y.json();
                                                    if (!p)
                                                        return [2, C.success([])];
                                                    for (N = p.data || p.novels || p.items || (Array.isArray(p) ? p : []), R = [], H = 0; H < N.length; H++) {
                                                        F = me(N[H]);
                                                        F && F.name && F.link && R.push(F);
                                                    }
                                                    z = "", P = parseInt(o || "1", 10), Z = p.current_page || p.page || P, G = p.last_page || p.total_pages;
                                                    return [2, (G && Z < G ? z = String(Z + 1) : R.length >= 10 && (z = String(P + 1)), C.success(R, z))];
                                            }
                                        }); });
                                    } var T, L, j, m, C; return __generator(this, function (_a) {
                                        T = "https://webtruyendich.com", L = "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36", j = "Vietphrase";
                                        try {
                                            typeof CONFIG_URL != "undefined" && CONFIG_URL && (T = CONFIG_URL + ""), typeof CONFIG_UA != "undefined" && CONFIG_UA && (L = CONFIG_UA + ""), typeof CONFIG_AI != "undefined" && CONFIG_AI && (j = CONFIG_AI + "");
                                        }
                                        catch (a) { }
                                        m = String(T || "").replace(/\/+$/, "");
                                        if (typeof C == "undefined")
                                            C = { success: function (a, o) { return JSON.stringify({ code: 0, data: a, data2: o }); }, error: function (a) { return JSON.stringify({ code: 1, data: a }); } };
                                        return [2, typeof B == "function" ? B : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, genre: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, s, c, l, d, g, A, S, x, E, q, W, D, V) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function $(a) { return !a || (a = String(a).trim(), !a) ? "" : a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http://") === 0 || a.indexOf("https://") === 0 ? a.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, m) : a.charAt(0) === "/" ? m + a : m + "/" + a; } function Ie(a) { if (!a)
                                        return ""; a = $(a); try {
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
                                    } } function ge(a) { return a ? String(a).replace(/\s+/g, " ").trim() : ""; } function M(a) { return a ? (a = String(a).trim(), a.indexOf("http") === 0 ? a : a.indexOf("//") === 0 ? "https:" + a : m + (a.indexOf("/") === 0 ? "" : "/") + a) : ""; } function me(a) { if (!a)
                                        return null; var o = String(a.title || a.name || a.novel_title || "").trim(); o && (o = o.replace(/^Bìa truyện\s+/i, "").trim()); var f = String(a.url || a.slug || a.novel_slug || "").trim(), h = f.indexOf("http") === 0 ? f : m + "/truyen/" + f, y = M(a.thumbnail || a.cover || a.image || ""), p = []; return (a.author || a.novel_author) && p.push(a.author || a.novel_author), a.genre_name && p.push(a.genre_name), (a.status || a.novel_status) && p.push(a.status || a.novel_status), a.max_chapters && p.push(a.max_chapters + " chương"), { name: o, link: M(h), cover: y, description: p.join(" · "), host: m }; } function xe(a, o) {
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
                                    } function B() {
                                        return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_a) {
                                            a = [{ title: "Huyền Huyễn", input: "/the-loai/huyen-huyen", script: "gen.js" }, { title: "Tiên Hiệp", input: "/the-loai/tien-hiep", script: "gen.js" }, { title: "Đô Thị", input: "/the-loai/do-thi", script: "gen.js" }, { title: "Kiếm Hiệp", input: "/the-loai/kiem-hiep", script: "gen.js" }, { title: "Khoa Học Viễn Tưởng", input: "/the-loai/khoa-hoc-vien-tuong", script: "gen.js" }, { title: "Đồng Nhân", input: "/the-loai/dong-nhan", script: "gen.js" }, { title: "Quân Sự", input: "/the-loai/quan-su", script: "gen.js" }, { title: "Lịch Sử", input: "/the-loai/lich-su", script: "gen.js" }, { title: "Game", input: "/the-loai/game", script: "gen.js" }, { title: "Võng Du", input: "/the-loai/vong-du", script: "gen.js" }, { title: "Kỳ Huyễn", input: "/the-loai/ky-huyen", script: "gen.js" }, { title: "Linh Dị", input: "/the-loai/linh-di", script: "gen.js" }];
                                            return [2, C.success(a)];
                                        }); });
                                    } var T, L, j, m, C; return __generator(this, function (_a) {
                                        T = "https://webtruyendich.com", L = "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36", j = "Vietphrase";
                                        try {
                                            typeof CONFIG_URL != "undefined" && CONFIG_URL && (T = CONFIG_URL + ""), typeof CONFIG_UA != "undefined" && CONFIG_UA && (L = CONFIG_UA + ""), typeof CONFIG_AI != "undefined" && CONFIG_AI && (j = CONFIG_AI + "");
                                        }
                                        catch (a) { }
                                        m = String(T || "").replace(/\/+$/, "");
                                        if (typeof C == "undefined")
                                            C = { success: function (a, o) { return JSON.stringify({ code: 0, data: a, data2: o }); }, error: function (a) { return JSON.stringify({ code: 1, data: a }); } };
                                        return [2, typeof B == "function" ? B : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, gen: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, s, c, l, d, g, A, S, x, E, q, W, D, V) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function $(o) { return !o || (o = String(o).trim(), !o) ? "" : o.indexOf("//") === 0 ? "https:" + o : o.indexOf("http://") === 0 || o.indexOf("https://") === 0 ? o.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, m) : o.charAt(0) === "/" ? m + o : m + "/" + o; } function Ie(o) { if (!o)
                                        return ""; o = $(o); try {
                                        var f = new URL(o);
                                        return f.pathname = f.pathname.split("/").map(function (h) { try {
                                            return encodeURIComponent(decodeURIComponent(h));
                                        }
                                        catch (y) {
                                            return encodeURIComponent(h);
                                        } }).join("/"), f.toString() + "";
                                    }
                                    catch (h) {
                                        return encodeURI(o) + "";
                                    } } function ge(o) { return o ? String(o).replace(/\s+/g, " ").trim() : ""; } function M(o) { return o ? (o = String(o).trim(), o.indexOf("http") === 0 ? o : o.indexOf("//") === 0 ? "https:" + o : m + (o.indexOf("/") === 0 ? "" : "/") + o) : ""; } function me(o) { if (!o)
                                        return null; var f = String(o.title || o.name || o.novel_title || "").trim(); f && (f = f.replace(/^Bìa truyện\s+/i, "").trim()); var h = String(o.url || o.slug || o.novel_slug || "").trim(), y = h.indexOf("http") === 0 ? h : m + "/truyen/" + h, p = M(o.thumbnail || o.cover || o.image || ""), N = []; return (o.author || o.novel_author) && N.push(o.author || o.novel_author), o.genre_name && N.push(o.genre_name), (o.status || o.novel_status) && N.push(o.status || o.novel_status), o.max_chapters && N.push(o.max_chapters + " chương"), { name: f, link: M(y), cover: p, description: N.join(" · "), host: m }; } function xe(o, f) {
                                        return __awaiter(this, void 0, void 0, function () { var h, y; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    f || (f = {});
                                                    h = { "User-Agent": L, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.8", Referer: m + "/" };
                                                    if (f.headers)
                                                        for (y in f.headers)
                                                            h[y] = f.headers[y];
                                                    f.headers = h;
                                                    return [4, t(o, f)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function B(o, f) { if (!o)
                                        return T + "/api/search-novels?page=" + (f || 1); var h = o + ""; if (h.indexOf("http") < 0 && h.indexOf("/") < 0 && h.indexOf("webtruyendich.com") < 0)
                                        return T + "/api/search-novels?keyword=" + encodeURIComponent(h) + "&page=" + (f || 1); var y = h.split("?")[0], p = h.split("?")[1] || "", N = {}; if (p)
                                        for (var R = p.split("&"), H = 0; H < R.length; H++) {
                                            var F = R[H].split("=");
                                            F[0] && (N[F[0]] = decodeURIComponent(F[1] || ""));
                                        } if (y.indexOf("/the-loai/") >= 0) {
                                        var z = y.split("/the-loai/")[1];
                                        z && (N.genre = z);
                                    } if (y.indexOf("/xep-hang/") >= 0) {
                                        var P = y.split("/xep-hang/")[1];
                                        P && (N.sort = P);
                                    } N.page = String(f || 1); var Z = []; for (var G in N)
                                        N[G] !== void 0 && N[G] !== null && N[G] !== "" && Z.push(encodeURIComponent(G) + "=" + encodeURIComponent(N[G])); return T + "/api/search-novels?" + Z.join("&"); } function a(o, f) {
                                        return __awaiter(this, void 0, void 0, function () { var h, y, p, N, R, H, F, z, P, Z, G; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    h = parseInt(f || "1", 10), y = B(o, h);
                                                    return [4, t(y, { headers: { "User-Agent": typeof L != "undefined" ? L : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36", "X-Requested-With": "XMLHttpRequest", Accept: "application/json, text/plain, */*" } })];
                                                case 1:
                                                    p = _a.sent();
                                                    if (!p || !p.ok)
                                                        return [2, C.success([])];
                                                    N = p.json();
                                                    if (!N)
                                                        return [2, C.success([])];
                                                    for (R = N.novels || N.data || N.items || (Array.isArray(N) ? N : []), H = [], F = 0; F < R.length; F++) {
                                                        z = me(R[F]);
                                                        z && z.name && z.link && H.push(z);
                                                    }
                                                    P = "", Z = N.page || N.current_page || h, G = N.total_pages || N.last_page;
                                                    return [2, (G && Z < G ? P = String(Z + 1) : H.length >= 10 && (P = String(h + 1)), C.success(H, P))];
                                            }
                                        }); });
                                    } var T, L, j, m, C; return __generator(this, function (_a) {
                                        T = "https://webtruyendich.com", L = "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36", j = "Vietphrase";
                                        try {
                                            typeof CONFIG_URL != "undefined" && CONFIG_URL && (T = CONFIG_URL + ""), typeof CONFIG_UA != "undefined" && CONFIG_UA && (L = CONFIG_UA + ""), typeof CONFIG_AI != "undefined" && CONFIG_AI && (j = CONFIG_AI + "");
                                        }
                                        catch (o) { }
                                        m = String(T || "").replace(/\/+$/, "");
                                        if (typeof C == "undefined")
                                            C = { success: function (o, f) { return JSON.stringify({ code: 0, data: o, data2: f }); }, error: function (o) { return JSON.stringify({ code: 1, data: o }); } };
                                        return [2, typeof a == "function" ? a : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    } };
function tr(u) { return new ju({ meta: Ae, scripts: ur, host: u }); }
var Rn = require("@libs/fetch").fetchApi, du = null;
try {
    du = require("@libs/storage");
}
catch (u) {
    du = null;
}
var Vt = {}, zu = du && du.storage ? du.storage : { get: function (u) { return Vt[u]; }, set: function (u, e) { Vt[u] = e; }, delete: function (u) { delete Vt[u]; } }, jt = (function () {
    function class_2() {
        var _this = this;
        this.id = Ae.lnId, this.name = Ae.name, this.icon = Ae.lnIcon, this.site = Ae.source, this.version = Ae.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = tr({ name: "LNReader", request: function (e) { return __awaiter(_this, void 0, void 0, function () {
                var t, r, n;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            t = { method: e.method, headers: e.headers };
                            e.body != null && e.method !== "GET" && (t.body = e.body);
                            return [4, Rn(e.url, t)];
                        case 1:
                            r = _b.sent(), n = {};
                            try {
                                r.headers.forEach(function (i, s) { n[s] = i; });
                            }
                            catch (i) { }
                            _a = { status: r.status, url: r.url || e.url, headers: n };
                            return [4, r.text()];
                        case 2: return [2, (_a.text = _b.sent(), _a)];
                    }
                });
            }); }, storageGet: function (e) { var t = zu.get("vb_" + e); return t == null ? null : String(t); }, storageSet: function (e, t) { t == null ? zu.delete && zu.delete("vb_" + e) : zu.set("vb_" + e, String(t)); }, config: function (e) { return null; }, log: function (e) { return console.log(e); } });
    }
    class_2.prototype.popularNovels = function (e, t) {
        return __awaiter(this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(t && t.showLatestNovels)) return [3, 2];
                    return [4, this.engine.latest(e)];
                case 1:
                    _a = _b.sent();
                    return [3, 4];
                case 2: return [4, this.engine.popular(e)];
                case 3:
                    _a = _b.sent();
                    _b.label = 4;
                case 4: return [2, (_a).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.search(e, t)];
                case 1: return [2, (_a.sent()).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.detail(e)];
                case 1:
                    t = _a.sent();
                    return [4, this.engine.chapters(e)];
                case 2:
                    r = _a.sent();
                    return [2, { path: e, name: t.name || "Untitled", cover: t.cover, summary: t.description, author: t.author, status: t.ongoing ? "Ongoing" : "Completed", genres: t.genres.join(","), chapters: r.map(function (n, i) { return ({ name: n.name, path: n.url, chapterNumber: i + 1 }); }) }];
            }
        }); });
    };
    class_2.prototype.parseChapter = function (e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.content(e)];
                case 1: return [2, (_a.sent()).html];
            }
        }); });
    };
    class_2.prototype.resolveUrl = function (e, t) { return /^https?:/i.test(e) ? e : Ae.source.replace(/\/+$/, "") + "/" + String(e).replace(/^\/+/, ""); };
    return class_2;
}()), Fn = new jt;

if (typeof exports === "object" && exports && module.exports !== exports && module.exports && module.exports.default) exports.default = module.exports.default;
