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
var Ma = Object.create;
var Ct = Object.defineProperty, Oa = Object.defineProperties, Ra = Object.getOwnPropertyDescriptor, Ba = Object.getOwnPropertyDescriptors, Ha = Object.getOwnPropertyNames, Su = Object.getOwnPropertySymbols, Pa = Object.getPrototypeOf, Eu = Object.prototype.hasOwnProperty, Fa = Object.prototype.propertyIsEnumerable;
var Au = function (e, t, u) { return t in e ? Ct(e, t, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[t] = u; }, X = function (e, t) {
    var e_2, _b;
    for (var u in t || (t = {}))
        Eu.call(t, u) && Au(e, u, t[u]);
    if (Su)
        try {
            for (var _c = __values(Su(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var u = _d.value;
                Fa.call(t, u) && Au(e, u, t[u]);
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
}, ct = function (e, t) { return Oa(e, Ba(t)); };
var Va = function (e, t) { return function () { return (t || e((t = { exports: {} }).exports, t), t.exports); }; }, Ae = function (e, t) { for (var u in t)
    Ct(e, u, { get: t[u], enumerable: !0 }); }, Tu = function (e, t, u, a) {
    var e_3, _b;
    if (t && typeof t == "object" || typeof t == "function") {
        var _loop_1 = function (n) {
            !Eu.call(e, n) && n !== u && Ct(e, n, { get: function () { return t[n]; }, enumerable: !(a = Ra(t, n)) || a.enumerable });
        };
        try {
            for (var _c = __values(Ha(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var n = _d.value;
                _loop_1(n);
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
var ot = function (e, t, u) { return (u = e != null ? Ma(Pa(e)) : {}, Tu(t || !e || !e.__esModule ? Ct(u, "default", { value: e, enumerable: !0 }) : u, e)); }, ja = function (e) { return Tu(Ct({}, "__esModule", { value: !0 }), e); };
var st = Va(function (zn, ta) { ta.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var h0 = {};
Ae(h0, { default: function () { return d0; } });
module.exports = ja(h0);
var _t = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (e) { return e.charCodeAt(0); }));
var $t = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (e) { return e.charCodeAt(0); }));
var Ee, za = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), pt = (Ee = String.fromCodePoint) !== null && Ee !== void 0 ? Ee : function (e) { var t = ""; return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t; };
function Te(e) { var t; return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = za.get(e)) !== null && t !== void 0 ? t : e; }
var R;
(function (e) { e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z"; })(R || (R = {}));
var Ga = 32, at;
(function (e) { e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE"; })(at || (at = {}));
function Ne(e) { return e >= R.ZERO && e <= R.NINE; }
function _a(e) { return e >= R.UPPER_A && e <= R.UPPER_F || e >= R.LOWER_A && e <= R.LOWER_F; }
function $a(e) { return e >= R.UPPER_A && e <= R.UPPER_Z || e >= R.LOWER_A && e <= R.LOWER_Z || Ne(e); }
function Wa(e) { return e === R.EQUALS || $a(e); }
var O;
(function (e) { e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity"; })(O || (O = {}));
var G;
(function (e) { e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute"; })(G || (G = {}));
var mt = (function () {
    function mt(t, u, a) {
        this.decodeTree = t, this.emitCodePoint = u, this.errors = a, this.state = O.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = G.Strict;
    }
    mt.prototype.startEntity = function (t) { this.decodeMode = t, this.state = O.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    mt.prototype.write = function (t, u) { switch (this.state) {
        case O.EntityStart: return t.charCodeAt(u) === R.NUM ? (this.state = O.NumericStart, this.consumed += 1, this.stateNumericStart(t, u + 1)) : (this.state = O.NamedEntity, this.stateNamedEntity(t, u));
        case O.NumericStart: return this.stateNumericStart(t, u);
        case O.NumericDecimal: return this.stateNumericDecimal(t, u);
        case O.NumericHex: return this.stateNumericHex(t, u);
        case O.NamedEntity: return this.stateNamedEntity(t, u);
    } };
    mt.prototype.stateNumericStart = function (t, u) { return u >= t.length ? -1 : (t.charCodeAt(u) | Ga) === R.LOWER_X ? (this.state = O.NumericHex, this.consumed += 1, this.stateNumericHex(t, u + 1)) : (this.state = O.NumericDecimal, this.stateNumericDecimal(t, u)); };
    mt.prototype.addToNumericResult = function (t, u, a, n) { if (u !== a) {
        var s = a - u;
        this.result = this.result * Math.pow(n, s) + parseInt(t.substr(u, s), n), this.consumed += s;
    } };
    mt.prototype.stateNumericHex = function (t, u) { var a = u; for (; u < t.length;) {
        var n = t.charCodeAt(u);
        if (Ne(n) || _a(n))
            u += 1;
        else
            return this.addToNumericResult(t, a, u, 16), this.emitNumericEntity(n, 3);
    } return this.addToNumericResult(t, a, u, 16), -1; };
    mt.prototype.stateNumericDecimal = function (t, u) { var a = u; for (; u < t.length;) {
        var n = t.charCodeAt(u);
        if (Ne(n))
            u += 1;
        else
            return this.addToNumericResult(t, a, u, 10), this.emitNumericEntity(n, 2);
    } return this.addToNumericResult(t, a, u, 10), -1; };
    mt.prototype.emitNumericEntity = function (t, u) { var a; if (this.consumed <= u)
        return (a = this.errors) === null || a === void 0 || a.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (t === R.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === G.Strict)
        return 0; return this.emitCodePoint(Te(this.result), this.consumed), this.errors && (t !== R.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    mt.prototype.stateNamedEntity = function (t, u) { var a = this.decodeTree, n = a[this.treeIndex], s = (n & at.VALUE_LENGTH) >> 14; for (; u < t.length; u++, this.excess++) {
        var o = t.charCodeAt(u);
        if (this.treeIndex = Xa(a, n, this.treeIndex + Math.max(1, s), o), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === G.Attribute && (s === 0 || Wa(o)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (n = a[this.treeIndex], s = (n & at.VALUE_LENGTH) >> 14, s !== 0) {
            if (o === R.SEMI)
                return this.emitNamedEntityData(this.treeIndex, s, this.consumed + this.excess);
            this.decodeMode !== G.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    mt.prototype.emitNotTerminatedNamedEntity = function () { var t; var _b = this, u = _b.result, a = _b.decodeTree, n = (a[u] & at.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(u, n, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed; };
    mt.prototype.emitNamedEntityData = function (t, u, a) { var n = this.decodeTree; return this.emitCodePoint(u === 1 ? n[t] & ~at.VALUE_LENGTH : n[t + 1], a), u === 3 && this.emitCodePoint(n[t + 2], a), a; };
    mt.prototype.end = function () { var t; switch (this.state) {
        case O.NamedEntity: return this.result !== 0 && (this.decodeMode !== G.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case O.NumericDecimal: return this.emitNumericEntity(0, 2);
        case O.NumericHex: return this.emitNumericEntity(0, 3);
        case O.NumericStart: return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case O.EntityStart: return 0;
    } };
    return mt;
}());
function Nu(e) { var t = "", u = new mt(e, function (a) { return t += pt(a); }); return function (n, s) { var o = 0, h = 0; for (; (h = n.indexOf("&", h)) >= 0;) {
    t += n.slice(o, h), u.startEntity(s);
    var m = u.write(n, h + 1);
    if (m < 0) {
        o = h + u.end();
        break;
    }
    o = h + m, h = m === 0 ? o + 1 : o;
} var p = t + n.slice(o); return t = "", p; }; }
function Xa(e, t, u, a) { var n = (t & at.BRANCH_LENGTH) >> 7, s = t & at.JUMP_TABLE; if (n === 0)
    return s !== 0 && a === s ? u : -1; if (s) {
    var p = a - s;
    return p < 0 || p >= n ? -1 : e[u + p] - 1;
} var o = u, h = o + n - 1; for (; o <= h;) {
    var p = o + h >>> 1, m = e[p];
    if (m < a)
        o = p + 1;
    else if (m > a)
        h = p - 1;
    else
        return e[p + n];
} return -1; }
var S0 = Nu(_t), A0 = Nu($t);
var E;
(function (e) { e[e.Tab = 9] = "Tab", e[e.NewLine = 10] = "NewLine", e[e.FormFeed = 12] = "FormFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.Number = 35] = "Number", e[e.Amp = 38] = "Amp", e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Dash = 45] = "Dash", e[e.Slash = 47] = "Slash", e[e.Zero = 48] = "Zero", e[e.Nine = 57] = "Nine", e[e.Semi = 59] = "Semi", e[e.Lt = 60] = "Lt", e[e.Eq = 61] = "Eq", e[e.Gt = 62] = "Gt", e[e.Questionmark = 63] = "Questionmark", e[e.UpperA = 65] = "UpperA", e[e.LowerA = 97] = "LowerA", e[e.UpperF = 70] = "UpperF", e[e.LowerF = 102] = "LowerF", e[e.UpperZ = 90] = "UpperZ", e[e.LowerZ = 122] = "LowerZ", e[e.LowerX = 120] = "LowerX", e[e.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(E || (E = {}));
var g;
(function (e) { e[e.Text = 1] = "Text", e[e.BeforeTagName = 2] = "BeforeTagName", e[e.InTagName = 3] = "InTagName", e[e.InSelfClosingTag = 4] = "InSelfClosingTag", e[e.BeforeClosingTagName = 5] = "BeforeClosingTagName", e[e.InClosingTagName = 6] = "InClosingTagName", e[e.AfterClosingTagName = 7] = "AfterClosingTagName", e[e.BeforeAttributeName = 8] = "BeforeAttributeName", e[e.InAttributeName = 9] = "InAttributeName", e[e.AfterAttributeName = 10] = "AfterAttributeName", e[e.BeforeAttributeValue = 11] = "BeforeAttributeValue", e[e.InAttributeValueDq = 12] = "InAttributeValueDq", e[e.InAttributeValueSq = 13] = "InAttributeValueSq", e[e.InAttributeValueNq = 14] = "InAttributeValueNq", e[e.BeforeDeclaration = 15] = "BeforeDeclaration", e[e.InDeclaration = 16] = "InDeclaration", e[e.InProcessingInstruction = 17] = "InProcessingInstruction", e[e.BeforeComment = 18] = "BeforeComment", e[e.CDATASequence = 19] = "CDATASequence", e[e.InSpecialComment = 20] = "InSpecialComment", e[e.InCommentLike = 21] = "InCommentLike", e[e.BeforeSpecialS = 22] = "BeforeSpecialS", e[e.BeforeSpecialT = 23] = "BeforeSpecialT", e[e.SpecialStartSequence = 24] = "SpecialStartSequence", e[e.InSpecialTag = 25] = "InSpecialTag", e[e.InEntity = 26] = "InEntity"; })(g || (g = {}));
function Y(e) { return e === E.Space || e === E.NewLine || e === E.Tab || e === E.FormFeed || e === E.CarriageReturn; }
function Wt(e) { return e === E.Slash || e === E.Gt || Y(e); }
function Ja(e) { return e >= E.LowerA && e <= E.LowerZ || e >= E.UpperA && e <= E.UpperZ; }
var _;
(function (e) { e[e.NoValue = 0] = "NoValue", e[e.Unquoted = 1] = "Unquoted", e[e.Single = 2] = "Single", e[e.Double = 3] = "Double"; })(_ || (_ = {}));
var H = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, gt = (function () {
    function gt(_b, a) {
        var _c = _b.xmlMode, t = _c === void 0 ? !1 : _c, _d = _b.decodeEntities, u = _d === void 0 ? !0 : _d;
        var _this = this;
        this.cbs = a, this.state = g.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = g.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = t, this.decodeEntities = u, this.entityDecoder = new mt(t ? $t : _t, function (n, s) { return _this.emitCodePoint(n, s); });
    }
    gt.prototype.reset = function () { this.state = g.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = g.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    gt.prototype.write = function (t) { this.offset += this.buffer.length, this.buffer = t, this.parse(); };
    gt.prototype.end = function () { this.running && this.finish(); };
    gt.prototype.pause = function () { this.running = !1; };
    gt.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    gt.prototype.stateText = function (t) { t === E.Lt || !this.decodeEntities && this.fastForwardTo(E.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = g.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && t === E.Amp && this.startEntity(); };
    gt.prototype.stateSpecialStartSequence = function (t) { var u = this.sequenceIndex === this.currentSequence.length; if (!(u ? Wt(t) : (t | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!u) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = g.InTagName, this.stateInTagName(t); };
    gt.prototype.stateInSpecialTag = function (t) { if (this.sequenceIndex === this.currentSequence.length) {
        if (t === E.Gt || Y(t)) {
            var u = this.index - this.currentSequence.length;
            if (this.sectionStart < u) {
                var a = this.index;
                this.index = u, this.cbs.ontext(this.sectionStart, u), this.index = a;
            }
            this.isSpecial = !1, this.sectionStart = u + 2, this.stateInClosingTagName(t);
            return;
        }
        this.sequenceIndex = 0;
    } (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === H.TitleEnd ? this.decodeEntities && t === E.Amp && this.startEntity() : this.fastForwardTo(E.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === E.Lt); };
    gt.prototype.stateCDATASequence = function (t) { t === H.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === H.Cdata.length && (this.state = g.InCommentLike, this.currentSequence = H.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = g.InDeclaration, this.stateInDeclaration(t)); };
    gt.prototype.fastForwardTo = function (t) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === t)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    gt.prototype.stateInCommentLike = function (t) { t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === H.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = g.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    gt.prototype.isTagStartChar = function (t) { return this.xmlMode ? !Wt(t) : Ja(t); };
    gt.prototype.startSpecial = function (t, u) { this.isSpecial = !0, this.currentSequence = t, this.sequenceIndex = u, this.state = g.SpecialStartSequence; };
    gt.prototype.stateBeforeTagName = function (t) { if (t === E.ExclamationMark)
        this.state = g.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (t === E.Questionmark)
        this.state = g.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(t)) {
        var u = t | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = g.InTagName : u === H.ScriptEnd[2] ? this.state = g.BeforeSpecialS : u === H.TitleEnd[2] ? this.state = g.BeforeSpecialT : this.state = g.InTagName;
    }
    else
        t === E.Slash ? this.state = g.BeforeClosingTagName : (this.state = g.Text, this.stateText(t)); };
    gt.prototype.stateInTagName = function (t) { Wt(t) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = g.BeforeAttributeName, this.stateBeforeAttributeName(t)); };
    gt.prototype.stateBeforeClosingTagName = function (t) { Y(t) || (t === E.Gt ? this.state = g.Text : (this.state = this.isTagStartChar(t) ? g.InClosingTagName : g.InSpecialComment, this.sectionStart = this.index)); };
    gt.prototype.stateInClosingTagName = function (t) { (t === E.Gt || Y(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = g.AfterClosingTagName, this.stateAfterClosingTagName(t)); };
    gt.prototype.stateAfterClosingTagName = function (t) { (t === E.Gt || this.fastForwardTo(E.Gt)) && (this.state = g.Text, this.sectionStart = this.index + 1); };
    gt.prototype.stateBeforeAttributeName = function (t) { t === E.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = g.InSpecialTag, this.sequenceIndex = 0) : this.state = g.Text, this.sectionStart = this.index + 1) : t === E.Slash ? this.state = g.InSelfClosingTag : Y(t) || (this.state = g.InAttributeName, this.sectionStart = this.index); };
    gt.prototype.stateInSelfClosingTag = function (t) { t === E.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = g.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : Y(t) || (this.state = g.BeforeAttributeName, this.stateBeforeAttributeName(t)); };
    gt.prototype.stateInAttributeName = function (t) { (t === E.Eq || Wt(t)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = g.AfterAttributeName, this.stateAfterAttributeName(t)); };
    gt.prototype.stateAfterAttributeName = function (t) { t === E.Eq ? this.state = g.BeforeAttributeValue : t === E.Slash || t === E.Gt ? (this.cbs.onattribend(_.NoValue, this.sectionStart), this.sectionStart = -1, this.state = g.BeforeAttributeName, this.stateBeforeAttributeName(t)) : Y(t) || (this.cbs.onattribend(_.NoValue, this.sectionStart), this.state = g.InAttributeName, this.sectionStart = this.index); };
    gt.prototype.stateBeforeAttributeValue = function (t) { t === E.DoubleQuote ? (this.state = g.InAttributeValueDq, this.sectionStart = this.index + 1) : t === E.SingleQuote ? (this.state = g.InAttributeValueSq, this.sectionStart = this.index + 1) : Y(t) || (this.sectionStart = this.index, this.state = g.InAttributeValueNq, this.stateInAttributeValueNoQuotes(t)); };
    gt.prototype.handleInAttributeValue = function (t, u) { t === u || !this.decodeEntities && this.fastForwardTo(u) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(u === E.DoubleQuote ? _.Double : _.Single, this.index + 1), this.state = g.BeforeAttributeName) : this.decodeEntities && t === E.Amp && this.startEntity(); };
    gt.prototype.stateInAttributeValueDoubleQuotes = function (t) { this.handleInAttributeValue(t, E.DoubleQuote); };
    gt.prototype.stateInAttributeValueSingleQuotes = function (t) { this.handleInAttributeValue(t, E.SingleQuote); };
    gt.prototype.stateInAttributeValueNoQuotes = function (t) { Y(t) || t === E.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(_.Unquoted, this.index), this.state = g.BeforeAttributeName, this.stateBeforeAttributeName(t)) : this.decodeEntities && t === E.Amp && this.startEntity(); };
    gt.prototype.stateBeforeDeclaration = function (t) { t === E.OpeningSquareBracket ? (this.state = g.CDATASequence, this.sequenceIndex = 0) : this.state = t === E.Dash ? g.BeforeComment : g.InDeclaration; };
    gt.prototype.stateInDeclaration = function (t) { (t === E.Gt || this.fastForwardTo(E.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = g.Text, this.sectionStart = this.index + 1); };
    gt.prototype.stateInProcessingInstruction = function (t) { (t === E.Gt || this.fastForwardTo(E.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = g.Text, this.sectionStart = this.index + 1); };
    gt.prototype.stateBeforeComment = function (t) { t === E.Dash ? (this.state = g.InCommentLike, this.currentSequence = H.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = g.InDeclaration; };
    gt.prototype.stateInSpecialComment = function (t) { (t === E.Gt || this.fastForwardTo(E.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = g.Text, this.sectionStart = this.index + 1); };
    gt.prototype.stateBeforeSpecialS = function (t) { var u = t | 32; u === H.ScriptEnd[3] ? this.startSpecial(H.ScriptEnd, 4) : u === H.StyleEnd[3] ? this.startSpecial(H.StyleEnd, 4) : (this.state = g.InTagName, this.stateInTagName(t)); };
    gt.prototype.stateBeforeSpecialT = function (t) { var u = t | 32; u === H.TitleEnd[3] ? this.startSpecial(H.TitleEnd, 4) : u === H.TextareaEnd[3] ? this.startSpecial(H.TextareaEnd, 4) : (this.state = g.InTagName, this.stateInTagName(t)); };
    gt.prototype.startEntity = function () { this.baseState = this.state, this.state = g.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? G.Strict : this.baseState === g.Text || this.baseState === g.InSpecialTag ? G.Legacy : G.Attribute); };
    gt.prototype.stateInEntity = function () { var t = this.entityDecoder.write(this.buffer, this.index - this.offset); t >= 0 ? (this.state = this.baseState, t === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    gt.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === g.Text || this.state === g.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === g.InAttributeValueDq || this.state === g.InAttributeValueSq || this.state === g.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    gt.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    gt.prototype.parse = function () { for (; this.shouldContinue();) {
        var t = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case g.Text: {
                this.stateText(t);
                break;
            }
            case g.SpecialStartSequence: {
                this.stateSpecialStartSequence(t);
                break;
            }
            case g.InSpecialTag: {
                this.stateInSpecialTag(t);
                break;
            }
            case g.CDATASequence: {
                this.stateCDATASequence(t);
                break;
            }
            case g.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(t);
                break;
            }
            case g.InAttributeName: {
                this.stateInAttributeName(t);
                break;
            }
            case g.InCommentLike: {
                this.stateInCommentLike(t);
                break;
            }
            case g.InSpecialComment: {
                this.stateInSpecialComment(t);
                break;
            }
            case g.BeforeAttributeName: {
                this.stateBeforeAttributeName(t);
                break;
            }
            case g.InTagName: {
                this.stateInTagName(t);
                break;
            }
            case g.InClosingTagName: {
                this.stateInClosingTagName(t);
                break;
            }
            case g.BeforeTagName: {
                this.stateBeforeTagName(t);
                break;
            }
            case g.AfterAttributeName: {
                this.stateAfterAttributeName(t);
                break;
            }
            case g.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(t);
                break;
            }
            case g.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(t);
                break;
            }
            case g.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(t);
                break;
            }
            case g.AfterClosingTagName: {
                this.stateAfterClosingTagName(t);
                break;
            }
            case g.BeforeSpecialS: {
                this.stateBeforeSpecialS(t);
                break;
            }
            case g.BeforeSpecialT: {
                this.stateBeforeSpecialT(t);
                break;
            }
            case g.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(t);
                break;
            }
            case g.InSelfClosingTag: {
                this.stateInSelfClosingTag(t);
                break;
            }
            case g.InDeclaration: {
                this.stateInDeclaration(t);
                break;
            }
            case g.BeforeDeclaration: {
                this.stateBeforeDeclaration(t);
                break;
            }
            case g.BeforeComment: {
                this.stateBeforeComment(t);
                break;
            }
            case g.InProcessingInstruction: {
                this.stateInProcessingInstruction(t);
                break;
            }
            case g.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    gt.prototype.finish = function () { this.state === g.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    gt.prototype.handleTrailingData = function () { var t = this.buffer.length + this.offset; this.sectionStart >= t || (this.state === g.InCommentLike ? this.currentSequence === H.CdataEnd ? this.cbs.oncdata(this.sectionStart, t, 0) : this.cbs.oncomment(this.sectionStart, t, 0) : this.state === g.InTagName || this.state === g.BeforeAttributeName || this.state === g.BeforeAttributeValue || this.state === g.AfterAttributeName || this.state === g.InAttributeName || this.state === g.InAttributeValueSq || this.state === g.InAttributeValueDq || this.state === g.InAttributeValueNq || this.state === g.InClosingTagName || this.cbs.ontext(this.sectionStart, t)); };
    gt.prototype.emitCodePoint = function (t, u) { this.baseState !== g.Text && this.baseState !== g.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.onattribentity(t)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.ontextentity(t, this.sectionStart)); };
    return gt;
}());
var xt = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), L = new Set(["p"]), ku = new Set(["thead", "tbody"]), qu = new Set(["dd", "dt"]), Cu = new Set(["rt", "rp"]), Qa = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", L], ["h1", L], ["h2", L], ["h3", L], ["h4", L], ["h5", L], ["h6", L], ["select", xt], ["input", xt], ["output", xt], ["button", xt], ["datalist", xt], ["textarea", xt], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", qu], ["dt", qu], ["address", L], ["article", L], ["aside", L], ["blockquote", L], ["details", L], ["div", L], ["dl", L], ["fieldset", L], ["figcaption", L], ["figure", L], ["footer", L], ["form", L], ["header", L], ["hr", L], ["main", L], ["nav", L], ["ol", L], ["pre", L], ["section", L], ["table", L], ["ul", L], ["rt", Cu], ["rp", Cu], ["tbody", ku], ["tfoot", ku]]), Za = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Du = new Set(["math", "svg"]), Lu = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), Ka = /\s|\//, Dt = (function () {
    function Dt(t, u) {
        if (u === void 0) { u = {}; }
        var a, n, s, o, h, p;
        this.options = u, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = t != null ? t : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (a = u.lowerCaseTags) !== null && a !== void 0 ? a : this.htmlMode, this.lowerCaseAttributeNames = (n = u.lowerCaseAttributeNames) !== null && n !== void 0 ? n : this.htmlMode, this.recognizeSelfClosing = (s = u.recognizeSelfClosing) !== null && s !== void 0 ? s : !this.htmlMode, this.tokenizer = new ((o = u.Tokenizer) !== null && o !== void 0 ? o : gt)(this.options, this), this.foreignContext = [!this.htmlMode], (p = (h = this.cbs).onparserinit) === null || p === void 0 || p.call(h, this);
    }
    Dt.prototype.ontext = function (t, u) { var a, n; var s = this.getSlice(t, u); this.endIndex = u - 1, (n = (a = this.cbs).ontext) === null || n === void 0 || n.call(a, s), this.startIndex = u; };
    Dt.prototype.ontextentity = function (t, u) { var a, n; this.endIndex = u - 1, (n = (a = this.cbs).ontext) === null || n === void 0 || n.call(a, pt(t)), this.startIndex = u; };
    Dt.prototype.isVoidElement = function (t) { return this.htmlMode && Za.has(t); };
    Dt.prototype.onopentagname = function (t, u) { this.endIndex = u; var a = this.getSlice(t, u); this.lowerCaseTagNames && (a = a.toLowerCase()), this.emitOpenTag(a); };
    Dt.prototype.emitOpenTag = function (t) { var u, a, n, s; this.openTagStart = this.startIndex, this.tagname = t; var o = this.htmlMode && Qa.get(t); if (o)
        for (; this.stack.length > 0 && o.has(this.stack[0]);) {
            var h = this.stack.shift();
            (a = (u = this.cbs).onclosetag) === null || a === void 0 || a.call(u, h, !0);
        } this.isVoidElement(t) || (this.stack.unshift(t), this.htmlMode && (Du.has(t) ? this.foreignContext.unshift(!0) : Lu.has(t) && this.foreignContext.unshift(!1))), (s = (n = this.cbs).onopentagname) === null || s === void 0 || s.call(n, t), this.cbs.onopentag && (this.attribs = {}); };
    Dt.prototype.endOpenTag = function (t) { var u, a; this.startIndex = this.openTagStart, this.attribs && ((a = (u = this.cbs).onopentag) === null || a === void 0 || a.call(u, this.tagname, this.attribs, t), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    Dt.prototype.onopentagend = function (t) { this.endIndex = t, this.endOpenTag(!1), this.startIndex = t + 1; };
    Dt.prototype.onclosetag = function (t, u) { var a, n, s, o, h, p, m, x; this.endIndex = u; var T = this.getSlice(t, u); if (this.lowerCaseTagNames && (T = T.toLowerCase()), this.htmlMode && (Du.has(T) || Lu.has(T)) && this.foreignContext.shift(), this.isVoidElement(T))
        this.htmlMode && T === "br" && ((o = (s = this.cbs).onopentagname) === null || o === void 0 || o.call(s, "br"), (p = (h = this.cbs).onopentag) === null || p === void 0 || p.call(h, "br", {}, !0), (x = (m = this.cbs).onclosetag) === null || x === void 0 || x.call(m, "br", !1));
    else {
        var v = this.stack.indexOf(T);
        if (v !== -1)
            for (var S = 0; S <= v; S++) {
                var N = this.stack.shift();
                (n = (a = this.cbs).onclosetag) === null || n === void 0 || n.call(a, N, S !== v);
            }
        else
            this.htmlMode && T === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = u + 1; };
    Dt.prototype.onselfclosingtag = function (t) { this.endIndex = t, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = t + 1) : this.onopentagend(t); };
    Dt.prototype.closeCurrentTag = function (t) { var u, a; var n = this.tagname; this.endOpenTag(t), this.stack[0] === n && ((a = (u = this.cbs).onclosetag) === null || a === void 0 || a.call(u, n, !t), this.stack.shift()); };
    Dt.prototype.onattribname = function (t, u) { this.startIndex = t; var a = this.getSlice(t, u); this.attribname = this.lowerCaseAttributeNames ? a.toLowerCase() : a; };
    Dt.prototype.onattribdata = function (t, u) { this.attribvalue += this.getSlice(t, u); };
    Dt.prototype.onattribentity = function (t) { this.attribvalue += pt(t); };
    Dt.prototype.onattribend = function (t, u) { var a, n; this.endIndex = u, (n = (a = this.cbs).onattribute) === null || n === void 0 || n.call(a, this.attribname, this.attribvalue, t === _.Double ? '"' : t === _.Single ? "'" : t === _.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    Dt.prototype.getInstructionName = function (t) { var u = t.search(Ka), a = u < 0 ? t : t.substr(0, u); return this.lowerCaseTagNames && (a = a.toLowerCase()), a; };
    Dt.prototype.ondeclaration = function (t, u) { this.endIndex = u; var a = this.getSlice(t, u); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(a);
        this.cbs.onprocessinginstruction("!".concat(n), "!".concat(a));
    } this.startIndex = u + 1; };
    Dt.prototype.onprocessinginstruction = function (t, u) { this.endIndex = u; var a = this.getSlice(t, u); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(a);
        this.cbs.onprocessinginstruction("?".concat(n), "?".concat(a));
    } this.startIndex = u + 1; };
    Dt.prototype.oncomment = function (t, u, a) { var n, s, o, h; this.endIndex = u, (s = (n = this.cbs).oncomment) === null || s === void 0 || s.call(n, this.getSlice(t, u - a)), (h = (o = this.cbs).oncommentend) === null || h === void 0 || h.call(o), this.startIndex = u + 1; };
    Dt.prototype.oncdata = function (t, u, a) { var n, s, o, h, p, m, x, T, v, S; this.endIndex = u; var N = this.getSlice(t, u - a); !this.htmlMode || this.options.recognizeCDATA ? ((s = (n = this.cbs).oncdatastart) === null || s === void 0 || s.call(n), (h = (o = this.cbs).ontext) === null || h === void 0 || h.call(o, N), (m = (p = this.cbs).oncdataend) === null || m === void 0 || m.call(p)) : ((T = (x = this.cbs).oncomment) === null || T === void 0 || T.call(x, "[CDATA[".concat(N, "]]")), (S = (v = this.cbs).oncommentend) === null || S === void 0 || S.call(v)), this.startIndex = u + 1; };
    Dt.prototype.onend = function () { var t, u; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var a = 0; a < this.stack.length; a++)
            this.cbs.onclosetag(this.stack[a], !0);
    } (u = (t = this.cbs).onend) === null || u === void 0 || u.call(t); };
    Dt.prototype.reset = function () { var t, u, a, n; (u = (t = this.cbs).onreset) === null || u === void 0 || u.call(t), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (n = (a = this.cbs).onparserinit) === null || n === void 0 || n.call(a, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    Dt.prototype.parseComplete = function (t) { this.reset(), this.end(t); };
    Dt.prototype.getSlice = function (t, u) { for (; t - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var a = this.buffers[0].slice(t - this.bufferOffset, u - this.bufferOffset); for (; u - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), a += this.buffers[0].slice(0, u - this.bufferOffset); return a; };
    Dt.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    Dt.prototype.write = function (t) { var u, a; if (this.ended) {
        (a = (u = this.cbs).onerror) === null || a === void 0 || a.call(u, new Error(".write() after done!"));
        return;
    } this.buffers.push(t), this.tokenizer.running && (this.tokenizer.write(t), this.writeIndex++); };
    Dt.prototype.end = function (t) { var u, a; if (this.ended) {
        (a = (u = this.cbs).onerror) === null || a === void 0 || a.call(u, new Error(".end() after done!"));
        return;
    } t && this.write(t), this.ended = !0, this.tokenizer.end(); };
    Dt.prototype.pause = function () { this.tokenizer.pause(); };
    Dt.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    Dt.prototype.parseChunk = function (t) { this.write(t); };
    Dt.prototype.done = function (t) { this.end(t); };
    return Dt;
}());
var Xt = {};
Ae(Xt, { CDATA: function () { return Oe; }, Comment: function () { return Le; }, Directive: function () { return De; }, Doctype: function () { return Re; }, ElementType: function () { return q; }, Root: function () { return qe; }, Script: function () { return Ie; }, Style: function () { return Ue; }, Tag: function () { return Me; }, Text: function () { return Ce; }, isTag: function () { return ke; } });
var q;
(function (e) { e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"; })(q || (q = {}));
function ke(e) { return e.type === q.Tag || e.type === q.Script || e.type === q.Style; }
var qe = q.Root, Ce = q.Text, De = q.Directive, Le = q.Comment, Ie = q.Script, Ue = q.Style, Me = q.Tag, Oe = q.CDATA, Re = q.Doctype;
var Jt = (function () {
    function Jt() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(Jt.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (t) { this.parent = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jt.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (t) { this.prev = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jt.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (t) { this.next = t; },
        enumerable: false,
        configurable: true
    });
    Jt.prototype.cloneNode = function (t) {
        if (t === void 0) { t = !1; }
        return Iu(this, t);
    };
    return Jt;
}()), Lt = (function (_super) {
    __extends(Lt, _super);
    function Lt(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = t;
        return _this;
    }
    Object.defineProperty(Lt.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (t) { this.data = t; },
        enumerable: false,
        configurable: true
    });
    return Lt;
}(Jt)), yt = (function (_super) {
    __extends(yt, _super);
    function yt() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = q.Text;
        return _this;
    }
    Object.defineProperty(yt.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return yt;
}(Lt)), It = (function (_super) {
    __extends(It, _super);
    function It() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = q.Comment;
        return _this;
    }
    Object.defineProperty(It.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return It;
}(Lt)), Ut = (function (_super) {
    __extends(Ut, _super);
    function Ut(t, u) {
        var _this = this;
        _this = _super.call(this, u) || this, _this.name = t, _this.type = q.Directive;
        return _this;
    }
    Object.defineProperty(Ut.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return Ut;
}(Lt)), Mt = (function (_super) {
    __extends(Mt, _super);
    function Mt(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = t;
        return _this;
    }
    Object.defineProperty(Mt.prototype, "firstChild", {
        get: function () { var t; return (t = this.children[0]) !== null && t !== void 0 ? t : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mt.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mt.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (t) { this.children = t; },
        enumerable: false,
        configurable: true
    });
    return Mt;
}(Jt)), Ot = (function (_super) {
    __extends(Ot, _super);
    function Ot() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = q.CDATA;
        return _this;
    }
    Object.defineProperty(Ot.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return Ot;
}(Mt)), wt = (function (_super) {
    __extends(wt, _super);
    function wt() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = q.Root;
        return _this;
    }
    Object.defineProperty(wt.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return wt;
}(Mt)), Rt = (function (_super) {
    __extends(Rt, _super);
    function Rt(t, u, a, n) {
        if (a === void 0) { a = []; }
        if (n === void 0) { n = t === "script" ? q.Script : t === "style" ? q.Style : q.Tag; }
        var _this = this;
        _this = _super.call(this, a) || this, _this.name = t, _this.attribs = u, _this.type = n;
        return _this;
    }
    Object.defineProperty(Rt.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rt.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (t) { this.name = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rt.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (t) { var u, a; return { name: t, value: _this.attribs[t], namespace: (u = _this["x-attribsNamespace"]) === null || u === void 0 ? void 0 : u[t], prefix: (a = _this["x-attribsPrefix"]) === null || a === void 0 ? void 0 : a[t] }; });
        },
        enumerable: false,
        configurable: true
    });
    return Rt;
}(Mt));
function D(e) { return ke(e); }
function vt(e) { return e.type === q.CDATA; }
function J(e) { return e.type === q.Text; }
function Bt(e) { return e.type === q.Comment; }
function Ya(e) { return e.type === q.Directive; }
function He(e) { return e.type === q.Root; }
function P(e) { return Object.prototype.hasOwnProperty.call(e, "children"); }
function Iu(e, t) {
    if (t === void 0) { t = !1; }
    var u;
    if (J(e))
        u = new yt(e.data);
    else if (Bt(e))
        u = new It(e.data);
    else if (D(e)) {
        var a = t ? Be(e.children) : [], n_1 = new Rt(e.name, X({}, e.attribs), a);
        a.forEach(function (s) { return s.parent = n_1; }), e.namespace != null && (n_1.namespace = e.namespace), e["x-attribsNamespace"] && (n_1["x-attribsNamespace"] = X({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (n_1["x-attribsPrefix"] = X({}, e["x-attribsPrefix"])), u = n_1;
    }
    else if (vt(e)) {
        var a = t ? Be(e.children) : [], n_2 = new Ot(a);
        a.forEach(function (s) { return s.parent = n_2; }), u = n_2;
    }
    else if (He(e)) {
        var a = t ? Be(e.children) : [], n_3 = new wt(a);
        a.forEach(function (s) { return s.parent = n_3; }), e["x-mode"] && (n_3["x-mode"] = e["x-mode"]), u = n_3;
    }
    else if (Ya(e)) {
        var a = new Ut(e.name, e.data);
        e["x-name"] != null && (a["x-name"] = e["x-name"], a["x-publicId"] = e["x-publicId"], a["x-systemId"] = e["x-systemId"]), u = a;
    }
    else
        throw new Error("Not implemented yet: ".concat(e.type));
    return u.startIndex = e.startIndex, u.endIndex = e.endIndex, e.sourceCodeLocation != null && (u.sourceCodeLocation = e.sourceCodeLocation), u;
}
function Be(e) { var t = e.map(function (u) { return Iu(u, !0); }); for (var u = 1; u < t.length; u++)
    t[u].prev = t[u - 1], t[u - 1].next = t[u]; return t; }
var Uu = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, St = (function () {
    function St(t, u, a) {
        this.dom = [], this.root = new wt(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof u == "function" && (a = u, u = Uu), typeof t == "object" && (u = t, t = void 0), this.callback = t != null ? t : null, this.options = u != null ? u : Uu, this.elementCB = a != null ? a : null;
    }
    St.prototype.onparserinit = function (t) { this.parser = t; };
    St.prototype.onreset = function () { this.dom = [], this.root = new wt(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    St.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    St.prototype.onerror = function (t) { this.handleCallback(t); };
    St.prototype.onclosetag = function () { this.lastNode = null; var t = this.tagStack.pop(); this.options.withEndIndices && (t.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(t); };
    St.prototype.onopentag = function (t, u) { var a = this.options.xmlMode ? q.Tag : void 0, n = new Rt(t, u, void 0, a); this.addNode(n), this.tagStack.push(n); };
    St.prototype.ontext = function (t) { var u = this.lastNode; if (u && u.type === q.Text)
        u.data += t, this.options.withEndIndices && (u.endIndex = this.parser.endIndex);
    else {
        var a = new yt(t);
        this.addNode(a), this.lastNode = a;
    } };
    St.prototype.oncomment = function (t) { if (this.lastNode && this.lastNode.type === q.Comment) {
        this.lastNode.data += t;
        return;
    } var u = new It(t); this.addNode(u), this.lastNode = u; };
    St.prototype.oncommentend = function () { this.lastNode = null; };
    St.prototype.oncdatastart = function () { var t = new yt(""), u = new Ot([t]); this.addNode(u), t.parent = u, this.lastNode = t; };
    St.prototype.oncdataend = function () { this.lastNode = null; };
    St.prototype.onprocessinginstruction = function (t, u) { var a = new Ut(t, u); this.addNode(a); };
    St.prototype.handleCallback = function (t) { if (typeof this.callback == "function")
        this.callback(t, this.dom);
    else if (t)
        throw t; };
    St.prototype.addNode = function (t) { var u = this.tagStack[this.tagStack.length - 1], a = u.children[u.children.length - 1]; this.options.withStartIndices && (t.startIndex = this.parser.startIndex), this.options.withEndIndices && (t.endIndex = this.parser.endIndex), u.children.push(t), a && (t.prev = a, a.next = t), t.parent = u, this.lastNode = null; };
    return St;
}());
var Q = {};
Ae(Q, { DocumentPosition: function () { return $; }, append: function () { return yr; }, appendChild: function () { return xr; }, compareDocumentPosition: function () { return Xu; }, existsOne: function () { return $u; }, filter: function () { return Et; }, find: function () { return ue; }, findAll: function () { return Sr; }, findOne: function () { return ae; }, findOneChild: function () { return vr; }, getAttributeValue: function () { return br; }, getChildren: function () { return te; }, getElementById: function () { return Nr; }, getElements: function () { return Tr; }, getElementsByClassName: function () { return kr; }, getElementsByTagName: function () { return lt; }, getElementsByTagType: function () { return qr; }, getFeed: function () { return Qe; }, getInnerHTML: function () { return hr; }, getName: function () { return mr; }, getOuterHTML: function () { return Gu; }, getParent: function () { return _u; }, getSiblings: function () { return ee; }, getText: function () { return Yt; }, hasAttrib: function () { return pr; }, hasChildren: function () { return P; }, innerText: function () { return Ge; }, isCDATA: function () { return vt; }, isComment: function () { return Bt; }, isDocument: function () { return He; }, isTag: function () { return D; }, isText: function () { return J; }, nextElementSibling: function () { return _e; }, prepend: function () { return We; }, prependChild: function () { return wr; }, prevElementSibling: function () { return $e; }, removeElement: function () { return tt; }, removeSubsets: function () { return Cr; }, replaceElement: function () { return gr; }, testElement: function () { return Er; }, textContent: function () { return rt; }, uniqueSort: function () { return Je; } });
function Qt(e) { for (var t = 1; t < e.length; t++)
    e[t][0] += e[t - 1][0] + 1; return e; }
var tr = new Map(Qt([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(Qt([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(Qt([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(Qt([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var Pe = /["&'<>$\x80-\uFFFF]/g, Mu = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), Ou = String.prototype.codePointAt != null ? function (e, t) { return e.codePointAt(t); } : function (e, t) { return (e.charCodeAt(t) & 64512) === 55296 ? (e.charCodeAt(t) - 55296) * 1024 + e.charCodeAt(t + 1) - 56320 + 65536 : e.charCodeAt(t); };
function Ht(e) { var t = "", u = 0, a; for (; (a = Pe.exec(e)) !== null;) {
    var n = a.index, s = e.charCodeAt(n), o = Mu.get(s);
    o !== void 0 ? (t += e.substring(u, n) + o, u = n + 1) : (t += "".concat(e.substring(u, n), "&#x").concat(Ou(e, n).toString(16), ";"), u = Pe.lastIndex += +((s & 64512) === 55296));
} return t + e.substr(u); }
function Fe(e, t) { return function (a) { var n, s = 0, o = ""; for (; n = e.exec(a);)
    s !== n.index && (o += a.substring(s, n.index)), o += t.get(n[0].charCodeAt(0)), s = n.index + 1; return o + a.substring(s); }; }
var Ru = Fe(/[&<>'"]/g, Mu), Zt = Fe(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), Kt = Fe(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var Bu;
(function (e) { e[e.XML = 0] = "XML", e[e.HTML = 1] = "HTML"; })(Bu || (Bu = {}));
var Hu;
(function (e) { e[e.UTF8 = 0] = "UTF8", e[e.ASCII = 1] = "ASCII", e[e.Extensive = 2] = "Extensive", e[e.Attribute = 3] = "Attribute", e[e.Text = 4] = "Text"; })(Hu || (Hu = {}));
var Vu = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (e) { return [e.toLowerCase(), e]; })), ju = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (e) { return [e.toLowerCase(), e]; }));
var ur = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function ar(e) { return e.replace(/"/g, "&quot;"); }
function rr(e, t) { var u; if (!e)
    return; var a = ((u = t.encodeEntities) !== null && u !== void 0 ? u : t.decodeEntities) === !1 ? ar : t.xmlMode || t.encodeEntities !== "utf8" ? Ht : Zt; return Object.keys(e).map(function (n) { var s, o; var h = (s = e[n]) !== null && s !== void 0 ? s : ""; return t.xmlMode === "foreign" && (n = (o = ju.get(n)) !== null && o !== void 0 ? o : n), !t.emptyAttrs && !t.xmlMode && h === "" ? n : "".concat(n, "=\"").concat(a(h), "\""); }).join(" "); }
var zu = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function ze(e, t) {
    if (t === void 0) { t = {}; }
    var u = "length" in e ? e : [e], a = "";
    for (var n = 0; n < u.length; n++)
        a += nr(u[n], t);
    return a;
}
var At = ze;
function nr(e, t) { switch (e.type) {
    case qe: return ze(e.children, t);
    case Re:
    case De: return or(e);
    case Le: return dr(e);
    case Oe: return fr(e);
    case Ie:
    case Ue:
    case Me: return cr(e, t);
    case Ce: return lr(e, t);
} }
var ir = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), sr = new Set(["svg", "math"]);
function cr(e, t) { var u; t.xmlMode === "foreign" && (e.name = (u = Vu.get(e.name)) !== null && u !== void 0 ? u : e.name, e.parent && ir.has(e.parent.name) && (t = ct(X({}, t), { xmlMode: !1 }))), !t.xmlMode && sr.has(e.name) && (t = ct(X({}, t), { xmlMode: "foreign" })); var a = "<".concat(e.name), n = rr(e.attribs, t); return n && (a += " ".concat(n)), e.children.length === 0 && (t.xmlMode ? t.selfClosingTags !== !1 : t.selfClosingTags && zu.has(e.name)) ? (t.xmlMode || (a += " "), a += "/>") : (a += ">", e.children.length > 0 && (a += ze(e.children, t)), (t.xmlMode || !zu.has(e.name)) && (a += "</".concat(e.name, ">"))), a; }
function or(e) { return "<".concat(e.data, ">"); }
function lr(e, t) { var u; var a = e.data || ""; return ((u = t.encodeEntities) !== null && u !== void 0 ? u : t.decodeEntities) !== !1 && !(!t.xmlMode && e.parent && ur.has(e.parent.name)) && (a = t.xmlMode || t.encodeEntities !== "utf8" ? Ht(a) : Kt(a)), a; }
function fr(e) { return "<![CDATA[".concat(e.children[0].data, "]]>"); }
function dr(e) { return "<!--".concat(e.data, "-->"); }
function Gu(e, t) { return At(e, t); }
function hr(e, t) { return P(e) ? e.children.map(function (u) { return Gu(u, t); }).join("") : ""; }
function Yt(e) {
    return Array.isArray(e) ? e.map(Yt).join("") : D(e) ? e.name === "br" ? "\n" : Yt(e.children) : vt(e) ? Yt(e.children) : J(e) ? e.data : "";
}
function rt(e) { return Array.isArray(e) ? e.map(rt).join("") : P(e) && !Bt(e) ? rt(e.children) : J(e) ? e.data : ""; }
function Ge(e) { return Array.isArray(e) ? e.map(Ge).join("") : P(e) && (e.type === q.Tag || vt(e)) ? Ge(e.children) : J(e) ? e.data : ""; }
function te(e) { return P(e) ? e.children : []; }
function _u(e) { return e.parent || null; }
function ee(e) {
    var _b, _c;
    var t = _u(e);
    if (t != null)
        return te(t);
    var u = [e], a = e.prev, n = e.next;
    for (; a != null;)
        u.unshift(a), _b = a, a = _b.prev;
    for (; n != null;)
        u.push(n), _c = n, n = _c.next;
    return u;
}
function br(e, t) { var u; return (u = e.attribs) === null || u === void 0 ? void 0 : u[t]; }
function pr(e, t) { return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, t) && e.attribs[t] != null; }
function mr(e) { return e.name; }
function _e(e) {
    var _b;
    var t = e.next;
    for (; t !== null && !D(t);)
        (_b = t, t = _b.next);
    return t;
}
function $e(e) {
    var _b;
    var t = e.prev;
    for (; t !== null && !D(t);)
        (_b = t, t = _b.prev);
    return t;
}
function tt(e) { if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var t = e.parent.children, u = t.lastIndexOf(e);
    u >= 0 && t.splice(u, 1);
} e.next = null, e.prev = null, e.parent = null; }
function gr(e, t) { var u = t.prev = e.prev; u && (u.next = t); var a = t.next = e.next; a && (a.prev = t); var n = t.parent = e.parent; if (n) {
    var s = n.children;
    s[s.lastIndexOf(e)] = t, e.parent = null;
} }
function xr(e, t) { if (tt(t), t.next = null, t.parent = e, e.children.push(t) > 1) {
    var u = e.children[e.children.length - 2];
    u.next = t, t.prev = u;
}
else
    t.prev = null; }
function yr(e, t) { tt(t); var u = e.parent, a = e.next; if (t.next = a, t.prev = e, e.next = t, t.parent = u, a) {
    if (a.prev = t, u) {
        var n = u.children;
        n.splice(n.lastIndexOf(a), 0, t);
    }
}
else
    u && u.children.push(t); }
function wr(e, t) { if (tt(t), t.parent = e, t.prev = null, e.children.unshift(t) !== 1) {
    var u = e.children[1];
    u.prev = t, t.next = u;
}
else
    t.next = null; }
function We(e, t) { tt(t); var u = e.parent; if (u) {
    var a = u.children;
    a.splice(a.indexOf(e), 0, t);
} e.prev && (e.prev.next = t), t.parent = u, t.prev = e.prev, t.next = e, e.prev = t; }
function Et(e, t, u, a) {
    if (u === void 0) { u = !0; }
    if (a === void 0) { a = 1 / 0; }
    return ue(e, Array.isArray(t) ? t : [t], u, a);
}
function ue(e, t, u, a) { var n = [], s = [Array.isArray(t) ? t : [t]], o = [0]; for (;;) {
    if (o[0] >= s[0].length) {
        if (o.length === 1)
            return n;
        s.shift(), o.shift();
        continue;
    }
    var h = s[0][o[0]++];
    if (e(h) && (n.push(h), --a <= 0))
        return n;
    u && P(h) && h.children.length > 0 && (o.unshift(0), s.unshift(h.children));
} }
function vr(e, t) { return t.find(e); }
function ae(e, t, u) {
    if (u === void 0) { u = !0; }
    var a = Array.isArray(t) ? t : [t];
    for (var n = 0; n < a.length; n++) {
        var s = a[n];
        if (D(s) && e(s))
            return s;
        if (u && P(s) && s.children.length > 0) {
            var o = ae(e, s.children, !0);
            if (o)
                return o;
        }
    }
    return null;
}
function $u(e, t) { return (Array.isArray(t) ? t : [t]).some(function (u) { return D(u) && e(u) || P(u) && $u(e, u.children); }); }
function Sr(e, t) { var u = [], a = [Array.isArray(t) ? t : [t]], n = [0]; for (;;) {
    if (n[0] >= a[0].length) {
        if (a.length === 1)
            return u;
        a.shift(), n.shift();
        continue;
    }
    var s = a[0][n[0]++];
    D(s) && e(s) && u.push(s), P(s) && s.children.length > 0 && (n.unshift(0), a.unshift(s.children));
} }
var re = { tag_name: function (e) { return typeof e == "function" ? function (t) { return D(t) && e(t.name); } : e === "*" ? D : function (t) { return D(t) && t.name === e; }; }, tag_type: function (e) { return typeof e == "function" ? function (t) { return e(t.type); } : function (t) { return t.type === e; }; }, tag_contains: function (e) { return typeof e == "function" ? function (t) { return J(t) && e(t.data); } : function (t) { return J(t) && t.data === e; }; } };
function Xe(e, t) { return typeof t == "function" ? function (u) { return D(u) && t(u.attribs[e]); } : function (u) { return D(u) && u.attribs[e] === t; }; }
function Ar(e, t) { return function (u) { return e(u) || t(u); }; }
function Wu(e) { var t = Object.keys(e).map(function (u) { var a = e[u]; return Object.prototype.hasOwnProperty.call(re, u) ? re[u](a) : Xe(u, a); }); return t.length === 0 ? null : t.reduce(Ar); }
function Er(e, t) { var u = Wu(e); return u ? u(t) : !0; }
function Tr(e, t, u, a) {
    if (a === void 0) { a = 1 / 0; }
    var n = Wu(e);
    return n ? Et(n, t, u, a) : [];
}
function Nr(e, t, u) {
    if (u === void 0) { u = !0; }
    return Array.isArray(t) || (t = [t]), ae(Xe("id", e), t, u);
}
function lt(e, t, u, a) {
    if (u === void 0) { u = !0; }
    if (a === void 0) { a = 1 / 0; }
    return Et(re.tag_name(e), t, u, a);
}
function kr(e, t, u, a) {
    if (u === void 0) { u = !0; }
    if (a === void 0) { a = 1 / 0; }
    return Et(Xe("class", e), t, u, a);
}
function qr(e, t, u, a) {
    if (u === void 0) { u = !0; }
    if (a === void 0) { a = 1 / 0; }
    return Et(re.tag_type(e), t, u, a);
}
function Cr(e) { var t = e.length; for (; --t >= 0;) {
    var u = e[t];
    if (t > 0 && e.lastIndexOf(u, t - 1) >= 0) {
        e.splice(t, 1);
        continue;
    }
    for (var a = u.parent; a; a = a.parent)
        if (e.includes(a)) {
            e.splice(t, 1);
            break;
        }
} return e; }
var $;
(function (e) { e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.PRECEDING = 2] = "PRECEDING", e[e.FOLLOWING = 4] = "FOLLOWING", e[e.CONTAINS = 8] = "CONTAINS", e[e.CONTAINED_BY = 16] = "CONTAINED_BY"; })($ || ($ = {}));
function Xu(e, t) { var u = [], a = []; if (e === t)
    return 0; var n = P(e) ? e : e.parent; for (; n;)
    u.unshift(n), n = n.parent; for (n = P(t) ? t : t.parent; n;)
    a.unshift(n), n = n.parent; var s = Math.min(u.length, a.length), o = 0; for (; o < s && u[o] === a[o];)
    o++; if (o === 0)
    return $.DISCONNECTED; var h = u[o - 1], p = h.children, m = u[o], x = a[o]; return p.indexOf(m) > p.indexOf(x) ? h === t ? $.FOLLOWING | $.CONTAINED_BY : $.FOLLOWING : h === e ? $.PRECEDING | $.CONTAINS : $.PRECEDING; }
function Je(e) { return e = e.filter(function (t, u, a) { return !a.includes(t, u + 1); }), e.sort(function (t, u) { var a = Xu(t, u); return a & $.PRECEDING ? -1 : a & $.FOLLOWING ? 1 : 0; }), e; }
function Qe(e) { var t = ne(Mr, e); return t ? t.name === "feed" ? Dr(t) : Lr(t) : null; }
function Dr(e) { var t; var u = e.children, a = { type: "atom", items: lt("entry", u).map(function (o) { var h; var p = o.children, m = { media: Ju(p) }; V(m, "id", "id", p), V(m, "title", "title", p); var x = (h = ne("link", p)) === null || h === void 0 ? void 0 : h.attribs.href; x && (m.link = x); var T = nt("summary", p) || nt("content", p); T && (m.description = T); var v = nt("updated", p); return v && (m.pubDate = new Date(v)), m; }) }; V(a, "id", "id", u), V(a, "title", "title", u); var n = (t = ne("link", u)) === null || t === void 0 ? void 0 : t.attribs.href; n && (a.link = n), V(a, "description", "subtitle", u); var s = nt("updated", u); return s && (a.updated = new Date(s)), V(a, "author", "email", u, !0), a; }
function Lr(e) { var t, u; var a = (u = (t = ne("channel", e.children)) === null || t === void 0 ? void 0 : t.children) !== null && u !== void 0 ? u : [], n = { type: e.name.substr(0, 3), id: "", items: lt("item", e.children).map(function (o) { var h = o.children, p = { media: Ju(h) }; V(p, "id", "guid", h), V(p, "title", "title", h), V(p, "link", "link", h), V(p, "description", "description", h); var m = nt("pubDate", h) || nt("dc:date", h); return m && (p.pubDate = new Date(m)), p; }) }; V(n, "title", "title", a), V(n, "link", "link", a), V(n, "description", "description", a); var s = nt("lastBuildDate", a); return s && (n.updated = new Date(s)), V(n, "author", "managingEditor", a, !0), n; }
var Ir = ["url", "type", "lang"], Ur = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function Ju(e) { return lt("media:content", e).map(function (t) {
    var e_4, _b, e_5, _c;
    var u = t.attribs, a = { medium: u.medium, isDefault: !!u.isDefault };
    try {
        for (var Ir_1 = __values(Ir), Ir_1_1 = Ir_1.next(); !Ir_1_1.done; Ir_1_1 = Ir_1.next()) {
            var n = Ir_1_1.value;
            u[n] && (a[n] = u[n]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (Ir_1_1 && !Ir_1_1.done && (_b = Ir_1.return)) _b.call(Ir_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var Ur_1 = __values(Ur), Ur_1_1 = Ur_1.next(); !Ur_1_1.done; Ur_1_1 = Ur_1.next()) {
            var n = Ur_1_1.value;
            u[n] && (a[n] = parseInt(u[n], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (Ur_1_1 && !Ur_1_1.done && (_c = Ur_1.return)) _c.call(Ur_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return u.expression && (a.expression = u.expression), a;
}); }
function ne(e, t) { return lt(e, t, !0, 1)[0]; }
function nt(e, t, u) {
    if (u === void 0) { u = !1; }
    return rt(lt(e, t, u, 1)).trim();
}
function V(e, t, u, a, n) {
    if (n === void 0) { n = !1; }
    var s = nt(u, a, n);
    s && (e[t] = s);
}
function Mr(e) { return e === "rss" || e === "feed" || e === "rdf:RDF"; }
function Qu(e, t) { var u = new St(void 0, t); return new Dt(u, t).end(e), u.root; }
var A;
(function (e) { e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"; })(A || (A = {}));
var U;
(function (e) { e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"; })(U || (U = {}));
var Zu = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, Or = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, Rr = new Map([[126, U.Element], [94, U.Start], [36, U.End], [42, U.Any], [33, U.Not], [124, U.Hyphen]]), Br = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function ft(e) { switch (e.type) {
    case A.Adjacent:
    case A.Child:
    case A.Descendant:
    case A.Parent:
    case A.Sibling:
    case A.ColumnCombinator: return !0;
    default: return !1;
} }
var Hr = new Set(["contains", "icontains"]);
function Pr(e, t, u) { var a = parseInt(t, 16) - 65536; return a !== a || u ? t : a < 0 ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320); }
function Pt(e) { return e.replace(Or, Pr); }
function Ze(e) { return e === 39 || e === 34; }
function Ku(e) { return e === 32 || e === 9 || e === 10 || e === 12 || e === 13; }
function it(e) { var t = [], u = Yu(t, "".concat(e), 0); if (u < e.length)
    throw new Error("Unmatched selector: ".concat(e.slice(u))); return t; }
function Yu(e, t, u) { var a = []; function n(v) { var S = t.slice(u + v).match(Zu); if (!S)
    throw new Error("Expected name, found ".concat(t.slice(u))); var _b = __read(S, 1), N = _b[0]; return u += v + N.length, Pt(N); } function s(v) { for (u += v; u < t.length && Ku(t.charCodeAt(u));)
    u++; } function o() { u += 1; var v = u, S = 1; for (; S > 0 && u < t.length; u++)
    t.charCodeAt(u) === 40 && !h(u) ? S++ : t.charCodeAt(u) === 41 && !h(u) && S--; if (S)
    throw new Error("Parenthesis not matched"); return Pt(t.slice(v, u - 1)); } function h(v) { var S = 0; for (; t.charCodeAt(--v) === 92;)
    S++; return (S & 1) === 1; } function p() { if (a.length > 0 && ft(a[a.length - 1]))
    throw new Error("Did not expect successive traversals."); } function m(v) { if (a.length > 0 && a[a.length - 1].type === A.Descendant) {
    a[a.length - 1].type = v;
    return;
} p(), a.push({ type: v }); } function x(v, S) { a.push({ type: A.Attribute, name: v, action: S, value: n(1), namespace: null, ignoreCase: "quirks" }); } function T() { if (a.length && a[a.length - 1].type === A.Descendant && a.pop(), a.length === 0)
    throw new Error("Empty sub-selector"); e.push(a); } if (s(0), t.length === u)
    return u; t: for (; u < t.length;) {
    var v = t.charCodeAt(u);
    switch (v) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (a.length === 0 || a[0].type !== A.Descendant) && (p(), a.push({ type: A.Descendant })), s(1);
            break;
        }
        case 62: {
            m(A.Child), s(1);
            break;
        }
        case 60: {
            m(A.Parent), s(1);
            break;
        }
        case 126: {
            m(A.Sibling), s(1);
            break;
        }
        case 43: {
            m(A.Adjacent), s(1);
            break;
        }
        case 46: {
            x("class", U.Element);
            break;
        }
        case 35: {
            x("id", U.Equals);
            break;
        }
        case 91: {
            s(1);
            var S = void 0, N = null;
            t.charCodeAt(u) === 124 ? S = n(1) : t.startsWith("*|", u) ? (N = "*", S = n(2)) : (S = n(0), t.charCodeAt(u) === 124 && t.charCodeAt(u + 1) !== 61 && (N = S, S = n(1))), s(0);
            var C = U.Exists, F = Rr.get(t.charCodeAt(u));
            if (F) {
                if (C = F, t.charCodeAt(u + 1) !== 61)
                    throw new Error("Expected `=`");
                s(2);
            }
            else
                t.charCodeAt(u) === 61 && (C = U.Equals, s(1));
            var z = "", K = null;
            if (C !== "exists") {
                if (Ze(t.charCodeAt(u))) {
                    var d = t.charCodeAt(u), y = u + 1;
                    for (; y < t.length && (t.charCodeAt(y) !== d || h(y));)
                        y += 1;
                    if (t.charCodeAt(y) !== d)
                        throw new Error("Attribute value didn't end");
                    z = Pt(t.slice(u + 1, y)), u = y + 1;
                }
                else {
                    var d = u;
                    for (; u < t.length && (!Ku(t.charCodeAt(u)) && t.charCodeAt(u) !== 93 || h(u));)
                        u += 1;
                    z = Pt(t.slice(d, u));
                }
                s(0);
                var w = t.charCodeAt(u) | 32;
                w === 115 ? (K = !1, s(1)) : w === 105 && (K = !0, s(1));
            }
            if (t.charCodeAt(u) !== 93)
                throw new Error("Attribute selector didn't terminate");
            u += 1;
            var M = { type: A.Attribute, name: S, action: C, value: z, namespace: N, ignoreCase: K };
            a.push(M);
            break;
        }
        case 58: {
            if (t.charCodeAt(u + 1) === 58) {
                a.push({ type: A.PseudoElement, name: n(2).toLowerCase(), data: t.charCodeAt(u) === 40 ? o() : null });
                continue;
            }
            var S = n(1).toLowerCase(), N = null;
            if (t.charCodeAt(u) === 40)
                if (Br.has(S)) {
                    if (Ze(t.charCodeAt(u + 1)))
                        throw new Error("Pseudo-selector ".concat(S, " cannot be quoted"));
                    if (N = [], u = Yu(N, t, u + 1), t.charCodeAt(u) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(S, " (").concat(t, ")"));
                    u += 1;
                }
                else {
                    if (N = o(), Hr.has(S)) {
                        var C = N.charCodeAt(0);
                        C === N.charCodeAt(N.length - 1) && Ze(C) && (N = N.slice(1, -1));
                    }
                    N = Pt(N);
                }
            a.push({ type: A.Pseudo, name: S, data: N });
            break;
        }
        case 44: {
            T(), a = [], s(1);
            break;
        }
        default: {
            if (t.startsWith("/*", u)) {
                var C = t.indexOf("*/", u + 2);
                if (C < 0)
                    throw new Error("Comment was not terminated");
                u = C + 2, a.length === 0 && s(0);
                break;
            }
            var S = null, N = void 0;
            if (v === 42)
                u += 1, N = "*";
            else if (v === 124) {
                if (N = "", t.charCodeAt(u + 1) === 124) {
                    m(A.ColumnCombinator), s(2);
                    break;
                }
            }
            else if (Zu.test(t.slice(u)))
                N = n(0);
            else
                break t;
            t.charCodeAt(u) === 124 && t.charCodeAt(u + 1) !== 124 && (S = N, t.charCodeAt(u + 1) === 42 ? (N = "*", u += 2) : N = n(1)), a.push(N === "*" ? { type: A.Universal, namespace: S } : { type: A.Tag, name: N, namespace: S });
        }
    }
} return T(), u; }
var cu = ot(st(), 1);
var et = ot(st(), 1);
var ea = new Map([[A.Universal, 50], [A.Tag, 30], [A.Attribute, 1], [A.Pseudo, 0]]);
function Ft(e) { return !ea.has(e.type); }
var Fr = new Map([[U.Exists, 10], [U.Equals, 8], [U.Not, 7], [U.Start, 6], [U.End, 6], [U.Any, 5]]);
function Ke(e) { var t = e.map(ua); for (var u = 1; u < e.length; u++) {
    var a = t[u];
    if (!(a < 0))
        for (var n = u - 1; n >= 0 && a < t[n]; n--) {
            var s = e[n + 1];
            e[n + 1] = e[n], e[n] = s, t[n + 1] = t[n], t[n] = a;
        }
} }
function ua(e) { var t, u; var a = (t = ea.get(e.type)) !== null && t !== void 0 ? t : -1; return e.type === A.Attribute ? (a = (u = Fr.get(e.action)) !== null && u !== void 0 ? u : 4, e.action === U.Equals && e.name === "id" && (a = 9), e.ignoreCase && (a >>= 1)) : e.type === A.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? a = 0 : Array.isArray(e.data) ? (a = Math.min.apply(Math, __spreadArray([], __read(e.data.map(function (n) { return Math.min.apply(Math, __spreadArray([], __read(n.map(ua)), false)); })), false)), a < 0 && (a = 0)) : a = 2 : a = 3), a; }
var Vt = ot(st(), 1), Vr = /[-[\]{}()*+?.,\\^$|#\s]/g;
function aa(e) { return e.replace(Vr, "\\$&"); }
var jr = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function dt(e, t) { return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!t.quirksMode : !t.xmlMode && jr.has(e.name); }
var ra = { equals: function (e, t, u) { var a = u.adapter, n = t.name, s = t.value; return dt(t, u) ? (s = s.toLowerCase(), function (o) { var h = a.getAttributeValue(o, n); return h != null && h.length === s.length && h.toLowerCase() === s && e(o); }) : function (o) { return a.getAttributeValue(o, n) === s && e(o); }; }, hyphen: function (e, t, u) { var a = u.adapter, n = t.name, s = t.value, o = s.length; return dt(t, u) ? (s = s.toLowerCase(), function (p) { var m = a.getAttributeValue(p, n); return m != null && (m.length === o || m.charAt(o) === "-") && m.substr(0, o).toLowerCase() === s && e(p); }) : function (p) { var m = a.getAttributeValue(p, n); return m != null && (m.length === o || m.charAt(o) === "-") && m.substr(0, o) === s && e(p); }; }, element: function (e, t, u) { var a = u.adapter, n = t.name, s = t.value; if (/\s/.test(s))
        return Vt.default.falseFunc; var o = new RegExp("(?:^|\\s)".concat(aa(s), "(?:$|\\s)"), dt(t, u) ? "i" : ""); return function (p) { var m = a.getAttributeValue(p, n); return m != null && m.length >= s.length && o.test(m) && e(p); }; }, exists: function (e, _b, _c) {
        var t = _b.name;
        var u = _c.adapter;
        return function (a) { return u.hasAttrib(a, t) && e(a); };
    }, start: function (e, t, u) { var a = u.adapter, n = t.name, s = t.value, o = s.length; return o === 0 ? Vt.default.falseFunc : dt(t, u) ? (s = s.toLowerCase(), function (h) { var p = a.getAttributeValue(h, n); return p != null && p.length >= o && p.substr(0, o).toLowerCase() === s && e(h); }) : function (h) { var p; return !!(!((p = a.getAttributeValue(h, n)) === null || p === void 0) && p.startsWith(s)) && e(h); }; }, end: function (e, t, u) { var a = u.adapter, n = t.name, s = t.value, o = -s.length; return o === 0 ? Vt.default.falseFunc : dt(t, u) ? (s = s.toLowerCase(), function (h) { var p; return ((p = a.getAttributeValue(h, n)) === null || p === void 0 ? void 0 : p.substr(o).toLowerCase()) === s && e(h); }) : function (h) { var p; return !!(!((p = a.getAttributeValue(h, n)) === null || p === void 0) && p.endsWith(s)) && e(h); }; }, any: function (e, t, u) { var a = u.adapter, n = t.name, s = t.value; if (s === "")
        return Vt.default.falseFunc; if (dt(t, u)) {
        var o_1 = new RegExp(aa(s), "i");
        return function (p) { var m = a.getAttributeValue(p, n); return m != null && m.length >= s.length && o_1.test(m) && e(p); };
    } return function (o) { var h; return !!(!((h = a.getAttributeValue(o, n)) === null || h === void 0) && h.includes(s)) && e(o); }; }, not: function (e, t, u) { var a = u.adapter, n = t.name, s = t.value; return s === "" ? function (o) { return !!a.getAttributeValue(o, n) && e(o); } : dt(t, u) ? (s = s.toLowerCase(), function (o) { var h = a.getAttributeValue(o, n); return (h == null || h.length !== s.length || h.toLowerCase() !== s) && e(o); }) : function (o) { return a.getAttributeValue(o, n) !== s && e(o); }; } };
var zr = new Set([9, 10, 12, 13, 32]), na = 48, Gr = 57;
function ia(e) { if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0]; if (e === "odd")
    return [2, 1]; var t = 0, u = 0, a = s(), n = o(); if (t < e.length && e.charAt(t) === "n" && (t++, u = a * (n != null ? n : 1), h(), t < e.length ? (a = s(), h(), n = o()) : a = n = 0), n === null || t < e.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(e, "')")); return [u, a * n]; function s() { return e.charAt(t) === "-" ? (t++, -1) : (e.charAt(t) === "+" && t++, 1); } function o() { var p = t, m = 0; for (; t < e.length && e.charCodeAt(t) >= na && e.charCodeAt(t) <= Gr;)
    m = m * 10 + (e.charCodeAt(t) - na), t++; return t === p ? null : m; } function h() { for (; t < e.length && zr.has(e.charCodeAt(t));)
    t++; } }
var Ye = ot(st(), 1);
function sa(e) { var t = e[0], u = e[1] - 1; if (u < 0 && t <= 0)
    return Ye.default.falseFunc; if (t === -1)
    return function (s) { return s <= u; }; if (t === 0)
    return function (s) { return s === u; }; if (t === 1)
    return u < 0 ? Ye.default.trueFunc : function (s) { return s >= u; }; var a = Math.abs(t), n = (u % a + a) % a; return t > 1 ? function (s) { return s >= u && s % a === n; } : function (s) { return s <= u && s % a === n; }; }
function Tt(e) { return sa(ia(e)); }
var j = ot(st(), 1);
function ie(e, t) { return function (u) { var a = t.getParent(u); return a != null && t.isTag(a) && e(u); }; }
var Nt = { contains: function (e, t, _b) {
        var u = _b.adapter;
        return function (n) { return e(n) && u.getText(n).includes(t); };
    }, icontains: function (e, t, _b) {
        var u = _b.adapter;
        var a = t.toLowerCase();
        return function (s) { return e(s) && u.getText(s).toLowerCase().includes(a); };
    }, "nth-child": function (e, t, _b) {
        var u = _b.adapter, a = _b.equals;
        var n = Tt(t);
        return n === j.default.falseFunc ? j.default.falseFunc : n === j.default.trueFunc ? ie(e, u) : function (o) { var h = u.getSiblings(o), p = 0; for (var m = 0; m < h.length && !a(o, h[m]); m++)
            u.isTag(h[m]) && p++; return n(p) && e(o); };
    }, "nth-last-child": function (e, t, _b) {
        var u = _b.adapter, a = _b.equals;
        var n = Tt(t);
        return n === j.default.falseFunc ? j.default.falseFunc : n === j.default.trueFunc ? ie(e, u) : function (o) { var h = u.getSiblings(o), p = 0; for (var m = h.length - 1; m >= 0 && !a(o, h[m]); m--)
            u.isTag(h[m]) && p++; return n(p) && e(o); };
    }, "nth-of-type": function (e, t, _b) {
        var u = _b.adapter, a = _b.equals;
        var n = Tt(t);
        return n === j.default.falseFunc ? j.default.falseFunc : n === j.default.trueFunc ? ie(e, u) : function (o) { var h = u.getSiblings(o), p = 0; for (var m = 0; m < h.length; m++) {
            var x = h[m];
            if (a(o, x))
                break;
            u.isTag(x) && u.getName(x) === u.getName(o) && p++;
        } return n(p) && e(o); };
    }, "nth-last-of-type": function (e, t, _b) {
        var u = _b.adapter, a = _b.equals;
        var n = Tt(t);
        return n === j.default.falseFunc ? j.default.falseFunc : n === j.default.trueFunc ? ie(e, u) : function (o) { var h = u.getSiblings(o), p = 0; for (var m = h.length - 1; m >= 0; m--) {
            var x = h[m];
            if (a(o, x))
                break;
            u.isTag(x) && u.getName(x) === u.getName(o) && p++;
        } return n(p) && e(o); };
    }, root: function (e, t, _b) {
        var u = _b.adapter;
        return function (a) { var n = u.getParent(a); return (n == null || !u.isTag(n)) && e(a); };
    }, scope: function (e, t, u, a) { var n = u.equals; return !a || a.length === 0 ? Nt.root(e, t, u) : a.length === 1 ? function (s) { return n(a[0], s) && e(s); } : function (s) { return a.includes(s) && e(s); }; }, hover: tu("isHovered"), visited: tu("isVisited"), active: tu("isActive") };
function tu(e) { return function (u, a, _b) {
    var n = _b.adapter;
    var s = n[e];
    return typeof s != "function" ? j.default.falseFunc : function (h) { return s(h) && u(h); };
}; }
var jt = { empty: function (e, _b) {
        var t = _b.adapter;
        return !t.getChildren(e).some(function (u) { return t.isTag(u) || t.getText(u) !== ""; });
    }, "first-child": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        if (t.prevElementSibling)
            return t.prevElementSibling(e) == null;
        var a = t.getSiblings(e).find(function (n) { return t.isTag(n); });
        return a != null && u(e, a);
    }, "last-child": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var a = t.getSiblings(e);
        for (var n = a.length - 1; n >= 0; n--) {
            if (u(e, a[n]))
                return !0;
            if (t.isTag(a[n]))
                break;
        }
        return !1;
    }, "first-of-type": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var a = t.getSiblings(e), n = t.getName(e);
        for (var s = 0; s < a.length; s++) {
            var o = a[s];
            if (u(e, o))
                return !0;
            if (t.isTag(o) && t.getName(o) === n)
                break;
        }
        return !1;
    }, "last-of-type": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var a = t.getSiblings(e), n = t.getName(e);
        for (var s = a.length - 1; s >= 0; s--) {
            var o = a[s];
            if (u(e, o))
                return !0;
            if (t.isTag(o) && t.getName(o) === n)
                break;
        }
        return !1;
    }, "only-of-type": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var a = t.getName(e);
        return t.getSiblings(e).every(function (n) { return u(e, n) || !t.isTag(n) || t.getName(n) !== a; });
    }, "only-child": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        return t.getSiblings(e).every(function (a) { return u(e, a) || !t.isTag(a); });
    } };
function eu(e, t, u, a) { if (u === null) {
    if (e.length > a)
        throw new Error("Pseudo-class :".concat(t, " requires an argument"));
}
else if (e.length === a)
    throw new Error("Pseudo-class :".concat(t, " doesn't have any arguments")); }
var se = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var W = ot(st(), 1);
var ru = {};
function nu(e, t) { return e === W.default.falseFunc ? W.default.falseFunc : function (u) { return t.isTag(u) && e(u); }; }
function iu(e, t) { var u = t.getSiblings(e); if (u.length <= 1)
    return []; var a = u.indexOf(e); return a < 0 || a === u.length - 1 ? [] : u.slice(a + 1).filter(t.isTag); }
function au(e) { return { xmlMode: !!e.xmlMode, lowerCaseAttributeNames: !!e.lowerCaseAttributeNames, lowerCaseTags: !!e.lowerCaseTags, quirksMode: !!e.quirksMode, cacheResults: !!e.cacheResults, pseudos: e.pseudos, adapter: e.adapter, equals: e.equals }; }
var uu = function (e, t, u, a, n) { var s = n(t, au(u), a); return s === W.default.trueFunc ? e : s === W.default.falseFunc ? W.default.falseFunc : function (o) { return s(o) && e(o); }; }, ce = { is: uu, matches: uu, where: uu, not: function (e, t, u, a, n) { var s = n(t, au(u), a); return s === W.default.falseFunc ? e : s === W.default.trueFunc ? W.default.falseFunc : function (o) { return !s(o) && e(o); }; }, has: function (e, t, u, a, n) { var s = u.adapter, o = au(u); o.relativeSelector = !0; var h = t.some(function (x) { return x.some(Ft); }) ? [ru] : void 0, p = n(t, o, h); if (p === W.default.falseFunc)
        return W.default.falseFunc; var m = nu(p, s); if (h && p !== W.default.trueFunc) {
        var _b = p.shouldTestNextSiblings, x_1 = _b === void 0 ? !1 : _b;
        return function (T) { if (!e(T))
            return !1; h[0] = T; var v = s.getChildren(T), S = x_1 ? __spreadArray(__spreadArray([], __read(v), false), __read(iu(T, s)), false) : v; return s.existsOne(m, S); };
    } return function (x) { return e(x) && s.existsOne(m, s.getChildren(x)); }; } };
function ca(e, t, u, a, n) { var s; var o = t.name, h = t.data; if (Array.isArray(h)) {
    if (!(o in ce))
        throw new Error("Unknown pseudo-class :".concat(o, "(").concat(h, ")"));
    return ce[o](e, h, u, a, n);
} var p = (s = u.pseudos) === null || s === void 0 ? void 0 : s[o], m = typeof p == "string" ? p : se[o]; if (typeof m == "string") {
    if (h != null)
        throw new Error("Pseudo ".concat(o, " doesn't have any arguments"));
    var x = it(m);
    return ce.is(e, x, u, a, n);
} if (typeof p == "function")
    return eu(p, o, h, 1), function (x) { return p(x, h) && e(x); }; if (o in Nt)
    return Nt[o](e, h, u, a); if (o in jt) {
    var x_2 = jt[o];
    return eu(x_2, o, h, 2), function (T) { return x_2(T, u, h) && e(T); };
} throw new Error("Unknown pseudo-class :".concat(o)); }
function su(e, t) { var u = t.getParent(e); return u && t.isTag(u) ? u : null; }
function oa(e, t, u, a, n) { var s = u.adapter, o = u.equals; switch (t.type) {
    case A.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case A.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case A.Attribute: {
        if (t.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!u.xmlMode || u.lowerCaseAttributeNames) && (t.name = t.name.toLowerCase()), ra[t.action](e, t, u);
    }
    case A.Pseudo: return ca(e, t, u, a, n);
    case A.Tag: {
        if (t.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var h_1 = t.name;
        return (!u.xmlMode || u.lowerCaseTags) && (h_1 = h_1.toLowerCase()), function (m) { return s.getName(m) === h_1 && e(m); };
    }
    case A.Descendant: {
        if (u.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (m) { var x = m; for (; x = su(x, s);)
                if (e(x))
                    return !0; return !1; };
        var h_2 = new WeakSet;
        return function (m) { var x = m; for (; x = su(x, s);)
            if (!h_2.has(x)) {
                if (s.isTag(x) && e(x))
                    return !0;
                h_2.add(x);
            } return !1; };
    }
    case "_flexibleDescendant": return function (p) { var m = p; do
        if (e(m))
            return !0;
    while (m = su(m, s)); return !1; };
    case A.Parent: return function (p) { return s.getChildren(p).some(function (m) { return s.isTag(m) && e(m); }); };
    case A.Child: return function (p) { var m = s.getParent(p); return m != null && s.isTag(m) && e(m); };
    case A.Sibling: return function (p) { var m = s.getSiblings(p); for (var x = 0; x < m.length; x++) {
        var T = m[x];
        if (o(p, T))
            break;
        if (s.isTag(T) && e(T))
            return !0;
    } return !1; };
    case A.Adjacent: return s.prevElementSibling ? function (p) { var m = s.prevElementSibling(p); return m != null && e(m); } : function (p) { var m = s.getSiblings(p), x; for (var T = 0; T < m.length; T++) {
        var v = m[T];
        if (o(p, v))
            break;
        s.isTag(v) && (x = v);
    } return !!x && e(x); };
    case A.Universal: {
        if (t.namespace != null && t.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return e;
    }
} }
function la(e, t, u) { var a = oe(e, t, u); return nu(a, t.adapter); }
function oe(e, t, u) { var a = typeof e == "string" ? it(e) : e; return le(a, t, u); }
function fa(e) { return e.type === A.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(function (t) { return t.some(fa); })); }
var _r = { type: A.Descendant }, $r = { type: "_flexibleDescendant" }, Wr = { type: A.Pseudo, name: "scope", data: null };
function Xr(e, _b, u) {
    var e_6, _c;
    var t = _b.adapter;
    var a = !!(u != null && u.every(function (n) { var s = t.isTag(n) && t.getParent(n); return n === ru || s && t.isTag(s); }));
    try {
        for (var e_7 = __values(e), e_7_1 = e_7.next(); !e_7_1.done; e_7_1 = e_7.next()) {
            var n = e_7_1.value;
            if (!(n.length > 0 && Ft(n[0]) && n[0].type !== A.Descendant))
                if (a && !n.some(fa))
                    n.unshift(_r);
                else
                    continue;
            n.unshift(Wr);
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
function le(e, t, u) { var a; e.forEach(Ke), u = (a = t.context) !== null && a !== void 0 ? a : u; var n = Array.isArray(u), s = u && (Array.isArray(u) ? u : [u]); if (t.relativeSelector !== !1)
    Xr(e, t, s);
else if (e.some(function (p) { return p.length > 0 && Ft(p[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var o = !1, h = e.map(function (p) { if (p.length >= 2) {
    var _b = __read(p, 2), m = _b[0], x = _b[1];
    m.type !== A.Pseudo || m.name !== "scope" || (n && x.type === A.Descendant ? p[1] = $r : (x.type === A.Adjacent || x.type === A.Sibling) && (o = !0));
} return Jr(p, t, s); }).reduce(Qr, et.default.falseFunc); return h.shouldTestNextSiblings = o, h; }
function Jr(e, t, u) { var a; return e.reduce(function (n, s) { return n === et.default.falseFunc ? et.default.falseFunc : oa(n, s, t, u, le); }, (a = t.rootFunc) !== null && a !== void 0 ? a : et.default.trueFunc); }
function Qr(e, t) { return t === et.default.falseFunc || e === et.default.trueFunc ? e : e === et.default.falseFunc || t === et.default.trueFunc ? t : function (a) { return e(a) || t(a); }; }
var da = function (e, t) { return e === t; }, Zr = { adapter: Q, equals: da };
function ha(e) { var t, u, a, n; var s = e != null ? e : Zr; return (t = s.adapter) !== null && t !== void 0 || (s.adapter = Q), (u = s.equals) !== null && u !== void 0 || (s.equals = (n = (a = s.adapter) === null || a === void 0 ? void 0 : a.equals) !== null && n !== void 0 ? n : da), s; }
function ou(e) { return function (u, a, n) { var s = ha(a); return e(u, s, n); }; }
var Si = ou(la), Ai = ou(oe), fe = ou(le);
function ba(e) { return function (u, a, n) { var s = ha(n); typeof u != "function" && (u = oe(u, s, a)); var o = de(a, s.adapter, u.shouldTestNextSiblings); return e(u, o, s); }; }
function de(e, t, u) {
    if (u === void 0) { u = !1; }
    return u && (e = Kr(e, t)), Array.isArray(e) ? t.removeSubsets(e) : t.getChildren(e);
}
function Kr(e, t) { var u = Array.isArray(e) ? e.slice(0) : [e], a = u.length; for (var n = 0; n < a; n++) {
    var s = iu(u[n], t);
    u.push.apply(u, __spreadArray([], __read(s), false));
} return u; }
var Ei = ba(function (e, t, u) { return e === cu.default.falseFunc || !t || t.length === 0 ? [] : u.adapter.findAll(e, t); }), Ti = ba(function (e, t, u) { return e === cu.default.falseFunc || !t || t.length === 0 ? null : u.adapter.findOne(e, t); });
var be = ot(st(), 1);
var Yr = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function kt(e) { return e.type !== "pseudo" ? !1 : Yr.has(e.name) ? !0 : e.name === "not" && Array.isArray(e.data) ? e.data.some(function (t) { return t.some(kt); }) : !1; }
function pa(e, t, u) { var a = t != null ? parseInt(t, 10) : NaN; switch (e) {
    case "first": return 1;
    case "nth":
    case "eq": return isFinite(a) ? a >= 0 ? a + 1 : 1 / 0 : 0;
    case "lt": return isFinite(a) ? a >= 0 ? Math.min(a, u) : 1 / 0 : 0;
    case "gt": return isFinite(a) ? 1 / 0 : 0;
    case "odd": return 2 * u;
    case "even": return 2 * u - 1;
    case "last":
    case "not": return 1 / 0;
} }
function ma(e) { for (; e.parent;)
    e = e.parent; return e; }
function he(e) {
    var e_8, _b;
    var t = [], u = [];
    try {
        for (var e_9 = __values(e), e_9_1 = e_9.next(); !e_9_1.done; e_9_1 = e_9.next()) {
            var a = e_9_1.value;
            a.some(kt) ? t.push(a) : u.push(a);
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (e_9_1 && !e_9_1.done && (_b = e_9.return)) _b.call(e_9);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return [u, t];
}
var t0 = { type: A.Universal, namespace: null }, e0 = { type: A.Pseudo, name: "scope", data: null };
function du(e, t, u) {
    if (u === void 0) { u = {}; }
    return u0([e], t, u);
}
function u0(e, t, u) {
    if (u === void 0) { u = {}; }
    if (typeof t == "function")
        return e.some(t);
    var _b = __read(he(it(t)), 2), a = _b[0], n = _b[1];
    return a.length > 0 && e.some(fe(a, u)) || n.some(function (s) { return ga(s, e, u).length > 0; });
}
function a0(e, t, u, a) { var n = typeof u == "string" ? parseInt(u, 10) : NaN; switch (e) {
    case "first":
    case "lt": return t;
    case "last": return t.length > 0 ? [t[t.length - 1]] : t;
    case "nth":
    case "eq": return isFinite(n) && Math.abs(n) < t.length ? [n < 0 ? t[t.length + n] : t[n]] : [];
    case "gt": return isFinite(n) ? t.slice(n + 1) : [];
    case "even": return t.filter(function (s, o) { return o % 2 === 0; });
    case "odd": return t.filter(function (s, o) { return o % 2 === 1; });
    case "not": {
        var s_1 = new Set(r0(u, t, a));
        return t.filter(function (o) { return !s_1.has(o); });
    }
} }
function r0(e, t, u) { if (t.length === 0)
    return []; var _b = __read(he(e), 2), a = _b[0], n = _b[1], s; if (a.length) {
    var o = fu(t, a, u);
    if (n.length === 0)
        return o;
    o.length && (s = new Set(o));
} for (var o = 0; o < n.length && (s == null ? void 0 : s.size) !== t.length; o++) {
    var h = n[o];
    if ((s ? t.filter(function (x) { return D(x) && !s.has(x); }) : t).length === 0)
        break;
    var m = ga(h, t, u);
    if (m.length)
        if (s)
            m.forEach(function (x) { return s.add(x); });
        else {
            if (o === n.length - 1)
                return m;
            s = new Set(m);
        }
} return typeof s != "undefined" ? s.size === t.length ? t : t.filter(function (o) { return s.has(o); }) : []; }
function ga(e, t, u) { var a; if (e.some(ft)) {
    var n = (a = u.root) !== null && a !== void 0 ? a : ma(t[0]), s = ct(X({}, u), { context: t, relativeSelector: !1 });
    return e.push(e0), pe(n, e, s, !0, t.length);
} return pe(t, e, u, !1, t.length); }
function hu(e, t, u, a) {
    if (u === void 0) { u = {}; }
    if (a === void 0) { a = 1 / 0; }
    if (typeof e == "function")
        return xa(t, e);
    var _b = __read(he(it(e)), 2), n = _b[0], s = _b[1], o = s.map(function (h) { return pe(t, h, u, !0, a); });
    return n.length && o.push(lu(t, n, u, a)), o.length === 0 ? [] : o.length === 1 ? o[0] : Je(o.reduce(function (h, p) { return __spreadArray(__spreadArray([], __read(h), false), __read(p), false); }));
}
function pe(e, t, u, a, n) { var s = t.findIndex(kt), o = t.slice(0, s), h = t[s], p = t.length - 1 === s ? n : 1 / 0, m = pa(h.name, h.data, p); if (m === 0)
    return []; var T = (o.length === 0 && !Array.isArray(e) ? te(e).filter(D) : o.length === 0 ? (Array.isArray(e) ? e : [e]).filter(D) : a || o.some(ft) ? lu(e, [o], u, m) : fu(e, [o], u)).slice(0, m), v = a0(h.name, T, h.data, u); if (v.length === 0 || t.length === s + 1)
    return v; var S = t.slice(s + 1), N = S.some(ft); if (N) {
    if (ft(S[0])) {
        var C = S[0].type;
        (C === A.Sibling || C === A.Adjacent) && (v = de(v, Q, !0)), S.unshift(t0);
    }
    u = ct(X({}, u), { relativeSelector: !1, rootFunc: function (C) { return v.includes(C); } });
}
else
    u.rootFunc && u.rootFunc !== be.trueFunc && (u = ct(X({}, u), { rootFunc: be.trueFunc })); return S.some(kt) ? pe(v, S, u, !1, n) : N ? lu(v, [S], u, n) : fu(v, [S], u); }
function lu(e, t, u, a) { var n = fe(t, u, e); return xa(e, n, a); }
function xa(e, t, u) {
    if (u === void 0) { u = 1 / 0; }
    var a = de(e, Q, t.shouldTestNextSiblings);
    return ue(function (n) { return D(n) && t(n); }, a, !0, u);
}
function fu(e, t, u) { var a = (Array.isArray(e) ? e : [e]).filter(D); if (a.length === 0)
    return a; var n = fe(t, u); return n === be.trueFunc ? a : a.filter(n); }
function ya(e) { var t = /^(?:([a-zA-Z][\w+.-]*):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/.exec(e) || []; return { scheme: t[1], auth: t[2], path: t[3] || "", query: t[4], frag: t[5] }; }
function bu(e) { var t = [], u = e.split("/"); for (var a = 0; a < u.length; a++) {
    var n = u[a];
    n === ".." ? (t.length > 1 && t.pop(), a === u.length - 1 && t.push("")) : n === "." ? a === u.length - 1 && t.push("") : t.push(n);
} return t.join("/"); }
function ge(e, t) { t = t == null ? "" : String(t).trim(); var u = ya(t); if (u.scheme || !e)
    return t; var a = ya(String(e)); if (!a.scheme)
    return t; var n = a.auth, s, o; if (u.auth !== void 0)
    n = u.auth, s = bu(u.path), o = u.query;
else if (!u.path)
    s = a.path, o = u.query !== void 0 ? u.query : a.query;
else {
    if (u.path.charAt(0) === "/")
        s = bu(u.path);
    else {
        var h = n !== void 0 && !a.path ? "/" : a.path.slice(0, a.path.lastIndexOf("/") + 1);
        s = bu(h + u.path);
    }
    o = u.query;
} return n !== void 0 && s.charAt(0) !== "/" && (s = "/" + s), a.scheme + ":" + (n !== void 0 ? "//" + n : "") + s + (o !== void 0 ? "?" + o : "") + (u.frag !== void 0 ? "#" + u.frag : ""); }
var me = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function wa(e) { if (typeof btoa == "function")
    return btoa(e); var t = ""; for (var u = 0; u < e.length; u += 3) {
    var a = e.charCodeAt(u), n = e.charCodeAt(u + 1), s = e.charCodeAt(u + 2), o = a << 16 | (n || 0) << 8 | (s || 0);
    t += me[o >> 18 & 63] + me[o >> 12 & 63] + (u + 1 < e.length ? me[o >> 6 & 63] : "=") + (u + 2 < e.length ? me[o & 63] : "=");
} return t; }
var n0 = function (e, t, u) { return hu(e, t, u); }, Ea = function (e, t, u) { return hu(e, t, u, 1)[0] || null; }, Ta = /[\s ]+/g, va = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), i0 = { containsOwn: function (e, t) { return mu(e).toLowerCase().includes(String(t).toLowerCase()); }, matches: function (e, t) { return Sa(t).test(pu(e)); }, matchesOwn: function (e, t) { return Sa(t).test(mu(e)); }, containsData: function (e, t) { return rt(e).includes(t); }, "contains-ci": function (e, t) { return pu(e).toLowerCase().includes(String(t).toLowerCase()); } };
function Sa(e) { try {
    return new RegExp(e);
}
catch (t) {
    return /$^/;
} }
var xe = { pseudos: i0, xmlMode: !1, lowerCaseTags: !0 };
function ye(e) { return String(e).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function pu(e) { if (!e)
    return ""; if (e.type === "text")
    return e.data; var t = "", u = function (a) {
    var e_10, _b;
    try {
        for (var _c = __values(a.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var n = _d.value;
            n.type === "text" ? t += n.data : (n.type === "tag" || n.type === "script" || n.type === "style") && (n.name === "br" ? t += " " : n.type === "tag" && (va.has(n.name) && (t += " "), u(n), va.has(n.name) && (t += " ")));
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_10) throw e_10.error; }
    }
}; return u(e), t.replace(Ta, " ").trim(); }
function mu(e) {
    var e_11, _b;
    var t = "";
    try {
        for (var _c = __values(e.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var u = _d.value;
            u.type === "text" && (t += u.data);
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return t.replace(Ta, " ").trim();
}
function Na(e, t) { if (!t)
    return ""; try {
    return ge(e, t);
}
catch (u) {
    return e ? "" : t;
} }
var ht = (function () {
    function e(t, u) {
        this.node = t, this.doc = u;
    }
    Object.defineProperty(e.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    e.prototype.select = function (t) { return Z.of(n0(ye(t), this.node, xe), this.doc); };
    e.prototype.selectFirst = function (t) { var u = Ea(ye(t), this.node, xe); return u ? new e(u, this.doc) : null; };
    e.prototype.is = function (t) { return du(this.node, ye(t), xe); };
    e.prototype.text = function () { return pu(this.node); };
    e.prototype.ownText = function () { return mu(this.node); };
    e.prototype.wholeText = function () { return rt(this.node); };
    e.prototype.data = function () { return (this.node.children || []).filter(function (t) { return t.type === "text"; }).map(function (t) { return t.data; }).join(""); };
    e.prototype.html = function () { return (this.node.children || []).map(function (t) { return At(t, { decodeEntities: !1 }); }).join("").trim(); };
    e.prototype.outerHtml = function () { return At(this.node, { decodeEntities: !1 }); };
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
        return Na(this.baseUri, this.node.attribs[t.slice(4)] || ""); var a = this.node.attribs[t]; return a == null ? "" : a; };
    e.prototype.absUrl = function (t) { return this.attr("abs:" + t); };
    e.prototype.hasAttr = function (t) { return !!(this.node.attribs && (t.startsWith("abs:") ? t.slice(4) : t) in this.node.attribs); };
    e.prototype.removeAttr = function (t) { return this.node.attribs && delete this.node.attribs[t], this; };
    e.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    e.prototype.dataset = function () {
        var e_12, _b;
        var t = {};
        try {
            for (var _c = __values(Object.entries(this.node.attribs || {})), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _f = __read(_d.value, 2), u = _f[0], a = _f[1];
                u.startsWith("data-") && (t[u.slice(5)] = a);
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
    e.prototype.parents = function () { var t = [], u = this.node.parent; for (; u && u.type !== "root";)
        t.push(u), u = u.parent; return Z.of(t, this.doc); };
    e.prototype.closest = function (t) { var u = this.node; for (; u && u.type !== "root";) {
        if (u.type === "tag" && du(u, ye(t), xe))
            return new e(u, this.doc);
        u = u.parent;
    } return null; };
    e.prototype.children = function () { return Z.of((this.node.children || []).filter(D), this.doc); };
    e.prototype.child = function (t) { var u = (this.node.children || []).filter(D)[t]; return u ? new e(u, this.doc) : null; };
    e.prototype.childrenSize = function () { return (this.node.children || []).filter(D).length; };
    e.prototype.nextElementSibling = function () { var t = _e(this.node); return t ? new e(t, this.doc) : null; };
    e.prototype.previousElementSibling = function () { var t = $e(this.node); return t ? new e(t, this.doc) : null; };
    e.prototype.siblingElements = function () {
        var _this = this;
        return Z.of(ee(this.node).filter(function (t) { return t !== _this.node && D(t); }), this.doc);
    };
    e.prototype.elementSiblingIndex = function () { return ee(this.node).filter(D).indexOf(this.node); };
    e.prototype.getElementsByTag = function (t) { return this.select(t); };
    e.prototype.getElementsByClass = function (t) { return this.select("." + t); };
    e.prototype.getElementById = function (t) { return this.selectFirst("#" + t); };
    e.prototype.remove = function () { return tt(this.node), this; };
    e.prototype.empty = function () { return this.node.children = [], this; };
    e.prototype.textNodes = function () { return (this.node.children || []).filter(function (t) { return t.type === "text"; }).map(function (t) { return ({ text: function () { return t.data; }, toString: function () { return t.data; } }); }); };
    e.prototype.title = function () { var t = this.selectFirst("title"); return t ? t.text() : ""; };
    e.prototype.body = function () { return this.selectFirst("body") || this; };
    e.prototype.head = function () { return this.selectFirst("head") || this; };
    e.prototype.location = function () { return this.baseUri; };
    return e;
}()), xu = Object.create(Array.prototype), Z = { of: gu, prototype: xu };
function gu(e, t) {
    var e_13, _b;
    var u = [];
    try {
        for (var _c = __values(e || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var a = _d.value;
            u.push(a instanceof ht ? a : new ht(a, t));
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return Object.setPrototypeOf(u, xu), u;
}
var Aa = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (e) { return this[e] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (e) { return Z.of(this[e] ? [this[e]] : [], null); }, text: function () { return this.map(function (e) { return e.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (e) { return e.text(); }).filter(Boolean); }, html: function () {
        return this.map(function (e) { return e.html(); }).join("\n");
    }, outerHtml: function () {
        return this.map(function (e) { return e.outerHtml(); }).join("\n");
    }, toString: function () { return this.outerHtml(); }, attr: function (e, t) {
        var e_14, _b;
        if (t !== void 0)
            return this.forEach(function (u) { return u.attr(e, t); }), this;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var u = _d.value;
                if (u.hasAttr(e))
                    return u.attr(e);
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
        var t = gu([]), u = new Set;
        try {
            for (var _d = __values(this), _f = _d.next(); !_f.done; _f = _d.next()) {
                var a = _f.value;
                try {
                    for (var _g = (e_16 = void 0, __values(a.select(e))), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var n = _h.value;
                        u.has(n.node) || (u.add(n.node), t.push(n));
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
                var u = t.selectFirst(e);
                if (u)
                    return u;
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
    }, is: function (e) { return this.some(function (t) { return t.is(e); }); }, not: function (e) { return Z.of(this.filter(function (t) { return !t.is(e); }), null); }, parents: function () {
        var e_18, _b;
        var e = gu([]);
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
    }, next: function () { return Z.of(this.map(function (e) { return e.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return Z.of(this.map(function (e) { return e.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (e) { return e.remove(); }), this; }, empty: function () { return this.forEach(function (e) { return e.empty(); }), this; }, removeAttr: function (e) { return this.forEach(function (t) { return t.removeAttr(e); }), this; } };
try {
    for (var _c = __values(Object.keys(Aa)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var e = _d.value;
        Object.defineProperty(xu, e, { value: Aa[e], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
function we(e, t) { var u = Qu(String(e == null ? "" : e), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), a = new ht(u, null); a.doc = a, a.__base = t || ""; var n = Ea("base[href]", u); return n && n.attribs.href && (a.__base = Na(a.__base, n.attribs.href)), a; }
function ka(e, t) { var u = new Set((t || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), a = we(e), n = function (s) {
    var e_19, _b, e_20, _c;
    try {
        for (var _d = __values((s.children || []).slice()), _f = _d.next(); !_f.done; _f = _d.next()) {
            var o = _f.value;
            if (o.type === "script" || o.type === "style" || o.type === "comment") {
                tt(o);
                continue;
            }
            if (o.type === "tag" && (n(o), !u.has(o.name))) {
                var h = (o.children || []).slice();
                try {
                    for (var h_3 = (e_20 = void 0, __values(h)), h_3_1 = h_3.next(); !h_3_1.done; h_3_1 = h_3.next()) {
                        var p = h_3_1.value;
                        We(o, p);
                    }
                }
                catch (e_20_1) { e_20 = { error: e_20_1 }; }
                finally {
                    try {
                        if (h_3_1 && !h_3_1.done && (_c = h_3.return)) _c.call(h_3);
                    }
                    finally { if (e_20) throw e_20.error; }
                }
                tt(o);
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
}; return n(a.node), At(a.node.children, { decodeEntities: !1 }); }
var zt = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function s0(e) { if (typeof Buffer != "undefined")
    return Buffer.from(e).toString("base64"); var t = ""; for (var u = 0; u < e.length; u++)
    t += String.fromCharCode(e[u]); return wa(t); }
function qa(e) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(e) : Uint8Array.from(unescape(encodeURIComponent(e)), function (t) { return t.charCodeAt(0); }); }
function c0(e) { var t = ""; for (var u = 0; u < e.length; u++) {
    var a = e.charCodeAt(u);
    if (a < 128) {
        t += e[u];
        continue;
    }
    if (a === 128) {
        t += "€";
        continue;
    }
    var n = e.charCodeAt(u + 1);
    a >= 129 && a <= 254 && n >= 64 && n <= 254 && n !== 127 ? (t += __GBK_TABLE[(a - 129) * 190 + (n - 64) - (n > 127 ? 1 : 0)], u++) : t += "�";
} return t; }
var yu = (function () {
    function yu(t, u) {
        this.status = t.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText || String(this.status), this.url = t.url || u.url, this.headers = t.headers || {}, this._raw = t, this.request = { url: u.url, headers: u.headers || {} };
    }
    yu.prototype.header = function (t) { var u = Object.keys(this.headers).find(function (a) { return a.toLowerCase() === String(t).toLowerCase(); }); return u ? this.headers[u] : ""; };
    yu.prototype.text = function (t) { if (t && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(t).toLowerCase()).decode(this._raw.bytes);
        }
        catch (a) { } var u = this._raw.text == null ? "" : String(this._raw.text); return t || (t = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), t && /^(gbk|gb2312|gb18030)$/i.test(String(t)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(u) && !/[^\x00-\xff]/.test(u) ? c0(u) : u; };
    yu.prototype.string = function (t) { return this.text(t); };
    yu.prototype.html = function (t) { return we(this.text(t), this.url); };
    yu.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (t) {
        return null;
    } };
    yu.prototype.base64 = function () { return s0(this._raw.bytes || qa(this.text())); };
    yu.prototype.blob = function () { var t = this; return { size: (this._raw.bytes || qa(this.text())).length, type: this.header("content-type"), base64: function () { return t.base64(); } }; };
    return yu;
}());
function o0(e) {
    var e_21, _b;
    var t = {};
    if (!e)
        return t;
    if (typeof e.forEach == "function" && !Array.isArray(e) && typeof e.entries == "function")
        return e.forEach(function (u, a) { t[a] = u; }), t;
    try {
        for (var _c = __values(Object.keys(e)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var u = _d.value;
            t[u] = String(e[u]);
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
function Da(e, t) { var u = function (o) { return ({ getItem: function (h) { var p = e.storageGet(o + h); return p == null ? null : p; }, setItem: function (h, p) { return e.storageSet(o + h, p == null ? null : String(p)); }, removeItem: function (h) { return e.storageSet(o + h, null); }, clear: function () { return e.storageClear && e.storageClear(o); } }); }, a = "__cookie__", n = {}; n.Response = { success: function (o, h) { return ({ code: 0, data: o === void 0 ? null : o, data2: h === void 0 ? null : h }); }, error: function (o) { return ({ code: 1, data: o == null ? "" : String(o) }); } }, n.fetch = function (h, p) {
    return __awaiter(this, void 0, void 0, function () { var m, C, x, T, v, C, S, N, C_1; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                p = p || {};
                m = String(h);
                if (p.queries) {
                    C = Object.entries(p.queries).map(function (_b) {
                        var _c = __read(_b, 2), F = _c[0], z = _c[1];
                        return encodeURIComponent(F) + "=" + encodeURIComponent(z);
                    }).join("&");
                    C && (m += (m.includes("?") ? "&" : "?") + C);
                }
                x = Object.assign({ "User-Agent": zt }, o0(p.headers)), T = e.storageGet(a);
                T && !Object.keys(x).some(function (C) { return C.toLowerCase() === "cookie"; }) && (x.Cookie = T);
                v = p.body;
                if (v != null && typeof v == "object") {
                    C = Object.keys(x).find(function (F) { return F.toLowerCase() === "content-type"; });
                    C && /json/i.test(x[C]) ? v = JSON.stringify(v) : (v = Object.entries(v).map(function (_b) {
                        var _c = __read(_b, 2), F = _c[0], z = _c[1];
                        return encodeURIComponent(F) + "=" + encodeURIComponent(z);
                    }).join("&"), C || (x["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                S = { url: m, method: (p.method || (v != null ? "POST" : "GET")).toUpperCase(), headers: x, body: v, timeout: p.timeout };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4, e.request(S)];
            case 2:
                N = _b.sent();
                return [3, 4];
            case 3:
                C_1 = _b.sent();
                N = { status: 0, url: m, headers: {}, text: "", error: String(C_1 && C_1.message || C_1) };
                return [3, 4];
            case 4: return [2, new yu(N, S)];
        }
    }); });
}, n.Http = { get: function (o) { return Ca(n, "GET", o); }, post: function (o) { return Ca(n, "POST", o); } }, n.Html = { parse: function (o, h) { return we(o, h || ""); }, clean: function (o, h) { return ka(o, h); } }, n.localStorage = u("ls:"), n.cacheStorage = u("cs:"), n.resumeStorage = { get: function (o) { try {
        var h = e.storageGet("resume:" + o);
        return h && parseFloat(h) || 0;
    }
    catch (p) {
        return 0;
    } }, set: function (o, h) { try {
        e.storageSet("resume:" + o, String(Math.max(0, h || 0)));
    }
    catch (p) { } } }, n.localConfig = { getItem: function (o) { return e.config(o); } }, n.localCookie = { setCookie: function (o) { e.storageSet(a, String(o).split(";")[0]); }, getCookie: function () { return e.storageGet(a) || ""; } }, n.sleep = function (o) { return new Promise(function (h) { return typeof setTimeout == "function" ? setTimeout(h, Math.min(Number(o) || 0, 1e4)) : h(); }); }; var s = function () {
    var o = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        o[_i] = arguments[_i];
    }
    try {
        e.log && e.log(o.map(function (h) { return typeof h == "string" ? h : JSON.stringify(h); }).join(" "));
    }
    catch (h) { }
}; return n.Log = { log: s }, n.console = { log: s, error: s, warn: s, info: s }, n.Console = n.console, n.log = s, n.UserAgent = { system: function () { return zt; }, chrome: function () { return zt; }, android: function () { return zt; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, n.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (e.name || "host") + ")"); } }, n.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, n.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, n.Elements = Z, n.Element = ht, n.__meta = t, n; }
function Ca(e, t, u) { var a = { method: t, url: u, headers: {}, body: void 0, queries: void 0 }, n = { headers: function (s) { return Object.assign(a.headers, s || {}), n; }, header: function (s, o) { return a.headers[s] = o, n; }, params: function (s) { return a.queries = s, n; }, queries: function (s) { return a.queries = s, n; }, body: function (s) { return a.body = s, n; }, html: function (s) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(a.url, a)];
                case 1: return [2, (_b.sent()).html(s)];
            }
        }); });
    }, string: function (s) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(a.url, a)];
                case 1: return [2, (_b.sent()).text(s)];
            }
        }); });
    }, text: function (s) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(a.url, a)];
                case 1: return [2, (_b.sent()).text(s)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(a.url, a)];
                case 1: return [2, (_b.sent()).json()];
            }
        }); });
    } }; return n; }
function bt(e, t) { if (!t)
    return ""; if (t = String(t).trim(), /^data:|^blob:/.test(t))
    return t; if (t.startsWith("//"))
    return "https:" + t; if (typeof __abs == "function")
    return __abs(e, t); try {
    return ge(e, t);
}
catch (u) {
    return t;
} }
var I = function (e) { return e == null ? "" : String(e); }, l0 = function (e) { return e.filter(function (t, u) { return t && e.indexOf(t) === u; }); }, ve = (function () {
    function class_1(t) {
        var u = t.meta, a = t.scripts, n = t.host;
        this.meta = u, this.host = n, this.env = t.env || Da(n, u), this.scripts = a, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return I(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
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
            var a, n, s, o;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        a = this.scripts[t];
                        if (!a)
                            throw new Error("script " + t + " missing");
                        n = function (h) { var p = _this.host.config(h); return p == null ? (_this.meta.configDefaults || {})[h] : p; };
                        return [4, a(this.env, n)];
                    case 1:
                        s = _b.sent();
                        if (typeof s != "function")
                            throw new Error(t + ": execute() not defined");
                        return [4, s.apply(void 0, __spreadArray([], __read(u.map(I)), false))];
                    case 2:
                        o = _b.sent();
                        if (!o)
                            throw new Error(t + ": empty result");
                        if (o.code !== 0)
                            throw new Error(t + ": " + I(o.data || "error"));
                        return [2, o];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (t) { return I(t).replace(/\.js$/, ""); };
    class_1.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () { var t, _b, u_1, u_2; return __generator(this, function (_c) {
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
                    u_1 = _c.sent();
                    this.host.log && this.host.log("home: " + u_1.message);
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
                    u_2 = _c.sent();
                    return [3, 9];
                case 9: return [2, (this.cache.tabs = t.filter(function (u) { return u && u.script; }), this.cache.tabs)];
            }
        }); });
    };
    class_1.prototype.list = function (t, u, a) {
        return __awaiter(this, void 0, void 0, function () {
            var n, s, o, h, p;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        n = t + "|" + u;
                        a = Math.max(1, a | 0);
                        s = a === 1 ? "" : this.tokens[n + "|" + a];
                        if (a > 1 && s == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(t, u, s)];
                    case 1:
                        o = _b.sent(), h = I(o.data2);
                        h && (this.tokens[n + "|" + (a + 1)] = h);
                        p = (o.data || []).filter(Boolean).map(function (m) { return ({ name: I(m.name).trim(), link: bt(m.host || _this.base + "/", m.link), cover: bt(m.host || _this.base + "/", m.cover), description: I(m.description), tag: I(m.tag) }); }).filter(function (m) { return m.name && m.link; });
                        return [2, { items: p, hasNext: !!h && p.length > 0 }];
                }
            });
        });
    };
    class_1.prototype.popular = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    u = _b.sent();
                    return [2, u[0] ? this.list(this.scriptFile(u[0].script), I(u[0].input), t) : this.search("", t)];
            }
        }); });
    };
    class_1.prototype.latest = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    u = _b.sent(), a = u[1] || u[0];
                    return [2, a ? this.list(this.scriptFile(a.script), I(a.input), t) : this.search("", t)];
            }
        }); });
    };
    class_1.prototype.search = function (t, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, this.has("search") ? this.list("search", t, u) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.run("detail", t)];
                case 1:
                    u = (_b.sent()).data || {}, a = [].concat(u.genres || [], u.tags || []).map(function (n) { return typeof n == "string" ? n : n && n.title; }).filter(Boolean);
                    return [2, { name: I(u.name).trim(), cover: bt(u.host || this.base + "/", u.cover), author: I(u.author).trim(), description: La(I(u.description)), detail: La(I(u.detail)), ongoing: u.ongoing !== !1 && u.ongoing !== "false", genres: l0(a.map(function (n) { return String(n).trim(); })), url: t, format: I(u.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var u, a, a_1, a_1_1, n, _b, _c, e_22_1, _d;
            var e_22, _f;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        u = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", t)];
                    case 1:
                        a = (_g.sent()).data || [t];
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 7, 8, 9]);
                        a_1 = __values(a), a_1_1 = a_1.next();
                        _g.label = 3;
                    case 3:
                        if (!!a_1_1.done) return [3, 6];
                        n = a_1_1.value;
                        _c = (_b = u).concat;
                        return [4, this.run("toc", I(n))];
                    case 4:
                        u = _c.apply(_b, [(_g.sent()).data || []]);
                        _g.label = 5;
                    case 5:
                        a_1_1 = a_1.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_22_1 = _g.sent();
                        e_22 = { error: e_22_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (a_1_1 && !a_1_1.done && (_f = a_1.return)) _f.call(a_1);
                        }
                        finally { if (e_22) throw e_22.error; }
                        return [7];
                    case 9: return [3, 13];
                    case 10:
                        _d = this.has("toc");
                        if (!_d) return [3, 12];
                        return [4, this.run("toc", t)];
                    case 11:
                        _d = (u = (_g.sent()).data || []);
                        _g.label = 12;
                    case 12:
                        _d;
                        _g.label = 13;
                    case 13: return [2, u.filter(function (a) { return a && a.url && a.type !== "section"; }).map(function (a, n) { return ({ name: I(a.name).trim() || "#" + (n + 1), url: bt(a.host || _this.base + "/", a.url), pay: !!(a.pay || a.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var u, _b, _c, a, n;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.has("chap") && this.meta.type === "comic")) return [3, 2];
                        return [4, this.run("chap", t)];
                    case 1:
                        _b = u = (_d.sent()).data;
                        return [3, 6];
                    case 2:
                        if (!this.has("page")) return [3, 4];
                        return [4, this.run("page", t)];
                    case 3:
                        _c = u = (_d.sent()).data;
                        return [3, 5];
                    case 4:
                        _c = u = [t];
                        _d.label = 5;
                    case 5:
                        _b = _c;
                        _d.label = 6;
                    case 6:
                        _b, typeof u == "string" && (u = u.split(/[\n,]+/));
                        a = function (s) { return !s || /^data:|loading|lazy|blank|placeholder|spacer|\/nocover|1x1\./i.test(String(s)); }, n = function (s) { if (typeof s == "string")
                            return s; if (!s)
                            return ""; var o = s.link || s.url || s.data, h = Array.isArray(s.fallback) ? s.fallback.filter(Boolean) : []; return a(o) && h.length ? h[0] : o; };
                        return [2, (u || []).map(function (s) { return bt(_this.base + "/", n(s)); }).filter(Boolean)];
                }
            });
        });
    };
    class_1.prototype.content = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.run("chap", t)];
                case 1:
                    u = _b.sent();
                    return [2, { html: I(u.data), title: I(u.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var u, s, a, n, u_3, u_3_1, s, o, h, h_4, h_4_1, p, m, x, T, o_2, e_23_1;
            var e_23, _b, e_24, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        u = [{ title: "Default", data: t }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", t)];
                    case 1:
                        s = (_d.sent()).data;
                        Array.isArray(s) && s.length && (u = s.map(function (o) { return typeof o == "string" ? { title: "Server", data: o } : { title: I(o.title || o.name || "Server"), data: I(o.data || o.url || o.link) }; }));
                        _d.label = 2;
                    case 2:
                        a = this.env && this.env.resumeStorage ? this.env.resumeStorage.get(t) : 0, n = [];
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 10, 11, 12]);
                        u_3 = __values(u), u_3_1 = u_3.next();
                        _d.label = 4;
                    case 4:
                        if (!!u_3_1.done) return [3, 9];
                        s = u_3_1.value;
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 7, , 8]);
                        return [4, this.run("track", s.data)];
                    case 6:
                        o = (_d.sent()).data || {}, h = Array.isArray(o) ? o : [o];
                        try {
                            for (h_4 = (e_24 = void 0, __values(h)), h_4_1 = h_4.next(); !h_4_1.done; h_4_1 = h_4.next()) {
                                p = h_4_1.value;
                                if (!p || !p.data || p.type === "webview")
                                    continue;
                                m = bt(p.host || this.base + "/", p.data), x = a > 0 && !p.data.includes("#t=") && !p.data.includes("&t=") ? (p.data.includes("#") ? "&" : "#") + "t=" + Math.floor(a) : "", T = a > 0 ? " [Tiếp tục " + Math.floor(a / 60) + ":" + ("0" + Math.floor(a % 60)).slice(-2) + "]" : "";
                                n.push({ url: m + x, rawUrl: m, resumeSec: a, quality: s.title + (p.quality ? " " + p.quality : "") + T, headers: p.headers || { Referer: this.base + "/" }, subtitles: (p.subtitles || (p.subtitle ? [{ data: p.subtitle, label: "Sub" }] : [])).map(function (v) { return ({ file: bt(_this.base + "/", v.data || v.file), label: I(v.label || v.language || "Sub") }); }), mimeType: I(p.mimeType) });
                            }
                        }
                        catch (e_24_1) { e_24 = { error: e_24_1 }; }
                        finally {
                            try {
                                if (h_4_1 && !h_4_1.done && (_c = h_4.return)) _c.call(h_4);
                            }
                            finally { if (e_24) throw e_24.error; }
                        }
                        return [3, 8];
                    case 7:
                        o_2 = _d.sent();
                        this.host.log && this.host.log("track " + s.title + ": " + o_2.message);
                        return [3, 8];
                    case 8:
                        u_3_1 = u_3.next();
                        return [3, 4];
                    case 9: return [3, 12];
                    case 10:
                        e_23_1 = _d.sent();
                        e_23 = { error: e_23_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (u_3_1 && !u_3_1.done && (_b = u_3.return)) _b.call(u_3);
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
function La(e) {
    return String(e).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
function qt(e, t) {
    return __awaiter(this, void 0, void 0, function () { var u, a, _b, _c; return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                e = e || [];
                u = [], a = 0;
                _d.label = 1;
            case 1:
                if (!(a < e.length)) return [3, 4];
                _c = (_b = u).push;
                return [4, t(e[a], a, e)];
            case 2:
                _c.apply(_b, [_d.sent()]);
                _d.label = 3;
            case 3:
                a++;
                return [3, 1];
            case 4: return [2, u];
        }
    }); });
}
var ut = { id: "gaumeoteam", name: "Gấu Mèo Team", source: "https://gaumeoteam.com", type: "novel", locale: "vi", nsfw: !1, version: 1, config: { DOMAIN: { title: "Tên miền", subtitle: "Đổi khi trang đổi tên miền", default: "https://gaumeoteam.com", values: ["https://gaumeoteam.com"], mode: "input", format: "text" } }, configDefaults: { DOMAIN: "https://gaumeoteam.com" }, itemType: 2, short: !1, shorts: !1, lnId: "kiritokmn.gaumeoteam", lnIcon: "", lnVersion: "1.3.1" }, Ia = { home: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, a, n, s, o, h, p, m, x, T, v, S, N, C, F, z, K) {
                        return __awaiter(this, void 0, void 0, function () {
                            var M;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        M = t("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function B() {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            return [2, s.success([{ title: "Mới cập nhật", input: "latest", script: "browse.js" }, { title: "Xem nhiều", input: "views", script: "browse.js" }, { title: "Đánh giá cao", input: "rating", script: "browse.js" }, { title: "Truyện mới", input: "new-manga", script: "browse.js" }])];
                                                        }); });
                                                    }
                                                    var w, d, y;
                                                    return __generator(this, function (_b) {
                                                        w = "https://gaumeoteam.com";
                                                        try {
                                                            M && (w = String(M).replace(/\/+$/, ""));
                                                        }
                                                        catch (r) { }
                                                        d = { img: function (r) { if (!r)
                                                                return ""; for (var i = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < i.length; c++) {
                                                                var f = r.attr(i[c]);
                                                                if (f && f.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(f))
                                                                    return d.fix(f.trim());
                                                            } var l = r.attr("data-srcset") || r.attr("srcset"); return l ? d.fix(l.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? w + r : w + "/" + r) : ""; }, text: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(c < i.length)) return [3, 4];
                                                                            return [4, r.select(i[c]).text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, f.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            c++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            i = i || {};
                                                                            c = { Referer: w + "/" };
                                                                            if (i.headers)
                                                                                for (f in i.headers)
                                                                                    c[f] = i.headers[f];
                                                                            return [4, u(r, { method: i.method, headers: c, body: i.body })];
                                                                        case 1:
                                                                            l = _c.sent(), b = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = l && l.status === 429 && b < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(l)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, x(1500 * (b + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, u(r, { method: i.method, headers: c, body: i.body })];
                                                                        case 6:
                                                                            l = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            b++;
                                                                            return [3, 2];
                                                                        case 8: return [2, l];
                                                                    }
                                                                }); });
                                                            }, cf: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, r.text()];
                                                                        case 1:
                                                                            i = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(i.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.ok)
                                                                                return [2, r];
                                                                            return [4, d.cf(r)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + i.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + i);
                                                                    }
                                                                }); });
                                                            }, html: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, i)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.html(i && i.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, i)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (r) { var i = parseInt(r || "1", 10); return isNaN(i) || i < 1 ? 1 : i; }, next: function (r, i) { return r ? String(d.page(i) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, r.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, y = { path: function () { return typeof MADARA != "undefined" && MADARA.path || "manga"; }, card: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, c, f, _b;
                                                                    var _c;
                                                                    return __generator(this, function (_d) {
                                                                        switch (_d.label) {
                                                                            case 0:
                                                                                i = r.select(".post-title a, h3 a, h4 a, .item-summary a").first() || r.select("a").first();
                                                                                if (!i)
                                                                                    return [2, null];
                                                                                return [4, i.text()];
                                                                            case 1:
                                                                                c = (_d.sent()) || i.attr("title") || r.select("img").attr("alt"), f = r.select(".chapter a, .list-chapter .chapter-item a, .latest-chap a, .my-chapter-name a").first();
                                                                                _c = { name: c, link: i.attr("href"), cover: d.img(r.select("img").first()) };
                                                                                if (!f) return [3, 3];
                                                                                return [4, f.text()];
                                                                            case 2:
                                                                                _b = _d.sent();
                                                                                return [3, 4];
                                                                            case 3:
                                                                                _b = "";
                                                                                _d.label = 4;
                                                                            case 4: return [2, (_c.description = _b, _c.host = w, _c)];
                                                                        }
                                                                    });
                                                                });
                                                            }, list: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, c, f, l, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            i = r.select(".c-tabs-item__content, .page-item-detail, .manga-item, .comic-list-item, .comic-block"), c = [], f = {}, l = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(l < i.size())) return [3, 5];
                                                                            _c = (_b = y).card;
                                                                            return [4, i.get(l)];
                                                                        case 2: return [4, _c.apply(_b, [_d.sent()])];
                                                                        case 3:
                                                                            b = _d.sent();
                                                                            b && b.link && !f[b.link] && (f[b.link] = 1, c.push(b));
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 5: return [2, c];
                                                                    }
                                                                }); });
                                                            }, hasNext: function (r, i) { return r.select(".nav-previous a, a.nextpostslink, .wp-pagenavi a.next, a.next.page-numbers, .pagination a.next, a[rel=next]").size() > 0 || r.select('a[href*="/page/' + (i + 1) + '"]').size() > 0; }, browse: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = d.page(i), f = w + "/" + y.path() + "/" + (c > 1 ? "page/" + c + "/" : "") + "?m_orderby=" + (r || "latest");
                                                                            return [4, d.html(f)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, y.list(l)];
                                                                        case 2:
                                                                            b = _b.sent();
                                                                            return [2, s.success(b, d.next(y.hasNext(l, c) && b.length > 0, i))];
                                                                    }
                                                                }); });
                                                            }, search: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!d.isUrl(r)) return [3, 2];
                                                                            return [4, y.byUrl(r, i)];
                                                                        case 1: return [2, _b.sent()];
                                                                        case 2:
                                                                            c = d.page(i), f = w + "/" + (c > 1 ? "page/" + c + "/" : "") + "?s=" + d.enc(r) + "&post_type=wp-manga";
                                                                            return [4, d.html(f)];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            return [4, y.list(l)];
                                                                        case 4:
                                                                            b = _b.sent();
                                                                            return [2, s.success(b, d.next(y.hasNext(l, c) && b.length > 0, i))];
                                                                    }
                                                                }); });
                                                            }, byUrl: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = d.page(i), f = d.fix(r).replace(/\/$/, "") + "/" + (c > 1 ? "page/" + c + "/" : "");
                                                                            return [4, d.html(f)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, y.list(l)];
                                                                        case 2:
                                                                            b = _b.sent();
                                                                            return [2, s.success(b, d.next(y.hasNext(l, c) && b.length > 0, i))];
                                                                    }
                                                                }); });
                                                            }, detail: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, c, f, l, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0: return [4, d.html(r)];
                                                                            case 1:
                                                                                i = _g.sent();
                                                                                return [4, qt(i.select(".genres-content a, .wp-manga-genres a, .manga-genres a"), function (b) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, b.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = b.attr("href"), _b.script = "search.js", _b)];
                                                                                                }
                                                                                            });
                                                                                        });
                                                                                    })];
                                                                            case 2:
                                                                                c = _g.sent();
                                                                                return [4, d.text(i, [".post-status .summary-content", ".manga-status", ".post-content_item:contains(Tình trạng) .summary-content", ".post-content_item:contains(Status) .summary-content"])];
                                                                            case 3:
                                                                                f = _g.sent(), l = i.select(".description-summary .summary__content, .summary__content, .manga-excerpt, .description-summary, .manga-summary").first();
                                                                                _c = (_b = s).success;
                                                                                _f = {};
                                                                                return [4, d.text(i, [".post-title h1", ".post-title h3", "h1"])];
                                                                            case 4:
                                                                                _f.name = _g.sent(), _f.cover = d.img(i.select(".summary_image img, .tab-summary img").first());
                                                                                return [4, d.text(i, [".author-content a", ".author-content", ".artist-content a"])];
                                                                            case 5:
                                                                                _f.author = _g.sent();
                                                                                if (!l) return [3, 7];
                                                                                return [4, l.html()];
                                                                            case 6:
                                                                                _d = _g.sent();
                                                                                return [3, 8];
                                                                            case 7:
                                                                                _d = "";
                                                                                _g.label = 8;
                                                                            case 8: return [2, _c.apply(_b, [(_f.description = _d, _f.detail = f ? "Tình trạng: " + f : "", _f.ongoing = d.ongoing(f), _f.genres = c, _f.host = w, _f)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, chapterEls: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, _b, b, _c, _d; return __generator(this, function (_f) {
                                                                    switch (_f.label) {
                                                                        case 0:
                                                                            c = r.select("li.wp-manga-chapter a, .listing-chapters_wrap li a, .version-chap li a");
                                                                            if (c.size() > 0)
                                                                                return [2, c];
                                                                            f = i.replace(/\/$/, "") + "/";
                                                                            return [4, u(f + "ajax/chapters/", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", Referer: f } })];
                                                                        case 1:
                                                                            l = _f.sent();
                                                                            _b = l.ok;
                                                                            if (!_b) return [3, 3];
                                                                            return [4, l.html()];
                                                                        case 2:
                                                                            _b = (c = (_f.sent()).select("li.wp-manga-chapter a"), c.size() > 0);
                                                                            _f.label = 3;
                                                                        case 3:
                                                                            if (_b)
                                                                                return [2, c];
                                                                            b = r.select("#manga-chapters-holder").attr("data-id") || r.select(".rating-post-id").attr("value") || r.select("input.rating-post-id").attr("value");
                                                                            _d = b;
                                                                            if (!_d) return [3, 5];
                                                                            return [4, u(w + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", "Content-Type": "application/x-www-form-urlencoded" }, body: "action=manga_get_chapters&manga=" + b })];
                                                                        case 4:
                                                                            _d = (l = _f.sent(), l.ok);
                                                                            _f.label = 5;
                                                                        case 5:
                                                                            if (!_d) return [3, 7];
                                                                            return [4, l.html()];
                                                                        case 6:
                                                                            _c = (_f.sent()).select("li.wp-manga-chapter a");
                                                                            return [3, 8];
                                                                        case 7:
                                                                            _c = c;
                                                                            _f.label = 8;
                                                                        case 8: return [2, _c];
                                                                    }
                                                                }); });
                                                            }, toc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, c, f, l, b, k, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0: return [4, d.html(r)];
                                                                            case 1:
                                                                                i = _g.sent();
                                                                                return [4, y.chapterEls(i, r)];
                                                                            case 2:
                                                                                c = _g.sent(), f = [], l = c.size() - 1;
                                                                                _g.label = 3;
                                                                            case 3:
                                                                                if (!(l >= 0)) return [3, 8];
                                                                                return [4, c.get(l)];
                                                                            case 4:
                                                                                b = _g.sent(), k = b.attr("href");
                                                                                _b = !k || k === "#";
                                                                                if (_b) return [3, 6];
                                                                                _d = (_c = f).push;
                                                                                _f = {};
                                                                                return [4, b.text()];
                                                                            case 5:
                                                                                _b = _d.apply(_c, [(_f.name = (_g.sent()).trim(), _f.url = k, _f.host = w, _f)]);
                                                                                _g.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                l--;
                                                                                return [3, 3];
                                                                            case 8: return [2, s.success(f)];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, c, f, l, b, k, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            i = r.indexOf("?") > 0 ? r : r.replace(/\/$/, "") + "/?style=list";
                                                                            return [4, d.html(i)];
                                                                        case 1:
                                                                            c = _d.sent(), f = c.select(".reading-content img, .page-break img, .read-container img"), l = [], b = 0;
                                                                            _d.label = 2;
                                                                        case 2:
                                                                            if (!(b < f.size())) return [3, 5];
                                                                            _c = (_b = d).img;
                                                                            return [4, f.get(b)];
                                                                        case 3:
                                                                            k = _c.apply(_b, [_d.sent()]);
                                                                            k && l.push(k);
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            b++;
                                                                            return [3, 2];
                                                                        case 5: return [2, s.success(l)];
                                                                    }
                                                                }); });
                                                            }, text: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, c, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0: return [4, d.html(r)];
                                                                        case 1:
                                                                            i = _g.sent(), c = i.select(".reading-content .text-left, .reading-content .text-right, .reading-content, .entry-content").first();
                                                                            if (!c) return [3, 4];
                                                                            _d = (_c = s).success;
                                                                            return [4, d.cleanContent(c)];
                                                                        case 2:
                                                                            _f = [_g.sent()];
                                                                            return [4, d.text(i, ["#chapter-heading", ".breadcrumb li.active", "h1"])];
                                                                        case 3:
                                                                            _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                            return [3, 5];
                                                                        case 4:
                                                                            _b = s.error("Không tìm thấy nội dung chương");
                                                                            _g.label = 5;
                                                                        case 5: return [2, _b];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof B == "function" ? B : void 0];
                                                    });
                                                });
                                            })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, search: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, a, n, s, o, h, p, m, x, T, v, S, N, C, F, z, K) {
                        return __awaiter(this, void 0, void 0, function () {
                            var M;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        M = t("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function B(r, i) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, y.search(r, i)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var w, d, y;
                                                    return __generator(this, function (_b) {
                                                        w = "https://gaumeoteam.com";
                                                        try {
                                                            M && (w = String(M).replace(/\/+$/, ""));
                                                        }
                                                        catch (r) { }
                                                        d = { img: function (r) { if (!r)
                                                                return ""; for (var i = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < i.length; c++) {
                                                                var f = r.attr(i[c]);
                                                                if (f && f.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(f))
                                                                    return d.fix(f.trim());
                                                            } var l = r.attr("data-srcset") || r.attr("srcset"); return l ? d.fix(l.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? w + r : w + "/" + r) : ""; }, text: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(c < i.length)) return [3, 4];
                                                                            return [4, r.select(i[c]).text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, f.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            c++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            i = i || {};
                                                                            c = { Referer: w + "/" };
                                                                            if (i.headers)
                                                                                for (f in i.headers)
                                                                                    c[f] = i.headers[f];
                                                                            return [4, u(r, { method: i.method, headers: c, body: i.body })];
                                                                        case 1:
                                                                            l = _c.sent(), b = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = l && l.status === 429 && b < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(l)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, x(1500 * (b + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, u(r, { method: i.method, headers: c, body: i.body })];
                                                                        case 6:
                                                                            l = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            b++;
                                                                            return [3, 2];
                                                                        case 8: return [2, l];
                                                                    }
                                                                }); });
                                                            }, cf: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, r.text()];
                                                                        case 1:
                                                                            i = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(i.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.ok)
                                                                                return [2, r];
                                                                            return [4, d.cf(r)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + i.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + i);
                                                                    }
                                                                }); });
                                                            }, html: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, i)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.html(i && i.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, i)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (r) { var i = parseInt(r || "1", 10); return isNaN(i) || i < 1 ? 1 : i; }, next: function (r, i) { return r ? String(d.page(i) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, r.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, y = { path: function () { return typeof MADARA != "undefined" && MADARA.path || "manga"; }, card: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, c, f, _b;
                                                                    var _c;
                                                                    return __generator(this, function (_d) {
                                                                        switch (_d.label) {
                                                                            case 0:
                                                                                i = r.select(".post-title a, h3 a, h4 a, .item-summary a").first() || r.select("a").first();
                                                                                if (!i)
                                                                                    return [2, null];
                                                                                return [4, i.text()];
                                                                            case 1:
                                                                                c = (_d.sent()) || i.attr("title") || r.select("img").attr("alt"), f = r.select(".chapter a, .list-chapter .chapter-item a, .latest-chap a, .my-chapter-name a").first();
                                                                                _c = { name: c, link: i.attr("href"), cover: d.img(r.select("img").first()) };
                                                                                if (!f) return [3, 3];
                                                                                return [4, f.text()];
                                                                            case 2:
                                                                                _b = _d.sent();
                                                                                return [3, 4];
                                                                            case 3:
                                                                                _b = "";
                                                                                _d.label = 4;
                                                                            case 4: return [2, (_c.description = _b, _c.host = w, _c)];
                                                                        }
                                                                    });
                                                                });
                                                            }, list: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, c, f, l, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            i = r.select(".c-tabs-item__content, .page-item-detail, .manga-item, .comic-list-item, .comic-block"), c = [], f = {}, l = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(l < i.size())) return [3, 5];
                                                                            _c = (_b = y).card;
                                                                            return [4, i.get(l)];
                                                                        case 2: return [4, _c.apply(_b, [_d.sent()])];
                                                                        case 3:
                                                                            b = _d.sent();
                                                                            b && b.link && !f[b.link] && (f[b.link] = 1, c.push(b));
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 5: return [2, c];
                                                                    }
                                                                }); });
                                                            }, hasNext: function (r, i) { return r.select(".nav-previous a, a.nextpostslink, .wp-pagenavi a.next, a.next.page-numbers, .pagination a.next, a[rel=next]").size() > 0 || r.select('a[href*="/page/' + (i + 1) + '"]').size() > 0; }, browse: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = d.page(i), f = w + "/" + y.path() + "/" + (c > 1 ? "page/" + c + "/" : "") + "?m_orderby=" + (r || "latest");
                                                                            return [4, d.html(f)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, y.list(l)];
                                                                        case 2:
                                                                            b = _b.sent();
                                                                            return [2, s.success(b, d.next(y.hasNext(l, c) && b.length > 0, i))];
                                                                    }
                                                                }); });
                                                            }, search: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!d.isUrl(r)) return [3, 2];
                                                                            return [4, y.byUrl(r, i)];
                                                                        case 1: return [2, _b.sent()];
                                                                        case 2:
                                                                            c = d.page(i), f = w + "/" + (c > 1 ? "page/" + c + "/" : "") + "?s=" + d.enc(r) + "&post_type=wp-manga";
                                                                            return [4, d.html(f)];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            return [4, y.list(l)];
                                                                        case 4:
                                                                            b = _b.sent();
                                                                            return [2, s.success(b, d.next(y.hasNext(l, c) && b.length > 0, i))];
                                                                    }
                                                                }); });
                                                            }, byUrl: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = d.page(i), f = d.fix(r).replace(/\/$/, "") + "/" + (c > 1 ? "page/" + c + "/" : "");
                                                                            return [4, d.html(f)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, y.list(l)];
                                                                        case 2:
                                                                            b = _b.sent();
                                                                            return [2, s.success(b, d.next(y.hasNext(l, c) && b.length > 0, i))];
                                                                    }
                                                                }); });
                                                            }, detail: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, c, f, l, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0: return [4, d.html(r)];
                                                                            case 1:
                                                                                i = _g.sent();
                                                                                return [4, qt(i.select(".genres-content a, .wp-manga-genres a, .manga-genres a"), function (b) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, b.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = b.attr("href"), _b.script = "search.js", _b)];
                                                                                                }
                                                                                            });
                                                                                        });
                                                                                    })];
                                                                            case 2:
                                                                                c = _g.sent();
                                                                                return [4, d.text(i, [".post-status .summary-content", ".manga-status", ".post-content_item:contains(Tình trạng) .summary-content", ".post-content_item:contains(Status) .summary-content"])];
                                                                            case 3:
                                                                                f = _g.sent(), l = i.select(".description-summary .summary__content, .summary__content, .manga-excerpt, .description-summary, .manga-summary").first();
                                                                                _c = (_b = s).success;
                                                                                _f = {};
                                                                                return [4, d.text(i, [".post-title h1", ".post-title h3", "h1"])];
                                                                            case 4:
                                                                                _f.name = _g.sent(), _f.cover = d.img(i.select(".summary_image img, .tab-summary img").first());
                                                                                return [4, d.text(i, [".author-content a", ".author-content", ".artist-content a"])];
                                                                            case 5:
                                                                                _f.author = _g.sent();
                                                                                if (!l) return [3, 7];
                                                                                return [4, l.html()];
                                                                            case 6:
                                                                                _d = _g.sent();
                                                                                return [3, 8];
                                                                            case 7:
                                                                                _d = "";
                                                                                _g.label = 8;
                                                                            case 8: return [2, _c.apply(_b, [(_f.description = _d, _f.detail = f ? "Tình trạng: " + f : "", _f.ongoing = d.ongoing(f), _f.genres = c, _f.host = w, _f)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, chapterEls: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, _b, b, _c, _d; return __generator(this, function (_f) {
                                                                    switch (_f.label) {
                                                                        case 0:
                                                                            c = r.select("li.wp-manga-chapter a, .listing-chapters_wrap li a, .version-chap li a");
                                                                            if (c.size() > 0)
                                                                                return [2, c];
                                                                            f = i.replace(/\/$/, "") + "/";
                                                                            return [4, u(f + "ajax/chapters/", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", Referer: f } })];
                                                                        case 1:
                                                                            l = _f.sent();
                                                                            _b = l.ok;
                                                                            if (!_b) return [3, 3];
                                                                            return [4, l.html()];
                                                                        case 2:
                                                                            _b = (c = (_f.sent()).select("li.wp-manga-chapter a"), c.size() > 0);
                                                                            _f.label = 3;
                                                                        case 3:
                                                                            if (_b)
                                                                                return [2, c];
                                                                            b = r.select("#manga-chapters-holder").attr("data-id") || r.select(".rating-post-id").attr("value") || r.select("input.rating-post-id").attr("value");
                                                                            _d = b;
                                                                            if (!_d) return [3, 5];
                                                                            return [4, u(w + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", "Content-Type": "application/x-www-form-urlencoded" }, body: "action=manga_get_chapters&manga=" + b })];
                                                                        case 4:
                                                                            _d = (l = _f.sent(), l.ok);
                                                                            _f.label = 5;
                                                                        case 5:
                                                                            if (!_d) return [3, 7];
                                                                            return [4, l.html()];
                                                                        case 6:
                                                                            _c = (_f.sent()).select("li.wp-manga-chapter a");
                                                                            return [3, 8];
                                                                        case 7:
                                                                            _c = c;
                                                                            _f.label = 8;
                                                                        case 8: return [2, _c];
                                                                    }
                                                                }); });
                                                            }, toc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, c, f, l, b, k, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0: return [4, d.html(r)];
                                                                            case 1:
                                                                                i = _g.sent();
                                                                                return [4, y.chapterEls(i, r)];
                                                                            case 2:
                                                                                c = _g.sent(), f = [], l = c.size() - 1;
                                                                                _g.label = 3;
                                                                            case 3:
                                                                                if (!(l >= 0)) return [3, 8];
                                                                                return [4, c.get(l)];
                                                                            case 4:
                                                                                b = _g.sent(), k = b.attr("href");
                                                                                _b = !k || k === "#";
                                                                                if (_b) return [3, 6];
                                                                                _d = (_c = f).push;
                                                                                _f = {};
                                                                                return [4, b.text()];
                                                                            case 5:
                                                                                _b = _d.apply(_c, [(_f.name = (_g.sent()).trim(), _f.url = k, _f.host = w, _f)]);
                                                                                _g.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                l--;
                                                                                return [3, 3];
                                                                            case 8: return [2, s.success(f)];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, c, f, l, b, k, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            i = r.indexOf("?") > 0 ? r : r.replace(/\/$/, "") + "/?style=list";
                                                                            return [4, d.html(i)];
                                                                        case 1:
                                                                            c = _d.sent(), f = c.select(".reading-content img, .page-break img, .read-container img"), l = [], b = 0;
                                                                            _d.label = 2;
                                                                        case 2:
                                                                            if (!(b < f.size())) return [3, 5];
                                                                            _c = (_b = d).img;
                                                                            return [4, f.get(b)];
                                                                        case 3:
                                                                            k = _c.apply(_b, [_d.sent()]);
                                                                            k && l.push(k);
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            b++;
                                                                            return [3, 2];
                                                                        case 5: return [2, s.success(l)];
                                                                    }
                                                                }); });
                                                            }, text: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, c, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0: return [4, d.html(r)];
                                                                        case 1:
                                                                            i = _g.sent(), c = i.select(".reading-content .text-left, .reading-content .text-right, .reading-content, .entry-content").first();
                                                                            if (!c) return [3, 4];
                                                                            _d = (_c = s).success;
                                                                            return [4, d.cleanContent(c)];
                                                                        case 2:
                                                                            _f = [_g.sent()];
                                                                            return [4, d.text(i, ["#chapter-heading", ".breadcrumb li.active", "h1"])];
                                                                        case 3:
                                                                            _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                            return [3, 5];
                                                                        case 4:
                                                                            _b = s.error("Không tìm thấy nội dung chương");
                                                                            _g.label = 5;
                                                                        case 5: return [2, _b];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof B == "function" ? B : void 0];
                                                    });
                                                });
                                            })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, detail: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, a, n, s, o, h, p, m, x, T, v, S, N, C, F, z, K) {
                        return __awaiter(this, void 0, void 0, function () {
                            var M;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        M = t("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function B(r) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, y.detail(r)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var w, d, y;
                                                    return __generator(this, function (_b) {
                                                        w = "https://gaumeoteam.com";
                                                        try {
                                                            M && (w = String(M).replace(/\/+$/, ""));
                                                        }
                                                        catch (r) { }
                                                        d = { img: function (r) { if (!r)
                                                                return ""; for (var i = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < i.length; c++) {
                                                                var f = r.attr(i[c]);
                                                                if (f && f.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(f))
                                                                    return d.fix(f.trim());
                                                            } var l = r.attr("data-srcset") || r.attr("srcset"); return l ? d.fix(l.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? w + r : w + "/" + r) : ""; }, text: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(c < i.length)) return [3, 4];
                                                                            return [4, r.select(i[c]).text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, f.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            c++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            i = i || {};
                                                                            c = { Referer: w + "/" };
                                                                            if (i.headers)
                                                                                for (f in i.headers)
                                                                                    c[f] = i.headers[f];
                                                                            return [4, u(r, { method: i.method, headers: c, body: i.body })];
                                                                        case 1:
                                                                            l = _c.sent(), b = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = l && l.status === 429 && b < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(l)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, x(1500 * (b + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, u(r, { method: i.method, headers: c, body: i.body })];
                                                                        case 6:
                                                                            l = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            b++;
                                                                            return [3, 2];
                                                                        case 8: return [2, l];
                                                                    }
                                                                }); });
                                                            }, cf: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, r.text()];
                                                                        case 1:
                                                                            i = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(i.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.ok)
                                                                                return [2, r];
                                                                            return [4, d.cf(r)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + i.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + i);
                                                                    }
                                                                }); });
                                                            }, html: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, i)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.html(i && i.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, i)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (r) { var i = parseInt(r || "1", 10); return isNaN(i) || i < 1 ? 1 : i; }, next: function (r, i) { return r ? String(d.page(i) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, r.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, y = { path: function () { return typeof MADARA != "undefined" && MADARA.path || "manga"; }, card: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, c, f, _b;
                                                                    var _c;
                                                                    return __generator(this, function (_d) {
                                                                        switch (_d.label) {
                                                                            case 0:
                                                                                i = r.select(".post-title a, h3 a, h4 a, .item-summary a").first() || r.select("a").first();
                                                                                if (!i)
                                                                                    return [2, null];
                                                                                return [4, i.text()];
                                                                            case 1:
                                                                                c = (_d.sent()) || i.attr("title") || r.select("img").attr("alt"), f = r.select(".chapter a, .list-chapter .chapter-item a, .latest-chap a, .my-chapter-name a").first();
                                                                                _c = { name: c, link: i.attr("href"), cover: d.img(r.select("img").first()) };
                                                                                if (!f) return [3, 3];
                                                                                return [4, f.text()];
                                                                            case 2:
                                                                                _b = _d.sent();
                                                                                return [3, 4];
                                                                            case 3:
                                                                                _b = "";
                                                                                _d.label = 4;
                                                                            case 4: return [2, (_c.description = _b, _c.host = w, _c)];
                                                                        }
                                                                    });
                                                                });
                                                            }, list: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, c, f, l, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            i = r.select(".c-tabs-item__content, .page-item-detail, .manga-item, .comic-list-item, .comic-block"), c = [], f = {}, l = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(l < i.size())) return [3, 5];
                                                                            _c = (_b = y).card;
                                                                            return [4, i.get(l)];
                                                                        case 2: return [4, _c.apply(_b, [_d.sent()])];
                                                                        case 3:
                                                                            b = _d.sent();
                                                                            b && b.link && !f[b.link] && (f[b.link] = 1, c.push(b));
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 5: return [2, c];
                                                                    }
                                                                }); });
                                                            }, hasNext: function (r, i) { return r.select(".nav-previous a, a.nextpostslink, .wp-pagenavi a.next, a.next.page-numbers, .pagination a.next, a[rel=next]").size() > 0 || r.select('a[href*="/page/' + (i + 1) + '"]').size() > 0; }, browse: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = d.page(i), f = w + "/" + y.path() + "/" + (c > 1 ? "page/" + c + "/" : "") + "?m_orderby=" + (r || "latest");
                                                                            return [4, d.html(f)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, y.list(l)];
                                                                        case 2:
                                                                            b = _b.sent();
                                                                            return [2, s.success(b, d.next(y.hasNext(l, c) && b.length > 0, i))];
                                                                    }
                                                                }); });
                                                            }, search: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!d.isUrl(r)) return [3, 2];
                                                                            return [4, y.byUrl(r, i)];
                                                                        case 1: return [2, _b.sent()];
                                                                        case 2:
                                                                            c = d.page(i), f = w + "/" + (c > 1 ? "page/" + c + "/" : "") + "?s=" + d.enc(r) + "&post_type=wp-manga";
                                                                            return [4, d.html(f)];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            return [4, y.list(l)];
                                                                        case 4:
                                                                            b = _b.sent();
                                                                            return [2, s.success(b, d.next(y.hasNext(l, c) && b.length > 0, i))];
                                                                    }
                                                                }); });
                                                            }, byUrl: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = d.page(i), f = d.fix(r).replace(/\/$/, "") + "/" + (c > 1 ? "page/" + c + "/" : "");
                                                                            return [4, d.html(f)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, y.list(l)];
                                                                        case 2:
                                                                            b = _b.sent();
                                                                            return [2, s.success(b, d.next(y.hasNext(l, c) && b.length > 0, i))];
                                                                    }
                                                                }); });
                                                            }, detail: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, c, f, l, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0: return [4, d.html(r)];
                                                                            case 1:
                                                                                i = _g.sent();
                                                                                return [4, qt(i.select(".genres-content a, .wp-manga-genres a, .manga-genres a"), function (b) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, b.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = b.attr("href"), _b.script = "search.js", _b)];
                                                                                                }
                                                                                            });
                                                                                        });
                                                                                    })];
                                                                            case 2:
                                                                                c = _g.sent();
                                                                                return [4, d.text(i, [".post-status .summary-content", ".manga-status", ".post-content_item:contains(Tình trạng) .summary-content", ".post-content_item:contains(Status) .summary-content"])];
                                                                            case 3:
                                                                                f = _g.sent(), l = i.select(".description-summary .summary__content, .summary__content, .manga-excerpt, .description-summary, .manga-summary").first();
                                                                                _c = (_b = s).success;
                                                                                _f = {};
                                                                                return [4, d.text(i, [".post-title h1", ".post-title h3", "h1"])];
                                                                            case 4:
                                                                                _f.name = _g.sent(), _f.cover = d.img(i.select(".summary_image img, .tab-summary img").first());
                                                                                return [4, d.text(i, [".author-content a", ".author-content", ".artist-content a"])];
                                                                            case 5:
                                                                                _f.author = _g.sent();
                                                                                if (!l) return [3, 7];
                                                                                return [4, l.html()];
                                                                            case 6:
                                                                                _d = _g.sent();
                                                                                return [3, 8];
                                                                            case 7:
                                                                                _d = "";
                                                                                _g.label = 8;
                                                                            case 8: return [2, _c.apply(_b, [(_f.description = _d, _f.detail = f ? "Tình trạng: " + f : "", _f.ongoing = d.ongoing(f), _f.genres = c, _f.host = w, _f)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, chapterEls: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, _b, b, _c, _d; return __generator(this, function (_f) {
                                                                    switch (_f.label) {
                                                                        case 0:
                                                                            c = r.select("li.wp-manga-chapter a, .listing-chapters_wrap li a, .version-chap li a");
                                                                            if (c.size() > 0)
                                                                                return [2, c];
                                                                            f = i.replace(/\/$/, "") + "/";
                                                                            return [4, u(f + "ajax/chapters/", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", Referer: f } })];
                                                                        case 1:
                                                                            l = _f.sent();
                                                                            _b = l.ok;
                                                                            if (!_b) return [3, 3];
                                                                            return [4, l.html()];
                                                                        case 2:
                                                                            _b = (c = (_f.sent()).select("li.wp-manga-chapter a"), c.size() > 0);
                                                                            _f.label = 3;
                                                                        case 3:
                                                                            if (_b)
                                                                                return [2, c];
                                                                            b = r.select("#manga-chapters-holder").attr("data-id") || r.select(".rating-post-id").attr("value") || r.select("input.rating-post-id").attr("value");
                                                                            _d = b;
                                                                            if (!_d) return [3, 5];
                                                                            return [4, u(w + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", "Content-Type": "application/x-www-form-urlencoded" }, body: "action=manga_get_chapters&manga=" + b })];
                                                                        case 4:
                                                                            _d = (l = _f.sent(), l.ok);
                                                                            _f.label = 5;
                                                                        case 5:
                                                                            if (!_d) return [3, 7];
                                                                            return [4, l.html()];
                                                                        case 6:
                                                                            _c = (_f.sent()).select("li.wp-manga-chapter a");
                                                                            return [3, 8];
                                                                        case 7:
                                                                            _c = c;
                                                                            _f.label = 8;
                                                                        case 8: return [2, _c];
                                                                    }
                                                                }); });
                                                            }, toc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, c, f, l, b, k, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0: return [4, d.html(r)];
                                                                            case 1:
                                                                                i = _g.sent();
                                                                                return [4, y.chapterEls(i, r)];
                                                                            case 2:
                                                                                c = _g.sent(), f = [], l = c.size() - 1;
                                                                                _g.label = 3;
                                                                            case 3:
                                                                                if (!(l >= 0)) return [3, 8];
                                                                                return [4, c.get(l)];
                                                                            case 4:
                                                                                b = _g.sent(), k = b.attr("href");
                                                                                _b = !k || k === "#";
                                                                                if (_b) return [3, 6];
                                                                                _d = (_c = f).push;
                                                                                _f = {};
                                                                                return [4, b.text()];
                                                                            case 5:
                                                                                _b = _d.apply(_c, [(_f.name = (_g.sent()).trim(), _f.url = k, _f.host = w, _f)]);
                                                                                _g.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                l--;
                                                                                return [3, 3];
                                                                            case 8: return [2, s.success(f)];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, c, f, l, b, k, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            i = r.indexOf("?") > 0 ? r : r.replace(/\/$/, "") + "/?style=list";
                                                                            return [4, d.html(i)];
                                                                        case 1:
                                                                            c = _d.sent(), f = c.select(".reading-content img, .page-break img, .read-container img"), l = [], b = 0;
                                                                            _d.label = 2;
                                                                        case 2:
                                                                            if (!(b < f.size())) return [3, 5];
                                                                            _c = (_b = d).img;
                                                                            return [4, f.get(b)];
                                                                        case 3:
                                                                            k = _c.apply(_b, [_d.sent()]);
                                                                            k && l.push(k);
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            b++;
                                                                            return [3, 2];
                                                                        case 5: return [2, s.success(l)];
                                                                    }
                                                                }); });
                                                            }, text: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, c, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0: return [4, d.html(r)];
                                                                        case 1:
                                                                            i = _g.sent(), c = i.select(".reading-content .text-left, .reading-content .text-right, .reading-content, .entry-content").first();
                                                                            if (!c) return [3, 4];
                                                                            _d = (_c = s).success;
                                                                            return [4, d.cleanContent(c)];
                                                                        case 2:
                                                                            _f = [_g.sent()];
                                                                            return [4, d.text(i, ["#chapter-heading", ".breadcrumb li.active", "h1"])];
                                                                        case 3:
                                                                            _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                            return [3, 5];
                                                                        case 4:
                                                                            _b = s.error("Không tìm thấy nội dung chương");
                                                                            _g.label = 5;
                                                                        case 5: return [2, _b];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof B == "function" ? B : void 0];
                                                    });
                                                });
                                            })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, toc: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, a, n, s, o, h, p, m, x, T, v, S, N, C, F, z, K) {
                        return __awaiter(this, void 0, void 0, function () {
                            var M;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        M = t("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function B(r) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, y.toc(r)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var w, d, y;
                                                    return __generator(this, function (_b) {
                                                        w = "https://gaumeoteam.com";
                                                        try {
                                                            M && (w = String(M).replace(/\/+$/, ""));
                                                        }
                                                        catch (r) { }
                                                        d = { img: function (r) { if (!r)
                                                                return ""; for (var i = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < i.length; c++) {
                                                                var f = r.attr(i[c]);
                                                                if (f && f.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(f))
                                                                    return d.fix(f.trim());
                                                            } var l = r.attr("data-srcset") || r.attr("srcset"); return l ? d.fix(l.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? w + r : w + "/" + r) : ""; }, text: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(c < i.length)) return [3, 4];
                                                                            return [4, r.select(i[c]).text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, f.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            c++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            i = i || {};
                                                                            c = { Referer: w + "/" };
                                                                            if (i.headers)
                                                                                for (f in i.headers)
                                                                                    c[f] = i.headers[f];
                                                                            return [4, u(r, { method: i.method, headers: c, body: i.body })];
                                                                        case 1:
                                                                            l = _c.sent(), b = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = l && l.status === 429 && b < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(l)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, x(1500 * (b + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, u(r, { method: i.method, headers: c, body: i.body })];
                                                                        case 6:
                                                                            l = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            b++;
                                                                            return [3, 2];
                                                                        case 8: return [2, l];
                                                                    }
                                                                }); });
                                                            }, cf: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, r.text()];
                                                                        case 1:
                                                                            i = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(i.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.ok)
                                                                                return [2, r];
                                                                            return [4, d.cf(r)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + i.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + i);
                                                                    }
                                                                }); });
                                                            }, html: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, i)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.html(i && i.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, i)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (r) { var i = parseInt(r || "1", 10); return isNaN(i) || i < 1 ? 1 : i; }, next: function (r, i) { return r ? String(d.page(i) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, r.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, y = { path: function () { return typeof MADARA != "undefined" && MADARA.path || "manga"; }, card: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, c, f, _b;
                                                                    var _c;
                                                                    return __generator(this, function (_d) {
                                                                        switch (_d.label) {
                                                                            case 0:
                                                                                i = r.select(".post-title a, h3 a, h4 a, .item-summary a").first() || r.select("a").first();
                                                                                if (!i)
                                                                                    return [2, null];
                                                                                return [4, i.text()];
                                                                            case 1:
                                                                                c = (_d.sent()) || i.attr("title") || r.select("img").attr("alt"), f = r.select(".chapter a, .list-chapter .chapter-item a, .latest-chap a, .my-chapter-name a").first();
                                                                                _c = { name: c, link: i.attr("href"), cover: d.img(r.select("img").first()) };
                                                                                if (!f) return [3, 3];
                                                                                return [4, f.text()];
                                                                            case 2:
                                                                                _b = _d.sent();
                                                                                return [3, 4];
                                                                            case 3:
                                                                                _b = "";
                                                                                _d.label = 4;
                                                                            case 4: return [2, (_c.description = _b, _c.host = w, _c)];
                                                                        }
                                                                    });
                                                                });
                                                            }, list: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, c, f, l, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            i = r.select(".c-tabs-item__content, .page-item-detail, .manga-item, .comic-list-item, .comic-block"), c = [], f = {}, l = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(l < i.size())) return [3, 5];
                                                                            _c = (_b = y).card;
                                                                            return [4, i.get(l)];
                                                                        case 2: return [4, _c.apply(_b, [_d.sent()])];
                                                                        case 3:
                                                                            b = _d.sent();
                                                                            b && b.link && !f[b.link] && (f[b.link] = 1, c.push(b));
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 5: return [2, c];
                                                                    }
                                                                }); });
                                                            }, hasNext: function (r, i) { return r.select(".nav-previous a, a.nextpostslink, .wp-pagenavi a.next, a.next.page-numbers, .pagination a.next, a[rel=next]").size() > 0 || r.select('a[href*="/page/' + (i + 1) + '"]').size() > 0; }, browse: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = d.page(i), f = w + "/" + y.path() + "/" + (c > 1 ? "page/" + c + "/" : "") + "?m_orderby=" + (r || "latest");
                                                                            return [4, d.html(f)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, y.list(l)];
                                                                        case 2:
                                                                            b = _b.sent();
                                                                            return [2, s.success(b, d.next(y.hasNext(l, c) && b.length > 0, i))];
                                                                    }
                                                                }); });
                                                            }, search: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!d.isUrl(r)) return [3, 2];
                                                                            return [4, y.byUrl(r, i)];
                                                                        case 1: return [2, _b.sent()];
                                                                        case 2:
                                                                            c = d.page(i), f = w + "/" + (c > 1 ? "page/" + c + "/" : "") + "?s=" + d.enc(r) + "&post_type=wp-manga";
                                                                            return [4, d.html(f)];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            return [4, y.list(l)];
                                                                        case 4:
                                                                            b = _b.sent();
                                                                            return [2, s.success(b, d.next(y.hasNext(l, c) && b.length > 0, i))];
                                                                    }
                                                                }); });
                                                            }, byUrl: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = d.page(i), f = d.fix(r).replace(/\/$/, "") + "/" + (c > 1 ? "page/" + c + "/" : "");
                                                                            return [4, d.html(f)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, y.list(l)];
                                                                        case 2:
                                                                            b = _b.sent();
                                                                            return [2, s.success(b, d.next(y.hasNext(l, c) && b.length > 0, i))];
                                                                    }
                                                                }); });
                                                            }, detail: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, c, f, l, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0: return [4, d.html(r)];
                                                                            case 1:
                                                                                i = _g.sent();
                                                                                return [4, qt(i.select(".genres-content a, .wp-manga-genres a, .manga-genres a"), function (b) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, b.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = b.attr("href"), _b.script = "search.js", _b)];
                                                                                                }
                                                                                            });
                                                                                        });
                                                                                    })];
                                                                            case 2:
                                                                                c = _g.sent();
                                                                                return [4, d.text(i, [".post-status .summary-content", ".manga-status", ".post-content_item:contains(Tình trạng) .summary-content", ".post-content_item:contains(Status) .summary-content"])];
                                                                            case 3:
                                                                                f = _g.sent(), l = i.select(".description-summary .summary__content, .summary__content, .manga-excerpt, .description-summary, .manga-summary").first();
                                                                                _c = (_b = s).success;
                                                                                _f = {};
                                                                                return [4, d.text(i, [".post-title h1", ".post-title h3", "h1"])];
                                                                            case 4:
                                                                                _f.name = _g.sent(), _f.cover = d.img(i.select(".summary_image img, .tab-summary img").first());
                                                                                return [4, d.text(i, [".author-content a", ".author-content", ".artist-content a"])];
                                                                            case 5:
                                                                                _f.author = _g.sent();
                                                                                if (!l) return [3, 7];
                                                                                return [4, l.html()];
                                                                            case 6:
                                                                                _d = _g.sent();
                                                                                return [3, 8];
                                                                            case 7:
                                                                                _d = "";
                                                                                _g.label = 8;
                                                                            case 8: return [2, _c.apply(_b, [(_f.description = _d, _f.detail = f ? "Tình trạng: " + f : "", _f.ongoing = d.ongoing(f), _f.genres = c, _f.host = w, _f)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, chapterEls: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, _b, b, _c, _d; return __generator(this, function (_f) {
                                                                    switch (_f.label) {
                                                                        case 0:
                                                                            c = r.select("li.wp-manga-chapter a, .listing-chapters_wrap li a, .version-chap li a");
                                                                            if (c.size() > 0)
                                                                                return [2, c];
                                                                            f = i.replace(/\/$/, "") + "/";
                                                                            return [4, u(f + "ajax/chapters/", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", Referer: f } })];
                                                                        case 1:
                                                                            l = _f.sent();
                                                                            _b = l.ok;
                                                                            if (!_b) return [3, 3];
                                                                            return [4, l.html()];
                                                                        case 2:
                                                                            _b = (c = (_f.sent()).select("li.wp-manga-chapter a"), c.size() > 0);
                                                                            _f.label = 3;
                                                                        case 3:
                                                                            if (_b)
                                                                                return [2, c];
                                                                            b = r.select("#manga-chapters-holder").attr("data-id") || r.select(".rating-post-id").attr("value") || r.select("input.rating-post-id").attr("value");
                                                                            _d = b;
                                                                            if (!_d) return [3, 5];
                                                                            return [4, u(w + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", "Content-Type": "application/x-www-form-urlencoded" }, body: "action=manga_get_chapters&manga=" + b })];
                                                                        case 4:
                                                                            _d = (l = _f.sent(), l.ok);
                                                                            _f.label = 5;
                                                                        case 5:
                                                                            if (!_d) return [3, 7];
                                                                            return [4, l.html()];
                                                                        case 6:
                                                                            _c = (_f.sent()).select("li.wp-manga-chapter a");
                                                                            return [3, 8];
                                                                        case 7:
                                                                            _c = c;
                                                                            _f.label = 8;
                                                                        case 8: return [2, _c];
                                                                    }
                                                                }); });
                                                            }, toc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, c, f, l, b, k, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0: return [4, d.html(r)];
                                                                            case 1:
                                                                                i = _g.sent();
                                                                                return [4, y.chapterEls(i, r)];
                                                                            case 2:
                                                                                c = _g.sent(), f = [], l = c.size() - 1;
                                                                                _g.label = 3;
                                                                            case 3:
                                                                                if (!(l >= 0)) return [3, 8];
                                                                                return [4, c.get(l)];
                                                                            case 4:
                                                                                b = _g.sent(), k = b.attr("href");
                                                                                _b = !k || k === "#";
                                                                                if (_b) return [3, 6];
                                                                                _d = (_c = f).push;
                                                                                _f = {};
                                                                                return [4, b.text()];
                                                                            case 5:
                                                                                _b = _d.apply(_c, [(_f.name = (_g.sent()).trim(), _f.url = k, _f.host = w, _f)]);
                                                                                _g.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                l--;
                                                                                return [3, 3];
                                                                            case 8: return [2, s.success(f)];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, c, f, l, b, k, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            i = r.indexOf("?") > 0 ? r : r.replace(/\/$/, "") + "/?style=list";
                                                                            return [4, d.html(i)];
                                                                        case 1:
                                                                            c = _d.sent(), f = c.select(".reading-content img, .page-break img, .read-container img"), l = [], b = 0;
                                                                            _d.label = 2;
                                                                        case 2:
                                                                            if (!(b < f.size())) return [3, 5];
                                                                            _c = (_b = d).img;
                                                                            return [4, f.get(b)];
                                                                        case 3:
                                                                            k = _c.apply(_b, [_d.sent()]);
                                                                            k && l.push(k);
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            b++;
                                                                            return [3, 2];
                                                                        case 5: return [2, s.success(l)];
                                                                    }
                                                                }); });
                                                            }, text: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, c, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0: return [4, d.html(r)];
                                                                        case 1:
                                                                            i = _g.sent(), c = i.select(".reading-content .text-left, .reading-content .text-right, .reading-content, .entry-content").first();
                                                                            if (!c) return [3, 4];
                                                                            _d = (_c = s).success;
                                                                            return [4, d.cleanContent(c)];
                                                                        case 2:
                                                                            _f = [_g.sent()];
                                                                            return [4, d.text(i, ["#chapter-heading", ".breadcrumb li.active", "h1"])];
                                                                        case 3:
                                                                            _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                            return [3, 5];
                                                                        case 4:
                                                                            _b = s.error("Không tìm thấy nội dung chương");
                                                                            _g.label = 5;
                                                                        case 5: return [2, _b];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof B == "function" ? B : void 0];
                                                    });
                                                });
                                            })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, chap: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, a, n, s, o, h, p, m, x, T, v, S, N, C, F, z, K) {
                        return __awaiter(this, void 0, void 0, function () {
                            var M;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        M = t("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function B(r) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, y.text(r)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var w, d, y;
                                                    return __generator(this, function (_b) {
                                                        w = "https://gaumeoteam.com";
                                                        try {
                                                            M && (w = String(M).replace(/\/+$/, ""));
                                                        }
                                                        catch (r) { }
                                                        d = { img: function (r) { if (!r)
                                                                return ""; for (var i = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < i.length; c++) {
                                                                var f = r.attr(i[c]);
                                                                if (f && f.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(f))
                                                                    return d.fix(f.trim());
                                                            } var l = r.attr("data-srcset") || r.attr("srcset"); return l ? d.fix(l.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? w + r : w + "/" + r) : ""; }, text: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(c < i.length)) return [3, 4];
                                                                            return [4, r.select(i[c]).text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, f.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            c++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            i = i || {};
                                                                            c = { Referer: w + "/" };
                                                                            if (i.headers)
                                                                                for (f in i.headers)
                                                                                    c[f] = i.headers[f];
                                                                            return [4, u(r, { method: i.method, headers: c, body: i.body })];
                                                                        case 1:
                                                                            l = _c.sent(), b = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = l && l.status === 429 && b < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(l)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, x(1500 * (b + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, u(r, { method: i.method, headers: c, body: i.body })];
                                                                        case 6:
                                                                            l = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            b++;
                                                                            return [3, 2];
                                                                        case 8: return [2, l];
                                                                    }
                                                                }); });
                                                            }, cf: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, r.text()];
                                                                        case 1:
                                                                            i = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(i.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.ok)
                                                                                return [2, r];
                                                                            return [4, d.cf(r)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + i.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + i);
                                                                    }
                                                                }); });
                                                            }, html: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, i)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.html(i && i.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, i)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (r) { var i = parseInt(r || "1", 10); return isNaN(i) || i < 1 ? 1 : i; }, next: function (r, i) { return r ? String(d.page(i) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, r.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, y = { path: function () { return typeof MADARA != "undefined" && MADARA.path || "manga"; }, card: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, c, f, _b;
                                                                    var _c;
                                                                    return __generator(this, function (_d) {
                                                                        switch (_d.label) {
                                                                            case 0:
                                                                                i = r.select(".post-title a, h3 a, h4 a, .item-summary a").first() || r.select("a").first();
                                                                                if (!i)
                                                                                    return [2, null];
                                                                                return [4, i.text()];
                                                                            case 1:
                                                                                c = (_d.sent()) || i.attr("title") || r.select("img").attr("alt"), f = r.select(".chapter a, .list-chapter .chapter-item a, .latest-chap a, .my-chapter-name a").first();
                                                                                _c = { name: c, link: i.attr("href"), cover: d.img(r.select("img").first()) };
                                                                                if (!f) return [3, 3];
                                                                                return [4, f.text()];
                                                                            case 2:
                                                                                _b = _d.sent();
                                                                                return [3, 4];
                                                                            case 3:
                                                                                _b = "";
                                                                                _d.label = 4;
                                                                            case 4: return [2, (_c.description = _b, _c.host = w, _c)];
                                                                        }
                                                                    });
                                                                });
                                                            }, list: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, c, f, l, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            i = r.select(".c-tabs-item__content, .page-item-detail, .manga-item, .comic-list-item, .comic-block"), c = [], f = {}, l = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(l < i.size())) return [3, 5];
                                                                            _c = (_b = y).card;
                                                                            return [4, i.get(l)];
                                                                        case 2: return [4, _c.apply(_b, [_d.sent()])];
                                                                        case 3:
                                                                            b = _d.sent();
                                                                            b && b.link && !f[b.link] && (f[b.link] = 1, c.push(b));
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 5: return [2, c];
                                                                    }
                                                                }); });
                                                            }, hasNext: function (r, i) { return r.select(".nav-previous a, a.nextpostslink, .wp-pagenavi a.next, a.next.page-numbers, .pagination a.next, a[rel=next]").size() > 0 || r.select('a[href*="/page/' + (i + 1) + '"]').size() > 0; }, browse: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = d.page(i), f = w + "/" + y.path() + "/" + (c > 1 ? "page/" + c + "/" : "") + "?m_orderby=" + (r || "latest");
                                                                            return [4, d.html(f)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, y.list(l)];
                                                                        case 2:
                                                                            b = _b.sent();
                                                                            return [2, s.success(b, d.next(y.hasNext(l, c) && b.length > 0, i))];
                                                                    }
                                                                }); });
                                                            }, search: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!d.isUrl(r)) return [3, 2];
                                                                            return [4, y.byUrl(r, i)];
                                                                        case 1: return [2, _b.sent()];
                                                                        case 2:
                                                                            c = d.page(i), f = w + "/" + (c > 1 ? "page/" + c + "/" : "") + "?s=" + d.enc(r) + "&post_type=wp-manga";
                                                                            return [4, d.html(f)];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            return [4, y.list(l)];
                                                                        case 4:
                                                                            b = _b.sent();
                                                                            return [2, s.success(b, d.next(y.hasNext(l, c) && b.length > 0, i))];
                                                                    }
                                                                }); });
                                                            }, byUrl: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = d.page(i), f = d.fix(r).replace(/\/$/, "") + "/" + (c > 1 ? "page/" + c + "/" : "");
                                                                            return [4, d.html(f)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, y.list(l)];
                                                                        case 2:
                                                                            b = _b.sent();
                                                                            return [2, s.success(b, d.next(y.hasNext(l, c) && b.length > 0, i))];
                                                                    }
                                                                }); });
                                                            }, detail: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, c, f, l, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0: return [4, d.html(r)];
                                                                            case 1:
                                                                                i = _g.sent();
                                                                                return [4, qt(i.select(".genres-content a, .wp-manga-genres a, .manga-genres a"), function (b) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, b.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = b.attr("href"), _b.script = "search.js", _b)];
                                                                                                }
                                                                                            });
                                                                                        });
                                                                                    })];
                                                                            case 2:
                                                                                c = _g.sent();
                                                                                return [4, d.text(i, [".post-status .summary-content", ".manga-status", ".post-content_item:contains(Tình trạng) .summary-content", ".post-content_item:contains(Status) .summary-content"])];
                                                                            case 3:
                                                                                f = _g.sent(), l = i.select(".description-summary .summary__content, .summary__content, .manga-excerpt, .description-summary, .manga-summary").first();
                                                                                _c = (_b = s).success;
                                                                                _f = {};
                                                                                return [4, d.text(i, [".post-title h1", ".post-title h3", "h1"])];
                                                                            case 4:
                                                                                _f.name = _g.sent(), _f.cover = d.img(i.select(".summary_image img, .tab-summary img").first());
                                                                                return [4, d.text(i, [".author-content a", ".author-content", ".artist-content a"])];
                                                                            case 5:
                                                                                _f.author = _g.sent();
                                                                                if (!l) return [3, 7];
                                                                                return [4, l.html()];
                                                                            case 6:
                                                                                _d = _g.sent();
                                                                                return [3, 8];
                                                                            case 7:
                                                                                _d = "";
                                                                                _g.label = 8;
                                                                            case 8: return [2, _c.apply(_b, [(_f.description = _d, _f.detail = f ? "Tình trạng: " + f : "", _f.ongoing = d.ongoing(f), _f.genres = c, _f.host = w, _f)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, chapterEls: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, _b, b, _c, _d; return __generator(this, function (_f) {
                                                                    switch (_f.label) {
                                                                        case 0:
                                                                            c = r.select("li.wp-manga-chapter a, .listing-chapters_wrap li a, .version-chap li a");
                                                                            if (c.size() > 0)
                                                                                return [2, c];
                                                                            f = i.replace(/\/$/, "") + "/";
                                                                            return [4, u(f + "ajax/chapters/", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", Referer: f } })];
                                                                        case 1:
                                                                            l = _f.sent();
                                                                            _b = l.ok;
                                                                            if (!_b) return [3, 3];
                                                                            return [4, l.html()];
                                                                        case 2:
                                                                            _b = (c = (_f.sent()).select("li.wp-manga-chapter a"), c.size() > 0);
                                                                            _f.label = 3;
                                                                        case 3:
                                                                            if (_b)
                                                                                return [2, c];
                                                                            b = r.select("#manga-chapters-holder").attr("data-id") || r.select(".rating-post-id").attr("value") || r.select("input.rating-post-id").attr("value");
                                                                            _d = b;
                                                                            if (!_d) return [3, 5];
                                                                            return [4, u(w + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", "Content-Type": "application/x-www-form-urlencoded" }, body: "action=manga_get_chapters&manga=" + b })];
                                                                        case 4:
                                                                            _d = (l = _f.sent(), l.ok);
                                                                            _f.label = 5;
                                                                        case 5:
                                                                            if (!_d) return [3, 7];
                                                                            return [4, l.html()];
                                                                        case 6:
                                                                            _c = (_f.sent()).select("li.wp-manga-chapter a");
                                                                            return [3, 8];
                                                                        case 7:
                                                                            _c = c;
                                                                            _f.label = 8;
                                                                        case 8: return [2, _c];
                                                                    }
                                                                }); });
                                                            }, toc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, c, f, l, b, k, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0: return [4, d.html(r)];
                                                                            case 1:
                                                                                i = _g.sent();
                                                                                return [4, y.chapterEls(i, r)];
                                                                            case 2:
                                                                                c = _g.sent(), f = [], l = c.size() - 1;
                                                                                _g.label = 3;
                                                                            case 3:
                                                                                if (!(l >= 0)) return [3, 8];
                                                                                return [4, c.get(l)];
                                                                            case 4:
                                                                                b = _g.sent(), k = b.attr("href");
                                                                                _b = !k || k === "#";
                                                                                if (_b) return [3, 6];
                                                                                _d = (_c = f).push;
                                                                                _f = {};
                                                                                return [4, b.text()];
                                                                            case 5:
                                                                                _b = _d.apply(_c, [(_f.name = (_g.sent()).trim(), _f.url = k, _f.host = w, _f)]);
                                                                                _g.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                l--;
                                                                                return [3, 3];
                                                                            case 8: return [2, s.success(f)];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, c, f, l, b, k, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            i = r.indexOf("?") > 0 ? r : r.replace(/\/$/, "") + "/?style=list";
                                                                            return [4, d.html(i)];
                                                                        case 1:
                                                                            c = _d.sent(), f = c.select(".reading-content img, .page-break img, .read-container img"), l = [], b = 0;
                                                                            _d.label = 2;
                                                                        case 2:
                                                                            if (!(b < f.size())) return [3, 5];
                                                                            _c = (_b = d).img;
                                                                            return [4, f.get(b)];
                                                                        case 3:
                                                                            k = _c.apply(_b, [_d.sent()]);
                                                                            k && l.push(k);
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            b++;
                                                                            return [3, 2];
                                                                        case 5: return [2, s.success(l)];
                                                                    }
                                                                }); });
                                                            }, text: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, c, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0: return [4, d.html(r)];
                                                                        case 1:
                                                                            i = _g.sent(), c = i.select(".reading-content .text-left, .reading-content .text-right, .reading-content, .entry-content").first();
                                                                            if (!c) return [3, 4];
                                                                            _d = (_c = s).success;
                                                                            return [4, d.cleanContent(c)];
                                                                        case 2:
                                                                            _f = [_g.sent()];
                                                                            return [4, d.text(i, ["#chapter-heading", ".breadcrumb li.active", "h1"])];
                                                                        case 3:
                                                                            _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                            return [3, 5];
                                                                        case 4:
                                                                            _b = s.error("Không tìm thấy nội dung chương");
                                                                            _g.label = 5;
                                                                        case 5: return [2, _b];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof B == "function" ? B : void 0];
                                                    });
                                                });
                                            })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, browse: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, a, n, s, o, h, p, m, x, T, v, S, N, C, F, z, K) {
                        return __awaiter(this, void 0, void 0, function () {
                            var M;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        M = t("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function B(r, i) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, y.browse(r, i)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var w, d, y;
                                                    return __generator(this, function (_b) {
                                                        w = "https://gaumeoteam.com";
                                                        try {
                                                            M && (w = String(M).replace(/\/+$/, ""));
                                                        }
                                                        catch (r) { }
                                                        d = { img: function (r) { if (!r)
                                                                return ""; for (var i = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < i.length; c++) {
                                                                var f = r.attr(i[c]);
                                                                if (f && f.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(f))
                                                                    return d.fix(f.trim());
                                                            } var l = r.attr("data-srcset") || r.attr("srcset"); return l ? d.fix(l.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? w + r : w + "/" + r) : ""; }, text: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(c < i.length)) return [3, 4];
                                                                            return [4, r.select(i[c]).text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, f.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            c++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            i = i || {};
                                                                            c = { Referer: w + "/" };
                                                                            if (i.headers)
                                                                                for (f in i.headers)
                                                                                    c[f] = i.headers[f];
                                                                            return [4, u(r, { method: i.method, headers: c, body: i.body })];
                                                                        case 1:
                                                                            l = _c.sent(), b = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = l && l.status === 429 && b < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(l)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, x(1500 * (b + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, u(r, { method: i.method, headers: c, body: i.body })];
                                                                        case 6:
                                                                            l = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            b++;
                                                                            return [3, 2];
                                                                        case 8: return [2, l];
                                                                    }
                                                                }); });
                                                            }, cf: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, r.text()];
                                                                        case 1:
                                                                            i = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(i.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.ok)
                                                                                return [2, r];
                                                                            return [4, d.cf(r)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + i.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + i);
                                                                    }
                                                                }); });
                                                            }, html: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, i)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.html(i && i.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, i)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (r) { var i = parseInt(r || "1", 10); return isNaN(i) || i < 1 ? 1 : i; }, next: function (r, i) { return r ? String(d.page(i) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, r.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, y = { path: function () { return typeof MADARA != "undefined" && MADARA.path || "manga"; }, card: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, c, f, _b;
                                                                    var _c;
                                                                    return __generator(this, function (_d) {
                                                                        switch (_d.label) {
                                                                            case 0:
                                                                                i = r.select(".post-title a, h3 a, h4 a, .item-summary a").first() || r.select("a").first();
                                                                                if (!i)
                                                                                    return [2, null];
                                                                                return [4, i.text()];
                                                                            case 1:
                                                                                c = (_d.sent()) || i.attr("title") || r.select("img").attr("alt"), f = r.select(".chapter a, .list-chapter .chapter-item a, .latest-chap a, .my-chapter-name a").first();
                                                                                _c = { name: c, link: i.attr("href"), cover: d.img(r.select("img").first()) };
                                                                                if (!f) return [3, 3];
                                                                                return [4, f.text()];
                                                                            case 2:
                                                                                _b = _d.sent();
                                                                                return [3, 4];
                                                                            case 3:
                                                                                _b = "";
                                                                                _d.label = 4;
                                                                            case 4: return [2, (_c.description = _b, _c.host = w, _c)];
                                                                        }
                                                                    });
                                                                });
                                                            }, list: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, c, f, l, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            i = r.select(".c-tabs-item__content, .page-item-detail, .manga-item, .comic-list-item, .comic-block"), c = [], f = {}, l = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(l < i.size())) return [3, 5];
                                                                            _c = (_b = y).card;
                                                                            return [4, i.get(l)];
                                                                        case 2: return [4, _c.apply(_b, [_d.sent()])];
                                                                        case 3:
                                                                            b = _d.sent();
                                                                            b && b.link && !f[b.link] && (f[b.link] = 1, c.push(b));
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 5: return [2, c];
                                                                    }
                                                                }); });
                                                            }, hasNext: function (r, i) { return r.select(".nav-previous a, a.nextpostslink, .wp-pagenavi a.next, a.next.page-numbers, .pagination a.next, a[rel=next]").size() > 0 || r.select('a[href*="/page/' + (i + 1) + '"]').size() > 0; }, browse: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = d.page(i), f = w + "/" + y.path() + "/" + (c > 1 ? "page/" + c + "/" : "") + "?m_orderby=" + (r || "latest");
                                                                            return [4, d.html(f)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, y.list(l)];
                                                                        case 2:
                                                                            b = _b.sent();
                                                                            return [2, s.success(b, d.next(y.hasNext(l, c) && b.length > 0, i))];
                                                                    }
                                                                }); });
                                                            }, search: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!d.isUrl(r)) return [3, 2];
                                                                            return [4, y.byUrl(r, i)];
                                                                        case 1: return [2, _b.sent()];
                                                                        case 2:
                                                                            c = d.page(i), f = w + "/" + (c > 1 ? "page/" + c + "/" : "") + "?s=" + d.enc(r) + "&post_type=wp-manga";
                                                                            return [4, d.html(f)];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            return [4, y.list(l)];
                                                                        case 4:
                                                                            b = _b.sent();
                                                                            return [2, s.success(b, d.next(y.hasNext(l, c) && b.length > 0, i))];
                                                                    }
                                                                }); });
                                                            }, byUrl: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = d.page(i), f = d.fix(r).replace(/\/$/, "") + "/" + (c > 1 ? "page/" + c + "/" : "");
                                                                            return [4, d.html(f)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, y.list(l)];
                                                                        case 2:
                                                                            b = _b.sent();
                                                                            return [2, s.success(b, d.next(y.hasNext(l, c) && b.length > 0, i))];
                                                                    }
                                                                }); });
                                                            }, detail: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, c, f, l, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0: return [4, d.html(r)];
                                                                            case 1:
                                                                                i = _g.sent();
                                                                                return [4, qt(i.select(".genres-content a, .wp-manga-genres a, .manga-genres a"), function (b) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, b.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = b.attr("href"), _b.script = "search.js", _b)];
                                                                                                }
                                                                                            });
                                                                                        });
                                                                                    })];
                                                                            case 2:
                                                                                c = _g.sent();
                                                                                return [4, d.text(i, [".post-status .summary-content", ".manga-status", ".post-content_item:contains(Tình trạng) .summary-content", ".post-content_item:contains(Status) .summary-content"])];
                                                                            case 3:
                                                                                f = _g.sent(), l = i.select(".description-summary .summary__content, .summary__content, .manga-excerpt, .description-summary, .manga-summary").first();
                                                                                _c = (_b = s).success;
                                                                                _f = {};
                                                                                return [4, d.text(i, [".post-title h1", ".post-title h3", "h1"])];
                                                                            case 4:
                                                                                _f.name = _g.sent(), _f.cover = d.img(i.select(".summary_image img, .tab-summary img").first());
                                                                                return [4, d.text(i, [".author-content a", ".author-content", ".artist-content a"])];
                                                                            case 5:
                                                                                _f.author = _g.sent();
                                                                                if (!l) return [3, 7];
                                                                                return [4, l.html()];
                                                                            case 6:
                                                                                _d = _g.sent();
                                                                                return [3, 8];
                                                                            case 7:
                                                                                _d = "";
                                                                                _g.label = 8;
                                                                            case 8: return [2, _c.apply(_b, [(_f.description = _d, _f.detail = f ? "Tình trạng: " + f : "", _f.ongoing = d.ongoing(f), _f.genres = c, _f.host = w, _f)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, chapterEls: function (r, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, f, l, _b, b, _c, _d; return __generator(this, function (_f) {
                                                                    switch (_f.label) {
                                                                        case 0:
                                                                            c = r.select("li.wp-manga-chapter a, .listing-chapters_wrap li a, .version-chap li a");
                                                                            if (c.size() > 0)
                                                                                return [2, c];
                                                                            f = i.replace(/\/$/, "") + "/";
                                                                            return [4, u(f + "ajax/chapters/", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", Referer: f } })];
                                                                        case 1:
                                                                            l = _f.sent();
                                                                            _b = l.ok;
                                                                            if (!_b) return [3, 3];
                                                                            return [4, l.html()];
                                                                        case 2:
                                                                            _b = (c = (_f.sent()).select("li.wp-manga-chapter a"), c.size() > 0);
                                                                            _f.label = 3;
                                                                        case 3:
                                                                            if (_b)
                                                                                return [2, c];
                                                                            b = r.select("#manga-chapters-holder").attr("data-id") || r.select(".rating-post-id").attr("value") || r.select("input.rating-post-id").attr("value");
                                                                            _d = b;
                                                                            if (!_d) return [3, 5];
                                                                            return [4, u(w + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", "Content-Type": "application/x-www-form-urlencoded" }, body: "action=manga_get_chapters&manga=" + b })];
                                                                        case 4:
                                                                            _d = (l = _f.sent(), l.ok);
                                                                            _f.label = 5;
                                                                        case 5:
                                                                            if (!_d) return [3, 7];
                                                                            return [4, l.html()];
                                                                        case 6:
                                                                            _c = (_f.sent()).select("li.wp-manga-chapter a");
                                                                            return [3, 8];
                                                                        case 7:
                                                                            _c = c;
                                                                            _f.label = 8;
                                                                        case 8: return [2, _c];
                                                                    }
                                                                }); });
                                                            }, toc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, c, f, l, b, k, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0: return [4, d.html(r)];
                                                                            case 1:
                                                                                i = _g.sent();
                                                                                return [4, y.chapterEls(i, r)];
                                                                            case 2:
                                                                                c = _g.sent(), f = [], l = c.size() - 1;
                                                                                _g.label = 3;
                                                                            case 3:
                                                                                if (!(l >= 0)) return [3, 8];
                                                                                return [4, c.get(l)];
                                                                            case 4:
                                                                                b = _g.sent(), k = b.attr("href");
                                                                                _b = !k || k === "#";
                                                                                if (_b) return [3, 6];
                                                                                _d = (_c = f).push;
                                                                                _f = {};
                                                                                return [4, b.text()];
                                                                            case 5:
                                                                                _b = _d.apply(_c, [(_f.name = (_g.sent()).trim(), _f.url = k, _f.host = w, _f)]);
                                                                                _g.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                l--;
                                                                                return [3, 3];
                                                                            case 8: return [2, s.success(f)];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, c, f, l, b, k, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            i = r.indexOf("?") > 0 ? r : r.replace(/\/$/, "") + "/?style=list";
                                                                            return [4, d.html(i)];
                                                                        case 1:
                                                                            c = _d.sent(), f = c.select(".reading-content img, .page-break img, .read-container img"), l = [], b = 0;
                                                                            _d.label = 2;
                                                                        case 2:
                                                                            if (!(b < f.size())) return [3, 5];
                                                                            _c = (_b = d).img;
                                                                            return [4, f.get(b)];
                                                                        case 3:
                                                                            k = _c.apply(_b, [_d.sent()]);
                                                                            k && l.push(k);
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            b++;
                                                                            return [3, 2];
                                                                        case 5: return [2, s.success(l)];
                                                                    }
                                                                }); });
                                                            }, text: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, c, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0: return [4, d.html(r)];
                                                                        case 1:
                                                                            i = _g.sent(), c = i.select(".reading-content .text-left, .reading-content .text-right, .reading-content, .entry-content").first();
                                                                            if (!c) return [3, 4];
                                                                            _d = (_c = s).success;
                                                                            return [4, d.cleanContent(c)];
                                                                        case 2:
                                                                            _f = [_g.sent()];
                                                                            return [4, d.text(i, ["#chapter-heading", ".breadcrumb li.active", "h1"])];
                                                                        case 3:
                                                                            _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                            return [3, 5];
                                                                        case 4:
                                                                            _b = s.error("Không tìm thấy nội dung chương");
                                                                            _g.label = 5;
                                                                        case 5: return [2, _b];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof B == "function" ? B : void 0];
                                                    });
                                                });
                                            })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    } };
