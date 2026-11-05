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
var m0 = Object.create;
var Ke = Object.defineProperty, x0 = Object.defineProperties, y0 = Object.getOwnPropertyDescriptor, v0 = Object.getOwnPropertyDescriptors, w0 = Object.getOwnPropertyNames, ur = Object.getOwnPropertySymbols, S0 = Object.getPrototypeOf, ar = Object.prototype.hasOwnProperty, E0 = Object.prototype.propertyIsEnumerable;
var rr = function (e, t, u) { return t in e ? Ke(e, t, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[t] = u; }, de = function (e, t) {
    var e_2, _b;
    for (var u in t || (t = {}))
        ar.call(t, u) && rr(e, u, t[u]);
    if (ur)
        try {
            for (var _c = __values(ur(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var u = _d.value;
                E0.call(t, u) && rr(e, u, t[u]);
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
}, Te = function (e, t) { return x0(e, v0(t)); };
var A0 = function (e, t) { return function () { return (t || e((t = { exports: {} }).exports, t), t.exports); }; }, $t = function (e, t) { for (var u in t)
    Ke(e, u, { get: t[u], enumerable: !0 }); }, nr = function (e, t, u, r) {
    var e_3, _b;
    if (t && typeof t == "object" || typeof t == "function") {
        var _loop_1 = function (a) {
            !ar.call(e, a) && a !== u && Ke(e, a, { get: function () { return t[a]; }, enumerable: !(r = y0(t, a)) || r.enumerable });
        };
        try {
            for (var _c = __values(w0(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var a = _d.value;
                _loop_1(a);
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
var Ne = function (e, t, u) { return (u = e != null ? m0(S0(e)) : {}, nr(t || !e || !e.__esModule ? Ke(u, "default", { value: e, enumerable: !0 }) : u, e)); }, T0 = function (e) { return nr(Ke({}, "__esModule", { value: !0 }), e); };
var Ae = A0(function (Ni, Ur) { Ur.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var Xa = {};
$t(Xa, { default: function () { return Qa; } });
module.exports = T0(Xa);
var lt = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (e) { return e.charCodeAt(0); }));
var ft = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (e) { return e.charCodeAt(0); }));
var Qt, N0 = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), De = (Qt = String.fromCodePoint) !== null && Qt !== void 0 ? Qt : function (e) { var t = ""; return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t; };
function Xt(e) { var t; return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = N0.get(e)) !== null && t !== void 0 ? t : e; }
var z;
(function (e) { e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z"; })(z || (z = {}));
var k0 = 32, ve;
(function (e) { e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE"; })(ve || (ve = {}));
function Zt(e) { return e >= z.ZERO && e <= z.NINE; }
function C0(e) { return e >= z.UPPER_A && e <= z.UPPER_F || e >= z.LOWER_A && e <= z.LOWER_F; }
function q0(e) { return e >= z.UPPER_A && e <= z.UPPER_Z || e >= z.LOWER_A && e <= z.LOWER_Z || Zt(e); }
function L0(e) { return e === z.EQUALS || q0(e); }
var j;
(function (e) { e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity"; })(j || (j = {}));
var ae;
(function (e) { e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute"; })(ae || (ae = {}));
var Oe = (function () {
    function Oe(t, u, r) {
        this.decodeTree = t, this.emitCodePoint = u, this.errors = r, this.state = j.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = ae.Strict;
    }
    Oe.prototype.startEntity = function (t) { this.decodeMode = t, this.state = j.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    Oe.prototype.write = function (t, u) { switch (this.state) {
        case j.EntityStart: return t.charCodeAt(u) === z.NUM ? (this.state = j.NumericStart, this.consumed += 1, this.stateNumericStart(t, u + 1)) : (this.state = j.NamedEntity, this.stateNamedEntity(t, u));
        case j.NumericStart: return this.stateNumericStart(t, u);
        case j.NumericDecimal: return this.stateNumericDecimal(t, u);
        case j.NumericHex: return this.stateNumericHex(t, u);
        case j.NamedEntity: return this.stateNamedEntity(t, u);
    } };
    Oe.prototype.stateNumericStart = function (t, u) { return u >= t.length ? -1 : (t.charCodeAt(u) | k0) === z.LOWER_X ? (this.state = j.NumericHex, this.consumed += 1, this.stateNumericHex(t, u + 1)) : (this.state = j.NumericDecimal, this.stateNumericDecimal(t, u)); };
    Oe.prototype.addToNumericResult = function (t, u, r, a) { if (u !== r) {
        var n = r - u;
        this.result = this.result * Math.pow(a, n) + parseInt(t.substr(u, n), a), this.consumed += n;
    } };
    Oe.prototype.stateNumericHex = function (t, u) { var r = u; for (; u < t.length;) {
        var a = t.charCodeAt(u);
        if (Zt(a) || C0(a))
            u += 1;
        else
            return this.addToNumericResult(t, r, u, 16), this.emitNumericEntity(a, 3);
    } return this.addToNumericResult(t, r, u, 16), -1; };
    Oe.prototype.stateNumericDecimal = function (t, u) { var r = u; for (; u < t.length;) {
        var a = t.charCodeAt(u);
        if (Zt(a))
            u += 1;
        else
            return this.addToNumericResult(t, r, u, 10), this.emitNumericEntity(a, 2);
    } return this.addToNumericResult(t, r, u, 10), -1; };
    Oe.prototype.emitNumericEntity = function (t, u) { var r; if (this.consumed <= u)
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (t === z.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === ae.Strict)
        return 0; return this.emitCodePoint(Xt(this.result), this.consumed), this.errors && (t !== z.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    Oe.prototype.stateNamedEntity = function (t, u) { var r = this.decodeTree, a = r[this.treeIndex], n = (a & ve.VALUE_LENGTH) >> 14; for (; u < t.length; u++, this.excess++) {
        var i = t.charCodeAt(u);
        if (this.treeIndex = I0(r, a, this.treeIndex + Math.max(1, n), i), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === ae.Attribute && (n === 0 || L0(i)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (a = r[this.treeIndex], n = (a & ve.VALUE_LENGTH) >> 14, n !== 0) {
            if (i === z.SEMI)
                return this.emitNamedEntityData(this.treeIndex, n, this.consumed + this.excess);
            this.decodeMode !== ae.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    Oe.prototype.emitNotTerminatedNamedEntity = function () { var t; var _b = this, u = _b.result, r = _b.decodeTree, a = (r[u] & ve.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(u, a, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed; };
    Oe.prototype.emitNamedEntityData = function (t, u, r) { var a = this.decodeTree; return this.emitCodePoint(u === 1 ? a[t] & ~ve.VALUE_LENGTH : a[t + 1], r), u === 3 && this.emitCodePoint(a[t + 2], r), r; };
    Oe.prototype.end = function () { var t; switch (this.state) {
        case j.NamedEntity: return this.result !== 0 && (this.decodeMode !== ae.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case j.NumericDecimal: return this.emitNumericEntity(0, 2);
        case j.NumericHex: return this.emitNumericEntity(0, 3);
        case j.NumericStart: return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case j.EntityStart: return 0;
    } };
    return Oe;
}());
function ir(e) { var t = "", u = new Oe(e, function (r) { return t += De(r); }); return function (a, n) { var i = 0, c = 0; for (; (c = a.indexOf("&", c)) >= 0;) {
    t += a.slice(i, c), u.startEntity(n);
    var b = u.write(a, c + 1);
    if (b < 0) {
        i = c + u.end();
        break;
    }
    i = c + b, c = b === 0 ? i + 1 : i;
} var f = t + a.slice(i); return t = "", f; }; }
function I0(e, t, u, r) { var a = (t & ve.BRANCH_LENGTH) >> 7, n = t & ve.JUMP_TABLE; if (a === 0)
    return n !== 0 && r === n ? u : -1; if (n) {
    var f = r - n;
    return f < 0 || f >= a ? -1 : e[u + f] - 1;
} var i = u, c = i + a - 1; for (; i <= c;) {
    var f = i + c >>> 1, b = e[f];
    if (b < r)
        i = f + 1;
    else if (b > r)
        c = f - 1;
    else
        return e[f + a];
} return -1; }
var nn = ir(lt), sn = ir(ft);
var k;
(function (e) { e[e.Tab = 9] = "Tab", e[e.NewLine = 10] = "NewLine", e[e.FormFeed = 12] = "FormFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.Number = 35] = "Number", e[e.Amp = 38] = "Amp", e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Dash = 45] = "Dash", e[e.Slash = 47] = "Slash", e[e.Zero = 48] = "Zero", e[e.Nine = 57] = "Nine", e[e.Semi = 59] = "Semi", e[e.Lt = 60] = "Lt", e[e.Eq = 61] = "Eq", e[e.Gt = 62] = "Gt", e[e.Questionmark = 63] = "Questionmark", e[e.UpperA = 65] = "UpperA", e[e.LowerA = 97] = "LowerA", e[e.UpperF = 70] = "UpperF", e[e.LowerF = 102] = "LowerF", e[e.UpperZ = 90] = "UpperZ", e[e.LowerZ = 122] = "LowerZ", e[e.LowerX = 120] = "LowerX", e[e.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(k || (k = {}));
var x;
(function (e) { e[e.Text = 1] = "Text", e[e.BeforeTagName = 2] = "BeforeTagName", e[e.InTagName = 3] = "InTagName", e[e.InSelfClosingTag = 4] = "InSelfClosingTag", e[e.BeforeClosingTagName = 5] = "BeforeClosingTagName", e[e.InClosingTagName = 6] = "InClosingTagName", e[e.AfterClosingTagName = 7] = "AfterClosingTagName", e[e.BeforeAttributeName = 8] = "BeforeAttributeName", e[e.InAttributeName = 9] = "InAttributeName", e[e.AfterAttributeName = 10] = "AfterAttributeName", e[e.BeforeAttributeValue = 11] = "BeforeAttributeValue", e[e.InAttributeValueDq = 12] = "InAttributeValueDq", e[e.InAttributeValueSq = 13] = "InAttributeValueSq", e[e.InAttributeValueNq = 14] = "InAttributeValueNq", e[e.BeforeDeclaration = 15] = "BeforeDeclaration", e[e.InDeclaration = 16] = "InDeclaration", e[e.InProcessingInstruction = 17] = "InProcessingInstruction", e[e.BeforeComment = 18] = "BeforeComment", e[e.CDATASequence = 19] = "CDATASequence", e[e.InSpecialComment = 20] = "InSpecialComment", e[e.InCommentLike = 21] = "InCommentLike", e[e.BeforeSpecialS = 22] = "BeforeSpecialS", e[e.BeforeSpecialT = 23] = "BeforeSpecialT", e[e.SpecialStartSequence = 24] = "SpecialStartSequence", e[e.InSpecialTag = 25] = "InSpecialTag", e[e.InEntity = 26] = "InEntity"; })(x || (x = {}));
function ge(e) { return e === k.Space || e === k.NewLine || e === k.Tab || e === k.FormFeed || e === k.CarriageReturn; }
function dt(e) { return e === k.Slash || e === k.Gt || ge(e); }
function D0(e) { return e >= k.LowerA && e <= k.LowerZ || e >= k.UpperA && e <= k.UpperZ; }
var ce;
(function (e) { e[e.NoValue = 0] = "NoValue", e[e.Unquoted = 1] = "Unquoted", e[e.Single = 2] = "Single", e[e.Double = 3] = "Double"; })(ce || (ce = {}));
var Z = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Ue = (function () {
    function Ue(_b, r) {
        var _c = _b.xmlMode, t = _c === void 0 ? !1 : _c, _d = _b.decodeEntities, u = _d === void 0 ? !0 : _d;
        var _this = this;
        this.cbs = r, this.state = x.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = x.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = t, this.decodeEntities = u, this.entityDecoder = new Oe(t ? ft : lt, function (a, n) { return _this.emitCodePoint(a, n); });
    }
    Ue.prototype.reset = function () { this.state = x.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = x.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Ue.prototype.write = function (t) { this.offset += this.buffer.length, this.buffer = t, this.parse(); };
    Ue.prototype.end = function () { this.running && this.finish(); };
    Ue.prototype.pause = function () { this.running = !1; };
    Ue.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Ue.prototype.stateText = function (t) { t === k.Lt || !this.decodeEntities && this.fastForwardTo(k.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = x.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && t === k.Amp && this.startEntity(); };
    Ue.prototype.stateSpecialStartSequence = function (t) { var u = this.sequenceIndex === this.currentSequence.length; if (!(u ? dt(t) : (t | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!u) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = x.InTagName, this.stateInTagName(t); };
    Ue.prototype.stateInSpecialTag = function (t) { if (this.sequenceIndex === this.currentSequence.length) {
        if (t === k.Gt || ge(t)) {
            var u = this.index - this.currentSequence.length;
            if (this.sectionStart < u) {
                var r = this.index;
                this.index = u, this.cbs.ontext(this.sectionStart, u), this.index = r;
            }
            this.isSpecial = !1, this.sectionStart = u + 2, this.stateInClosingTagName(t);
            return;
        }
        this.sequenceIndex = 0;
    } (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Z.TitleEnd ? this.decodeEntities && t === k.Amp && this.startEntity() : this.fastForwardTo(k.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === k.Lt); };
    Ue.prototype.stateCDATASequence = function (t) { t === Z.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Z.Cdata.length && (this.state = x.InCommentLike, this.currentSequence = Z.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = x.InDeclaration, this.stateInDeclaration(t)); };
    Ue.prototype.fastForwardTo = function (t) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === t)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Ue.prototype.stateInCommentLike = function (t) { t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Z.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = x.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Ue.prototype.isTagStartChar = function (t) { return this.xmlMode ? !dt(t) : D0(t); };
    Ue.prototype.startSpecial = function (t, u) { this.isSpecial = !0, this.currentSequence = t, this.sequenceIndex = u, this.state = x.SpecialStartSequence; };
    Ue.prototype.stateBeforeTagName = function (t) { if (t === k.ExclamationMark)
        this.state = x.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (t === k.Questionmark)
        this.state = x.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(t)) {
        var u = t | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = x.InTagName : u === Z.ScriptEnd[2] ? this.state = x.BeforeSpecialS : u === Z.TitleEnd[2] ? this.state = x.BeforeSpecialT : this.state = x.InTagName;
    }
    else
        t === k.Slash ? this.state = x.BeforeClosingTagName : (this.state = x.Text, this.stateText(t)); };
    Ue.prototype.stateInTagName = function (t) { dt(t) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(t)); };
    Ue.prototype.stateBeforeClosingTagName = function (t) { ge(t) || (t === k.Gt ? this.state = x.Text : (this.state = this.isTagStartChar(t) ? x.InClosingTagName : x.InSpecialComment, this.sectionStart = this.index)); };
    Ue.prototype.stateInClosingTagName = function (t) { (t === k.Gt || ge(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = x.AfterClosingTagName, this.stateAfterClosingTagName(t)); };
    Ue.prototype.stateAfterClosingTagName = function (t) { (t === k.Gt || this.fastForwardTo(k.Gt)) && (this.state = x.Text, this.sectionStart = this.index + 1); };
    Ue.prototype.stateBeforeAttributeName = function (t) { t === k.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = x.InSpecialTag, this.sequenceIndex = 0) : this.state = x.Text, this.sectionStart = this.index + 1) : t === k.Slash ? this.state = x.InSelfClosingTag : ge(t) || (this.state = x.InAttributeName, this.sectionStart = this.index); };
    Ue.prototype.stateInSelfClosingTag = function (t) { t === k.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = x.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : ge(t) || (this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(t)); };
    Ue.prototype.stateInAttributeName = function (t) { (t === k.Eq || dt(t)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = x.AfterAttributeName, this.stateAfterAttributeName(t)); };
    Ue.prototype.stateAfterAttributeName = function (t) { t === k.Eq ? this.state = x.BeforeAttributeValue : t === k.Slash || t === k.Gt ? (this.cbs.onattribend(ce.NoValue, this.sectionStart), this.sectionStart = -1, this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(t)) : ge(t) || (this.cbs.onattribend(ce.NoValue, this.sectionStart), this.state = x.InAttributeName, this.sectionStart = this.index); };
    Ue.prototype.stateBeforeAttributeValue = function (t) { t === k.DoubleQuote ? (this.state = x.InAttributeValueDq, this.sectionStart = this.index + 1) : t === k.SingleQuote ? (this.state = x.InAttributeValueSq, this.sectionStart = this.index + 1) : ge(t) || (this.sectionStart = this.index, this.state = x.InAttributeValueNq, this.stateInAttributeValueNoQuotes(t)); };
    Ue.prototype.handleInAttributeValue = function (t, u) { t === u || !this.decodeEntities && this.fastForwardTo(u) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(u === k.DoubleQuote ? ce.Double : ce.Single, this.index + 1), this.state = x.BeforeAttributeName) : this.decodeEntities && t === k.Amp && this.startEntity(); };
    Ue.prototype.stateInAttributeValueDoubleQuotes = function (t) { this.handleInAttributeValue(t, k.DoubleQuote); };
    Ue.prototype.stateInAttributeValueSingleQuotes = function (t) { this.handleInAttributeValue(t, k.SingleQuote); };
    Ue.prototype.stateInAttributeValueNoQuotes = function (t) { ge(t) || t === k.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(ce.Unquoted, this.index), this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(t)) : this.decodeEntities && t === k.Amp && this.startEntity(); };
    Ue.prototype.stateBeforeDeclaration = function (t) { t === k.OpeningSquareBracket ? (this.state = x.CDATASequence, this.sequenceIndex = 0) : this.state = t === k.Dash ? x.BeforeComment : x.InDeclaration; };
    Ue.prototype.stateInDeclaration = function (t) { (t === k.Gt || this.fastForwardTo(k.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = x.Text, this.sectionStart = this.index + 1); };
    Ue.prototype.stateInProcessingInstruction = function (t) { (t === k.Gt || this.fastForwardTo(k.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = x.Text, this.sectionStart = this.index + 1); };
    Ue.prototype.stateBeforeComment = function (t) { t === k.Dash ? (this.state = x.InCommentLike, this.currentSequence = Z.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = x.InDeclaration; };
    Ue.prototype.stateInSpecialComment = function (t) { (t === k.Gt || this.fastForwardTo(k.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = x.Text, this.sectionStart = this.index + 1); };
    Ue.prototype.stateBeforeSpecialS = function (t) { var u = t | 32; u === Z.ScriptEnd[3] ? this.startSpecial(Z.ScriptEnd, 4) : u === Z.StyleEnd[3] ? this.startSpecial(Z.StyleEnd, 4) : (this.state = x.InTagName, this.stateInTagName(t)); };
    Ue.prototype.stateBeforeSpecialT = function (t) { var u = t | 32; u === Z.TitleEnd[3] ? this.startSpecial(Z.TitleEnd, 4) : u === Z.TextareaEnd[3] ? this.startSpecial(Z.TextareaEnd, 4) : (this.state = x.InTagName, this.stateInTagName(t)); };
    Ue.prototype.startEntity = function () { this.baseState = this.state, this.state = x.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? ae.Strict : this.baseState === x.Text || this.baseState === x.InSpecialTag ? ae.Legacy : ae.Attribute); };
    Ue.prototype.stateInEntity = function () { var t = this.entityDecoder.write(this.buffer, this.index - this.offset); t >= 0 ? (this.state = this.baseState, t === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Ue.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === x.Text || this.state === x.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === x.InAttributeValueDq || this.state === x.InAttributeValueSq || this.state === x.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Ue.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Ue.prototype.parse = function () { for (; this.shouldContinue();) {
        var t = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case x.Text: {
                this.stateText(t);
                break;
            }
            case x.SpecialStartSequence: {
                this.stateSpecialStartSequence(t);
                break;
            }
            case x.InSpecialTag: {
                this.stateInSpecialTag(t);
                break;
            }
            case x.CDATASequence: {
                this.stateCDATASequence(t);
                break;
            }
            case x.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(t);
                break;
            }
            case x.InAttributeName: {
                this.stateInAttributeName(t);
                break;
            }
            case x.InCommentLike: {
                this.stateInCommentLike(t);
                break;
            }
            case x.InSpecialComment: {
                this.stateInSpecialComment(t);
                break;
            }
            case x.BeforeAttributeName: {
                this.stateBeforeAttributeName(t);
                break;
            }
            case x.InTagName: {
                this.stateInTagName(t);
                break;
            }
            case x.InClosingTagName: {
                this.stateInClosingTagName(t);
                break;
            }
            case x.BeforeTagName: {
                this.stateBeforeTagName(t);
                break;
            }
            case x.AfterAttributeName: {
                this.stateAfterAttributeName(t);
                break;
            }
            case x.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(t);
                break;
            }
            case x.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(t);
                break;
            }
            case x.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(t);
                break;
            }
            case x.AfterClosingTagName: {
                this.stateAfterClosingTagName(t);
                break;
            }
            case x.BeforeSpecialS: {
                this.stateBeforeSpecialS(t);
                break;
            }
            case x.BeforeSpecialT: {
                this.stateBeforeSpecialT(t);
                break;
            }
            case x.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(t);
                break;
            }
            case x.InSelfClosingTag: {
                this.stateInSelfClosingTag(t);
                break;
            }
            case x.InDeclaration: {
                this.stateInDeclaration(t);
                break;
            }
            case x.BeforeDeclaration: {
                this.stateBeforeDeclaration(t);
                break;
            }
            case x.BeforeComment: {
                this.stateBeforeComment(t);
                break;
            }
            case x.InProcessingInstruction: {
                this.stateInProcessingInstruction(t);
                break;
            }
            case x.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Ue.prototype.finish = function () { this.state === x.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Ue.prototype.handleTrailingData = function () { var t = this.buffer.length + this.offset; this.sectionStart >= t || (this.state === x.InCommentLike ? this.currentSequence === Z.CdataEnd ? this.cbs.oncdata(this.sectionStart, t, 0) : this.cbs.oncomment(this.sectionStart, t, 0) : this.state === x.InTagName || this.state === x.BeforeAttributeName || this.state === x.BeforeAttributeValue || this.state === x.AfterAttributeName || this.state === x.InAttributeName || this.state === x.InAttributeValueSq || this.state === x.InAttributeValueDq || this.state === x.InAttributeValueNq || this.state === x.InClosingTagName || this.cbs.ontext(this.sectionStart, t)); };
    Ue.prototype.emitCodePoint = function (t, u) { this.baseState !== x.Text && this.baseState !== x.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.onattribentity(t)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.ontextentity(t, this.sectionStart)); };
    return Ue;
}());
var Re = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), R = new Set(["p"]), sr = new Set(["thead", "tbody"]), cr = new Set(["dd", "dt"]), or = new Set(["rt", "rp"]), O0 = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", R], ["h1", R], ["h2", R], ["h3", R], ["h4", R], ["h5", R], ["h6", R], ["select", Re], ["input", Re], ["output", Re], ["button", Re], ["datalist", Re], ["textarea", Re], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", cr], ["dt", cr], ["address", R], ["article", R], ["aside", R], ["blockquote", R], ["details", R], ["div", R], ["dl", R], ["fieldset", R], ["figcaption", R], ["figure", R], ["footer", R], ["form", R], ["header", R], ["hr", R], ["main", R], ["nav", R], ["ol", R], ["pre", R], ["section", R], ["table", R], ["ul", R], ["rt", or], ["rp", or], ["tbody", sr], ["tfoot", sr]]), U0 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), lr = new Set(["math", "svg"]), fr = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), R0 = /\s|\//, _e = (function () {
    function _e(t, u) {
        if (u === void 0) { u = {}; }
        var r, a, n, i, c, f;
        this.options = u, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = t != null ? t : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r = u.lowerCaseTags) !== null && r !== void 0 ? r : this.htmlMode, this.lowerCaseAttributeNames = (a = u.lowerCaseAttributeNames) !== null && a !== void 0 ? a : this.htmlMode, this.recognizeSelfClosing = (n = u.recognizeSelfClosing) !== null && n !== void 0 ? n : !this.htmlMode, this.tokenizer = new ((i = u.Tokenizer) !== null && i !== void 0 ? i : Ue)(this.options, this), this.foreignContext = [!this.htmlMode], (f = (c = this.cbs).onparserinit) === null || f === void 0 || f.call(c, this);
    }
    _e.prototype.ontext = function (t, u) { var r, a; var n = this.getSlice(t, u); this.endIndex = u - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, n), this.startIndex = u; };
    _e.prototype.ontextentity = function (t, u) { var r, a; this.endIndex = u - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, De(t)), this.startIndex = u; };
    _e.prototype.isVoidElement = function (t) { return this.htmlMode && U0.has(t); };
    _e.prototype.onopentagname = function (t, u) { this.endIndex = u; var r = this.getSlice(t, u); this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r); };
    _e.prototype.emitOpenTag = function (t) { var u, r, a, n; this.openTagStart = this.startIndex, this.tagname = t; var i = this.htmlMode && O0.get(t); if (i)
        for (; this.stack.length > 0 && i.has(this.stack[0]);) {
            var c = this.stack.shift();
            (r = (u = this.cbs).onclosetag) === null || r === void 0 || r.call(u, c, !0);
        } this.isVoidElement(t) || (this.stack.unshift(t), this.htmlMode && (lr.has(t) ? this.foreignContext.unshift(!0) : fr.has(t) && this.foreignContext.unshift(!1))), (n = (a = this.cbs).onopentagname) === null || n === void 0 || n.call(a, t), this.cbs.onopentag && (this.attribs = {}); };
    _e.prototype.endOpenTag = function (t) { var u, r; this.startIndex = this.openTagStart, this.attribs && ((r = (u = this.cbs).onopentag) === null || r === void 0 || r.call(u, this.tagname, this.attribs, t), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    _e.prototype.onopentagend = function (t) { this.endIndex = t, this.endOpenTag(!1), this.startIndex = t + 1; };
    _e.prototype.onclosetag = function (t, u) { var r, a, n, i, c, f, b, w; this.endIndex = u; var L = this.getSlice(t, u); if (this.lowerCaseTagNames && (L = L.toLowerCase()), this.htmlMode && (lr.has(L) || fr.has(L)) && this.foreignContext.shift(), this.isVoidElement(L))
        this.htmlMode && L === "br" && ((i = (n = this.cbs).onopentagname) === null || i === void 0 || i.call(n, "br"), (f = (c = this.cbs).onopentag) === null || f === void 0 || f.call(c, "br", {}, !0), (w = (b = this.cbs).onclosetag) === null || w === void 0 || w.call(b, "br", !1));
    else {
        var A = this.stack.indexOf(L);
        if (A !== -1)
            for (var T = 0; T <= A; T++) {
                var I = this.stack.shift();
                (a = (r = this.cbs).onclosetag) === null || a === void 0 || a.call(r, I, T !== A);
            }
        else
            this.htmlMode && L === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = u + 1; };
    _e.prototype.onselfclosingtag = function (t) { this.endIndex = t, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = t + 1) : this.onopentagend(t); };
    _e.prototype.closeCurrentTag = function (t) { var u, r; var a = this.tagname; this.endOpenTag(t), this.stack[0] === a && ((r = (u = this.cbs).onclosetag) === null || r === void 0 || r.call(u, a, !t), this.stack.shift()); };
    _e.prototype.onattribname = function (t, u) { this.startIndex = t; var r = this.getSlice(t, u); this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r; };
    _e.prototype.onattribdata = function (t, u) { this.attribvalue += this.getSlice(t, u); };
    _e.prototype.onattribentity = function (t) { this.attribvalue += De(t); };
    _e.prototype.onattribend = function (t, u) { var r, a; this.endIndex = u, (a = (r = this.cbs).onattribute) === null || a === void 0 || a.call(r, this.attribname, this.attribvalue, t === ce.Double ? '"' : t === ce.Single ? "'" : t === ce.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    _e.prototype.getInstructionName = function (t) { var u = t.search(R0), r = u < 0 ? t : t.substr(0, u); return this.lowerCaseTagNames && (r = r.toLowerCase()), r; };
    _e.prototype.ondeclaration = function (t, u) { this.endIndex = u; var r = this.getSlice(t, u); if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(a), "!".concat(r));
    } this.startIndex = u + 1; };
    _e.prototype.onprocessinginstruction = function (t, u) { this.endIndex = u; var r = this.getSlice(t, u); if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(a), "?".concat(r));
    } this.startIndex = u + 1; };
    _e.prototype.oncomment = function (t, u, r) { var a, n, i, c; this.endIndex = u, (n = (a = this.cbs).oncomment) === null || n === void 0 || n.call(a, this.getSlice(t, u - r)), (c = (i = this.cbs).oncommentend) === null || c === void 0 || c.call(i), this.startIndex = u + 1; };
    _e.prototype.oncdata = function (t, u, r) { var a, n, i, c, f, b, w, L, A, T; this.endIndex = u; var I = this.getSlice(t, u - r); !this.htmlMode || this.options.recognizeCDATA ? ((n = (a = this.cbs).oncdatastart) === null || n === void 0 || n.call(a), (c = (i = this.cbs).ontext) === null || c === void 0 || c.call(i, I), (b = (f = this.cbs).oncdataend) === null || b === void 0 || b.call(f)) : ((L = (w = this.cbs).oncomment) === null || L === void 0 || L.call(w, "[CDATA[".concat(I, "]]")), (T = (A = this.cbs).oncommentend) === null || T === void 0 || T.call(A)), this.startIndex = u + 1; };
    _e.prototype.onend = function () { var t, u; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = 0; r < this.stack.length; r++)
            this.cbs.onclosetag(this.stack[r], !0);
    } (u = (t = this.cbs).onend) === null || u === void 0 || u.call(t); };
    _e.prototype.reset = function () { var t, u, r, a; (u = (t = this.cbs).onreset) === null || u === void 0 || u.call(t), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (a = (r = this.cbs).onparserinit) === null || a === void 0 || a.call(r, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    _e.prototype.parseComplete = function (t) { this.reset(), this.end(t); };
    _e.prototype.getSlice = function (t, u) { for (; t - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var r = this.buffers[0].slice(t - this.bufferOffset, u - this.bufferOffset); for (; u - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), r += this.buffers[0].slice(0, u - this.bufferOffset); return r; };
    _e.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    _e.prototype.write = function (t) { var u, r; if (this.ended) {
        (r = (u = this.cbs).onerror) === null || r === void 0 || r.call(u, new Error(".write() after done!"));
        return;
    } this.buffers.push(t), this.tokenizer.running && (this.tokenizer.write(t), this.writeIndex++); };
    _e.prototype.end = function (t) { var u, r; if (this.ended) {
        (r = (u = this.cbs).onerror) === null || r === void 0 || r.call(u, new Error(".end() after done!"));
        return;
    } t && this.write(t), this.ended = !0, this.tokenizer.end(); };
    _e.prototype.pause = function () { this.tokenizer.pause(); };
    _e.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    _e.prototype.parseChunk = function (t) { this.write(t); };
    _e.prototype.done = function (t) { this.end(t); };
    return _e;
}());
var ht = {};
$t(ht, { CDATA: function () { return iu; }, Comment: function () { return uu; }, Directive: function () { return tu; }, Doctype: function () { return su; }, ElementType: function () { return O; }, Root: function () { return Yt; }, Script: function () { return ru; }, Style: function () { return au; }, Tag: function () { return nu; }, Text: function () { return eu; }, isTag: function () { return Jt; } });
var O;
(function (e) { e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"; })(O || (O = {}));
function Jt(e) { return e.type === O.Tag || e.type === O.Script || e.type === O.Style; }
var Yt = O.Root, eu = O.Text, tu = O.Directive, uu = O.Comment, ru = O.Script, au = O.Style, nu = O.Tag, iu = O.CDATA, su = O.Doctype;
var bt = (function () {
    function bt() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(bt.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (t) { this.parent = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(bt.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (t) { this.prev = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(bt.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (t) { this.next = t; },
        enumerable: false,
        configurable: true
    });
    bt.prototype.cloneNode = function (t) {
        if (t === void 0) { t = !1; }
        return dr(this, t);
    };
    return bt;
}()), We = (function (_super) {
    __extends(We, _super);
    function We(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = t;
        return _this;
    }
    Object.defineProperty(We.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (t) { this.data = t; },
        enumerable: false,
        configurable: true
    });
    return We;
}(bt)), He = (function (_super) {
    __extends(He, _super);
    function He() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.Text;
        return _this;
    }
    Object.defineProperty(He.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return He;
}(We)), $e = (function (_super) {
    __extends($e, _super);
    function $e() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.Comment;
        return _this;
    }
    Object.defineProperty($e.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return $e;
}(We)), Qe = (function (_super) {
    __extends(Qe, _super);
    function Qe(t, u) {
        var _this = this;
        _this = _super.call(this, u) || this, _this.name = t, _this.type = O.Directive;
        return _this;
    }
    Object.defineProperty(Qe.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return Qe;
}(We)), Xe = (function (_super) {
    __extends(Xe, _super);
    function Xe(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = t;
        return _this;
    }
    Object.defineProperty(Xe.prototype, "firstChild", {
        get: function () { var t; return (t = this.children[0]) !== null && t !== void 0 ? t : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Xe.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Xe.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (t) { this.children = t; },
        enumerable: false,
        configurable: true
    });
    return Xe;
}(bt)), Ze = (function (_super) {
    __extends(Ze, _super);
    function Ze() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.CDATA;
        return _this;
    }
    Object.defineProperty(Ze.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return Ze;
}(Xe)), Me = (function (_super) {
    __extends(Me, _super);
    function Me() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.Root;
        return _this;
    }
    Object.defineProperty(Me.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return Me;
}(Xe)), Je = (function (_super) {
    __extends(Je, _super);
    function Je(t, u, r, a) {
        if (r === void 0) { r = []; }
        if (a === void 0) { a = t === "script" ? O.Script : t === "style" ? O.Style : O.Tag; }
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = t, _this.attribs = u, _this.type = a;
        return _this;
    }
    Object.defineProperty(Je.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Je.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (t) { this.name = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Je.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (t) { var u, r; return { name: t, value: _this.attribs[t], namespace: (u = _this["x-attribsNamespace"]) === null || u === void 0 ? void 0 : u[t], prefix: (r = _this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[t] }; });
        },
        enumerable: false,
        configurable: true
    });
    return Je;
}(Xe));
function U(e) { return Jt(e); }
function Be(e) { return e.type === O.CDATA; }
function he(e) { return e.type === O.Text; }
function Ye(e) { return e.type === O.Comment; }
function H0(e) { return e.type === O.Directive; }
function ou(e) { return e.type === O.Root; }
function Y(e) { return Object.prototype.hasOwnProperty.call(e, "children"); }
function dr(e, t) {
    if (t === void 0) { t = !1; }
    var u;
    if (he(e))
        u = new He(e.data);
    else if (Ye(e))
        u = new $e(e.data);
    else if (U(e)) {
        var r = t ? cu(e.children) : [], a_1 = new Je(e.name, de({}, e.attribs), r);
        r.forEach(function (n) { return n.parent = a_1; }), e.namespace != null && (a_1.namespace = e.namespace), e["x-attribsNamespace"] && (a_1["x-attribsNamespace"] = de({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (a_1["x-attribsPrefix"] = de({}, e["x-attribsPrefix"])), u = a_1;
    }
    else if (Be(e)) {
        var r = t ? cu(e.children) : [], a_2 = new Ze(r);
        r.forEach(function (n) { return n.parent = a_2; }), u = a_2;
    }
    else if (ou(e)) {
        var r = t ? cu(e.children) : [], a_3 = new Me(r);
        r.forEach(function (n) { return n.parent = a_3; }), e["x-mode"] && (a_3["x-mode"] = e["x-mode"]), u = a_3;
    }
    else if (H0(e)) {
        var r = new Qe(e.name, e.data);
        e["x-name"] != null && (r["x-name"] = e["x-name"], r["x-publicId"] = e["x-publicId"], r["x-systemId"] = e["x-systemId"]), u = r;
    }
    else
        throw new Error("Not implemented yet: ".concat(e.type));
    return u.startIndex = e.startIndex, u.endIndex = e.endIndex, e.sourceCodeLocation != null && (u.sourceCodeLocation = e.sourceCodeLocation), u;
}
function cu(e) { var t = e.map(function (u) { return dr(u, !0); }); for (var u = 1; u < t.length; u++)
    t[u].prev = t[u - 1], t[u - 1].next = t[u]; return t; }
var hr = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, Pe = (function () {
    function Pe(t, u, r) {
        this.dom = [], this.root = new Me(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof u == "function" && (r = u, u = hr), typeof t == "object" && (u = t, t = void 0), this.callback = t != null ? t : null, this.options = u != null ? u : hr, this.elementCB = r != null ? r : null;
    }
    Pe.prototype.onparserinit = function (t) { this.parser = t; };
    Pe.prototype.onreset = function () { this.dom = [], this.root = new Me(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    Pe.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    Pe.prototype.onerror = function (t) { this.handleCallback(t); };
    Pe.prototype.onclosetag = function () { this.lastNode = null; var t = this.tagStack.pop(); this.options.withEndIndices && (t.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(t); };
    Pe.prototype.onopentag = function (t, u) { var r = this.options.xmlMode ? O.Tag : void 0, a = new Je(t, u, void 0, r); this.addNode(a), this.tagStack.push(a); };
    Pe.prototype.ontext = function (t) { var u = this.lastNode; if (u && u.type === O.Text)
        u.data += t, this.options.withEndIndices && (u.endIndex = this.parser.endIndex);
    else {
        var r = new He(t);
        this.addNode(r), this.lastNode = r;
    } };
    Pe.prototype.oncomment = function (t) { if (this.lastNode && this.lastNode.type === O.Comment) {
        this.lastNode.data += t;
        return;
    } var u = new $e(t); this.addNode(u), this.lastNode = u; };
    Pe.prototype.oncommentend = function () { this.lastNode = null; };
    Pe.prototype.oncdatastart = function () { var t = new He(""), u = new Ze([t]); this.addNode(u), t.parent = u, this.lastNode = t; };
    Pe.prototype.oncdataend = function () { this.lastNode = null; };
    Pe.prototype.onprocessinginstruction = function (t, u) { var r = new Qe(t, u); this.addNode(r); };
    Pe.prototype.handleCallback = function (t) { if (typeof this.callback == "function")
        this.callback(t, this.dom);
    else if (t)
        throw t; };
    Pe.prototype.addNode = function (t) { var u = this.tagStack[this.tagStack.length - 1], r = u.children[u.children.length - 1]; this.options.withStartIndices && (t.startIndex = this.parser.startIndex), this.options.withEndIndices && (t.endIndex = this.parser.endIndex), u.children.push(t), r && (t.prev = r, r.next = t), t.parent = u, this.lastNode = null; };
    return Pe;
}());
var be = {};
$t(be, { DocumentPosition: function () { return oe; }, append: function () { return ua; }, appendChild: function () { return ta; }, compareDocumentPosition: function () { return Cr; }, existsOne: function () { return Nr; }, filter: function () { return Ge; }, find: function () { return wt; }, findAll: function () { return na; }, findOne: function () { return St; }, findOneChild: function () { return aa; }, getAttributeValue: function () { return Z0; }, getChildren: function () { return yt; }, getElementById: function () { return oa; }, getElements: function () { return ca; }, getElementsByClassName: function () { return la; }, getElementsByTagName: function () { return ke; }, getElementsByTagType: function () { return fa; }, getFeed: function () { return wu; }, getInnerHTML: function () { return X0; }, getName: function () { return Y0; }, getOuterHTML: function () { return Ar; }, getParent: function () { return Tr; }, getSiblings: function () { return vt; }, getText: function () { return xt; }, hasAttrib: function () { return J0; }, hasChildren: function () { return Y; }, innerText: function () { return pu; }, isCDATA: function () { return Be; }, isComment: function () { return Ye; }, isDocument: function () { return ou; }, isTag: function () { return U; }, isText: function () { return he; }, nextElementSibling: function () { return gu; }, prepend: function () { return xu; }, prependChild: function () { return ra; }, prevElementSibling: function () { return mu; }, removeElement: function () { return me; }, removeSubsets: function () { return da; }, replaceElement: function () { return ea; }, testElement: function () { return sa; }, textContent: function () { return we; }, uniqueSort: function () { return vu; } });
function pt(e) { for (var t = 1; t < e.length; t++)
    e[t][0] += e[t - 1][0] + 1; return e; }
var M0 = new Map(pt([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(pt([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(pt([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(pt([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var lu = /["&'<>$\x80-\uFFFF]/g, br = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), pr = String.prototype.codePointAt != null ? function (e, t) { return e.codePointAt(t); } : function (e, t) { return (e.charCodeAt(t) & 64512) === 55296 ? (e.charCodeAt(t) - 55296) * 1024 + e.charCodeAt(t + 1) - 56320 + 65536 : e.charCodeAt(t); };
function et(e) { var t = "", u = 0, r; for (; (r = lu.exec(e)) !== null;) {
    var a = r.index, n = e.charCodeAt(a), i = br.get(n);
    i !== void 0 ? (t += e.substring(u, a) + i, u = a + 1) : (t += "".concat(e.substring(u, a), "&#x").concat(pr(e, a).toString(16), ";"), u = lu.lastIndex += +((n & 64512) === 55296));
} return t + e.substr(u); }
function fu(e, t) { return function (r) { var a, n = 0, i = ""; for (; a = e.exec(r);)
    n !== a.index && (i += r.substring(n, a.index)), i += t.get(a[0].charCodeAt(0)), n = a.index + 1; return i + r.substring(n); }; }
var gr = fu(/[&<>'"]/g, br), gt = fu(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), mt = fu(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var mr;
(function (e) { e[e.XML = 0] = "XML", e[e.HTML = 1] = "HTML"; })(mr || (mr = {}));
var xr;
(function (e) { e[e.UTF8 = 0] = "UTF8", e[e.ASCII = 1] = "ASCII", e[e.Extensive = 2] = "Extensive", e[e.Attribute = 3] = "Attribute", e[e.Text = 4] = "Text"; })(xr || (xr = {}));
var wr = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (e) { return [e.toLowerCase(), e]; })), Sr = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (e) { return [e.toLowerCase(), e]; }));
var P0 = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function F0(e) { return e.replace(/"/g, "&quot;"); }
function G0(e, t) { var u; if (!e)
    return; var r = ((u = t.encodeEntities) !== null && u !== void 0 ? u : t.decodeEntities) === !1 ? F0 : t.xmlMode || t.encodeEntities !== "utf8" ? et : gt; return Object.keys(e).map(function (a) { var n, i; var c = (n = e[a]) !== null && n !== void 0 ? n : ""; return t.xmlMode === "foreign" && (a = (i = Sr.get(a)) !== null && i !== void 0 ? i : a), !t.emptyAttrs && !t.xmlMode && c === "" ? a : "".concat(a, "=\"").concat(r(c), "\""); }).join(" "); }
var Er = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function bu(e, t) {
    if (t === void 0) { t = {}; }
    var u = "length" in e ? e : [e], r = "";
    for (var a = 0; a < u.length; a++)
        r += V0(u[a], t);
    return r;
}
var Fe = bu;
function V0(e, t) { switch (e.type) {
    case Yt: return bu(e.children, t);
    case su:
    case tu: return _0(e);
    case uu: return Q0(e);
    case iu: return $0(e);
    case ru:
    case au:
    case nu: return K0(e, t);
    case eu: return W0(e, t);
} }
var j0 = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), z0 = new Set(["svg", "math"]);
function K0(e, t) { var u; t.xmlMode === "foreign" && (e.name = (u = wr.get(e.name)) !== null && u !== void 0 ? u : e.name, e.parent && j0.has(e.parent.name) && (t = Te(de({}, t), { xmlMode: !1 }))), !t.xmlMode && z0.has(e.name) && (t = Te(de({}, t), { xmlMode: "foreign" })); var r = "<".concat(e.name), a = G0(e.attribs, t); return a && (r += " ".concat(a)), e.children.length === 0 && (t.xmlMode ? t.selfClosingTags !== !1 : t.selfClosingTags && Er.has(e.name)) ? (t.xmlMode || (r += " "), r += "/>") : (r += ">", e.children.length > 0 && (r += bu(e.children, t)), (t.xmlMode || !Er.has(e.name)) && (r += "</".concat(e.name, ">"))), r; }
function _0(e) { return "<".concat(e.data, ">"); }
function W0(e, t) { var u; var r = e.data || ""; return ((u = t.encodeEntities) !== null && u !== void 0 ? u : t.decodeEntities) !== !1 && !(!t.xmlMode && e.parent && P0.has(e.parent.name)) && (r = t.xmlMode || t.encodeEntities !== "utf8" ? et(r) : mt(r)), r; }
function $0(e) { return "<![CDATA[".concat(e.children[0].data, "]]>"); }
function Q0(e) { return "<!--".concat(e.data, "-->"); }
function Ar(e, t) { return Fe(e, t); }
function X0(e, t) { return Y(e) ? e.children.map(function (u) { return Ar(u, t); }).join("") : ""; }
function xt(e) {
    return Array.isArray(e) ? e.map(xt).join("") : U(e) ? e.name === "br" ? "\n" : xt(e.children) : Be(e) ? xt(e.children) : he(e) ? e.data : "";
}
function we(e) { return Array.isArray(e) ? e.map(we).join("") : Y(e) && !Ye(e) ? we(e.children) : he(e) ? e.data : ""; }
function pu(e) { return Array.isArray(e) ? e.map(pu).join("") : Y(e) && (e.type === O.Tag || Be(e)) ? pu(e.children) : he(e) ? e.data : ""; }
function yt(e) { return Y(e) ? e.children : []; }
function Tr(e) { return e.parent || null; }
function vt(e) {
    var _b, _c;
    var t = Tr(e);
    if (t != null)
        return yt(t);
    var u = [e], r = e.prev, a = e.next;
    for (; r != null;)
        u.unshift(r), _b = r, r = _b.prev;
    for (; a != null;)
        u.push(a), _c = a, a = _c.next;
    return u;
}
function Z0(e, t) { var u; return (u = e.attribs) === null || u === void 0 ? void 0 : u[t]; }
function J0(e, t) { return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, t) && e.attribs[t] != null; }
function Y0(e) { return e.name; }
function gu(e) {
    var _b;
    var t = e.next;
    for (; t !== null && !U(t);)
        (_b = t, t = _b.next);
    return t;
}
function mu(e) {
    var _b;
    var t = e.prev;
    for (; t !== null && !U(t);)
        (_b = t, t = _b.prev);
    return t;
}
function me(e) { if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var t = e.parent.children, u = t.lastIndexOf(e);
    u >= 0 && t.splice(u, 1);
} e.next = null, e.prev = null, e.parent = null; }
function ea(e, t) { var u = t.prev = e.prev; u && (u.next = t); var r = t.next = e.next; r && (r.prev = t); var a = t.parent = e.parent; if (a) {
    var n = a.children;
    n[n.lastIndexOf(e)] = t, e.parent = null;
} }
function ta(e, t) { if (me(t), t.next = null, t.parent = e, e.children.push(t) > 1) {
    var u = e.children[e.children.length - 2];
    u.next = t, t.prev = u;
}
else
    t.prev = null; }
function ua(e, t) { me(t); var u = e.parent, r = e.next; if (t.next = r, t.prev = e, e.next = t, t.parent = u, r) {
    if (r.prev = t, u) {
        var a = u.children;
        a.splice(a.lastIndexOf(r), 0, t);
    }
}
else
    u && u.children.push(t); }
function ra(e, t) { if (me(t), t.parent = e, t.prev = null, e.children.unshift(t) !== 1) {
    var u = e.children[1];
    u.prev = t, t.next = u;
}
else
    t.next = null; }
function xu(e, t) { me(t); var u = e.parent; if (u) {
    var r = u.children;
    r.splice(r.indexOf(e), 0, t);
} e.prev && (e.prev.next = t), t.parent = u, t.prev = e.prev, t.next = e, e.prev = t; }
function Ge(e, t, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return wt(e, Array.isArray(t) ? t : [t], u, r);
}
function wt(e, t, u, r) { var a = [], n = [Array.isArray(t) ? t : [t]], i = [0]; for (;;) {
    if (i[0] >= n[0].length) {
        if (i.length === 1)
            return a;
        n.shift(), i.shift();
        continue;
    }
    var c = n[0][i[0]++];
    if (e(c) && (a.push(c), --r <= 0))
        return a;
    u && Y(c) && c.children.length > 0 && (i.unshift(0), n.unshift(c.children));
} }
function aa(e, t) { return t.find(e); }
function St(e, t, u) {
    if (u === void 0) { u = !0; }
    var r = Array.isArray(t) ? t : [t];
    for (var a = 0; a < r.length; a++) {
        var n = r[a];
        if (U(n) && e(n))
            return n;
        if (u && Y(n) && n.children.length > 0) {
            var i = St(e, n.children, !0);
            if (i)
                return i;
        }
    }
    return null;
}
function Nr(e, t) { return (Array.isArray(t) ? t : [t]).some(function (u) { return U(u) && e(u) || Y(u) && Nr(e, u.children); }); }
function na(e, t) { var u = [], r = [Array.isArray(t) ? t : [t]], a = [0]; for (;;) {
    if (a[0] >= r[0].length) {
        if (r.length === 1)
            return u;
        r.shift(), a.shift();
        continue;
    }
    var n = r[0][a[0]++];
    U(n) && e(n) && u.push(n), Y(n) && n.children.length > 0 && (a.unshift(0), r.unshift(n.children));
} }
var Et = { tag_name: function (e) { return typeof e == "function" ? function (t) { return U(t) && e(t.name); } : e === "*" ? U : function (t) { return U(t) && t.name === e; }; }, tag_type: function (e) { return typeof e == "function" ? function (t) { return e(t.type); } : function (t) { return t.type === e; }; }, tag_contains: function (e) { return typeof e == "function" ? function (t) { return he(t) && e(t.data); } : function (t) { return he(t) && t.data === e; }; } };
function yu(e, t) { return typeof t == "function" ? function (u) { return U(u) && t(u.attribs[e]); } : function (u) { return U(u) && u.attribs[e] === t; }; }
function ia(e, t) { return function (u) { return e(u) || t(u); }; }
function kr(e) { var t = Object.keys(e).map(function (u) { var r = e[u]; return Object.prototype.hasOwnProperty.call(Et, u) ? Et[u](r) : yu(u, r); }); return t.length === 0 ? null : t.reduce(ia); }
function sa(e, t) { var u = kr(e); return u ? u(t) : !0; }
function ca(e, t, u, r) {
    if (r === void 0) { r = 1 / 0; }
    var a = kr(e);
    return a ? Ge(a, t, u, r) : [];
}
function oa(e, t, u) {
    if (u === void 0) { u = !0; }
    return Array.isArray(t) || (t = [t]), St(yu("id", e), t, u);
}
function ke(e, t, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Ge(Et.tag_name(e), t, u, r);
}
function la(e, t, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Ge(yu("class", e), t, u, r);
}
function fa(e, t, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Ge(Et.tag_type(e), t, u, r);
}
function da(e) { var t = e.length; for (; --t >= 0;) {
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
var oe;
(function (e) { e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.PRECEDING = 2] = "PRECEDING", e[e.FOLLOWING = 4] = "FOLLOWING", e[e.CONTAINS = 8] = "CONTAINS", e[e.CONTAINED_BY = 16] = "CONTAINED_BY"; })(oe || (oe = {}));
function Cr(e, t) { var u = [], r = []; if (e === t)
    return 0; var a = Y(e) ? e : e.parent; for (; a;)
    u.unshift(a), a = a.parent; for (a = Y(t) ? t : t.parent; a;)
    r.unshift(a), a = a.parent; var n = Math.min(u.length, r.length), i = 0; for (; i < n && u[i] === r[i];)
    i++; if (i === 0)
    return oe.DISCONNECTED; var c = u[i - 1], f = c.children, b = u[i], w = r[i]; return f.indexOf(b) > f.indexOf(w) ? c === t ? oe.FOLLOWING | oe.CONTAINED_BY : oe.FOLLOWING : c === e ? oe.PRECEDING | oe.CONTAINS : oe.PRECEDING; }
function vu(e) { return e = e.filter(function (t, u, r) { return !r.includes(t, u + 1); }), e.sort(function (t, u) { var r = Cr(t, u); return r & oe.PRECEDING ? -1 : r & oe.FOLLOWING ? 1 : 0; }), e; }
function wu(e) { var t = At(ma, e); return t ? t.name === "feed" ? ha(t) : ba(t) : null; }
function ha(e) { var t; var u = e.children, r = { type: "atom", items: ke("entry", u).map(function (i) { var c; var f = i.children, b = { media: qr(f) }; ue(b, "id", "id", f), ue(b, "title", "title", f); var w = (c = At("link", f)) === null || c === void 0 ? void 0 : c.attribs.href; w && (b.link = w); var L = Se("summary", f) || Se("content", f); L && (b.description = L); var A = Se("updated", f); return A && (b.pubDate = new Date(A)), b; }) }; ue(r, "id", "id", u), ue(r, "title", "title", u); var a = (t = At("link", u)) === null || t === void 0 ? void 0 : t.attribs.href; a && (r.link = a), ue(r, "description", "subtitle", u); var n = Se("updated", u); return n && (r.updated = new Date(n)), ue(r, "author", "email", u, !0), r; }
function ba(e) { var t, u; var r = (u = (t = At("channel", e.children)) === null || t === void 0 ? void 0 : t.children) !== null && u !== void 0 ? u : [], a = { type: e.name.substr(0, 3), id: "", items: ke("item", e.children).map(function (i) { var c = i.children, f = { media: qr(c) }; ue(f, "id", "guid", c), ue(f, "title", "title", c), ue(f, "link", "link", c), ue(f, "description", "description", c); var b = Se("pubDate", c) || Se("dc:date", c); return b && (f.pubDate = new Date(b)), f; }) }; ue(a, "title", "title", r), ue(a, "link", "link", r), ue(a, "description", "description", r); var n = Se("lastBuildDate", r); return n && (a.updated = new Date(n)), ue(a, "author", "managingEditor", r, !0), a; }
var pa = ["url", "type", "lang"], ga = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function qr(e) { return ke("media:content", e).map(function (t) {
    var e_4, _b, e_5, _c;
    var u = t.attribs, r = { medium: u.medium, isDefault: !!u.isDefault };
    try {
        for (var pa_1 = __values(pa), pa_1_1 = pa_1.next(); !pa_1_1.done; pa_1_1 = pa_1.next()) {
            var a = pa_1_1.value;
            u[a] && (r[a] = u[a]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (pa_1_1 && !pa_1_1.done && (_b = pa_1.return)) _b.call(pa_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var ga_1 = __values(ga), ga_1_1 = ga_1.next(); !ga_1_1.done; ga_1_1 = ga_1.next()) {
            var a = ga_1_1.value;
            u[a] && (r[a] = parseInt(u[a], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (ga_1_1 && !ga_1_1.done && (_c = ga_1.return)) _c.call(ga_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return u.expression && (r.expression = u.expression), r;
}); }
function At(e, t) { return ke(e, t, !0, 1)[0]; }
function Se(e, t, u) {
    if (u === void 0) { u = !1; }
    return we(ke(e, t, u, 1)).trim();
}
function ue(e, t, u, r, a) {
    if (a === void 0) { a = !1; }
    var n = Se(u, r, a);
    n && (e[t] = n);
}
function ma(e) { return e === "rss" || e === "feed" || e === "rdf:RDF"; }
function Lr(e, t) { var u = new Pe(void 0, t); return new _e(u, t).end(e), u.root; }
var N;
(function (e) { e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"; })(N || (N = {}));
var V;
(function (e) { e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"; })(V || (V = {}));
var Ir = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, xa = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, ya = new Map([[126, V.Element], [94, V.Start], [36, V.End], [42, V.Any], [33, V.Not], [124, V.Hyphen]]), va = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function Ce(e) { switch (e.type) {
    case N.Adjacent:
    case N.Child:
    case N.Descendant:
    case N.Parent:
    case N.Sibling:
    case N.ColumnCombinator: return !0;
    default: return !1;
} }
var wa = new Set(["contains", "icontains"]);
function Sa(e, t, u) { var r = parseInt(t, 16) - 65536; return r !== r || u ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320); }
function tt(e) { return e.replace(xa, Sa); }
function Su(e) { return e === 39 || e === 34; }
function Dr(e) { return e === 32 || e === 9 || e === 10 || e === 12 || e === 13; }
function Ee(e) { var t = [], u = Or(t, "".concat(e), 0); if (u < e.length)
    throw new Error("Unmatched selector: ".concat(e.slice(u))); return t; }
function Or(e, t, u) { var r = []; function a(A) { var T = t.slice(u + A).match(Ir); if (!T)
    throw new Error("Expected name, found ".concat(t.slice(u))); var _b = __read(T, 1), I = _b[0]; return u += A + I.length, tt(I); } function n(A) { for (u += A; u < t.length && Dr(t.charCodeAt(u));)
    u++; } function i() { u += 1; var A = u, T = 1; for (; T > 0 && u < t.length; u++)
    t.charCodeAt(u) === 40 && !c(u) ? T++ : t.charCodeAt(u) === 41 && !c(u) && T--; if (T)
    throw new Error("Parenthesis not matched"); return tt(t.slice(A, u - 1)); } function c(A) { var T = 0; for (; t.charCodeAt(--A) === 92;)
    T++; return (T & 1) === 1; } function f() { if (r.length > 0 && Ce(r[r.length - 1]))
    throw new Error("Did not expect successive traversals."); } function b(A) { if (r.length > 0 && r[r.length - 1].type === N.Descendant) {
    r[r.length - 1].type = A;
    return;
} f(), r.push({ type: A }); } function w(A, T) { r.push({ type: N.Attribute, name: A, action: T, value: a(1), namespace: null, ignoreCase: "quirks" }); } function L() { if (r.length && r[r.length - 1].type === N.Descendant && r.pop(), r.length === 0)
    throw new Error("Empty sub-selector"); e.push(r); } if (n(0), t.length === u)
    return u; e: for (; u < t.length;) {
    var A = t.charCodeAt(u);
    switch (A) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (r.length === 0 || r[0].type !== N.Descendant) && (f(), r.push({ type: N.Descendant })), n(1);
            break;
        }
        case 62: {
            b(N.Child), n(1);
            break;
        }
        case 60: {
            b(N.Parent), n(1);
            break;
        }
        case 126: {
            b(N.Sibling), n(1);
            break;
        }
        case 43: {
            b(N.Adjacent), n(1);
            break;
        }
        case 46: {
            w("class", V.Element);
            break;
        }
        case 35: {
            w("id", V.Equals);
            break;
        }
        case 91: {
            n(1);
            var T = void 0, I = null;
            t.charCodeAt(u) === 124 ? T = a(1) : t.startsWith("*|", u) ? (I = "*", T = a(2)) : (T = a(0), t.charCodeAt(u) === 124 && t.charCodeAt(u + 1) !== 61 && (I = T, T = a(1))), n(0);
            var D = V.Exists, K = ya.get(t.charCodeAt(u));
            if (K) {
                if (D = K, t.charCodeAt(u + 1) !== 61)
                    throw new Error("Expected `=`");
                n(2);
            }
            else
                t.charCodeAt(u) === 61 && (D = V.Equals, n(1));
            var J = "", ne = null;
            if (D !== "exists") {
                if (Su(t.charCodeAt(u))) {
                    var q = t.charCodeAt(u), H = u + 1;
                    for (; H < t.length && (t.charCodeAt(H) !== q || c(H));)
                        H += 1;
                    if (t.charCodeAt(H) !== q)
                        throw new Error("Attribute value didn't end");
                    J = tt(t.slice(u + 1, H)), u = H + 1;
                }
                else {
                    var q = u;
                    for (; u < t.length && (!Dr(t.charCodeAt(u)) && t.charCodeAt(u) !== 93 || c(u));)
                        u += 1;
                    J = tt(t.slice(q, u));
                }
                n(0);
                var P = t.charCodeAt(u) | 32;
                P === 115 ? (ne = !1, n(1)) : P === 105 && (ne = !0, n(1));
            }
            if (t.charCodeAt(u) !== 93)
                throw new Error("Attribute selector didn't terminate");
            u += 1;
            var v = { type: N.Attribute, name: T, action: D, value: J, namespace: I, ignoreCase: ne };
            r.push(v);
            break;
        }
        case 58: {
            if (t.charCodeAt(u + 1) === 58) {
                r.push({ type: N.PseudoElement, name: a(2).toLowerCase(), data: t.charCodeAt(u) === 40 ? i() : null });
                continue;
            }
            var T = a(1).toLowerCase(), I = null;
            if (t.charCodeAt(u) === 40)
                if (va.has(T)) {
                    if (Su(t.charCodeAt(u + 1)))
                        throw new Error("Pseudo-selector ".concat(T, " cannot be quoted"));
                    if (I = [], u = Or(I, t, u + 1), t.charCodeAt(u) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(T, " (").concat(t, ")"));
                    u += 1;
                }
                else {
                    if (I = i(), wa.has(T)) {
                        var D = I.charCodeAt(0);
                        D === I.charCodeAt(I.length - 1) && Su(D) && (I = I.slice(1, -1));
                    }
                    I = tt(I);
                }
            r.push({ type: N.Pseudo, name: T, data: I });
            break;
        }
        case 44: {
            L(), r = [], n(1);
            break;
        }
        default: {
            if (t.startsWith("/*", u)) {
                var D = t.indexOf("*/", u + 2);
                if (D < 0)
                    throw new Error("Comment was not terminated");
                u = D + 2, r.length === 0 && n(0);
                break;
            }
            var T = null, I = void 0;
            if (A === 42)
                u += 1, I = "*";
            else if (A === 124) {
                if (I = "", t.charCodeAt(u + 1) === 124) {
                    b(N.ColumnCombinator), n(2);
                    break;
                }
            }
            else if (Ir.test(t.slice(u)))
                I = a(0);
            else
                break e;
            t.charCodeAt(u) === 124 && t.charCodeAt(u + 1) !== 124 && (T = I, t.charCodeAt(u + 1) === 42 ? (I = "*", u += 2) : I = a(1)), r.push(I === "*" ? { type: N.Universal, namespace: T } : { type: N.Tag, name: I, namespace: T });
        }
    }
} return L(), u; }
var Ou = Ne(Ae(), 1);
var xe = Ne(Ae(), 1);
var Rr = new Map([[N.Universal, 50], [N.Tag, 30], [N.Attribute, 1], [N.Pseudo, 0]]);
function ut(e) { return !Rr.has(e.type); }
var Ea = new Map([[V.Exists, 10], [V.Equals, 8], [V.Not, 7], [V.Start, 6], [V.End, 6], [V.Any, 5]]);
function Eu(e) { var t = e.map(Hr); for (var u = 1; u < e.length; u++) {
    var r = t[u];
    if (!(r < 0))
        for (var a = u - 1; a >= 0 && r < t[a]; a--) {
            var n = e[a + 1];
            e[a + 1] = e[a], e[a] = n, t[a + 1] = t[a], t[a] = r;
        }
} }
function Hr(e) { var t, u; var r = (t = Rr.get(e.type)) !== null && t !== void 0 ? t : -1; return e.type === N.Attribute ? (r = (u = Ea.get(e.action)) !== null && u !== void 0 ? u : 4, e.action === V.Equals && e.name === "id" && (r = 9), e.ignoreCase && (r >>= 1)) : e.type === N.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? r = 0 : Array.isArray(e.data) ? (r = Math.min.apply(Math, __spreadArray([], __read(e.data.map(function (a) { return Math.min.apply(Math, __spreadArray([], __read(a.map(Hr)), false)); })), false)), r < 0 && (r = 0)) : r = 2 : r = 3), r; }
var rt = Ne(Ae(), 1), Aa = /[-[\]{}()*+?.,\\^$|#\s]/g;
function Mr(e) { return e.replace(Aa, "\\$&"); }
var Ta = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function qe(e, t) { return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!t.quirksMode : !t.xmlMode && Ta.has(e.name); }
var Br = { equals: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value; return qe(t, u) ? (n = n.toLowerCase(), function (i) { var c = r.getAttributeValue(i, a); return c != null && c.length === n.length && c.toLowerCase() === n && e(i); }) : function (i) { return r.getAttributeValue(i, a) === n && e(i); }; }, hyphen: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value, i = n.length; return qe(t, u) ? (n = n.toLowerCase(), function (f) { var b = r.getAttributeValue(f, a); return b != null && (b.length === i || b.charAt(i) === "-") && b.substr(0, i).toLowerCase() === n && e(f); }) : function (f) { var b = r.getAttributeValue(f, a); return b != null && (b.length === i || b.charAt(i) === "-") && b.substr(0, i) === n && e(f); }; }, element: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value; if (/\s/.test(n))
        return rt.default.falseFunc; var i = new RegExp("(?:^|\\s)".concat(Mr(n), "(?:$|\\s)"), qe(t, u) ? "i" : ""); return function (f) { var b = r.getAttributeValue(f, a); return b != null && b.length >= n.length && i.test(b) && e(f); }; }, exists: function (e, _b, _c) {
        var t = _b.name;
        var u = _c.adapter;
        return function (r) { return u.hasAttrib(r, t) && e(r); };
    }, start: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value, i = n.length; return i === 0 ? rt.default.falseFunc : qe(t, u) ? (n = n.toLowerCase(), function (c) { var f = r.getAttributeValue(c, a); return f != null && f.length >= i && f.substr(0, i).toLowerCase() === n && e(c); }) : function (c) { var f; return !!(!((f = r.getAttributeValue(c, a)) === null || f === void 0) && f.startsWith(n)) && e(c); }; }, end: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value, i = -n.length; return i === 0 ? rt.default.falseFunc : qe(t, u) ? (n = n.toLowerCase(), function (c) { var f; return ((f = r.getAttributeValue(c, a)) === null || f === void 0 ? void 0 : f.substr(i).toLowerCase()) === n && e(c); }) : function (c) { var f; return !!(!((f = r.getAttributeValue(c, a)) === null || f === void 0) && f.endsWith(n)) && e(c); }; }, any: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value; if (n === "")
        return rt.default.falseFunc; if (qe(t, u)) {
        var i_1 = new RegExp(Mr(n), "i");
        return function (f) { var b = r.getAttributeValue(f, a); return b != null && b.length >= n.length && i_1.test(b) && e(f); };
    } return function (i) { var c; return !!(!((c = r.getAttributeValue(i, a)) === null || c === void 0) && c.includes(n)) && e(i); }; }, not: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value; return n === "" ? function (i) { return !!r.getAttributeValue(i, a) && e(i); } : qe(t, u) ? (n = n.toLowerCase(), function (i) { var c = r.getAttributeValue(i, a); return (c == null || c.length !== n.length || c.toLowerCase() !== n) && e(i); }) : function (i) { return r.getAttributeValue(i, a) !== n && e(i); }; } };
var Na = new Set([9, 10, 12, 13, 32]), Pr = 48, ka = 57;
function Fr(e) { if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0]; if (e === "odd")
    return [2, 1]; var t = 0, u = 0, r = n(), a = i(); if (t < e.length && e.charAt(t) === "n" && (t++, u = r * (a != null ? a : 1), c(), t < e.length ? (r = n(), c(), a = i()) : r = a = 0), a === null || t < e.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(e, "')")); return [u, r * a]; function n() { return e.charAt(t) === "-" ? (t++, -1) : (e.charAt(t) === "+" && t++, 1); } function i() { var f = t, b = 0; for (; t < e.length && e.charCodeAt(t) >= Pr && e.charCodeAt(t) <= ka;)
    b = b * 10 + (e.charCodeAt(t) - Pr), t++; return t === f ? null : b; } function c() { for (; t < e.length && Na.has(e.charCodeAt(t));)
    t++; } }
var Au = Ne(Ae(), 1);
function Gr(e) { var t = e[0], u = e[1] - 1; if (u < 0 && t <= 0)
    return Au.default.falseFunc; if (t === -1)
    return function (n) { return n <= u; }; if (t === 0)
    return function (n) { return n === u; }; if (t === 1)
    return u < 0 ? Au.default.trueFunc : function (n) { return n >= u; }; var r = Math.abs(t), a = (u % r + r) % r; return t > 1 ? function (n) { return n >= u && n % r === a; } : function (n) { return n <= u && n % r === a; }; }
function Ve(e) { return Gr(Fr(e)); }
var re = Ne(Ae(), 1);
function Tt(e, t) { return function (u) { var r = t.getParent(u); return r != null && t.isTag(r) && e(u); }; }
var je = { contains: function (e, t, _b) {
        var u = _b.adapter;
        return function (a) { return e(a) && u.getText(a).includes(t); };
    }, icontains: function (e, t, _b) {
        var u = _b.adapter;
        var r = t.toLowerCase();
        return function (n) { return e(n) && u.getText(n).toLowerCase().includes(r); };
    }, "nth-child": function (e, t, _b) {
        var u = _b.adapter, r = _b.equals;
        var a = Ve(t);
        return a === re.default.falseFunc ? re.default.falseFunc : a === re.default.trueFunc ? Tt(e, u) : function (i) { var c = u.getSiblings(i), f = 0; for (var b = 0; b < c.length && !r(i, c[b]); b++)
            u.isTag(c[b]) && f++; return a(f) && e(i); };
    }, "nth-last-child": function (e, t, _b) {
        var u = _b.adapter, r = _b.equals;
        var a = Ve(t);
        return a === re.default.falseFunc ? re.default.falseFunc : a === re.default.trueFunc ? Tt(e, u) : function (i) { var c = u.getSiblings(i), f = 0; for (var b = c.length - 1; b >= 0 && !r(i, c[b]); b--)
            u.isTag(c[b]) && f++; return a(f) && e(i); };
    }, "nth-of-type": function (e, t, _b) {
        var u = _b.adapter, r = _b.equals;
        var a = Ve(t);
        return a === re.default.falseFunc ? re.default.falseFunc : a === re.default.trueFunc ? Tt(e, u) : function (i) { var c = u.getSiblings(i), f = 0; for (var b = 0; b < c.length; b++) {
            var w = c[b];
            if (r(i, w))
                break;
            u.isTag(w) && u.getName(w) === u.getName(i) && f++;
        } return a(f) && e(i); };
    }, "nth-last-of-type": function (e, t, _b) {
        var u = _b.adapter, r = _b.equals;
        var a = Ve(t);
        return a === re.default.falseFunc ? re.default.falseFunc : a === re.default.trueFunc ? Tt(e, u) : function (i) { var c = u.getSiblings(i), f = 0; for (var b = c.length - 1; b >= 0; b--) {
            var w = c[b];
            if (r(i, w))
                break;
            u.isTag(w) && u.getName(w) === u.getName(i) && f++;
        } return a(f) && e(i); };
    }, root: function (e, t, _b) {
        var u = _b.adapter;
        return function (r) { var a = u.getParent(r); return (a == null || !u.isTag(a)) && e(r); };
    }, scope: function (e, t, u, r) { var a = u.equals; return !r || r.length === 0 ? je.root(e, t, u) : r.length === 1 ? function (n) { return a(r[0], n) && e(n); } : function (n) { return r.includes(n) && e(n); }; }, hover: Tu("isHovered"), visited: Tu("isVisited"), active: Tu("isActive") };
function Tu(e) { return function (u, r, _b) {
    var a = _b.adapter;
    var n = a[e];
    return typeof n != "function" ? re.default.falseFunc : function (c) { return n(c) && u(c); };
}; }
var at = { empty: function (e, _b) {
        var t = _b.adapter;
        return !t.getChildren(e).some(function (u) { return t.isTag(u) || t.getText(u) !== ""; });
    }, "first-child": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        if (t.prevElementSibling)
            return t.prevElementSibling(e) == null;
        var r = t.getSiblings(e).find(function (a) { return t.isTag(a); });
        return r != null && u(e, r);
    }, "last-child": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var r = t.getSiblings(e);
        for (var a = r.length - 1; a >= 0; a--) {
            if (u(e, r[a]))
                return !0;
            if (t.isTag(r[a]))
                break;
        }
        return !1;
    }, "first-of-type": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var r = t.getSiblings(e), a = t.getName(e);
        for (var n = 0; n < r.length; n++) {
            var i = r[n];
            if (u(e, i))
                return !0;
            if (t.isTag(i) && t.getName(i) === a)
                break;
        }
        return !1;
    }, "last-of-type": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var r = t.getSiblings(e), a = t.getName(e);
        for (var n = r.length - 1; n >= 0; n--) {
            var i = r[n];
            if (u(e, i))
                return !0;
            if (t.isTag(i) && t.getName(i) === a)
                break;
        }
        return !1;
    }, "only-of-type": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var r = t.getName(e);
        return t.getSiblings(e).every(function (a) { return u(e, a) || !t.isTag(a) || t.getName(a) !== r; });
    }, "only-child": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        return t.getSiblings(e).every(function (r) { return u(e, r) || !t.isTag(r); });
    } };
function Nu(e, t, u, r) { if (u === null) {
    if (e.length > r)
        throw new Error("Pseudo-class :".concat(t, " requires an argument"));
}
else if (e.length === r)
    throw new Error("Pseudo-class :".concat(t, " doesn't have any arguments")); }
var Nt = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var le = Ne(Ae(), 1);
var qu = {};
function Lu(e, t) { return e === le.default.falseFunc ? le.default.falseFunc : function (u) { return t.isTag(u) && e(u); }; }
function Iu(e, t) { var u = t.getSiblings(e); if (u.length <= 1)
    return []; var r = u.indexOf(e); return r < 0 || r === u.length - 1 ? [] : u.slice(r + 1).filter(t.isTag); }
function Cu(e) { return { xmlMode: !!e.xmlMode, lowerCaseAttributeNames: !!e.lowerCaseAttributeNames, lowerCaseTags: !!e.lowerCaseTags, quirksMode: !!e.quirksMode, cacheResults: !!e.cacheResults, pseudos: e.pseudos, adapter: e.adapter, equals: e.equals }; }
var ku = function (e, t, u, r, a) { var n = a(t, Cu(u), r); return n === le.default.trueFunc ? e : n === le.default.falseFunc ? le.default.falseFunc : function (i) { return n(i) && e(i); }; }, kt = { is: ku, matches: ku, where: ku, not: function (e, t, u, r, a) { var n = a(t, Cu(u), r); return n === le.default.falseFunc ? e : n === le.default.trueFunc ? le.default.falseFunc : function (i) { return !n(i) && e(i); }; }, has: function (e, t, u, r, a) { var n = u.adapter, i = Cu(u); i.relativeSelector = !0; var c = t.some(function (w) { return w.some(ut); }) ? [qu] : void 0, f = a(t, i, c); if (f === le.default.falseFunc)
        return le.default.falseFunc; var b = Lu(f, n); if (c && f !== le.default.trueFunc) {
        var _b = f.shouldTestNextSiblings, w_1 = _b === void 0 ? !1 : _b;
        return function (L) { if (!e(L))
            return !1; c[0] = L; var A = n.getChildren(L), T = w_1 ? __spreadArray(__spreadArray([], __read(A), false), __read(Iu(L, n)), false) : A; return n.existsOne(b, T); };
    } return function (w) { return e(w) && n.existsOne(b, n.getChildren(w)); }; } };
function Vr(e, t, u, r, a) { var n; var i = t.name, c = t.data; if (Array.isArray(c)) {
    if (!(i in kt))
        throw new Error("Unknown pseudo-class :".concat(i, "(").concat(c, ")"));
    return kt[i](e, c, u, r, a);
} var f = (n = u.pseudos) === null || n === void 0 ? void 0 : n[i], b = typeof f == "string" ? f : Nt[i]; if (typeof b == "string") {
    if (c != null)
        throw new Error("Pseudo ".concat(i, " doesn't have any arguments"));
    var w = Ee(b);
    return kt.is(e, w, u, r, a);
} if (typeof f == "function")
    return Nu(f, i, c, 1), function (w) { return f(w, c) && e(w); }; if (i in je)
    return je[i](e, c, u, r); if (i in at) {
    var w_2 = at[i];
    return Nu(w_2, i, c, 2), function (L) { return w_2(L, u, c) && e(L); };
} throw new Error("Unknown pseudo-class :".concat(i)); }
function Du(e, t) { var u = t.getParent(e); return u && t.isTag(u) ? u : null; }
function jr(e, t, u, r, a) { var n = u.adapter, i = u.equals; switch (t.type) {
    case N.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case N.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case N.Attribute: {
        if (t.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!u.xmlMode || u.lowerCaseAttributeNames) && (t.name = t.name.toLowerCase()), Br[t.action](e, t, u);
    }
    case N.Pseudo: return Vr(e, t, u, r, a);
    case N.Tag: {
        if (t.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var c_1 = t.name;
        return (!u.xmlMode || u.lowerCaseTags) && (c_1 = c_1.toLowerCase()), function (b) { return n.getName(b) === c_1 && e(b); };
    }
    case N.Descendant: {
        if (u.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (b) { var w = b; for (; w = Du(w, n);)
                if (e(w))
                    return !0; return !1; };
        var c_2 = new WeakSet;
        return function (b) { var w = b; for (; w = Du(w, n);)
            if (!c_2.has(w)) {
                if (n.isTag(w) && e(w))
                    return !0;
                c_2.add(w);
            } return !1; };
    }
    case "_flexibleDescendant": return function (f) { var b = f; do
        if (e(b))
            return !0;
    while (b = Du(b, n)); return !1; };
    case N.Parent: return function (f) { return n.getChildren(f).some(function (b) { return n.isTag(b) && e(b); }); };
    case N.Child: return function (f) { var b = n.getParent(f); return b != null && n.isTag(b) && e(b); };
    case N.Sibling: return function (f) { var b = n.getSiblings(f); for (var w = 0; w < b.length; w++) {
        var L = b[w];
        if (i(f, L))
            break;
        if (n.isTag(L) && e(L))
            return !0;
    } return !1; };
    case N.Adjacent: return n.prevElementSibling ? function (f) { var b = n.prevElementSibling(f); return b != null && e(b); } : function (f) { var b = n.getSiblings(f), w; for (var L = 0; L < b.length; L++) {
        var A = b[L];
        if (i(f, A))
            break;
        n.isTag(A) && (w = A);
    } return !!w && e(w); };
    case N.Universal: {
        if (t.namespace != null && t.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return e;
    }
} }
function zr(e, t, u) { var r = Ct(e, t, u); return Lu(r, t.adapter); }
function Ct(e, t, u) { var r = typeof e == "string" ? Ee(e) : e; return qt(r, t, u); }
function Kr(e) { return e.type === N.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(function (t) { return t.some(Kr); })); }
var Ca = { type: N.Descendant }, qa = { type: "_flexibleDescendant" }, La = { type: N.Pseudo, name: "scope", data: null };
function Ia(e, _b, u) {
    var e_6, _c;
    var t = _b.adapter;
    var r = !!(u != null && u.every(function (a) { var n = t.isTag(a) && t.getParent(a); return a === qu || n && t.isTag(n); }));
    try {
        for (var e_7 = __values(e), e_7_1 = e_7.next(); !e_7_1.done; e_7_1 = e_7.next()) {
            var a = e_7_1.value;
            if (!(a.length > 0 && ut(a[0]) && a[0].type !== N.Descendant))
                if (r && !a.some(Kr))
                    a.unshift(Ca);
                else
                    continue;
            a.unshift(La);
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
function qt(e, t, u) { var r; e.forEach(Eu), u = (r = t.context) !== null && r !== void 0 ? r : u; var a = Array.isArray(u), n = u && (Array.isArray(u) ? u : [u]); if (t.relativeSelector !== !1)
    Ia(e, t, n);
else if (e.some(function (f) { return f.length > 0 && ut(f[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var i = !1, c = e.map(function (f) { if (f.length >= 2) {
    var _b = __read(f, 2), b = _b[0], w = _b[1];
    b.type !== N.Pseudo || b.name !== "scope" || (a && w.type === N.Descendant ? f[1] = qa : (w.type === N.Adjacent || w.type === N.Sibling) && (i = !0));
} return Da(f, t, n); }).reduce(Oa, xe.default.falseFunc); return c.shouldTestNextSiblings = i, c; }
function Da(e, t, u) { var r; return e.reduce(function (a, n) { return a === xe.default.falseFunc ? xe.default.falseFunc : jr(a, n, t, u, qt); }, (r = t.rootFunc) !== null && r !== void 0 ? r : xe.default.trueFunc); }
function Oa(e, t) { return t === xe.default.falseFunc || e === xe.default.trueFunc ? e : e === xe.default.falseFunc || t === xe.default.trueFunc ? t : function (r) { return e(r) || t(r); }; }
var _r = function (e, t) { return e === t; }, Ua = { adapter: be, equals: _r };
function Wr(e) { var t, u, r, a; var n = e != null ? e : Ua; return (t = n.adapter) !== null && t !== void 0 || (n.adapter = be), (u = n.equals) !== null && u !== void 0 || (n.equals = (a = (r = n.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && a !== void 0 ? a : _r), n; }
function Uu(e) { return function (u, r, a) { var n = Wr(r); return e(u, n, a); }; }
var ns = Uu(zr), is = Uu(Ct), Lt = Uu(qt);
function $r(e) { return function (u, r, a) { var n = Wr(a); typeof u != "function" && (u = Ct(u, n, r)); var i = It(r, n.adapter, u.shouldTestNextSiblings); return e(u, i, n); }; }
function It(e, t, u) {
    if (u === void 0) { u = !1; }
    return u && (e = Ra(e, t)), Array.isArray(e) ? t.removeSubsets(e) : t.getChildren(e);
}
function Ra(e, t) { var u = Array.isArray(e) ? e.slice(0) : [e], r = u.length; for (var a = 0; a < r; a++) {
    var n = Iu(u[a], t);
    u.push.apply(u, __spreadArray([], __read(n), false));
} return u; }
var ss = $r(function (e, t, u) { return e === Ou.default.falseFunc || !t || t.length === 0 ? [] : u.adapter.findAll(e, t); }), cs = $r(function (e, t, u) { return e === Ou.default.falseFunc || !t || t.length === 0 ? null : u.adapter.findOne(e, t); });
var Ot = Ne(Ae(), 1);
var Ha = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function ze(e) { return e.type !== "pseudo" ? !1 : Ha.has(e.name) ? !0 : e.name === "not" && Array.isArray(e.data) ? e.data.some(function (t) { return t.some(ze); }) : !1; }
function Qr(e, t, u) { var r = t != null ? parseInt(t, 10) : NaN; switch (e) {
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
function Xr(e) { for (; e.parent;)
    e = e.parent; return e; }
function Dt(e) {
    var e_8, _b;
    var t = [], u = [];
    try {
        for (var e_9 = __values(e), e_9_1 = e_9.next(); !e_9_1.done; e_9_1 = e_9.next()) {
            var r = e_9_1.value;
            r.some(ze) ? t.push(r) : u.push(r);
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
var Ma = { type: N.Universal, namespace: null }, Ba = { type: N.Pseudo, name: "scope", data: null };
function Mu(e, t, u) {
    if (u === void 0) { u = {}; }
    return Pa([e], t, u);
}
function Pa(e, t, u) {
    if (u === void 0) { u = {}; }
    if (typeof t == "function")
        return e.some(t);
    var _b = __read(Dt(Ee(t)), 2), r = _b[0], a = _b[1];
    return r.length > 0 && e.some(Lt(r, u)) || a.some(function (n) { return Zr(n, e, u).length > 0; });
}
function Fa(e, t, u, r) { var a = typeof u == "string" ? parseInt(u, 10) : NaN; switch (e) {
    case "first":
    case "lt": return t;
    case "last": return t.length > 0 ? [t[t.length - 1]] : t;
    case "nth":
    case "eq": return isFinite(a) && Math.abs(a) < t.length ? [a < 0 ? t[t.length + a] : t[a]] : [];
    case "gt": return isFinite(a) ? t.slice(a + 1) : [];
    case "even": return t.filter(function (n, i) { return i % 2 === 0; });
    case "odd": return t.filter(function (n, i) { return i % 2 === 1; });
    case "not": {
        var n_1 = new Set(Ga(u, t, r));
        return t.filter(function (i) { return !n_1.has(i); });
    }
} }
function Ga(e, t, u) { if (t.length === 0)
    return []; var _b = __read(Dt(e), 2), r = _b[0], a = _b[1], n; if (r.length) {
    var i = Hu(t, r, u);
    if (a.length === 0)
        return i;
    i.length && (n = new Set(i));
} for (var i = 0; i < a.length && (n == null ? void 0 : n.size) !== t.length; i++) {
    var c = a[i];
    if ((n ? t.filter(function (w) { return U(w) && !n.has(w); }) : t).length === 0)
        break;
    var b = Zr(c, t, u);
    if (b.length)
        if (n)
            b.forEach(function (w) { return n.add(w); });
        else {
            if (i === a.length - 1)
                return b;
            n = new Set(b);
        }
} return typeof n != "undefined" ? n.size === t.length ? t : t.filter(function (i) { return n.has(i); }) : []; }
function Zr(e, t, u) { var r; if (e.some(Ce)) {
    var a = (r = u.root) !== null && r !== void 0 ? r : Xr(t[0]), n = Te(de({}, u), { context: t, relativeSelector: !1 });
    return e.push(Ba), Ut(a, e, n, !0, t.length);
} return Ut(t, e, u, !1, t.length); }
function Bu(e, t, u, r) {
    if (u === void 0) { u = {}; }
    if (r === void 0) { r = 1 / 0; }
    if (typeof e == "function")
        return Jr(t, e);
    var _b = __read(Dt(Ee(e)), 2), a = _b[0], n = _b[1], i = n.map(function (c) { return Ut(t, c, u, !0, r); });
    return a.length && i.push(Ru(t, a, u, r)), i.length === 0 ? [] : i.length === 1 ? i[0] : vu(i.reduce(function (c, f) { return __spreadArray(__spreadArray([], __read(c), false), __read(f), false); }));
}
function Ut(e, t, u, r, a) { var n = t.findIndex(ze), i = t.slice(0, n), c = t[n], f = t.length - 1 === n ? a : 1 / 0, b = Qr(c.name, c.data, f); if (b === 0)
    return []; var L = (i.length === 0 && !Array.isArray(e) ? yt(e).filter(U) : i.length === 0 ? (Array.isArray(e) ? e : [e]).filter(U) : r || i.some(Ce) ? Ru(e, [i], u, b) : Hu(e, [i], u)).slice(0, b), A = Fa(c.name, L, c.data, u); if (A.length === 0 || t.length === n + 1)
    return A; var T = t.slice(n + 1), I = T.some(Ce); if (I) {
    if (Ce(T[0])) {
        var D = T[0].type;
        (D === N.Sibling || D === N.Adjacent) && (A = It(A, be, !0)), T.unshift(Ma);
    }
    u = Te(de({}, u), { relativeSelector: !1, rootFunc: function (D) { return A.includes(D); } });
}
else
    u.rootFunc && u.rootFunc !== Ot.trueFunc && (u = Te(de({}, u), { rootFunc: Ot.trueFunc })); return T.some(ze) ? Ut(A, T, u, !1, a) : I ? Ru(A, [T], u, a) : Hu(A, [T], u); }
function Ru(e, t, u, r) { var a = Lt(t, u, e); return Jr(e, a, r); }
function Jr(e, t, u) {
    if (u === void 0) { u = 1 / 0; }
    var r = It(e, be, t.shouldTestNextSiblings);
    return wt(function (a) { return U(a) && t(a); }, r, !0, u);
}
function Hu(e, t, u) { var r = (Array.isArray(e) ? e : [e]).filter(U); if (r.length === 0)
    return r; var a = Lt(t, u); return a === Ot.trueFunc ? r : r.filter(a); }
function Yr(e) { var t = /^(?:([a-zA-Z][\w+.-]*):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/.exec(e) || []; return { scheme: t[1], auth: t[2], path: t[3] || "", query: t[4], frag: t[5] }; }
function Pu(e) { var t = [], u = e.split("/"); for (var r = 0; r < u.length; r++) {
    var a = u[r];
    a === ".." ? (t.length > 1 && t.pop(), r === u.length - 1 && t.push("")) : a === "." ? r === u.length - 1 && t.push("") : t.push(a);
} return t.join("/"); }
function Ht(e, t) { t = t == null ? "" : String(t).trim(); var u = Yr(t); if (u.scheme || !e)
    return t; var r = Yr(String(e)); if (!r.scheme)
    return t; var a = r.auth, n, i; if (u.auth !== void 0)
    a = u.auth, n = Pu(u.path), i = u.query;
else if (!u.path)
    n = r.path, i = u.query !== void 0 ? u.query : r.query;
else {
    if (u.path.charAt(0) === "/")
        n = Pu(u.path);
    else {
        var c = a !== void 0 && !r.path ? "/" : r.path.slice(0, r.path.lastIndexOf("/") + 1);
        n = Pu(c + u.path);
    }
    i = u.query;
} return a !== void 0 && n.charAt(0) !== "/" && (n = "/" + n), r.scheme + ":" + (a !== void 0 ? "//" + a : "") + n + (i !== void 0 ? "?" + i : "") + (u.frag !== void 0 ? "#" + u.frag : ""); }
var Rt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function e0(e) { if (typeof btoa == "function")
    return btoa(e); var t = ""; for (var u = 0; u < e.length; u += 3) {
    var r = e.charCodeAt(u), a = e.charCodeAt(u + 1), n = e.charCodeAt(u + 2), i = r << 16 | (a || 0) << 8 | (n || 0);
    t += Rt[i >> 18 & 63] + Rt[i >> 12 & 63] + (u + 1 < e.length ? Rt[i >> 6 & 63] : "=") + (u + 2 < e.length ? Rt[i & 63] : "=");
} return t; }
var Va = function (e, t, u) { return Bu(e, t, u); }, a0 = function (e, t, u) { return Bu(e, t, u, 1)[0] || null; }, n0 = /[\s ]+/g, t0 = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), ja = { containsOwn: function (e, t) { return Gu(e).toLowerCase().includes(String(t).toLowerCase()); }, matches: function (e, t) { return u0(t).test(Fu(e)); }, matchesOwn: function (e, t) { return u0(t).test(Gu(e)); }, containsData: function (e, t) { return we(e).includes(t); }, "contains-ci": function (e, t) { return Fu(e).toLowerCase().includes(String(t).toLowerCase()); } };
function u0(e) { try {
    return new RegExp(e);
}
catch (t) {
    return /$^/;
} }
var Mt = { pseudos: ja, xmlMode: !1, lowerCaseTags: !0 };
function Bt(e) { return String(e).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function Fu(e) { if (!e)
    return ""; if (e.type === "text")
    return e.data; var t = "", u = function (r) {
    var e_10, _b;
    try {
        for (var _c = __values(r.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var a = _d.value;
            a.type === "text" ? t += a.data : (a.type === "tag" || a.type === "script" || a.type === "style") && (a.name === "br" ? t += " " : a.type === "tag" && (t0.has(a.name) && (t += " "), u(a), t0.has(a.name) && (t += " ")));
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_10) throw e_10.error; }
    }
}; return u(e), t.replace(n0, " ").trim(); }
function Gu(e) {
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
    return t.replace(n0, " ").trim();
}
function i0(e, t) { if (!t)
    return ""; try {
    return Ht(e, t);
}
catch (u) {
    return e ? "" : t;
} }
var Le = (function () {
    function e(t, u) {
        this.node = t, this.doc = u;
    }
    Object.defineProperty(e.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    e.prototype.select = function (t) { return pe.of(Va(Bt(t), this.node, Mt), this.doc); };
    e.prototype.selectFirst = function (t) { var u = a0(Bt(t), this.node, Mt); return u ? new e(u, this.doc) : null; };
    e.prototype.is = function (t) { return Mu(this.node, Bt(t), Mt); };
    e.prototype.text = function () { return Fu(this.node); };
    e.prototype.ownText = function () { return Gu(this.node); };
    e.prototype.wholeText = function () { return we(this.node); };
    e.prototype.data = function () { return (this.node.children || []).filter(function (t) { return t.type === "text"; }).map(function (t) { return t.data; }).join(""); };
    e.prototype.html = function () { return (this.node.children || []).map(function (t) { return Fe(t, { decodeEntities: !1 }); }).join("").trim(); };
    e.prototype.outerHtml = function () { return Fe(this.node, { decodeEntities: !1 }); };
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
        return i0(this.baseUri, this.node.attribs[t.slice(4)] || ""); var r = this.node.attribs[t]; return r == null ? "" : r; };
    e.prototype.absUrl = function (t) { return this.attr("abs:" + t); };
    e.prototype.hasAttr = function (t) { return !!(this.node.attribs && (t.startsWith("abs:") ? t.slice(4) : t) in this.node.attribs); };
    e.prototype.removeAttr = function (t) { return this.node.attribs && delete this.node.attribs[t], this; };
    e.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    e.prototype.dataset = function () {
        var e_12, _b;
        var t = {};
        try {
            for (var _c = __values(Object.entries(this.node.attribs || {})), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _f = __read(_d.value, 2), u = _f[0], r = _f[1];
                u.startsWith("data-") && (t[u.slice(5)] = r);
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
        t.push(u), u = u.parent; return pe.of(t, this.doc); };
    e.prototype.closest = function (t) { var u = this.node; for (; u && u.type !== "root";) {
        if (u.type === "tag" && Mu(u, Bt(t), Mt))
            return new e(u, this.doc);
        u = u.parent;
    } return null; };
    e.prototype.children = function () { return pe.of((this.node.children || []).filter(U), this.doc); };
    e.prototype.child = function (t) { var u = (this.node.children || []).filter(U)[t]; return u ? new e(u, this.doc) : null; };
    e.prototype.childrenSize = function () { return (this.node.children || []).filter(U).length; };
    e.prototype.nextElementSibling = function () { var t = gu(this.node); return t ? new e(t, this.doc) : null; };
    e.prototype.previousElementSibling = function () { var t = mu(this.node); return t ? new e(t, this.doc) : null; };
    e.prototype.siblingElements = function () {
        var _this = this;
        return pe.of(vt(this.node).filter(function (t) { return t !== _this.node && U(t); }), this.doc);
    };
    e.prototype.elementSiblingIndex = function () { return vt(this.node).filter(U).indexOf(this.node); };
    e.prototype.getElementsByTag = function (t) { return this.select(t); };
    e.prototype.getElementsByClass = function (t) { return this.select("." + t); };
    e.prototype.getElementById = function (t) { return this.selectFirst("#" + t); };
    e.prototype.remove = function () { return me(this.node), this; };
    e.prototype.empty = function () { return this.node.children = [], this; };
    e.prototype.textNodes = function () { return (this.node.children || []).filter(function (t) { return t.type === "text"; }).map(function (t) { return ({ text: function () { return t.data; }, toString: function () { return t.data; } }); }); };
    e.prototype.title = function () { var t = this.selectFirst("title"); return t ? t.text() : ""; };
    e.prototype.body = function () { return this.selectFirst("body") || this; };
    e.prototype.head = function () { return this.selectFirst("head") || this; };
    e.prototype.location = function () { return this.baseUri; };
    return e;
}()), ju = Object.create(Array.prototype), pe = { of: Vu, prototype: ju };
function Vu(e, t) {
    var e_13, _b;
    var u = [];
    try {
        for (var _c = __values(e || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var r = _d.value;
            u.push(r instanceof Le ? r : new Le(r, t));
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return Object.setPrototypeOf(u, ju), u;
}
var r0 = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (e) { return this[e] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (e) { return pe.of(this[e] ? [this[e]] : [], null); }, text: function () { return this.map(function (e) { return e.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (e) { return e.text(); }).filter(Boolean); }, html: function () {
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
        var t = Vu([]), u = new Set;
        try {
            for (var _d = __values(this), _f = _d.next(); !_f.done; _f = _d.next()) {
                var r = _f.value;
                try {
                    for (var _g = (e_16 = void 0, __values(r.select(e))), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var a = _h.value;
                        u.has(a.node) || (u.add(a.node), t.push(a));
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
    }, is: function (e) { return this.some(function (t) { return t.is(e); }); }, not: function (e) { return pe.of(this.filter(function (t) { return !t.is(e); }), null); }, parents: function () {
        var e_18, _b;
        var e = Vu([]);
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
    }, next: function () { return pe.of(this.map(function (e) { return e.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return pe.of(this.map(function (e) { return e.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (e) { return e.remove(); }), this; }, empty: function () { return this.forEach(function (e) { return e.empty(); }), this; }, removeAttr: function (e) { return this.forEach(function (t) { return t.removeAttr(e); }), this; } };
try {
    for (var _c = __values(Object.keys(r0)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var e = _d.value;
        Object.defineProperty(ju, e, { value: r0[e], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
function Pt(e, t) { var u = Lr(String(e == null ? "" : e), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), r = new Le(u, null); r.doc = r, r.__base = t || ""; var a = a0("base[href]", u); return a && a.attribs.href && (r.__base = i0(r.__base, a.attribs.href)), r; }
function s0(e, t) { var u = new Set((t || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), r = Pt(e), a = function (n) {
    var e_19, _b, e_20, _c;
    try {
        for (var _d = __values((n.children || []).slice()), _f = _d.next(); !_f.done; _f = _d.next()) {
            var i = _f.value;
            if (i.type === "script" || i.type === "style" || i.type === "comment") {
                me(i);
                continue;
            }
            if (i.type === "tag" && (a(i), !u.has(i.name))) {
                var c = (i.children || []).slice();
                try {
                    for (var c_3 = (e_20 = void 0, __values(c)), c_3_1 = c_3.next(); !c_3_1.done; c_3_1 = c_3.next()) {
                        var f = c_3_1.value;
                        xu(i, f);
                    }
                }
                catch (e_20_1) { e_20 = { error: e_20_1 }; }
                finally {
                    try {
                        if (c_3_1 && !c_3_1.done && (_c = c_3.return)) _c.call(c_3);
                    }
                    finally { if (e_20) throw e_20.error; }
                }
                me(i);
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
}; return a(r.node), Fe(r.node.children, { decodeEntities: !1 }); }
var nt = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function za(e) { if (typeof Buffer != "undefined")
    return Buffer.from(e).toString("base64"); var t = ""; for (var u = 0; u < e.length; u++)
    t += String.fromCharCode(e[u]); return e0(t); }
function c0(e) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(e) : Uint8Array.from(unescape(encodeURIComponent(e)), function (t) { return t.charCodeAt(0); }); }
function Ka(e) { var t = ""; for (var u = 0; u < e.length; u++) {
    var r = e.charCodeAt(u);
    if (r < 128) {
        t += e[u];
        continue;
    }
    if (r === 128) {
        t += "€";
        continue;
    }
    var a = e.charCodeAt(u + 1);
    r >= 129 && r <= 254 && a >= 64 && a <= 254 && a !== 127 ? (t += __GBK_TABLE[(r - 129) * 190 + (a - 64) - (a > 127 ? 1 : 0)], u++) : t += "�";
} return t; }
var zu = (function () {
    function zu(t, u) {
        this.status = t.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText || String(this.status), this.url = t.url || u.url, this.headers = t.headers || {}, this._raw = t, this.request = { url: u.url, headers: u.headers || {} };
    }
    zu.prototype.header = function (t) { var u = Object.keys(this.headers).find(function (r) { return r.toLowerCase() === String(t).toLowerCase(); }); return u ? this.headers[u] : ""; };
    zu.prototype.text = function (t) { if (t && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(t).toLowerCase()).decode(this._raw.bytes);
        }
        catch (r) { } var u = this._raw.text == null ? "" : String(this._raw.text); return t || (t = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), t && /^(gbk|gb2312|gb18030)$/i.test(String(t)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(u) && !/[^\x00-\xff]/.test(u) ? Ka(u) : u; };
    zu.prototype.string = function (t) { return this.text(t); };
    zu.prototype.html = function (t) { return Pt(this.text(t), this.url); };
    zu.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (t) {
        return null;
    } };
    zu.prototype.base64 = function () { return za(this._raw.bytes || c0(this.text())); };
    zu.prototype.blob = function () { var t = this; return { size: (this._raw.bytes || c0(this.text())).length, type: this.header("content-type"), base64: function () { return t.base64(); } }; };
    return zu;
}());
function _a(e) {
    var e_21, _b;
    var t = {};
    if (!e)
        return t;
    if (typeof e.forEach == "function" && !Array.isArray(e) && typeof e.entries == "function")
        return e.forEach(function (u, r) { t[r] = u; }), t;
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
function l0(e, t) { var u = function (i) { return ({ getItem: function (c) { var f = e.storageGet(i + c); return f == null ? null : f; }, setItem: function (c, f) { return e.storageSet(i + c, f == null ? null : String(f)); }, removeItem: function (c) { return e.storageSet(i + c, null); }, clear: function () { return e.storageClear && e.storageClear(i); } }); }, r = "__cookie__", a = {}; a.Response = { success: function (i, c) { return ({ code: 0, data: i === void 0 ? null : i, data2: c === void 0 ? null : c }); }, error: function (i) { return ({ code: 1, data: i == null ? "" : String(i) }); } }, a.fetch = function (c, f) {
    return __awaiter(this, void 0, void 0, function () { var b, D, w, L, A, D, T, I, D_1; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                f = f || {};
                b = String(c);
                if (f.queries) {
                    D = Object.entries(f.queries).map(function (_b) {
                        var _c = __read(_b, 2), K = _c[0], J = _c[1];
                        return encodeURIComponent(K) + "=" + encodeURIComponent(J);
                    }).join("&");
                    D && (b += (b.includes("?") ? "&" : "?") + D);
                }
                w = Object.assign({ "User-Agent": nt }, _a(f.headers)), L = e.storageGet(r);
                L && !Object.keys(w).some(function (D) { return D.toLowerCase() === "cookie"; }) && (w.Cookie = L);
                A = f.body;
                if (A != null && typeof A == "object") {
                    D = Object.keys(w).find(function (K) { return K.toLowerCase() === "content-type"; });
                    D && /json/i.test(w[D]) ? A = JSON.stringify(A) : (A = Object.entries(A).map(function (_b) {
                        var _c = __read(_b, 2), K = _c[0], J = _c[1];
                        return encodeURIComponent(K) + "=" + encodeURIComponent(J);
                    }).join("&"), D || (w["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                T = { url: b, method: (f.method || (A != null ? "POST" : "GET")).toUpperCase(), headers: w, body: A, timeout: f.timeout };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4, e.request(T)];
            case 2:
                I = _b.sent();
                return [3, 4];
            case 3:
                D_1 = _b.sent();
                I = { status: 0, url: b, headers: {}, text: "", error: String(D_1 && D_1.message || D_1) };
                return [3, 4];
            case 4: return [2, new zu(I, T)];
        }
    }); });
}, a.Http = { get: function (i) { return o0(a, "GET", i); }, post: function (i) { return o0(a, "POST", i); } }, a.Html = { parse: function (i, c) { return Pt(i, c || ""); }, clean: function (i, c) { return s0(i, c); } }, a.localStorage = u("ls:"), a.cacheStorage = u("cs:"), a.localConfig = { getItem: function (i) { return e.config(i); } }, a.localCookie = { setCookie: function (i) { e.storageSet(r, String(i).split(";")[0]); }, getCookie: function () { return e.storageGet(r) || ""; } }, a.sleep = function (i) { return new Promise(function (c) { return typeof setTimeout == "function" ? setTimeout(c, Math.min(Number(i) || 0, 1e4)) : c(); }); }; var n = function () {
    var i = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        i[_i] = arguments[_i];
    }
    try {
        e.log && e.log(i.map(function (c) { return typeof c == "string" ? c : JSON.stringify(c); }).join(" "));
    }
    catch (c) { }
}; return a.Log = { log: n }, a.console = { log: n, error: n, warn: n, info: n }, a.Console = a.console, a.log = n, a.UserAgent = { system: function () { return nt; }, chrome: function () { return nt; }, android: function () { return nt; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, a.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (e.name || "host") + ")"); } }, a.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, a.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, a.Elements = pe, a.Element = Le, a.__meta = t, a; }
function o0(e, t, u) { var r = { method: t, url: u, headers: {}, body: void 0, queries: void 0 }, a = { headers: function (n) { return Object.assign(r.headers, n || {}), a; }, header: function (n, i) { return r.headers[n] = i, a; }, params: function (n) { return r.queries = n, a; }, queries: function (n) { return r.queries = n, a; }, body: function (n) { return r.body = n, a; }, html: function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).html(n)];
            }
        }); });
    }, string: function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).text(n)];
            }
        }); });
    }, text: function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).text(n)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).json()];
            }
        }); });
    } }; return a; }
function Ie(e, t) { if (!t)
    return ""; if (t = String(t).trim(), /^data:|^blob:/.test(t))
    return t; if (t.startsWith("//"))
    return "https:" + t; if (typeof __abs == "function")
    return __abs(e, t); try {
    return Ht(e, t);
}
catch (u) {
    return t;
} }
var B = function (e) { return e == null ? "" : String(e); }, Wa = function (e) { return e.filter(function (t, u) { return t && e.indexOf(t) === u; }); }, Ft = (function () {
    function class_1(t) {
        var u = t.meta, r = t.scripts, a = t.host;
        this.meta = u, this.host = a, this.env = t.env || l0(a, u), this.scripts = r, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return B(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
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
            var r, a, n, i;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        r = this.scripts[t];
                        if (!r)
                            throw new Error("script " + t + " missing");
                        a = function (c) { var f = _this.host.config(c); return f == null ? (_this.meta.configDefaults || {})[c] : f; };
                        return [4, r(this.env, a)];
                    case 1:
                        n = _b.sent();
                        if (typeof n != "function")
                            throw new Error(t + ": execute() not defined");
                        return [4, n.apply(void 0, __spreadArray([], __read(u.map(B)), false))];
                    case 2:
                        i = _b.sent();
                        if (!i)
                            throw new Error(t + ": empty result");
                        if (i.code !== 0)
                            throw new Error(t + ": " + B(i.data || "error"));
                        return [2, i];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (t) { return B(t).replace(/\.js$/, ""); };
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
    class_1.prototype.list = function (t, u, r) {
        return __awaiter(this, void 0, void 0, function () {
            var a, n, i, c, f;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        a = t + "|" + u;
                        r = Math.max(1, r | 0);
                        n = r === 1 ? "" : this.tokens[a + "|" + r];
                        if (r > 1 && n == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(t, u, n)];
                    case 1:
                        i = _b.sent(), c = B(i.data2);
                        c && (this.tokens[a + "|" + (r + 1)] = c);
                        f = (i.data || []).filter(Boolean).map(function (b) { return ({ name: B(b.name).trim(), link: Ie(b.host || _this.base + "/", b.link), cover: Ie(b.host || _this.base + "/", b.cover), description: B(b.description), tag: B(b.tag) }); }).filter(function (b) { return b.name && b.link; });
                        return [2, { items: f, hasNext: !!c && f.length > 0 }];
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
                    return [2, u[0] ? this.list(this.scriptFile(u[0].script), B(u[0].input), t) : this.search("", t)];
            }
        }); });
    };
    class_1.prototype.latest = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u, r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    u = _b.sent(), r = u[1] || u[0];
                    return [2, r ? this.list(this.scriptFile(r.script), B(r.input), t) : this.search("", t)];
            }
        }); });
    };
    class_1.prototype.search = function (t, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, this.has("search") ? this.list("search", t, u) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u, r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.run("detail", t)];
                case 1:
                    u = (_b.sent()).data || {}, r = [].concat(u.genres || [], u.tags || []).map(function (a) { return typeof a == "string" ? a : a && a.title; }).filter(Boolean);
                    return [2, { name: B(u.name).trim(), cover: Ie(u.host || this.base + "/", u.cover), author: B(u.author).trim(), description: f0(B(u.description)), detail: f0(B(u.detail)), ongoing: u.ongoing !== !1 && u.ongoing !== "false", genres: Wa(r.map(function (a) { return String(a).trim(); })), url: t, format: B(u.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var u, r, r_1, r_1_1, a, _b, _c, e_22_1, _d;
            var e_22, _f;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        u = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", t)];
                    case 1:
                        r = (_g.sent()).data || [t];
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 7, 8, 9]);
                        r_1 = __values(r), r_1_1 = r_1.next();
                        _g.label = 3;
                    case 3:
                        if (!!r_1_1.done) return [3, 6];
                        a = r_1_1.value;
                        _c = (_b = u).concat;
                        return [4, this.run("toc", B(a))];
                    case 4:
                        u = _c.apply(_b, [(_g.sent()).data || []]);
                        _g.label = 5;
                    case 5:
                        r_1_1 = r_1.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_22_1 = _g.sent();
                        e_22 = { error: e_22_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (r_1_1 && !r_1_1.done && (_f = r_1.return)) _f.call(r_1);
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
                    case 13: return [2, u.filter(function (r) { return r && r.url && r.type !== "section"; }).map(function (r, a) { return ({ name: B(r.name).trim() || "#" + (a + 1), url: Ie(r.host || _this.base + "/", r.url), pay: !!(r.pay || r.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var u, _b, _c, r, a;
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
                        r = function (n) { return !n || /^data:|loading|lazy|blank|placeholder|spacer|\/nocover|1x1\./i.test(String(n)); }, a = function (n) { if (typeof n == "string")
                            return n; if (!n)
                            return ""; var i = n.link || n.url || n.data, c = Array.isArray(n.fallback) ? n.fallback.filter(Boolean) : []; return r(i) && c.length ? c[0] : i; };
                        return [2, (u || []).map(function (n) { return Ie(_this.base + "/", a(n)); }).filter(Boolean)];
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
                    return [2, { html: B(u.data), title: B(u.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var u, a, r, u_3, u_3_1, a, n, i, i_2, i_2_1, c, n_2, e_23_1;
            var e_23, _b, e_24, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        u = [{ title: "Default", data: t }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", t)];
                    case 1:
                        a = (_d.sent()).data;
                        Array.isArray(a) && a.length && (u = a.map(function (n) { return typeof n == "string" ? { title: "Server", data: n } : { title: B(n.title || n.name || "Server"), data: B(n.data || n.url || n.link) }; }));
                        _d.label = 2;
                    case 2:
                        r = [];
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 10, 11, 12]);
                        u_3 = __values(u), u_3_1 = u_3.next();
                        _d.label = 4;
                    case 4:
                        if (!!u_3_1.done) return [3, 9];
                        a = u_3_1.value;
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 7, , 8]);
                        return [4, this.run("track", a.data)];
                    case 6:
                        n = (_d.sent()).data || {}, i = Array.isArray(n) ? n : [n];
                        try {
                            for (i_2 = (e_24 = void 0, __values(i)), i_2_1 = i_2.next(); !i_2_1.done; i_2_1 = i_2.next()) {
                                c = i_2_1.value;
                                !c || !c.data || c.type !== "webview" && r.push({ url: Ie(c.host || this.base + "/", c.data), quality: a.title + (c.quality ? " " + c.quality : ""), headers: c.headers || { Referer: this.base + "/" }, subtitles: (c.subtitles || (c.subtitle ? [{ data: c.subtitle, label: "Sub" }] : [])).map(function (f) { return ({ file: Ie(_this.base + "/", f.data || f.file), label: B(f.label || f.language || "Sub") }); }), mimeType: B(c.mimeType) });
                            }
                        }
                        catch (e_24_1) { e_24 = { error: e_24_1 }; }
                        finally {
                            try {
                                if (i_2_1 && !i_2_1.done && (_c = i_2.return)) _c.call(i_2);
                            }
                            finally { if (e_24) throw e_24.error; }
                        }
                        return [3, 8];
                    case 7:
                        n_2 = _d.sent();
                        this.host.log && this.host.log("track " + a.title + ": " + n_2.message);
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
                    case 12: return [2, r];
                }
            });
        });
    };
    return class_1;
}());
function f0(e) {
    return String(e).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
var ye = { id: "truyenchu", name: "TruyenChu", source: "https://truyenchu.net", type: "novel", locale: "vi", nsfw: !1, version: 9, config: {}, configDefaults: {}, itemType: 2, lnId: "kiritokmn.truyenchu", lnIcon: "", lnVersion: "1.2.9" }, d0 = { home: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, a, n, i, c, f, b, w, L, A, T, I, D, K, J, ne) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function C(s, l) { var o = s.select(l); return o.size() > 0 ? o.get(0) : null; } function Q(s) { return s.indexOf(v) === 0 ? s.substring(v.length) : s.indexOf(q) === 0 ? s.substring(q.length) : s; } function fe(s) { return s ? (s.indexOf(q + "/") === 0 && s.indexOf(v) !== 0 && (s = v + s.substring(q.length)), s.indexOf("http") === 0 ? s : v + (s.charAt(0) === "/" ? s : "/" + s)) : v; } function te(s) {
                                        return __awaiter(this, void 0, void 0, function () { var l, _b, _c; return __generator(this, function (_d) {
                                            switch (_d.label) {
                                                case 0: return [4, u(s, M)];
                                                case 1:
                                                    l = _d.sent();
                                                    _b = l;
                                                    if (!_b) return [3, 4];
                                                    _c = !l.ok && !(l.status >= 400 && l.status < 500);
                                                    if (!_c) return [3, 3];
                                                    return [4, u(s, M)];
                                                case 2:
                                                    _c = (l = _d.sent());
                                                    _d.label = 3;
                                                case 3:
                                                    _b = (_c, l);
                                                    _d.label = 4;
                                                case 4: return [2, _b];
                                            }
                                        }); });
                                    } function X(s) { var l = C(s, "img[data-src], img[data-lazy], img[src]"); if (l) {
                                        var o = l.attr("data-src") || l.attr("data-lazy") || l.attr("src") || "";
                                        if (o && o.indexOf("data:") !== 0)
                                            return o;
                                    } var h = C(s, "[data-bg], [style*='background-image']"); if (h) {
                                        var d = h.attr("data-bg") || "";
                                        if (!d) {
                                            var p = _.exec(h.attr("style") || "");
                                            p && (d = p[1]);
                                        }
                                        if (d)
                                            return d;
                                    } return ""; } function ie(s) { var l = [], o = {}, h = s.select(".page-item-detail"); h.size() === 0 && (h = s.select(".manga__item, .c-image-hover, .row.row-eq-height .col-6")); for (var d = 0; d < h.size(); d++) {
                                        var p = h.get(d), g = C(p, ".post-title a[href], h3.h5 a[href], h3 a[href], h2 a[href]");
                                        if (g) {
                                            var m = g.attr("href") || "";
                                            if (!(!m || W.test(m)) && !(m.indexOf("/the-loai/") !== -1 || m.indexOf("/tac-gia/") !== -1)) {
                                                var y = Q(m);
                                                if (!o[y]) {
                                                    o[y] = !0;
                                                    var S = g.text().trim();
                                                    if (S) {
                                                        var E = X(p);
                                                        E && E.indexOf("http") !== 0 && (E = v + E), l.push({ name: S, link: y, host: P, cover: E, description: "" });
                                                    }
                                                }
                                            }
                                        }
                                    } return l; } function se(s, l) { var o = l + 1, h = s.select("a[href*='/page/" + o + "/']"); if (h.size() > 0)
                                        return String(o); var d = C(s, ".nav-previous a, a[rel='prev']"); if (!d)
                                        for (var p = s.select("a[href*='/page/']"), g = 0; g < p.size(); g++) {
                                            var m = p.get(g).text().trim();
                                            if (m === "Cũ hơn" || m.indexOf("Older") === 0) {
                                                d = p.get(g);
                                                break;
                                            }
                                        } if (d) {
                                        var y = d.attr("href") || "", S = $.exec(y);
                                        if (S)
                                            return S[1];
                                        if (y)
                                            return String(o);
                                    } return null; } function F() {
                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                            return [2, n.success([{ title: "Mới Cập Nhật", input: "truyen", script: "homecontent.js" }])];
                                        }); });
                                    } var v, P, q, H, M, _, W, $; return __generator(this, function (_b) {
                                        v = "https://truyenchu.net", P = "https://truyenchu.net", q = "https://www.truyenchu.net", H = { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: "https://truyenchu.net/" }, M = { headers: H }, _ = /url\(['""]?([^'""\)\s]+)['""]?\)/, W = /^\s*$|^javascript:|^#|\/wp-login|\/wp-admin|\/cart|\/checkout|\/account|\/contact|\/tag\//, $ = /\/page\/(\d+)\/?/;
                                        return [2, typeof F == "function" ? F : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, homecontent: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, a, n, i, c, f, b, w, L, A, T, I, D, K, J, ne) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function C(s, l) { var o = s.select(l); return o.size() > 0 ? o.get(0) : null; } function Q(s) { return s.indexOf(v) === 0 ? s.substring(v.length) : s.indexOf(q) === 0 ? s.substring(q.length) : s; } function fe(s) { return s ? (s.indexOf(q + "/") === 0 && s.indexOf(v) !== 0 && (s = v + s.substring(q.length)), s.indexOf("http") === 0 ? s : v + (s.charAt(0) === "/" ? s : "/" + s)) : v; } function te(s) {
                                        return __awaiter(this, void 0, void 0, function () { var l, _b, _c; return __generator(this, function (_d) {
                                            switch (_d.label) {
                                                case 0: return [4, u(s, M)];
                                                case 1:
                                                    l = _d.sent();
                                                    _b = l;
                                                    if (!_b) return [3, 4];
                                                    _c = !l.ok && !(l.status >= 400 && l.status < 500);
                                                    if (!_c) return [3, 3];
                                                    return [4, u(s, M)];
                                                case 2:
                                                    _c = (l = _d.sent());
                                                    _d.label = 3;
                                                case 3:
                                                    _b = (_c, l);
                                                    _d.label = 4;
                                                case 4: return [2, _b];
                                            }
                                        }); });
                                    } function X(s) { var l = C(s, "img[data-src], img[data-lazy], img[src]"); if (l) {
                                        var o = l.attr("data-src") || l.attr("data-lazy") || l.attr("src") || "";
                                        if (o && o.indexOf("data:") !== 0)
                                            return o;
                                    } var h = C(s, "[data-bg], [style*='background-image']"); if (h) {
                                        var d = h.attr("data-bg") || "";
                                        if (!d) {
                                            var p = _.exec(h.attr("style") || "");
                                            p && (d = p[1]);
                                        }
                                        if (d)
                                            return d;
                                    } return ""; } function ie(s) { var l = [], o = {}, h = s.select(".page-item-detail"); h.size() === 0 && (h = s.select(".manga__item, .c-image-hover, .row.row-eq-height .col-6")); for (var d = 0; d < h.size(); d++) {
                                        var p = h.get(d), g = C(p, ".post-title a[href], h3.h5 a[href], h3 a[href], h2 a[href]");
                                        if (g) {
                                            var m = g.attr("href") || "";
                                            if (!(!m || W.test(m)) && !(m.indexOf("/the-loai/") !== -1 || m.indexOf("/tac-gia/") !== -1)) {
                                                var y = Q(m);
                                                if (!o[y]) {
                                                    o[y] = !0;
                                                    var S = g.text().trim();
                                                    if (S) {
                                                        var E = X(p);
                                                        E && E.indexOf("http") !== 0 && (E = v + E), l.push({ name: S, link: y, host: P, cover: E, description: "" });
                                                    }
                                                }
                                            }
                                        }
                                    } return l; } function se(s, l) { var o = l + 1, h = s.select("a[href*='/page/" + o + "/']"); if (h.size() > 0)
                                        return String(o); var d = C(s, ".nav-previous a, a[rel='prev']"); if (!d)
                                        for (var p = s.select("a[href*='/page/']"), g = 0; g < p.size(); g++) {
                                            var m = p.get(g).text().trim();
                                            if (m === "Cũ hơn" || m.indexOf("Older") === 0) {
                                                d = p.get(g);
                                                break;
                                            }
                                        } if (d) {
                                        var y = d.attr("href") || "", S = $.exec(y);
                                        if (S)
                                            return S[1];
                                        if (y)
                                            return String(o);
                                    } return null; } function F(s, l) {
                                        return __awaiter(this, void 0, void 0, function () { var o, h, d, p, g, m; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    o = l ? parseInt(l) : 1, h = o <= 1 ? v + "/truyen/" : v + "/truyen/page/" + o + "/";
                                                    return [4, te(h)];
                                                case 1:
                                                    d = _b.sent();
                                                    if (!d || !d.ok)
                                                        return [2, n.error("Không tải được trang " + h)];
                                                    p = d.html();
                                                    if (!p)
                                                        return [2, n.success([], null)];
                                                    g = ie(p);
                                                    if (!g || g.length === 0)
                                                        return [2, n.success([], null)];
                                                    m = se(p, o);
                                                    return [2, n.success(g, m)];
                                            }
                                        }); });
                                    } var v, P, q, H, M, _, W, $; return __generator(this, function (_b) {
                                        v = "https://truyenchu.net", P = "https://truyenchu.net", q = "https://www.truyenchu.net", H = { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: "https://truyenchu.net/" }, M = { headers: H }, _ = /url\(['""]?([^'""\)\s]+)['""]?\)/, W = /^\s*$|^javascript:|^#|\/wp-login|\/wp-admin|\/cart|\/checkout|\/account|\/contact|\/tag\//, $ = /\/page\/(\d+)\/?/;
                                        return [2, typeof F == "function" ? F : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, genre: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, a, n, i, c, f, b, w, L, A, T, I, D, K, J, ne) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function C(s, l) { var o = s.select(l); return o.size() > 0 ? o.get(0) : null; } function Q(s) { return s.indexOf(v) === 0 ? s.substring(v.length) : s.indexOf(q) === 0 ? s.substring(q.length) : s; } function fe(s) { return s ? (s.indexOf(q + "/") === 0 && s.indexOf(v) !== 0 && (s = v + s.substring(q.length)), s.indexOf("http") === 0 ? s : v + (s.charAt(0) === "/" ? s : "/" + s)) : v; } function te(s) {
                                        return __awaiter(this, void 0, void 0, function () { var l, _b, _c; return __generator(this, function (_d) {
                                            switch (_d.label) {
                                                case 0: return [4, u(s, M)];
                                                case 1:
                                                    l = _d.sent();
                                                    _b = l;
                                                    if (!_b) return [3, 4];
                                                    _c = !l.ok && !(l.status >= 400 && l.status < 500);
                                                    if (!_c) return [3, 3];
                                                    return [4, u(s, M)];
                                                case 2:
                                                    _c = (l = _d.sent());
                                                    _d.label = 3;
                                                case 3:
                                                    _b = (_c, l);
                                                    _d.label = 4;
                                                case 4: return [2, _b];
                                            }
                                        }); });
                                    } function X(s) { var l = C(s, "img[data-src], img[data-lazy], img[src]"); if (l) {
                                        var o = l.attr("data-src") || l.attr("data-lazy") || l.attr("src") || "";
                                        if (o && o.indexOf("data:") !== 0)
                                            return o;
                                    } var h = C(s, "[data-bg], [style*='background-image']"); if (h) {
                                        var d = h.attr("data-bg") || "";
                                        if (!d) {
                                            var p = _.exec(h.attr("style") || "");
                                            p && (d = p[1]);
                                        }
                                        if (d)
                                            return d;
                                    } return ""; } function ie(s) { var l = [], o = {}, h = s.select(".page-item-detail"); h.size() === 0 && (h = s.select(".manga__item, .c-image-hover, .row.row-eq-height .col-6")); for (var d = 0; d < h.size(); d++) {
                                        var p = h.get(d), g = C(p, ".post-title a[href], h3.h5 a[href], h3 a[href], h2 a[href]");
                                        if (g) {
                                            var m = g.attr("href") || "";
                                            if (!(!m || W.test(m)) && !(m.indexOf("/the-loai/") !== -1 || m.indexOf("/tac-gia/") !== -1)) {
                                                var y = Q(m);
                                                if (!o[y]) {
                                                    o[y] = !0;
                                                    var S = g.text().trim();
                                                    if (S) {
                                                        var E = X(p);
                                                        E && E.indexOf("http") !== 0 && (E = v + E), l.push({ name: S, link: y, host: P, cover: E, description: "" });
                                                    }
                                                }
                                            }
                                        }
                                    } return l; } function se(s, l) { var o = l + 1, h = s.select("a[href*='/page/" + o + "/']"); if (h.size() > 0)
                                        return String(o); var d = C(s, ".nav-previous a, a[rel='prev']"); if (!d)
                                        for (var p = s.select("a[href*='/page/']"), g = 0; g < p.size(); g++) {
                                            var m = p.get(g).text().trim();
                                            if (m === "Cũ hơn" || m.indexOf("Older") === 0) {
                                                d = p.get(g);
                                                break;
                                            }
                                        } if (d) {
                                        var y = d.attr("href") || "", S = $.exec(y);
                                        if (S)
                                            return S[1];
                                        if (y)
                                            return String(o);
                                    } return null; } function F() {
                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                            return [2, n.success([{ title: "Cổ Đại", input: "co-dai", script: "genrecontent.js" }, { title: "Cung Đấu", input: "cung-dau", script: "genrecontent.js" }, { title: "Đam Mỹ", input: "dam-my", script: "genrecontent.js" }, { title: "Dị Giới", input: "di-gioi", script: "genrecontent.js" }, { title: "Dị Năng", input: "di-nang", script: "genrecontent.js" }, { title: "Điền Văn", input: "dien-van", script: "genrecontent.js" }, { title: "Đô Thị", input: "do-thi", script: "genrecontent.js" }, { title: "Đoản Văn", input: "doan-van", script: "genrecontent.js" }, { title: "Đông Phương", input: "dong-phuong", script: "genrecontent.js" }, { title: "Gia Đấu", input: "gia-dau", script: "genrecontent.js" }, { title: "Hài Hước", input: "hai-huoc", script: "genrecontent.js" }, { title: "Hệ Thống", input: "he-thong", script: "genrecontent.js" }, { title: "Huyền Huyễn", input: "huyen-huyen", script: "genrecontent.js" }, { title: "Khác", input: "khac", script: "genrecontent.js" }, { title: "Khoa Huyễn", input: "khoa-huyen", script: "genrecontent.js" }, { title: "Kiếm Hiệp", input: "kiem-hiep", script: "genrecontent.js" }, { title: "Lịch Sử", input: "lich-su", script: "genrecontent.js" }, { title: "Linh Dị", input: "linh-di", script: "genrecontent.js" }, { title: "Mạt Thế", input: "mat-the", script: "genrecontent.js" }, { title: "Ngôn Tình", input: "ngon-tinh", script: "genrecontent.js" }, { title: "Ngược", input: "nguoc", script: "genrecontent.js" }, { title: "Nữ Cường", input: "nu-cuong", script: "genrecontent.js" }, { title: "Quân Sự", input: "quan-su", script: "genrecontent.js" }, { title: "Sắc", input: "sac", script: "genrecontent.js" }, { title: "Sắc Hiệp", input: "sac-hiep", script: "genrecontent.js" }, { title: "Sủng", input: "sung", script: "genrecontent.js" }, { title: "Tiên Hiệp", input: "tien-hiep", script: "genrecontent.js" }, { title: "Trinh Thám", input: "trinh-tham", script: "genrecontent.js" }, { title: "Trọng Sinh", input: "trong-sinh", script: "genrecontent.js" }, { title: "Truyện Teen", input: "truyen-teen", script: "genrecontent.js" }, { title: "Võ Hiệp", input: "vo-hiep", script: "genrecontent.js" }, { title: "Võng Du", input: "vong-du", script: "genrecontent.js" }, { title: "Xuyên Không", input: "xuyen-khong", script: "genrecontent.js" }, { title: "Xuyên Nhanh", input: "xuyen-nhanh", script: "genrecontent.js" }])];
                                        }); });
                                    } var v, P, q, H, M, _, W, $; return __generator(this, function (_b) {
                                        v = "https://truyenchu.net", P = "https://truyenchu.net", q = "https://www.truyenchu.net", H = { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: "https://truyenchu.net/" }, M = { headers: H }, _ = /url\(['""]?([^'""\)\s]+)['""]?\)/, W = /^\s*$|^javascript:|^#|\/wp-login|\/wp-admin|\/cart|\/checkout|\/account|\/contact|\/tag\//, $ = /\/page\/(\d+)\/?/;
                                        return [2, typeof F == "function" ? F : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, genrecontent: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, a, n, i, c, f, b, w, L, A, T, I, D, K, J, ne) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function C(s, l) { var o = s.select(l); return o.size() > 0 ? o.get(0) : null; } function Q(s) { return s.indexOf(v) === 0 ? s.substring(v.length) : s.indexOf(q) === 0 ? s.substring(q.length) : s; } function fe(s) { return s ? (s.indexOf(q + "/") === 0 && s.indexOf(v) !== 0 && (s = v + s.substring(q.length)), s.indexOf("http") === 0 ? s : v + (s.charAt(0) === "/" ? s : "/" + s)) : v; } function te(s) {
                                        return __awaiter(this, void 0, void 0, function () { var l, _b, _c; return __generator(this, function (_d) {
                                            switch (_d.label) {
                                                case 0: return [4, u(s, M)];
                                                case 1:
                                                    l = _d.sent();
                                                    _b = l;
                                                    if (!_b) return [3, 4];
                                                    _c = !l.ok && !(l.status >= 400 && l.status < 500);
                                                    if (!_c) return [3, 3];
                                                    return [4, u(s, M)];
                                                case 2:
                                                    _c = (l = _d.sent());
                                                    _d.label = 3;
                                                case 3:
                                                    _b = (_c, l);
                                                    _d.label = 4;
                                                case 4: return [2, _b];
                                            }
                                        }); });
                                    } function X(s) { var l = C(s, "img[data-src], img[data-lazy], img[src]"); if (l) {
                                        var o = l.attr("data-src") || l.attr("data-lazy") || l.attr("src") || "";
                                        if (o && o.indexOf("data:") !== 0)
                                            return o;
                                    } var h = C(s, "[data-bg], [style*='background-image']"); if (h) {
                                        var d = h.attr("data-bg") || "";
                                        if (!d) {
                                            var p = _.exec(h.attr("style") || "");
                                            p && (d = p[1]);
                                        }
                                        if (d)
                                            return d;
                                    } return ""; } function ie(s) { var l = [], o = {}, h = s.select(".page-item-detail"); h.size() === 0 && (h = s.select(".manga__item, .c-image-hover, .row.row-eq-height .col-6")); for (var d = 0; d < h.size(); d++) {
                                        var p = h.get(d), g = C(p, ".post-title a[href], h3.h5 a[href], h3 a[href], h2 a[href]");
                                        if (g) {
                                            var m = g.attr("href") || "";
                                            if (!(!m || W.test(m)) && !(m.indexOf("/the-loai/") !== -1 || m.indexOf("/tac-gia/") !== -1)) {
                                                var y = Q(m);
                                                if (!o[y]) {
                                                    o[y] = !0;
                                                    var S = g.text().trim();
                                                    if (S) {
                                                        var E = X(p);
                                                        E && E.indexOf("http") !== 0 && (E = v + E), l.push({ name: S, link: y, host: P, cover: E, description: "" });
                                                    }
                                                }
                                            }
                                        }
                                    } return l; } function se(s, l) { var o = l + 1, h = s.select("a[href*='/page/" + o + "/']"); if (h.size() > 0)
                                        return String(o); var d = C(s, ".nav-previous a, a[rel='prev']"); if (!d)
                                        for (var p = s.select("a[href*='/page/']"), g = 0; g < p.size(); g++) {
                                            var m = p.get(g).text().trim();
                                            if (m === "Cũ hơn" || m.indexOf("Older") === 0) {
                                                d = p.get(g);
                                                break;
                                            }
                                        } if (d) {
                                        var y = d.attr("href") || "", S = $.exec(y);
                                        if (S)
                                            return S[1];
                                        if (y)
                                            return String(o);
                                    } return null; } function F(s, l) {
                                        return __awaiter(this, void 0, void 0, function () { var o, h, d, p, g, m; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    o = l ? parseInt(l) : 1, h = o <= 1 ? v + "/the-loai/" + s + "/" : v + "/the-loai/" + s + "/page/" + o + "/";
                                                    return [4, te(h)];
                                                case 1:
                                                    d = _b.sent();
                                                    if (!d || !d.ok)
                                                        return [2, n.error("Không tải được thể loại: " + s)];
                                                    p = d.html();
                                                    if (!p)
                                                        return [2, n.success([], null)];
                                                    g = ie(p);
                                                    if (!g || g.length === 0)
                                                        return [2, n.success([], null)];
                                                    m = se(p, o);
                                                    return [2, n.success(g, m)];
                                            }
                                        }); });
                                    } var v, P, q, H, M, _, W, $; return __generator(this, function (_b) {
                                        v = "https://truyenchu.net", P = "https://truyenchu.net", q = "https://www.truyenchu.net", H = { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: "https://truyenchu.net/" }, M = { headers: H }, _ = /url\(['""]?([^'""\)\s]+)['""]?\)/, W = /^\s*$|^javascript:|^#|\/wp-login|\/wp-admin|\/cart|\/checkout|\/account|\/contact|\/tag\//, $ = /\/page\/(\d+)\/?/;
                                        return [2, typeof F == "function" ? F : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, detail: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, r, a, n, i, c, f, b, w, L, A, T, I, D, K, J, ne) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4, (function () {
                                            return __awaiter(this, void 0, void 0, function () {
                                                function C(o, h) { var d = o.select(h); return d.size() > 0 ? d.get(0) : null; }
                                                function Q(o) { return o.indexOf(v) === 0 ? o.substring(v.length) : o.indexOf(q) === 0 ? o.substring(q.length) : o; }
                                                function fe(o) { return o ? (o.indexOf(q + "/") === 0 && o.indexOf(v) !== 0 && (o = v + o.substring(q.length)), o.indexOf("http") === 0 ? o : v + (o.charAt(0) === "/" ? o : "/" + o)) : v; }
                                                function te(o) {
                                                    return __awaiter(this, void 0, void 0, function () { var h, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0: return [4, u(o, M)];
                                                            case 1:
                                                                h = _d.sent();
                                                                _b = h;
                                                                if (!_b) return [3, 4];
                                                                _c = !h.ok && !(h.status >= 400 && h.status < 500);
                                                                if (!_c) return [3, 3];
                                                                return [4, u(o, M)];
                                                            case 2:
                                                                _c = (h = _d.sent());
                                                                _d.label = 3;
                                                            case 3:
                                                                _b = (_c, h);
                                                                _d.label = 4;
                                                            case 4: return [2, _b];
                                                        }
                                                    }); });
                                                }
                                                function X(o) { var h = C(o, "img[data-src], img[data-lazy], img[src]"); if (h) {
                                                    var d = h.attr("data-src") || h.attr("data-lazy") || h.attr("src") || "";
                                                    if (d && d.indexOf("data:") !== 0)
                                                        return d;
                                                } var p = C(o, "[data-bg], [style*='background-image']"); if (p) {
                                                    var g = p.attr("data-bg") || "";
                                                    if (!g) {
                                                        var m = _.exec(p.attr("style") || "");
                                                        m && (g = m[1]);
                                                    }
                                                    if (g)
                                                        return g;
                                                } return ""; }
                                                function ie(o) { var h = [], d = {}, p = o.select(".page-item-detail"); p.size() === 0 && (p = o.select(".manga__item, .c-image-hover, .row.row-eq-height .col-6")); for (var g = 0; g < p.size(); g++) {
                                                    var m = p.get(g), y = C(m, ".post-title a[href], h3.h5 a[href], h3 a[href], h2 a[href]");
                                                    if (y) {
                                                        var S = y.attr("href") || "";
                                                        if (!(!S || W.test(S)) && !(S.indexOf("/the-loai/") !== -1 || S.indexOf("/tac-gia/") !== -1)) {
                                                            var E = Q(S);
                                                            if (!d[E]) {
                                                                d[E] = !0;
                                                                var G = y.text().trim();
                                                                if (G) {
                                                                    var ee = X(m);
                                                                    ee && ee.indexOf("http") !== 0 && (ee = v + ee), h.push({ name: G, link: E, host: P, cover: ee, description: "" });
                                                                }
                                                            }
                                                        }
                                                    }
                                                } return h; }
                                                function se(o, h) { var d = h + 1, p = o.select("a[href*='/page/" + d + "/']"); if (p.size() > 0)
                                                    return String(d); var g = C(o, ".nav-previous a, a[rel='prev']"); if (!g)
                                                    for (var m = o.select("a[href*='/page/']"), y = 0; y < m.size(); y++) {
                                                        var S = m.get(y).text().trim();
                                                        if (S === "Cũ hơn" || S.indexOf("Older") === 0) {
                                                            g = m.get(y);
                                                            break;
                                                        }
                                                    } if (g) {
                                                    var E = g.attr("href") || "", G = $.exec(E);
                                                    if (G)
                                                        return G[1];
                                                    if (E)
                                                        return String(d);
                                                } return null; }
                                                function l(o) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var h, d, p, g, m, y, S, E, G, ee, b0, Wu, Vt, $u, Qu, jt, Xu, zt, p0, Zu, Ju, st, ct, Kt, _t, Yu, Wt, er, g0, ot, tr;
                                                        return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0:
                                                                    h = fe(o);
                                                                    return [4, te(h)];
                                                                case 1:
                                                                    d = _b.sent();
                                                                    if (!d || !d.ok)
                                                                        return [2, n.error("Không tải được trang truyện")];
                                                                    p = d.html();
                                                                    if (!p)
                                                                        return [2, n.error("Không đọc được nội dung trang")];
                                                                    g = C(p, "h1.entry-title, .post-title h1, h1.post-title, h1"), m = g ? g.text().trim() : "", y = "", S = C(p, ".summary_image img, .tab-summary img");
                                                                    S && (y = S.attr("data-src") || S.attr("data-lazy") || S.attr("src") || ""), y && y.indexOf("http") !== 0 && (y = v + y);
                                                                    E = "", G = "", ee = C(p, ".author-content a, .manga-authors a");
                                                                    if (ee) {
                                                                        E = ee.text().trim();
                                                                        b0 = ee.attr("href") || "", Wu = F.exec(b0);
                                                                        Wu && (G = "author:" + Wu[1]);
                                                                    }
                                                                    for (Vt = [], $u = [], Qu = p.select(".genres-content a[href*='/the-loai/']"), jt = 0; jt < Qu.size(); jt++) {
                                                                        Xu = Qu.get(jt), zt = Xu.text().trim();
                                                                        if (zt) {
                                                                            Vt.push(zt);
                                                                            p0 = Xu.attr("href") || "", Zu = s.exec(p0);
                                                                            Zu && $u.push({ title: zt, input: Zu[1], script: "genrecontent.js" });
                                                                        }
                                                                    }
                                                                    Ju = C(p, ".post-status .summary-content"), st = Ju ? Ju.text().trim() : "", ct = "", Kt = C(p, ".manga-excerpt, .summary__content, .description-summary");
                                                                    if (Kt) {
                                                                        _t = Kt.select("p");
                                                                        if (_t.size() > 0) {
                                                                            for (Yu = [], Wt = 0; Wt < _t.size(); Wt++) {
                                                                                er = _t.get(Wt).text().trim();
                                                                                er && Yu.push(er);
                                                                            }
                                                                            ct = Yu.join("\n");
                                                                        }
                                                                        ct || (ct = Kt.text().trim());
                                                                    }
                                                                    g0 = st.indexOf("Completed") === -1 && st.indexOf("Hoàn") === -1, ot = "";
                                                                    st && (ot += "Tình trạng: " + st), Vt.length > 0 && (ot += (ot ? "\n" : "") + "Thể loại: " + Vt.join(", "));
                                                                    tr = [];
                                                                    return [2, (G && tr.push({ title: "Cùng tác giả: " + E, input: G, script: "suggest.js" }), n.success({ name: m, cover: y, host: P, author: E, description: ct, detail: ot, ongoing: g0, genres: $u, suggests: tr, comments: [] }))];
                                                            }
                                                        });
                                                    });
                                                }
                                                var v, P, q, H, M, _, W, $, F, s;
                                                return __generator(this, function (_b) {
                                                    v = "https://truyenchu.net", P = "https://truyenchu.net", q = "https://www.truyenchu.net", H = { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: "https://truyenchu.net/" }, M = { headers: H }, _ = /url\(['""]?([^'""\)\s]+)['""]?\)/, W = /^\s*$|^javascript:|^#|\/wp-login|\/wp-admin|\/cart|\/checkout|\/account|\/contact|\/tag\//, $ = /\/page\/(\d+)\/?/;
                                                    F = /\/tac-gia\/([^\/]+)\/?/, s = /\/the-loai\/([^\/]+)\/?/;
                                                    return [2, typeof l == "function" ? l : void 0];
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
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, a, n, i, c, f, b, w, L, A, T, I, D, K, J, ne) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function C(s, l) { var o = s.select(l); return o.size() > 0 ? o.get(0) : null; } function Q(s) { return s.indexOf(v) === 0 ? s.substring(v.length) : s.indexOf(q) === 0 ? s.substring(q.length) : s; } function fe(s) { return s ? (s.indexOf(q + "/") === 0 && s.indexOf(v) !== 0 && (s = v + s.substring(q.length)), s.indexOf("http") === 0 ? s : v + (s.charAt(0) === "/" ? s : "/" + s)) : v; } function te(s) {
                                        return __awaiter(this, void 0, void 0, function () { var l, _b, _c; return __generator(this, function (_d) {
                                            switch (_d.label) {
                                                case 0: return [4, u(s, M)];
                                                case 1:
                                                    l = _d.sent();
                                                    _b = l;
                                                    if (!_b) return [3, 4];
                                                    _c = !l.ok && !(l.status >= 400 && l.status < 500);
                                                    if (!_c) return [3, 3];
                                                    return [4, u(s, M)];
                                                case 2:
                                                    _c = (l = _d.sent());
                                                    _d.label = 3;
                                                case 3:
                                                    _b = (_c, l);
                                                    _d.label = 4;
                                                case 4: return [2, _b];
                                            }
                                        }); });
                                    } function X(s) { var l = C(s, "img[data-src], img[data-lazy], img[src]"); if (l) {
                                        var o = l.attr("data-src") || l.attr("data-lazy") || l.attr("src") || "";
                                        if (o && o.indexOf("data:") !== 0)
                                            return o;
                                    } var h = C(s, "[data-bg], [style*='background-image']"); if (h) {
                                        var d = h.attr("data-bg") || "";
                                        if (!d) {
                                            var p = _.exec(h.attr("style") || "");
                                            p && (d = p[1]);
                                        }
                                        if (d)
                                            return d;
                                    } return ""; } function ie(s) { var l = [], o = {}, h = s.select(".page-item-detail"); h.size() === 0 && (h = s.select(".manga__item, .c-image-hover, .row.row-eq-height .col-6")); for (var d = 0; d < h.size(); d++) {
                                        var p = h.get(d), g = C(p, ".post-title a[href], h3.h5 a[href], h3 a[href], h2 a[href]");
                                        if (g) {
                                            var m = g.attr("href") || "";
                                            if (!(!m || W.test(m)) && !(m.indexOf("/the-loai/") !== -1 || m.indexOf("/tac-gia/") !== -1)) {
                                                var y = Q(m);
                                                if (!o[y]) {
                                                    o[y] = !0;
                                                    var S = g.text().trim();
                                                    if (S) {
                                                        var E = X(p);
                                                        E && E.indexOf("http") !== 0 && (E = v + E), l.push({ name: S, link: y, host: P, cover: E, description: "" });
                                                    }
                                                }
                                            }
                                        }
                                    } return l; } function se(s, l) { var o = l + 1, h = s.select("a[href*='/page/" + o + "/']"); if (h.size() > 0)
                                        return String(o); var d = C(s, ".nav-previous a, a[rel='prev']"); if (!d)
                                        for (var p = s.select("a[href*='/page/']"), g = 0; g < p.size(); g++) {
                                            var m = p.get(g).text().trim();
                                            if (m === "Cũ hơn" || m.indexOf("Older") === 0) {
                                                d = p.get(g);
                                                break;
                                            }
                                        } if (d) {
                                        var y = d.attr("href") || "", S = $.exec(y);
                                        if (S)
                                            return S[1];
                                        if (y)
                                            return String(o);
                                    } return null; } function F(s, l) {
                                        return __awaiter(this, void 0, void 0, function () { var o, h, d, p, g, m, y; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    o = l ? parseInt(l) : 1, h = encodeURIComponent(s), d = o <= 1 ? v + "/?s=" + h + "&post_type=wp-manga" : v + "/page/" + o + "/?s=" + h + "&post_type=wp-manga";
                                                    return [4, te(d)];
                                                case 1:
                                                    p = _b.sent();
                                                    if (!p || !p.ok)
                                                        return [2, n.success([], null)];
                                                    g = p.html();
                                                    if (!g)
                                                        return [2, n.success([], null)];
                                                    m = ie(g);
                                                    if (!m || m.length === 0)
                                                        return [2, n.success([], null)];
                                                    y = se(g, o);
                                                    return [2, n.success(m, y)];
                                            }
                                        }); });
                                    } var v, P, q, H, M, _, W, $; return __generator(this, function (_b) {
                                        v = "https://truyenchu.net", P = "https://truyenchu.net", q = "https://www.truyenchu.net", H = { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: "https://truyenchu.net/" }, M = { headers: H }, _ = /url\(['""]?([^'""\)\s]+)['""]?\)/, W = /^\s*$|^javascript:|^#|\/wp-login|\/wp-admin|\/cart|\/checkout|\/account|\/contact|\/tag\//, $ = /\/page\/(\d+)\/?/;
                                        return [2, typeof F == "function" ? F : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, toc: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, a, n, i, c, f, b, w, L, A, T, I, D, K, J, ne) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function C(o, h) { var d = o.select(h); return d.size() > 0 ? d.get(0) : null; } function Q(o) { return o.indexOf(v) === 0 ? o.substring(v.length) : o.indexOf(q) === 0 ? o.substring(q.length) : o; } function fe(o) { return o ? (o.indexOf(q + "/") === 0 && o.indexOf(v) !== 0 && (o = v + o.substring(q.length)), o.indexOf("http") === 0 ? o : v + (o.charAt(0) === "/" ? o : "/" + o)) : v; } function te(o) {
                                        return __awaiter(this, void 0, void 0, function () { var h, _b, _c; return __generator(this, function (_d) {
                                            switch (_d.label) {
                                                case 0: return [4, u(o, M)];
                                                case 1:
                                                    h = _d.sent();
                                                    _b = h;
                                                    if (!_b) return [3, 4];
                                                    _c = !h.ok && !(h.status >= 400 && h.status < 500);
                                                    if (!_c) return [3, 3];
                                                    return [4, u(o, M)];
                                                case 2:
                                                    _c = (h = _d.sent());
                                                    _d.label = 3;
                                                case 3:
                                                    _b = (_c, h);
                                                    _d.label = 4;
                                                case 4: return [2, _b];
                                            }
                                        }); });
                                    } function X(o) { var h = C(o, "img[data-src], img[data-lazy], img[src]"); if (h) {
                                        var d = h.attr("data-src") || h.attr("data-lazy") || h.attr("src") || "";
                                        if (d && d.indexOf("data:") !== 0)
                                            return d;
                                    } var p = C(o, "[data-bg], [style*='background-image']"); if (p) {
                                        var g = p.attr("data-bg") || "";
                                        if (!g) {
                                            var m = _.exec(p.attr("style") || "");
                                            m && (g = m[1]);
                                        }
                                        if (g)
                                            return g;
                                    } return ""; } function ie(o) { var h = [], d = {}, p = o.select(".page-item-detail"); p.size() === 0 && (p = o.select(".manga__item, .c-image-hover, .row.row-eq-height .col-6")); for (var g = 0; g < p.size(); g++) {
                                        var m = p.get(g), y = C(m, ".post-title a[href], h3.h5 a[href], h3 a[href], h2 a[href]");
                                        if (y) {
                                            var S = y.attr("href") || "";
                                            if (!(!S || W.test(S)) && !(S.indexOf("/the-loai/") !== -1 || S.indexOf("/tac-gia/") !== -1)) {
                                                var E = Q(S);
                                                if (!d[E]) {
                                                    d[E] = !0;
                                                    var G = y.text().trim();
                                                    if (G) {
                                                        var ee = X(m);
                                                        ee && ee.indexOf("http") !== 0 && (ee = v + ee), h.push({ name: G, link: E, host: P, cover: ee, description: "" });
                                                    }
                                                }
                                            }
                                        }
                                    } return h; } function se(o, h) { var d = h + 1, p = o.select("a[href*='/page/" + d + "/']"); if (p.size() > 0)
                                        return String(d); var g = C(o, ".nav-previous a, a[rel='prev']"); if (!g)
                                        for (var m = o.select("a[href*='/page/']"), y = 0; y < m.size(); y++) {
                                            var S = m.get(y).text().trim();
                                            if (S === "Cũ hơn" || S.indexOf("Older") === 0) {
                                                g = m.get(y);
                                                break;
                                            }
                                        } if (g) {
                                        var E = g.attr("href") || "", G = $.exec(E);
                                        if (G)
                                            return G[1];
                                        if (E)
                                            return String(d);
                                    } return null; } function s(o, h, d) { for (var p = o.select(".wp-manga-chapter a[href], li.wp-manga-chapter a[href]"), g = 0; g < p.size(); g++) {
                                        var m = p.get(g), y = m.attr("href") || "";
                                        if (!(!y || !F.test(y)) && (y.indexOf("http") !== 0 && (y = v + y), !h[y])) {
                                            h[y] = !0;
                                            var S = m.text().trim();
                                            S && d.push({ name: S, url: y, host: P });
                                        }
                                    } } function l(o) {
                                        return __awaiter(this, void 0, void 0, function () { var h, d, p, g, m, y, S, E; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    h = fe(o), d = h.replace(/\/?$/, "/") + "ajax/chapters/";
                                                    return [4, u(d, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", Referer: h, "User-Agent": H["User-Agent"] } })];
                                                case 1:
                                                    p = _b.sent();
                                                    if (!p || !p.ok)
                                                        return [2, n.error("Không tải được danh sách chương")];
                                                    g = p.html();
                                                    if (!g)
                                                        return [2, n.error("Không đọc được danh sách chương")];
                                                    m = [], y = {};
                                                    if (s(g, y, m), m.length === 0)
                                                        return [2, n.error("Không tìm thấy danh sách chương")];
                                                    for (S = [], E = m.length - 1; E >= 0; E--)
                                                        S.push(m[E]);
                                                    return [2, n.success(S)];
                                            }
                                        }); });
                                    } var v, P, q, H, M, _, W, $, F; return __generator(this, function (_b) {
                                        v = "https://truyenchu.net", P = "https://truyenchu.net", q = "https://www.truyenchu.net", H = { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: "https://truyenchu.net/" }, M = { headers: H }, _ = /url\(['""]?([^'""\)\s]+)['""]?\)/, W = /^\s*$|^javascript:|^#|\/wp-login|\/wp-admin|\/cart|\/checkout|\/account|\/contact|\/tag\//, $ = /\/page\/(\d+)\/?/;
                                        F = /\/truyen\/[^\/]+\/chuong/;
                                        return [2, typeof l == "function" ? l : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, chap: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, a, n, i, c, f, b, w, L, A, T, I, D, K, J, ne) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function C(s, l) { var o = s.select(l); return o.size() > 0 ? o.get(0) : null; } function Q(s) { return s.indexOf(v) === 0 ? s.substring(v.length) : s.indexOf(q) === 0 ? s.substring(q.length) : s; } function fe(s) { return s ? (s.indexOf(q + "/") === 0 && s.indexOf(v) !== 0 && (s = v + s.substring(q.length)), s.indexOf("http") === 0 ? s : v + (s.charAt(0) === "/" ? s : "/" + s)) : v; } function te(s) {
                                        return __awaiter(this, void 0, void 0, function () { var l, _b, _c; return __generator(this, function (_d) {
                                            switch (_d.label) {
                                                case 0: return [4, u(s, M)];
                                                case 1:
                                                    l = _d.sent();
                                                    _b = l;
                                                    if (!_b) return [3, 4];
                                                    _c = !l.ok && !(l.status >= 400 && l.status < 500);
                                                    if (!_c) return [3, 3];
                                                    return [4, u(s, M)];
                                                case 2:
                                                    _c = (l = _d.sent());
                                                    _d.label = 3;
                                                case 3:
                                                    _b = (_c, l);
                                                    _d.label = 4;
                                                case 4: return [2, _b];
                                            }
                                        }); });
                                    } function X(s) { var l = C(s, "img[data-src], img[data-lazy], img[src]"); if (l) {
                                        var o = l.attr("data-src") || l.attr("data-lazy") || l.attr("src") || "";
                                        if (o && o.indexOf("data:") !== 0)
                                            return o;
                                    } var h = C(s, "[data-bg], [style*='background-image']"); if (h) {
                                        var d = h.attr("data-bg") || "";
                                        if (!d) {
                                            var p = _.exec(h.attr("style") || "");
                                            p && (d = p[1]);
                                        }
                                        if (d)
                                            return d;
                                    } return ""; } function ie(s) { var l = [], o = {}, h = s.select(".page-item-detail"); h.size() === 0 && (h = s.select(".manga__item, .c-image-hover, .row.row-eq-height .col-6")); for (var d = 0; d < h.size(); d++) {
                                        var p = h.get(d), g = C(p, ".post-title a[href], h3.h5 a[href], h3 a[href], h2 a[href]");
                                        if (g) {
                                            var m = g.attr("href") || "";
                                            if (!(!m || W.test(m)) && !(m.indexOf("/the-loai/") !== -1 || m.indexOf("/tac-gia/") !== -1)) {
                                                var y = Q(m);
                                                if (!o[y]) {
                                                    o[y] = !0;
                                                    var S = g.text().trim();
                                                    if (S) {
                                                        var E = X(p);
                                                        E && E.indexOf("http") !== 0 && (E = v + E), l.push({ name: S, link: y, host: P, cover: E, description: "" });
                                                    }
                                                }
                                            }
                                        }
                                    } return l; } function se(s, l) { var o = l + 1, h = s.select("a[href*='/page/" + o + "/']"); if (h.size() > 0)
                                        return String(o); var d = C(s, ".nav-previous a, a[rel='prev']"); if (!d)
                                        for (var p = s.select("a[href*='/page/']"), g = 0; g < p.size(); g++) {
                                            var m = p.get(g).text().trim();
                                            if (m === "Cũ hơn" || m.indexOf("Older") === 0) {
                                                d = p.get(g);
                                                break;
                                            }
                                        } if (d) {
                                        var y = d.attr("href") || "", S = $.exec(y);
                                        if (S)
                                            return S[1];
                                        if (y)
                                            return String(o);
                                    } return null; } function F(s) {
                                        return __awaiter(this, void 0, void 0, function () { var l, o, h, d, p; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    l = fe(s);
                                                    return [4, te(l)];
                                                case 1:
                                                    o = _b.sent();
                                                    if (!o || !o.ok)
                                                        return [2, n.error("Không tải được chương")];
                                                    h = o.html();
                                                    if (!h)
                                                        return [2, n.error("Không đọc được nội dung chương")];
                                                    d = C(h, ".reading-content .text-left, .reading-content, .entry-content-single, .text-left");
                                                    if (!d)
                                                        return [2, n.error("Không tìm thấy nội dung chương")];
                                                    d.select("script, style, ins, noscript, iframe, button, .adsense, .adsbygoogle, .ad, [class*='ads']").remove(), d.select("a").remove();
                                                    p = d.html();
                                                    return [2, !p || p.trim().length === 0 ? n.error("Nội dung chương trống") : n.success(p)];
                                            }
                                        }); });
                                    } var v, P, q, H, M, _, W, $; return __generator(this, function (_b) {
                                        v = "https://truyenchu.net", P = "https://truyenchu.net", q = "https://www.truyenchu.net", H = { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: "https://truyenchu.net/" }, M = { headers: H }, _ = /url\(['""]?([^'""\)\s]+)['""]?\)/, W = /^\s*$|^javascript:|^#|\/wp-login|\/wp-admin|\/cart|\/checkout|\/account|\/contact|\/tag\//, $ = /\/page\/(\d+)\/?/;
                                        return [2, typeof F == "function" ? F : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, suggest: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, a, n, i, c, f, b, w, L, A, T, I, D, K, J, ne) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function C(l, o) { var h = l.select(o); return h.size() > 0 ? h.get(0) : null; } function Q(l) { return l.indexOf(v) === 0 ? l.substring(v.length) : l.indexOf(q) === 0 ? l.substring(q.length) : l; } function fe(l) { return l ? (l.indexOf(q + "/") === 0 && l.indexOf(v) !== 0 && (l = v + l.substring(q.length)), l.indexOf("http") === 0 ? l : v + (l.charAt(0) === "/" ? l : "/" + l)) : v; } function te(l) {
                                        return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                            switch (_d.label) {
                                                case 0: return [4, u(l, M)];
                                                case 1:
                                                    o = _d.sent();
                                                    _b = o;
                                                    if (!_b) return [3, 4];
                                                    _c = !o.ok && !(o.status >= 400 && o.status < 500);
                                                    if (!_c) return [3, 3];
                                                    return [4, u(l, M)];
                                                case 2:
                                                    _c = (o = _d.sent());
                                                    _d.label = 3;
                                                case 3:
                                                    _b = (_c, o);
                                                    _d.label = 4;
                                                case 4: return [2, _b];
                                            }
                                        }); });
                                    } function X(l) { var o = C(l, "img[data-src], img[data-lazy], img[src]"); if (o) {
                                        var h = o.attr("data-src") || o.attr("data-lazy") || o.attr("src") || "";
                                        if (h && h.indexOf("data:") !== 0)
                                            return h;
                                    } var d = C(l, "[data-bg], [style*='background-image']"); if (d) {
                                        var p = d.attr("data-bg") || "";
                                        if (!p) {
                                            var g = _.exec(d.attr("style") || "");
                                            g && (p = g[1]);
                                        }
                                        if (p)
                                            return p;
                                    } return ""; } function ie(l) { var o = [], h = {}, d = l.select(".page-item-detail"); d.size() === 0 && (d = l.select(".manga__item, .c-image-hover, .row.row-eq-height .col-6")); for (var p = 0; p < d.size(); p++) {
                                        var g = d.get(p), m = C(g, ".post-title a[href], h3.h5 a[href], h3 a[href], h2 a[href]");
                                        if (m) {
                                            var y = m.attr("href") || "";
                                            if (!(!y || W.test(y)) && !(y.indexOf("/the-loai/") !== -1 || y.indexOf("/tac-gia/") !== -1)) {
                                                var S = Q(y);
                                                if (!h[S]) {
                                                    h[S] = !0;
                                                    var E = m.text().trim();
                                                    if (E) {
                                                        var G = X(g);
                                                        G && G.indexOf("http") !== 0 && (G = v + G), o.push({ name: E, link: S, host: P, cover: G, description: "" });
                                                    }
                                                }
                                            }
                                        }
                                    } return o; } function se(l, o) { var h = o + 1, d = l.select("a[href*='/page/" + h + "/']"); if (d.size() > 0)
                                        return String(h); var p = C(l, ".nav-previous a, a[rel='prev']"); if (!p)
                                        for (var g = l.select("a[href*='/page/']"), m = 0; m < g.size(); m++) {
                                            var y = g.get(m).text().trim();
                                            if (y === "Cũ hơn" || y.indexOf("Older") === 0) {
                                                p = g.get(m);
                                                break;
                                            }
                                        } if (p) {
                                        var S = p.attr("href") || "", E = $.exec(S);
                                        if (E)
                                            return E[1];
                                        if (S)
                                            return String(h);
                                    } return null; } function s(l, o) {
                                        return __awaiter(this, void 0, void 0, function () { var h, d, p, g, m, y, S; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    h = o ? parseInt(o) : 1;
                                                    if (l.indexOf("author:") !== 0)
                                                        return [2, n.success([], null)];
                                                    d = l.substring(7), p = h <= 1 ? v + "/tac-gia/" + d + "/" : v + "/tac-gia/" + d + "/page/" + h + "/";
                                                    return [4, te(p)];
                                                case 1:
                                                    g = _b.sent();
                                                    if (!g || !g.ok)
                                                        return [2, n.success([], null)];
                                                    m = g.html();
                                                    if (!m)
                                                        return [2, n.success([], null)];
                                                    y = ie(m);
                                                    if (!y || y.length === 0)
                                                        return [2, n.success([], null)];
                                                    S = se(m, h);
                                                    return [2, n.success(y, S)];
                                            }
                                        }); });
                                    } var v, P, q, H, M, _, W, $, F; return __generator(this, function (_b) {
                                        v = "https://truyenchu.net", P = "https://truyenchu.net", q = "https://www.truyenchu.net", H = { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: "https://truyenchu.net/" }, M = { headers: H }, _ = /url\(['""]?([^'""\)\s]+)['""]?\)/, W = /^\s*$|^javascript:|^#|\/wp-login|\/wp-admin|\/cart|\/checkout|\/account|\/contact|\/tag\//, $ = /\/page\/(\d+)\/?/;
                                        F = /\/tac-gia\/([^\/]+)\/?/;
                                        return [2, typeof s == "function" ? s : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    } };
function h0(e) { return new Ft({ meta: ye, scripts: d0, host: e }); }
var $a = require("@libs/fetch").fetchApi, it = null;
try {
    it = require("@libs/storage");
}
catch (e) {
    it = null;
}
var Ku = {}, Gt = it && it.storage ? it.storage : { get: function (e) { return Ku[e]; }, set: function (e, t) { Ku[e] = t; }, delete: function (e) { delete Ku[e]; } }, _u = (function () {
    function class_2() {
        var _this = this;
        this.id = ye.lnId, this.name = ye.name, this.icon = ye.lnIcon, this.site = ye.source, this.version = ye.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = h0({ name: "LNReader", request: function (t) { return __awaiter(_this, void 0, void 0, function () {
                var u, r, a;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            u = { method: t.method, headers: t.headers };
                            t.body != null && t.method !== "GET" && (u.body = t.body);
                            return [4, $a(t.url, u)];
                        case 1:
                            r = _c.sent(), a = {};
                            try {
                                r.headers.forEach(function (n, i) { a[i] = n; });
                            }
                            catch (n) { }
                            _b = { status: r.status, url: r.url || t.url, headers: a };
                            return [4, r.text()];
                        case 2: return [2, (_b.text = _c.sent(), _b)];
                    }
                });
            }); }, storageGet: function (t) { var u = Gt.get("vb_" + t); return u == null ? null : String(u); }, storageSet: function (t, u) { u == null ? Gt.delete && Gt.delete("vb_" + t) : Gt.set("vb_" + t, String(u)); }, config: function (t) { return null; }, log: function (t) { return console.log(t); } });
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
                case 4: return [2, (_b).items.map(function (a) { return ({ name: a.name, path: a.link, cover: a.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (t, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.search(t, u)];
                case 1: return [2, (_b.sent()).items.map(function (a) { return ({ name: a.name, path: a.link, cover: a.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u, r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.detail(t)];
                case 1:
                    u = _b.sent();
                    return [4, this.engine.chapters(t)];
                case 2:
                    r = _b.sent();
                    return [2, { path: t, name: u.name || "Untitled", cover: u.cover, summary: u.description, author: u.author, status: u.ongoing ? "Ongoing" : "Completed", genres: u.genres.join(","), chapters: r.map(function (a, n) { return ({ name: a.name, path: a.url, chapterNumber: n + 1 }); }) }];
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
    class_2.prototype.resolveUrl = function (t, u) { return /^https?:/i.test(t) ? t : ye.source.replace(/\/+$/, "") + "/" + String(t).replace(/^\/+/, ""); };
    return class_2;
}()), Qa = new _u;

if (typeof exports === "object" && exports && module.exports !== exports && module.exports && module.exports.default) exports.default = module.exports.default;
