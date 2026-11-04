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
var d0 = Object.create;
var Ye = Object.defineProperty, h0 = Object.defineProperties, b0 = Object.getOwnPropertyDescriptor, p0 = Object.getOwnPropertyDescriptors, g0 = Object.getOwnPropertyNames, Yu = Object.getOwnPropertySymbols, m0 = Object.getPrototypeOf, tr = Object.prototype.hasOwnProperty, x0 = Object.prototype.propertyIsEnumerable;
var er = function (e, t, u) { return t in e ? Ye(e, t, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[t] = u; }, pe = function (e, t) {
    var e_2, _a;
    for (var u in t || (t = {}))
        tr.call(t, u) && er(e, u, t[u]);
    if (Yu)
        try {
            for (var _b = __values(Yu(t)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var u = _c.value;
                x0.call(t, u) && er(e, u, t[u]);
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
}, Le = function (e, t) { return h0(e, p0(t)); };
var y0 = function (e, t) { return function () { return (t || e((t = { exports: {} }).exports, t), t.exports); }; }, $t = function (e, t) { for (var u in t)
    Ye(e, u, { get: t[u], enumerable: !0 }); }, ur = function (e, t, u, r) {
    var e_3, _a;
    if (t && typeof t == "object" || typeof t == "function") {
        var _loop_1 = function (a) {
            !tr.call(e, a) && a !== u && Ye(e, a, { get: function () { return t[a]; }, enumerable: !(r = b0(t, a)) || r.enumerable });
        };
        try {
            for (var _b = __values(g0(t)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                _loop_1(a);
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
var Oe = function (e, t, u) { return (u = e != null ? d0(m0(e)) : {}, ur(t || !e || !e.__esModule ? Ye(u, "default", { value: e, enumerable: !0 }) : u, e)); }, v0 = function (e) { return ur(Ye({}, "__esModule", { value: !0 }), e); };
var Ne = y0(function (vi, Or) { Or.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var za = {};
$t(za, { default: function () { return Ga; } });
module.exports = v0(za);
var pt = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (e) { return e.charCodeAt(0); }));
var gt = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (e) { return e.charCodeAt(0); }));
var Qt, w0 = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Me = (Qt = String.fromCodePoint) !== null && Qt !== void 0 ? Qt : function (e) { var t = ""; return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t; };
function Xt(e) { var t; return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = w0.get(e)) !== null && t !== void 0 ? t : e; }
var Y;
(function (e) { e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z"; })(Y || (Y = {}));
var S0 = 32, Ee;
(function (e) { e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE"; })(Ee || (Ee = {}));
function Zt(e) { return e >= Y.ZERO && e <= Y.NINE; }
function T0(e) { return e >= Y.UPPER_A && e <= Y.UPPER_F || e >= Y.LOWER_A && e <= Y.LOWER_F; }
function A0(e) { return e >= Y.UPPER_A && e <= Y.UPPER_Z || e >= Y.LOWER_A && e <= Y.LOWER_Z || Zt(e); }
function E0(e) { return e === Y.EQUALS || A0(e); }
var J;
(function (e) { e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity"; })(J || (J = {}));
var le;
(function (e) { e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute"; })(le || (le = {}));
var Be = (function () {
    function Be(t, u, r) {
        this.decodeTree = t, this.emitCodePoint = u, this.errors = r, this.state = J.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = le.Strict;
    }
    Be.prototype.startEntity = function (t) { this.decodeMode = t, this.state = J.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    Be.prototype.write = function (t, u) { switch (this.state) {
        case J.EntityStart: return t.charCodeAt(u) === Y.NUM ? (this.state = J.NumericStart, this.consumed += 1, this.stateNumericStart(t, u + 1)) : (this.state = J.NamedEntity, this.stateNamedEntity(t, u));
        case J.NumericStart: return this.stateNumericStart(t, u);
        case J.NumericDecimal: return this.stateNumericDecimal(t, u);
        case J.NumericHex: return this.stateNumericHex(t, u);
        case J.NamedEntity: return this.stateNamedEntity(t, u);
    } };
    Be.prototype.stateNumericStart = function (t, u) { return u >= t.length ? -1 : (t.charCodeAt(u) | S0) === Y.LOWER_X ? (this.state = J.NumericHex, this.consumed += 1, this.stateNumericHex(t, u + 1)) : (this.state = J.NumericDecimal, this.stateNumericDecimal(t, u)); };
    Be.prototype.addToNumericResult = function (t, u, r, a) { if (u !== r) {
        var n = r - u;
        this.result = this.result * Math.pow(a, n) + parseInt(t.substr(u, n), a), this.consumed += n;
    } };
    Be.prototype.stateNumericHex = function (t, u) { var r = u; for (; u < t.length;) {
        var a = t.charCodeAt(u);
        if (Zt(a) || T0(a))
            u += 1;
        else
            return this.addToNumericResult(t, r, u, 16), this.emitNumericEntity(a, 3);
    } return this.addToNumericResult(t, r, u, 16), -1; };
    Be.prototype.stateNumericDecimal = function (t, u) { var r = u; for (; u < t.length;) {
        var a = t.charCodeAt(u);
        if (Zt(a))
            u += 1;
        else
            return this.addToNumericResult(t, r, u, 10), this.emitNumericEntity(a, 2);
    } return this.addToNumericResult(t, r, u, 10), -1; };
    Be.prototype.emitNumericEntity = function (t, u) { var r; if (this.consumed <= u)
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (t === Y.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === le.Strict)
        return 0; return this.emitCodePoint(Xt(this.result), this.consumed), this.errors && (t !== Y.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    Be.prototype.stateNamedEntity = function (t, u) { var r = this.decodeTree, a = r[this.treeIndex], n = (a & Ee.VALUE_LENGTH) >> 14; for (; u < t.length; u++, this.excess++) {
        var o = t.charCodeAt(u);
        if (this.treeIndex = k0(r, a, this.treeIndex + Math.max(1, n), o), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === le.Attribute && (n === 0 || E0(o)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (a = r[this.treeIndex], n = (a & Ee.VALUE_LENGTH) >> 14, n !== 0) {
            if (o === Y.SEMI)
                return this.emitNamedEntityData(this.treeIndex, n, this.consumed + this.excess);
            this.decodeMode !== le.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    Be.prototype.emitNotTerminatedNamedEntity = function () { var t; var _a = this, u = _a.result, r = _a.decodeTree, a = (r[u] & Ee.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(u, a, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed; };
    Be.prototype.emitNamedEntityData = function (t, u, r) { var a = this.decodeTree; return this.emitCodePoint(u === 1 ? a[t] & ~Ee.VALUE_LENGTH : a[t + 1], r), u === 3 && this.emitCodePoint(a[t + 2], r), r; };
    Be.prototype.end = function () { var t; switch (this.state) {
        case J.NamedEntity: return this.result !== 0 && (this.decodeMode !== le.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case J.NumericDecimal: return this.emitNumericEntity(0, 2);
        case J.NumericHex: return this.emitNumericEntity(0, 3);
        case J.NumericStart: return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case J.EntityStart: return 0;
    } };
    return Be;
}());
function rr(e) { var t = "", u = new Be(e, function (r) { return t += Me(r); }); return function (a, n) { var o = 0, l = 0; for (; (l = a.indexOf("&", l)) >= 0;) {
    t += a.slice(o, l), u.startEntity(n);
    var h = u.write(a, l + 1);
    if (h < 0) {
        o = l + u.end();
        break;
    }
    o = l + h, l = h === 0 ? o + 1 : o;
} var d = t + a.slice(o); return t = "", d; }; }
function k0(e, t, u, r) { var a = (t & Ee.BRANCH_LENGTH) >> 7, n = t & Ee.JUMP_TABLE; if (a === 0)
    return n !== 0 && r === n ? u : -1; if (n) {
    var d = r - n;
    return d < 0 || d >= a ? -1 : e[u + d] - 1;
} var o = u, l = o + a - 1; for (; o <= l;) {
    var d = o + l >>> 1, h = e[d];
    if (h < r)
        o = d + 1;
    else if (h > r)
        l = d - 1;
    else
        return e[d + a];
} return -1; }
var Ya = rr(pt), en = rr(gt);
var q;
(function (e) { e[e.Tab = 9] = "Tab", e[e.NewLine = 10] = "NewLine", e[e.FormFeed = 12] = "FormFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.Number = 35] = "Number", e[e.Amp = 38] = "Amp", e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Dash = 45] = "Dash", e[e.Slash = 47] = "Slash", e[e.Zero = 48] = "Zero", e[e.Nine = 57] = "Nine", e[e.Semi = 59] = "Semi", e[e.Lt = 60] = "Lt", e[e.Eq = 61] = "Eq", e[e.Gt = 62] = "Gt", e[e.Questionmark = 63] = "Questionmark", e[e.UpperA = 65] = "UpperA", e[e.LowerA = 97] = "LowerA", e[e.UpperF = 70] = "UpperF", e[e.LowerF = 102] = "LowerF", e[e.UpperZ = 90] = "UpperZ", e[e.LowerZ = 122] = "LowerZ", e[e.LowerX = 120] = "LowerX", e[e.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(q || (q = {}));
var y;
(function (e) { e[e.Text = 1] = "Text", e[e.BeforeTagName = 2] = "BeforeTagName", e[e.InTagName = 3] = "InTagName", e[e.InSelfClosingTag = 4] = "InSelfClosingTag", e[e.BeforeClosingTagName = 5] = "BeforeClosingTagName", e[e.InClosingTagName = 6] = "InClosingTagName", e[e.AfterClosingTagName = 7] = "AfterClosingTagName", e[e.BeforeAttributeName = 8] = "BeforeAttributeName", e[e.InAttributeName = 9] = "InAttributeName", e[e.AfterAttributeName = 10] = "AfterAttributeName", e[e.BeforeAttributeValue = 11] = "BeforeAttributeValue", e[e.InAttributeValueDq = 12] = "InAttributeValueDq", e[e.InAttributeValueSq = 13] = "InAttributeValueSq", e[e.InAttributeValueNq = 14] = "InAttributeValueNq", e[e.BeforeDeclaration = 15] = "BeforeDeclaration", e[e.InDeclaration = 16] = "InDeclaration", e[e.InProcessingInstruction = 17] = "InProcessingInstruction", e[e.BeforeComment = 18] = "BeforeComment", e[e.CDATASequence = 19] = "CDATASequence", e[e.InSpecialComment = 20] = "InSpecialComment", e[e.InCommentLike = 21] = "InCommentLike", e[e.BeforeSpecialS = 22] = "BeforeSpecialS", e[e.BeforeSpecialT = 23] = "BeforeSpecialT", e[e.SpecialStartSequence = 24] = "SpecialStartSequence", e[e.InSpecialTag = 25] = "InSpecialTag", e[e.InEntity = 26] = "InEntity"; })(y || (y = {}));
function we(e) { return e === q.Space || e === q.NewLine || e === q.Tab || e === q.FormFeed || e === q.CarriageReturn; }
function mt(e) { return e === q.Slash || e === q.Gt || we(e); }
function C0(e) { return e >= q.LowerA && e <= q.LowerZ || e >= q.UpperA && e <= q.UpperZ; }
var fe;
(function (e) { e[e.NoValue = 0] = "NoValue", e[e.Unquoted = 1] = "Unquoted", e[e.Single = 2] = "Single", e[e.Double = 3] = "Double"; })(fe || (fe = {}));
var re = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Pe = (function () {
    function Pe(_a, r) {
        var _b = _a.xmlMode, t = _b === void 0 ? !1 : _b, _c = _a.decodeEntities, u = _c === void 0 ? !0 : _c;
        var _this = this;
        this.cbs = r, this.state = y.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = y.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = t, this.decodeEntities = u, this.entityDecoder = new Be(t ? gt : pt, function (a, n) { return _this.emitCodePoint(a, n); });
    }
    Pe.prototype.reset = function () { this.state = y.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = y.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Pe.prototype.write = function (t) { this.offset += this.buffer.length, this.buffer = t, this.parse(); };
    Pe.prototype.end = function () { this.running && this.finish(); };
    Pe.prototype.pause = function () { this.running = !1; };
    Pe.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Pe.prototype.stateText = function (t) { t === q.Lt || !this.decodeEntities && this.fastForwardTo(q.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = y.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && t === q.Amp && this.startEntity(); };
    Pe.prototype.stateSpecialStartSequence = function (t) { var u = this.sequenceIndex === this.currentSequence.length; if (!(u ? mt(t) : (t | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!u) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = y.InTagName, this.stateInTagName(t); };
    Pe.prototype.stateInSpecialTag = function (t) { if (this.sequenceIndex === this.currentSequence.length) {
        if (t === q.Gt || we(t)) {
            var u = this.index - this.currentSequence.length;
            if (this.sectionStart < u) {
                var r = this.index;
                this.index = u, this.cbs.ontext(this.sectionStart, u), this.index = r;
            }
            this.isSpecial = !1, this.sectionStart = u + 2, this.stateInClosingTagName(t);
            return;
        }
        this.sequenceIndex = 0;
    } (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === re.TitleEnd ? this.decodeEntities && t === q.Amp && this.startEntity() : this.fastForwardTo(q.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === q.Lt); };
    Pe.prototype.stateCDATASequence = function (t) { t === re.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === re.Cdata.length && (this.state = y.InCommentLike, this.currentSequence = re.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = y.InDeclaration, this.stateInDeclaration(t)); };
    Pe.prototype.fastForwardTo = function (t) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === t)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Pe.prototype.stateInCommentLike = function (t) { t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === re.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = y.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Pe.prototype.isTagStartChar = function (t) { return this.xmlMode ? !mt(t) : C0(t); };
    Pe.prototype.startSpecial = function (t, u) { this.isSpecial = !0, this.currentSequence = t, this.sequenceIndex = u, this.state = y.SpecialStartSequence; };
    Pe.prototype.stateBeforeTagName = function (t) { if (t === q.ExclamationMark)
        this.state = y.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (t === q.Questionmark)
        this.state = y.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(t)) {
        var u = t | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = y.InTagName : u === re.ScriptEnd[2] ? this.state = y.BeforeSpecialS : u === re.TitleEnd[2] ? this.state = y.BeforeSpecialT : this.state = y.InTagName;
    }
    else
        t === q.Slash ? this.state = y.BeforeClosingTagName : (this.state = y.Text, this.stateText(t)); };
    Pe.prototype.stateInTagName = function (t) { mt(t) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = y.BeforeAttributeName, this.stateBeforeAttributeName(t)); };
    Pe.prototype.stateBeforeClosingTagName = function (t) { we(t) || (t === q.Gt ? this.state = y.Text : (this.state = this.isTagStartChar(t) ? y.InClosingTagName : y.InSpecialComment, this.sectionStart = this.index)); };
    Pe.prototype.stateInClosingTagName = function (t) { (t === q.Gt || we(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = y.AfterClosingTagName, this.stateAfterClosingTagName(t)); };
    Pe.prototype.stateAfterClosingTagName = function (t) { (t === q.Gt || this.fastForwardTo(q.Gt)) && (this.state = y.Text, this.sectionStart = this.index + 1); };
    Pe.prototype.stateBeforeAttributeName = function (t) { t === q.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = y.InSpecialTag, this.sequenceIndex = 0) : this.state = y.Text, this.sectionStart = this.index + 1) : t === q.Slash ? this.state = y.InSelfClosingTag : we(t) || (this.state = y.InAttributeName, this.sectionStart = this.index); };
    Pe.prototype.stateInSelfClosingTag = function (t) { t === q.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = y.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : we(t) || (this.state = y.BeforeAttributeName, this.stateBeforeAttributeName(t)); };
    Pe.prototype.stateInAttributeName = function (t) { (t === q.Eq || mt(t)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = y.AfterAttributeName, this.stateAfterAttributeName(t)); };
    Pe.prototype.stateAfterAttributeName = function (t) { t === q.Eq ? this.state = y.BeforeAttributeValue : t === q.Slash || t === q.Gt ? (this.cbs.onattribend(fe.NoValue, this.sectionStart), this.sectionStart = -1, this.state = y.BeforeAttributeName, this.stateBeforeAttributeName(t)) : we(t) || (this.cbs.onattribend(fe.NoValue, this.sectionStart), this.state = y.InAttributeName, this.sectionStart = this.index); };
    Pe.prototype.stateBeforeAttributeValue = function (t) { t === q.DoubleQuote ? (this.state = y.InAttributeValueDq, this.sectionStart = this.index + 1) : t === q.SingleQuote ? (this.state = y.InAttributeValueSq, this.sectionStart = this.index + 1) : we(t) || (this.sectionStart = this.index, this.state = y.InAttributeValueNq, this.stateInAttributeValueNoQuotes(t)); };
    Pe.prototype.handleInAttributeValue = function (t, u) { t === u || !this.decodeEntities && this.fastForwardTo(u) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(u === q.DoubleQuote ? fe.Double : fe.Single, this.index + 1), this.state = y.BeforeAttributeName) : this.decodeEntities && t === q.Amp && this.startEntity(); };
    Pe.prototype.stateInAttributeValueDoubleQuotes = function (t) { this.handleInAttributeValue(t, q.DoubleQuote); };
    Pe.prototype.stateInAttributeValueSingleQuotes = function (t) { this.handleInAttributeValue(t, q.SingleQuote); };
    Pe.prototype.stateInAttributeValueNoQuotes = function (t) { we(t) || t === q.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(fe.Unquoted, this.index), this.state = y.BeforeAttributeName, this.stateBeforeAttributeName(t)) : this.decodeEntities && t === q.Amp && this.startEntity(); };
    Pe.prototype.stateBeforeDeclaration = function (t) { t === q.OpeningSquareBracket ? (this.state = y.CDATASequence, this.sequenceIndex = 0) : this.state = t === q.Dash ? y.BeforeComment : y.InDeclaration; };
    Pe.prototype.stateInDeclaration = function (t) { (t === q.Gt || this.fastForwardTo(q.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = y.Text, this.sectionStart = this.index + 1); };
    Pe.prototype.stateInProcessingInstruction = function (t) { (t === q.Gt || this.fastForwardTo(q.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = y.Text, this.sectionStart = this.index + 1); };
    Pe.prototype.stateBeforeComment = function (t) { t === q.Dash ? (this.state = y.InCommentLike, this.currentSequence = re.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = y.InDeclaration; };
    Pe.prototype.stateInSpecialComment = function (t) { (t === q.Gt || this.fastForwardTo(q.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = y.Text, this.sectionStart = this.index + 1); };
    Pe.prototype.stateBeforeSpecialS = function (t) { var u = t | 32; u === re.ScriptEnd[3] ? this.startSpecial(re.ScriptEnd, 4) : u === re.StyleEnd[3] ? this.startSpecial(re.StyleEnd, 4) : (this.state = y.InTagName, this.stateInTagName(t)); };
    Pe.prototype.stateBeforeSpecialT = function (t) { var u = t | 32; u === re.TitleEnd[3] ? this.startSpecial(re.TitleEnd, 4) : u === re.TextareaEnd[3] ? this.startSpecial(re.TextareaEnd, 4) : (this.state = y.InTagName, this.stateInTagName(t)); };
    Pe.prototype.startEntity = function () { this.baseState = this.state, this.state = y.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? le.Strict : this.baseState === y.Text || this.baseState === y.InSpecialTag ? le.Legacy : le.Attribute); };
    Pe.prototype.stateInEntity = function () { var t = this.entityDecoder.write(this.buffer, this.index - this.offset); t >= 0 ? (this.state = this.baseState, t === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Pe.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === y.Text || this.state === y.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === y.InAttributeValueDq || this.state === y.InAttributeValueSq || this.state === y.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Pe.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Pe.prototype.parse = function () { for (; this.shouldContinue();) {
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
    Pe.prototype.finish = function () { this.state === y.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Pe.prototype.handleTrailingData = function () { var t = this.buffer.length + this.offset; this.sectionStart >= t || (this.state === y.InCommentLike ? this.currentSequence === re.CdataEnd ? this.cbs.oncdata(this.sectionStart, t, 0) : this.cbs.oncomment(this.sectionStart, t, 0) : this.state === y.InTagName || this.state === y.BeforeAttributeName || this.state === y.BeforeAttributeValue || this.state === y.AfterAttributeName || this.state === y.InAttributeName || this.state === y.InAttributeValueSq || this.state === y.InAttributeValueDq || this.state === y.InAttributeValueNq || this.state === y.InClosingTagName || this.cbs.ontext(this.sectionStart, t)); };
    Pe.prototype.emitCodePoint = function (t, u) { this.baseState !== y.Text && this.baseState !== y.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.onattribentity(t)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.ontextentity(t, this.sectionStart)); };
    return Pe;
}());
var Fe = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), F = new Set(["p"]), ar = new Set(["thead", "tbody"]), nr = new Set(["dd", "dt"]), ir = new Set(["rt", "rp"]), q0 = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", F], ["h1", F], ["h2", F], ["h3", F], ["h4", F], ["h5", F], ["h6", F], ["select", Fe], ["input", Fe], ["output", Fe], ["button", Fe], ["datalist", Fe], ["textarea", Fe], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", nr], ["dt", nr], ["address", F], ["article", F], ["aside", F], ["blockquote", F], ["details", F], ["div", F], ["dl", F], ["fieldset", F], ["figcaption", F], ["figure", F], ["footer", F], ["form", F], ["header", F], ["hr", F], ["main", F], ["nav", F], ["ol", F], ["pre", F], ["section", F], ["table", F], ["ul", F], ["rt", ir], ["rp", ir], ["tbody", ar], ["tfoot", ar]]), N0 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), sr = new Set(["math", "svg"]), cr = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), L0 = /\s|\//, et = (function () {
    function et(t, u) {
        if (u === void 0) { u = {}; }
        var r, a, n, o, l, d;
        this.options = u, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = t != null ? t : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r = u.lowerCaseTags) !== null && r !== void 0 ? r : this.htmlMode, this.lowerCaseAttributeNames = (a = u.lowerCaseAttributeNames) !== null && a !== void 0 ? a : this.htmlMode, this.recognizeSelfClosing = (n = u.recognizeSelfClosing) !== null && n !== void 0 ? n : !this.htmlMode, this.tokenizer = new ((o = u.Tokenizer) !== null && o !== void 0 ? o : Pe)(this.options, this), this.foreignContext = [!this.htmlMode], (d = (l = this.cbs).onparserinit) === null || d === void 0 || d.call(l, this);
    }
    et.prototype.ontext = function (t, u) { var r, a; var n = this.getSlice(t, u); this.endIndex = u - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, n), this.startIndex = u; };
    et.prototype.ontextentity = function (t, u) { var r, a; this.endIndex = u - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, Me(t)), this.startIndex = u; };
    et.prototype.isVoidElement = function (t) { return this.htmlMode && N0.has(t); };
    et.prototype.onopentagname = function (t, u) { this.endIndex = u; var r = this.getSlice(t, u); this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r); };
    et.prototype.emitOpenTag = function (t) { var u, r, a, n; this.openTagStart = this.startIndex, this.tagname = t; var o = this.htmlMode && q0.get(t); if (o)
        for (; this.stack.length > 0 && o.has(this.stack[0]);) {
            var l = this.stack.shift();
            (r = (u = this.cbs).onclosetag) === null || r === void 0 || r.call(u, l, !0);
        } this.isVoidElement(t) || (this.stack.unshift(t), this.htmlMode && (sr.has(t) ? this.foreignContext.unshift(!0) : cr.has(t) && this.foreignContext.unshift(!1))), (n = (a = this.cbs).onopentagname) === null || n === void 0 || n.call(a, t), this.cbs.onopentag && (this.attribs = {}); };
    et.prototype.endOpenTag = function (t) { var u, r; this.startIndex = this.openTagStart, this.attribs && ((r = (u = this.cbs).onopentag) === null || r === void 0 || r.call(u, this.tagname, this.attribs, t), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    et.prototype.onopentagend = function (t) { this.endIndex = t, this.endOpenTag(!1), this.startIndex = t + 1; };
    et.prototype.onclosetag = function (t, u) { var r, a, n, o, l, d, h, w; this.endIndex = u; var O = this.getSlice(t, u); if (this.lowerCaseTagNames && (O = O.toLowerCase()), this.htmlMode && (sr.has(O) || cr.has(O)) && this.foreignContext.shift(), this.isVoidElement(O))
        this.htmlMode && O === "br" && ((o = (n = this.cbs).onopentagname) === null || o === void 0 || o.call(n, "br"), (d = (l = this.cbs).onopentag) === null || d === void 0 || d.call(l, "br", {}, !0), (w = (h = this.cbs).onclosetag) === null || w === void 0 || w.call(h, "br", !1));
    else {
        var T = this.stack.indexOf(O);
        if (T !== -1)
            for (var A = 0; A <= T; A++) {
                var D = this.stack.shift();
                (a = (r = this.cbs).onclosetag) === null || a === void 0 || a.call(r, D, A !== T);
            }
        else
            this.htmlMode && O === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = u + 1; };
    et.prototype.onselfclosingtag = function (t) { this.endIndex = t, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = t + 1) : this.onopentagend(t); };
    et.prototype.closeCurrentTag = function (t) { var u, r; var a = this.tagname; this.endOpenTag(t), this.stack[0] === a && ((r = (u = this.cbs).onclosetag) === null || r === void 0 || r.call(u, a, !t), this.stack.shift()); };
    et.prototype.onattribname = function (t, u) { this.startIndex = t; var r = this.getSlice(t, u); this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r; };
    et.prototype.onattribdata = function (t, u) { this.attribvalue += this.getSlice(t, u); };
    et.prototype.onattribentity = function (t) { this.attribvalue += Me(t); };
    et.prototype.onattribend = function (t, u) { var r, a; this.endIndex = u, (a = (r = this.cbs).onattribute) === null || a === void 0 || a.call(r, this.attribname, this.attribvalue, t === fe.Double ? '"' : t === fe.Single ? "'" : t === fe.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    et.prototype.getInstructionName = function (t) { var u = t.search(L0), r = u < 0 ? t : t.substr(0, u); return this.lowerCaseTagNames && (r = r.toLowerCase()), r; };
    et.prototype.ondeclaration = function (t, u) { this.endIndex = u; var r = this.getSlice(t, u); if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(a), "!".concat(r));
    } this.startIndex = u + 1; };
    et.prototype.onprocessinginstruction = function (t, u) { this.endIndex = u; var r = this.getSlice(t, u); if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(a), "?".concat(r));
    } this.startIndex = u + 1; };
    et.prototype.oncomment = function (t, u, r) { var a, n, o, l; this.endIndex = u, (n = (a = this.cbs).oncomment) === null || n === void 0 || n.call(a, this.getSlice(t, u - r)), (l = (o = this.cbs).oncommentend) === null || l === void 0 || l.call(o), this.startIndex = u + 1; };
    et.prototype.oncdata = function (t, u, r) { var a, n, o, l, d, h, w, O, T, A; this.endIndex = u; var D = this.getSlice(t, u - r); !this.htmlMode || this.options.recognizeCDATA ? ((n = (a = this.cbs).oncdatastart) === null || n === void 0 || n.call(a), (l = (o = this.cbs).ontext) === null || l === void 0 || l.call(o, D), (h = (d = this.cbs).oncdataend) === null || h === void 0 || h.call(d)) : ((O = (w = this.cbs).oncomment) === null || O === void 0 || O.call(w, "[CDATA[".concat(D, "]]")), (A = (T = this.cbs).oncommentend) === null || A === void 0 || A.call(T)), this.startIndex = u + 1; };
    et.prototype.onend = function () { var t, u; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = 0; r < this.stack.length; r++)
            this.cbs.onclosetag(this.stack[r], !0);
    } (u = (t = this.cbs).onend) === null || u === void 0 || u.call(t); };
    et.prototype.reset = function () { var t, u, r, a; (u = (t = this.cbs).onreset) === null || u === void 0 || u.call(t), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (a = (r = this.cbs).onparserinit) === null || a === void 0 || a.call(r, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    et.prototype.parseComplete = function (t) { this.reset(), this.end(t); };
    et.prototype.getSlice = function (t, u) { for (; t - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var r = this.buffers[0].slice(t - this.bufferOffset, u - this.bufferOffset); for (; u - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), r += this.buffers[0].slice(0, u - this.bufferOffset); return r; };
    et.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    et.prototype.write = function (t) { var u, r; if (this.ended) {
        (r = (u = this.cbs).onerror) === null || r === void 0 || r.call(u, new Error(".write() after done!"));
        return;
    } this.buffers.push(t), this.tokenizer.running && (this.tokenizer.write(t), this.writeIndex++); };
    et.prototype.end = function (t) { var u, r; if (this.ended) {
        (r = (u = this.cbs).onerror) === null || r === void 0 || r.call(u, new Error(".end() after done!"));
        return;
    } t && this.write(t), this.ended = !0, this.tokenizer.end(); };
    et.prototype.pause = function () { this.tokenizer.pause(); };
    et.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    et.prototype.parseChunk = function (t) { this.write(t); };
    et.prototype.done = function (t) { this.end(t); };
    return et;
}());
var xt = {};
$t(xt, { CDATA: function () { return iu; }, Comment: function () { return uu; }, Directive: function () { return tu; }, Doctype: function () { return su; }, ElementType: function () { return B; }, Root: function () { return Yt; }, Script: function () { return ru; }, Style: function () { return au; }, Tag: function () { return nu; }, Text: function () { return eu; }, isTag: function () { return Jt; } });
var B;
(function (e) { e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"; })(B || (B = {}));
function Jt(e) { return e.type === B.Tag || e.type === B.Script || e.type === B.Style; }
var Yt = B.Root, eu = B.Text, tu = B.Directive, uu = B.Comment, ru = B.Script, au = B.Style, nu = B.Tag, iu = B.CDATA, su = B.Doctype;
var yt = (function () {
    function yt() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(yt.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (t) { this.parent = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(yt.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (t) { this.prev = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(yt.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (t) { this.next = t; },
        enumerable: false,
        configurable: true
    });
    yt.prototype.cloneNode = function (t) {
        if (t === void 0) { t = !1; }
        return or(this, t);
    };
    return yt;
}()), tt = (function (_super) {
    __extends(tt, _super);
    function tt(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = t;
        return _this;
    }
    Object.defineProperty(tt.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (t) { this.data = t; },
        enumerable: false,
        configurable: true
    });
    return tt;
}(yt)), je = (function (_super) {
    __extends(je, _super);
    function je() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = B.Text;
        return _this;
    }
    Object.defineProperty(je.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return je;
}(tt)), ut = (function (_super) {
    __extends(ut, _super);
    function ut() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = B.Comment;
        return _this;
    }
    Object.defineProperty(ut.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return ut;
}(tt)), rt = (function (_super) {
    __extends(rt, _super);
    function rt(t, u) {
        var _this = this;
        _this = _super.call(this, u) || this, _this.name = t, _this.type = B.Directive;
        return _this;
    }
    Object.defineProperty(rt.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return rt;
}(tt)), at = (function (_super) {
    __extends(at, _super);
    function at(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = t;
        return _this;
    }
    Object.defineProperty(at.prototype, "firstChild", {
        get: function () { var t; return (t = this.children[0]) !== null && t !== void 0 ? t : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(at.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(at.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (t) { this.children = t; },
        enumerable: false,
        configurable: true
    });
    return at;
}(yt)), nt = (function (_super) {
    __extends(nt, _super);
    function nt() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = B.CDATA;
        return _this;
    }
    Object.defineProperty(nt.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return nt;
}(at)), Ve = (function (_super) {
    __extends(Ve, _super);
    function Ve() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = B.Root;
        return _this;
    }
    Object.defineProperty(Ve.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return Ve;
}(at)), it = (function (_super) {
    __extends(it, _super);
    function it(t, u, r, a) {
        if (r === void 0) { r = []; }
        if (a === void 0) { a = t === "script" ? B.Script : t === "style" ? B.Style : B.Tag; }
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = t, _this.attribs = u, _this.type = a;
        return _this;
    }
    Object.defineProperty(it.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(it.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (t) { this.name = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(it.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (t) { var u, r; return { name: t, value: _this.attribs[t], namespace: (u = _this["x-attribsNamespace"]) === null || u === void 0 ? void 0 : u[t], prefix: (r = _this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[t] }; });
        },
        enumerable: false,
        configurable: true
    });
    return it;
}(at));
function P(e) { return Jt(e); }
function Ge(e) { return e.type === B.CDATA; }
function xe(e) { return e.type === B.Text; }
function st(e) { return e.type === B.Comment; }
function O0(e) { return e.type === B.Directive; }
function ou(e) { return e.type === B.Root; }
function ne(e) { return Object.prototype.hasOwnProperty.call(e, "children"); }
function or(e, t) {
    if (t === void 0) { t = !1; }
    var u;
    if (xe(e))
        u = new je(e.data);
    else if (st(e))
        u = new ut(e.data);
    else if (P(e)) {
        var r = t ? cu(e.children) : [], a_1 = new it(e.name, pe({}, e.attribs), r);
        r.forEach(function (n) { return n.parent = a_1; }), e.namespace != null && (a_1.namespace = e.namespace), e["x-attribsNamespace"] && (a_1["x-attribsNamespace"] = pe({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (a_1["x-attribsPrefix"] = pe({}, e["x-attribsPrefix"])), u = a_1;
    }
    else if (Ge(e)) {
        var r = t ? cu(e.children) : [], a_2 = new nt(r);
        r.forEach(function (n) { return n.parent = a_2; }), u = a_2;
    }
    else if (ou(e)) {
        var r = t ? cu(e.children) : [], a_3 = new Ve(r);
        r.forEach(function (n) { return n.parent = a_3; }), e["x-mode"] && (a_3["x-mode"] = e["x-mode"]), u = a_3;
    }
    else if (O0(e)) {
        var r = new rt(e.name, e.data);
        e["x-name"] != null && (r["x-name"] = e["x-name"], r["x-publicId"] = e["x-publicId"], r["x-systemId"] = e["x-systemId"]), u = r;
    }
    else
        throw new Error("Not implemented yet: ".concat(e.type));
    return u.startIndex = e.startIndex, u.endIndex = e.endIndex, e.sourceCodeLocation != null && (u.sourceCodeLocation = e.sourceCodeLocation), u;
}
function cu(e) { var t = e.map(function (u) { return or(u, !0); }); for (var u = 1; u < t.length; u++)
    t[u].prev = t[u - 1], t[u - 1].next = t[u]; return t; }
var lr = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, ze = (function () {
    function ze(t, u, r) {
        this.dom = [], this.root = new Ve(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof u == "function" && (r = u, u = lr), typeof t == "object" && (u = t, t = void 0), this.callback = t != null ? t : null, this.options = u != null ? u : lr, this.elementCB = r != null ? r : null;
    }
    ze.prototype.onparserinit = function (t) { this.parser = t; };
    ze.prototype.onreset = function () { this.dom = [], this.root = new Ve(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    ze.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    ze.prototype.onerror = function (t) { this.handleCallback(t); };
    ze.prototype.onclosetag = function () { this.lastNode = null; var t = this.tagStack.pop(); this.options.withEndIndices && (t.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(t); };
    ze.prototype.onopentag = function (t, u) { var r = this.options.xmlMode ? B.Tag : void 0, a = new it(t, u, void 0, r); this.addNode(a), this.tagStack.push(a); };
    ze.prototype.ontext = function (t) { var u = this.lastNode; if (u && u.type === B.Text)
        u.data += t, this.options.withEndIndices && (u.endIndex = this.parser.endIndex);
    else {
        var r = new je(t);
        this.addNode(r), this.lastNode = r;
    } };
    ze.prototype.oncomment = function (t) { if (this.lastNode && this.lastNode.type === B.Comment) {
        this.lastNode.data += t;
        return;
    } var u = new ut(t); this.addNode(u), this.lastNode = u; };
    ze.prototype.oncommentend = function () { this.lastNode = null; };
    ze.prototype.oncdatastart = function () { var t = new je(""), u = new nt([t]); this.addNode(u), t.parent = u, this.lastNode = t; };
    ze.prototype.oncdataend = function () { this.lastNode = null; };
    ze.prototype.onprocessinginstruction = function (t, u) { var r = new rt(t, u); this.addNode(r); };
    ze.prototype.handleCallback = function (t) { if (typeof this.callback == "function")
        this.callback(t, this.dom);
    else if (t)
        throw t; };
    ze.prototype.addNode = function (t) { var u = this.tagStack[this.tagStack.length - 1], r = u.children[u.children.length - 1]; this.options.withStartIndices && (t.startIndex = this.parser.startIndex), this.options.withEndIndices && (t.endIndex = this.parser.endIndex), u.children.push(t), r && (t.prev = r, r.next = t), t.parent = u, this.lastNode = null; };
    return ze;
}());
var ye = {};
$t(ye, { DocumentPosition: function () { return de; }, append: function () { return Z0; }, appendChild: function () { return X0; }, compareDocumentPosition: function () { return Er; }, existsOne: function () { return Tr; }, filter: function () { return We; }, find: function () { return kt; }, findAll: function () { return ea; }, findOne: function () { return Ct; }, findOneChild: function () { return Y0; }, getAttributeValue: function () { return W0; }, getChildren: function () { return At; }, getElementById: function () { return aa; }, getElements: function () { return ra; }, getElementsByClassName: function () { return na; }, getElementsByTagName: function () { return De; }, getElementsByTagType: function () { return ia; }, getFeed: function () { return wu; }, getInnerHTML: function () { return _0; }, getName: function () { return $0; }, getOuterHTML: function () { return wr; }, getParent: function () { return Sr; }, getSiblings: function () { return Et; }, getText: function () { return Tt; }, hasAttrib: function () { return K0; }, hasChildren: function () { return ne; }, innerText: function () { return pu; }, isCDATA: function () { return Ge; }, isComment: function () { return st; }, isDocument: function () { return ou; }, isTag: function () { return P; }, isText: function () { return xe; }, nextElementSibling: function () { return gu; }, prepend: function () { return xu; }, prependChild: function () { return J0; }, prevElementSibling: function () { return mu; }, removeElement: function () { return Se; }, removeSubsets: function () { return sa; }, replaceElement: function () { return Q0; }, testElement: function () { return ua; }, textContent: function () { return ke; }, uniqueSort: function () { return vu; } });
function vt(e) { for (var t = 1; t < e.length; t++)
    e[t][0] += e[t - 1][0] + 1; return e; }
var D0 = new Map(vt([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(vt([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(vt([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(vt([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var lu = /["&'<>$\x80-\uFFFF]/g, fr = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), dr = String.prototype.codePointAt != null ? function (e, t) { return e.codePointAt(t); } : function (e, t) { return (e.charCodeAt(t) & 64512) === 55296 ? (e.charCodeAt(t) - 55296) * 1024 + e.charCodeAt(t + 1) - 56320 + 65536 : e.charCodeAt(t); };
function ct(e) { var t = "", u = 0, r; for (; (r = lu.exec(e)) !== null;) {
    var a = r.index, n = e.charCodeAt(a), o = fr.get(n);
    o !== void 0 ? (t += e.substring(u, a) + o, u = a + 1) : (t += "".concat(e.substring(u, a), "&#x").concat(dr(e, a).toString(16), ";"), u = lu.lastIndex += +((n & 64512) === 55296));
} return t + e.substr(u); }
function fu(e, t) { return function (r) { var a, n = 0, o = ""; for (; a = e.exec(r);)
    n !== a.index && (o += r.substring(n, a.index)), o += t.get(a[0].charCodeAt(0)), n = a.index + 1; return o + r.substring(n); }; }
var hr = fu(/[&<>'"]/g, fr), wt = fu(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), St = fu(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var br;
(function (e) { e[e.XML = 0] = "XML", e[e.HTML = 1] = "HTML"; })(br || (br = {}));
var pr;
(function (e) { e[e.UTF8 = 0] = "UTF8", e[e.ASCII = 1] = "ASCII", e[e.Extensive = 2] = "Extensive", e[e.Attribute = 3] = "Attribute", e[e.Text = 4] = "Text"; })(pr || (pr = {}));
var xr = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (e) { return [e.toLowerCase(), e]; })), yr = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (e) { return [e.toLowerCase(), e]; }));
var R0 = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function U0(e) { return e.replace(/"/g, "&quot;"); }
function H0(e, t) { var u; if (!e)
    return; var r = ((u = t.encodeEntities) !== null && u !== void 0 ? u : t.decodeEntities) === !1 ? U0 : t.xmlMode || t.encodeEntities !== "utf8" ? ct : wt; return Object.keys(e).map(function (a) { var n, o; var l = (n = e[a]) !== null && n !== void 0 ? n : ""; return t.xmlMode === "foreign" && (a = (o = yr.get(a)) !== null && o !== void 0 ? o : a), !t.emptyAttrs && !t.xmlMode && l === "" ? a : "".concat(a, "=\"").concat(r(l), "\""); }).join(" "); }
var vr = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function bu(e, t) {
    if (t === void 0) { t = {}; }
    var u = "length" in e ? e : [e], r = "";
    for (var a = 0; a < u.length; a++)
        r += M0(u[a], t);
    return r;
}
var _e = bu;
function M0(e, t) { switch (e.type) {
    case Yt: return bu(e.children, t);
    case su:
    case tu: return j0(e);
    case uu: return z0(e);
    case iu: return G0(e);
    case ru:
    case au:
    case nu: return F0(e, t);
    case eu: return V0(e, t);
} }
var B0 = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), P0 = new Set(["svg", "math"]);
function F0(e, t) { var u; t.xmlMode === "foreign" && (e.name = (u = xr.get(e.name)) !== null && u !== void 0 ? u : e.name, e.parent && B0.has(e.parent.name) && (t = Le(pe({}, t), { xmlMode: !1 }))), !t.xmlMode && P0.has(e.name) && (t = Le(pe({}, t), { xmlMode: "foreign" })); var r = "<".concat(e.name), a = H0(e.attribs, t); return a && (r += " ".concat(a)), e.children.length === 0 && (t.xmlMode ? t.selfClosingTags !== !1 : t.selfClosingTags && vr.has(e.name)) ? (t.xmlMode || (r += " "), r += "/>") : (r += ">", e.children.length > 0 && (r += bu(e.children, t)), (t.xmlMode || !vr.has(e.name)) && (r += "</".concat(e.name, ">"))), r; }
function j0(e) { return "<".concat(e.data, ">"); }
function V0(e, t) { var u; var r = e.data || ""; return ((u = t.encodeEntities) !== null && u !== void 0 ? u : t.decodeEntities) !== !1 && !(!t.xmlMode && e.parent && R0.has(e.parent.name)) && (r = t.xmlMode || t.encodeEntities !== "utf8" ? ct(r) : St(r)), r; }
function G0(e) { return "<![CDATA[".concat(e.children[0].data, "]]>"); }
function z0(e) { return "<!--".concat(e.data, "-->"); }
function wr(e, t) { return _e(e, t); }
function _0(e, t) { return ne(e) ? e.children.map(function (u) { return wr(u, t); }).join("") : ""; }
function Tt(e) {
    return Array.isArray(e) ? e.map(Tt).join("") : P(e) ? e.name === "br" ? "\n" : Tt(e.children) : Ge(e) ? Tt(e.children) : xe(e) ? e.data : "";
}
function ke(e) { return Array.isArray(e) ? e.map(ke).join("") : ne(e) && !st(e) ? ke(e.children) : xe(e) ? e.data : ""; }
function pu(e) { return Array.isArray(e) ? e.map(pu).join("") : ne(e) && (e.type === B.Tag || Ge(e)) ? pu(e.children) : xe(e) ? e.data : ""; }
function At(e) { return ne(e) ? e.children : []; }
function Sr(e) { return e.parent || null; }
function Et(e) {
    var _a, _b;
    var t = Sr(e);
    if (t != null)
        return At(t);
    var u = [e], r = e.prev, a = e.next;
    for (; r != null;)
        u.unshift(r), _a = r, r = _a.prev;
    for (; a != null;)
        u.push(a), _b = a, a = _b.next;
    return u;
}
function W0(e, t) { var u; return (u = e.attribs) === null || u === void 0 ? void 0 : u[t]; }
function K0(e, t) { return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, t) && e.attribs[t] != null; }
function $0(e) { return e.name; }
function gu(e) {
    var _a;
    var t = e.next;
    for (; t !== null && !P(t);)
        (_a = t, t = _a.next);
    return t;
}
function mu(e) {
    var _a;
    var t = e.prev;
    for (; t !== null && !P(t);)
        (_a = t, t = _a.prev);
    return t;
}
function Se(e) { if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var t = e.parent.children, u = t.lastIndexOf(e);
    u >= 0 && t.splice(u, 1);
} e.next = null, e.prev = null, e.parent = null; }
function Q0(e, t) { var u = t.prev = e.prev; u && (u.next = t); var r = t.next = e.next; r && (r.prev = t); var a = t.parent = e.parent; if (a) {
    var n = a.children;
    n[n.lastIndexOf(e)] = t, e.parent = null;
} }
function X0(e, t) { if (Se(t), t.next = null, t.parent = e, e.children.push(t) > 1) {
    var u = e.children[e.children.length - 2];
    u.next = t, t.prev = u;
}
else
    t.prev = null; }
function Z0(e, t) { Se(t); var u = e.parent, r = e.next; if (t.next = r, t.prev = e, e.next = t, t.parent = u, r) {
    if (r.prev = t, u) {
        var a = u.children;
        a.splice(a.lastIndexOf(r), 0, t);
    }
}
else
    u && u.children.push(t); }
function J0(e, t) { if (Se(t), t.parent = e, t.prev = null, e.children.unshift(t) !== 1) {
    var u = e.children[1];
    u.prev = t, t.next = u;
}
else
    t.next = null; }
function xu(e, t) { Se(t); var u = e.parent; if (u) {
    var r = u.children;
    r.splice(r.indexOf(e), 0, t);
} e.prev && (e.prev.next = t), t.parent = u, t.prev = e.prev, t.next = e, e.prev = t; }
function We(e, t, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return kt(e, Array.isArray(t) ? t : [t], u, r);
}
function kt(e, t, u, r) { var a = [], n = [Array.isArray(t) ? t : [t]], o = [0]; for (;;) {
    if (o[0] >= n[0].length) {
        if (o.length === 1)
            return a;
        n.shift(), o.shift();
        continue;
    }
    var l = n[0][o[0]++];
    if (e(l) && (a.push(l), --r <= 0))
        return a;
    u && ne(l) && l.children.length > 0 && (o.unshift(0), n.unshift(l.children));
} }
function Y0(e, t) { return t.find(e); }
function Ct(e, t, u) {
    if (u === void 0) { u = !0; }
    var r = Array.isArray(t) ? t : [t];
    for (var a = 0; a < r.length; a++) {
        var n = r[a];
        if (P(n) && e(n))
            return n;
        if (u && ne(n) && n.children.length > 0) {
            var o = Ct(e, n.children, !0);
            if (o)
                return o;
        }
    }
    return null;
}
function Tr(e, t) { return (Array.isArray(t) ? t : [t]).some(function (u) { return P(u) && e(u) || ne(u) && Tr(e, u.children); }); }
function ea(e, t) { var u = [], r = [Array.isArray(t) ? t : [t]], a = [0]; for (;;) {
    if (a[0] >= r[0].length) {
        if (r.length === 1)
            return u;
        r.shift(), a.shift();
        continue;
    }
    var n = r[0][a[0]++];
    P(n) && e(n) && u.push(n), ne(n) && n.children.length > 0 && (a.unshift(0), r.unshift(n.children));
} }
var qt = { tag_name: function (e) { return typeof e == "function" ? function (t) { return P(t) && e(t.name); } : e === "*" ? P : function (t) { return P(t) && t.name === e; }; }, tag_type: function (e) { return typeof e == "function" ? function (t) { return e(t.type); } : function (t) { return t.type === e; }; }, tag_contains: function (e) { return typeof e == "function" ? function (t) { return xe(t) && e(t.data); } : function (t) { return xe(t) && t.data === e; }; } };
function yu(e, t) { return typeof t == "function" ? function (u) { return P(u) && t(u.attribs[e]); } : function (u) { return P(u) && u.attribs[e] === t; }; }
function ta(e, t) { return function (u) { return e(u) || t(u); }; }
function Ar(e) { var t = Object.keys(e).map(function (u) { var r = e[u]; return Object.prototype.hasOwnProperty.call(qt, u) ? qt[u](r) : yu(u, r); }); return t.length === 0 ? null : t.reduce(ta); }
function ua(e, t) { var u = Ar(e); return u ? u(t) : !0; }
function ra(e, t, u, r) {
    if (r === void 0) { r = 1 / 0; }
    var a = Ar(e);
    return a ? We(a, t, u, r) : [];
}
function aa(e, t, u) {
    if (u === void 0) { u = !0; }
    return Array.isArray(t) || (t = [t]), Ct(yu("id", e), t, u);
}
function De(e, t, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return We(qt.tag_name(e), t, u, r);
}
function na(e, t, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return We(yu("class", e), t, u, r);
}
function ia(e, t, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return We(qt.tag_type(e), t, u, r);
}
function sa(e) { var t = e.length; for (; --t >= 0;) {
    var u = e[t];
    if (t > 0 && e.lastIndexOf(u, t - 1) >= 0) {
        e.splice(t, 1);
        continue;
    }
    for (var r = u.parent; r; r = r.parent)
        if (e.includes(r)) {
            e.splice(t, 1);
            break;
        }
} return e; }
var de;
(function (e) { e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.PRECEDING = 2] = "PRECEDING", e[e.FOLLOWING = 4] = "FOLLOWING", e[e.CONTAINS = 8] = "CONTAINS", e[e.CONTAINED_BY = 16] = "CONTAINED_BY"; })(de || (de = {}));
function Er(e, t) { var u = [], r = []; if (e === t)
    return 0; var a = ne(e) ? e : e.parent; for (; a;)
    u.unshift(a), a = a.parent; for (a = ne(t) ? t : t.parent; a;)
    r.unshift(a), a = a.parent; var n = Math.min(u.length, r.length), o = 0; for (; o < n && u[o] === r[o];)
    o++; if (o === 0)
    return de.DISCONNECTED; var l = u[o - 1], d = l.children, h = u[o], w = r[o]; return d.indexOf(h) > d.indexOf(w) ? l === t ? de.FOLLOWING | de.CONTAINED_BY : de.FOLLOWING : l === e ? de.PRECEDING | de.CONTAINS : de.PRECEDING; }
function vu(e) { return e = e.filter(function (t, u, r) { return !r.includes(t, u + 1); }), e.sort(function (t, u) { var r = Er(t, u); return r & de.PRECEDING ? -1 : r & de.FOLLOWING ? 1 : 0; }), e; }
function wu(e) { var t = Nt(da, e); return t ? t.name === "feed" ? ca(t) : oa(t) : null; }
function ca(e) { var t; var u = e.children, r = { type: "atom", items: De("entry", u).map(function (o) { var l; var d = o.children, h = { media: kr(d) }; se(h, "id", "id", d), se(h, "title", "title", d); var w = (l = Nt("link", d)) === null || l === void 0 ? void 0 : l.attribs.href; w && (h.link = w); var O = Ce("summary", d) || Ce("content", d); O && (h.description = O); var T = Ce("updated", d); return T && (h.pubDate = new Date(T)), h; }) }; se(r, "id", "id", u), se(r, "title", "title", u); var a = (t = Nt("link", u)) === null || t === void 0 ? void 0 : t.attribs.href; a && (r.link = a), se(r, "description", "subtitle", u); var n = Ce("updated", u); return n && (r.updated = new Date(n)), se(r, "author", "email", u, !0), r; }
function oa(e) { var t, u; var r = (u = (t = Nt("channel", e.children)) === null || t === void 0 ? void 0 : t.children) !== null && u !== void 0 ? u : [], a = { type: e.name.substr(0, 3), id: "", items: De("item", e.children).map(function (o) { var l = o.children, d = { media: kr(l) }; se(d, "id", "guid", l), se(d, "title", "title", l), se(d, "link", "link", l), se(d, "description", "description", l); var h = Ce("pubDate", l) || Ce("dc:date", l); return h && (d.pubDate = new Date(h)), d; }) }; se(a, "title", "title", r), se(a, "link", "link", r), se(a, "description", "description", r); var n = Ce("lastBuildDate", r); return n && (a.updated = new Date(n)), se(a, "author", "managingEditor", r, !0), a; }
var la = ["url", "type", "lang"], fa = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function kr(e) { return De("media:content", e).map(function (t) {
    var e_4, _a, e_5, _b;
    var u = t.attribs, r = { medium: u.medium, isDefault: !!u.isDefault };
    try {
        for (var la_1 = __values(la), la_1_1 = la_1.next(); !la_1_1.done; la_1_1 = la_1.next()) {
            var a = la_1_1.value;
            u[a] && (r[a] = u[a]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (la_1_1 && !la_1_1.done && (_a = la_1.return)) _a.call(la_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var fa_1 = __values(fa), fa_1_1 = fa_1.next(); !fa_1_1.done; fa_1_1 = fa_1.next()) {
            var a = fa_1_1.value;
            u[a] && (r[a] = parseInt(u[a], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (fa_1_1 && !fa_1_1.done && (_b = fa_1.return)) _b.call(fa_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return u.expression && (r.expression = u.expression), r;
}); }
function Nt(e, t) { return De(e, t, !0, 1)[0]; }
function Ce(e, t, u) {
    if (u === void 0) { u = !1; }
    return ke(De(e, t, u, 1)).trim();
}
function se(e, t, u, r, a) {
    if (a === void 0) { a = !1; }
    var n = Ce(u, r, a);
    n && (e[t] = n);
}
function da(e) { return e === "rss" || e === "feed" || e === "rdf:RDF"; }
function Cr(e, t) { var u = new ze(void 0, t); return new et(u, t).end(e), u.root; }
var E;
(function (e) { e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"; })(E || (E = {}));
var Q;
(function (e) { e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"; })(Q || (Q = {}));
var qr = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, ha = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, ba = new Map([[126, Q.Element], [94, Q.Start], [36, Q.End], [42, Q.Any], [33, Q.Not], [124, Q.Hyphen]]), pa = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function Ie(e) { switch (e.type) {
    case E.Adjacent:
    case E.Child:
    case E.Descendant:
    case E.Parent:
    case E.Sibling:
    case E.ColumnCombinator: return !0;
    default: return !1;
} }
var ga = new Set(["contains", "icontains"]);
function ma(e, t, u) { var r = parseInt(t, 16) - 65536; return r !== r || u ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320); }
function ot(e) { return e.replace(ha, ma); }
function Su(e) { return e === 39 || e === 34; }
function Nr(e) { return e === 32 || e === 9 || e === 10 || e === 12 || e === 13; }
function qe(e) { var t = [], u = Lr(t, "".concat(e), 0); if (u < e.length)
    throw new Error("Unmatched selector: ".concat(e.slice(u))); return t; }
function Lr(e, t, u) { var r = []; function a(T) { var A = t.slice(u + T).match(qr); if (!A)
    throw new Error("Expected name, found ".concat(t.slice(u))); var _a = __read(A, 1), D = _a[0]; return u += T + D.length, ot(D); } function n(T) { for (u += T; u < t.length && Nr(t.charCodeAt(u));)
    u++; } function o() { u += 1; var T = u, A = 1; for (; A > 0 && u < t.length; u++)
    t.charCodeAt(u) === 40 && !l(u) ? A++ : t.charCodeAt(u) === 41 && !l(u) && A--; if (A)
    throw new Error("Parenthesis not matched"); return ot(t.slice(T, u - 1)); } function l(T) { var A = 0; for (; t.charCodeAt(--T) === 92;)
    A++; return (A & 1) === 1; } function d() { if (r.length > 0 && Ie(r[r.length - 1]))
    throw new Error("Did not expect successive traversals."); } function h(T) { if (r.length > 0 && r[r.length - 1].type === E.Descendant) {
    r[r.length - 1].type = T;
    return;
} d(), r.push({ type: T }); } function w(T, A) { r.push({ type: E.Attribute, name: T, action: A, value: a(1), namespace: null, ignoreCase: "quirks" }); } function O() { if (r.length && r[r.length - 1].type === E.Descendant && r.pop(), r.length === 0)
    throw new Error("Empty sub-selector"); e.push(r); } if (n(0), t.length === u)
    return u; e: for (; u < t.length;) {
    var T = t.charCodeAt(u);
    switch (T) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (r.length === 0 || r[0].type !== E.Descendant) && (d(), r.push({ type: E.Descendant })), n(1);
            break;
        }
        case 62: {
            h(E.Child), n(1);
            break;
        }
        case 60: {
            h(E.Parent), n(1);
            break;
        }
        case 126: {
            h(E.Sibling), n(1);
            break;
        }
        case 43: {
            h(E.Adjacent), n(1);
            break;
        }
        case 46: {
            w("class", Q.Element);
            break;
        }
        case 35: {
            w("id", Q.Equals);
            break;
        }
        case 91: {
            n(1);
            var A = void 0, D = null;
            t.charCodeAt(u) === 124 ? A = a(1) : t.startsWith("*|", u) ? (D = "*", A = a(2)) : (A = a(0), t.charCodeAt(u) === 124 && t.charCodeAt(u + 1) !== 61 && (D = A, A = a(1))), n(0);
            var I = Q.Exists, ee = ba.get(t.charCodeAt(u));
            if (ee) {
                if (I = ee, t.charCodeAt(u + 1) !== 61)
                    throw new Error("Expected `=`");
                n(2);
            }
            else
                t.charCodeAt(u) === 61 && (I = Q.Equals, n(1));
            var ae = "", m = null;
            if (I !== "exists") {
                if (Su(t.charCodeAt(u))) {
                    var N = t.charCodeAt(u), U = u + 1;
                    for (; U < t.length && (t.charCodeAt(U) !== N || l(U));)
                        U += 1;
                    if (t.charCodeAt(U) !== N)
                        throw new Error("Attribute value didn't end");
                    ae = ot(t.slice(u + 1, U)), u = U + 1;
                }
                else {
                    var N = u;
                    for (; u < t.length && (!Nr(t.charCodeAt(u)) && t.charCodeAt(u) !== 93 || l(u));)
                        u += 1;
                    ae = ot(t.slice(N, u));
                }
                n(0);
                var X = t.charCodeAt(u) | 32;
                X === 115 ? (m = !1, n(1)) : X === 105 && (m = !0, n(1));
            }
            if (t.charCodeAt(u) !== 93)
                throw new Error("Attribute selector didn't terminate");
            u += 1;
            var z = { type: E.Attribute, name: A, action: I, value: ae, namespace: D, ignoreCase: m };
            r.push(z);
            break;
        }
        case 58: {
            if (t.charCodeAt(u + 1) === 58) {
                r.push({ type: E.PseudoElement, name: a(2).toLowerCase(), data: t.charCodeAt(u) === 40 ? o() : null });
                continue;
            }
            var A = a(1).toLowerCase(), D = null;
            if (t.charCodeAt(u) === 40)
                if (pa.has(A)) {
                    if (Su(t.charCodeAt(u + 1)))
                        throw new Error("Pseudo-selector ".concat(A, " cannot be quoted"));
                    if (D = [], u = Lr(D, t, u + 1), t.charCodeAt(u) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(A, " (").concat(t, ")"));
                    u += 1;
                }
                else {
                    if (D = o(), ga.has(A)) {
                        var I = D.charCodeAt(0);
                        I === D.charCodeAt(D.length - 1) && Su(I) && (D = D.slice(1, -1));
                    }
                    D = ot(D);
                }
            r.push({ type: E.Pseudo, name: A, data: D });
            break;
        }
        case 44: {
            O(), r = [], n(1);
            break;
        }
        default: {
            if (t.startsWith("/*", u)) {
                var I = t.indexOf("*/", u + 2);
                if (I < 0)
                    throw new Error("Comment was not terminated");
                u = I + 2, r.length === 0 && n(0);
                break;
            }
            var A = null, D = void 0;
            if (T === 42)
                u += 1, D = "*";
            else if (T === 124) {
                if (D = "", t.charCodeAt(u + 1) === 124) {
                    h(E.ColumnCombinator), n(2);
                    break;
                }
            }
            else if (qr.test(t.slice(u)))
                D = a(0);
            else
                break e;
            t.charCodeAt(u) === 124 && t.charCodeAt(u + 1) !== 124 && (A = D, t.charCodeAt(u + 1) === 42 ? (D = "*", u += 2) : D = a(1)), r.push(D === "*" ? { type: E.Universal, namespace: A } : { type: E.Tag, name: D, namespace: A });
        }
    }
} return O(), u; }
var Iu = Oe(Ne(), 1);
var Te = Oe(Ne(), 1);
var Dr = new Map([[E.Universal, 50], [E.Tag, 30], [E.Attribute, 1], [E.Pseudo, 0]]);
function lt(e) { return !Dr.has(e.type); }
var xa = new Map([[Q.Exists, 10], [Q.Equals, 8], [Q.Not, 7], [Q.Start, 6], [Q.End, 6], [Q.Any, 5]]);
function Tu(e) { var t = e.map(Ir); for (var u = 1; u < e.length; u++) {
    var r = t[u];
    if (!(r < 0))
        for (var a = u - 1; a >= 0 && r < t[a]; a--) {
            var n = e[a + 1];
            e[a + 1] = e[a], e[a] = n, t[a + 1] = t[a], t[a] = r;
        }
} }
function Ir(e) { var t, u; var r = (t = Dr.get(e.type)) !== null && t !== void 0 ? t : -1; return e.type === E.Attribute ? (r = (u = xa.get(e.action)) !== null && u !== void 0 ? u : 4, e.action === Q.Equals && e.name === "id" && (r = 9), e.ignoreCase && (r >>= 1)) : e.type === E.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? r = 0 : Array.isArray(e.data) ? (r = Math.min.apply(Math, __spreadArray([], __read(e.data.map(function (a) { return Math.min.apply(Math, __spreadArray([], __read(a.map(Ir)), false)); })), false)), r < 0 && (r = 0)) : r = 2 : r = 3), r; }
var ft = Oe(Ne(), 1), ya = /[-[\]{}()*+?.,\\^$|#\s]/g;
function Rr(e) { return e.replace(ya, "\\$&"); }
var va = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function Re(e, t) { return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!t.quirksMode : !t.xmlMode && va.has(e.name); }
var Ur = { equals: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value; return Re(t, u) ? (n = n.toLowerCase(), function (o) { var l = r.getAttributeValue(o, a); return l != null && l.length === n.length && l.toLowerCase() === n && e(o); }) : function (o) { return r.getAttributeValue(o, a) === n && e(o); }; }, hyphen: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value, o = n.length; return Re(t, u) ? (n = n.toLowerCase(), function (d) { var h = r.getAttributeValue(d, a); return h != null && (h.length === o || h.charAt(o) === "-") && h.substr(0, o).toLowerCase() === n && e(d); }) : function (d) { var h = r.getAttributeValue(d, a); return h != null && (h.length === o || h.charAt(o) === "-") && h.substr(0, o) === n && e(d); }; }, element: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value; if (/\s/.test(n))
        return ft.default.falseFunc; var o = new RegExp("(?:^|\\s)".concat(Rr(n), "(?:$|\\s)"), Re(t, u) ? "i" : ""); return function (d) { var h = r.getAttributeValue(d, a); return h != null && h.length >= n.length && o.test(h) && e(d); }; }, exists: function (e, _a, _b) {
        var t = _a.name;
        var u = _b.adapter;
        return function (r) { return u.hasAttrib(r, t) && e(r); };
    }, start: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value, o = n.length; return o === 0 ? ft.default.falseFunc : Re(t, u) ? (n = n.toLowerCase(), function (l) { var d = r.getAttributeValue(l, a); return d != null && d.length >= o && d.substr(0, o).toLowerCase() === n && e(l); }) : function (l) { var d; return !!(!((d = r.getAttributeValue(l, a)) === null || d === void 0) && d.startsWith(n)) && e(l); }; }, end: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value, o = -n.length; return o === 0 ? ft.default.falseFunc : Re(t, u) ? (n = n.toLowerCase(), function (l) { var d; return ((d = r.getAttributeValue(l, a)) === null || d === void 0 ? void 0 : d.substr(o).toLowerCase()) === n && e(l); }) : function (l) { var d; return !!(!((d = r.getAttributeValue(l, a)) === null || d === void 0) && d.endsWith(n)) && e(l); }; }, any: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value; if (n === "")
        return ft.default.falseFunc; if (Re(t, u)) {
        var o_1 = new RegExp(Rr(n), "i");
        return function (d) { var h = r.getAttributeValue(d, a); return h != null && h.length >= n.length && o_1.test(h) && e(d); };
    } return function (o) { var l; return !!(!((l = r.getAttributeValue(o, a)) === null || l === void 0) && l.includes(n)) && e(o); }; }, not: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value; return n === "" ? function (o) { return !!r.getAttributeValue(o, a) && e(o); } : Re(t, u) ? (n = n.toLowerCase(), function (o) { var l = r.getAttributeValue(o, a); return (l == null || l.length !== n.length || l.toLowerCase() !== n) && e(o); }) : function (o) { return r.getAttributeValue(o, a) !== n && e(o); }; } };
var wa = new Set([9, 10, 12, 13, 32]), Hr = 48, Sa = 57;
function Mr(e) { if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0]; if (e === "odd")
    return [2, 1]; var t = 0, u = 0, r = n(), a = o(); if (t < e.length && e.charAt(t) === "n" && (t++, u = r * (a != null ? a : 1), l(), t < e.length ? (r = n(), l(), a = o()) : r = a = 0), a === null || t < e.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(e, "')")); return [u, r * a]; function n() { return e.charAt(t) === "-" ? (t++, -1) : (e.charAt(t) === "+" && t++, 1); } function o() { var d = t, h = 0; for (; t < e.length && e.charCodeAt(t) >= Hr && e.charCodeAt(t) <= Sa;)
    h = h * 10 + (e.charCodeAt(t) - Hr), t++; return t === d ? null : h; } function l() { for (; t < e.length && wa.has(e.charCodeAt(t));)
    t++; } }
var Au = Oe(Ne(), 1);
function Br(e) { var t = e[0], u = e[1] - 1; if (u < 0 && t <= 0)
    return Au.default.falseFunc; if (t === -1)
    return function (n) { return n <= u; }; if (t === 0)
    return function (n) { return n === u; }; if (t === 1)
    return u < 0 ? Au.default.trueFunc : function (n) { return n >= u; }; var r = Math.abs(t), a = (u % r + r) % r; return t > 1 ? function (n) { return n >= u && n % r === a; } : function (n) { return n <= u && n % r === a; }; }
function Ke(e) { return Br(Mr(e)); }
var ce = Oe(Ne(), 1);
function Lt(e, t) { return function (u) { var r = t.getParent(u); return r != null && t.isTag(r) && e(u); }; }
var $e = { contains: function (e, t, _a) {
        var u = _a.adapter;
        return function (a) { return e(a) && u.getText(a).includes(t); };
    }, icontains: function (e, t, _a) {
        var u = _a.adapter;
        var r = t.toLowerCase();
        return function (n) { return e(n) && u.getText(n).toLowerCase().includes(r); };
    }, "nth-child": function (e, t, _a) {
        var u = _a.adapter, r = _a.equals;
        var a = Ke(t);
        return a === ce.default.falseFunc ? ce.default.falseFunc : a === ce.default.trueFunc ? Lt(e, u) : function (o) { var l = u.getSiblings(o), d = 0; for (var h = 0; h < l.length && !r(o, l[h]); h++)
            u.isTag(l[h]) && d++; return a(d) && e(o); };
    }, "nth-last-child": function (e, t, _a) {
        var u = _a.adapter, r = _a.equals;
        var a = Ke(t);
        return a === ce.default.falseFunc ? ce.default.falseFunc : a === ce.default.trueFunc ? Lt(e, u) : function (o) { var l = u.getSiblings(o), d = 0; for (var h = l.length - 1; h >= 0 && !r(o, l[h]); h--)
            u.isTag(l[h]) && d++; return a(d) && e(o); };
    }, "nth-of-type": function (e, t, _a) {
        var u = _a.adapter, r = _a.equals;
        var a = Ke(t);
        return a === ce.default.falseFunc ? ce.default.falseFunc : a === ce.default.trueFunc ? Lt(e, u) : function (o) { var l = u.getSiblings(o), d = 0; for (var h = 0; h < l.length; h++) {
            var w = l[h];
            if (r(o, w))
                break;
            u.isTag(w) && u.getName(w) === u.getName(o) && d++;
        } return a(d) && e(o); };
    }, "nth-last-of-type": function (e, t, _a) {
        var u = _a.adapter, r = _a.equals;
        var a = Ke(t);
        return a === ce.default.falseFunc ? ce.default.falseFunc : a === ce.default.trueFunc ? Lt(e, u) : function (o) { var l = u.getSiblings(o), d = 0; for (var h = l.length - 1; h >= 0; h--) {
            var w = l[h];
            if (r(o, w))
                break;
            u.isTag(w) && u.getName(w) === u.getName(o) && d++;
        } return a(d) && e(o); };
    }, root: function (e, t, _a) {
        var u = _a.adapter;
        return function (r) { var a = u.getParent(r); return (a == null || !u.isTag(a)) && e(r); };
    }, scope: function (e, t, u, r) { var a = u.equals; return !r || r.length === 0 ? $e.root(e, t, u) : r.length === 1 ? function (n) { return a(r[0], n) && e(n); } : function (n) { return r.includes(n) && e(n); }; }, hover: Eu("isHovered"), visited: Eu("isVisited"), active: Eu("isActive") };
function Eu(e) { return function (u, r, _a) {
    var a = _a.adapter;
    var n = a[e];
    return typeof n != "function" ? ce.default.falseFunc : function (l) { return n(l) && u(l); };
}; }
var dt = { empty: function (e, _a) {
        var t = _a.adapter;
        return !t.getChildren(e).some(function (u) { return t.isTag(u) || t.getText(u) !== ""; });
    }, "first-child": function (e, _a) {
        var t = _a.adapter, u = _a.equals;
        if (t.prevElementSibling)
            return t.prevElementSibling(e) == null;
        var r = t.getSiblings(e).find(function (a) { return t.isTag(a); });
        return r != null && u(e, r);
    }, "last-child": function (e, _a) {
        var t = _a.adapter, u = _a.equals;
        var r = t.getSiblings(e);
        for (var a = r.length - 1; a >= 0; a--) {
            if (u(e, r[a]))
                return !0;
            if (t.isTag(r[a]))
                break;
        }
        return !1;
    }, "first-of-type": function (e, _a) {
        var t = _a.adapter, u = _a.equals;
        var r = t.getSiblings(e), a = t.getName(e);
        for (var n = 0; n < r.length; n++) {
            var o = r[n];
            if (u(e, o))
                return !0;
            if (t.isTag(o) && t.getName(o) === a)
                break;
        }
        return !1;
    }, "last-of-type": function (e, _a) {
        var t = _a.adapter, u = _a.equals;
        var r = t.getSiblings(e), a = t.getName(e);
        for (var n = r.length - 1; n >= 0; n--) {
            var o = r[n];
            if (u(e, o))
                return !0;
            if (t.isTag(o) && t.getName(o) === a)
                break;
        }
        return !1;
    }, "only-of-type": function (e, _a) {
        var t = _a.adapter, u = _a.equals;
        var r = t.getName(e);
        return t.getSiblings(e).every(function (a) { return u(e, a) || !t.isTag(a) || t.getName(a) !== r; });
    }, "only-child": function (e, _a) {
        var t = _a.adapter, u = _a.equals;
        return t.getSiblings(e).every(function (r) { return u(e, r) || !t.isTag(r); });
    } };
function ku(e, t, u, r) { if (u === null) {
    if (e.length > r)
        throw new Error("Pseudo-class :".concat(t, " requires an argument"));
}
else if (e.length === r)
    throw new Error("Pseudo-class :".concat(t, " doesn't have any arguments")); }
var Ot = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var he = Oe(Ne(), 1);
var Nu = {};
function Lu(e, t) { return e === he.default.falseFunc ? he.default.falseFunc : function (u) { return t.isTag(u) && e(u); }; }
function Ou(e, t) { var u = t.getSiblings(e); if (u.length <= 1)
    return []; var r = u.indexOf(e); return r < 0 || r === u.length - 1 ? [] : u.slice(r + 1).filter(t.isTag); }
function qu(e) { return { xmlMode: !!e.xmlMode, lowerCaseAttributeNames: !!e.lowerCaseAttributeNames, lowerCaseTags: !!e.lowerCaseTags, quirksMode: !!e.quirksMode, cacheResults: !!e.cacheResults, pseudos: e.pseudos, adapter: e.adapter, equals: e.equals }; }
var Cu = function (e, t, u, r, a) { var n = a(t, qu(u), r); return n === he.default.trueFunc ? e : n === he.default.falseFunc ? he.default.falseFunc : function (o) { return n(o) && e(o); }; }, Dt = { is: Cu, matches: Cu, where: Cu, not: function (e, t, u, r, a) { var n = a(t, qu(u), r); return n === he.default.falseFunc ? e : n === he.default.trueFunc ? he.default.falseFunc : function (o) { return !n(o) && e(o); }; }, has: function (e, t, u, r, a) { var n = u.adapter, o = qu(u); o.relativeSelector = !0; var l = t.some(function (w) { return w.some(lt); }) ? [Nu] : void 0, d = a(t, o, l); if (d === he.default.falseFunc)
        return he.default.falseFunc; var h = Lu(d, n); if (l && d !== he.default.trueFunc) {
        var _a = d.shouldTestNextSiblings, w_1 = _a === void 0 ? !1 : _a;
        return function (O) { if (!e(O))
            return !1; l[0] = O; var T = n.getChildren(O), A = w_1 ? __spreadArray(__spreadArray([], __read(T), false), __read(Ou(O, n)), false) : T; return n.existsOne(h, A); };
    } return function (w) { return e(w) && n.existsOne(h, n.getChildren(w)); }; } };
function Pr(e, t, u, r, a) { var n; var o = t.name, l = t.data; if (Array.isArray(l)) {
    if (!(o in Dt))
        throw new Error("Unknown pseudo-class :".concat(o, "(").concat(l, ")"));
    return Dt[o](e, l, u, r, a);
} var d = (n = u.pseudos) === null || n === void 0 ? void 0 : n[o], h = typeof d == "string" ? d : Ot[o]; if (typeof h == "string") {
    if (l != null)
        throw new Error("Pseudo ".concat(o, " doesn't have any arguments"));
    var w = qe(h);
    return Dt.is(e, w, u, r, a);
} if (typeof d == "function")
    return ku(d, o, l, 1), function (w) { return d(w, l) && e(w); }; if (o in $e)
    return $e[o](e, l, u, r); if (o in dt) {
    var w_2 = dt[o];
    return ku(w_2, o, l, 2), function (O) { return w_2(O, u, l) && e(O); };
} throw new Error("Unknown pseudo-class :".concat(o)); }
function Du(e, t) { var u = t.getParent(e); return u && t.isTag(u) ? u : null; }
function Fr(e, t, u, r, a) { var n = u.adapter, o = u.equals; switch (t.type) {
    case E.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case E.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case E.Attribute: {
        if (t.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!u.xmlMode || u.lowerCaseAttributeNames) && (t.name = t.name.toLowerCase()), Ur[t.action](e, t, u);
    }
    case E.Pseudo: return Pr(e, t, u, r, a);
    case E.Tag: {
        if (t.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var l_1 = t.name;
        return (!u.xmlMode || u.lowerCaseTags) && (l_1 = l_1.toLowerCase()), function (h) { return n.getName(h) === l_1 && e(h); };
    }
    case E.Descendant: {
        if (u.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (h) { var w = h; for (; w = Du(w, n);)
                if (e(w))
                    return !0; return !1; };
        var l_2 = new WeakSet;
        return function (h) { var w = h; for (; w = Du(w, n);)
            if (!l_2.has(w)) {
                if (n.isTag(w) && e(w))
                    return !0;
                l_2.add(w);
            } return !1; };
    }
    case "_flexibleDescendant": return function (d) { var h = d; do
        if (e(h))
            return !0;
    while (h = Du(h, n)); return !1; };
    case E.Parent: return function (d) { return n.getChildren(d).some(function (h) { return n.isTag(h) && e(h); }); };
    case E.Child: return function (d) { var h = n.getParent(d); return h != null && n.isTag(h) && e(h); };
    case E.Sibling: return function (d) { var h = n.getSiblings(d); for (var w = 0; w < h.length; w++) {
        var O = h[w];
        if (o(d, O))
            break;
        if (n.isTag(O) && e(O))
            return !0;
    } return !1; };
    case E.Adjacent: return n.prevElementSibling ? function (d) { var h = n.prevElementSibling(d); return h != null && e(h); } : function (d) { var h = n.getSiblings(d), w; for (var O = 0; O < h.length; O++) {
        var T = h[O];
        if (o(d, T))
            break;
        n.isTag(T) && (w = T);
    } return !!w && e(w); };
    case E.Universal: {
        if (t.namespace != null && t.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return e;
    }
} }
function jr(e, t, u) { var r = It(e, t, u); return Lu(r, t.adapter); }
function It(e, t, u) { var r = typeof e == "string" ? qe(e) : e; return Rt(r, t, u); }
function Vr(e) { return e.type === E.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(function (t) { return t.some(Vr); })); }
var Ta = { type: E.Descendant }, Aa = { type: "_flexibleDescendant" }, Ea = { type: E.Pseudo, name: "scope", data: null };
function ka(e, _a, u) {
    var e_6, _b;
    var t = _a.adapter;
    var r = !!(u != null && u.every(function (a) { var n = t.isTag(a) && t.getParent(a); return a === Nu || n && t.isTag(n); }));
    try {
        for (var e_7 = __values(e), e_7_1 = e_7.next(); !e_7_1.done; e_7_1 = e_7.next()) {
            var a = e_7_1.value;
            if (!(a.length > 0 && lt(a[0]) && a[0].type !== E.Descendant))
                if (r && !a.some(Vr))
                    a.unshift(Ta);
                else
                    continue;
            a.unshift(Ea);
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
function Rt(e, t, u) { var r; e.forEach(Tu), u = (r = t.context) !== null && r !== void 0 ? r : u; var a = Array.isArray(u), n = u && (Array.isArray(u) ? u : [u]); if (t.relativeSelector !== !1)
    ka(e, t, n);
else if (e.some(function (d) { return d.length > 0 && lt(d[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var o = !1, l = e.map(function (d) { if (d.length >= 2) {
    var _a = __read(d, 2), h = _a[0], w = _a[1];
    h.type !== E.Pseudo || h.name !== "scope" || (a && w.type === E.Descendant ? d[1] = Aa : (w.type === E.Adjacent || w.type === E.Sibling) && (o = !0));
} return Ca(d, t, n); }).reduce(qa, Te.default.falseFunc); return l.shouldTestNextSiblings = o, l; }
function Ca(e, t, u) { var r; return e.reduce(function (a, n) { return a === Te.default.falseFunc ? Te.default.falseFunc : Fr(a, n, t, u, Rt); }, (r = t.rootFunc) !== null && r !== void 0 ? r : Te.default.trueFunc); }
function qa(e, t) { return t === Te.default.falseFunc || e === Te.default.trueFunc ? e : e === Te.default.falseFunc || t === Te.default.trueFunc ? t : function (r) { return e(r) || t(r); }; }
var Gr = function (e, t) { return e === t; }, Na = { adapter: ye, equals: Gr };
function zr(e) { var t, u, r, a; var n = e != null ? e : Na; return (t = n.adapter) !== null && t !== void 0 || (n.adapter = ye), (u = n.equals) !== null && u !== void 0 || (n.equals = (a = (r = n.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && a !== void 0 ? a : Gr), n; }
function Ru(e) { return function (u, r, a) { var n = zr(r); return e(u, n, a); }; }
var Yi = Ru(jr), es = Ru(It), Ut = Ru(Rt);
function _r(e) { return function (u, r, a) { var n = zr(a); typeof u != "function" && (u = It(u, n, r)); var o = Ht(r, n.adapter, u.shouldTestNextSiblings); return e(u, o, n); }; }
function Ht(e, t, u) {
    if (u === void 0) { u = !1; }
    return u && (e = La(e, t)), Array.isArray(e) ? t.removeSubsets(e) : t.getChildren(e);
}
function La(e, t) { var u = Array.isArray(e) ? e.slice(0) : [e], r = u.length; for (var a = 0; a < r; a++) {
    var n = Ou(u[a], t);
    u.push.apply(u, __spreadArray([], __read(n), false));
} return u; }
var ts = _r(function (e, t, u) { return e === Iu.default.falseFunc || !t || t.length === 0 ? [] : u.adapter.findAll(e, t); }), us = _r(function (e, t, u) { return e === Iu.default.falseFunc || !t || t.length === 0 ? null : u.adapter.findOne(e, t); });
var Bt = Oe(Ne(), 1);
var Oa = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function Qe(e) { return e.type !== "pseudo" ? !1 : Oa.has(e.name) ? !0 : e.name === "not" && Array.isArray(e.data) ? e.data.some(function (t) { return t.some(Qe); }) : !1; }
function Wr(e, t, u) { var r = t != null ? parseInt(t, 10) : NaN; switch (e) {
    case "first": return 1;
    case "nth":
    case "eq": return isFinite(r) ? r >= 0 ? r + 1 : 1 / 0 : 0;
    case "lt": return isFinite(r) ? r >= 0 ? Math.min(r, u) : 1 / 0 : 0;
    case "gt": return isFinite(r) ? 1 / 0 : 0;
    case "odd": return 2 * u;
    case "even": return 2 * u - 1;
    case "last":
    case "not": return 1 / 0;
} }
function Kr(e) { for (; e.parent;)
    e = e.parent; return e; }
function Mt(e) {
    var e_8, _a;
    var t = [], u = [];
    try {
        for (var e_9 = __values(e), e_9_1 = e_9.next(); !e_9_1.done; e_9_1 = e_9.next()) {
            var r = e_9_1.value;
            r.some(Qe) ? t.push(r) : u.push(r);
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (e_9_1 && !e_9_1.done && (_a = e_9.return)) _a.call(e_9);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return [u, t];
}
var Da = { type: E.Universal, namespace: null }, Ia = { type: E.Pseudo, name: "scope", data: null };
function Mu(e, t, u) {
    if (u === void 0) { u = {}; }
    return Ra([e], t, u);
}
function Ra(e, t, u) {
    if (u === void 0) { u = {}; }
    if (typeof t == "function")
        return e.some(t);
    var _a = __read(Mt(qe(t)), 2), r = _a[0], a = _a[1];
    return r.length > 0 && e.some(Ut(r, u)) || a.some(function (n) { return $r(n, e, u).length > 0; });
}
function Ua(e, t, u, r) { var a = typeof u == "string" ? parseInt(u, 10) : NaN; switch (e) {
    case "first":
    case "lt": return t;
    case "last": return t.length > 0 ? [t[t.length - 1]] : t;
    case "nth":
    case "eq": return isFinite(a) && Math.abs(a) < t.length ? [a < 0 ? t[t.length + a] : t[a]] : [];
    case "gt": return isFinite(a) ? t.slice(a + 1) : [];
    case "even": return t.filter(function (n, o) { return o % 2 === 0; });
    case "odd": return t.filter(function (n, o) { return o % 2 === 1; });
    case "not": {
        var n_1 = new Set(Ha(u, t, r));
        return t.filter(function (o) { return !n_1.has(o); });
    }
} }
function Ha(e, t, u) { if (t.length === 0)
    return []; var _a = __read(Mt(e), 2), r = _a[0], a = _a[1], n; if (r.length) {
    var o = Hu(t, r, u);
    if (a.length === 0)
        return o;
    o.length && (n = new Set(o));
} for (var o = 0; o < a.length && (n == null ? void 0 : n.size) !== t.length; o++) {
    var l = a[o];
    if ((n ? t.filter(function (w) { return P(w) && !n.has(w); }) : t).length === 0)
        break;
    var h = $r(l, t, u);
    if (h.length)
        if (n)
            h.forEach(function (w) { return n.add(w); });
        else {
            if (o === a.length - 1)
                return h;
            n = new Set(h);
        }
} return typeof n != "undefined" ? n.size === t.length ? t : t.filter(function (o) { return n.has(o); }) : []; }
function $r(e, t, u) { var r; if (e.some(Ie)) {
    var a = (r = u.root) !== null && r !== void 0 ? r : Kr(t[0]), n = Le(pe({}, u), { context: t, relativeSelector: !1 });
    return e.push(Ia), Pt(a, e, n, !0, t.length);
} return Pt(t, e, u, !1, t.length); }
function Bu(e, t, u, r) {
    if (u === void 0) { u = {}; }
    if (r === void 0) { r = 1 / 0; }
    if (typeof e == "function")
        return Qr(t, e);
    var _a = __read(Mt(qe(e)), 2), a = _a[0], n = _a[1], o = n.map(function (l) { return Pt(t, l, u, !0, r); });
    return a.length && o.push(Uu(t, a, u, r)), o.length === 0 ? [] : o.length === 1 ? o[0] : vu(o.reduce(function (l, d) { return __spreadArray(__spreadArray([], __read(l), false), __read(d), false); }));
}
function Pt(e, t, u, r, a) { var n = t.findIndex(Qe), o = t.slice(0, n), l = t[n], d = t.length - 1 === n ? a : 1 / 0, h = Wr(l.name, l.data, d); if (h === 0)
    return []; var O = (o.length === 0 && !Array.isArray(e) ? At(e).filter(P) : o.length === 0 ? (Array.isArray(e) ? e : [e]).filter(P) : r || o.some(Ie) ? Uu(e, [o], u, h) : Hu(e, [o], u)).slice(0, h), T = Ua(l.name, O, l.data, u); if (T.length === 0 || t.length === n + 1)
    return T; var A = t.slice(n + 1), D = A.some(Ie); if (D) {
    if (Ie(A[0])) {
        var I = A[0].type;
        (I === E.Sibling || I === E.Adjacent) && (T = Ht(T, ye, !0)), A.unshift(Da);
    }
    u = Le(pe({}, u), { relativeSelector: !1, rootFunc: function (I) { return T.includes(I); } });
}
else
    u.rootFunc && u.rootFunc !== Bt.trueFunc && (u = Le(pe({}, u), { rootFunc: Bt.trueFunc })); return A.some(Qe) ? Pt(T, A, u, !1, a) : D ? Uu(T, [A], u, a) : Hu(T, [A], u); }
function Uu(e, t, u, r) { var a = Ut(t, u, e); return Qr(e, a, r); }
function Qr(e, t, u) {
    if (u === void 0) { u = 1 / 0; }
    var r = Ht(e, ye, t.shouldTestNextSiblings);
    return kt(function (a) { return P(a) && t(a); }, r, !0, u);
}
function Hu(e, t, u) { var r = (Array.isArray(e) ? e : [e]).filter(P); if (r.length === 0)
    return r; var a = Ut(t, u); return a === Bt.trueFunc ? r : r.filter(a); }
var Ma = function (e, t, u) { return Bu(e, t, u); }, Yr = function (e, t, u) { return Bu(e, t, u, 1)[0] || null; }, e0 = /[\s ]+/g, Xr = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), Ba = { containsOwn: function (e, t) { return Fu(e).toLowerCase().includes(String(t).toLowerCase()); }, matches: function (e, t) { return Zr(t).test(Pu(e)); }, matchesOwn: function (e, t) { return Zr(t).test(Fu(e)); }, containsData: function (e, t) { return ke(e).includes(t); }, "contains-ci": function (e, t) { return Pu(e).toLowerCase().includes(String(t).toLowerCase()); } };
function Zr(e) { try {
    return new RegExp(e);
}
catch (t) {
    return /$^/;
} }
var Ft = { pseudos: Ba, xmlMode: !1, lowerCaseTags: !0 };
function jt(e) { return String(e).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function Pu(e) { if (!e)
    return ""; if (e.type === "text")
    return e.data; var t = "", u = function (r) {
    var e_10, _a;
    try {
        for (var _b = __values(r.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var a = _c.value;
            a.type === "text" ? t += a.data : (a.type === "tag" || a.type === "script" || a.type === "style") && (a.name === "br" ? t += " " : a.type === "tag" && (Xr.has(a.name) && (t += " "), u(a), Xr.has(a.name) && (t += " ")));
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_10) throw e_10.error; }
    }
}; return u(e), t.replace(e0, " ").trim(); }
function Fu(e) {
    var e_11, _a;
    var t = "";
    try {
        for (var _b = __values(e.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var u = _c.value;
            u.type === "text" && (t += u.data);
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return t.replace(e0, " ").trim();
}
function t0(e, t) { if (!t)
    return ""; try {
    return new URL(t, e || void 0).href;
}
catch (u) {
    return e ? "" : t;
} }
var Ue = (function () {
    function e(t, u) {
        this.node = t, this.doc = u;
    }
    Object.defineProperty(e.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    e.prototype.select = function (t) { return ve.of(Ma(jt(t), this.node, Ft), this.doc); };
    e.prototype.selectFirst = function (t) { var u = Yr(jt(t), this.node, Ft); return u ? new e(u, this.doc) : null; };
    e.prototype.is = function (t) { return Mu(this.node, jt(t), Ft); };
    e.prototype.text = function () { return Pu(this.node); };
    e.prototype.ownText = function () { return Fu(this.node); };
    e.prototype.wholeText = function () { return ke(this.node); };
    e.prototype.data = function () { return (this.node.children || []).filter(function (t) { return t.type === "text"; }).map(function (t) { return t.data; }).join(""); };
    e.prototype.html = function () { return (this.node.children || []).map(function (t) { return _e(t, { decodeEntities: !1 }); }).join("").trim(); };
    e.prototype.outerHtml = function () { return _e(this.node, { decodeEntities: !1 }); };
    e.prototype.toString = function () { return this.outerHtml(); };
    e.prototype.tagName = function () { return this.node.name || ""; };
    e.prototype.nodeName = function () { return this.node.name || "#" + this.node.type; };
    e.prototype.id = function () { return this.attr("id"); };
    e.prototype.className = function () { return this.attr("class"); };
    e.prototype.classNames = function () { return this.className().split(/\s+/).filter(Boolean); };
    e.prototype.hasClass = function (t) { return this.classNames().includes(t); };
    e.prototype.attr = function (t, u) { if (u !== void 0)
        return this.node.attribs && (this.node.attribs[t] = String(u)), this; if (!this.node.attribs)
        return ""; if (t.startsWith("abs:"))
        return t0(this.baseUri, this.node.attribs[t.slice(4)] || ""); var r = this.node.attribs[t]; return r == null ? "" : r; };
    e.prototype.absUrl = function (t) { return this.attr("abs:" + t); };
    e.prototype.hasAttr = function (t) { return !!(this.node.attribs && (t.startsWith("abs:") ? t.slice(4) : t) in this.node.attribs); };
    e.prototype.removeAttr = function (t) { return this.node.attribs && delete this.node.attribs[t], this; };
    e.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    e.prototype.dataset = function () {
        var e_12, _a;
        var t = {};
        try {
            for (var _b = __values(Object.entries(this.node.attribs || {})), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), u = _d[0], r = _d[1];
                u.startsWith("data-") && (t[u.slice(5)] = r);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return t;
    };
    e.prototype.val = function () { return this.attr("value"); };
    e.prototype.parent = function () { var t = this.node.parent; return t && t.type !== "root" ? new e(t, this.doc) : null; };
    e.prototype.parents = function () { var t = [], u = this.node.parent; for (; u && u.type !== "root";)
        t.push(u), u = u.parent; return ve.of(t, this.doc); };
    e.prototype.closest = function (t) { var u = this.node; for (; u && u.type !== "root";) {
        if (u.type === "tag" && Mu(u, jt(t), Ft))
            return new e(u, this.doc);
        u = u.parent;
    } return null; };
    e.prototype.children = function () { return ve.of((this.node.children || []).filter(P), this.doc); };
    e.prototype.child = function (t) { var u = (this.node.children || []).filter(P)[t]; return u ? new e(u, this.doc) : null; };
    e.prototype.childrenSize = function () { return (this.node.children || []).filter(P).length; };
    e.prototype.nextElementSibling = function () { var t = gu(this.node); return t ? new e(t, this.doc) : null; };
    e.prototype.previousElementSibling = function () { var t = mu(this.node); return t ? new e(t, this.doc) : null; };
    e.prototype.siblingElements = function () {
        var _this = this;
        return ve.of(Et(this.node).filter(function (t) { return t !== _this.node && P(t); }), this.doc);
    };
    e.prototype.elementSiblingIndex = function () { return Et(this.node).filter(P).indexOf(this.node); };
    e.prototype.getElementsByTag = function (t) { return this.select(t); };
    e.prototype.getElementsByClass = function (t) { return this.select("." + t); };
    e.prototype.getElementById = function (t) { return this.selectFirst("#" + t); };
    e.prototype.remove = function () { return Se(this.node), this; };
    e.prototype.empty = function () { return this.node.children = [], this; };
    e.prototype.textNodes = function () { return (this.node.children || []).filter(function (t) { return t.type === "text"; }).map(function (t) { return ({ text: function () { return t.data; }, toString: function () { return t.data; } }); }); };
    e.prototype.title = function () { var t = this.selectFirst("title"); return t ? t.text() : ""; };
    e.prototype.body = function () { return this.selectFirst("body") || this; };
    e.prototype.head = function () { return this.selectFirst("head") || this; };
    e.prototype.location = function () { return this.baseUri; };
    return e;
}()), Vu = Object.create(Array.prototype), ve = { of: ju, prototype: Vu };
function ju(e, t) {
    var e_13, _a;
    var u = [];
    try {
        for (var _b = __values(e || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var r = _c.value;
            u.push(r instanceof Ue ? r : new Ue(r, t));
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return Object.setPrototypeOf(u, Vu), u;
}
var Jr = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (e) { return this[e] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (e) { return ve.of(this[e] ? [this[e]] : [], null); }, text: function () { return this.map(function (e) { return e.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (e) { return e.text(); }).filter(Boolean); }, html: function () {
        return this.map(function (e) { return e.html(); }).join("\n");
    }, outerHtml: function () {
        return this.map(function (e) { return e.outerHtml(); }).join("\n");
    }, toString: function () { return this.outerHtml(); }, attr: function (e, t) {
        var e_14, _a;
        if (t !== void 0)
            return this.forEach(function (u) { return u.attr(e, t); }), this;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var u = _c.value;
                if (u.hasAttr(e))
                    return u.attr(e);
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
    }, eachAttr: function (e) { return this.filter(function (t) { return t.hasAttr(e); }).map(function (t) { return t.attr(e); }); }, hasAttr: function (e) { return this.some(function (t) { return t.hasAttr(e); }); }, hasClass: function (e) { return this.some(function (t) { return t.hasClass(e); }); }, val: function () { return this.length ? this[0].val() : ""; }, select: function (e) {
        var e_15, _a, e_16, _b;
        var t = ju([]), u = new Set;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var r = _d.value;
                try {
                    for (var _f = (e_16 = void 0, __values(r.select(e))), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var a = _g.value;
                        u.has(a.node) || (u.add(a.node), t.push(a));
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
        return t;
    }, selectFirst: function (e) {
        var e_17, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                var u = t.selectFirst(e);
                if (u)
                    return u;
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
    }, is: function (e) { return this.some(function (t) { return t.is(e); }); }, not: function (e) { return ve.of(this.filter(function (t) { return !t.is(e); }), null); }, parents: function () {
        var e_18, _a;
        var e = ju([]);
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                e.push.apply(e, __spreadArray([], __read(t.parents()), false));
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
    }, next: function () { return ve.of(this.map(function (e) { return e.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return ve.of(this.map(function (e) { return e.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (e) { return e.remove(); }), this; }, empty: function () { return this.forEach(function (e) { return e.empty(); }), this; }, removeAttr: function (e) { return this.forEach(function (t) { return t.removeAttr(e); }), this; } };
try {
    for (var _b = __values(Object.keys(Jr)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var e = _c.value;
        Object.defineProperty(Vu, e, { value: Jr[e], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
function Vt(e, t) { var u = Cr(String(e == null ? "" : e), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), r = new Ue(u, null); r.doc = r, r.__base = t || ""; var a = Yr("base[href]", u); return a && a.attribs.href && (r.__base = t0(r.__base, a.attribs.href)), r; }
function u0(e, t) { var u = new Set((t || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), r = Vt(e), a = function (n) {
    var e_19, _a, e_20, _b;
    try {
        for (var _c = __values((n.children || []).slice()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var o = _d.value;
            if (o.type === "script" || o.type === "style" || o.type === "comment") {
                Se(o);
                continue;
            }
            if (o.type === "tag" && (a(o), !u.has(o.name))) {
                var l = (o.children || []).slice();
                try {
                    for (var l_3 = (e_20 = void 0, __values(l)), l_3_1 = l_3.next(); !l_3_1.done; l_3_1 = l_3.next()) {
                        var d = l_3_1.value;
                        xu(o, d);
                    }
                }
                catch (e_20_1) { e_20 = { error: e_20_1 }; }
                finally {
                    try {
                        if (l_3_1 && !l_3_1.done && (_b = l_3.return)) _b.call(l_3);
                    }
                    finally { if (e_20) throw e_20.error; }
                }
                Se(o);
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
}; return a(r.node), _e(r.node.children, { decodeEntities: !1 }); }
var Gt = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function Pa(e) { if (typeof Buffer != "undefined")
    return Buffer.from(e).toString("base64"); var t = ""; for (var u = 0; u < e.length; u++)
    t += String.fromCharCode(e[u]); return btoa(t); }
function r0(e) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(e) : Uint8Array.from(unescape(encodeURIComponent(e)), function (t) { return t.charCodeAt(0); }); }
var Gu = (function () {
    function Gu(t, u) {
        this.status = t.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText || String(this.status), this.url = t.url || u.url, this.headers = t.headers || {}, this._raw = t, this.request = { url: u.url, headers: u.headers || {} };
    }
    Gu.prototype.header = function (t) { var u = Object.keys(this.headers).find(function (r) { return r.toLowerCase() === String(t).toLowerCase(); }); return u ? this.headers[u] : ""; };
    Gu.prototype.text = function (t) { if (t && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(t).toLowerCase()).decode(this._raw.bytes);
        }
        catch (u) { } return this._raw.text == null ? "" : String(this._raw.text); };
    Gu.prototype.string = function (t) { return this.text(t); };
    Gu.prototype.html = function (t) { return Vt(this.text(t), this.url); };
    Gu.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (t) {
        return null;
    } };
    Gu.prototype.base64 = function () { return Pa(this._raw.bytes || r0(this.text())); };
    Gu.prototype.blob = function () { var t = this; return { size: (this._raw.bytes || r0(this.text())).length, type: this.header("content-type"), base64: function () { return t.base64(); } }; };
    return Gu;
}());
function Fa(e) {
    var e_21, _a;
    var t = {};
    if (!e)
        return t;
    if (typeof e.forEach == "function" && !Array.isArray(e) && typeof e.entries == "function")
        return e.forEach(function (u, r) { t[r] = u; }), t;
    try {
        for (var _b = __values(Object.keys(e)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var u = _c.value;
            t[u] = String(e[u]);
        }
    }
    catch (e_21_1) { e_21 = { error: e_21_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_21) throw e_21.error; }
    }
    return t;
}
function n0(e, t) { var u = function (o) { return ({ getItem: function (l) { var d = e.storageGet(o + l); return d == null ? null : d; }, setItem: function (l, d) { return e.storageSet(o + l, d == null ? null : String(d)); }, removeItem: function (l) { return e.storageSet(o + l, null); }, clear: function () { return e.storageClear && e.storageClear(o); } }); }, r = "__cookie__", a = {}; a.Response = { success: function (o, l) { return ({ code: 0, data: o === void 0 ? null : o, data2: l === void 0 ? null : l }); }, error: function (o) { return ({ code: 1, data: o == null ? "" : String(o) }); } }, a.fetch = function (l, d) {
    return __awaiter(this, void 0, void 0, function () { var h, I, w, O, T, I, A, D, I_1; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                d = d || {};
                h = String(l);
                if (d.queries) {
                    I = Object.entries(d.queries).map(function (_a) {
                        var _b = __read(_a, 2), ee = _b[0], ae = _b[1];
                        return encodeURIComponent(ee) + "=" + encodeURIComponent(ae);
                    }).join("&");
                    I && (h += (h.includes("?") ? "&" : "?") + I);
                }
                w = Object.assign({ "User-Agent": Gt }, Fa(d.headers)), O = e.storageGet(r);
                O && !Object.keys(w).some(function (I) { return I.toLowerCase() === "cookie"; }) && (w.Cookie = O);
                T = d.body;
                if (T != null && typeof T == "object") {
                    I = Object.keys(w).find(function (ee) { return ee.toLowerCase() === "content-type"; });
                    I && /json/i.test(w[I]) ? T = JSON.stringify(T) : (T = Object.entries(T).map(function (_a) {
                        var _b = __read(_a, 2), ee = _b[0], ae = _b[1];
                        return encodeURIComponent(ee) + "=" + encodeURIComponent(ae);
                    }).join("&"), I || (w["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                A = { url: h, method: (d.method || (T != null ? "POST" : "GET")).toUpperCase(), headers: w, body: T, timeout: d.timeout };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, e.request(A)];
            case 2:
                D = _a.sent();
                return [3, 4];
            case 3:
                I_1 = _a.sent();
                D = { status: 0, url: h, headers: {}, text: "", error: String(I_1 && I_1.message || I_1) };
                return [3, 4];
            case 4: return [2, new Gu(D, A)];
        }
    }); });
}, a.Http = { get: function (o) { return a0(a, "GET", o); }, post: function (o) { return a0(a, "POST", o); } }, a.Html = { parse: function (o, l) { return Vt(o, l || ""); }, clean: function (o, l) { return u0(o, l); } }, a.localStorage = u("ls:"), a.cacheStorage = u("cs:"), a.localConfig = { getItem: function (o) { return e.config(o); } }, a.localCookie = { setCookie: function (o) { e.storageSet(r, String(o).split(";")[0]); }, getCookie: function () { return e.storageGet(r) || ""; } }, a.sleep = function (o) { return new Promise(function (l) { return setTimeout(l, Math.min(Number(o) || 0, 1e4)); }); }; var n = function () {
    var o = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        o[_i] = arguments[_i];
    }
    try {
        e.log && e.log(o.map(function (l) { return typeof l == "string" ? l : JSON.stringify(l); }).join(" "));
    }
    catch (l) { }
}; return a.Log = { log: n }, a.console = { log: n, error: n, warn: n, info: n }, a.log = n, a.UserAgent = { system: function () { return Gt; }, chrome: function () { return Gt; }, android: function () { return Gt; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, a.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (e.name || "host") + ")"); } }, a.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, a.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, a.Elements = ve, a.Element = Ue, a.__meta = t, a; }
function a0(e, t, u) { var r = { method: t, url: u, headers: {}, body: void 0, queries: void 0 }, a = { headers: function (n) { return Object.assign(r.headers, n || {}), a; }, header: function (n, o) { return r.headers[n] = o, a; }, params: function (n) { return r.queries = n, a; }, queries: function (n) { return r.queries = n, a; }, body: function (n) { return r.body = n, a; }, html: function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).html(n)];
            }
        }); });
    }, string: function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(n)];
            }
        }); });
    }, text: function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(n)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).json()];
            }
        }); });
    } }; return a; }
function He(e, t) { if (!t)
    return ""; if (t = String(t).trim(), /^data:|^blob:/.test(t))
    return t; if (t.startsWith("//"))
    return "https:" + t; if (typeof URL == "undefined")
    return __abs(e, t); try {
    return new URL(t, e).href;
}
catch (u) {
    return t;
} }
var _ = function (e) { return e == null ? "" : String(e); }, ja = function (e) { return e.filter(function (t, u) { return t && e.indexOf(t) === u; }); }, zt = (function () {
    function class_1(t) {
        var u = t.meta, r = t.scripts, a = t.host;
        this.meta = u, this.host = a, this.env = t.env || n0(a, u), this.scripts = r, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return _(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.has = function (t) { return !!this.scripts[t]; };
    class_1.prototype.run = function (t) {
        var u = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            u[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var r, a, n, o;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = this.scripts[t];
                        if (!r)
                            throw new Error("script " + t + " missing");
                        a = function (l) { var d = _this.host.config(l); return d == null ? (_this.meta.configDefaults || {})[l] : d; };
                        return [4, r(this.env, a)];
                    case 1:
                        n = _a.sent();
                        if (typeof n != "function")
                            throw new Error(t + ": execute() not defined");
                        return [4, n.apply(void 0, __spreadArray([], __read(u.map(_)), false))];
                    case 2:
                        o = _a.sent();
                        if (!o)
                            throw new Error(t + ": empty result");
                        if (o.code !== 0)
                            throw new Error(t + ": " + _(o.data || "error"));
                        return [2, o];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (t) { return _(t).replace(/\.js$/, ""); };
    class_1.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () { var t, _a, u_1, u_2; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (this.cache.tabs)
                        return [2, this.cache.tabs];
                    t = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    _a = this.has("home");
                    if (!_a) return [3, 3];
                    return [4, this.run("home")];
                case 2:
                    _a = (t = (_b.sent()).data || []);
                    _b.label = 3;
                case 3:
                    _a;
                    return [3, 5];
                case 4:
                    u_1 = _b.sent();
                    this.host.log && this.host.log("home: " + u_1.message);
                    return [3, 5];
                case 5:
                    if (!(!t.length && this.has("genre"))) return [3, 9];
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4, this.run("genre")];
                case 7:
                    t = ((_b.sent()).data || []).slice(0, 2);
                    return [3, 9];
                case 8:
                    u_2 = _b.sent();
                    return [3, 9];
                case 9: return [2, (this.cache.tabs = t.filter(function (u) { return u && u.script; }), this.cache.tabs)];
            }
        }); });
    };
    class_1.prototype.list = function (t, u, r) {
        return __awaiter(this, void 0, void 0, function () {
            var a, n, o, l, d;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        a = t + "|" + u;
                        r = Math.max(1, r | 0);
                        n = r === 1 ? "" : this.tokens[a + "|" + r];
                        if (r > 1 && n == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(t, u, n)];
                    case 1:
                        o = _a.sent(), l = _(o.data2);
                        l && (this.tokens[a + "|" + (r + 1)] = l);
                        d = (o.data || []).filter(Boolean).map(function (h) { return ({ name: _(h.name).trim(), link: He(h.host || _this.base + "/", h.link), cover: He(h.host || _this.base + "/", h.cover), description: _(h.description), tag: _(h.tag) }); }).filter(function (h) { return h.name && h.link; });
                        return [2, { items: d, hasNext: !!l && d.length > 0 }];
                }
            });
        });
    };
    class_1.prototype.popular = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    u = _a.sent();
                    return [2, u[0] ? this.list(this.scriptFile(u[0].script), _(u[0].input), t) : this.search("", t)];
            }
        }); });
    };
    class_1.prototype.latest = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    u = _a.sent(), r = u[1] || u[0];
                    return [2, r ? this.list(this.scriptFile(r.script), _(r.input), t) : this.search("", t)];
            }
        }); });
    };
    class_1.prototype.search = function (t, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, this.has("search") ? this.list("search", t, u) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.run("detail", t)];
                case 1:
                    u = (_a.sent()).data || {}, r = [].concat(u.genres || [], u.tags || []).map(function (a) { return typeof a == "string" ? a : a && a.title; }).filter(Boolean);
                    return [2, { name: _(u.name).trim(), cover: He(u.host || this.base + "/", u.cover), author: _(u.author).trim(), description: i0(_(u.description)), detail: i0(_(u.detail)), ongoing: u.ongoing !== !1 && u.ongoing !== "false", genres: ja(r.map(function (a) { return String(a).trim(); })), url: t, format: _(u.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var u, r, r_1, r_1_1, a, _a, _b, e_22_1, _c;
            var e_22, _d;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        u = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", t)];
                    case 1:
                        r = (_f.sent()).data || [t];
                        _f.label = 2;
                    case 2:
                        _f.trys.push([2, 7, 8, 9]);
                        r_1 = __values(r), r_1_1 = r_1.next();
                        _f.label = 3;
                    case 3:
                        if (!!r_1_1.done) return [3, 6];
                        a = r_1_1.value;
                        _b = (_a = u).concat;
                        return [4, this.run("toc", _(a))];
                    case 4:
                        u = _b.apply(_a, [(_f.sent()).data || []]);
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
                        return [4, this.run("toc", t)];
                    case 11:
                        _c = (u = (_f.sent()).data || []);
                        _f.label = 12;
                    case 12:
                        _c;
                        _f.label = 13;
                    case 13: return [2, u.filter(function (r) { return r && r.url && r.type !== "section"; }).map(function (r, a) { return ({ name: _(r.name).trim() || "#" + (a + 1), url: He(r.host || _this.base + "/", r.url), pay: !!(r.pay || r.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var u, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.has("chap") && this.meta.type === "comic")) return [3, 2];
                        return [4, this.run("chap", t)];
                    case 1:
                        _a = u = (_c.sent()).data;
                        return [3, 6];
                    case 2:
                        if (!this.has("page")) return [3, 4];
                        return [4, this.run("page", t)];
                    case 3:
                        _b = u = (_c.sent()).data;
                        return [3, 5];
                    case 4:
                        _b = u = [t];
                        _c.label = 5;
                    case 5:
                        _a = _b;
                        _c.label = 6;
                    case 6: return [2, (_a, typeof u == "string" && (u = u.split(/[\n,]+/)), (u || []).map(function (r) { return He(_this.base + "/", typeof r == "string" ? r : r && (r.link || r.url || r.data)); }).filter(Boolean))];
                }
            });
        });
    };
    class_1.prototype.content = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.run("chap", t)];
                case 1:
                    u = _a.sent();
                    return [2, { html: _(u.data), title: _(u.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var u, a, r, u_3, u_3_1, a, n, o, o_2, o_2_1, l, n_2, e_23_1;
            var e_23, _a, e_24, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        u = [{ title: "Default", data: t }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", t)];
                    case 1:
                        a = (_c.sent()).data;
                        Array.isArray(a) && a.length && (u = a.map(function (n) { return typeof n == "string" ? { title: "Server", data: n } : { title: _(n.title || n.name || "Server"), data: _(n.data || n.url || n.link) }; }));
                        _c.label = 2;
                    case 2:
                        r = [];
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 10, 11, 12]);
                        u_3 = __values(u), u_3_1 = u_3.next();
                        _c.label = 4;
                    case 4:
                        if (!!u_3_1.done) return [3, 9];
                        a = u_3_1.value;
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 7, , 8]);
                        return [4, this.run("track", a.data)];
                    case 6:
                        n = (_c.sent()).data || {}, o = Array.isArray(n) ? n : [n];
                        try {
                            for (o_2 = (e_24 = void 0, __values(o)), o_2_1 = o_2.next(); !o_2_1.done; o_2_1 = o_2.next()) {
                                l = o_2_1.value;
                                !l || !l.data || l.type !== "webview" && r.push({ url: He(l.host || this.base + "/", l.data), quality: a.title + (l.quality ? " " + l.quality : ""), headers: l.headers || { Referer: this.base + "/" }, subtitles: (l.subtitles || (l.subtitle ? [{ data: l.subtitle, label: "Sub" }] : [])).map(function (d) { return ({ file: He(_this.base + "/", d.data || d.file), label: _(d.label || d.language || "Sub") }); }), mimeType: _(l.mimeType) });
                            }
                        }
                        catch (e_24_1) { e_24 = { error: e_24_1 }; }
                        finally {
                            try {
                                if (o_2_1 && !o_2_1.done && (_b = o_2.return)) _b.call(o_2);
                            }
                            finally { if (e_24) throw e_24.error; }
                        }
                        return [3, 8];
                    case 7:
                        n_2 = _c.sent();
                        this.host.log && this.host.log("track " + a.title + ": " + n_2.message);
                        return [3, 8];
                    case 8:
                        u_3_1 = u_3.next();
                        return [3, 4];
                    case 9: return [3, 12];
                    case 10:
                        e_23_1 = _c.sent();
                        e_23 = { error: e_23_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (u_3_1 && !u_3_1.done && (_a = u_3.return)) _a.call(u_3);
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
function i0(e) {
    return String(e).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
var Ae = { id: "lnkuro", name: "LN Kuro", source: "https://lnkuro.top", type: "novel", locale: "vi_VN", nsfw: !1, version: 16, config: {}, configDefaults: {}, itemType: 2, lnId: "kiritokmn.lnkuro", lnIcon: "", lnVersion: "1.0.16" }, s0 = { home: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (u, r, a, n, o, l, d, h, w, O, T, A, D, I, ee, ae) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function L(i, s) { var c = i.select(s); return c.size() > 0 ? c.get(0) : null; } function be(i) { return i ? i.indexOf("http") === 0 ? i : m + (i.charAt(0) === "/" ? i : "/" + i) : m; } function H(i) { return N = i || "", null; } function ie(i) { return N || i || "Không tải được dữ liệu"; } function R(i) { if (!i)
                                        return !1; var s = L(i, "title"), c = s ? s.text().toLowerCase() : ""; if (c.indexOf("attention required") !== -1)
                                        return !0; var f = ""; try {
                                        f = (i.text() || "").toLowerCase();
                                    }
                                    catch (g) {
                                        f = "";
                                    } return f.indexOf("sorry, you have been blocked") !== -1 || f.indexOf("you are unable to access") !== -1 || f.indexOf("cloudflare ray id") !== -1; } function te(i) {
                                        return __awaiter(this, void 0, void 0, function () { var s, _a, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0: return [4, u(i, j)];
                                                case 1:
                                                    s = _c.sent();
                                                    _a = s;
                                                    if (!_a) return [3, 4];
                                                    _b = !s.ok && !(s.status >= 400 && s.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, u(i, j)];
                                                case 2:
                                                    _b = (s = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    _a = (_b, s);
                                                    _c.label = 4;
                                                case 4: return [2, _a];
                                            }
                                        }); });
                                    } function W(i) {
                                        return __awaiter(this, void 0, void 0, function () { var s, c, f, g, p; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    N = "";
                                                    s = "";
                                                    return [4, te(i)];
                                                case 1:
                                                    c = _a.sent();
                                                    if (c && c.ok) {
                                                        f = c.html();
                                                        if (f && !R(f))
                                                            return [2, f];
                                                        f && R(f) && (s = "Site chặn truy cập bởi Cloudflare: " + i);
                                                    }
                                                    c && (c.status === 403 || c.status === 429) && (s = "Site chặn truy cập (HTTP " + c.status + "): " + i);
                                                    g = I.newBrowser();
                                                    try {
                                                        p = g.launch(i, X);
                                                        if (p && !R(p))
                                                            return [2, p];
                                                        p && R(p) && (s = "Site chặn truy cập bởi Cloudflare: " + i);
                                                    }
                                                    catch (b) {
                                                        s || (s = "Không tải được trang: " + i);
                                                    }
                                                    finally {
                                                        try {
                                                            g.close();
                                                        }
                                                        catch (b) { }
                                                    }
                                                    return [2, H(s || "Không tải được trang: " + i)];
                                            }
                                        }); });
                                    } function ue(i) { var s = L(i, "img[data-src], img[data-lazy-src], img[src]"); if (s) {
                                        var c = s.attr("data-src") || s.attr("data-lazy-src") || s.attr("src") || "";
                                        if (c && c.indexOf("data:") !== 0)
                                            return c.charAt(0) === 47 && (c = m + c), c;
                                    } return ""; } function V() {
                                        return __awaiter(this, void 0, void 0, function () { var i, s; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (k)
                                                        return [2, k];
                                                    return [4, W(m + "/truyen-han-quoc/")];
                                                case 1:
                                                    i = _a.sent();
                                                    if (!i)
                                                        return [2, ""];
                                                    s = L(i, "input[name=kr_nonce]");
                                                    return [2, (k = s ? s.attr("value") : "", k)];
                                            }
                                        }); });
                                    } function ge(i, s) {
                                        return __awaiter(this, void 0, void 0, function () { var c, f, g, p, b; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    N = "";
                                                    return [4, V()];
                                                case 1:
                                                    c = _a.sent();
                                                    if (!c)
                                                        return [2, null];
                                                    f = java.net.URLEncoder.encode(i, "UTF-8"), g = s || 1, p = "action=kr_search_truyen&q=" + f + "&kr_nonce=" + c + "&page=" + g;
                                                    return [4, u(m + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": U["User-Agent"], Referer: m + "/truyen-han-quoc/" }, body: p })];
                                                case 2:
                                                    b = _a.sent();
                                                    if (!(!b || !b.ok)) return [3, 5];
                                                    k = "";
                                                    return [4, V()];
                                                case 3:
                                                    if (c = _a.sent(), !c)
                                                        return [2, null];
                                                    p = "action=kr_search_truyen&q=" + f + "&kr_nonce=" + c + "&page=" + g;
                                                    return [4, u(m + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": U["User-Agent"], Referer: m + "/truyen-han-quoc/" }, body: p })];
                                                case 4:
                                                    if (b = _a.sent(), !b || !b.ok)
                                                        return [2, (H("Không tải được tìm kiếm: " + m + "/wp-admin/admin-ajax.php"), null)];
                                                    _a.label = 5;
                                                case 5:
                                                    try {
                                                        return [2, b.json()];
                                                    }
                                                    catch (v) {
                                                        return [2, (H("Dữ liệu tìm kiếm không hợp lệ"), null)];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function me(i) { for (var s = [], c = {}, f = i.select("article.kr-card"), g = 0; g < f.size(); g++) {
                                        var p = f.get(g), b = L(p, ".kr-card__title a[href]");
                                        if (b) {
                                            var v = b.attr("href") || "";
                                            if (!(!v || v.indexOf("/the-loai/") !== -1)) {
                                                var x = b.text().trim();
                                                if (!(!x || c[v])) {
                                                    c[v] = !0;
                                                    var S = ue(p);
                                                    s.push({ name: x, link: v, host: z, cover: S });
                                                }
                                            }
                                        }
                                    } return s; } function G() {
                                        return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_a) {
                                            i = [{ title: "Mới cập nhật", input: "newupdate", script: "homecontent.js" }, { title: "Truyện Convert", input: "convert", script: "homecontent.js" }, { title: "Mới nhất", input: "newest", script: "homecontent.js" }];
                                            return [2, n.success(i)];
                                        }); });
                                    } var m, z, X, N, U, j, k; return __generator(this, function (_a) {
                                        m = "https://lnkuro.top", z = "https://lnkuro.top", X = 8e3, N = "", U = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: m + "/" }, j = { headers: U };
                                        k = "";
                                        return [2, typeof G == "function" ? G : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, homecontent: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (u, r, a, n, o, l, d, h, w, O, T, A, D, I, ee, ae) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function L(i, s) { var c = i.select(s); return c.size() > 0 ? c.get(0) : null; } function be(i) { return i ? i.indexOf("http") === 0 ? i : m + (i.charAt(0) === "/" ? i : "/" + i) : m; } function H(i) { return N = i || "", null; } function ie(i) { return N || i || "Không tải được dữ liệu"; } function R(i) { if (!i)
                                        return !1; var s = L(i, "title"), c = s ? s.text().toLowerCase() : ""; if (c.indexOf("attention required") !== -1)
                                        return !0; var f = ""; try {
                                        f = (i.text() || "").toLowerCase();
                                    }
                                    catch (g) {
                                        f = "";
                                    } return f.indexOf("sorry, you have been blocked") !== -1 || f.indexOf("you are unable to access") !== -1 || f.indexOf("cloudflare ray id") !== -1; } function te(i) {
                                        return __awaiter(this, void 0, void 0, function () { var s, _a, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0: return [4, u(i, j)];
                                                case 1:
                                                    s = _c.sent();
                                                    _a = s;
                                                    if (!_a) return [3, 4];
                                                    _b = !s.ok && !(s.status >= 400 && s.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, u(i, j)];
                                                case 2:
                                                    _b = (s = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    _a = (_b, s);
                                                    _c.label = 4;
                                                case 4: return [2, _a];
                                            }
                                        }); });
                                    } function W(i) {
                                        return __awaiter(this, void 0, void 0, function () { var s, c, f, g, p; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    N = "";
                                                    s = "";
                                                    return [4, te(i)];
                                                case 1:
                                                    c = _a.sent();
                                                    if (c && c.ok) {
                                                        f = c.html();
                                                        if (f && !R(f))
                                                            return [2, f];
                                                        f && R(f) && (s = "Site chặn truy cập bởi Cloudflare: " + i);
                                                    }
                                                    c && (c.status === 403 || c.status === 429) && (s = "Site chặn truy cập (HTTP " + c.status + "): " + i);
                                                    g = I.newBrowser();
                                                    try {
                                                        p = g.launch(i, X);
                                                        if (p && !R(p))
                                                            return [2, p];
                                                        p && R(p) && (s = "Site chặn truy cập bởi Cloudflare: " + i);
                                                    }
                                                    catch (b) {
                                                        s || (s = "Không tải được trang: " + i);
                                                    }
                                                    finally {
                                                        try {
                                                            g.close();
                                                        }
                                                        catch (b) { }
                                                    }
                                                    return [2, H(s || "Không tải được trang: " + i)];
                                            }
                                        }); });
                                    } function ue(i) { var s = L(i, "img[data-src], img[data-lazy-src], img[src]"); if (s) {
                                        var c = s.attr("data-src") || s.attr("data-lazy-src") || s.attr("src") || "";
                                        if (c && c.indexOf("data:") !== 0)
                                            return c.charAt(0) === 47 && (c = m + c), c;
                                    } return ""; } function V() {
                                        return __awaiter(this, void 0, void 0, function () { var i, s; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (k)
                                                        return [2, k];
                                                    return [4, W(m + "/truyen-han-quoc/")];
                                                case 1:
                                                    i = _a.sent();
                                                    if (!i)
                                                        return [2, ""];
                                                    s = L(i, "input[name=kr_nonce]");
                                                    return [2, (k = s ? s.attr("value") : "", k)];
                                            }
                                        }); });
                                    } function ge(i, s) {
                                        return __awaiter(this, void 0, void 0, function () { var c, f, g, p, b; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    N = "";
                                                    return [4, V()];
                                                case 1:
                                                    c = _a.sent();
                                                    if (!c)
                                                        return [2, null];
                                                    f = java.net.URLEncoder.encode(i, "UTF-8"), g = s || 1, p = "action=kr_search_truyen&q=" + f + "&kr_nonce=" + c + "&page=" + g;
                                                    return [4, u(m + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": U["User-Agent"], Referer: m + "/truyen-han-quoc/" }, body: p })];
                                                case 2:
                                                    b = _a.sent();
                                                    if (!(!b || !b.ok)) return [3, 5];
                                                    k = "";
                                                    return [4, V()];
                                                case 3:
                                                    if (c = _a.sent(), !c)
                                                        return [2, null];
                                                    p = "action=kr_search_truyen&q=" + f + "&kr_nonce=" + c + "&page=" + g;
                                                    return [4, u(m + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": U["User-Agent"], Referer: m + "/truyen-han-quoc/" }, body: p })];
                                                case 4:
                                                    if (b = _a.sent(), !b || !b.ok)
                                                        return [2, (H("Không tải được tìm kiếm: " + m + "/wp-admin/admin-ajax.php"), null)];
                                                    _a.label = 5;
                                                case 5:
                                                    try {
                                                        return [2, b.json()];
                                                    }
                                                    catch (v) {
                                                        return [2, (H("Dữ liệu tìm kiếm không hợp lệ"), null)];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function me(i) { for (var s = [], c = {}, f = i.select("article.kr-card"), g = 0; g < f.size(); g++) {
                                        var p = f.get(g), b = L(p, ".kr-card__title a[href]");
                                        if (b) {
                                            var v = b.attr("href") || "";
                                            if (!(!v || v.indexOf("/the-loai/") !== -1)) {
                                                var x = b.text().trim();
                                                if (!(!x || c[v])) {
                                                    c[v] = !0;
                                                    var S = ue(p);
                                                    s.push({ name: x, link: v, host: z, cover: S });
                                                }
                                            }
                                        }
                                    } return s; } function G(i, s) {
                                        return __awaiter(this, void 0, void 0, function () { var c, f, g, p, b, v; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    c = parseInt(s) || 1, f = "";
                                                    i === "newupdate" ? f = m + "/truyen-han-quoc/" + (c > 1 ? "?krp=" + c : "") : i === "convert" ? f = m + "/truyen-convert/" + (c > 1 ? "?krp=" + c : "") : i === "newest" ? f = m + "/truyen-moi-nhat/" + (c > 1 ? "?krp=" + c : "") : f = m + "/truyen-han-quoc/" + (c > 1 ? "?krp=" + c : "");
                                                    return [4, W(f)];
                                                case 1:
                                                    g = _a.sent();
                                                    if (!g)
                                                        return [2, n.error(ie("Không tải được danh sách truyện: " + f))];
                                                    p = me(g);
                                                    if (p.length === 0)
                                                        return [2, n.success([])];
                                                    b = !1, v = g.select("a[href*='krp=" + (c + 1) + "']");
                                                    return [2, (v.size() > 0 && (b = !0), b ? n.success(p, c + 1) : n.success(p))];
                                            }
                                        }); });
                                    } var m, z, X, N, U, j, k; return __generator(this, function (_a) {
                                        m = "https://lnkuro.top", z = "https://lnkuro.top", X = 8e3, N = "", U = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: m + "/" }, j = { headers: U };
                                        k = "";
                                        return [2, typeof G == "function" ? G : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, genre: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (u, r, a, n, o, l, d, h, w, O, T, A, D, I, ee, ae) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function L(i, s) { var c = i.select(s); return c.size() > 0 ? c.get(0) : null; } function be(i) { return i ? i.indexOf("http") === 0 ? i : m + (i.charAt(0) === "/" ? i : "/" + i) : m; } function H(i) { return N = i || "", null; } function ie(i) { return N || i || "Không tải được dữ liệu"; } function R(i) { if (!i)
                                        return !1; var s = L(i, "title"), c = s ? s.text().toLowerCase() : ""; if (c.indexOf("attention required") !== -1)
                                        return !0; var f = ""; try {
                                        f = (i.text() || "").toLowerCase();
                                    }
                                    catch (g) {
                                        f = "";
                                    } return f.indexOf("sorry, you have been blocked") !== -1 || f.indexOf("you are unable to access") !== -1 || f.indexOf("cloudflare ray id") !== -1; } function te(i) {
                                        return __awaiter(this, void 0, void 0, function () { var s, _a, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0: return [4, u(i, j)];
                                                case 1:
                                                    s = _c.sent();
                                                    _a = s;
                                                    if (!_a) return [3, 4];
                                                    _b = !s.ok && !(s.status >= 400 && s.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, u(i, j)];
                                                case 2:
                                                    _b = (s = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    _a = (_b, s);
                                                    _c.label = 4;
                                                case 4: return [2, _a];
                                            }
                                        }); });
                                    } function W(i) {
                                        return __awaiter(this, void 0, void 0, function () { var s, c, f, g, p; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    N = "";
                                                    s = "";
                                                    return [4, te(i)];
                                                case 1:
                                                    c = _a.sent();
                                                    if (c && c.ok) {
                                                        f = c.html();
                                                        if (f && !R(f))
                                                            return [2, f];
                                                        f && R(f) && (s = "Site chặn truy cập bởi Cloudflare: " + i);
                                                    }
                                                    c && (c.status === 403 || c.status === 429) && (s = "Site chặn truy cập (HTTP " + c.status + "): " + i);
                                                    g = I.newBrowser();
                                                    try {
                                                        p = g.launch(i, X);
                                                        if (p && !R(p))
                                                            return [2, p];
                                                        p && R(p) && (s = "Site chặn truy cập bởi Cloudflare: " + i);
                                                    }
                                                    catch (b) {
                                                        s || (s = "Không tải được trang: " + i);
                                                    }
                                                    finally {
                                                        try {
                                                            g.close();
                                                        }
                                                        catch (b) { }
                                                    }
                                                    return [2, H(s || "Không tải được trang: " + i)];
                                            }
                                        }); });
                                    } function ue(i) { var s = L(i, "img[data-src], img[data-lazy-src], img[src]"); if (s) {
                                        var c = s.attr("data-src") || s.attr("data-lazy-src") || s.attr("src") || "";
                                        if (c && c.indexOf("data:") !== 0)
                                            return c.charAt(0) === 47 && (c = m + c), c;
                                    } return ""; } function V() {
                                        return __awaiter(this, void 0, void 0, function () { var i, s; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (k)
                                                        return [2, k];
                                                    return [4, W(m + "/truyen-han-quoc/")];
                                                case 1:
                                                    i = _a.sent();
                                                    if (!i)
                                                        return [2, ""];
                                                    s = L(i, "input[name=kr_nonce]");
                                                    return [2, (k = s ? s.attr("value") : "", k)];
                                            }
                                        }); });
                                    } function ge(i, s) {
                                        return __awaiter(this, void 0, void 0, function () { var c, f, g, p, b; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    N = "";
                                                    return [4, V()];
                                                case 1:
                                                    c = _a.sent();
                                                    if (!c)
                                                        return [2, null];
                                                    f = java.net.URLEncoder.encode(i, "UTF-8"), g = s || 1, p = "action=kr_search_truyen&q=" + f + "&kr_nonce=" + c + "&page=" + g;
                                                    return [4, u(m + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": U["User-Agent"], Referer: m + "/truyen-han-quoc/" }, body: p })];
                                                case 2:
                                                    b = _a.sent();
                                                    if (!(!b || !b.ok)) return [3, 5];
                                                    k = "";
                                                    return [4, V()];
                                                case 3:
                                                    if (c = _a.sent(), !c)
                                                        return [2, null];
                                                    p = "action=kr_search_truyen&q=" + f + "&kr_nonce=" + c + "&page=" + g;
                                                    return [4, u(m + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": U["User-Agent"], Referer: m + "/truyen-han-quoc/" }, body: p })];
                                                case 4:
                                                    if (b = _a.sent(), !b || !b.ok)
                                                        return [2, (H("Không tải được tìm kiếm: " + m + "/wp-admin/admin-ajax.php"), null)];
                                                    _a.label = 5;
                                                case 5:
                                                    try {
                                                        return [2, b.json()];
                                                    }
                                                    catch (v) {
                                                        return [2, (H("Dữ liệu tìm kiếm không hợp lệ"), null)];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function me(i) { for (var s = [], c = {}, f = i.select("article.kr-card"), g = 0; g < f.size(); g++) {
                                        var p = f.get(g), b = L(p, ".kr-card__title a[href]");
                                        if (b) {
                                            var v = b.attr("href") || "";
                                            if (!(!v || v.indexOf("/the-loai/") !== -1)) {
                                                var x = b.text().trim();
                                                if (!(!x || c[v])) {
                                                    c[v] = !0;
                                                    var S = ue(p);
                                                    s.push({ name: x, link: v, host: z, cover: S });
                                                }
                                            }
                                        }
                                    } return s; } function G() {
                                        return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_a) {
                                            i = [{ title: "Action", input: "action", script: "genrecontent.js" }, { title: "Adventure", input: "adventure", script: "genrecontent.js" }, { title: "Comedy", input: "comedy", script: "genrecontent.js" }, { title: "Drama", input: "drama", script: "genrecontent.js" }, { title: "Echi", input: "echi", script: "genrecontent.js" }, { title: "Fantasy", input: "fantasy", script: "genrecontent.js" }, { title: "Gender Bender", input: "gender-bender", script: "genrecontent.js" }, { title: "Harem", input: "harem", script: "genrecontent.js" }, { title: "Historical", input: "historical", script: "genrecontent.js" }, { title: "Horror", input: "horror", script: "genrecontent.js" }, { title: "Mature", input: "mature", script: "genrecontent.js" }, { title: "Mystery", input: "mystery", script: "genrecontent.js" }, { title: "Psychological", input: "psychological", script: "genrecontent.js" }, { title: "Romance", input: "romance", script: "genrecontent.js" }, { title: "School Life", input: "truyen-han-quoc-hoc-duong", script: "genrecontent.js" }, { title: "Sci-fi", input: "sci-fi", script: "genrecontent.js" }, { title: "Seinen", input: "seinen", script: "genrecontent.js" }, { title: "Shounen", input: "shounen", script: "genrecontent.js" }, { title: "Slice of Life", input: "slice-of-life", script: "genrecontent.js" }, { title: "Sport", input: "sport", script: "genrecontent.js" }, { title: "Supernatural", input: "supernatural", script: "genrecontent.js" }, { title: "Thriller", input: "thriller", script: "genrecontent.js" }, { title: "Tragedy", input: "tragedy", script: "genrecontent.js" }, { title: "Võ Hiệp", input: "vo-hiep", script: "genrecontent.js" }, { title: "Võ Thuật", input: "vo-thuat", script: "genrecontent.js" }, { title: "Web Novel", input: "web-novel", script: "genrecontent.js" }, { title: "Wuxia", input: "wuxia", script: "genrecontent.js" }, { title: "Yandere", input: "yandere", script: "genrecontent.js" }];
                                            return [2, n.success(i)];
                                        }); });
                                    } var m, z, X, N, U, j, k; return __generator(this, function (_a) {
                                        m = "https://lnkuro.top", z = "https://lnkuro.top", X = 8e3, N = "", U = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: m + "/" }, j = { headers: U };
                                        k = "";
                                        return [2, typeof G == "function" ? G : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, genrecontent: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (u, r, a, n, o, l, d, h, w, O, T, A, D, I, ee, ae) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function L(i, s) { var c = i.select(s); return c.size() > 0 ? c.get(0) : null; } function be(i) { return i ? i.indexOf("http") === 0 ? i : m + (i.charAt(0) === "/" ? i : "/" + i) : m; } function H(i) { return N = i || "", null; } function ie(i) { return N || i || "Không tải được dữ liệu"; } function R(i) { if (!i)
                                        return !1; var s = L(i, "title"), c = s ? s.text().toLowerCase() : ""; if (c.indexOf("attention required") !== -1)
                                        return !0; var f = ""; try {
                                        f = (i.text() || "").toLowerCase();
                                    }
                                    catch (g) {
                                        f = "";
                                    } return f.indexOf("sorry, you have been blocked") !== -1 || f.indexOf("you are unable to access") !== -1 || f.indexOf("cloudflare ray id") !== -1; } function te(i) {
                                        return __awaiter(this, void 0, void 0, function () { var s, _a, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0: return [4, u(i, j)];
                                                case 1:
                                                    s = _c.sent();
                                                    _a = s;
                                                    if (!_a) return [3, 4];
                                                    _b = !s.ok && !(s.status >= 400 && s.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, u(i, j)];
                                                case 2:
                                                    _b = (s = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    _a = (_b, s);
                                                    _c.label = 4;
                                                case 4: return [2, _a];
                                            }
                                        }); });
                                    } function W(i) {
                                        return __awaiter(this, void 0, void 0, function () { var s, c, f, g, p; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    N = "";
                                                    s = "";
                                                    return [4, te(i)];
                                                case 1:
                                                    c = _a.sent();
                                                    if (c && c.ok) {
                                                        f = c.html();
                                                        if (f && !R(f))
                                                            return [2, f];
                                                        f && R(f) && (s = "Site chặn truy cập bởi Cloudflare: " + i);
                                                    }
                                                    c && (c.status === 403 || c.status === 429) && (s = "Site chặn truy cập (HTTP " + c.status + "): " + i);
                                                    g = I.newBrowser();
                                                    try {
                                                        p = g.launch(i, X);
                                                        if (p && !R(p))
                                                            return [2, p];
                                                        p && R(p) && (s = "Site chặn truy cập bởi Cloudflare: " + i);
                                                    }
                                                    catch (b) {
                                                        s || (s = "Không tải được trang: " + i);
                                                    }
                                                    finally {
                                                        try {
                                                            g.close();
                                                        }
                                                        catch (b) { }
                                                    }
                                                    return [2, H(s || "Không tải được trang: " + i)];
                                            }
                                        }); });
                                    } function ue(i) { var s = L(i, "img[data-src], img[data-lazy-src], img[src]"); if (s) {
                                        var c = s.attr("data-src") || s.attr("data-lazy-src") || s.attr("src") || "";
                                        if (c && c.indexOf("data:") !== 0)
                                            return c.charAt(0) === 47 && (c = m + c), c;
                                    } return ""; } function V() {
                                        return __awaiter(this, void 0, void 0, function () { var i, s; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (k)
                                                        return [2, k];
                                                    return [4, W(m + "/truyen-han-quoc/")];
                                                case 1:
                                                    i = _a.sent();
                                                    if (!i)
                                                        return [2, ""];
                                                    s = L(i, "input[name=kr_nonce]");
                                                    return [2, (k = s ? s.attr("value") : "", k)];
                                            }
                                        }); });
                                    } function ge(i, s) {
                                        return __awaiter(this, void 0, void 0, function () { var c, f, g, p, b; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    N = "";
                                                    return [4, V()];
                                                case 1:
                                                    c = _a.sent();
                                                    if (!c)
                                                        return [2, null];
                                                    f = java.net.URLEncoder.encode(i, "UTF-8"), g = s || 1, p = "action=kr_search_truyen&q=" + f + "&kr_nonce=" + c + "&page=" + g;
                                                    return [4, u(m + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": U["User-Agent"], Referer: m + "/truyen-han-quoc/" }, body: p })];
                                                case 2:
                                                    b = _a.sent();
                                                    if (!(!b || !b.ok)) return [3, 5];
                                                    k = "";
                                                    return [4, V()];
                                                case 3:
                                                    if (c = _a.sent(), !c)
                                                        return [2, null];
                                                    p = "action=kr_search_truyen&q=" + f + "&kr_nonce=" + c + "&page=" + g;
                                                    return [4, u(m + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": U["User-Agent"], Referer: m + "/truyen-han-quoc/" }, body: p })];
                                                case 4:
                                                    if (b = _a.sent(), !b || !b.ok)
                                                        return [2, (H("Không tải được tìm kiếm: " + m + "/wp-admin/admin-ajax.php"), null)];
                                                    _a.label = 5;
                                                case 5:
                                                    try {
                                                        return [2, b.json()];
                                                    }
                                                    catch (v) {
                                                        return [2, (H("Dữ liệu tìm kiếm không hợp lệ"), null)];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function me(i) { for (var s = [], c = {}, f = i.select("article.kr-card"), g = 0; g < f.size(); g++) {
                                        var p = f.get(g), b = L(p, ".kr-card__title a[href]");
                                        if (b) {
                                            var v = b.attr("href") || "";
                                            if (!(!v || v.indexOf("/the-loai/") !== -1)) {
                                                var x = b.text().trim();
                                                if (!(!x || c[v])) {
                                                    c[v] = !0;
                                                    var S = ue(p);
                                                    s.push({ name: x, link: v, host: z, cover: S });
                                                }
                                            }
                                        }
                                    } return s; } function G(i, s) {
                                        return __awaiter(this, void 0, void 0, function () { var c, f, g, p, b, v; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    c = parseInt(s) || 1, f = m + "/the-loai/" + i + "/" + (c > 1 ? "?krp=" + c : "");
                                                    return [4, W(f)];
                                                case 1:
                                                    g = _a.sent();
                                                    if (!g)
                                                        return [2, n.error(ie("Không tải được thể loại: " + f))];
                                                    p = me(g);
                                                    if (p.length === 0)
                                                        return [2, n.success([])];
                                                    b = !1, v = g.select("a[href*='krp=" + (c + 1) + "']");
                                                    return [2, (v.size() > 0 && (b = !0), b ? n.success(p, c + 1) : n.success(p))];
                                            }
                                        }); });
                                    } var m, z, X, N, U, j, k; return __generator(this, function (_a) {
                                        m = "https://lnkuro.top", z = "https://lnkuro.top", X = 8e3, N = "", U = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: m + "/" }, j = { headers: U };
                                        k = "";
                                        return [2, typeof G == "function" ? G : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, detail: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, (function (u, r, a, n, o, l, d, h, w, O, T, A, D, I, ee, ae) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, (function () {
                                            return __awaiter(this, void 0, void 0, function () {
                                                function L(s, c) { var f = s.select(c); return f.size() > 0 ? f.get(0) : null; }
                                                function be(s) { return s ? s.indexOf("http") === 0 ? s : m + (s.charAt(0) === "/" ? s : "/" + s) : m; }
                                                function H(s) { return N = s || "", null; }
                                                function ie(s) { return N || s || "Không tải được dữ liệu"; }
                                                function R(s) { if (!s)
                                                    return !1; var c = L(s, "title"), f = c ? c.text().toLowerCase() : ""; if (f.indexOf("attention required") !== -1)
                                                    return !0; var g = ""; try {
                                                    g = (s.text() || "").toLowerCase();
                                                }
                                                catch (p) {
                                                    g = "";
                                                } return g.indexOf("sorry, you have been blocked") !== -1 || g.indexOf("you are unable to access") !== -1 || g.indexOf("cloudflare ray id") !== -1; }
                                                function te(s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, _a, _b; return __generator(this, function (_c) {
                                                        switch (_c.label) {
                                                            case 0: return [4, u(s, j)];
                                                            case 1:
                                                                c = _c.sent();
                                                                _a = c;
                                                                if (!_a) return [3, 4];
                                                                _b = !c.ok && !(c.status >= 400 && c.status < 500);
                                                                if (!_b) return [3, 3];
                                                                return [4, u(s, j)];
                                                            case 2:
                                                                _b = (c = _c.sent());
                                                                _c.label = 3;
                                                            case 3:
                                                                _a = (_b, c);
                                                                _c.label = 4;
                                                            case 4: return [2, _a];
                                                        }
                                                    }); });
                                                }
                                                function W(s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, f, g, p, b; return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                N = "";
                                                                c = "";
                                                                return [4, te(s)];
                                                            case 1:
                                                                f = _a.sent();
                                                                if (f && f.ok) {
                                                                    g = f.html();
                                                                    if (g && !R(g))
                                                                        return [2, g];
                                                                    g && R(g) && (c = "Site chặn truy cập bởi Cloudflare: " + s);
                                                                }
                                                                f && (f.status === 403 || f.status === 429) && (c = "Site chặn truy cập (HTTP " + f.status + "): " + s);
                                                                p = I.newBrowser();
                                                                try {
                                                                    b = p.launch(s, X);
                                                                    if (b && !R(b))
                                                                        return [2, b];
                                                                    b && R(b) && (c = "Site chặn truy cập bởi Cloudflare: " + s);
                                                                }
                                                                catch (v) {
                                                                    c || (c = "Không tải được trang: " + s);
                                                                }
                                                                finally {
                                                                    try {
                                                                        p.close();
                                                                    }
                                                                    catch (v) { }
                                                                }
                                                                return [2, H(c || "Không tải được trang: " + s)];
                                                        }
                                                    }); });
                                                }
                                                function ue(s) { var c = L(s, "img[data-src], img[data-lazy-src], img[src]"); if (c) {
                                                    var f = c.attr("data-src") || c.attr("data-lazy-src") || c.attr("src") || "";
                                                    if (f && f.indexOf("data:") !== 0)
                                                        return f.charAt(0) === 47 && (f = m + f), f;
                                                } return ""; }
                                                function V() {
                                                    return __awaiter(this, void 0, void 0, function () { var s, c; return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                if (k)
                                                                    return [2, k];
                                                                return [4, W(m + "/truyen-han-quoc/")];
                                                            case 1:
                                                                s = _a.sent();
                                                                if (!s)
                                                                    return [2, ""];
                                                                c = L(s, "input[name=kr_nonce]");
                                                                return [2, (k = c ? c.attr("value") : "", k)];
                                                        }
                                                    }); });
                                                }
                                                function ge(s, c) {
                                                    return __awaiter(this, void 0, void 0, function () { var f, g, p, b, v; return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                N = "";
                                                                return [4, V()];
                                                            case 1:
                                                                f = _a.sent();
                                                                if (!f)
                                                                    return [2, null];
                                                                g = java.net.URLEncoder.encode(s, "UTF-8"), p = c || 1, b = "action=kr_search_truyen&q=" + g + "&kr_nonce=" + f + "&page=" + p;
                                                                return [4, u(m + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": U["User-Agent"], Referer: m + "/truyen-han-quoc/" }, body: b })];
                                                            case 2:
                                                                v = _a.sent();
                                                                if (!(!v || !v.ok)) return [3, 5];
                                                                k = "";
                                                                return [4, V()];
                                                            case 3:
                                                                if (f = _a.sent(), !f)
                                                                    return [2, null];
                                                                b = "action=kr_search_truyen&q=" + g + "&kr_nonce=" + f + "&page=" + p;
                                                                return [4, u(m + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": U["User-Agent"], Referer: m + "/truyen-han-quoc/" }, body: b })];
                                                            case 4:
                                                                if (v = _a.sent(), !v || !v.ok)
                                                                    return [2, (H("Không tải được tìm kiếm: " + m + "/wp-admin/admin-ajax.php"), null)];
                                                                _a.label = 5;
                                                            case 5:
                                                                try {
                                                                    return [2, v.json()];
                                                                }
                                                                catch (x) {
                                                                    return [2, (H("Dữ liệu tìm kiếm không hợp lệ"), null)];
                                                                }
                                                                return [2];
                                                        }
                                                    }); });
                                                }
                                                function me(s) { for (var c = [], f = {}, g = s.select("article.kr-card"), p = 0; p < g.size(); p++) {
                                                    var b = g.get(p), v = L(b, ".kr-card__title a[href]");
                                                    if (v) {
                                                        var x = v.attr("href") || "";
                                                        if (!(!x || x.indexOf("/the-loai/") !== -1)) {
                                                            var S = v.text().trim();
                                                            if (!(!S || f[x])) {
                                                                f[x] = !0;
                                                                var C = ue(b);
                                                                c.push({ name: S, link: x, host: z, cover: C });
                                                            }
                                                        }
                                                    }
                                                } return c; }
                                                function i(s) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var c, f, g, p, b, v, x, S, C, M, K, $, Z, oe, Xe, Ze, Wu, Ku, Wt, $u, Je, o0, Qu, Xu, Zu, Kt, Ju, bt, l0, f0;
                                                        return __generator(this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    c = be(s);
                                                                    return [4, W(c)];
                                                                case 1:
                                                                    f = _a.sent();
                                                                    if (!f)
                                                                        return [2, n.error(ie("Không tải được trang truyện: " + c))];
                                                                    g = "", p = L(f, ".info_kuro h1, h1");
                                                                    p && (g = p.text().trim());
                                                                    b = "", v = L(f, ".novel_kuro img[data-src]");
                                                                    v || (v = L(f, ".cover_kuro img[data-src]")), v || (v = L(f, ".cover_kuro img[src]")), v && (b = v.attr("data-src") || v.attr("src") || "", (b.indexOf("data:") === 0 || b.indexOf("dummy") !== -1) && (b = ""), b && b.charAt(0) === 47 && (b = m + b));
                                                                    for (x = "", S = f.select(".info_kuro p, .container_kuro p"), C = 0; C < S.size(); C++) {
                                                                        M = S.get(C).text();
                                                                        if (M.indexOf("Tác giả") !== -1) {
                                                                            x = M.replace("Tác giả:", "").replace("Tác giả", "").trim();
                                                                            break;
                                                                        }
                                                                    }
                                                                    (!x || x === "Chưa có thông tin") && (x = "Kuro Trans");
                                                                    for (K = "", $ = f.select(".status-inline"), Z = 0; Z < $.size(); Z++) {
                                                                        oe = $.get(Z).text().trim();
                                                                        if (oe.indexOf("Completed") !== -1 || oe.indexOf("completed") !== -1 || oe.indexOf("Hoàn") !== -1) {
                                                                            K = "Completed";
                                                                            break;
                                                                        }
                                                                        if (oe.indexOf("Ongoing") !== -1 || oe.indexOf("ongoing") !== -1 || oe.indexOf("Đang ra") !== -1) {
                                                                            K = "Ongoing";
                                                                            break;
                                                                        }
                                                                    }
                                                                    for (Xe = [], Ze = [], Wu = f.select(".genres_kuro a[href*='/the-loai/']"), Ku = {}, Wt = 0; Wt < Wu.size(); Wt++) {
                                                                        $u = Wu.get(Wt), Je = $u.text().trim();
                                                                        if (Je && !Ku[Je]) {
                                                                            Ku[Je] = !0, Ze.push(Je);
                                                                            o0 = $u.attr("href") || "", Qu = G.exec(o0);
                                                                            Qu && Xe.push({ title: Je, input: Qu[1], script: "genrecontent.js" });
                                                                        }
                                                                    }
                                                                    for (Xu = "", Zu = f.select(".summary_kuro"), Kt = 0; Kt < Zu.size(); Kt++) {
                                                                        Ju = Zu.get(Kt).text().trim();
                                                                        if (Ju.indexOf("Tóm tắt") !== -1) {
                                                                            Xu = Ju.replace("Tóm tắt:", "").replace("Tóm tắt", "").trim();
                                                                            break;
                                                                        }
                                                                    }
                                                                    bt = "";
                                                                    K && (bt += "Tình trạng: " + K), Ze.length > 0 && (bt += (bt ? "\n" : "") + "Thể loại: " + Ze.join(", "));
                                                                    l0 = K !== "Completed", f0 = { name: g, cover: b, host: z, author: x, description: Xu, detail: bt, ongoing: l0, genres: Xe, comments: [] };
                                                                    return [2, n.success(f0)];
                                                            }
                                                        });
                                                    });
                                                }
                                                var m, z, X, N, U, j, k, G;
                                                return __generator(this, function (_a) {
                                                    m = "https://lnkuro.top", z = "https://lnkuro.top", X = 8e3, N = "", U = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: m + "/" }, j = { headers: U };
                                                    k = "";
                                                    G = /\/the-loai\/([^\/]+)\/?/;
                                                    return [2, typeof i == "function" ? i : void 0];
                                                });
                                            });
                                        })()];
                                    case 1: return [2, _a.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, search: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (u, r, a, n, o, l, d, h, w, O, T, A, D, I, ee, ae) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function L(i, s) { var c = i.select(s); return c.size() > 0 ? c.get(0) : null; } function be(i) { return i ? i.indexOf("http") === 0 ? i : m + (i.charAt(0) === "/" ? i : "/" + i) : m; } function H(i) { return N = i || "", null; } function ie(i) { return N || i || "Không tải được dữ liệu"; } function R(i) { if (!i)
                                        return !1; var s = L(i, "title"), c = s ? s.text().toLowerCase() : ""; if (c.indexOf("attention required") !== -1)
                                        return !0; var f = ""; try {
                                        f = (i.text() || "").toLowerCase();
                                    }
                                    catch (g) {
                                        f = "";
                                    } return f.indexOf("sorry, you have been blocked") !== -1 || f.indexOf("you are unable to access") !== -1 || f.indexOf("cloudflare ray id") !== -1; } function te(i) {
                                        return __awaiter(this, void 0, void 0, function () { var s, _a, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0: return [4, u(i, j)];
                                                case 1:
                                                    s = _c.sent();
                                                    _a = s;
                                                    if (!_a) return [3, 4];
                                                    _b = !s.ok && !(s.status >= 400 && s.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, u(i, j)];
                                                case 2:
                                                    _b = (s = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    _a = (_b, s);
                                                    _c.label = 4;
                                                case 4: return [2, _a];
                                            }
                                        }); });
                                    } function W(i) {
                                        return __awaiter(this, void 0, void 0, function () { var s, c, f, g, p; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    N = "";
                                                    s = "";
                                                    return [4, te(i)];
                                                case 1:
                                                    c = _a.sent();
                                                    if (c && c.ok) {
                                                        f = c.html();
                                                        if (f && !R(f))
                                                            return [2, f];
                                                        f && R(f) && (s = "Site chặn truy cập bởi Cloudflare: " + i);
                                                    }
                                                    c && (c.status === 403 || c.status === 429) && (s = "Site chặn truy cập (HTTP " + c.status + "): " + i);
                                                    g = I.newBrowser();
                                                    try {
                                                        p = g.launch(i, X);
                                                        if (p && !R(p))
                                                            return [2, p];
                                                        p && R(p) && (s = "Site chặn truy cập bởi Cloudflare: " + i);
                                                    }
                                                    catch (b) {
                                                        s || (s = "Không tải được trang: " + i);
                                                    }
                                                    finally {
                                                        try {
                                                            g.close();
                                                        }
                                                        catch (b) { }
                                                    }
                                                    return [2, H(s || "Không tải được trang: " + i)];
                                            }
                                        }); });
                                    } function ue(i) { var s = L(i, "img[data-src], img[data-lazy-src], img[src]"); if (s) {
                                        var c = s.attr("data-src") || s.attr("data-lazy-src") || s.attr("src") || "";
                                        if (c && c.indexOf("data:") !== 0)
                                            return c.charAt(0) === 47 && (c = m + c), c;
                                    } return ""; } function V() {
                                        return __awaiter(this, void 0, void 0, function () { var i, s; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (k)
                                                        return [2, k];
                                                    return [4, W(m + "/truyen-han-quoc/")];
                                                case 1:
                                                    i = _a.sent();
                                                    if (!i)
                                                        return [2, ""];
                                                    s = L(i, "input[name=kr_nonce]");
                                                    return [2, (k = s ? s.attr("value") : "", k)];
                                            }
                                        }); });
                                    } function ge(i, s) {
                                        return __awaiter(this, void 0, void 0, function () { var c, f, g, p, b; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    N = "";
                                                    return [4, V()];
                                                case 1:
                                                    c = _a.sent();
                                                    if (!c)
                                                        return [2, null];
                                                    f = java.net.URLEncoder.encode(i, "UTF-8"), g = s || 1, p = "action=kr_search_truyen&q=" + f + "&kr_nonce=" + c + "&page=" + g;
                                                    return [4, u(m + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": U["User-Agent"], Referer: m + "/truyen-han-quoc/" }, body: p })];
                                                case 2:
                                                    b = _a.sent();
                                                    if (!(!b || !b.ok)) return [3, 5];
                                                    k = "";
                                                    return [4, V()];
                                                case 3:
                                                    if (c = _a.sent(), !c)
                                                        return [2, null];
                                                    p = "action=kr_search_truyen&q=" + f + "&kr_nonce=" + c + "&page=" + g;
                                                    return [4, u(m + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": U["User-Agent"], Referer: m + "/truyen-han-quoc/" }, body: p })];
                                                case 4:
                                                    if (b = _a.sent(), !b || !b.ok)
                                                        return [2, (H("Không tải được tìm kiếm: " + m + "/wp-admin/admin-ajax.php"), null)];
                                                    _a.label = 5;
                                                case 5:
                                                    try {
                                                        return [2, b.json()];
                                                    }
                                                    catch (v) {
                                                        return [2, (H("Dữ liệu tìm kiếm không hợp lệ"), null)];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function me(i) { for (var s = [], c = {}, f = i.select("article.kr-card"), g = 0; g < f.size(); g++) {
                                        var p = f.get(g), b = L(p, ".kr-card__title a[href]");
                                        if (b) {
                                            var v = b.attr("href") || "";
                                            if (!(!v || v.indexOf("/the-loai/") !== -1)) {
                                                var x = b.text().trim();
                                                if (!(!x || c[v])) {
                                                    c[v] = !0;
                                                    var S = ue(p);
                                                    s.push({ name: x, link: v, host: z, cover: S });
                                                }
                                            }
                                        }
                                    } return s; } function G(i, s) {
                                        return __awaiter(this, void 0, void 0, function () { var c, f, g, p, b, v, x; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    c = s ? parseInt(s) : 1;
                                                    return [4, ge(i, c)];
                                                case 1:
                                                    f = _a.sent();
                                                    if (!f)
                                                        return [2, n.error(ie("Không tải được tìm kiếm"))];
                                                    if (!f.success)
                                                        return [2, n.success([], null)];
                                                    for (g = [], p = f.items || [], b = 0; b < p.length; b++) {
                                                        v = p[b];
                                                        g.push({ name: v.title || "", link: v.link || "", host: z, cover: v.cover || "" });
                                                    }
                                                    x = f.has_next === !0;
                                                    return [2, n.success(g, x ? String(c + 1) : null)];
                                            }
                                        }); });
                                    } var m, z, X, N, U, j, k; return __generator(this, function (_a) {
                                        m = "https://lnkuro.top", z = "https://lnkuro.top", X = 8e3, N = "", U = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: m + "/" }, j = { headers: U };
                                        k = "";
                                        return [2, typeof G == "function" ? G : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, toc: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (u, r, a, n, o, l, d, h, w, O, T, A, D, I, ee, ae) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function L(i, s) { var c = i.select(s); return c.size() > 0 ? c.get(0) : null; } function be(i) { return i ? i.indexOf("http") === 0 ? i : m + (i.charAt(0) === "/" ? i : "/" + i) : m; } function H(i) { return N = i || "", null; } function ie(i) { return N || i || "Không tải được dữ liệu"; } function R(i) { if (!i)
                                        return !1; var s = L(i, "title"), c = s ? s.text().toLowerCase() : ""; if (c.indexOf("attention required") !== -1)
                                        return !0; var f = ""; try {
                                        f = (i.text() || "").toLowerCase();
                                    }
                                    catch (g) {
                                        f = "";
                                    } return f.indexOf("sorry, you have been blocked") !== -1 || f.indexOf("you are unable to access") !== -1 || f.indexOf("cloudflare ray id") !== -1; } function te(i) {
                                        return __awaiter(this, void 0, void 0, function () { var s, _a, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0: return [4, u(i, j)];
                                                case 1:
                                                    s = _c.sent();
                                                    _a = s;
                                                    if (!_a) return [3, 4];
                                                    _b = !s.ok && !(s.status >= 400 && s.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, u(i, j)];
                                                case 2:
                                                    _b = (s = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    _a = (_b, s);
                                                    _c.label = 4;
                                                case 4: return [2, _a];
                                            }
                                        }); });
                                    } function W(i) {
                                        return __awaiter(this, void 0, void 0, function () { var s, c, f, g, p; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    N = "";
                                                    s = "";
                                                    return [4, te(i)];
                                                case 1:
                                                    c = _a.sent();
                                                    if (c && c.ok) {
                                                        f = c.html();
                                                        if (f && !R(f))
                                                            return [2, f];
                                                        f && R(f) && (s = "Site chặn truy cập bởi Cloudflare: " + i);
                                                    }
                                                    c && (c.status === 403 || c.status === 429) && (s = "Site chặn truy cập (HTTP " + c.status + "): " + i);
                                                    g = I.newBrowser();
                                                    try {
                                                        p = g.launch(i, X);
                                                        if (p && !R(p))
                                                            return [2, p];
                                                        p && R(p) && (s = "Site chặn truy cập bởi Cloudflare: " + i);
                                                    }
                                                    catch (b) {
                                                        s || (s = "Không tải được trang: " + i);
                                                    }
                                                    finally {
                                                        try {
                                                            g.close();
                                                        }
                                                        catch (b) { }
                                                    }
                                                    return [2, H(s || "Không tải được trang: " + i)];
                                            }
                                        }); });
                                    } function ue(i) { var s = L(i, "img[data-src], img[data-lazy-src], img[src]"); if (s) {
                                        var c = s.attr("data-src") || s.attr("data-lazy-src") || s.attr("src") || "";
                                        if (c && c.indexOf("data:") !== 0)
                                            return c.charAt(0) === 47 && (c = m + c), c;
                                    } return ""; } function V() {
                                        return __awaiter(this, void 0, void 0, function () { var i, s; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (k)
                                                        return [2, k];
                                                    return [4, W(m + "/truyen-han-quoc/")];
                                                case 1:
                                                    i = _a.sent();
                                                    if (!i)
                                                        return [2, ""];
                                                    s = L(i, "input[name=kr_nonce]");
                                                    return [2, (k = s ? s.attr("value") : "", k)];
                                            }
                                        }); });
                                    } function ge(i, s) {
                                        return __awaiter(this, void 0, void 0, function () { var c, f, g, p, b; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    N = "";
                                                    return [4, V()];
                                                case 1:
                                                    c = _a.sent();
                                                    if (!c)
                                                        return [2, null];
                                                    f = java.net.URLEncoder.encode(i, "UTF-8"), g = s || 1, p = "action=kr_search_truyen&q=" + f + "&kr_nonce=" + c + "&page=" + g;
                                                    return [4, u(m + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": U["User-Agent"], Referer: m + "/truyen-han-quoc/" }, body: p })];
                                                case 2:
                                                    b = _a.sent();
                                                    if (!(!b || !b.ok)) return [3, 5];
                                                    k = "";
                                                    return [4, V()];
                                                case 3:
                                                    if (c = _a.sent(), !c)
                                                        return [2, null];
                                                    p = "action=kr_search_truyen&q=" + f + "&kr_nonce=" + c + "&page=" + g;
                                                    return [4, u(m + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": U["User-Agent"], Referer: m + "/truyen-han-quoc/" }, body: p })];
                                                case 4:
                                                    if (b = _a.sent(), !b || !b.ok)
                                                        return [2, (H("Không tải được tìm kiếm: " + m + "/wp-admin/admin-ajax.php"), null)];
                                                    _a.label = 5;
                                                case 5:
                                                    try {
                                                        return [2, b.json()];
                                                    }
                                                    catch (v) {
                                                        return [2, (H("Dữ liệu tìm kiếm không hợp lệ"), null)];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function me(i) { for (var s = [], c = {}, f = i.select("article.kr-card"), g = 0; g < f.size(); g++) {
                                        var p = f.get(g), b = L(p, ".kr-card__title a[href]");
                                        if (b) {
                                            var v = b.attr("href") || "";
                                            if (!(!v || v.indexOf("/the-loai/") !== -1)) {
                                                var x = b.text().trim();
                                                if (!(!x || c[v])) {
                                                    c[v] = !0;
                                                    var S = ue(p);
                                                    s.push({ name: x, link: v, host: z, cover: S });
                                                }
                                            }
                                        }
                                    } return s; } function G(i) {
                                        return __awaiter(this, void 0, void 0, function () { var s, c, f, g, p, b, v, x, S; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    s = be(i);
                                                    return [4, W(s)];
                                                case 1:
                                                    c = _a.sent();
                                                    if (!c)
                                                        return [2, n.error(ie("Không tải được trang truyện"))];
                                                    f = [], g = {}, p = c.select(".chapter-list_kuro li a[href]");
                                                    p.size() === 0 && (p = c.select(".section_kuro li a[href]"));
                                                    for (b = 0; b < p.size(); b++) {
                                                        v = p.get(b), x = v.attr("href") || "";
                                                        if (!(!x || g[x])) {
                                                            g[x] = !0;
                                                            S = v.text().trim().replace(/\s+(edit|raw|new)$/i, "").trim();
                                                            S && f.push({ name: S, url: x, host: z });
                                                        }
                                                    }
                                                    return [2, f.length === 0 ? n.error("Không tìm thấy chương") : n.success(f)];
                                            }
                                        }); });
                                    } var m, z, X, N, U, j, k; return __generator(this, function (_a) {
                                        m = "https://lnkuro.top", z = "https://lnkuro.top", X = 8e3, N = "", U = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: m + "/" }, j = { headers: U };
                                        k = "";
                                        return [2, typeof G == "function" ? G : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, chap: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (u, r, a, n, o, l, d, h, w, O, T, A, D, I, ee, ae) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function L(x, S) { var C = x.select(S); return C.size() > 0 ? C.get(0) : null; } function be(x) { return x ? x.indexOf("http") === 0 ? x : m + (x.charAt(0) === "/" ? x : "/" + x) : m; } function H(x) { return N = x || "", null; } function ie(x) { return N || x || "Không tải được dữ liệu"; } function R(x) { if (!x)
                                        return !1; var S = L(x, "title"), C = S ? S.text().toLowerCase() : ""; if (C.indexOf("attention required") !== -1)
                                        return !0; var M = ""; try {
                                        M = (x.text() || "").toLowerCase();
                                    }
                                    catch (K) {
                                        M = "";
                                    } return M.indexOf("sorry, you have been blocked") !== -1 || M.indexOf("you are unable to access") !== -1 || M.indexOf("cloudflare ray id") !== -1; } function te(x) {
                                        return __awaiter(this, void 0, void 0, function () { var S, _a, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0: return [4, u(x, j)];
                                                case 1:
                                                    S = _c.sent();
                                                    _a = S;
                                                    if (!_a) return [3, 4];
                                                    _b = !S.ok && !(S.status >= 400 && S.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, u(x, j)];
                                                case 2:
                                                    _b = (S = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    _a = (_b, S);
                                                    _c.label = 4;
                                                case 4: return [2, _a];
                                            }
                                        }); });
                                    } function W(x) {
                                        return __awaiter(this, void 0, void 0, function () { var S, C, M, K, $; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    N = "";
                                                    S = "";
                                                    return [4, te(x)];
                                                case 1:
                                                    C = _a.sent();
                                                    if (C && C.ok) {
                                                        M = C.html();
                                                        if (M && !R(M))
                                                            return [2, M];
                                                        M && R(M) && (S = "Site chặn truy cập bởi Cloudflare: " + x);
                                                    }
                                                    C && (C.status === 403 || C.status === 429) && (S = "Site chặn truy cập (HTTP " + C.status + "): " + x);
                                                    K = I.newBrowser();
                                                    try {
                                                        $ = K.launch(x, X);
                                                        if ($ && !R($))
                                                            return [2, $];
                                                        $ && R($) && (S = "Site chặn truy cập bởi Cloudflare: " + x);
                                                    }
                                                    catch (Z) {
                                                        S || (S = "Không tải được trang: " + x);
                                                    }
                                                    finally {
                                                        try {
                                                            K.close();
                                                        }
                                                        catch (Z) { }
                                                    }
                                                    return [2, H(S || "Không tải được trang: " + x)];
                                            }
                                        }); });
                                    } function ue(x) { var S = L(x, "img[data-src], img[data-lazy-src], img[src]"); if (S) {
                                        var C = S.attr("data-src") || S.attr("data-lazy-src") || S.attr("src") || "";
                                        if (C && C.indexOf("data:") !== 0)
                                            return C.charAt(0) === 47 && (C = m + C), C;
                                    } return ""; } function V() {
                                        return __awaiter(this, void 0, void 0, function () { var x, S; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (k)
                                                        return [2, k];
                                                    return [4, W(m + "/truyen-han-quoc/")];
                                                case 1:
                                                    x = _a.sent();
                                                    if (!x)
                                                        return [2, ""];
                                                    S = L(x, "input[name=kr_nonce]");
                                                    return [2, (k = S ? S.attr("value") : "", k)];
                                            }
                                        }); });
                                    } function ge(x, S) {
                                        return __awaiter(this, void 0, void 0, function () { var C, M, K, $, Z; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    N = "";
                                                    return [4, V()];
                                                case 1:
                                                    C = _a.sent();
                                                    if (!C)
                                                        return [2, null];
                                                    M = java.net.URLEncoder.encode(x, "UTF-8"), K = S || 1, $ = "action=kr_search_truyen&q=" + M + "&kr_nonce=" + C + "&page=" + K;
                                                    return [4, u(m + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": U["User-Agent"], Referer: m + "/truyen-han-quoc/" }, body: $ })];
                                                case 2:
                                                    Z = _a.sent();
                                                    if (!(!Z || !Z.ok)) return [3, 5];
                                                    k = "";
                                                    return [4, V()];
                                                case 3:
                                                    if (C = _a.sent(), !C)
                                                        return [2, null];
                                                    $ = "action=kr_search_truyen&q=" + M + "&kr_nonce=" + C + "&page=" + K;
                                                    return [4, u(m + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": U["User-Agent"], Referer: m + "/truyen-han-quoc/" }, body: $ })];
                                                case 4:
                                                    if (Z = _a.sent(), !Z || !Z.ok)
                                                        return [2, (H("Không tải được tìm kiếm: " + m + "/wp-admin/admin-ajax.php"), null)];
                                                    _a.label = 5;
                                                case 5:
                                                    try {
                                                        return [2, Z.json()];
                                                    }
                                                    catch (oe) {
                                                        return [2, (H("Dữ liệu tìm kiếm không hợp lệ"), null)];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function me(x) { for (var S = [], C = {}, M = x.select("article.kr-card"), K = 0; K < M.size(); K++) {
                                        var $ = M.get(K), Z = L($, ".kr-card__title a[href]");
                                        if (Z) {
                                            var oe = Z.attr("href") || "";
                                            if (!(!oe || oe.indexOf("/the-loai/") !== -1)) {
                                                var Xe = Z.text().trim();
                                                if (!(!Xe || C[oe])) {
                                                    C[oe] = !0;
                                                    var Ze = ue($);
                                                    S.push({ name: Xe, link: oe, host: z, cover: Ze });
                                                }
                                            }
                                        }
                                    } return S; } function i(x) { if (!x)
                                        return !1; var S = x.replace(/<br\s*\/?>/gi, "").replace(/&nbsp;/gi, " ").replace(/\s+/g, "").trim(); return S.length > 0; } function s(x) { return x ? x.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/gi, " ").replace(/\s+/g, " ").trim() : ""; } function c(x) { if (!i(x))
                                        return !0; var S = s(x), C = 0, M = x.match(/<p[\s>]/gi); return M && (C = M.length), S.indexOf("Số từ") !== -1 && C <= 1 || S.indexOf("Chương") === 0 && S.length < 120; } function f(x) { for (var S = "", C = x.select("p"), M = 0; M < C.size(); M++) {
                                        var K = C.get(M), $ = K.html(), Z = K.text ? K.text().trim() : "";
                                        Z.indexOf("Số từ") !== 0 && i($) && (S += "<p>" + $ + "</p>");
                                    } return S; } function g(x) { for (var S = [".entry-content.single-page .single-page-content", ".entry-content.single-page .article-content", ".entry-content.single-page .post-content", ".entry-content.single-page .content", ".entry-content.single-page [class*='chapter-content']", ".entry-content.single-page [class*='entry-content-inner']", ".entry-content .single-page-content", ".entry-content .article-content", ".entry-content .post-content", ".entry-content .content", ".entry-content.single-page", ".entry-content", "article .entry-content", "main .entry-content"], C = 0; C < S.length; C++) {
                                        var M = L(x, S[C]);
                                        if (M)
                                            return M;
                                    } return null; } function p(x) { if (!x)
                                        return ""; var S = g(x); if (!S)
                                        return ""; S.select("script, style, ins, noscript, iframe, button, a, .adsbygoogle, .code-block, .wp-block-buttons, .nav-links, .kuro-settings-wrapper, .blog-share, [class*='ads'], [id*='chapter-nav'], .r18-preview, .entry-header, .entry-meta, #vip-inline-gold-hyper, .vip-cta, .vip-shimmer, .vip-spark").remove(); var C = S.html(); return i(C) || (C = f(S)), C; } function b(x) { var S = I.newBrowser(); try {
                                        return S.launch(x, G);
                                    }
                                    catch (C) {
                                        return null;
                                    }
                                    finally {
                                        try {
                                            S.close();
                                        }
                                        catch (C) { }
                                    } } function v(x) {
                                        return __awaiter(this, void 0, void 0, function () { var S, C, M, K, $; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    S = be(x);
                                                    return [4, W(S)];
                                                case 1:
                                                    C = _a.sent();
                                                    if (!C)
                                                        return [2, n.error(ie("Không tải được chương"))];
                                                    M = p(C);
                                                    if (c(M)) {
                                                        K = b(S), $ = p(K);
                                                        i($) && (M = $);
                                                    }
                                                    return [2, i(M) ? n.success(M) : n.error("Nội dung chương trống")];
                                            }
                                        }); });
                                    } var m, z, X, N, U, j, k, G; return __generator(this, function (_a) {
                                        m = "https://lnkuro.top", z = "https://lnkuro.top", X = 8e3, N = "", U = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: m + "/" }, j = { headers: U };
                                        k = "";
                                        G = 15e3;
                                        return [2, typeof v == "function" ? v : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, suggest: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (u, r, a, n, o, l, d, h, w, O, T, A, D, I, ee, ae) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function L(i, s) { var c = i.select(s); return c.size() > 0 ? c.get(0) : null; } function be(i) { return i ? i.indexOf("http") === 0 ? i : m + (i.charAt(0) === "/" ? i : "/" + i) : m; } function H(i) { return N = i || "", null; } function ie(i) { return N || i || "Không tải được dữ liệu"; } function R(i) { if (!i)
                                        return !1; var s = L(i, "title"), c = s ? s.text().toLowerCase() : ""; if (c.indexOf("attention required") !== -1)
                                        return !0; var f = ""; try {
                                        f = (i.text() || "").toLowerCase();
                                    }
                                    catch (g) {
                                        f = "";
                                    } return f.indexOf("sorry, you have been blocked") !== -1 || f.indexOf("you are unable to access") !== -1 || f.indexOf("cloudflare ray id") !== -1; } function te(i) {
                                        return __awaiter(this, void 0, void 0, function () { var s, _a, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0: return [4, u(i, j)];
                                                case 1:
                                                    s = _c.sent();
                                                    _a = s;
                                                    if (!_a) return [3, 4];
                                                    _b = !s.ok && !(s.status >= 400 && s.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, u(i, j)];
                                                case 2:
                                                    _b = (s = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    _a = (_b, s);
                                                    _c.label = 4;
                                                case 4: return [2, _a];
                                            }
                                        }); });
                                    } function W(i) {
                                        return __awaiter(this, void 0, void 0, function () { var s, c, f, g, p; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    N = "";
                                                    s = "";
                                                    return [4, te(i)];
                                                case 1:
                                                    c = _a.sent();
                                                    if (c && c.ok) {
                                                        f = c.html();
                                                        if (f && !R(f))
                                                            return [2, f];
                                                        f && R(f) && (s = "Site chặn truy cập bởi Cloudflare: " + i);
                                                    }
                                                    c && (c.status === 403 || c.status === 429) && (s = "Site chặn truy cập (HTTP " + c.status + "): " + i);
                                                    g = I.newBrowser();
                                                    try {
                                                        p = g.launch(i, X);
                                                        if (p && !R(p))
                                                            return [2, p];
                                                        p && R(p) && (s = "Site chặn truy cập bởi Cloudflare: " + i);
                                                    }
                                                    catch (b) {
                                                        s || (s = "Không tải được trang: " + i);
                                                    }
                                                    finally {
                                                        try {
                                                            g.close();
                                                        }
                                                        catch (b) { }
                                                    }
                                                    return [2, H(s || "Không tải được trang: " + i)];
                                            }
                                        }); });
                                    } function ue(i) { var s = L(i, "img[data-src], img[data-lazy-src], img[src]"); if (s) {
                                        var c = s.attr("data-src") || s.attr("data-lazy-src") || s.attr("src") || "";
                                        if (c && c.indexOf("data:") !== 0)
                                            return c.charAt(0) === 47 && (c = m + c), c;
                                    } return ""; } function V() {
                                        return __awaiter(this, void 0, void 0, function () { var i, s; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (k)
                                                        return [2, k];
                                                    return [4, W(m + "/truyen-han-quoc/")];
                                                case 1:
                                                    i = _a.sent();
                                                    if (!i)
                                                        return [2, ""];
                                                    s = L(i, "input[name=kr_nonce]");
                                                    return [2, (k = s ? s.attr("value") : "", k)];
                                            }
                                        }); });
                                    } function ge(i, s) {
                                        return __awaiter(this, void 0, void 0, function () { var c, f, g, p, b; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    N = "";
                                                    return [4, V()];
                                                case 1:
                                                    c = _a.sent();
                                                    if (!c)
                                                        return [2, null];
                                                    f = java.net.URLEncoder.encode(i, "UTF-8"), g = s || 1, p = "action=kr_search_truyen&q=" + f + "&kr_nonce=" + c + "&page=" + g;
                                                    return [4, u(m + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": U["User-Agent"], Referer: m + "/truyen-han-quoc/" }, body: p })];
                                                case 2:
                                                    b = _a.sent();
                                                    if (!(!b || !b.ok)) return [3, 5];
                                                    k = "";
                                                    return [4, V()];
                                                case 3:
                                                    if (c = _a.sent(), !c)
                                                        return [2, null];
                                                    p = "action=kr_search_truyen&q=" + f + "&kr_nonce=" + c + "&page=" + g;
                                                    return [4, u(m + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": U["User-Agent"], Referer: m + "/truyen-han-quoc/" }, body: p })];
                                                case 4:
                                                    if (b = _a.sent(), !b || !b.ok)
                                                        return [2, (H("Không tải được tìm kiếm: " + m + "/wp-admin/admin-ajax.php"), null)];
                                                    _a.label = 5;
                                                case 5:
                                                    try {
                                                        return [2, b.json()];
                                                    }
                                                    catch (v) {
                                                        return [2, (H("Dữ liệu tìm kiếm không hợp lệ"), null)];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function me(i) { for (var s = [], c = {}, f = i.select("article.kr-card"), g = 0; g < f.size(); g++) {
                                        var p = f.get(g), b = L(p, ".kr-card__title a[href]");
                                        if (b) {
                                            var v = b.attr("href") || "";
                                            if (!(!v || v.indexOf("/the-loai/") !== -1)) {
                                                var x = b.text().trim();
                                                if (!(!x || c[v])) {
                                                    c[v] = !0;
                                                    var S = ue(p);
                                                    s.push({ name: x, link: v, host: z, cover: S });
                                                }
                                            }
                                        }
                                    } return s; } function G(i) {
                                        return __awaiter(this, void 0, void 0, function () { var s, c, f, g, p; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (!i)
                                                        return [2, n.success([])];
                                                    return [4, ge(i, 1)];
                                                case 1:
                                                    s = _a.sent();
                                                    if (!s || !s.success)
                                                        return [2, n.success([])];
                                                    for (c = [], f = s.items || [], g = 0; g < f.length; g++) {
                                                        p = f[g];
                                                        c.push({ name: p.title || "", link: p.link || "", host: z, cover: p.cover || "" });
                                                    }
                                                    return [2, n.success(c)];
                                            }
                                        }); });
                                    } var m, z, X, N, U, j, k; return __generator(this, function (_a) {
                                        m = "https://lnkuro.top", z = "https://lnkuro.top", X = 8e3, N = "", U = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: m + "/" }, j = { headers: U };
                                        k = "";
                                        return [2, typeof G == "function" ? G : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    } };
function c0(e) { return new zt({ meta: Ae, scripts: s0, host: e }); }
var Va = require("@libs/fetch").fetchApi, ht = null;
try {
    ht = require("@libs/storage");
}
catch (e) {
    ht = null;
}
var zu = {}, _t = ht && ht.storage ? ht.storage : { get: function (e) { return zu[e]; }, set: function (e, t) { zu[e] = t; }, delete: function (e) { delete zu[e]; } }, _u = (function () {
    function class_2() {
        var _this = this;
        this.id = Ae.lnId, this.name = Ae.name, this.icon = Ae.lnIcon, this.site = Ae.source, this.version = Ae.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = c0({ name: "LNReader", request: function (t) { return __awaiter(_this, void 0, void 0, function () {
                var u, r, a;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            u = { method: t.method, headers: t.headers };
                            t.body != null && t.method !== "GET" && (u.body = t.body);
                            return [4, Va(t.url, u)];
                        case 1:
                            r = _b.sent(), a = {};
                            try {
                                r.headers.forEach(function (n, o) { a[o] = n; });
                            }
                            catch (n) { }
                            _a = { status: r.status, url: r.url || t.url, headers: a };
                            return [4, r.text()];
                        case 2: return [2, (_a.text = _b.sent(), _a)];
                    }
                });
            }); }, storageGet: function (t) { var u = _t.get("vb_" + t); return u == null ? null : String(u); }, storageSet: function (t, u) { u == null ? _t.delete && _t.delete("vb_" + t) : _t.set("vb_" + t, String(u)); }, config: function (t) { return null; }, log: function (t) { return console.log(t); } });
    }
    class_2.prototype.popularNovels = function (t, u) {
        return __awaiter(this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(u && u.showLatestNovels)) return [3, 2];
                    return [4, this.engine.latest(t)];
                case 1:
                    _a = _b.sent();
                    return [3, 4];
                case 2: return [4, this.engine.popular(t)];
                case 3:
                    _a = _b.sent();
                    _b.label = 4;
                case 4: return [2, (_a).items.map(function (a) { return ({ name: a.name, path: a.link, cover: a.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (t, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.search(t, u)];
                case 1: return [2, (_a.sent()).items.map(function (a) { return ({ name: a.name, path: a.link, cover: a.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.detail(t)];
                case 1:
                    u = _a.sent();
                    return [4, this.engine.chapters(t)];
                case 2:
                    r = _a.sent();
                    return [2, { path: t, name: u.name || "Untitled", cover: u.cover, summary: u.description, author: u.author, status: u.ongoing ? "Ongoing" : "Completed", genres: u.genres.join(","), chapters: r.map(function (a, n) { return ({ name: a.name, path: a.url, chapterNumber: n + 1 }); }) }];
            }
        }); });
    };
    class_2.prototype.parseChapter = function (t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.content(t)];
                case 1: return [2, (_a.sent()).html];
            }
        }); });
    };
    class_2.prototype.resolveUrl = function (t, u) { return /^https?:/i.test(t) ? t : Ae.source.replace(/\/+$/, "") + "/" + String(t).replace(/^\/+/, ""); };
    return class_2;
}()), Ga = new _u;