function Ua(e) { return new ve({ meta: ut, scripts: Ia, host: e }); }
var f0 = require("@libs/fetch").fetchApi, Gt = null;
try {
    Gt = require("@libs/storage");
}
catch (e) {
    Gt = null;
}
var wu = {}, Se = Gt && Gt.storage ? Gt.storage : { get: function (e) { return wu[e]; }, set: function (e, t) { wu[e] = t; }, delete: function (e) { delete wu[e]; } }, vu = (function () {
    function class_2() {
        var _this = this;
        this.id = ut.lnId, this.name = ut.name, this.icon = ut.lnIcon, this.site = ut.source, this.version = ut.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = Ua({ name: "LNReader", request: function (t) { return __awaiter(_this, void 0, void 0, function () {
                var u, a, n;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            u = { method: t.method, headers: t.headers };
                            t.body != null && t.method !== "GET" && (u.body = t.body);
                            return [4, f0(t.url, u)];
                        case 1:
                            a = _c.sent(), n = {};
                            try {
                                a.headers.forEach(function (s, o) { n[o] = s; });
                            }
                            catch (s) { }
                            _b = { status: a.status, url: a.url || t.url, headers: n };
                            return [4, a.text()];
                        case 2: return [2, (_b.text = _c.sent(), _b)];
                    }
                });
            }); }, storageGet: function (t) { var u = Se.get("vb_" + t); return u == null ? null : String(u); }, storageSet: function (t, u) { u == null ? Se.delete && Se.delete("vb_" + t) : Se.set("vb_" + t, String(u)); }, config: function (t) { return null; }, log: function (t) { return console.log(t); } });
    }
    class_2.prototype.popularNovels = function (t, u) {
        return __awaiter(this, void 0, void 0, function () { var _b; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(u && u.showLatestNovels)) return [3, 2];
                    return [4, this.engine.latest(t)];
                case 1:
                    _b = _c.sent();
                    return [3, 4];
                case 2: return [4, this.engine.popular(t)];
                case 3:
                    _b = _c.sent();
                    _c.label = 4;
                case 4: return [2, (_b).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (t, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.search(t, u)];
                case 1: return [2, (_b.sent()).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.detail(t)];
                case 1:
                    u = _b.sent();
                    return [4, this.engine.chapters(t)];
                case 2:
                    a = _b.sent();
                    return [2, { path: t, name: u.name || "Untitled", cover: u.cover, summary: u.description, author: u.author, status: u.ongoing ? "Ongoing" : "Completed", genres: u.genres.join(","), chapters: a.map(function (n, s) { return ({ name: n.name, path: n.url, chapterNumber: s + 1 }); }) }];
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
    class_2.prototype.resolveUrl = function (t, u) { return /^https?:/i.test(t) ? t : ut.source.replace(/\/+$/, "") + "/" + String(t).replace(/^\/+/, ""); };
    return class_2;
}()), d0 = new vu;

if (typeof exports === "object" && exports && module.exports !== exports && module.exports && module.exports.default) exports.default = module.exports.default;
