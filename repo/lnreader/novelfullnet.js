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
var Pr = Object.create;
var Pe = Object.defineProperty, Mr = Object.defineProperties, Br = Object.getOwnPropertyDescriptor, Fr = Object.getOwnPropertyDescriptors, Vr = Object.getOwnPropertyNames, ku = Object.getOwnPropertySymbols, Hr = Object.getPrototypeOf, Nu = Object.prototype.hasOwnProperty, Rr = Object.prototype.propertyIsEnumerable;
var qu = function (e, t, u) { return t in e ? Pe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[t] = u; }, ue = function (e, t) {
    var e_2, _b;
    for (var u in t || (t = {}))
        Nu.call(t, u) && qu(e, u, t[u]);
    if (ku)
        try {
            for (var _c = __values(ku(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var u = _d.value;
                Rr.call(t, u) && qu(e, u, t[u]);
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
}, ge = function (e, t) { return Mr(e, Fr(t)); };
var jr = function (e, t) { return function () { return (t || e((t = { exports: {} }).exports, t), t.exports); }; }, Nt = function (e, t) { for (var u in t)
    Pe(e, u, { get: t[u], enumerable: !0 }); }, Cu = function (e, t, u, a) {
    var e_3, _b;
    if (t && typeof t == "object" || typeof t == "function") {
        var _loop_1 = function (n) {
            !Nu.call(e, n) && n !== u && Pe(e, n, { get: function () { return t[n]; }, enumerable: !(a = Br(t, n)) || a.enumerable });
        };
        try {
            for (var _c = __values(Vr(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
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
var me = function (e, t, u) { return (u = e != null ? Pr(Hr(e)) : {}, Cu(t || !e || !e.__esModule ? Pe(u, "default", { value: e, enumerable: !0 }) : u, e)); }, zr = function (e) { return Cu(Pe({}, "__esModule", { value: !0 }), e); };
var pe = jr(function (Gn, ar) { ar.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var pi = {};
Nt(pi, { default: function () { return bi; } });
module.exports = zr(pi);
var Ke = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (e) { return e.charCodeAt(0); }));
var Ze = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (e) { return e.charCodeAt(0); }));
var Ct, Gr = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Ae = (Ct = String.fromCodePoint) !== null && Ct !== void 0 ? Ct : function (e) { var t = ""; return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t; };
function Lt(e) { var t; return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = Gr.get(e)) !== null && t !== void 0 ? t : e; }
var G;
(function (e) { e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z"; })(G || (G = {}));
var $r = 32, le;
(function (e) { e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE"; })(le || (le = {}));
function Dt(e) { return e >= G.ZERO && e <= G.NINE; }
function Wr(e) { return e >= G.UPPER_A && e <= G.UPPER_F || e >= G.LOWER_A && e <= G.LOWER_F; }
function Xr(e) { return e >= G.UPPER_A && e <= G.UPPER_Z || e >= G.LOWER_A && e <= G.LOWER_Z || Dt(e); }
function Jr(e) { return e === G.EQUALS || Xr(e); }
var z;
(function (e) { e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity"; })(z || (z = {}));
var Z;
(function (e) { e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute"; })(Z || (Z = {}));
var Ee = (function () {
    function Ee(t, u, a) {
        this.decodeTree = t, this.emitCodePoint = u, this.errors = a, this.state = z.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = Z.Strict;
    }
    Ee.prototype.startEntity = function (t) { this.decodeMode = t, this.state = z.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    Ee.prototype.write = function (t, u) { switch (this.state) {
        case z.EntityStart: return t.charCodeAt(u) === G.NUM ? (this.state = z.NumericStart, this.consumed += 1, this.stateNumericStart(t, u + 1)) : (this.state = z.NamedEntity, this.stateNamedEntity(t, u));
        case z.NumericStart: return this.stateNumericStart(t, u);
        case z.NumericDecimal: return this.stateNumericDecimal(t, u);
        case z.NumericHex: return this.stateNumericHex(t, u);
        case z.NamedEntity: return this.stateNamedEntity(t, u);
    } };
    Ee.prototype.stateNumericStart = function (t, u) { return u >= t.length ? -1 : (t.charCodeAt(u) | $r) === G.LOWER_X ? (this.state = z.NumericHex, this.consumed += 1, this.stateNumericHex(t, u + 1)) : (this.state = z.NumericDecimal, this.stateNumericDecimal(t, u)); };
    Ee.prototype.addToNumericResult = function (t, u, a, n) { if (u !== a) {
        var s = a - u;
        this.result = this.result * Math.pow(n, s) + parseInt(t.substr(u, s), n), this.consumed += s;
    } };
    Ee.prototype.stateNumericHex = function (t, u) { var a = u; for (; u < t.length;) {
        var n = t.charCodeAt(u);
        if (Dt(n) || Wr(n))
            u += 1;
        else
            return this.addToNumericResult(t, a, u, 16), this.emitNumericEntity(n, 3);
    } return this.addToNumericResult(t, a, u, 16), -1; };
    Ee.prototype.stateNumericDecimal = function (t, u) { var a = u; for (; u < t.length;) {
        var n = t.charCodeAt(u);
        if (Dt(n))
            u += 1;
        else
            return this.addToNumericResult(t, a, u, 10), this.emitNumericEntity(n, 2);
    } return this.addToNumericResult(t, a, u, 10), -1; };
    Ee.prototype.emitNumericEntity = function (t, u) { var a; if (this.consumed <= u)
        return (a = this.errors) === null || a === void 0 || a.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (t === G.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === Z.Strict)
        return 0; return this.emitCodePoint(Lt(this.result), this.consumed), this.errors && (t !== G.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    Ee.prototype.stateNamedEntity = function (t, u) { var a = this.decodeTree, n = a[this.treeIndex], s = (n & le.VALUE_LENGTH) >> 14; for (; u < t.length; u++, this.excess++) {
        var h = t.charCodeAt(u);
        if (this.treeIndex = Qr(a, n, this.treeIndex + Math.max(1, s), h), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === Z.Attribute && (s === 0 || Jr(h)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (n = a[this.treeIndex], s = (n & le.VALUE_LENGTH) >> 14, s !== 0) {
            if (h === G.SEMI)
                return this.emitNamedEntityData(this.treeIndex, s, this.consumed + this.excess);
            this.decodeMode !== Z.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    Ee.prototype.emitNotTerminatedNamedEntity = function () { var t; var _b = this, u = _b.result, a = _b.decodeTree, n = (a[u] & le.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(u, n, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed; };
    Ee.prototype.emitNamedEntityData = function (t, u, a) { var n = this.decodeTree; return this.emitCodePoint(u === 1 ? n[t] & ~le.VALUE_LENGTH : n[t + 1], a), u === 3 && this.emitCodePoint(n[t + 2], a), a; };
    Ee.prototype.end = function () { var t; switch (this.state) {
        case z.NamedEntity: return this.result !== 0 && (this.decodeMode !== Z.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case z.NumericDecimal: return this.emitNumericEntity(0, 2);
        case z.NumericHex: return this.emitNumericEntity(0, 3);
        case z.NumericStart: return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case z.EntityStart: return 0;
    } };
    return Ee;
}());
function Lu(e) { var t = "", u = new Ee(e, function (a) { return t += Ae(a); }); return function (n, s) { var h = 0, b = 0; for (; (b = n.indexOf("&", b)) >= 0;) {
    t += n.slice(h, b), u.startEntity(s);
    var v = u.write(n, b + 1);
    if (v < 0) {
        h = b + u.end();
        break;
    }
    h = b + v, b = v === 0 ? h + 1 : h;
} var g = t + n.slice(h); return t = "", g; }; }
function Qr(e, t, u, a) { var n = (t & le.BRANCH_LENGTH) >> 7, s = t & le.JUMP_TABLE; if (n === 0)
    return s !== 0 && a === s ? u : -1; if (s) {
    var g = a - s;
    return g < 0 || g >= n ? -1 : e[u + g] - 1;
} var h = u, b = h + n - 1; for (; h <= b;) {
    var g = h + b >>> 1, v = e[g];
    if (v < a)
        h = g + 1;
    else if (v > a)
        b = g - 1;
    else
        return e[g + n];
} return -1; }
var Ei = Lu(Ke), Ti = Lu(Ze);
var L;
(function (e) { e[e.Tab = 9] = "Tab", e[e.NewLine = 10] = "NewLine", e[e.FormFeed = 12] = "FormFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.Number = 35] = "Number", e[e.Amp = 38] = "Amp", e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Dash = 45] = "Dash", e[e.Slash = 47] = "Slash", e[e.Zero = 48] = "Zero", e[e.Nine = 57] = "Nine", e[e.Semi = 59] = "Semi", e[e.Lt = 60] = "Lt", e[e.Eq = 61] = "Eq", e[e.Gt = 62] = "Gt", e[e.Questionmark = 63] = "Questionmark", e[e.UpperA = 65] = "UpperA", e[e.LowerA = 97] = "LowerA", e[e.UpperF = 70] = "UpperF", e[e.LowerF = 102] = "LowerF", e[e.UpperZ = 90] = "UpperZ", e[e.LowerZ = 122] = "LowerZ", e[e.LowerX = 120] = "LowerX", e[e.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(L || (L = {}));
var S;
(function (e) { e[e.Text = 1] = "Text", e[e.BeforeTagName = 2] = "BeforeTagName", e[e.InTagName = 3] = "InTagName", e[e.InSelfClosingTag = 4] = "InSelfClosingTag", e[e.BeforeClosingTagName = 5] = "BeforeClosingTagName", e[e.InClosingTagName = 6] = "InClosingTagName", e[e.AfterClosingTagName = 7] = "AfterClosingTagName", e[e.BeforeAttributeName = 8] = "BeforeAttributeName", e[e.InAttributeName = 9] = "InAttributeName", e[e.AfterAttributeName = 10] = "AfterAttributeName", e[e.BeforeAttributeValue = 11] = "BeforeAttributeValue", e[e.InAttributeValueDq = 12] = "InAttributeValueDq", e[e.InAttributeValueSq = 13] = "InAttributeValueSq", e[e.InAttributeValueNq = 14] = "InAttributeValueNq", e[e.BeforeDeclaration = 15] = "BeforeDeclaration", e[e.InDeclaration = 16] = "InDeclaration", e[e.InProcessingInstruction = 17] = "InProcessingInstruction", e[e.BeforeComment = 18] = "BeforeComment", e[e.CDATASequence = 19] = "CDATASequence", e[e.InSpecialComment = 20] = "InSpecialComment", e[e.InCommentLike = 21] = "InCommentLike", e[e.BeforeSpecialS = 22] = "BeforeSpecialS", e[e.BeforeSpecialT = 23] = "BeforeSpecialT", e[e.SpecialStartSequence = 24] = "SpecialStartSequence", e[e.InSpecialTag = 25] = "InSpecialTag", e[e.InEntity = 26] = "InEntity"; })(S || (S = {}));
function se(e) { return e === L.Space || e === L.NewLine || e === L.Tab || e === L.FormFeed || e === L.CarriageReturn; }
function Ye(e) { return e === L.Slash || e === L.Gt || se(e); }
function Kr(e) { return e >= L.LowerA && e <= L.LowerZ || e >= L.UpperA && e <= L.UpperZ; }
var Y;
(function (e) { e[e.NoValue = 0] = "NoValue", e[e.Unquoted = 1] = "Unquoted", e[e.Single = 2] = "Single", e[e.Double = 3] = "Double"; })(Y || (Y = {}));
var $ = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Te = (function () {
    function Te(_b, a) {
        var _c = _b.xmlMode, t = _c === void 0 ? !1 : _c, _d = _b.decodeEntities, u = _d === void 0 ? !0 : _d;
        var _this = this;
        this.cbs = a, this.state = S.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = S.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = t, this.decodeEntities = u, this.entityDecoder = new Ee(t ? Ze : Ke, function (n, s) { return _this.emitCodePoint(n, s); });
    }
    Te.prototype.reset = function () { this.state = S.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = S.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Te.prototype.write = function (t) { this.offset += this.buffer.length, this.buffer = t, this.parse(); };
    Te.prototype.end = function () { this.running && this.finish(); };
    Te.prototype.pause = function () { this.running = !1; };
    Te.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Te.prototype.stateText = function (t) { t === L.Lt || !this.decodeEntities && this.fastForwardTo(L.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = S.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && t === L.Amp && this.startEntity(); };
    Te.prototype.stateSpecialStartSequence = function (t) { var u = this.sequenceIndex === this.currentSequence.length; if (!(u ? Ye(t) : (t | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!u) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = S.InTagName, this.stateInTagName(t); };
    Te.prototype.stateInSpecialTag = function (t) { if (this.sequenceIndex === this.currentSequence.length) {
        if (t === L.Gt || se(t)) {
            var u = this.index - this.currentSequence.length;
            if (this.sectionStart < u) {
                var a = this.index;
                this.index = u, this.cbs.ontext(this.sectionStart, u), this.index = a;
            }
            this.isSpecial = !1, this.sectionStart = u + 2, this.stateInClosingTagName(t);
            return;
        }
        this.sequenceIndex = 0;
    } (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === $.TitleEnd ? this.decodeEntities && t === L.Amp && this.startEntity() : this.fastForwardTo(L.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === L.Lt); };
    Te.prototype.stateCDATASequence = function (t) { t === $.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === $.Cdata.length && (this.state = S.InCommentLike, this.currentSequence = $.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = S.InDeclaration, this.stateInDeclaration(t)); };
    Te.prototype.fastForwardTo = function (t) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === t)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Te.prototype.stateInCommentLike = function (t) { t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === $.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = S.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Te.prototype.isTagStartChar = function (t) { return this.xmlMode ? !Ye(t) : Kr(t); };
    Te.prototype.startSpecial = function (t, u) { this.isSpecial = !0, this.currentSequence = t, this.sequenceIndex = u, this.state = S.SpecialStartSequence; };
    Te.prototype.stateBeforeTagName = function (t) { if (t === L.ExclamationMark)
        this.state = S.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (t === L.Questionmark)
        this.state = S.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(t)) {
        var u = t | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = S.InTagName : u === $.ScriptEnd[2] ? this.state = S.BeforeSpecialS : u === $.TitleEnd[2] ? this.state = S.BeforeSpecialT : this.state = S.InTagName;
    }
    else
        t === L.Slash ? this.state = S.BeforeClosingTagName : (this.state = S.Text, this.stateText(t)); };
    Te.prototype.stateInTagName = function (t) { Ye(t) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = S.BeforeAttributeName, this.stateBeforeAttributeName(t)); };
    Te.prototype.stateBeforeClosingTagName = function (t) { se(t) || (t === L.Gt ? this.state = S.Text : (this.state = this.isTagStartChar(t) ? S.InClosingTagName : S.InSpecialComment, this.sectionStart = this.index)); };
    Te.prototype.stateInClosingTagName = function (t) { (t === L.Gt || se(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = S.AfterClosingTagName, this.stateAfterClosingTagName(t)); };
    Te.prototype.stateAfterClosingTagName = function (t) { (t === L.Gt || this.fastForwardTo(L.Gt)) && (this.state = S.Text, this.sectionStart = this.index + 1); };
    Te.prototype.stateBeforeAttributeName = function (t) { t === L.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = S.InSpecialTag, this.sequenceIndex = 0) : this.state = S.Text, this.sectionStart = this.index + 1) : t === L.Slash ? this.state = S.InSelfClosingTag : se(t) || (this.state = S.InAttributeName, this.sectionStart = this.index); };
    Te.prototype.stateInSelfClosingTag = function (t) { t === L.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = S.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : se(t) || (this.state = S.BeforeAttributeName, this.stateBeforeAttributeName(t)); };
    Te.prototype.stateInAttributeName = function (t) { (t === L.Eq || Ye(t)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = S.AfterAttributeName, this.stateAfterAttributeName(t)); };
    Te.prototype.stateAfterAttributeName = function (t) { t === L.Eq ? this.state = S.BeforeAttributeValue : t === L.Slash || t === L.Gt ? (this.cbs.onattribend(Y.NoValue, this.sectionStart), this.sectionStart = -1, this.state = S.BeforeAttributeName, this.stateBeforeAttributeName(t)) : se(t) || (this.cbs.onattribend(Y.NoValue, this.sectionStart), this.state = S.InAttributeName, this.sectionStart = this.index); };
    Te.prototype.stateBeforeAttributeValue = function (t) { t === L.DoubleQuote ? (this.state = S.InAttributeValueDq, this.sectionStart = this.index + 1) : t === L.SingleQuote ? (this.state = S.InAttributeValueSq, this.sectionStart = this.index + 1) : se(t) || (this.sectionStart = this.index, this.state = S.InAttributeValueNq, this.stateInAttributeValueNoQuotes(t)); };
    Te.prototype.handleInAttributeValue = function (t, u) { t === u || !this.decodeEntities && this.fastForwardTo(u) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(u === L.DoubleQuote ? Y.Double : Y.Single, this.index + 1), this.state = S.BeforeAttributeName) : this.decodeEntities && t === L.Amp && this.startEntity(); };
    Te.prototype.stateInAttributeValueDoubleQuotes = function (t) { this.handleInAttributeValue(t, L.DoubleQuote); };
    Te.prototype.stateInAttributeValueSingleQuotes = function (t) { this.handleInAttributeValue(t, L.SingleQuote); };
    Te.prototype.stateInAttributeValueNoQuotes = function (t) { se(t) || t === L.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(Y.Unquoted, this.index), this.state = S.BeforeAttributeName, this.stateBeforeAttributeName(t)) : this.decodeEntities && t === L.Amp && this.startEntity(); };
    Te.prototype.stateBeforeDeclaration = function (t) { t === L.OpeningSquareBracket ? (this.state = S.CDATASequence, this.sequenceIndex = 0) : this.state = t === L.Dash ? S.BeforeComment : S.InDeclaration; };
    Te.prototype.stateInDeclaration = function (t) { (t === L.Gt || this.fastForwardTo(L.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = S.Text, this.sectionStart = this.index + 1); };
    Te.prototype.stateInProcessingInstruction = function (t) { (t === L.Gt || this.fastForwardTo(L.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = S.Text, this.sectionStart = this.index + 1); };
    Te.prototype.stateBeforeComment = function (t) { t === L.Dash ? (this.state = S.InCommentLike, this.currentSequence = $.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = S.InDeclaration; };
    Te.prototype.stateInSpecialComment = function (t) { (t === L.Gt || this.fastForwardTo(L.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = S.Text, this.sectionStart = this.index + 1); };
    Te.prototype.stateBeforeSpecialS = function (t) { var u = t | 32; u === $.ScriptEnd[3] ? this.startSpecial($.ScriptEnd, 4) : u === $.StyleEnd[3] ? this.startSpecial($.StyleEnd, 4) : (this.state = S.InTagName, this.stateInTagName(t)); };
    Te.prototype.stateBeforeSpecialT = function (t) { var u = t | 32; u === $.TitleEnd[3] ? this.startSpecial($.TitleEnd, 4) : u === $.TextareaEnd[3] ? this.startSpecial($.TextareaEnd, 4) : (this.state = S.InTagName, this.stateInTagName(t)); };
    Te.prototype.startEntity = function () { this.baseState = this.state, this.state = S.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? Z.Strict : this.baseState === S.Text || this.baseState === S.InSpecialTag ? Z.Legacy : Z.Attribute); };
    Te.prototype.stateInEntity = function () { var t = this.entityDecoder.write(this.buffer, this.index - this.offset); t >= 0 ? (this.state = this.baseState, t === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Te.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === S.Text || this.state === S.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === S.InAttributeValueDq || this.state === S.InAttributeValueSq || this.state === S.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Te.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Te.prototype.parse = function () { for (; this.shouldContinue();) {
        var t = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case S.Text: {
                this.stateText(t);
                break;
            }
            case S.SpecialStartSequence: {
                this.stateSpecialStartSequence(t);
                break;
            }
            case S.InSpecialTag: {
                this.stateInSpecialTag(t);
                break;
            }
            case S.CDATASequence: {
                this.stateCDATASequence(t);
                break;
            }
            case S.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(t);
                break;
            }
            case S.InAttributeName: {
                this.stateInAttributeName(t);
                break;
            }
            case S.InCommentLike: {
                this.stateInCommentLike(t);
                break;
            }
            case S.InSpecialComment: {
                this.stateInSpecialComment(t);
                break;
            }
            case S.BeforeAttributeName: {
                this.stateBeforeAttributeName(t);
                break;
            }
            case S.InTagName: {
                this.stateInTagName(t);
                break;
            }
            case S.InClosingTagName: {
                this.stateInClosingTagName(t);
                break;
            }
            case S.BeforeTagName: {
                this.stateBeforeTagName(t);
                break;
            }
            case S.AfterAttributeName: {
                this.stateAfterAttributeName(t);
                break;
            }
            case S.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(t);
                break;
            }
            case S.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(t);
                break;
            }
            case S.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(t);
                break;
            }
            case S.AfterClosingTagName: {
                this.stateAfterClosingTagName(t);
                break;
            }
            case S.BeforeSpecialS: {
                this.stateBeforeSpecialS(t);
                break;
            }
            case S.BeforeSpecialT: {
                this.stateBeforeSpecialT(t);
                break;
            }
            case S.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(t);
                break;
            }
            case S.InSelfClosingTag: {
                this.stateInSelfClosingTag(t);
                break;
            }
            case S.InDeclaration: {
                this.stateInDeclaration(t);
                break;
            }
            case S.BeforeDeclaration: {
                this.stateBeforeDeclaration(t);
                break;
            }
            case S.BeforeComment: {
                this.stateBeforeComment(t);
                break;
            }
            case S.InProcessingInstruction: {
                this.stateInProcessingInstruction(t);
                break;
            }
            case S.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Te.prototype.finish = function () { this.state === S.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Te.prototype.handleTrailingData = function () { var t = this.buffer.length + this.offset; this.sectionStart >= t || (this.state === S.InCommentLike ? this.currentSequence === $.CdataEnd ? this.cbs.oncdata(this.sectionStart, t, 0) : this.cbs.oncomment(this.sectionStart, t, 0) : this.state === S.InTagName || this.state === S.BeforeAttributeName || this.state === S.BeforeAttributeValue || this.state === S.AfterAttributeName || this.state === S.InAttributeName || this.state === S.InAttributeValueSq || this.state === S.InAttributeValueDq || this.state === S.InAttributeValueNq || this.state === S.InClosingTagName || this.cbs.ontext(this.sectionStart, t)); };
    Te.prototype.emitCodePoint = function (t, u) { this.baseState !== S.Text && this.baseState !== S.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.onattribentity(t)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.ontextentity(t, this.sectionStart)); };
    return Te;
}());
var ke = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), P = new Set(["p"]), Du = new Set(["thead", "tbody"]), Iu = new Set(["dd", "dt"]), Ou = new Set(["rt", "rp"]), Zr = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", P], ["h1", P], ["h2", P], ["h3", P], ["h4", P], ["h5", P], ["h6", P], ["select", ke], ["input", ke], ["output", ke], ["button", ke], ["datalist", ke], ["textarea", ke], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", Iu], ["dt", Iu], ["address", P], ["article", P], ["aside", P], ["blockquote", P], ["details", P], ["div", P], ["dl", P], ["fieldset", P], ["figcaption", P], ["figure", P], ["footer", P], ["form", P], ["header", P], ["hr", P], ["main", P], ["nav", P], ["ol", P], ["pre", P], ["section", P], ["table", P], ["ul", P], ["rt", Ou], ["rp", Ou], ["tbody", Du], ["tfoot", Du]]), Yr = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), _u = new Set(["math", "svg"]), Uu = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), ea = /\s|\//, Me = (function () {
    function Me(t, u) {
        if (u === void 0) { u = {}; }
        var a, n, s, h, b, g;
        this.options = u, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = t != null ? t : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (a = u.lowerCaseTags) !== null && a !== void 0 ? a : this.htmlMode, this.lowerCaseAttributeNames = (n = u.lowerCaseAttributeNames) !== null && n !== void 0 ? n : this.htmlMode, this.recognizeSelfClosing = (s = u.recognizeSelfClosing) !== null && s !== void 0 ? s : !this.htmlMode, this.tokenizer = new ((h = u.Tokenizer) !== null && h !== void 0 ? h : Te)(this.options, this), this.foreignContext = [!this.htmlMode], (g = (b = this.cbs).onparserinit) === null || g === void 0 || g.call(b, this);
    }
    Me.prototype.ontext = function (t, u) { var a, n; var s = this.getSlice(t, u); this.endIndex = u - 1, (n = (a = this.cbs).ontext) === null || n === void 0 || n.call(a, s), this.startIndex = u; };
    Me.prototype.ontextentity = function (t, u) { var a, n; this.endIndex = u - 1, (n = (a = this.cbs).ontext) === null || n === void 0 || n.call(a, Ae(t)), this.startIndex = u; };
    Me.prototype.isVoidElement = function (t) { return this.htmlMode && Yr.has(t); };
    Me.prototype.onopentagname = function (t, u) { this.endIndex = u; var a = this.getSlice(t, u); this.lowerCaseTagNames && (a = a.toLowerCase()), this.emitOpenTag(a); };
    Me.prototype.emitOpenTag = function (t) { var u, a, n, s; this.openTagStart = this.startIndex, this.tagname = t; var h = this.htmlMode && Zr.get(t); if (h)
        for (; this.stack.length > 0 && h.has(this.stack[0]);) {
            var b = this.stack.shift();
            (a = (u = this.cbs).onclosetag) === null || a === void 0 || a.call(u, b, !0);
        } this.isVoidElement(t) || (this.stack.unshift(t), this.htmlMode && (_u.has(t) ? this.foreignContext.unshift(!0) : Uu.has(t) && this.foreignContext.unshift(!1))), (s = (n = this.cbs).onopentagname) === null || s === void 0 || s.call(n, t), this.cbs.onopentag && (this.attribs = {}); };
    Me.prototype.endOpenTag = function (t) { var u, a; this.startIndex = this.openTagStart, this.attribs && ((a = (u = this.cbs).onopentag) === null || a === void 0 || a.call(u, this.tagname, this.attribs, t), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    Me.prototype.onopentagend = function (t) { this.endIndex = t, this.endOpenTag(!1), this.startIndex = t + 1; };
    Me.prototype.onclosetag = function (t, u) { var a, n, s, h, b, g, v, A; this.endIndex = u; var D = this.getSlice(t, u); if (this.lowerCaseTagNames && (D = D.toLowerCase()), this.htmlMode && (_u.has(D) || Uu.has(D)) && this.foreignContext.shift(), this.isVoidElement(D))
        this.htmlMode && D === "br" && ((h = (s = this.cbs).onopentagname) === null || h === void 0 || h.call(s, "br"), (g = (b = this.cbs).onopentag) === null || g === void 0 || g.call(b, "br", {}, !0), (A = (v = this.cbs).onclosetag) === null || A === void 0 || A.call(v, "br", !1));
    else {
        var q = this.stack.indexOf(D);
        if (q !== -1)
            for (var N = 0; N <= q; N++) {
                var I = this.stack.shift();
                (n = (a = this.cbs).onclosetag) === null || n === void 0 || n.call(a, I, N !== q);
            }
        else
            this.htmlMode && D === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = u + 1; };
    Me.prototype.onselfclosingtag = function (t) { this.endIndex = t, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = t + 1) : this.onopentagend(t); };
    Me.prototype.closeCurrentTag = function (t) { var u, a; var n = this.tagname; this.endOpenTag(t), this.stack[0] === n && ((a = (u = this.cbs).onclosetag) === null || a === void 0 || a.call(u, n, !t), this.stack.shift()); };
    Me.prototype.onattribname = function (t, u) { this.startIndex = t; var a = this.getSlice(t, u); this.attribname = this.lowerCaseAttributeNames ? a.toLowerCase() : a; };
    Me.prototype.onattribdata = function (t, u) { this.attribvalue += this.getSlice(t, u); };
    Me.prototype.onattribentity = function (t) { this.attribvalue += Ae(t); };
    Me.prototype.onattribend = function (t, u) { var a, n; this.endIndex = u, (n = (a = this.cbs).onattribute) === null || n === void 0 || n.call(a, this.attribname, this.attribvalue, t === Y.Double ? '"' : t === Y.Single ? "'" : t === Y.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    Me.prototype.getInstructionName = function (t) { var u = t.search(ea), a = u < 0 ? t : t.substr(0, u); return this.lowerCaseTagNames && (a = a.toLowerCase()), a; };
    Me.prototype.ondeclaration = function (t, u) { this.endIndex = u; var a = this.getSlice(t, u); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(a);
        this.cbs.onprocessinginstruction("!".concat(n), "!".concat(a));
    } this.startIndex = u + 1; };
    Me.prototype.onprocessinginstruction = function (t, u) { this.endIndex = u; var a = this.getSlice(t, u); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(a);
        this.cbs.onprocessinginstruction("?".concat(n), "?".concat(a));
    } this.startIndex = u + 1; };
    Me.prototype.oncomment = function (t, u, a) { var n, s, h, b; this.endIndex = u, (s = (n = this.cbs).oncomment) === null || s === void 0 || s.call(n, this.getSlice(t, u - a)), (b = (h = this.cbs).oncommentend) === null || b === void 0 || b.call(h), this.startIndex = u + 1; };
    Me.prototype.oncdata = function (t, u, a) { var n, s, h, b, g, v, A, D, q, N; this.endIndex = u; var I = this.getSlice(t, u - a); !this.htmlMode || this.options.recognizeCDATA ? ((s = (n = this.cbs).oncdatastart) === null || s === void 0 || s.call(n), (b = (h = this.cbs).ontext) === null || b === void 0 || b.call(h, I), (v = (g = this.cbs).oncdataend) === null || v === void 0 || v.call(g)) : ((D = (A = this.cbs).oncomment) === null || D === void 0 || D.call(A, "[CDATA[".concat(I, "]]")), (N = (q = this.cbs).oncommentend) === null || N === void 0 || N.call(q)), this.startIndex = u + 1; };
    Me.prototype.onend = function () { var t, u; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var a = 0; a < this.stack.length; a++)
            this.cbs.onclosetag(this.stack[a], !0);
    } (u = (t = this.cbs).onend) === null || u === void 0 || u.call(t); };
    Me.prototype.reset = function () { var t, u, a, n; (u = (t = this.cbs).onreset) === null || u === void 0 || u.call(t), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (n = (a = this.cbs).onparserinit) === null || n === void 0 || n.call(a, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    Me.prototype.parseComplete = function (t) { this.reset(), this.end(t); };
    Me.prototype.getSlice = function (t, u) { for (; t - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var a = this.buffers[0].slice(t - this.bufferOffset, u - this.bufferOffset); for (; u - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), a += this.buffers[0].slice(0, u - this.bufferOffset); return a; };
    Me.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    Me.prototype.write = function (t) { var u, a; if (this.ended) {
        (a = (u = this.cbs).onerror) === null || a === void 0 || a.call(u, new Error(".write() after done!"));
        return;
    } this.buffers.push(t), this.tokenizer.running && (this.tokenizer.write(t), this.writeIndex++); };
    Me.prototype.end = function (t) { var u, a; if (this.ended) {
        (a = (u = this.cbs).onerror) === null || a === void 0 || a.call(u, new Error(".end() after done!"));
        return;
    } t && this.write(t), this.ended = !0, this.tokenizer.end(); };
    Me.prototype.pause = function () { this.tokenizer.pause(); };
    Me.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    Me.prototype.parseChunk = function (t) { this.write(t); };
    Me.prototype.done = function (t) { this.end(t); };
    return Me;
}());
var et = {};
Nt(et, { CDATA: function () { return Vt; }, Comment: function () { return Pt; }, Directive: function () { return Ut; }, Doctype: function () { return Ht; }, ElementType: function () { return _; }, Root: function () { return Ot; }, Script: function () { return Mt; }, Style: function () { return Bt; }, Tag: function () { return Ft; }, Text: function () { return _t; }, isTag: function () { return It; } });
var _;
(function (e) { e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"; })(_ || (_ = {}));
function It(e) { return e.type === _.Tag || e.type === _.Script || e.type === _.Style; }
var Ot = _.Root, _t = _.Text, Ut = _.Directive, Pt = _.Comment, Mt = _.Script, Bt = _.Style, Ft = _.Tag, Vt = _.CDATA, Ht = _.Doctype;
var tt = (function () {
    function tt() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(tt.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (t) { this.parent = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(tt.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (t) { this.prev = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(tt.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (t) { this.next = t; },
        enumerable: false,
        configurable: true
    });
    tt.prototype.cloneNode = function (t) {
        if (t === void 0) { t = !1; }
        return Pu(this, t);
    };
    return tt;
}()), Be = (function (_super) {
    __extends(Be, _super);
    function Be(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = t;
        return _this;
    }
    Object.defineProperty(Be.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (t) { this.data = t; },
        enumerable: false,
        configurable: true
    });
    return Be;
}(tt)), qe = (function (_super) {
    __extends(qe, _super);
    function qe() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = _.Text;
        return _this;
    }
    Object.defineProperty(qe.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return qe;
}(Be)), Fe = (function (_super) {
    __extends(Fe, _super);
    function Fe() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = _.Comment;
        return _this;
    }
    Object.defineProperty(Fe.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return Fe;
}(Be)), Ve = (function (_super) {
    __extends(Ve, _super);
    function Ve(t, u) {
        var _this = this;
        _this = _super.call(this, u) || this, _this.name = t, _this.type = _.Directive;
        return _this;
    }
    Object.defineProperty(Ve.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return Ve;
}(Be)), He = (function (_super) {
    __extends(He, _super);
    function He(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = t;
        return _this;
    }
    Object.defineProperty(He.prototype, "firstChild", {
        get: function () { var t; return (t = this.children[0]) !== null && t !== void 0 ? t : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(He.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(He.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (t) { this.children = t; },
        enumerable: false,
        configurable: true
    });
    return He;
}(tt)), Re = (function (_super) {
    __extends(Re, _super);
    function Re() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = _.CDATA;
        return _this;
    }
    Object.defineProperty(Re.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return Re;
}(He)), Ne = (function (_super) {
    __extends(Ne, _super);
    function Ne() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = _.Root;
        return _this;
    }
    Object.defineProperty(Ne.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return Ne;
}(He)), je = (function (_super) {
    __extends(je, _super);
    function je(t, u, a, n) {
        if (a === void 0) { a = []; }
        if (n === void 0) { n = t === "script" ? _.Script : t === "style" ? _.Style : _.Tag; }
        var _this = this;
        _this = _super.call(this, a) || this, _this.name = t, _this.attribs = u, _this.type = n;
        return _this;
    }
    Object.defineProperty(je.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(je.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (t) { this.name = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(je.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (t) { var u, a; return { name: t, value: _this.attribs[t], namespace: (u = _this["x-attribsNamespace"]) === null || u === void 0 ? void 0 : u[t], prefix: (a = _this["x-attribsPrefix"]) === null || a === void 0 ? void 0 : a[t] }; });
        },
        enumerable: false,
        configurable: true
    });
    return je;
}(He));
function U(e) { return It(e); }
function Ce(e) { return e.type === _.CDATA; }
function ae(e) { return e.type === _.Text; }
function ze(e) { return e.type === _.Comment; }
function ta(e) { return e.type === _.Directive; }
function jt(e) { return e.type === _.Root; }
function W(e) { return Object.prototype.hasOwnProperty.call(e, "children"); }
function Pu(e, t) {
    if (t === void 0) { t = !1; }
    var u;
    if (ae(e))
        u = new qe(e.data);
    else if (ze(e))
        u = new Fe(e.data);
    else if (U(e)) {
        var a = t ? Rt(e.children) : [], n_1 = new je(e.name, ue({}, e.attribs), a);
        a.forEach(function (s) { return s.parent = n_1; }), e.namespace != null && (n_1.namespace = e.namespace), e["x-attribsNamespace"] && (n_1["x-attribsNamespace"] = ue({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (n_1["x-attribsPrefix"] = ue({}, e["x-attribsPrefix"])), u = n_1;
    }
    else if (Ce(e)) {
        var a = t ? Rt(e.children) : [], n_2 = new Re(a);
        a.forEach(function (s) { return s.parent = n_2; }), u = n_2;
    }
    else if (jt(e)) {
        var a = t ? Rt(e.children) : [], n_3 = new Ne(a);
        a.forEach(function (s) { return s.parent = n_3; }), e["x-mode"] && (n_3["x-mode"] = e["x-mode"]), u = n_3;
    }
    else if (ta(e)) {
        var a = new Ve(e.name, e.data);
        e["x-name"] != null && (a["x-name"] = e["x-name"], a["x-publicId"] = e["x-publicId"], a["x-systemId"] = e["x-systemId"]), u = a;
    }
    else
        throw new Error("Not implemented yet: ".concat(e.type));
    return u.startIndex = e.startIndex, u.endIndex = e.endIndex, e.sourceCodeLocation != null && (u.sourceCodeLocation = e.sourceCodeLocation), u;
}
function Rt(e) { var t = e.map(function (u) { return Pu(u, !0); }); for (var u = 1; u < t.length; u++)
    t[u].prev = t[u - 1], t[u - 1].next = t[u]; return t; }
var Mu = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, Le = (function () {
    function Le(t, u, a) {
        this.dom = [], this.root = new Ne(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof u == "function" && (a = u, u = Mu), typeof t == "object" && (u = t, t = void 0), this.callback = t != null ? t : null, this.options = u != null ? u : Mu, this.elementCB = a != null ? a : null;
    }
    Le.prototype.onparserinit = function (t) { this.parser = t; };
    Le.prototype.onreset = function () { this.dom = [], this.root = new Ne(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    Le.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    Le.prototype.onerror = function (t) { this.handleCallback(t); };
    Le.prototype.onclosetag = function () { this.lastNode = null; var t = this.tagStack.pop(); this.options.withEndIndices && (t.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(t); };
    Le.prototype.onopentag = function (t, u) { var a = this.options.xmlMode ? _.Tag : void 0, n = new je(t, u, void 0, a); this.addNode(n), this.tagStack.push(n); };
    Le.prototype.ontext = function (t) { var u = this.lastNode; if (u && u.type === _.Text)
        u.data += t, this.options.withEndIndices && (u.endIndex = this.parser.endIndex);
    else {
        var a = new qe(t);
        this.addNode(a), this.lastNode = a;
    } };
    Le.prototype.oncomment = function (t) { if (this.lastNode && this.lastNode.type === _.Comment) {
        this.lastNode.data += t;
        return;
    } var u = new Fe(t); this.addNode(u), this.lastNode = u; };
    Le.prototype.oncommentend = function () { this.lastNode = null; };
    Le.prototype.oncdatastart = function () { var t = new qe(""), u = new Re([t]); this.addNode(u), t.parent = u, this.lastNode = t; };
    Le.prototype.oncdataend = function () { this.lastNode = null; };
    Le.prototype.onprocessinginstruction = function (t, u) { var a = new Ve(t, u); this.addNode(a); };
    Le.prototype.handleCallback = function (t) { if (typeof this.callback == "function")
        this.callback(t, this.dom);
    else if (t)
        throw t; };
    Le.prototype.addNode = function (t) { var u = this.tagStack[this.tagStack.length - 1], a = u.children[u.children.length - 1]; this.options.withStartIndices && (t.startIndex = this.parser.startIndex), this.options.withEndIndices && (t.endIndex = this.parser.endIndex), u.children.push(t), a && (t.prev = a, a.next = t), t.parent = u, this.lastNode = null; };
    return Le;
}());
var ie = {};
Nt(ie, { DocumentPosition: function () { return ee; }, append: function () { return ya; }, appendChild: function () { return wa; }, compareDocumentPosition: function () { return Zu; }, existsOne: function () { return Qu; }, filter: function () { return Ie; }, find: function () { return ct; }, findAll: function () { return Ea; }, findOne: function () { return ot; }, findOneChild: function () { return Aa; }, getAttributeValue: function () { return ga; }, getChildren: function () { return nt; }, getElementById: function () { return Na; }, getElements: function () { return qa; }, getElementsByClassName: function () { return Ca; }, getElementsByTagName: function () { return xe; }, getElementsByTagType: function () { return La; }, getFeed: function () { return tu; }, getInnerHTML: function () { return pa; }, getName: function () { return xa; }, getOuterHTML: function () { return Xu; }, getParent: function () { return Ju; }, getSiblings: function () { return st; }, getText: function () { return it; }, hasAttrib: function () { return ma; }, hasChildren: function () { return W; }, innerText: function () { return Jt; }, isCDATA: function () { return Ce; }, isComment: function () { return ze; }, isDocument: function () { return jt; }, isTag: function () { return U; }, isText: function () { return ae; }, nextElementSibling: function () { return Qt; }, prepend: function () { return Zt; }, prependChild: function () { return Sa; }, prevElementSibling: function () { return Kt; }, removeElement: function () { return ce; }, removeSubsets: function () { return Da; }, replaceElement: function () { return va; }, testElement: function () { return ka; }, textContent: function () { return de; }, uniqueSort: function () { return eu; } });
function ut(e) { for (var t = 1; t < e.length; t++)
    e[t][0] += e[t - 1][0] + 1; return e; }
var ua = new Map(ut([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(ut([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(ut([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(ut([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var zt = /["&'<>$\x80-\uFFFF]/g, Bu = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), Fu = String.prototype.codePointAt != null ? function (e, t) { return e.codePointAt(t); } : function (e, t) { return (e.charCodeAt(t) & 64512) === 55296 ? (e.charCodeAt(t) - 55296) * 1024 + e.charCodeAt(t + 1) - 56320 + 65536 : e.charCodeAt(t); };
function Ge(e) { var t = "", u = 0, a; for (; (a = zt.exec(e)) !== null;) {
    var n = a.index, s = e.charCodeAt(n), h = Bu.get(s);
    h !== void 0 ? (t += e.substring(u, n) + h, u = n + 1) : (t += "".concat(e.substring(u, n), "&#x").concat(Fu(e, n).toString(16), ";"), u = zt.lastIndex += +((s & 64512) === 55296));
} return t + e.substr(u); }
function Gt(e, t) { return function (a) { var n, s = 0, h = ""; for (; n = e.exec(a);)
    s !== n.index && (h += a.substring(s, n.index)), h += t.get(n[0].charCodeAt(0)), s = n.index + 1; return h + a.substring(s); }; }
var Vu = Gt(/[&<>'"]/g, Bu), rt = Gt(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), at = Gt(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var Hu;
(function (e) { e[e.XML = 0] = "XML", e[e.HTML = 1] = "HTML"; })(Hu || (Hu = {}));
var Ru;
(function (e) { e[e.UTF8 = 0] = "UTF8", e[e.ASCII = 1] = "ASCII", e[e.Extensive = 2] = "Extensive", e[e.Attribute = 3] = "Attribute", e[e.Text = 4] = "Text"; })(Ru || (Ru = {}));
var Gu = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (e) { return [e.toLowerCase(), e]; })), $u = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (e) { return [e.toLowerCase(), e]; }));
var aa = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function ia(e) { return e.replace(/"/g, "&quot;"); }
function na(e, t) { var u; if (!e)
    return; var a = ((u = t.encodeEntities) !== null && u !== void 0 ? u : t.decodeEntities) === !1 ? ia : t.xmlMode || t.encodeEntities !== "utf8" ? Ge : rt; return Object.keys(e).map(function (n) { var s, h; var b = (s = e[n]) !== null && s !== void 0 ? s : ""; return t.xmlMode === "foreign" && (n = (h = $u.get(n)) !== null && h !== void 0 ? h : n), !t.emptyAttrs && !t.xmlMode && b === "" ? n : "".concat(n, "=\"").concat(a(b), "\""); }).join(" "); }
var Wu = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function Xt(e, t) {
    if (t === void 0) { t = {}; }
    var u = "length" in e ? e : [e], a = "";
    for (var n = 0; n < u.length; n++)
        a += sa(u[n], t);
    return a;
}
var De = Xt;
function sa(e, t) { switch (e.type) {
    case Ot: return Xt(e.children, t);
    case Ht:
    case Ut: return la(e);
    case Pt: return ba(e);
    case Vt: return ha(e);
    case Mt:
    case Bt:
    case Ft: return fa(e, t);
    case _t: return da(e, t);
} }
var ca = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), oa = new Set(["svg", "math"]);
function fa(e, t) { var u; t.xmlMode === "foreign" && (e.name = (u = Gu.get(e.name)) !== null && u !== void 0 ? u : e.name, e.parent && ca.has(e.parent.name) && (t = ge(ue({}, t), { xmlMode: !1 }))), !t.xmlMode && oa.has(e.name) && (t = ge(ue({}, t), { xmlMode: "foreign" })); var a = "<".concat(e.name), n = na(e.attribs, t); return n && (a += " ".concat(n)), e.children.length === 0 && (t.xmlMode ? t.selfClosingTags !== !1 : t.selfClosingTags && Wu.has(e.name)) ? (t.xmlMode || (a += " "), a += "/>") : (a += ">", e.children.length > 0 && (a += Xt(e.children, t)), (t.xmlMode || !Wu.has(e.name)) && (a += "</".concat(e.name, ">"))), a; }
function la(e) { return "<".concat(e.data, ">"); }
function da(e, t) { var u; var a = e.data || ""; return ((u = t.encodeEntities) !== null && u !== void 0 ? u : t.decodeEntities) !== !1 && !(!t.xmlMode && e.parent && aa.has(e.parent.name)) && (a = t.xmlMode || t.encodeEntities !== "utf8" ? Ge(a) : at(a)), a; }
function ha(e) { return "<![CDATA[".concat(e.children[0].data, "]]>"); }
function ba(e) { return "<!--".concat(e.data, "-->"); }
function Xu(e, t) { return De(e, t); }
function pa(e, t) { return W(e) ? e.children.map(function (u) { return Xu(u, t); }).join("") : ""; }
function it(e) {
    return Array.isArray(e) ? e.map(it).join("") : U(e) ? e.name === "br" ? "\n" : it(e.children) : Ce(e) ? it(e.children) : ae(e) ? e.data : "";
}
function de(e) { return Array.isArray(e) ? e.map(de).join("") : W(e) && !ze(e) ? de(e.children) : ae(e) ? e.data : ""; }
function Jt(e) { return Array.isArray(e) ? e.map(Jt).join("") : W(e) && (e.type === _.Tag || Ce(e)) ? Jt(e.children) : ae(e) ? e.data : ""; }
function nt(e) { return W(e) ? e.children : []; }
function Ju(e) { return e.parent || null; }
function st(e) {
    var _b, _c;
    var t = Ju(e);
    if (t != null)
        return nt(t);
    var u = [e], a = e.prev, n = e.next;
    for (; a != null;)
        u.unshift(a), _b = a, a = _b.prev;
    for (; n != null;)
        u.push(n), _c = n, n = _c.next;
    return u;
}
function ga(e, t) { var u; return (u = e.attribs) === null || u === void 0 ? void 0 : u[t]; }
function ma(e, t) { return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, t) && e.attribs[t] != null; }
function xa(e) { return e.name; }
function Qt(e) {
    var _b;
    var t = e.next;
    for (; t !== null && !U(t);)
        (_b = t, t = _b.next);
    return t;
}
function Kt(e) {
    var _b;
    var t = e.prev;
    for (; t !== null && !U(t);)
        (_b = t, t = _b.prev);
    return t;
}
function ce(e) { if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var t = e.parent.children, u = t.lastIndexOf(e);
    u >= 0 && t.splice(u, 1);
} e.next = null, e.prev = null, e.parent = null; }
function va(e, t) { var u = t.prev = e.prev; u && (u.next = t); var a = t.next = e.next; a && (a.prev = t); var n = t.parent = e.parent; if (n) {
    var s = n.children;
    s[s.lastIndexOf(e)] = t, e.parent = null;
} }
function wa(e, t) { if (ce(t), t.next = null, t.parent = e, e.children.push(t) > 1) {
    var u = e.children[e.children.length - 2];
    u.next = t, t.prev = u;
}
else
    t.prev = null; }
function ya(e, t) { ce(t); var u = e.parent, a = e.next; if (t.next = a, t.prev = e, e.next = t, t.parent = u, a) {
    if (a.prev = t, u) {
        var n = u.children;
        n.splice(n.lastIndexOf(a), 0, t);
    }
}
else
    u && u.children.push(t); }
function Sa(e, t) { if (ce(t), t.parent = e, t.prev = null, e.children.unshift(t) !== 1) {
    var u = e.children[1];
    u.prev = t, t.next = u;
}
else
    t.next = null; }
function Zt(e, t) { ce(t); var u = e.parent; if (u) {
    var a = u.children;
    a.splice(a.indexOf(e), 0, t);
} e.prev && (e.prev.next = t), t.parent = u, t.prev = e.prev, t.next = e, e.prev = t; }
function Ie(e, t, u, a) {
    if (u === void 0) { u = !0; }
    if (a === void 0) { a = 1 / 0; }
    return ct(e, Array.isArray(t) ? t : [t], u, a);
}
function ct(e, t, u, a) { var n = [], s = [Array.isArray(t) ? t : [t]], h = [0]; for (;;) {
    if (h[0] >= s[0].length) {
        if (h.length === 1)
            return n;
        s.shift(), h.shift();
        continue;
    }
    var b = s[0][h[0]++];
    if (e(b) && (n.push(b), --a <= 0))
        return n;
    u && W(b) && b.children.length > 0 && (h.unshift(0), s.unshift(b.children));
} }
function Aa(e, t) { return t.find(e); }
function ot(e, t, u) {
    if (u === void 0) { u = !0; }
    var a = Array.isArray(t) ? t : [t];
    for (var n = 0; n < a.length; n++) {
        var s = a[n];
        if (U(s) && e(s))
            return s;
        if (u && W(s) && s.children.length > 0) {
            var h = ot(e, s.children, !0);
            if (h)
                return h;
        }
    }
    return null;
}
function Qu(e, t) { return (Array.isArray(t) ? t : [t]).some(function (u) { return U(u) && e(u) || W(u) && Qu(e, u.children); }); }
function Ea(e, t) { var u = [], a = [Array.isArray(t) ? t : [t]], n = [0]; for (;;) {
    if (n[0] >= a[0].length) {
        if (a.length === 1)
            return u;
        a.shift(), n.shift();
        continue;
    }
    var s = a[0][n[0]++];
    U(s) && e(s) && u.push(s), W(s) && s.children.length > 0 && (n.unshift(0), a.unshift(s.children));
} }
var ft = { tag_name: function (e) { return typeof e == "function" ? function (t) { return U(t) && e(t.name); } : e === "*" ? U : function (t) { return U(t) && t.name === e; }; }, tag_type: function (e) { return typeof e == "function" ? function (t) { return e(t.type); } : function (t) { return t.type === e; }; }, tag_contains: function (e) { return typeof e == "function" ? function (t) { return ae(t) && e(t.data); } : function (t) { return ae(t) && t.data === e; }; } };
function Yt(e, t) { return typeof t == "function" ? function (u) { return U(u) && t(u.attribs[e]); } : function (u) { return U(u) && u.attribs[e] === t; }; }
function Ta(e, t) { return function (u) { return e(u) || t(u); }; }
function Ku(e) { var t = Object.keys(e).map(function (u) { var a = e[u]; return Object.prototype.hasOwnProperty.call(ft, u) ? ft[u](a) : Yt(u, a); }); return t.length === 0 ? null : t.reduce(Ta); }
function ka(e, t) { var u = Ku(e); return u ? u(t) : !0; }
function qa(e, t, u, a) {
    if (a === void 0) { a = 1 / 0; }
    var n = Ku(e);
    return n ? Ie(n, t, u, a) : [];
}
function Na(e, t, u) {
    if (u === void 0) { u = !0; }
    return Array.isArray(t) || (t = [t]), ot(Yt("id", e), t, u);
}
function xe(e, t, u, a) {
    if (u === void 0) { u = !0; }
    if (a === void 0) { a = 1 / 0; }
    return Ie(ft.tag_name(e), t, u, a);
}
function Ca(e, t, u, a) {
    if (u === void 0) { u = !0; }
    if (a === void 0) { a = 1 / 0; }
    return Ie(Yt("class", e), t, u, a);
}
function La(e, t, u, a) {
    if (u === void 0) { u = !0; }
    if (a === void 0) { a = 1 / 0; }
    return Ie(ft.tag_type(e), t, u, a);
}
function Da(e) { var t = e.length; for (; --t >= 0;) {
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
var ee;
(function (e) { e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.PRECEDING = 2] = "PRECEDING", e[e.FOLLOWING = 4] = "FOLLOWING", e[e.CONTAINS = 8] = "CONTAINS", e[e.CONTAINED_BY = 16] = "CONTAINED_BY"; })(ee || (ee = {}));
function Zu(e, t) { var u = [], a = []; if (e === t)
    return 0; var n = W(e) ? e : e.parent; for (; n;)
    u.unshift(n), n = n.parent; for (n = W(t) ? t : t.parent; n;)
    a.unshift(n), n = n.parent; var s = Math.min(u.length, a.length), h = 0; for (; h < s && u[h] === a[h];)
    h++; if (h === 0)
    return ee.DISCONNECTED; var b = u[h - 1], g = b.children, v = u[h], A = a[h]; return g.indexOf(v) > g.indexOf(A) ? b === t ? ee.FOLLOWING | ee.CONTAINED_BY : ee.FOLLOWING : b === e ? ee.PRECEDING | ee.CONTAINS : ee.PRECEDING; }
function eu(e) { return e = e.filter(function (t, u, a) { return !a.includes(t, u + 1); }), e.sort(function (t, u) { var a = Zu(t, u); return a & ee.PRECEDING ? -1 : a & ee.FOLLOWING ? 1 : 0; }), e; }
function tu(e) { var t = lt(Pa, e); return t ? t.name === "feed" ? Ia(t) : Oa(t) : null; }
function Ia(e) { var t; var u = e.children, a = { type: "atom", items: xe("entry", u).map(function (h) { var b; var g = h.children, v = { media: Yu(g) }; Q(v, "id", "id", g), Q(v, "title", "title", g); var A = (b = lt("link", g)) === null || b === void 0 ? void 0 : b.attribs.href; A && (v.link = A); var D = he("summary", g) || he("content", g); D && (v.description = D); var q = he("updated", g); return q && (v.pubDate = new Date(q)), v; }) }; Q(a, "id", "id", u), Q(a, "title", "title", u); var n = (t = lt("link", u)) === null || t === void 0 ? void 0 : t.attribs.href; n && (a.link = n), Q(a, "description", "subtitle", u); var s = he("updated", u); return s && (a.updated = new Date(s)), Q(a, "author", "email", u, !0), a; }
function Oa(e) { var t, u; var a = (u = (t = lt("channel", e.children)) === null || t === void 0 ? void 0 : t.children) !== null && u !== void 0 ? u : [], n = { type: e.name.substr(0, 3), id: "", items: xe("item", e.children).map(function (h) { var b = h.children, g = { media: Yu(b) }; Q(g, "id", "guid", b), Q(g, "title", "title", b), Q(g, "link", "link", b), Q(g, "description", "description", b); var v = he("pubDate", b) || he("dc:date", b); return v && (g.pubDate = new Date(v)), g; }) }; Q(n, "title", "title", a), Q(n, "link", "link", a), Q(n, "description", "description", a); var s = he("lastBuildDate", a); return s && (n.updated = new Date(s)), Q(n, "author", "managingEditor", a, !0), n; }
var _a = ["url", "type", "lang"], Ua = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function Yu(e) { return xe("media:content", e).map(function (t) {
    var e_4, _b, e_5, _c;
    var u = t.attribs, a = { medium: u.medium, isDefault: !!u.isDefault };
    try {
        for (var _a_1 = __values(_a), _a_1_1 = _a_1.next(); !_a_1_1.done; _a_1_1 = _a_1.next()) {
            var n = _a_1_1.value;
            u[n] && (a[n] = u[n]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (_a_1_1 && !_a_1_1.done && (_b = _a_1.return)) _b.call(_a_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var Ua_1 = __values(Ua), Ua_1_1 = Ua_1.next(); !Ua_1_1.done; Ua_1_1 = Ua_1.next()) {
            var n = Ua_1_1.value;
            u[n] && (a[n] = parseInt(u[n], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (Ua_1_1 && !Ua_1_1.done && (_c = Ua_1.return)) _c.call(Ua_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return u.expression && (a.expression = u.expression), a;
}); }
function lt(e, t) { return xe(e, t, !0, 1)[0]; }
function he(e, t, u) {
    if (u === void 0) { u = !1; }
    return de(xe(e, t, u, 1)).trim();
}
function Q(e, t, u, a, n) {
    if (n === void 0) { n = !1; }
    var s = he(u, a, n);
    s && (e[t] = s);
}
function Pa(e) { return e === "rss" || e === "feed" || e === "rdf:RDF"; }
function er(e, t) { var u = new Le(void 0, t); return new Me(u, t).end(e), u.root; }
var C;
(function (e) { e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"; })(C || (C = {}));
var H;
(function (e) { e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"; })(H || (H = {}));
var tr = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, Ma = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, Ba = new Map([[126, H.Element], [94, H.Start], [36, H.End], [42, H.Any], [33, H.Not], [124, H.Hyphen]]), Fa = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function ve(e) { switch (e.type) {
    case C.Adjacent:
    case C.Child:
    case C.Descendant:
    case C.Parent:
    case C.Sibling:
    case C.ColumnCombinator: return !0;
    default: return !1;
} }
var Va = new Set(["contains", "icontains"]);
function Ha(e, t, u) { var a = parseInt(t, 16) - 65536; return a !== a || u ? t : a < 0 ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320); }
function $e(e) { return e.replace(Ma, Ha); }
function uu(e) { return e === 39 || e === 34; }
function ur(e) { return e === 32 || e === 9 || e === 10 || e === 12 || e === 13; }
function be(e) { var t = [], u = rr(t, "".concat(e), 0); if (u < e.length)
    throw new Error("Unmatched selector: ".concat(e.slice(u))); return t; }
function rr(e, t, u) { var a = []; function n(q) { var N = t.slice(u + q).match(tr); if (!N)
    throw new Error("Expected name, found ".concat(t.slice(u))); var _b = __read(N, 1), I = _b[0]; return u += q + I.length, $e(I); } function s(q) { for (u += q; u < t.length && ur(t.charCodeAt(u));)
    u++; } function h() { u += 1; var q = u, N = 1; for (; N > 0 && u < t.length; u++)
    t.charCodeAt(u) === 40 && !b(u) ? N++ : t.charCodeAt(u) === 41 && !b(u) && N--; if (N)
    throw new Error("Parenthesis not matched"); return $e(t.slice(q, u - 1)); } function b(q) { var N = 0; for (; t.charCodeAt(--q) === 92;)
    N++; return (N & 1) === 1; } function g() { if (a.length > 0 && ve(a[a.length - 1]))
    throw new Error("Did not expect successive traversals."); } function v(q) { if (a.length > 0 && a[a.length - 1].type === C.Descendant) {
    a[a.length - 1].type = q;
    return;
} g(), a.push({ type: q }); } function A(q, N) { a.push({ type: C.Attribute, name: q, action: N, value: n(1), namespace: null, ignoreCase: "quirks" }); } function D() { if (a.length && a[a.length - 1].type === C.Descendant && a.pop(), a.length === 0)
    throw new Error("Empty sub-selector"); e.push(a); } if (s(0), t.length === u)
    return u; e: for (; u < t.length;) {
    var q = t.charCodeAt(u);
    switch (q) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (a.length === 0 || a[0].type !== C.Descendant) && (g(), a.push({ type: C.Descendant })), s(1);
            break;
        }
        case 62: {
            v(C.Child), s(1);
            break;
        }
        case 60: {
            v(C.Parent), s(1);
            break;
        }
        case 126: {
            v(C.Sibling), s(1);
            break;
        }
        case 43: {
            v(C.Adjacent), s(1);
            break;
        }
        case 46: {
            A("class", H.Element);
            break;
        }
        case 35: {
            A("id", H.Equals);
            break;
        }
        case 91: {
            s(1);
            var N = void 0, I = null;
            t.charCodeAt(u) === 124 ? N = n(1) : t.startsWith("*|", u) ? (I = "*", N = n(2)) : (N = n(0), t.charCodeAt(u) === 124 && t.charCodeAt(u + 1) !== 61 && (I = N, N = n(1))), s(0);
            var O = H.Exists, X = Ba.get(t.charCodeAt(u));
            if (X) {
                if (O = X, t.charCodeAt(u + 1) !== 61)
                    throw new Error("Expected `=`");
                s(2);
            }
            else
                t.charCodeAt(u) === 61 && (O = H.Equals, s(1));
            var J = "", re = null;
            if (O !== "exists") {
                if (uu(t.charCodeAt(u))) {
                    var c = t.charCodeAt(u), d = u + 1;
                    for (; d < t.length && (t.charCodeAt(d) !== c || b(d));)
                        d += 1;
                    if (t.charCodeAt(d) !== c)
                        throw new Error("Attribute value didn't end");
                    J = $e(t.slice(u + 1, d)), u = d + 1;
                }
                else {
                    var c = u;
                    for (; u < t.length && (!ur(t.charCodeAt(u)) && t.charCodeAt(u) !== 93 || b(u));)
                        u += 1;
                    J = $e(t.slice(c, u));
                }
                s(0);
                var E = t.charCodeAt(u) | 32;
                E === 115 ? (re = !1, s(1)) : E === 105 && (re = !0, s(1));
            }
            if (t.charCodeAt(u) !== 93)
                throw new Error("Attribute selector didn't terminate");
            u += 1;
            var V = { type: C.Attribute, name: N, action: O, value: J, namespace: I, ignoreCase: re };
            a.push(V);
            break;
        }
        case 58: {
            if (t.charCodeAt(u + 1) === 58) {
                a.push({ type: C.PseudoElement, name: n(2).toLowerCase(), data: t.charCodeAt(u) === 40 ? h() : null });
                continue;
            }
            var N = n(1).toLowerCase(), I = null;
            if (t.charCodeAt(u) === 40)
                if (Fa.has(N)) {
                    if (uu(t.charCodeAt(u + 1)))
                        throw new Error("Pseudo-selector ".concat(N, " cannot be quoted"));
                    if (I = [], u = rr(I, t, u + 1), t.charCodeAt(u) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(N, " (").concat(t, ")"));
                    u += 1;
                }
                else {
                    if (I = h(), Va.has(N)) {
                        var O = I.charCodeAt(0);
                        O === I.charCodeAt(I.length - 1) && uu(O) && (I = I.slice(1, -1));
                    }
                    I = $e(I);
                }
            a.push({ type: C.Pseudo, name: N, data: I });
            break;
        }
        case 44: {
            D(), a = [], s(1);
            break;
        }
        default: {
            if (t.startsWith("/*", u)) {
                var O = t.indexOf("*/", u + 2);
                if (O < 0)
                    throw new Error("Comment was not terminated");
                u = O + 2, a.length === 0 && s(0);
                break;
            }
            var N = null, I = void 0;
            if (q === 42)
                u += 1, I = "*";
            else if (q === 124) {
                if (I = "", t.charCodeAt(u + 1) === 124) {
                    v(C.ColumnCombinator), s(2);
                    break;
                }
            }
            else if (tr.test(t.slice(u)))
                I = n(0);
            else
                break e;
            t.charCodeAt(u) === 124 && t.charCodeAt(u + 1) !== 124 && (N = I, t.charCodeAt(u + 1) === 42 ? (I = "*", u += 2) : I = n(1)), a.push(I === "*" ? { type: C.Universal, namespace: N } : { type: C.Tag, name: I, namespace: N });
        }
    }
} return D(), u; }
var hu = me(pe(), 1);
var oe = me(pe(), 1);
var ir = new Map([[C.Universal, 50], [C.Tag, 30], [C.Attribute, 1], [C.Pseudo, 0]]);
function We(e) { return !ir.has(e.type); }
var Ra = new Map([[H.Exists, 10], [H.Equals, 8], [H.Not, 7], [H.Start, 6], [H.End, 6], [H.Any, 5]]);
function ru(e) { var t = e.map(nr); for (var u = 1; u < e.length; u++) {
    var a = t[u];
    if (!(a < 0))
        for (var n = u - 1; n >= 0 && a < t[n]; n--) {
            var s = e[n + 1];
            e[n + 1] = e[n], e[n] = s, t[n + 1] = t[n], t[n] = a;
        }
} }
function nr(e) { var t, u; var a = (t = ir.get(e.type)) !== null && t !== void 0 ? t : -1; return e.type === C.Attribute ? (a = (u = Ra.get(e.action)) !== null && u !== void 0 ? u : 4, e.action === H.Equals && e.name === "id" && (a = 9), e.ignoreCase && (a >>= 1)) : e.type === C.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? a = 0 : Array.isArray(e.data) ? (a = Math.min.apply(Math, __spreadArray([], __read(e.data.map(function (n) { return Math.min.apply(Math, __spreadArray([], __read(n.map(nr)), false)); })), false)), a < 0 && (a = 0)) : a = 2 : a = 3), a; }
var Xe = me(pe(), 1), ja = /[-[\]{}()*+?.,\\^$|#\s]/g;
function sr(e) { return e.replace(ja, "\\$&"); }
var za = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function we(e, t) { return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!t.quirksMode : !t.xmlMode && za.has(e.name); }
var cr = { equals: function (e, t, u) { var a = u.adapter, n = t.name, s = t.value; return we(t, u) ? (s = s.toLowerCase(), function (h) { var b = a.getAttributeValue(h, n); return b != null && b.length === s.length && b.toLowerCase() === s && e(h); }) : function (h) { return a.getAttributeValue(h, n) === s && e(h); }; }, hyphen: function (e, t, u) { var a = u.adapter, n = t.name, s = t.value, h = s.length; return we(t, u) ? (s = s.toLowerCase(), function (g) { var v = a.getAttributeValue(g, n); return v != null && (v.length === h || v.charAt(h) === "-") && v.substr(0, h).toLowerCase() === s && e(g); }) : function (g) { var v = a.getAttributeValue(g, n); return v != null && (v.length === h || v.charAt(h) === "-") && v.substr(0, h) === s && e(g); }; }, element: function (e, t, u) { var a = u.adapter, n = t.name, s = t.value; if (/\s/.test(s))
        return Xe.default.falseFunc; var h = new RegExp("(?:^|\\s)".concat(sr(s), "(?:$|\\s)"), we(t, u) ? "i" : ""); return function (g) { var v = a.getAttributeValue(g, n); return v != null && v.length >= s.length && h.test(v) && e(g); }; }, exists: function (e, _b, _c) {
        var t = _b.name;
        var u = _c.adapter;
        return function (a) { return u.hasAttrib(a, t) && e(a); };
    }, start: function (e, t, u) { var a = u.adapter, n = t.name, s = t.value, h = s.length; return h === 0 ? Xe.default.falseFunc : we(t, u) ? (s = s.toLowerCase(), function (b) { var g = a.getAttributeValue(b, n); return g != null && g.length >= h && g.substr(0, h).toLowerCase() === s && e(b); }) : function (b) { var g; return !!(!((g = a.getAttributeValue(b, n)) === null || g === void 0) && g.startsWith(s)) && e(b); }; }, end: function (e, t, u) { var a = u.adapter, n = t.name, s = t.value, h = -s.length; return h === 0 ? Xe.default.falseFunc : we(t, u) ? (s = s.toLowerCase(), function (b) { var g; return ((g = a.getAttributeValue(b, n)) === null || g === void 0 ? void 0 : g.substr(h).toLowerCase()) === s && e(b); }) : function (b) { var g; return !!(!((g = a.getAttributeValue(b, n)) === null || g === void 0) && g.endsWith(s)) && e(b); }; }, any: function (e, t, u) { var a = u.adapter, n = t.name, s = t.value; if (s === "")
        return Xe.default.falseFunc; if (we(t, u)) {
        var h_1 = new RegExp(sr(s), "i");
        return function (g) { var v = a.getAttributeValue(g, n); return v != null && v.length >= s.length && h_1.test(v) && e(g); };
    } return function (h) { var b; return !!(!((b = a.getAttributeValue(h, n)) === null || b === void 0) && b.includes(s)) && e(h); }; }, not: function (e, t, u) { var a = u.adapter, n = t.name, s = t.value; return s === "" ? function (h) { return !!a.getAttributeValue(h, n) && e(h); } : we(t, u) ? (s = s.toLowerCase(), function (h) { var b = a.getAttributeValue(h, n); return (b == null || b.length !== s.length || b.toLowerCase() !== s) && e(h); }) : function (h) { return a.getAttributeValue(h, n) !== s && e(h); }; } };
var Ga = new Set([9, 10, 12, 13, 32]), or = 48, $a = 57;
function fr(e) { if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0]; if (e === "odd")
    return [2, 1]; var t = 0, u = 0, a = s(), n = h(); if (t < e.length && e.charAt(t) === "n" && (t++, u = a * (n != null ? n : 1), b(), t < e.length ? (a = s(), b(), n = h()) : a = n = 0), n === null || t < e.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(e, "')")); return [u, a * n]; function s() { return e.charAt(t) === "-" ? (t++, -1) : (e.charAt(t) === "+" && t++, 1); } function h() { var g = t, v = 0; for (; t < e.length && e.charCodeAt(t) >= or && e.charCodeAt(t) <= $a;)
    v = v * 10 + (e.charCodeAt(t) - or), t++; return t === g ? null : v; } function b() { for (; t < e.length && Ga.has(e.charCodeAt(t));)
    t++; } }
var au = me(pe(), 1);
function lr(e) { var t = e[0], u = e[1] - 1; if (u < 0 && t <= 0)
    return au.default.falseFunc; if (t === -1)
    return function (s) { return s <= u; }; if (t === 0)
    return function (s) { return s === u; }; if (t === 1)
    return u < 0 ? au.default.trueFunc : function (s) { return s >= u; }; var a = Math.abs(t), n = (u % a + a) % a; return t > 1 ? function (s) { return s >= u && s % a === n; } : function (s) { return s <= u && s % a === n; }; }
function Oe(e) { return lr(fr(e)); }
var K = me(pe(), 1);
function dt(e, t) { return function (u) { var a = t.getParent(u); return a != null && t.isTag(a) && e(u); }; }
var _e = { contains: function (e, t, _b) {
        var u = _b.adapter;
        return function (n) { return e(n) && u.getText(n).includes(t); };
    }, icontains: function (e, t, _b) {
        var u = _b.adapter;
        var a = t.toLowerCase();
        return function (s) { return e(s) && u.getText(s).toLowerCase().includes(a); };
    }, "nth-child": function (e, t, _b) {
        var u = _b.adapter, a = _b.equals;
        var n = Oe(t);
        return n === K.default.falseFunc ? K.default.falseFunc : n === K.default.trueFunc ? dt(e, u) : function (h) { var b = u.getSiblings(h), g = 0; for (var v = 0; v < b.length && !a(h, b[v]); v++)
            u.isTag(b[v]) && g++; return n(g) && e(h); };
    }, "nth-last-child": function (e, t, _b) {
        var u = _b.adapter, a = _b.equals;
        var n = Oe(t);
        return n === K.default.falseFunc ? K.default.falseFunc : n === K.default.trueFunc ? dt(e, u) : function (h) { var b = u.getSiblings(h), g = 0; for (var v = b.length - 1; v >= 0 && !a(h, b[v]); v--)
            u.isTag(b[v]) && g++; return n(g) && e(h); };
    }, "nth-of-type": function (e, t, _b) {
        var u = _b.adapter, a = _b.equals;
        var n = Oe(t);
        return n === K.default.falseFunc ? K.default.falseFunc : n === K.default.trueFunc ? dt(e, u) : function (h) { var b = u.getSiblings(h), g = 0; for (var v = 0; v < b.length; v++) {
            var A = b[v];
            if (a(h, A))
                break;
            u.isTag(A) && u.getName(A) === u.getName(h) && g++;
        } return n(g) && e(h); };
    }, "nth-last-of-type": function (e, t, _b) {
        var u = _b.adapter, a = _b.equals;
        var n = Oe(t);
        return n === K.default.falseFunc ? K.default.falseFunc : n === K.default.trueFunc ? dt(e, u) : function (h) { var b = u.getSiblings(h), g = 0; for (var v = b.length - 1; v >= 0; v--) {
            var A = b[v];
            if (a(h, A))
                break;
            u.isTag(A) && u.getName(A) === u.getName(h) && g++;
        } return n(g) && e(h); };
    }, root: function (e, t, _b) {
        var u = _b.adapter;
        return function (a) { var n = u.getParent(a); return (n == null || !u.isTag(n)) && e(a); };
    }, scope: function (e, t, u, a) { var n = u.equals; return !a || a.length === 0 ? _e.root(e, t, u) : a.length === 1 ? function (s) { return n(a[0], s) && e(s); } : function (s) { return a.includes(s) && e(s); }; }, hover: iu("isHovered"), visited: iu("isVisited"), active: iu("isActive") };
function iu(e) { return function (u, a, _b) {
    var n = _b.adapter;
    var s = n[e];
    return typeof s != "function" ? K.default.falseFunc : function (b) { return s(b) && u(b); };
}; }
var Je = { empty: function (e, _b) {
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
            var h = a[s];
            if (u(e, h))
                return !0;
            if (t.isTag(h) && t.getName(h) === n)
                break;
        }
        return !1;
    }, "last-of-type": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var a = t.getSiblings(e), n = t.getName(e);
        for (var s = a.length - 1; s >= 0; s--) {
            var h = a[s];
            if (u(e, h))
                return !0;
            if (t.isTag(h) && t.getName(h) === n)
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
function nu(e, t, u, a) { if (u === null) {
    if (e.length > a)
        throw new Error("Pseudo-class :".concat(t, " requires an argument"));
}
else if (e.length === a)
    throw new Error("Pseudo-class :".concat(t, " doesn't have any arguments")); }
var ht = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var te = me(pe(), 1);
var ou = {};
function fu(e, t) { return e === te.default.falseFunc ? te.default.falseFunc : function (u) { return t.isTag(u) && e(u); }; }
function lu(e, t) { var u = t.getSiblings(e); if (u.length <= 1)
    return []; var a = u.indexOf(e); return a < 0 || a === u.length - 1 ? [] : u.slice(a + 1).filter(t.isTag); }
function cu(e) { return { xmlMode: !!e.xmlMode, lowerCaseAttributeNames: !!e.lowerCaseAttributeNames, lowerCaseTags: !!e.lowerCaseTags, quirksMode: !!e.quirksMode, cacheResults: !!e.cacheResults, pseudos: e.pseudos, adapter: e.adapter, equals: e.equals }; }
var su = function (e, t, u, a, n) { var s = n(t, cu(u), a); return s === te.default.trueFunc ? e : s === te.default.falseFunc ? te.default.falseFunc : function (h) { return s(h) && e(h); }; }, bt = { is: su, matches: su, where: su, not: function (e, t, u, a, n) { var s = n(t, cu(u), a); return s === te.default.falseFunc ? e : s === te.default.trueFunc ? te.default.falseFunc : function (h) { return !s(h) && e(h); }; }, has: function (e, t, u, a, n) { var s = u.adapter, h = cu(u); h.relativeSelector = !0; var b = t.some(function (A) { return A.some(We); }) ? [ou] : void 0, g = n(t, h, b); if (g === te.default.falseFunc)
        return te.default.falseFunc; var v = fu(g, s); if (b && g !== te.default.trueFunc) {
        var _b = g.shouldTestNextSiblings, A_1 = _b === void 0 ? !1 : _b;
        return function (D) { if (!e(D))
            return !1; b[0] = D; var q = s.getChildren(D), N = A_1 ? __spreadArray(__spreadArray([], __read(q), false), __read(lu(D, s)), false) : q; return s.existsOne(v, N); };
    } return function (A) { return e(A) && s.existsOne(v, s.getChildren(A)); }; } };
function dr(e, t, u, a, n) { var s; var h = t.name, b = t.data; if (Array.isArray(b)) {
    if (!(h in bt))
        throw new Error("Unknown pseudo-class :".concat(h, "(").concat(b, ")"));
    return bt[h](e, b, u, a, n);
} var g = (s = u.pseudos) === null || s === void 0 ? void 0 : s[h], v = typeof g == "string" ? g : ht[h]; if (typeof v == "string") {
    if (b != null)
        throw new Error("Pseudo ".concat(h, " doesn't have any arguments"));
    var A = be(v);
    return bt.is(e, A, u, a, n);
} if (typeof g == "function")
    return nu(g, h, b, 1), function (A) { return g(A, b) && e(A); }; if (h in _e)
    return _e[h](e, b, u, a); if (h in Je) {
    var A_2 = Je[h];
    return nu(A_2, h, b, 2), function (D) { return A_2(D, u, b) && e(D); };
} throw new Error("Unknown pseudo-class :".concat(h)); }
function du(e, t) { var u = t.getParent(e); return u && t.isTag(u) ? u : null; }
function hr(e, t, u, a, n) { var s = u.adapter, h = u.equals; switch (t.type) {
    case C.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case C.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case C.Attribute: {
        if (t.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!u.xmlMode || u.lowerCaseAttributeNames) && (t.name = t.name.toLowerCase()), cr[t.action](e, t, u);
    }
    case C.Pseudo: return dr(e, t, u, a, n);
    case C.Tag: {
        if (t.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var b_1 = t.name;
        return (!u.xmlMode || u.lowerCaseTags) && (b_1 = b_1.toLowerCase()), function (v) { return s.getName(v) === b_1 && e(v); };
    }
    case C.Descendant: {
        if (u.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (v) { var A = v; for (; A = du(A, s);)
                if (e(A))
                    return !0; return !1; };
        var b_2 = new WeakSet;
        return function (v) { var A = v; for (; A = du(A, s);)
            if (!b_2.has(A)) {
                if (s.isTag(A) && e(A))
                    return !0;
                b_2.add(A);
            } return !1; };
    }
    case "_flexibleDescendant": return function (g) { var v = g; do
        if (e(v))
            return !0;
    while (v = du(v, s)); return !1; };
    case C.Parent: return function (g) { return s.getChildren(g).some(function (v) { return s.isTag(v) && e(v); }); };
    case C.Child: return function (g) { var v = s.getParent(g); return v != null && s.isTag(v) && e(v); };
    case C.Sibling: return function (g) { var v = s.getSiblings(g); for (var A = 0; A < v.length; A++) {
        var D = v[A];
        if (h(g, D))
            break;
        if (s.isTag(D) && e(D))
            return !0;
    } return !1; };
    case C.Adjacent: return s.prevElementSibling ? function (g) { var v = s.prevElementSibling(g); return v != null && e(v); } : function (g) { var v = s.getSiblings(g), A; for (var D = 0; D < v.length; D++) {
        var q = v[D];
        if (h(g, q))
            break;
        s.isTag(q) && (A = q);
    } return !!A && e(A); };
    case C.Universal: {
        if (t.namespace != null && t.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return e;
    }
} }
function br(e, t, u) { var a = pt(e, t, u); return fu(a, t.adapter); }
function pt(e, t, u) { var a = typeof e == "string" ? be(e) : e; return gt(a, t, u); }
function pr(e) { return e.type === C.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(function (t) { return t.some(pr); })); }
var Wa = { type: C.Descendant }, Xa = { type: "_flexibleDescendant" }, Ja = { type: C.Pseudo, name: "scope", data: null };
function Qa(e, _b, u) {
    var e_6, _c;
    var t = _b.adapter;
    var a = !!(u != null && u.every(function (n) { var s = t.isTag(n) && t.getParent(n); return n === ou || s && t.isTag(s); }));
    try {
        for (var e_7 = __values(e), e_7_1 = e_7.next(); !e_7_1.done; e_7_1 = e_7.next()) {
            var n = e_7_1.value;
            if (!(n.length > 0 && We(n[0]) && n[0].type !== C.Descendant))
                if (a && !n.some(pr))
                    n.unshift(Wa);
                else
                    continue;
            n.unshift(Ja);
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
function gt(e, t, u) { var a; e.forEach(ru), u = (a = t.context) !== null && a !== void 0 ? a : u; var n = Array.isArray(u), s = u && (Array.isArray(u) ? u : [u]); if (t.relativeSelector !== !1)
    Qa(e, t, s);
else if (e.some(function (g) { return g.length > 0 && We(g[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var h = !1, b = e.map(function (g) { if (g.length >= 2) {
    var _b = __read(g, 2), v = _b[0], A = _b[1];
    v.type !== C.Pseudo || v.name !== "scope" || (n && A.type === C.Descendant ? g[1] = Xa : (A.type === C.Adjacent || A.type === C.Sibling) && (h = !0));
} return Ka(g, t, s); }).reduce(Za, oe.default.falseFunc); return b.shouldTestNextSiblings = h, b; }
function Ka(e, t, u) { var a; return e.reduce(function (n, s) { return n === oe.default.falseFunc ? oe.default.falseFunc : hr(n, s, t, u, gt); }, (a = t.rootFunc) !== null && a !== void 0 ? a : oe.default.trueFunc); }
function Za(e, t) { return t === oe.default.falseFunc || e === oe.default.trueFunc ? e : e === oe.default.falseFunc || t === oe.default.trueFunc ? t : function (a) { return e(a) || t(a); }; }
var gr = function (e, t) { return e === t; }, Ya = { adapter: ie, equals: gr };
function mr(e) { var t, u, a, n; var s = e != null ? e : Ya; return (t = s.adapter) !== null && t !== void 0 || (s.adapter = ie), (u = s.equals) !== null && u !== void 0 || (s.equals = (n = (a = s.adapter) === null || a === void 0 ? void 0 : a.equals) !== null && n !== void 0 ? n : gr), s; }
function bu(e) { return function (u, a, n) { var s = mr(a); return e(u, s, n); }; }
var E0 = bu(br), T0 = bu(pt), mt = bu(gt);
function xr(e) { return function (u, a, n) { var s = mr(n); typeof u != "function" && (u = pt(u, s, a)); var h = xt(a, s.adapter, u.shouldTestNextSiblings); return e(u, h, s); }; }
function xt(e, t, u) {
    if (u === void 0) { u = !1; }
    return u && (e = ei(e, t)), Array.isArray(e) ? t.removeSubsets(e) : t.getChildren(e);
}
function ei(e, t) { var u = Array.isArray(e) ? e.slice(0) : [e], a = u.length; for (var n = 0; n < a; n++) {
    var s = lu(u[n], t);
    u.push.apply(u, __spreadArray([], __read(s), false));
} return u; }
var k0 = xr(function (e, t, u) { return e === hu.default.falseFunc || !t || t.length === 0 ? [] : u.adapter.findAll(e, t); }), q0 = xr(function (e, t, u) { return e === hu.default.falseFunc || !t || t.length === 0 ? null : u.adapter.findOne(e, t); });
var wt = me(pe(), 1);
var ti = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function Ue(e) { return e.type !== "pseudo" ? !1 : ti.has(e.name) ? !0 : e.name === "not" && Array.isArray(e.data) ? e.data.some(function (t) { return t.some(Ue); }) : !1; }
function vr(e, t, u) { var a = t != null ? parseInt(t, 10) : NaN; switch (e) {
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
function wr(e) { for (; e.parent;)
    e = e.parent; return e; }
function vt(e) {
    var e_8, _b;
    var t = [], u = [];
    try {
        for (var e_9 = __values(e), e_9_1 = e_9.next(); !e_9_1.done; e_9_1 = e_9.next()) {
            var a = e_9_1.value;
            a.some(Ue) ? t.push(a) : u.push(a);
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
var ui = { type: C.Universal, namespace: null }, ri = { type: C.Pseudo, name: "scope", data: null };
function mu(e, t, u) {
    if (u === void 0) { u = {}; }
    return ai([e], t, u);
}
function ai(e, t, u) {
    if (u === void 0) { u = {}; }
    if (typeof t == "function")
        return e.some(t);
    var _b = __read(vt(be(t)), 2), a = _b[0], n = _b[1];
    return a.length > 0 && e.some(mt(a, u)) || n.some(function (s) { return yr(s, e, u).length > 0; });
}
function ii(e, t, u, a) { var n = typeof u == "string" ? parseInt(u, 10) : NaN; switch (e) {
    case "first":
    case "lt": return t;
    case "last": return t.length > 0 ? [t[t.length - 1]] : t;
    case "nth":
    case "eq": return isFinite(n) && Math.abs(n) < t.length ? [n < 0 ? t[t.length + n] : t[n]] : [];
    case "gt": return isFinite(n) ? t.slice(n + 1) : [];
    case "even": return t.filter(function (s, h) { return h % 2 === 0; });
    case "odd": return t.filter(function (s, h) { return h % 2 === 1; });
    case "not": {
        var s_1 = new Set(ni(u, t, a));
        return t.filter(function (h) { return !s_1.has(h); });
    }
} }
function ni(e, t, u) { if (t.length === 0)
    return []; var _b = __read(vt(e), 2), a = _b[0], n = _b[1], s; if (a.length) {
    var h = gu(t, a, u);
    if (n.length === 0)
        return h;
    h.length && (s = new Set(h));
} for (var h = 0; h < n.length && (s == null ? void 0 : s.size) !== t.length; h++) {
    var b = n[h];
    if ((s ? t.filter(function (A) { return U(A) && !s.has(A); }) : t).length === 0)
        break;
    var v = yr(b, t, u);
    if (v.length)
        if (s)
            v.forEach(function (A) { return s.add(A); });
        else {
            if (h === n.length - 1)
                return v;
            s = new Set(v);
        }
} return typeof s != "undefined" ? s.size === t.length ? t : t.filter(function (h) { return s.has(h); }) : []; }
function yr(e, t, u) { var a; if (e.some(ve)) {
    var n = (a = u.root) !== null && a !== void 0 ? a : wr(t[0]), s = ge(ue({}, u), { context: t, relativeSelector: !1 });
    return e.push(ri), yt(n, e, s, !0, t.length);
} return yt(t, e, u, !1, t.length); }
function xu(e, t, u, a) {
    if (u === void 0) { u = {}; }
    if (a === void 0) { a = 1 / 0; }
    if (typeof e == "function")
        return Sr(t, e);
    var _b = __read(vt(be(e)), 2), n = _b[0], s = _b[1], h = s.map(function (b) { return yt(t, b, u, !0, a); });
    return n.length && h.push(pu(t, n, u, a)), h.length === 0 ? [] : h.length === 1 ? h[0] : eu(h.reduce(function (b, g) { return __spreadArray(__spreadArray([], __read(b), false), __read(g), false); }));
}
function yt(e, t, u, a, n) { var s = t.findIndex(Ue), h = t.slice(0, s), b = t[s], g = t.length - 1 === s ? n : 1 / 0, v = vr(b.name, b.data, g); if (v === 0)
    return []; var D = (h.length === 0 && !Array.isArray(e) ? nt(e).filter(U) : h.length === 0 ? (Array.isArray(e) ? e : [e]).filter(U) : a || h.some(ve) ? pu(e, [h], u, v) : gu(e, [h], u)).slice(0, v), q = ii(b.name, D, b.data, u); if (q.length === 0 || t.length === s + 1)
    return q; var N = t.slice(s + 1), I = N.some(ve); if (I) {
    if (ve(N[0])) {
        var O = N[0].type;
        (O === C.Sibling || O === C.Adjacent) && (q = xt(q, ie, !0)), N.unshift(ui);
    }
    u = ge(ue({}, u), { relativeSelector: !1, rootFunc: function (O) { return q.includes(O); } });
}
else
    u.rootFunc && u.rootFunc !== wt.trueFunc && (u = ge(ue({}, u), { rootFunc: wt.trueFunc })); return N.some(Ue) ? yt(q, N, u, !1, n) : I ? pu(q, [N], u, n) : gu(q, [N], u); }
function pu(e, t, u, a) { var n = mt(t, u, e); return Sr(e, n, a); }
function Sr(e, t, u) {
    if (u === void 0) { u = 1 / 0; }
    var a = xt(e, ie, t.shouldTestNextSiblings);
    return ct(function (n) { return U(n) && t(n); }, a, !0, u);
}
function gu(e, t, u) { var a = (Array.isArray(e) ? e : [e]).filter(U); if (a.length === 0)
    return a; var n = mt(t, u); return n === wt.trueFunc ? a : a.filter(n); }
var si = function (e, t, u) { return xu(e, t, u); }, kr = function (e, t, u) { return xu(e, t, u, 1)[0] || null; }, qr = /[\s ]+/g, Ar = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), ci = { containsOwn: function (e, t) { return wu(e).toLowerCase().includes(String(t).toLowerCase()); }, matches: function (e, t) { return Er(t).test(vu(e)); }, matchesOwn: function (e, t) { return Er(t).test(wu(e)); }, containsData: function (e, t) { return de(e).includes(t); }, "contains-ci": function (e, t) { return vu(e).toLowerCase().includes(String(t).toLowerCase()); } };
function Er(e) { try {
    return new RegExp(e);
}
catch (t) {
    return /$^/;
} }
var St = { pseudos: ci, xmlMode: !1, lowerCaseTags: !0 };
function At(e) { return String(e).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function vu(e) { if (!e)
    return ""; if (e.type === "text")
    return e.data; var t = "", u = function (a) {
    var e_10, _b;
    try {
        for (var _c = __values(a.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var n = _d.value;
            n.type === "text" ? t += n.data : (n.type === "tag" || n.type === "script" || n.type === "style") && (n.name === "br" ? t += " " : n.type === "tag" && (Ar.has(n.name) && (t += " "), u(n), Ar.has(n.name) && (t += " ")));
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_10) throw e_10.error; }
    }
}; return u(e), t.replace(qr, " ").trim(); }
function wu(e) {
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
    return t.replace(qr, " ").trim();
}
function Nr(e, t) { if (!t)
    return ""; try {
    return new URL(t, e || void 0).href;
}
catch (u) {
    return e ? "" : t;
} }
var ye = (function () {
    function e(t, u) {
        this.node = t, this.doc = u;
    }
    Object.defineProperty(e.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    e.prototype.select = function (t) { return ne.of(si(At(t), this.node, St), this.doc); };
    e.prototype.selectFirst = function (t) { var u = kr(At(t), this.node, St); return u ? new e(u, this.doc) : null; };
    e.prototype.is = function (t) { return mu(this.node, At(t), St); };
    e.prototype.text = function () { return vu(this.node); };
    e.prototype.ownText = function () { return wu(this.node); };
    e.prototype.wholeText = function () { return de(this.node); };
    e.prototype.data = function () { return (this.node.children || []).filter(function (t) { return t.type === "text"; }).map(function (t) { return t.data; }).join(""); };
    e.prototype.html = function () { return (this.node.children || []).map(function (t) { return De(t, { decodeEntities: !1 }); }).join("").trim(); };
    e.prototype.outerHtml = function () { return De(this.node, { decodeEntities: !1 }); };
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
        return Nr(this.baseUri, this.node.attribs[t.slice(4)] || ""); var a = this.node.attribs[t]; return a == null ? "" : a; };
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
        t.push(u), u = u.parent; return ne.of(t, this.doc); };
    e.prototype.closest = function (t) { var u = this.node; for (; u && u.type !== "root";) {
        if (u.type === "tag" && mu(u, At(t), St))
            return new e(u, this.doc);
        u = u.parent;
    } return null; };
    e.prototype.children = function () { return ne.of((this.node.children || []).filter(U), this.doc); };
    e.prototype.child = function (t) { var u = (this.node.children || []).filter(U)[t]; return u ? new e(u, this.doc) : null; };
    e.prototype.childrenSize = function () { return (this.node.children || []).filter(U).length; };
    e.prototype.nextElementSibling = function () { var t = Qt(this.node); return t ? new e(t, this.doc) : null; };
    e.prototype.previousElementSibling = function () { var t = Kt(this.node); return t ? new e(t, this.doc) : null; };
    e.prototype.siblingElements = function () {
        var _this = this;
        return ne.of(st(this.node).filter(function (t) { return t !== _this.node && U(t); }), this.doc);
    };
    e.prototype.elementSiblingIndex = function () { return st(this.node).filter(U).indexOf(this.node); };
    e.prototype.getElementsByTag = function (t) { return this.select(t); };
    e.prototype.getElementsByClass = function (t) { return this.select("." + t); };
    e.prototype.getElementById = function (t) { return this.selectFirst("#" + t); };
    e.prototype.remove = function () { return ce(this.node), this; };
    e.prototype.empty = function () { return this.node.children = [], this; };
    e.prototype.textNodes = function () { return (this.node.children || []).filter(function (t) { return t.type === "text"; }).map(function (t) { return ({ text: function () { return t.data; }, toString: function () { return t.data; } }); }); };
    e.prototype.title = function () { var t = this.selectFirst("title"); return t ? t.text() : ""; };
    e.prototype.body = function () { return this.selectFirst("body") || this; };
    e.prototype.head = function () { return this.selectFirst("head") || this; };
    e.prototype.location = function () { return this.baseUri; };
    return e;
}()), Su = Object.create(Array.prototype), ne = { of: yu, prototype: Su };
function yu(e, t) {
    var e_13, _b;
    var u = [];
    try {
        for (var _c = __values(e || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var a = _d.value;
            u.push(a instanceof ye ? a : new ye(a, t));
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return Object.setPrototypeOf(u, Su), u;
}
var Tr = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (e) { return this[e] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (e) { return ne.of(this[e] ? [this[e]] : [], null); }, text: function () { return this.map(function (e) { return e.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (e) { return e.text(); }).filter(Boolean); }, html: function () {
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
        var t = yu([]), u = new Set;
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
    }, is: function (e) { return this.some(function (t) { return t.is(e); }); }, not: function (e) { return ne.of(this.filter(function (t) { return !t.is(e); }), null); }, parents: function () {
        var e_18, _b;
        var e = yu([]);
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
    }, next: function () { return ne.of(this.map(function (e) { return e.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return ne.of(this.map(function (e) { return e.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (e) { return e.remove(); }), this; }, empty: function () { return this.forEach(function (e) { return e.empty(); }), this; }, removeAttr: function (e) { return this.forEach(function (t) { return t.removeAttr(e); }), this; } };
try {
    for (var _c = __values(Object.keys(Tr)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var e = _d.value;
        Object.defineProperty(Su, e, { value: Tr[e], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
function Et(e, t) { var u = er(String(e == null ? "" : e), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), a = new ye(u, null); a.doc = a, a.__base = t || ""; var n = kr("base[href]", u); return n && n.attribs.href && (a.__base = Nr(a.__base, n.attribs.href)), a; }
function Cr(e, t) { var u = new Set((t || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), a = Et(e), n = function (s) {
    var e_19, _b, e_20, _c;
    try {
        for (var _d = __values((s.children || []).slice()), _f = _d.next(); !_f.done; _f = _d.next()) {
            var h = _f.value;
            if (h.type === "script" || h.type === "style" || h.type === "comment") {
                ce(h);
                continue;
            }
            if (h.type === "tag" && (n(h), !u.has(h.name))) {
                var b = (h.children || []).slice();
                try {
                    for (var b_3 = (e_20 = void 0, __values(b)), b_3_1 = b_3.next(); !b_3_1.done; b_3_1 = b_3.next()) {
                        var g = b_3_1.value;
                        Zt(h, g);
                    }
                }
                catch (e_20_1) { e_20 = { error: e_20_1 }; }
                finally {
                    try {
                        if (b_3_1 && !b_3_1.done && (_c = b_3.return)) _c.call(b_3);
                    }
                    finally { if (e_20) throw e_20.error; }
                }
                ce(h);
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
}; return n(a.node), De(a.node.children, { decodeEntities: !1 }); }
var Tt = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function oi(e) { if (typeof Buffer != "undefined")
    return Buffer.from(e).toString("base64"); var t = ""; for (var u = 0; u < e.length; u++)
    t += String.fromCharCode(e[u]); return btoa(t); }
function Lr(e) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(e) : Uint8Array.from(unescape(encodeURIComponent(e)), function (t) { return t.charCodeAt(0); }); }
function fi(e) { var t = ""; for (var u = 0; u < e.length; u++) {
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
var Au = (function () {
    function Au(t, u) {
        this.status = t.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText || String(this.status), this.url = t.url || u.url, this.headers = t.headers || {}, this._raw = t, this.request = { url: u.url, headers: u.headers || {} };
    }
    Au.prototype.header = function (t) { var u = Object.keys(this.headers).find(function (a) { return a.toLowerCase() === String(t).toLowerCase(); }); return u ? this.headers[u] : ""; };
    Au.prototype.text = function (t) { if (t && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(t).toLowerCase()).decode(this._raw.bytes);
        }
        catch (a) { } var u = this._raw.text == null ? "" : String(this._raw.text); return t || (t = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), t && /^(gbk|gb2312|gb18030)$/i.test(String(t)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(u) && !/[^\x00-\xff]/.test(u) ? fi(u) : u; };
    Au.prototype.string = function (t) { return this.text(t); };
    Au.prototype.html = function (t) { return Et(this.text(t), this.url); };
    Au.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (t) {
        return null;
    } };
    Au.prototype.base64 = function () { return oi(this._raw.bytes || Lr(this.text())); };
    Au.prototype.blob = function () { var t = this; return { size: (this._raw.bytes || Lr(this.text())).length, type: this.header("content-type"), base64: function () { return t.base64(); } }; };
    return Au;
}());
function li(e) {
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
function Ir(e, t) { var u = function (h) { return ({ getItem: function (b) { var g = e.storageGet(h + b); return g == null ? null : g; }, setItem: function (b, g) { return e.storageSet(h + b, g == null ? null : String(g)); }, removeItem: function (b) { return e.storageSet(h + b, null); }, clear: function () { return e.storageClear && e.storageClear(h); } }); }, a = "__cookie__", n = {}; n.Response = { success: function (h, b) { return ({ code: 0, data: h === void 0 ? null : h, data2: b === void 0 ? null : b }); }, error: function (h) { return ({ code: 1, data: h == null ? "" : String(h) }); } }, n.fetch = function (b, g) {
    return __awaiter(this, void 0, void 0, function () { var v, O, A, D, q, O, N, I, O_1; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                g = g || {};
                v = String(b);
                if (g.queries) {
                    O = Object.entries(g.queries).map(function (_b) {
                        var _c = __read(_b, 2), X = _c[0], J = _c[1];
                        return encodeURIComponent(X) + "=" + encodeURIComponent(J);
                    }).join("&");
                    O && (v += (v.includes("?") ? "&" : "?") + O);
                }
                A = Object.assign({ "User-Agent": Tt }, li(g.headers)), D = e.storageGet(a);
                D && !Object.keys(A).some(function (O) { return O.toLowerCase() === "cookie"; }) && (A.Cookie = D);
                q = g.body;
                if (q != null && typeof q == "object") {
                    O = Object.keys(A).find(function (X) { return X.toLowerCase() === "content-type"; });
                    O && /json/i.test(A[O]) ? q = JSON.stringify(q) : (q = Object.entries(q).map(function (_b) {
                        var _c = __read(_b, 2), X = _c[0], J = _c[1];
                        return encodeURIComponent(X) + "=" + encodeURIComponent(J);
                    }).join("&"), O || (A["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                N = { url: v, method: (g.method || (q != null ? "POST" : "GET")).toUpperCase(), headers: A, body: q, timeout: g.timeout };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4, e.request(N)];
            case 2:
                I = _b.sent();
                return [3, 4];
            case 3:
                O_1 = _b.sent();
                I = { status: 0, url: v, headers: {}, text: "", error: String(O_1 && O_1.message || O_1) };
                return [3, 4];
            case 4: return [2, new Au(I, N)];
        }
    }); });
}, n.Http = { get: function (h) { return Dr(n, "GET", h); }, post: function (h) { return Dr(n, "POST", h); } }, n.Html = { parse: function (h, b) { return Et(h, b || ""); }, clean: function (h, b) { return Cr(h, b); } }, n.localStorage = u("ls:"), n.cacheStorage = u("cs:"), n.localConfig = { getItem: function (h) { return e.config(h); } }, n.localCookie = { setCookie: function (h) { e.storageSet(a, String(h).split(";")[0]); }, getCookie: function () { return e.storageGet(a) || ""; } }, n.sleep = function (h) { return new Promise(function (b) { return setTimeout(b, Math.min(Number(h) || 0, 1e4)); }); }; var s = function () {
    var h = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        h[_i] = arguments[_i];
    }
    try {
        e.log && e.log(h.map(function (b) { return typeof b == "string" ? b : JSON.stringify(b); }).join(" "));
    }
    catch (b) { }
}; return n.Log = { log: s }, n.console = { log: s, error: s, warn: s, info: s }, n.Console = n.console, n.log = s, n.UserAgent = { system: function () { return Tt; }, chrome: function () { return Tt; }, android: function () { return Tt; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, n.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (e.name || "host") + ")"); } }, n.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, n.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, n.Elements = ne, n.Element = ye, n.__meta = t, n; }
function Dr(e, t, u) { var a = { method: t, url: u, headers: {}, body: void 0, queries: void 0 }, n = { headers: function (s) { return Object.assign(a.headers, s || {}), n; }, header: function (s, h) { return a.headers[s] = h, n; }, params: function (s) { return a.queries = s, n; }, queries: function (s) { return a.queries = s, n; }, body: function (s) { return a.body = s, n; }, html: function (s) {
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
function Se(e, t) { if (!t)
    return ""; if (t = String(t).trim(), /^data:|^blob:/.test(t))
    return t; if (t.startsWith("//"))
    return "https:" + t; if (typeof URL == "undefined")
    return __abs(e, t); try {
    return new URL(t, e).href;
}
catch (u) {
    return t;
} }
var F = function (e) { return e == null ? "" : String(e); }, di = function (e) { return e.filter(function (t, u) { return t && e.indexOf(t) === u; }); }, kt = (function () {
    function class_1(t) {
        var u = t.meta, a = t.scripts, n = t.host;
        this.meta = u, this.host = n, this.env = t.env || Ir(n, u), this.scripts = a, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return F(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
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
            var a, n, s, h;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        a = this.scripts[t];
                        if (!a)
                            throw new Error("script " + t + " missing");
                        n = function (b) { var g = _this.host.config(b); return g == null ? (_this.meta.configDefaults || {})[b] : g; };
                        return [4, a(this.env, n)];
                    case 1:
                        s = _b.sent();
                        if (typeof s != "function")
                            throw new Error(t + ": execute() not defined");
                        return [4, s.apply(void 0, __spreadArray([], __read(u.map(F)), false))];
                    case 2:
                        h = _b.sent();
                        if (!h)
                            throw new Error(t + ": empty result");
                        if (h.code !== 0)
                            throw new Error(t + ": " + F(h.data || "error"));
                        return [2, h];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (t) { return F(t).replace(/\.js$/, ""); };
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
            var n, s, h, b, g;
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
                        h = _b.sent(), b = F(h.data2);
                        b && (this.tokens[n + "|" + (a + 1)] = b);
                        g = (h.data || []).filter(Boolean).map(function (v) { return ({ name: F(v.name).trim(), link: Se(v.host || _this.base + "/", v.link), cover: Se(v.host || _this.base + "/", v.cover), description: F(v.description), tag: F(v.tag) }); }).filter(function (v) { return v.name && v.link; });
                        return [2, { items: g, hasNext: !!b && g.length > 0 }];
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
                    return [2, u[0] ? this.list(this.scriptFile(u[0].script), F(u[0].input), t) : this.search("", t)];
            }
        }); });
    };
    class_1.prototype.latest = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    u = _b.sent(), a = u[1] || u[0];
                    return [2, a ? this.list(this.scriptFile(a.script), F(a.input), t) : this.search("", t)];
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
                    return [2, { name: F(u.name).trim(), cover: Se(u.host || this.base + "/", u.cover), author: F(u.author).trim(), description: Or(F(u.description)), detail: Or(F(u.detail)), ongoing: u.ongoing !== !1 && u.ongoing !== "false", genres: di(a.map(function (n) { return String(n).trim(); })), url: t, format: F(u.format) }];
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
                        return [4, this.run("toc", F(n))];
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
                    case 13: return [2, u.filter(function (a) { return a && a.url && a.type !== "section"; }).map(function (a, n) { return ({ name: F(a.name).trim() || "#" + (n + 1), url: Se(a.host || _this.base + "/", a.url), pay: !!(a.pay || a.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var u, _b, _c;
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
                    case 6: return [2, (_b, typeof u == "string" && (u = u.split(/[\n,]+/)), (u || []).map(function (a) { return Se(_this.base + "/", typeof a == "string" ? a : a && (a.link || a.url || a.data)); }).filter(Boolean))];
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
                    return [2, { html: F(u.data), title: F(u.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var u, n, a, u_3, u_3_1, n, s, h, h_2, h_2_1, b, s_2, e_23_1;
            var e_23, _b, e_24, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        u = [{ title: "Default", data: t }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", t)];
                    case 1:
                        n = (_d.sent()).data;
                        Array.isArray(n) && n.length && (u = n.map(function (s) { return typeof s == "string" ? { title: "Server", data: s } : { title: F(s.title || s.name || "Server"), data: F(s.data || s.url || s.link) }; }));
                        _d.label = 2;
                    case 2:
                        a = [];
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 10, 11, 12]);
                        u_3 = __values(u), u_3_1 = u_3.next();
                        _d.label = 4;
                    case 4:
                        if (!!u_3_1.done) return [3, 9];
                        n = u_3_1.value;
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 7, , 8]);
                        return [4, this.run("track", n.data)];
                    case 6:
                        s = (_d.sent()).data || {}, h = Array.isArray(s) ? s : [s];
                        try {
                            for (h_2 = (e_24 = void 0, __values(h)), h_2_1 = h_2.next(); !h_2_1.done; h_2_1 = h_2.next()) {
                                b = h_2_1.value;
                                !b || !b.data || b.type !== "webview" && a.push({ url: Se(b.host || this.base + "/", b.data), quality: n.title + (b.quality ? " " + b.quality : ""), headers: b.headers || { Referer: this.base + "/" }, subtitles: (b.subtitles || (b.subtitle ? [{ data: b.subtitle, label: "Sub" }] : [])).map(function (g) { return ({ file: Se(_this.base + "/", g.data || g.file), label: F(g.label || g.language || "Sub") }); }), mimeType: F(b.mimeType) });
                            }
                        }
                        catch (e_24_1) { e_24 = { error: e_24_1 }; }
                        finally {
                            try {
                                if (h_2_1 && !h_2_1.done && (_c = h_2.return)) _c.call(h_2);
                            }
                            finally { if (e_24) throw e_24.error; }
                        }
                        return [3, 8];
                    case 7:
                        s_2 = _d.sent();
                        this.host.log && this.host.log("track " + n.title + ": " + s_2.message);
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
                    case 12: return [2, a];
                }
            });
        });
    };
    return class_1;
}());
function Or(e) {
    return String(e).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
function R(e, t) {
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
var fe = { id: "novelfullnet", name: "NovelFull.Net", source: "https://novelfull.net", type: "novel", locale: "en", nsfw: !1, version: 2, config: { DOMAIN: { title: "Tên miền", subtitle: "Đổi khi trang đổi tên miền", default: "https://novelfull.net", values: ["https://novelfull.net"], mode: "input", format: "text" } }, configDefaults: { DOMAIN: "https://novelfull.net" }, itemType: 2, lnId: "kiritokmn.novelfullnet", lnIcon: "", lnVersion: "1.0.2" }, _r = { home: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, a, n, s, h, b, g, v, A, D, q, N, I, O, X, J, re) {
                    return __awaiter(this, void 0, void 0, function () { var V; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                V = t("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function j() {
                                            return __awaiter(this, void 0, void 0, function () { var r, i; return __generator(this, function (_b) {
                                                r = [];
                                                for (i in c.tabs)
                                                    r.push({ title: i, input: i, script: "browse.js" });
                                                return [2, s.success(r)];
                                            }); });
                                        } var E, c, d, m; return __generator(this, function (_b) {
                                            E = "https://novelfull.net";
                                            try {
                                                V && (E = String(V).replace(/\/+$/, ""));
                                            }
                                            catch (r) { }
                                            c = { tabs: { Latest: "/latest-release-novel[?page={p}]", Hot: "/hot-novel[?page={p}]", Popular: "/most-popular[?page={p}]", Completed: "/completed-novel[?page={p}]" }, search: "/search?keyword={q}[&page={p}]", item: ".con", title: "h3.tit a", link: "h3.tit a@href", cover: ".pic img@img", next: "a[rel=next]", genre: "a[href*='/genre/']", d_title: "h1.tit || h1", d_cover: "meta[property=og:image]@content", d_author: "a[href*='/author/']", d_desc: "meta[property=og:description]@content || meta[name=description]@content", d_genres: ".info a[href*='/genre/']", ch_list: "#idData li a", ch_next: "a#nextBtn[rel=next]", ch_maxPages: 150, content: "#chapter-content", c_title: ".chapter-title || h1" }, d = { img: function (r) { if (!r)
                                                    return ""; for (var i = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], o = 0; o < i.length; o++) {
                                                    var l = r.attr(i[o]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return d.fix(l.trim());
                                                } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? E + r : E + "/" + r) : ""; }, text: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(o < i.length)) return [3, 4];
                                                                return [4, r.select(i[o]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                o++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, _b; return __generator(this, function (_c) {
                                                        switch (_c.label) {
                                                            case 0:
                                                                i = i || {};
                                                                o = { Referer: E + "/" };
                                                                if (i.headers)
                                                                    for (l in i.headers)
                                                                        o[l] = i.headers[l];
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 1:
                                                                f = _c.sent(), p = 0;
                                                                _c.label = 2;
                                                            case 2:
                                                                _b = f && f.status === 429 && p < 3;
                                                                if (!_b) return [3, 4];
                                                                return [4, d.cf(f)];
                                                            case 3:
                                                                _b = !(_c.sent());
                                                                _c.label = 4;
                                                            case 4:
                                                                if (!_b) return [3, 8];
                                                                return [4, A(1500 * (p + 1))];
                                                            case 5:
                                                                _c.sent();
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 6:
                                                                f = _c.sent();
                                                                _c.label = 7;
                                                            case 7:
                                                                p++;
                                                                return [3, 2];
                                                            case 8: return [2, f];
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
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.html(i && i.charset)];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, json: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.json()];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, page: function (r) { var i = parseInt(r || "1", 10); return isNaN(i) || i < 1 ? 1 : i; }, next: function (r, i) { return r ? String(d.page(i) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, r.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, m = { pick: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, x, y, w, T, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                if (!i || !r)
                                                                    return [2, ""];
                                                                o = String(i).split(" || "), l = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(l < o.length)) return [3, 9];
                                                                f = o[l], p = "text", x = f.lastIndexOf("@");
                                                                x > 0 && !/\[[^\]]*@/.test(f.slice(x)) && (p = f.slice(x + 1), f = f.slice(0, x));
                                                                y = f === ":self" ? null : r.select(f), w = f === ":self" ? r : y.size() ? y.first() : null;
                                                                if (!w) return [3, 8];
                                                                if (!(p === "text")) return [3, 3];
                                                                return [4, w.text()];
                                                            case 2:
                                                                _b = _d.sent();
                                                                return [3, 7];
                                                            case 3:
                                                                if (!(p === "html")) return [3, 5];
                                                                return [4, w.html()];
                                                            case 4:
                                                                _c = _d.sent();
                                                                return [3, 6];
                                                            case 5:
                                                                _c = p === "img" ? d.img(w.is("img") ? w : w.select("img").first()) : p === "own" ? w.ownText() : w.attr(p);
                                                                _d.label = 6;
                                                            case 6:
                                                                _b = _c;
                                                                _d.label = 7;
                                                            case 7:
                                                                T = _b;
                                                                if (T)
                                                                    return [2, String(T).trim()];
                                                                _d.label = 8;
                                                            case 8:
                                                                l++;
                                                                return [3, 1];
                                                            case 9: return [2, ""];
                                                        }
                                                    }); });
                                                }, url: function (r, i, o) { var l = d.page(i), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, x) { return l > 1 ? x : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(o || "")).replace(/\{base\}/g, E), d.fix(f); }, items: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, x, y, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    i = r.select(c.item), o = [], l = {}, f = 0;
                                                                    _g.label = 1;
                                                                case 1:
                                                                    if (!(f < i.size())) return [3, 9];
                                                                    return [4, i.get(f)];
                                                                case 2:
                                                                    p = _g.sent();
                                                                    return [4, m.pick(p, c.link || "a@href")];
                                                                case 3:
                                                                    x = _g.sent();
                                                                    if (!!(!x || l[x] || /^javascript|#$/.test(x))) return [3, 8];
                                                                    return [4, m.pick(p, c.title || "h3 || h2 || a@title || img@alt")];
                                                                case 4:
                                                                    y = _g.sent();
                                                                    _b = y;
                                                                    if (!_b) return [3, 7];
                                                                    l[x] = 1;
                                                                    _d = (_c = o).push;
                                                                    _f = { name: y, link: d.fix(x) };
                                                                    return [4, m.pick(p, c.cover || "img@img")];
                                                                case 5:
                                                                    _f.cover = _g.sent();
                                                                    return [4, m.pick(p, c.desc || "")];
                                                                case 6:
                                                                    _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = E, _f)]));
                                                                    _g.label = 7;
                                                                case 7:
                                                                    _b;
                                                                    _g.label = 8;
                                                                case 8:
                                                                    f++;
                                                                    return [3, 1];
                                                                case 9: return [2, o];
                                                            }
                                                        });
                                                    });
                                                }, listPage: function (r, i, o) {
                                                    return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, d.html(m.url(r, i, o), c.req)];
                                                            case 1:
                                                                l = _b.sent();
                                                                return [4, m.items(l)];
                                                            case 2:
                                                                f = _b.sent(), p = c.next ? l.select(c.next).size() > 0 : f.length >= (c.pageSize || 10);
                                                                return [2, s.success(f, d.next(p && f.length > 0, i))];
                                                        }
                                                    }); });
                                                }, browse: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = c.tabs && c.tabs[r] || r;
                                                                return [4, m.listPage(o, i, "")];
                                                            case 1: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, search: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!d.isUrl(r)) return [3, 2];
                                                                o = d.fix(r);
                                                                return [4, m.listPage(o + (o.indexOf("?") > 0 ? "&" : "?") + (c.pageParam || "page") + "={p}", i, "")];
                                                            case 1: return [2, _b.sent()];
                                                            case 2: return [4, m.listPage(c.search, i, r)];
                                                            case 3: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, genre: function () {
                                                    return __awaiter(this, void 0, void 0, function () { var r, i; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.genre)
                                                                    return [2, s.success([])];
                                                                return [4, d.html(d.fix(c.genrePage || "/"))];
                                                            case 1:
                                                                r = _b.sent();
                                                                return [4, R(r.select(c.genre), function (o) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0:
                                                                                        _b = {};
                                                                                        return [4, o.text()];
                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(o.attr("href")), _b.script = "search.js", _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                i = _b.sent();
                                                                return [2, s.success(i.filter(function (o) { return o.title; }))];
                                                        }
                                                    }); });
                                                }, detail: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, _b, _c, _d, _f, _g;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0: return [4, d.html(r, c.req)];
                                                                case 1:
                                                                    i = _j.sent();
                                                                    if (!c.d_genres) return [3, 3];
                                                                    return [4, R(i.select(c.d_genres), function (f) {
                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                var _b;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0:
                                                                                            _b = {};
                                                                                            return [4, f.text()];
                                                                                        case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })];
                                                                case 2:
                                                                    _b = _j.sent();
                                                                    return [3, 4];
                                                                case 3:
                                                                    _b = [];
                                                                    _j.label = 4;
                                                                case 4:
                                                                    o = _b;
                                                                    return [4, m.pick(i, c.d_status)];
                                                                case 5:
                                                                    l = _j.sent();
                                                                    _d = (_c = s).success;
                                                                    _h = {};
                                                                    return [4, m.pick(i, c.d_title || "h1")];
                                                                case 6:
                                                                    _h.name = _j.sent();
                                                                    _g = (_f = d).fix;
                                                                    return [4, m.pick(i, c.d_cover || "meta[property=og:image]@content")];
                                                                case 7:
                                                                    _h.cover = _g.apply(_f, [_j.sent()]);
                                                                    return [4, m.pick(i, c.d_author)];
                                                                case 8:
                                                                    _h.author = _j.sent();
                                                                    return [4, m.pick(i, (c.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = o, _h.host = E, _h)])];
                                                            }
                                                        });
                                                    });
                                                }, toc: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, _b, x, y, w, T, k, _c, _d, _f, _g, M, B, _h;
                                                        var _j;
                                                        return __generator(this, function (_k) {
                                                            switch (_k.label) {
                                                                case 0:
                                                                    if (c.single)
                                                                        return [2, s.success([{ name: c.single === !0 ? "Xem / Đọc" : c.single, url: r, host: E }])];
                                                                    i = [r], o = [], l = {};
                                                                    return [4, d.html(c.ch_rewrite ? r.replace(new RegExp(c.ch_rewrite[0]), c.ch_rewrite[1]) : r, c.req)];
                                                                case 1:
                                                                    f = _k.sent();
                                                                    if (!c.ch_url) return [3, 5];
                                                                    return [4, m.pick(f, c.ch_url)];
                                                                case 2:
                                                                    p = _k.sent();
                                                                    _b = p;
                                                                    if (!_b) return [3, 4];
                                                                    return [4, d.html(d.fix(p), c.req)];
                                                                case 3:
                                                                    _b = (f = _k.sent());
                                                                    _k.label = 4;
                                                                case 4:
                                                                    _b;
                                                                    _k.label = 5;
                                                                case 5:
                                                                    x = 0;
                                                                    _k.label = 6;
                                                                case 6:
                                                                    if (!(x < (c.ch_maxPages || 60))) return [3, 20];
                                                                    y = f.select(c.ch_list), w = 0;
                                                                    _k.label = 7;
                                                                case 7:
                                                                    if (!(w < y.size())) return [3, 15];
                                                                    return [4, y.get(w)];
                                                                case 8:
                                                                    T = _k.sent(), k = T.attr("href") || T.attr("data-href");
                                                                    _c = !k || k === "#" || l[k];
                                                                    if (_c) return [3, 13];
                                                                    l[k] = 1;
                                                                    _f = (_d = o).push;
                                                                    _j = {};
                                                                    if (!c.ch_name) return [3, 10];
                                                                    return [4, m.pick(T, c.ch_name)];
                                                                case 9:
                                                                    _g = _k.sent();
                                                                    return [3, 12];
                                                                case 10: return [4, T.text()];
                                                                case 11:
                                                                    _g = _k.sent();
                                                                    _k.label = 12;
                                                                case 12:
                                                                    _c = (_f.apply(_d, [(_j.name = (_g) || T.attr("title"), _j.url = d.fix(k), _j.host = E, _j)]));
                                                                    _k.label = 13;
                                                                case 13:
                                                                    _c;
                                                                    _k.label = 14;
                                                                case 14:
                                                                    w++;
                                                                    return [3, 7];
                                                                case 15:
                                                                    M = c.ch_next ? f.select(c.ch_next).first() : null;
                                                                    if (!M || !M.attr("href"))
                                                                        return [3, 20];
                                                                    B = d.fix(M.attr("href"));
                                                                    if (i.indexOf(B) >= 0)
                                                                        return [3, 20];
                                                                    i.push(B);
                                                                    _h = c.ch_delay;
                                                                    if (!_h) return [3, 17];
                                                                    return [4, A(c.ch_delay)];
                                                                case 16:
                                                                    _h = (_k.sent());
                                                                    _k.label = 17;
                                                                case 17:
                                                                    _h;
                                                                    return [4, d.html(B, c.req)];
                                                                case 18:
                                                                    f = _k.sent();
                                                                    _k.label = 19;
                                                                case 19:
                                                                    x++;
                                                                    return [3, 6];
                                                                case 20: return [2, (c.ch_reverse && o.reverse(), s.success(o))];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, l, f, p, x, y, w, _b, _c, T, k; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                i = [], o = [r], l = r, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < (c.pages_max || 40))) return [3, 8];
                                                                return [4, d.html(l, c.req)];
                                                            case 2:
                                                                p = _d.sent(), x = p.select(c.pages || ".page-chapter img, .reading-content img, .chapter-content img"), y = 0;
                                                                _d.label = 3;
                                                            case 3:
                                                                if (!(y < x.size())) return [3, 6];
                                                                _c = (_b = d).img;
                                                                return [4, x.get(y)];
                                                            case 4:
                                                                w = _c.apply(_b, [_d.sent()]);
                                                                w && i.indexOf(w) < 0 && i.push(w);
                                                                _d.label = 5;
                                                            case 5:
                                                                y++;
                                                                return [3, 3];
                                                            case 6:
                                                                if (!c.pages_next)
                                                                    return [3, 8];
                                                                T = p.select(c.pages_next).first();
                                                                if (!T)
                                                                    return [3, 8];
                                                                k = d.fix(T.attr("href"));
                                                                if (!k || o.indexOf(k) >= 0)
                                                                    return [3, 8];
                                                                o.push(k), l = k;
                                                                _d.label = 7;
                                                            case 7:
                                                                f++;
                                                                return [3, 1];
                                                            case 8: return [2, s.success(i)];
                                                        }
                                                    }); });
                                                }, text: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                        switch (_g.label) {
                                                            case 0: return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _g.sent(), o = i.select(c.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                if (!o) return [3, 4];
                                                                _d = (_c = s).success;
                                                                return [4, d.cleanContent(o)];
                                                            case 2:
                                                                _f = [_g.sent()];
                                                                return [4, m.pick(i, c.c_title || "h1 || h2")];
                                                            case 3:
                                                                _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                return [3, 5];
                                                            case 4:
                                                                _b = s.error("Không tìm thấy nội dung");
                                                                _g.label = 5;
                                                            case 5: return [2, _b];
                                                        }
                                                    }); });
                                                }, servers: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.servers)
                                                                    return [2, s.success([{ title: "Server", data: r }])];
                                                                return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _b.sent();
                                                                return [4, R(i.select(c.servers), function (l) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var f;
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0: return [4, m.pick(l, c.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                    case 1:
                                                                                        f = _c.sent();
                                                                                        _b = {};
                                                                                        return [4, l.text()];
                                                                                    case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                o = (_b.sent()).filter(function (l) { return l.data; });
                                                                return [2, s.success(o.length ? o : [{ title: "Server", data: r }])];
                                                        }
                                                    }); });
                                                }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var i = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return i ? i[0] : ""; }, track: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, x, y, w; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (i = i || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                    return [2, s.success({ type: "native", data: r, headers: { Referer: E + "/" } })];
                                                                return [4, d.get(r)];
                                                            case 1:
                                                                o = _b.sent();
                                                                return [4, o.text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (!(c.video && !i)) return [3, 4];
                                                                return [4, m.pick(n.parse(l, r), c.video)];
                                                            case 3:
                                                                f = _b.sent();
                                                                if (f)
                                                                    return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: E + "/" } })];
                                                                _b.label = 4;
                                                            case 4:
                                                                p = m.sniff(l);
                                                                if (p)
                                                                    return [2, s.success({ type: "native", data: p, headers: { Referer: i ? r : E + "/" } })];
                                                                x = n.parse(l, r), y = x.select(c.iframe || "iframe[src], iframe[data-src]").first();
                                                                if (!(y && i < 2)) return [3, 6];
                                                                w = d.fix(y.attr("src") || y.attr("data-src"));
                                                                if (!w) return [3, 6];
                                                                return [4, m.track(w, i + 1)];
                                                            case 5: return [2, _b.sent()];
                                                            case 6: return [2, s.success({ type: "webview", data: r })];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof j == "function" ? j : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, search: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, a, n, s, h, b, g, v, A, D, q, N, I, O, X, J, re) {
                    return __awaiter(this, void 0, void 0, function () { var V; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                V = t("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function j(r, i) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, m.search(r, i)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var E, c, d, m; return __generator(this, function (_b) {
                                            E = "https://novelfull.net";
                                            try {
                                                V && (E = String(V).replace(/\/+$/, ""));
                                            }
                                            catch (r) { }
                                            c = { tabs: { Latest: "/latest-release-novel[?page={p}]", Hot: "/hot-novel[?page={p}]", Popular: "/most-popular[?page={p}]", Completed: "/completed-novel[?page={p}]" }, search: "/search?keyword={q}[&page={p}]", item: ".con", title: "h3.tit a", link: "h3.tit a@href", cover: ".pic img@img", next: "a[rel=next]", genre: "a[href*='/genre/']", d_title: "h1.tit || h1", d_cover: "meta[property=og:image]@content", d_author: "a[href*='/author/']", d_desc: "meta[property=og:description]@content || meta[name=description]@content", d_genres: ".info a[href*='/genre/']", ch_list: "#idData li a", ch_next: "a#nextBtn[rel=next]", ch_maxPages: 150, content: "#chapter-content", c_title: ".chapter-title || h1" }, d = { img: function (r) { if (!r)
                                                    return ""; for (var i = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], o = 0; o < i.length; o++) {
                                                    var l = r.attr(i[o]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return d.fix(l.trim());
                                                } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? E + r : E + "/" + r) : ""; }, text: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(o < i.length)) return [3, 4];
                                                                return [4, r.select(i[o]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                o++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, _b; return __generator(this, function (_c) {
                                                        switch (_c.label) {
                                                            case 0:
                                                                i = i || {};
                                                                o = { Referer: E + "/" };
                                                                if (i.headers)
                                                                    for (l in i.headers)
                                                                        o[l] = i.headers[l];
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 1:
                                                                f = _c.sent(), p = 0;
                                                                _c.label = 2;
                                                            case 2:
                                                                _b = f && f.status === 429 && p < 3;
                                                                if (!_b) return [3, 4];
                                                                return [4, d.cf(f)];
                                                            case 3:
                                                                _b = !(_c.sent());
                                                                _c.label = 4;
                                                            case 4:
                                                                if (!_b) return [3, 8];
                                                                return [4, A(1500 * (p + 1))];
                                                            case 5:
                                                                _c.sent();
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 6:
                                                                f = _c.sent();
                                                                _c.label = 7;
                                                            case 7:
                                                                p++;
                                                                return [3, 2];
                                                            case 8: return [2, f];
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
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.html(i && i.charset)];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, json: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.json()];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, page: function (r) { var i = parseInt(r || "1", 10); return isNaN(i) || i < 1 ? 1 : i; }, next: function (r, i) { return r ? String(d.page(i) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, r.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, m = { pick: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, x, y, w, T, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                if (!i || !r)
                                                                    return [2, ""];
                                                                o = String(i).split(" || "), l = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(l < o.length)) return [3, 9];
                                                                f = o[l], p = "text", x = f.lastIndexOf("@");
                                                                x > 0 && !/\[[^\]]*@/.test(f.slice(x)) && (p = f.slice(x + 1), f = f.slice(0, x));
                                                                y = f === ":self" ? null : r.select(f), w = f === ":self" ? r : y.size() ? y.first() : null;
                                                                if (!w) return [3, 8];
                                                                if (!(p === "text")) return [3, 3];
                                                                return [4, w.text()];
                                                            case 2:
                                                                _b = _d.sent();
                                                                return [3, 7];
                                                            case 3:
                                                                if (!(p === "html")) return [3, 5];
                                                                return [4, w.html()];
                                                            case 4:
                                                                _c = _d.sent();
                                                                return [3, 6];
                                                            case 5:
                                                                _c = p === "img" ? d.img(w.is("img") ? w : w.select("img").first()) : p === "own" ? w.ownText() : w.attr(p);
                                                                _d.label = 6;
                                                            case 6:
                                                                _b = _c;
                                                                _d.label = 7;
                                                            case 7:
                                                                T = _b;
                                                                if (T)
                                                                    return [2, String(T).trim()];
                                                                _d.label = 8;
                                                            case 8:
                                                                l++;
                                                                return [3, 1];
                                                            case 9: return [2, ""];
                                                        }
                                                    }); });
                                                }, url: function (r, i, o) { var l = d.page(i), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, x) { return l > 1 ? x : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(o || "")).replace(/\{base\}/g, E), d.fix(f); }, items: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, x, y, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    i = r.select(c.item), o = [], l = {}, f = 0;
                                                                    _g.label = 1;
                                                                case 1:
                                                                    if (!(f < i.size())) return [3, 9];
                                                                    return [4, i.get(f)];
                                                                case 2:
                                                                    p = _g.sent();
                                                                    return [4, m.pick(p, c.link || "a@href")];
                                                                case 3:
                                                                    x = _g.sent();
                                                                    if (!!(!x || l[x] || /^javascript|#$/.test(x))) return [3, 8];
                                                                    return [4, m.pick(p, c.title || "h3 || h2 || a@title || img@alt")];
                                                                case 4:
                                                                    y = _g.sent();
                                                                    _b = y;
                                                                    if (!_b) return [3, 7];
                                                                    l[x] = 1;
                                                                    _d = (_c = o).push;
                                                                    _f = { name: y, link: d.fix(x) };
                                                                    return [4, m.pick(p, c.cover || "img@img")];
                                                                case 5:
                                                                    _f.cover = _g.sent();
                                                                    return [4, m.pick(p, c.desc || "")];
                                                                case 6:
                                                                    _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = E, _f)]));
                                                                    _g.label = 7;
                                                                case 7:
                                                                    _b;
                                                                    _g.label = 8;
                                                                case 8:
                                                                    f++;
                                                                    return [3, 1];
                                                                case 9: return [2, o];
                                                            }
                                                        });
                                                    });
                                                }, listPage: function (r, i, o) {
                                                    return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, d.html(m.url(r, i, o), c.req)];
                                                            case 1:
                                                                l = _b.sent();
                                                                return [4, m.items(l)];
                                                            case 2:
                                                                f = _b.sent(), p = c.next ? l.select(c.next).size() > 0 : f.length >= (c.pageSize || 10);
                                                                return [2, s.success(f, d.next(p && f.length > 0, i))];
                                                        }
                                                    }); });
                                                }, browse: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = c.tabs && c.tabs[r] || r;
                                                                return [4, m.listPage(o, i, "")];
                                                            case 1: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, search: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!d.isUrl(r)) return [3, 2];
                                                                o = d.fix(r);
                                                                return [4, m.listPage(o + (o.indexOf("?") > 0 ? "&" : "?") + (c.pageParam || "page") + "={p}", i, "")];
                                                            case 1: return [2, _b.sent()];
                                                            case 2: return [4, m.listPage(c.search, i, r)];
                                                            case 3: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, genre: function () {
                                                    return __awaiter(this, void 0, void 0, function () { var r, i; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.genre)
                                                                    return [2, s.success([])];
                                                                return [4, d.html(d.fix(c.genrePage || "/"))];
                                                            case 1:
                                                                r = _b.sent();
                                                                return [4, R(r.select(c.genre), function (o) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0:
                                                                                        _b = {};
                                                                                        return [4, o.text()];
                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(o.attr("href")), _b.script = "search.js", _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                i = _b.sent();
                                                                return [2, s.success(i.filter(function (o) { return o.title; }))];
                                                        }
                                                    }); });
                                                }, detail: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, _b, _c, _d, _f, _g;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0: return [4, d.html(r, c.req)];
                                                                case 1:
                                                                    i = _j.sent();
                                                                    if (!c.d_genres) return [3, 3];
                                                                    return [4, R(i.select(c.d_genres), function (f) {
                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                var _b;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0:
                                                                                            _b = {};
                                                                                            return [4, f.text()];
                                                                                        case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })];
                                                                case 2:
                                                                    _b = _j.sent();
                                                                    return [3, 4];
                                                                case 3:
                                                                    _b = [];
                                                                    _j.label = 4;
                                                                case 4:
                                                                    o = _b;
                                                                    return [4, m.pick(i, c.d_status)];
                                                                case 5:
                                                                    l = _j.sent();
                                                                    _d = (_c = s).success;
                                                                    _h = {};
                                                                    return [4, m.pick(i, c.d_title || "h1")];
                                                                case 6:
                                                                    _h.name = _j.sent();
                                                                    _g = (_f = d).fix;
                                                                    return [4, m.pick(i, c.d_cover || "meta[property=og:image]@content")];
                                                                case 7:
                                                                    _h.cover = _g.apply(_f, [_j.sent()]);
                                                                    return [4, m.pick(i, c.d_author)];
                                                                case 8:
                                                                    _h.author = _j.sent();
                                                                    return [4, m.pick(i, (c.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = o, _h.host = E, _h)])];
                                                            }
                                                        });
                                                    });
                                                }, toc: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, _b, x, y, w, T, k, _c, _d, _f, _g, M, B, _h;
                                                        var _j;
                                                        return __generator(this, function (_k) {
                                                            switch (_k.label) {
                                                                case 0:
                                                                    if (c.single)
                                                                        return [2, s.success([{ name: c.single === !0 ? "Xem / Đọc" : c.single, url: r, host: E }])];
                                                                    i = [r], o = [], l = {};
                                                                    return [4, d.html(c.ch_rewrite ? r.replace(new RegExp(c.ch_rewrite[0]), c.ch_rewrite[1]) : r, c.req)];
                                                                case 1:
                                                                    f = _k.sent();
                                                                    if (!c.ch_url) return [3, 5];
                                                                    return [4, m.pick(f, c.ch_url)];
                                                                case 2:
                                                                    p = _k.sent();
                                                                    _b = p;
                                                                    if (!_b) return [3, 4];
                                                                    return [4, d.html(d.fix(p), c.req)];
                                                                case 3:
                                                                    _b = (f = _k.sent());
                                                                    _k.label = 4;
                                                                case 4:
                                                                    _b;
                                                                    _k.label = 5;
                                                                case 5:
                                                                    x = 0;
                                                                    _k.label = 6;
                                                                case 6:
                                                                    if (!(x < (c.ch_maxPages || 60))) return [3, 20];
                                                                    y = f.select(c.ch_list), w = 0;
                                                                    _k.label = 7;
                                                                case 7:
                                                                    if (!(w < y.size())) return [3, 15];
                                                                    return [4, y.get(w)];
                                                                case 8:
                                                                    T = _k.sent(), k = T.attr("href") || T.attr("data-href");
                                                                    _c = !k || k === "#" || l[k];
                                                                    if (_c) return [3, 13];
                                                                    l[k] = 1;
                                                                    _f = (_d = o).push;
                                                                    _j = {};
                                                                    if (!c.ch_name) return [3, 10];
                                                                    return [4, m.pick(T, c.ch_name)];
                                                                case 9:
                                                                    _g = _k.sent();
                                                                    return [3, 12];
                                                                case 10: return [4, T.text()];
                                                                case 11:
                                                                    _g = _k.sent();
                                                                    _k.label = 12;
                                                                case 12:
                                                                    _c = (_f.apply(_d, [(_j.name = (_g) || T.attr("title"), _j.url = d.fix(k), _j.host = E, _j)]));
                                                                    _k.label = 13;
                                                                case 13:
                                                                    _c;
                                                                    _k.label = 14;
                                                                case 14:
                                                                    w++;
                                                                    return [3, 7];
                                                                case 15:
                                                                    M = c.ch_next ? f.select(c.ch_next).first() : null;
                                                                    if (!M || !M.attr("href"))
                                                                        return [3, 20];
                                                                    B = d.fix(M.attr("href"));
                                                                    if (i.indexOf(B) >= 0)
                                                                        return [3, 20];
                                                                    i.push(B);
                                                                    _h = c.ch_delay;
                                                                    if (!_h) return [3, 17];
                                                                    return [4, A(c.ch_delay)];
                                                                case 16:
                                                                    _h = (_k.sent());
                                                                    _k.label = 17;
                                                                case 17:
                                                                    _h;
                                                                    return [4, d.html(B, c.req)];
                                                                case 18:
                                                                    f = _k.sent();
                                                                    _k.label = 19;
                                                                case 19:
                                                                    x++;
                                                                    return [3, 6];
                                                                case 20: return [2, (c.ch_reverse && o.reverse(), s.success(o))];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, l, f, p, x, y, w, _b, _c, T, k; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                i = [], o = [r], l = r, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < (c.pages_max || 40))) return [3, 8];
                                                                return [4, d.html(l, c.req)];
                                                            case 2:
                                                                p = _d.sent(), x = p.select(c.pages || ".page-chapter img, .reading-content img, .chapter-content img"), y = 0;
                                                                _d.label = 3;
                                                            case 3:
                                                                if (!(y < x.size())) return [3, 6];
                                                                _c = (_b = d).img;
                                                                return [4, x.get(y)];
                                                            case 4:
                                                                w = _c.apply(_b, [_d.sent()]);
                                                                w && i.indexOf(w) < 0 && i.push(w);
                                                                _d.label = 5;
                                                            case 5:
                                                                y++;
                                                                return [3, 3];
                                                            case 6:
                                                                if (!c.pages_next)
                                                                    return [3, 8];
                                                                T = p.select(c.pages_next).first();
                                                                if (!T)
                                                                    return [3, 8];
                                                                k = d.fix(T.attr("href"));
                                                                if (!k || o.indexOf(k) >= 0)
                                                                    return [3, 8];
                                                                o.push(k), l = k;
                                                                _d.label = 7;
                                                            case 7:
                                                                f++;
                                                                return [3, 1];
                                                            case 8: return [2, s.success(i)];
                                                        }
                                                    }); });
                                                }, text: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                        switch (_g.label) {
                                                            case 0: return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _g.sent(), o = i.select(c.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                if (!o) return [3, 4];
                                                                _d = (_c = s).success;
                                                                return [4, d.cleanContent(o)];
                                                            case 2:
                                                                _f = [_g.sent()];
                                                                return [4, m.pick(i, c.c_title || "h1 || h2")];
                                                            case 3:
                                                                _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                return [3, 5];
                                                            case 4:
                                                                _b = s.error("Không tìm thấy nội dung");
                                                                _g.label = 5;
                                                            case 5: return [2, _b];
                                                        }
                                                    }); });
                                                }, servers: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.servers)
                                                                    return [2, s.success([{ title: "Server", data: r }])];
                                                                return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _b.sent();
                                                                return [4, R(i.select(c.servers), function (l) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var f;
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0: return [4, m.pick(l, c.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                    case 1:
                                                                                        f = _c.sent();
                                                                                        _b = {};
                                                                                        return [4, l.text()];
                                                                                    case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                o = (_b.sent()).filter(function (l) { return l.data; });
                                                                return [2, s.success(o.length ? o : [{ title: "Server", data: r }])];
                                                        }
                                                    }); });
                                                }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var i = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return i ? i[0] : ""; }, track: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, x, y, w; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (i = i || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                    return [2, s.success({ type: "native", data: r, headers: { Referer: E + "/" } })];
                                                                return [4, d.get(r)];
                                                            case 1:
                                                                o = _b.sent();
                                                                return [4, o.text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (!(c.video && !i)) return [3, 4];
                                                                return [4, m.pick(n.parse(l, r), c.video)];
                                                            case 3:
                                                                f = _b.sent();
                                                                if (f)
                                                                    return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: E + "/" } })];
                                                                _b.label = 4;
                                                            case 4:
                                                                p = m.sniff(l);
                                                                if (p)
                                                                    return [2, s.success({ type: "native", data: p, headers: { Referer: i ? r : E + "/" } })];
                                                                x = n.parse(l, r), y = x.select(c.iframe || "iframe[src], iframe[data-src]").first();
                                                                if (!(y && i < 2)) return [3, 6];
                                                                w = d.fix(y.attr("src") || y.attr("data-src"));
                                                                if (!w) return [3, 6];
                                                                return [4, m.track(w, i + 1)];
                                                            case 5: return [2, _b.sent()];
                                                            case 6: return [2, s.success({ type: "webview", data: r })];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof j == "function" ? j : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, detail: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, a, n, s, h, b, g, v, A, D, q, N, I, O, X, J, re) {
                    return __awaiter(this, void 0, void 0, function () { var V; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                V = t("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function j(r) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, m.detail(r)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var E, c, d, m; return __generator(this, function (_b) {
                                            E = "https://novelfull.net";
                                            try {
                                                V && (E = String(V).replace(/\/+$/, ""));
                                            }
                                            catch (r) { }
                                            c = { tabs: { Latest: "/latest-release-novel[?page={p}]", Hot: "/hot-novel[?page={p}]", Popular: "/most-popular[?page={p}]", Completed: "/completed-novel[?page={p}]" }, search: "/search?keyword={q}[&page={p}]", item: ".con", title: "h3.tit a", link: "h3.tit a@href", cover: ".pic img@img", next: "a[rel=next]", genre: "a[href*='/genre/']", d_title: "h1.tit || h1", d_cover: "meta[property=og:image]@content", d_author: "a[href*='/author/']", d_desc: "meta[property=og:description]@content || meta[name=description]@content", d_genres: ".info a[href*='/genre/']", ch_list: "#idData li a", ch_next: "a#nextBtn[rel=next]", ch_maxPages: 150, content: "#chapter-content", c_title: ".chapter-title || h1" }, d = { img: function (r) { if (!r)
                                                    return ""; for (var i = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], o = 0; o < i.length; o++) {
                                                    var l = r.attr(i[o]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return d.fix(l.trim());
                                                } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? E + r : E + "/" + r) : ""; }, text: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(o < i.length)) return [3, 4];
                                                                return [4, r.select(i[o]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                o++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, _b; return __generator(this, function (_c) {
                                                        switch (_c.label) {
                                                            case 0:
                                                                i = i || {};
                                                                o = { Referer: E + "/" };
                                                                if (i.headers)
                                                                    for (l in i.headers)
                                                                        o[l] = i.headers[l];
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 1:
                                                                f = _c.sent(), p = 0;
                                                                _c.label = 2;
                                                            case 2:
                                                                _b = f && f.status === 429 && p < 3;
                                                                if (!_b) return [3, 4];
                                                                return [4, d.cf(f)];
                                                            case 3:
                                                                _b = !(_c.sent());
                                                                _c.label = 4;
                                                            case 4:
                                                                if (!_b) return [3, 8];
                                                                return [4, A(1500 * (p + 1))];
                                                            case 5:
                                                                _c.sent();
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 6:
                                                                f = _c.sent();
                                                                _c.label = 7;
                                                            case 7:
                                                                p++;
                                                                return [3, 2];
                                                            case 8: return [2, f];
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
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.html(i && i.charset)];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, json: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.json()];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, page: function (r) { var i = parseInt(r || "1", 10); return isNaN(i) || i < 1 ? 1 : i; }, next: function (r, i) { return r ? String(d.page(i) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, r.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, m = { pick: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, x, y, w, T, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                if (!i || !r)
                                                                    return [2, ""];
                                                                o = String(i).split(" || "), l = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(l < o.length)) return [3, 9];
                                                                f = o[l], p = "text", x = f.lastIndexOf("@");
                                                                x > 0 && !/\[[^\]]*@/.test(f.slice(x)) && (p = f.slice(x + 1), f = f.slice(0, x));
                                                                y = f === ":self" ? null : r.select(f), w = f === ":self" ? r : y.size() ? y.first() : null;
                                                                if (!w) return [3, 8];
                                                                if (!(p === "text")) return [3, 3];
                                                                return [4, w.text()];
                                                            case 2:
                                                                _b = _d.sent();
                                                                return [3, 7];
                                                            case 3:
                                                                if (!(p === "html")) return [3, 5];
                                                                return [4, w.html()];
                                                            case 4:
                                                                _c = _d.sent();
                                                                return [3, 6];
                                                            case 5:
                                                                _c = p === "img" ? d.img(w.is("img") ? w : w.select("img").first()) : p === "own" ? w.ownText() : w.attr(p);
                                                                _d.label = 6;
                                                            case 6:
                                                                _b = _c;
                                                                _d.label = 7;
                                                            case 7:
                                                                T = _b;
                                                                if (T)
                                                                    return [2, String(T).trim()];
                                                                _d.label = 8;
                                                            case 8:
                                                                l++;
                                                                return [3, 1];
                                                            case 9: return [2, ""];
                                                        }
                                                    }); });
                                                }, url: function (r, i, o) { var l = d.page(i), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, x) { return l > 1 ? x : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(o || "")).replace(/\{base\}/g, E), d.fix(f); }, items: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, x, y, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    i = r.select(c.item), o = [], l = {}, f = 0;
                                                                    _g.label = 1;
                                                                case 1:
                                                                    if (!(f < i.size())) return [3, 9];
                                                                    return [4, i.get(f)];
                                                                case 2:
                                                                    p = _g.sent();
                                                                    return [4, m.pick(p, c.link || "a@href")];
                                                                case 3:
                                                                    x = _g.sent();
                                                                    if (!!(!x || l[x] || /^javascript|#$/.test(x))) return [3, 8];
                                                                    return [4, m.pick(p, c.title || "h3 || h2 || a@title || img@alt")];
                                                                case 4:
                                                                    y = _g.sent();
                                                                    _b = y;
                                                                    if (!_b) return [3, 7];
                                                                    l[x] = 1;
                                                                    _d = (_c = o).push;
                                                                    _f = { name: y, link: d.fix(x) };
                                                                    return [4, m.pick(p, c.cover || "img@img")];
                                                                case 5:
                                                                    _f.cover = _g.sent();
                                                                    return [4, m.pick(p, c.desc || "")];
                                                                case 6:
                                                                    _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = E, _f)]));
                                                                    _g.label = 7;
                                                                case 7:
                                                                    _b;
                                                                    _g.label = 8;
                                                                case 8:
                                                                    f++;
                                                                    return [3, 1];
                                                                case 9: return [2, o];
                                                            }
                                                        });
                                                    });
                                                }, listPage: function (r, i, o) {
                                                    return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, d.html(m.url(r, i, o), c.req)];
                                                            case 1:
                                                                l = _b.sent();
                                                                return [4, m.items(l)];
                                                            case 2:
                                                                f = _b.sent(), p = c.next ? l.select(c.next).size() > 0 : f.length >= (c.pageSize || 10);
                                                                return [2, s.success(f, d.next(p && f.length > 0, i))];
                                                        }
                                                    }); });
                                                }, browse: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = c.tabs && c.tabs[r] || r;
                                                                return [4, m.listPage(o, i, "")];
                                                            case 1: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, search: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!d.isUrl(r)) return [3, 2];
                                                                o = d.fix(r);
                                                                return [4, m.listPage(o + (o.indexOf("?") > 0 ? "&" : "?") + (c.pageParam || "page") + "={p}", i, "")];
                                                            case 1: return [2, _b.sent()];
                                                            case 2: return [4, m.listPage(c.search, i, r)];
                                                            case 3: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, genre: function () {
                                                    return __awaiter(this, void 0, void 0, function () { var r, i; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.genre)
                                                                    return [2, s.success([])];
                                                                return [4, d.html(d.fix(c.genrePage || "/"))];
                                                            case 1:
                                                                r = _b.sent();
                                                                return [4, R(r.select(c.genre), function (o) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0:
                                                                                        _b = {};
                                                                                        return [4, o.text()];
                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(o.attr("href")), _b.script = "search.js", _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                i = _b.sent();
                                                                return [2, s.success(i.filter(function (o) { return o.title; }))];
                                                        }
                                                    }); });
                                                }, detail: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, _b, _c, _d, _f, _g;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0: return [4, d.html(r, c.req)];
                                                                case 1:
                                                                    i = _j.sent();
                                                                    if (!c.d_genres) return [3, 3];
                                                                    return [4, R(i.select(c.d_genres), function (f) {
                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                var _b;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0:
                                                                                            _b = {};
                                                                                            return [4, f.text()];
                                                                                        case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })];
                                                                case 2:
                                                                    _b = _j.sent();
                                                                    return [3, 4];
                                                                case 3:
                                                                    _b = [];
                                                                    _j.label = 4;
                                                                case 4:
                                                                    o = _b;
                                                                    return [4, m.pick(i, c.d_status)];
                                                                case 5:
                                                                    l = _j.sent();
                                                                    _d = (_c = s).success;
                                                                    _h = {};
                                                                    return [4, m.pick(i, c.d_title || "h1")];
                                                                case 6:
                                                                    _h.name = _j.sent();
                                                                    _g = (_f = d).fix;
                                                                    return [4, m.pick(i, c.d_cover || "meta[property=og:image]@content")];
                                                                case 7:
                                                                    _h.cover = _g.apply(_f, [_j.sent()]);
                                                                    return [4, m.pick(i, c.d_author)];
                                                                case 8:
                                                                    _h.author = _j.sent();
                                                                    return [4, m.pick(i, (c.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = o, _h.host = E, _h)])];
                                                            }
                                                        });
                                                    });
                                                }, toc: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, _b, x, y, w, T, k, _c, _d, _f, _g, M, B, _h;
                                                        var _j;
                                                        return __generator(this, function (_k) {
                                                            switch (_k.label) {
                                                                case 0:
                                                                    if (c.single)
                                                                        return [2, s.success([{ name: c.single === !0 ? "Xem / Đọc" : c.single, url: r, host: E }])];
                                                                    i = [r], o = [], l = {};
                                                                    return [4, d.html(c.ch_rewrite ? r.replace(new RegExp(c.ch_rewrite[0]), c.ch_rewrite[1]) : r, c.req)];
                                                                case 1:
                                                                    f = _k.sent();
                                                                    if (!c.ch_url) return [3, 5];
                                                                    return [4, m.pick(f, c.ch_url)];
                                                                case 2:
                                                                    p = _k.sent();
                                                                    _b = p;
                                                                    if (!_b) return [3, 4];
                                                                    return [4, d.html(d.fix(p), c.req)];
                                                                case 3:
                                                                    _b = (f = _k.sent());
                                                                    _k.label = 4;
                                                                case 4:
                                                                    _b;
                                                                    _k.label = 5;
                                                                case 5:
                                                                    x = 0;
                                                                    _k.label = 6;
                                                                case 6:
                                                                    if (!(x < (c.ch_maxPages || 60))) return [3, 20];
                                                                    y = f.select(c.ch_list), w = 0;
                                                                    _k.label = 7;
                                                                case 7:
                                                                    if (!(w < y.size())) return [3, 15];
                                                                    return [4, y.get(w)];
                                                                case 8:
                                                                    T = _k.sent(), k = T.attr("href") || T.attr("data-href");
                                                                    _c = !k || k === "#" || l[k];
                                                                    if (_c) return [3, 13];
                                                                    l[k] = 1;
                                                                    _f = (_d = o).push;
                                                                    _j = {};
                                                                    if (!c.ch_name) return [3, 10];
                                                                    return [4, m.pick(T, c.ch_name)];
                                                                case 9:
                                                                    _g = _k.sent();
                                                                    return [3, 12];
                                                                case 10: return [4, T.text()];
                                                                case 11:
                                                                    _g = _k.sent();
                                                                    _k.label = 12;
                                                                case 12:
                                                                    _c = (_f.apply(_d, [(_j.name = (_g) || T.attr("title"), _j.url = d.fix(k), _j.host = E, _j)]));
                                                                    _k.label = 13;
                                                                case 13:
                                                                    _c;
                                                                    _k.label = 14;
                                                                case 14:
                                                                    w++;
                                                                    return [3, 7];
                                                                case 15:
                                                                    M = c.ch_next ? f.select(c.ch_next).first() : null;
                                                                    if (!M || !M.attr("href"))
                                                                        return [3, 20];
                                                                    B = d.fix(M.attr("href"));
                                                                    if (i.indexOf(B) >= 0)
                                                                        return [3, 20];
                                                                    i.push(B);
                                                                    _h = c.ch_delay;
                                                                    if (!_h) return [3, 17];
                                                                    return [4, A(c.ch_delay)];
                                                                case 16:
                                                                    _h = (_k.sent());
                                                                    _k.label = 17;
                                                                case 17:
                                                                    _h;
                                                                    return [4, d.html(B, c.req)];
                                                                case 18:
                                                                    f = _k.sent();
                                                                    _k.label = 19;
                                                                case 19:
                                                                    x++;
                                                                    return [3, 6];
                                                                case 20: return [2, (c.ch_reverse && o.reverse(), s.success(o))];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, l, f, p, x, y, w, _b, _c, T, k; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                i = [], o = [r], l = r, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < (c.pages_max || 40))) return [3, 8];
                                                                return [4, d.html(l, c.req)];
                                                            case 2:
                                                                p = _d.sent(), x = p.select(c.pages || ".page-chapter img, .reading-content img, .chapter-content img"), y = 0;
                                                                _d.label = 3;
                                                            case 3:
                                                                if (!(y < x.size())) return [3, 6];
                                                                _c = (_b = d).img;
                                                                return [4, x.get(y)];
                                                            case 4:
                                                                w = _c.apply(_b, [_d.sent()]);
                                                                w && i.indexOf(w) < 0 && i.push(w);
                                                                _d.label = 5;
                                                            case 5:
                                                                y++;
                                                                return [3, 3];
                                                            case 6:
                                                                if (!c.pages_next)
                                                                    return [3, 8];
                                                                T = p.select(c.pages_next).first();
                                                                if (!T)
                                                                    return [3, 8];
                                                                k = d.fix(T.attr("href"));
                                                                if (!k || o.indexOf(k) >= 0)
                                                                    return [3, 8];
                                                                o.push(k), l = k;
                                                                _d.label = 7;
                                                            case 7:
                                                                f++;
                                                                return [3, 1];
                                                            case 8: return [2, s.success(i)];
                                                        }
                                                    }); });
                                                }, text: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                        switch (_g.label) {
                                                            case 0: return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _g.sent(), o = i.select(c.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                if (!o) return [3, 4];
                                                                _d = (_c = s).success;
                                                                return [4, d.cleanContent(o)];
                                                            case 2:
                                                                _f = [_g.sent()];
                                                                return [4, m.pick(i, c.c_title || "h1 || h2")];
                                                            case 3:
                                                                _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                return [3, 5];
                                                            case 4:
                                                                _b = s.error("Không tìm thấy nội dung");
                                                                _g.label = 5;
                                                            case 5: return [2, _b];
                                                        }
                                                    }); });
                                                }, servers: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.servers)
                                                                    return [2, s.success([{ title: "Server", data: r }])];
                                                                return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _b.sent();
                                                                return [4, R(i.select(c.servers), function (l) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var f;
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0: return [4, m.pick(l, c.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                    case 1:
                                                                                        f = _c.sent();
                                                                                        _b = {};
                                                                                        return [4, l.text()];
                                                                                    case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                o = (_b.sent()).filter(function (l) { return l.data; });
                                                                return [2, s.success(o.length ? o : [{ title: "Server", data: r }])];
                                                        }
                                                    }); });
                                                }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var i = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return i ? i[0] : ""; }, track: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, x, y, w; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (i = i || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                    return [2, s.success({ type: "native", data: r, headers: { Referer: E + "/" } })];
                                                                return [4, d.get(r)];
                                                            case 1:
                                                                o = _b.sent();
                                                                return [4, o.text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (!(c.video && !i)) return [3, 4];
                                                                return [4, m.pick(n.parse(l, r), c.video)];
                                                            case 3:
                                                                f = _b.sent();
                                                                if (f)
                                                                    return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: E + "/" } })];
                                                                _b.label = 4;
                                                            case 4:
                                                                p = m.sniff(l);
                                                                if (p)
                                                                    return [2, s.success({ type: "native", data: p, headers: { Referer: i ? r : E + "/" } })];
                                                                x = n.parse(l, r), y = x.select(c.iframe || "iframe[src], iframe[data-src]").first();
                                                                if (!(y && i < 2)) return [3, 6];
                                                                w = d.fix(y.attr("src") || y.attr("data-src"));
                                                                if (!w) return [3, 6];
                                                                return [4, m.track(w, i + 1)];
                                                            case 5: return [2, _b.sent()];
                                                            case 6: return [2, s.success({ type: "webview", data: r })];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof j == "function" ? j : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, toc: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, a, n, s, h, b, g, v, A, D, q, N, I, O, X, J, re) {
                    return __awaiter(this, void 0, void 0, function () { var V; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                V = t("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function j(r) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, m.toc(r)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var E, c, d, m; return __generator(this, function (_b) {
                                            E = "https://novelfull.net";
                                            try {
                                                V && (E = String(V).replace(/\/+$/, ""));
                                            }
                                            catch (r) { }
                                            c = { tabs: { Latest: "/latest-release-novel[?page={p}]", Hot: "/hot-novel[?page={p}]", Popular: "/most-popular[?page={p}]", Completed: "/completed-novel[?page={p}]" }, search: "/search?keyword={q}[&page={p}]", item: ".con", title: "h3.tit a", link: "h3.tit a@href", cover: ".pic img@img", next: "a[rel=next]", genre: "a[href*='/genre/']", d_title: "h1.tit || h1", d_cover: "meta[property=og:image]@content", d_author: "a[href*='/author/']", d_desc: "meta[property=og:description]@content || meta[name=description]@content", d_genres: ".info a[href*='/genre/']", ch_list: "#idData li a", ch_next: "a#nextBtn[rel=next]", ch_maxPages: 150, content: "#chapter-content", c_title: ".chapter-title || h1" }, d = { img: function (r) { if (!r)
                                                    return ""; for (var i = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], o = 0; o < i.length; o++) {
                                                    var l = r.attr(i[o]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return d.fix(l.trim());
                                                } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? E + r : E + "/" + r) : ""; }, text: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(o < i.length)) return [3, 4];
                                                                return [4, r.select(i[o]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                o++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, _b; return __generator(this, function (_c) {
                                                        switch (_c.label) {
                                                            case 0:
                                                                i = i || {};
                                                                o = { Referer: E + "/" };
                                                                if (i.headers)
                                                                    for (l in i.headers)
                                                                        o[l] = i.headers[l];
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 1:
                                                                f = _c.sent(), p = 0;
                                                                _c.label = 2;
                                                            case 2:
                                                                _b = f && f.status === 429 && p < 3;
                                                                if (!_b) return [3, 4];
                                                                return [4, d.cf(f)];
                                                            case 3:
                                                                _b = !(_c.sent());
                                                                _c.label = 4;
                                                            case 4:
                                                                if (!_b) return [3, 8];
                                                                return [4, A(1500 * (p + 1))];
                                                            case 5:
                                                                _c.sent();
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 6:
                                                                f = _c.sent();
                                                                _c.label = 7;
                                                            case 7:
                                                                p++;
                                                                return [3, 2];
                                                            case 8: return [2, f];
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
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.html(i && i.charset)];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, json: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.json()];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, page: function (r) { var i = parseInt(r || "1", 10); return isNaN(i) || i < 1 ? 1 : i; }, next: function (r, i) { return r ? String(d.page(i) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, r.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, m = { pick: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, x, y, w, T, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                if (!i || !r)
                                                                    return [2, ""];
                                                                o = String(i).split(" || "), l = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(l < o.length)) return [3, 9];
                                                                f = o[l], p = "text", x = f.lastIndexOf("@");
                                                                x > 0 && !/\[[^\]]*@/.test(f.slice(x)) && (p = f.slice(x + 1), f = f.slice(0, x));
                                                                y = f === ":self" ? null : r.select(f), w = f === ":self" ? r : y.size() ? y.first() : null;
                                                                if (!w) return [3, 8];
                                                                if (!(p === "text")) return [3, 3];
                                                                return [4, w.text()];
                                                            case 2:
                                                                _b = _d.sent();
                                                                return [3, 7];
                                                            case 3:
                                                                if (!(p === "html")) return [3, 5];
                                                                return [4, w.html()];
                                                            case 4:
                                                                _c = _d.sent();
                                                                return [3, 6];
                                                            case 5:
                                                                _c = p === "img" ? d.img(w.is("img") ? w : w.select("img").first()) : p === "own" ? w.ownText() : w.attr(p);
                                                                _d.label = 6;
                                                            case 6:
                                                                _b = _c;
                                                                _d.label = 7;
                                                            case 7:
                                                                T = _b;
                                                                if (T)
                                                                    return [2, String(T).trim()];
                                                                _d.label = 8;
                                                            case 8:
                                                                l++;
                                                                return [3, 1];
                                                            case 9: return [2, ""];
                                                        }
                                                    }); });
                                                }, url: function (r, i, o) { var l = d.page(i), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, x) { return l > 1 ? x : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(o || "")).replace(/\{base\}/g, E), d.fix(f); }, items: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, x, y, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    i = r.select(c.item), o = [], l = {}, f = 0;
                                                                    _g.label = 1;
                                                                case 1:
                                                                    if (!(f < i.size())) return [3, 9];
                                                                    return [4, i.get(f)];
                                                                case 2:
                                                                    p = _g.sent();
                                                                    return [4, m.pick(p, c.link || "a@href")];
                                                                case 3:
                                                                    x = _g.sent();
                                                                    if (!!(!x || l[x] || /^javascript|#$/.test(x))) return [3, 8];
                                                                    return [4, m.pick(p, c.title || "h3 || h2 || a@title || img@alt")];
                                                                case 4:
                                                                    y = _g.sent();
                                                                    _b = y;
                                                                    if (!_b) return [3, 7];
                                                                    l[x] = 1;
                                                                    _d = (_c = o).push;
                                                                    _f = { name: y, link: d.fix(x) };
                                                                    return [4, m.pick(p, c.cover || "img@img")];
                                                                case 5:
                                                                    _f.cover = _g.sent();
                                                                    return [4, m.pick(p, c.desc || "")];
                                                                case 6:
                                                                    _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = E, _f)]));
                                                                    _g.label = 7;
                                                                case 7:
                                                                    _b;
                                                                    _g.label = 8;
                                                                case 8:
                                                                    f++;
                                                                    return [3, 1];
                                                                case 9: return [2, o];
                                                            }
                                                        });
                                                    });
                                                }, listPage: function (r, i, o) {
                                                    return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, d.html(m.url(r, i, o), c.req)];
                                                            case 1:
                                                                l = _b.sent();
                                                                return [4, m.items(l)];
                                                            case 2:
                                                                f = _b.sent(), p = c.next ? l.select(c.next).size() > 0 : f.length >= (c.pageSize || 10);
                                                                return [2, s.success(f, d.next(p && f.length > 0, i))];
                                                        }
                                                    }); });
                                                }, browse: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = c.tabs && c.tabs[r] || r;
                                                                return [4, m.listPage(o, i, "")];
                                                            case 1: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, search: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!d.isUrl(r)) return [3, 2];
                                                                o = d.fix(r);
                                                                return [4, m.listPage(o + (o.indexOf("?") > 0 ? "&" : "?") + (c.pageParam || "page") + "={p}", i, "")];
                                                            case 1: return [2, _b.sent()];
                                                            case 2: return [4, m.listPage(c.search, i, r)];
                                                            case 3: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, genre: function () {
                                                    return __awaiter(this, void 0, void 0, function () { var r, i; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.genre)
                                                                    return [2, s.success([])];
                                                                return [4, d.html(d.fix(c.genrePage || "/"))];
                                                            case 1:
                                                                r = _b.sent();
                                                                return [4, R(r.select(c.genre), function (o) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0:
                                                                                        _b = {};
                                                                                        return [4, o.text()];
                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(o.attr("href")), _b.script = "search.js", _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                i = _b.sent();
                                                                return [2, s.success(i.filter(function (o) { return o.title; }))];
                                                        }
                                                    }); });
                                                }, detail: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, _b, _c, _d, _f, _g;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0: return [4, d.html(r, c.req)];
                                                                case 1:
                                                                    i = _j.sent();
                                                                    if (!c.d_genres) return [3, 3];
                                                                    return [4, R(i.select(c.d_genres), function (f) {
                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                var _b;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0:
                                                                                            _b = {};
                                                                                            return [4, f.text()];
                                                                                        case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })];
                                                                case 2:
                                                                    _b = _j.sent();
                                                                    return [3, 4];
                                                                case 3:
                                                                    _b = [];
                                                                    _j.label = 4;
                                                                case 4:
                                                                    o = _b;
                                                                    return [4, m.pick(i, c.d_status)];
                                                                case 5:
                                                                    l = _j.sent();
                                                                    _d = (_c = s).success;
                                                                    _h = {};
                                                                    return [4, m.pick(i, c.d_title || "h1")];
                                                                case 6:
                                                                    _h.name = _j.sent();
                                                                    _g = (_f = d).fix;
                                                                    return [4, m.pick(i, c.d_cover || "meta[property=og:image]@content")];
                                                                case 7:
                                                                    _h.cover = _g.apply(_f, [_j.sent()]);
                                                                    return [4, m.pick(i, c.d_author)];
                                                                case 8:
                                                                    _h.author = _j.sent();
                                                                    return [4, m.pick(i, (c.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = o, _h.host = E, _h)])];
                                                            }
                                                        });
                                                    });
                                                }, toc: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, _b, x, y, w, T, k, _c, _d, _f, _g, M, B, _h;
                                                        var _j;
                                                        return __generator(this, function (_k) {
                                                            switch (_k.label) {
                                                                case 0:
                                                                    if (c.single)
                                                                        return [2, s.success([{ name: c.single === !0 ? "Xem / Đọc" : c.single, url: r, host: E }])];
                                                                    i = [r], o = [], l = {};
                                                                    return [4, d.html(c.ch_rewrite ? r.replace(new RegExp(c.ch_rewrite[0]), c.ch_rewrite[1]) : r, c.req)];
                                                                case 1:
                                                                    f = _k.sent();
                                                                    if (!c.ch_url) return [3, 5];
                                                                    return [4, m.pick(f, c.ch_url)];
                                                                case 2:
                                                                    p = _k.sent();
                                                                    _b = p;
                                                                    if (!_b) return [3, 4];
                                                                    return [4, d.html(d.fix(p), c.req)];
                                                                case 3:
                                                                    _b = (f = _k.sent());
                                                                    _k.label = 4;
                                                                case 4:
                                                                    _b;
                                                                    _k.label = 5;
                                                                case 5:
                                                                    x = 0;
                                                                    _k.label = 6;
                                                                case 6:
                                                                    if (!(x < (c.ch_maxPages || 60))) return [3, 20];
                                                                    y = f.select(c.ch_list), w = 0;
                                                                    _k.label = 7;
                                                                case 7:
                                                                    if (!(w < y.size())) return [3, 15];
                                                                    return [4, y.get(w)];
                                                                case 8:
                                                                    T = _k.sent(), k = T.attr("href") || T.attr("data-href");
                                                                    _c = !k || k === "#" || l[k];
                                                                    if (_c) return [3, 13];
                                                                    l[k] = 1;
                                                                    _f = (_d = o).push;
                                                                    _j = {};
                                                                    if (!c.ch_name) return [3, 10];
                                                                    return [4, m.pick(T, c.ch_name)];
                                                                case 9:
                                                                    _g = _k.sent();
                                                                    return [3, 12];
                                                                case 10: return [4, T.text()];
                                                                case 11:
                                                                    _g = _k.sent();
                                                                    _k.label = 12;
                                                                case 12:
                                                                    _c = (_f.apply(_d, [(_j.name = (_g) || T.attr("title"), _j.url = d.fix(k), _j.host = E, _j)]));
                                                                    _k.label = 13;
                                                                case 13:
                                                                    _c;
                                                                    _k.label = 14;
                                                                case 14:
                                                                    w++;
                                                                    return [3, 7];
                                                                case 15:
                                                                    M = c.ch_next ? f.select(c.ch_next).first() : null;
                                                                    if (!M || !M.attr("href"))
                                                                        return [3, 20];
                                                                    B = d.fix(M.attr("href"));
                                                                    if (i.indexOf(B) >= 0)
                                                                        return [3, 20];
                                                                    i.push(B);
                                                                    _h = c.ch_delay;
                                                                    if (!_h) return [3, 17];
                                                                    return [4, A(c.ch_delay)];
                                                                case 16:
                                                                    _h = (_k.sent());
                                                                    _k.label = 17;
                                                                case 17:
                                                                    _h;
                                                                    return [4, d.html(B, c.req)];
                                                                case 18:
                                                                    f = _k.sent();
                                                                    _k.label = 19;
                                                                case 19:
                                                                    x++;
                                                                    return [3, 6];
                                                                case 20: return [2, (c.ch_reverse && o.reverse(), s.success(o))];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, l, f, p, x, y, w, _b, _c, T, k; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                i = [], o = [r], l = r, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < (c.pages_max || 40))) return [3, 8];
                                                                return [4, d.html(l, c.req)];
                                                            case 2:
                                                                p = _d.sent(), x = p.select(c.pages || ".page-chapter img, .reading-content img, .chapter-content img"), y = 0;
                                                                _d.label = 3;
                                                            case 3:
                                                                if (!(y < x.size())) return [3, 6];
                                                                _c = (_b = d).img;
                                                                return [4, x.get(y)];
                                                            case 4:
                                                                w = _c.apply(_b, [_d.sent()]);
                                                                w && i.indexOf(w) < 0 && i.push(w);
                                                                _d.label = 5;
                                                            case 5:
                                                                y++;
                                                                return [3, 3];
                                                            case 6:
                                                                if (!c.pages_next)
                                                                    return [3, 8];
                                                                T = p.select(c.pages_next).first();
                                                                if (!T)
                                                                    return [3, 8];
                                                                k = d.fix(T.attr("href"));
                                                                if (!k || o.indexOf(k) >= 0)
                                                                    return [3, 8];
                                                                o.push(k), l = k;
                                                                _d.label = 7;
                                                            case 7:
                                                                f++;
                                                                return [3, 1];
                                                            case 8: return [2, s.success(i)];
                                                        }
                                                    }); });
                                                }, text: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                        switch (_g.label) {
                                                            case 0: return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _g.sent(), o = i.select(c.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                if (!o) return [3, 4];
                                                                _d = (_c = s).success;
                                                                return [4, d.cleanContent(o)];
                                                            case 2:
                                                                _f = [_g.sent()];
                                                                return [4, m.pick(i, c.c_title || "h1 || h2")];
                                                            case 3:
                                                                _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                return [3, 5];
                                                            case 4:
                                                                _b = s.error("Không tìm thấy nội dung");
                                                                _g.label = 5;
                                                            case 5: return [2, _b];
                                                        }
                                                    }); });
                                                }, servers: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.servers)
                                                                    return [2, s.success([{ title: "Server", data: r }])];
                                                                return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _b.sent();
                                                                return [4, R(i.select(c.servers), function (l) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var f;
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0: return [4, m.pick(l, c.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                    case 1:
                                                                                        f = _c.sent();
                                                                                        _b = {};
                                                                                        return [4, l.text()];
                                                                                    case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                o = (_b.sent()).filter(function (l) { return l.data; });
                                                                return [2, s.success(o.length ? o : [{ title: "Server", data: r }])];
                                                        }
                                                    }); });
                                                }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var i = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return i ? i[0] : ""; }, track: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, x, y, w; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (i = i || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                    return [2, s.success({ type: "native", data: r, headers: { Referer: E + "/" } })];
                                                                return [4, d.get(r)];
                                                            case 1:
                                                                o = _b.sent();
                                                                return [4, o.text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (!(c.video && !i)) return [3, 4];
                                                                return [4, m.pick(n.parse(l, r), c.video)];
                                                            case 3:
                                                                f = _b.sent();
                                                                if (f)
                                                                    return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: E + "/" } })];
                                                                _b.label = 4;
                                                            case 4:
                                                                p = m.sniff(l);
                                                                if (p)
                                                                    return [2, s.success({ type: "native", data: p, headers: { Referer: i ? r : E + "/" } })];
                                                                x = n.parse(l, r), y = x.select(c.iframe || "iframe[src], iframe[data-src]").first();
                                                                if (!(y && i < 2)) return [3, 6];
                                                                w = d.fix(y.attr("src") || y.attr("data-src"));
                                                                if (!w) return [3, 6];
                                                                return [4, m.track(w, i + 1)];
                                                            case 5: return [2, _b.sent()];
                                                            case 6: return [2, s.success({ type: "webview", data: r })];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof j == "function" ? j : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, genre: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, a, n, s, h, b, g, v, A, D, q, N, I, O, X, J, re) {
                    return __awaiter(this, void 0, void 0, function () { var V; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                V = t("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function j() {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, m.genre()];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var E, c, d, m; return __generator(this, function (_b) {
                                            E = "https://novelfull.net";
                                            try {
                                                V && (E = String(V).replace(/\/+$/, ""));
                                            }
                                            catch (r) { }
                                            c = { tabs: { Latest: "/latest-release-novel[?page={p}]", Hot: "/hot-novel[?page={p}]", Popular: "/most-popular[?page={p}]", Completed: "/completed-novel[?page={p}]" }, search: "/search?keyword={q}[&page={p}]", item: ".con", title: "h3.tit a", link: "h3.tit a@href", cover: ".pic img@img", next: "a[rel=next]", genre: "a[href*='/genre/']", d_title: "h1.tit || h1", d_cover: "meta[property=og:image]@content", d_author: "a[href*='/author/']", d_desc: "meta[property=og:description]@content || meta[name=description]@content", d_genres: ".info a[href*='/genre/']", ch_list: "#idData li a", ch_next: "a#nextBtn[rel=next]", ch_maxPages: 150, content: "#chapter-content", c_title: ".chapter-title || h1" }, d = { img: function (r) { if (!r)
                                                    return ""; for (var i = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], o = 0; o < i.length; o++) {
                                                    var l = r.attr(i[o]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return d.fix(l.trim());
                                                } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? E + r : E + "/" + r) : ""; }, text: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(o < i.length)) return [3, 4];
                                                                return [4, r.select(i[o]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                o++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, _b; return __generator(this, function (_c) {
                                                        switch (_c.label) {
                                                            case 0:
                                                                i = i || {};
                                                                o = { Referer: E + "/" };
                                                                if (i.headers)
                                                                    for (l in i.headers)
                                                                        o[l] = i.headers[l];
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 1:
                                                                f = _c.sent(), p = 0;
                                                                _c.label = 2;
                                                            case 2:
                                                                _b = f && f.status === 429 && p < 3;
                                                                if (!_b) return [3, 4];
                                                                return [4, d.cf(f)];
                                                            case 3:
                                                                _b = !(_c.sent());
                                                                _c.label = 4;
                                                            case 4:
                                                                if (!_b) return [3, 8];
                                                                return [4, A(1500 * (p + 1))];
                                                            case 5:
                                                                _c.sent();
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 6:
                                                                f = _c.sent();
                                                                _c.label = 7;
                                                            case 7:
                                                                p++;
                                                                return [3, 2];
                                                            case 8: return [2, f];
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
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.html(i && i.charset)];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, json: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.json()];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, page: function (r) { var i = parseInt(r || "1", 10); return isNaN(i) || i < 1 ? 1 : i; }, next: function (r, i) { return r ? String(d.page(i) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, r.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, m = { pick: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, x, y, w, T, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                if (!i || !r)
                                                                    return [2, ""];
                                                                o = String(i).split(" || "), l = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(l < o.length)) return [3, 9];
                                                                f = o[l], p = "text", x = f.lastIndexOf("@");
                                                                x > 0 && !/\[[^\]]*@/.test(f.slice(x)) && (p = f.slice(x + 1), f = f.slice(0, x));
                                                                y = f === ":self" ? null : r.select(f), w = f === ":self" ? r : y.size() ? y.first() : null;
                                                                if (!w) return [3, 8];
                                                                if (!(p === "text")) return [3, 3];
                                                                return [4, w.text()];
                                                            case 2:
                                                                _b = _d.sent();
                                                                return [3, 7];
                                                            case 3:
                                                                if (!(p === "html")) return [3, 5];
                                                                return [4, w.html()];
                                                            case 4:
                                                                _c = _d.sent();
                                                                return [3, 6];
                                                            case 5:
                                                                _c = p === "img" ? d.img(w.is("img") ? w : w.select("img").first()) : p === "own" ? w.ownText() : w.attr(p);
                                                                _d.label = 6;
                                                            case 6:
                                                                _b = _c;
                                                                _d.label = 7;
                                                            case 7:
                                                                T = _b;
                                                                if (T)
                                                                    return [2, String(T).trim()];
                                                                _d.label = 8;
                                                            case 8:
                                                                l++;
                                                                return [3, 1];
                                                            case 9: return [2, ""];
                                                        }
                                                    }); });
                                                }, url: function (r, i, o) { var l = d.page(i), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, x) { return l > 1 ? x : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(o || "")).replace(/\{base\}/g, E), d.fix(f); }, items: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, x, y, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    i = r.select(c.item), o = [], l = {}, f = 0;
                                                                    _g.label = 1;
                                                                case 1:
                                                                    if (!(f < i.size())) return [3, 9];
                                                                    return [4, i.get(f)];
                                                                case 2:
                                                                    p = _g.sent();
                                                                    return [4, m.pick(p, c.link || "a@href")];
                                                                case 3:
                                                                    x = _g.sent();
                                                                    if (!!(!x || l[x] || /^javascript|#$/.test(x))) return [3, 8];
                                                                    return [4, m.pick(p, c.title || "h3 || h2 || a@title || img@alt")];
                                                                case 4:
                                                                    y = _g.sent();
                                                                    _b = y;
                                                                    if (!_b) return [3, 7];
                                                                    l[x] = 1;
                                                                    _d = (_c = o).push;
                                                                    _f = { name: y, link: d.fix(x) };
                                                                    return [4, m.pick(p, c.cover || "img@img")];
                                                                case 5:
                                                                    _f.cover = _g.sent();
                                                                    return [4, m.pick(p, c.desc || "")];
                                                                case 6:
                                                                    _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = E, _f)]));
                                                                    _g.label = 7;
                                                                case 7:
                                                                    _b;
                                                                    _g.label = 8;
                                                                case 8:
                                                                    f++;
                                                                    return [3, 1];
                                                                case 9: return [2, o];
                                                            }
                                                        });
                                                    });
                                                }, listPage: function (r, i, o) {
                                                    return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, d.html(m.url(r, i, o), c.req)];
                                                            case 1:
                                                                l = _b.sent();
                                                                return [4, m.items(l)];
                                                            case 2:
                                                                f = _b.sent(), p = c.next ? l.select(c.next).size() > 0 : f.length >= (c.pageSize || 10);
                                                                return [2, s.success(f, d.next(p && f.length > 0, i))];
                                                        }
                                                    }); });
                                                }, browse: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = c.tabs && c.tabs[r] || r;
                                                                return [4, m.listPage(o, i, "")];
                                                            case 1: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, search: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!d.isUrl(r)) return [3, 2];
                                                                o = d.fix(r);
                                                                return [4, m.listPage(o + (o.indexOf("?") > 0 ? "&" : "?") + (c.pageParam || "page") + "={p}", i, "")];
                                                            case 1: return [2, _b.sent()];
                                                            case 2: return [4, m.listPage(c.search, i, r)];
                                                            case 3: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, genre: function () {
                                                    return __awaiter(this, void 0, void 0, function () { var r, i; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.genre)
                                                                    return [2, s.success([])];
                                                                return [4, d.html(d.fix(c.genrePage || "/"))];
                                                            case 1:
                                                                r = _b.sent();
                                                                return [4, R(r.select(c.genre), function (o) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0:
                                                                                        _b = {};
                                                                                        return [4, o.text()];
                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(o.attr("href")), _b.script = "search.js", _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                i = _b.sent();
                                                                return [2, s.success(i.filter(function (o) { return o.title; }))];
                                                        }
                                                    }); });
                                                }, detail: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, _b, _c, _d, _f, _g;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0: return [4, d.html(r, c.req)];
                                                                case 1:
                                                                    i = _j.sent();
                                                                    if (!c.d_genres) return [3, 3];
                                                                    return [4, R(i.select(c.d_genres), function (f) {
                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                var _b;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0:
                                                                                            _b = {};
                                                                                            return [4, f.text()];
                                                                                        case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })];
                                                                case 2:
                                                                    _b = _j.sent();
                                                                    return [3, 4];
                                                                case 3:
                                                                    _b = [];
                                                                    _j.label = 4;
                                                                case 4:
                                                                    o = _b;
                                                                    return [4, m.pick(i, c.d_status)];
                                                                case 5:
                                                                    l = _j.sent();
                                                                    _d = (_c = s).success;
                                                                    _h = {};
                                                                    return [4, m.pick(i, c.d_title || "h1")];
                                                                case 6:
                                                                    _h.name = _j.sent();
                                                                    _g = (_f = d).fix;
                                                                    return [4, m.pick(i, c.d_cover || "meta[property=og:image]@content")];
                                                                case 7:
                                                                    _h.cover = _g.apply(_f, [_j.sent()]);
                                                                    return [4, m.pick(i, c.d_author)];
                                                                case 8:
                                                                    _h.author = _j.sent();
                                                                    return [4, m.pick(i, (c.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = o, _h.host = E, _h)])];
                                                            }
                                                        });
                                                    });
                                                }, toc: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, _b, x, y, w, T, k, _c, _d, _f, _g, M, B, _h;
                                                        var _j;
                                                        return __generator(this, function (_k) {
                                                            switch (_k.label) {
                                                                case 0:
                                                                    if (c.single)
                                                                        return [2, s.success([{ name: c.single === !0 ? "Xem / Đọc" : c.single, url: r, host: E }])];
                                                                    i = [r], o = [], l = {};
                                                                    return [4, d.html(c.ch_rewrite ? r.replace(new RegExp(c.ch_rewrite[0]), c.ch_rewrite[1]) : r, c.req)];
                                                                case 1:
                                                                    f = _k.sent();
                                                                    if (!c.ch_url) return [3, 5];
                                                                    return [4, m.pick(f, c.ch_url)];
                                                                case 2:
                                                                    p = _k.sent();
                                                                    _b = p;
                                                                    if (!_b) return [3, 4];
                                                                    return [4, d.html(d.fix(p), c.req)];
                                                                case 3:
                                                                    _b = (f = _k.sent());
                                                                    _k.label = 4;
                                                                case 4:
                                                                    _b;
                                                                    _k.label = 5;
                                                                case 5:
                                                                    x = 0;
                                                                    _k.label = 6;
                                                                case 6:
                                                                    if (!(x < (c.ch_maxPages || 60))) return [3, 20];
                                                                    y = f.select(c.ch_list), w = 0;
                                                                    _k.label = 7;
                                                                case 7:
                                                                    if (!(w < y.size())) return [3, 15];
                                                                    return [4, y.get(w)];
                                                                case 8:
                                                                    T = _k.sent(), k = T.attr("href") || T.attr("data-href");
                                                                    _c = !k || k === "#" || l[k];
                                                                    if (_c) return [3, 13];
                                                                    l[k] = 1;
                                                                    _f = (_d = o).push;
                                                                    _j = {};
                                                                    if (!c.ch_name) return [3, 10];
                                                                    return [4, m.pick(T, c.ch_name)];
                                                                case 9:
                                                                    _g = _k.sent();
                                                                    return [3, 12];
                                                                case 10: return [4, T.text()];
                                                                case 11:
                                                                    _g = _k.sent();
                                                                    _k.label = 12;
                                                                case 12:
                                                                    _c = (_f.apply(_d, [(_j.name = (_g) || T.attr("title"), _j.url = d.fix(k), _j.host = E, _j)]));
                                                                    _k.label = 13;
                                                                case 13:
                                                                    _c;
                                                                    _k.label = 14;
                                                                case 14:
                                                                    w++;
                                                                    return [3, 7];
                                                                case 15:
                                                                    M = c.ch_next ? f.select(c.ch_next).first() : null;
                                                                    if (!M || !M.attr("href"))
                                                                        return [3, 20];
                                                                    B = d.fix(M.attr("href"));
                                                                    if (i.indexOf(B) >= 0)
                                                                        return [3, 20];
                                                                    i.push(B);
                                                                    _h = c.ch_delay;
                                                                    if (!_h) return [3, 17];
                                                                    return [4, A(c.ch_delay)];
                                                                case 16:
                                                                    _h = (_k.sent());
                                                                    _k.label = 17;
                                                                case 17:
                                                                    _h;
                                                                    return [4, d.html(B, c.req)];
                                                                case 18:
                                                                    f = _k.sent();
                                                                    _k.label = 19;
                                                                case 19:
                                                                    x++;
                                                                    return [3, 6];
                                                                case 20: return [2, (c.ch_reverse && o.reverse(), s.success(o))];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, l, f, p, x, y, w, _b, _c, T, k; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                i = [], o = [r], l = r, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < (c.pages_max || 40))) return [3, 8];
                                                                return [4, d.html(l, c.req)];
                                                            case 2:
                                                                p = _d.sent(), x = p.select(c.pages || ".page-chapter img, .reading-content img, .chapter-content img"), y = 0;
                                                                _d.label = 3;
                                                            case 3:
                                                                if (!(y < x.size())) return [3, 6];
                                                                _c = (_b = d).img;
                                                                return [4, x.get(y)];
                                                            case 4:
                                                                w = _c.apply(_b, [_d.sent()]);
                                                                w && i.indexOf(w) < 0 && i.push(w);
                                                                _d.label = 5;
                                                            case 5:
                                                                y++;
                                                                return [3, 3];
                                                            case 6:
                                                                if (!c.pages_next)
                                                                    return [3, 8];
                                                                T = p.select(c.pages_next).first();
                                                                if (!T)
                                                                    return [3, 8];
                                                                k = d.fix(T.attr("href"));
                                                                if (!k || o.indexOf(k) >= 0)
                                                                    return [3, 8];
                                                                o.push(k), l = k;
                                                                _d.label = 7;
                                                            case 7:
                                                                f++;
                                                                return [3, 1];
                                                            case 8: return [2, s.success(i)];
                                                        }
                                                    }); });
                                                }, text: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                        switch (_g.label) {
                                                            case 0: return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _g.sent(), o = i.select(c.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                if (!o) return [3, 4];
                                                                _d = (_c = s).success;
                                                                return [4, d.cleanContent(o)];
                                                            case 2:
                                                                _f = [_g.sent()];
                                                                return [4, m.pick(i, c.c_title || "h1 || h2")];
                                                            case 3:
                                                                _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                return [3, 5];
                                                            case 4:
                                                                _b = s.error("Không tìm thấy nội dung");
                                                                _g.label = 5;
                                                            case 5: return [2, _b];
                                                        }
                                                    }); });
                                                }, servers: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.servers)
                                                                    return [2, s.success([{ title: "Server", data: r }])];
                                                                return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _b.sent();
                                                                return [4, R(i.select(c.servers), function (l) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var f;
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0: return [4, m.pick(l, c.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                    case 1:
                                                                                        f = _c.sent();
                                                                                        _b = {};
                                                                                        return [4, l.text()];
                                                                                    case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                o = (_b.sent()).filter(function (l) { return l.data; });
                                                                return [2, s.success(o.length ? o : [{ title: "Server", data: r }])];
                                                        }
                                                    }); });
                                                }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var i = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return i ? i[0] : ""; }, track: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, x, y, w; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (i = i || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                    return [2, s.success({ type: "native", data: r, headers: { Referer: E + "/" } })];
                                                                return [4, d.get(r)];
                                                            case 1:
                                                                o = _b.sent();
                                                                return [4, o.text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (!(c.video && !i)) return [3, 4];
                                                                return [4, m.pick(n.parse(l, r), c.video)];
                                                            case 3:
                                                                f = _b.sent();
                                                                if (f)
                                                                    return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: E + "/" } })];
                                                                _b.label = 4;
                                                            case 4:
                                                                p = m.sniff(l);
                                                                if (p)
                                                                    return [2, s.success({ type: "native", data: p, headers: { Referer: i ? r : E + "/" } })];
                                                                x = n.parse(l, r), y = x.select(c.iframe || "iframe[src], iframe[data-src]").first();
                                                                if (!(y && i < 2)) return [3, 6];
                                                                w = d.fix(y.attr("src") || y.attr("data-src"));
                                                                if (!w) return [3, 6];
                                                                return [4, m.track(w, i + 1)];
                                                            case 5: return [2, _b.sent()];
                                                            case 6: return [2, s.success({ type: "webview", data: r })];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof j == "function" ? j : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, chap: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, a, n, s, h, b, g, v, A, D, q, N, I, O, X, J, re) {
                    return __awaiter(this, void 0, void 0, function () { var V; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                V = t("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function j(r) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, m.text(r)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var E, c, d, m; return __generator(this, function (_b) {
                                            E = "https://novelfull.net";
                                            try {
                                                V && (E = String(V).replace(/\/+$/, ""));
                                            }
                                            catch (r) { }
                                            c = { tabs: { Latest: "/latest-release-novel[?page={p}]", Hot: "/hot-novel[?page={p}]", Popular: "/most-popular[?page={p}]", Completed: "/completed-novel[?page={p}]" }, search: "/search?keyword={q}[&page={p}]", item: ".con", title: "h3.tit a", link: "h3.tit a@href", cover: ".pic img@img", next: "a[rel=next]", genre: "a[href*='/genre/']", d_title: "h1.tit || h1", d_cover: "meta[property=og:image]@content", d_author: "a[href*='/author/']", d_desc: "meta[property=og:description]@content || meta[name=description]@content", d_genres: ".info a[href*='/genre/']", ch_list: "#idData li a", ch_next: "a#nextBtn[rel=next]", ch_maxPages: 150, content: "#chapter-content", c_title: ".chapter-title || h1" }, d = { img: function (r) { if (!r)
                                                    return ""; for (var i = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], o = 0; o < i.length; o++) {
                                                    var l = r.attr(i[o]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return d.fix(l.trim());
                                                } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? E + r : E + "/" + r) : ""; }, text: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(o < i.length)) return [3, 4];
                                                                return [4, r.select(i[o]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                o++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, _b; return __generator(this, function (_c) {
                                                        switch (_c.label) {
                                                            case 0:
                                                                i = i || {};
                                                                o = { Referer: E + "/" };
                                                                if (i.headers)
                                                                    for (l in i.headers)
                                                                        o[l] = i.headers[l];
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 1:
                                                                f = _c.sent(), p = 0;
                                                                _c.label = 2;
                                                            case 2:
                                                                _b = f && f.status === 429 && p < 3;
                                                                if (!_b) return [3, 4];
                                                                return [4, d.cf(f)];
                                                            case 3:
                                                                _b = !(_c.sent());
                                                                _c.label = 4;
                                                            case 4:
                                                                if (!_b) return [3, 8];
                                                                return [4, A(1500 * (p + 1))];
                                                            case 5:
                                                                _c.sent();
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 6:
                                                                f = _c.sent();
                                                                _c.label = 7;
                                                            case 7:
                                                                p++;
                                                                return [3, 2];
                                                            case 8: return [2, f];
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
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.html(i && i.charset)];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, json: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.json()];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, page: function (r) { var i = parseInt(r || "1", 10); return isNaN(i) || i < 1 ? 1 : i; }, next: function (r, i) { return r ? String(d.page(i) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, r.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, m = { pick: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, x, y, w, T, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                if (!i || !r)
                                                                    return [2, ""];
                                                                o = String(i).split(" || "), l = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(l < o.length)) return [3, 9];
                                                                f = o[l], p = "text", x = f.lastIndexOf("@");
                                                                x > 0 && !/\[[^\]]*@/.test(f.slice(x)) && (p = f.slice(x + 1), f = f.slice(0, x));
                                                                y = f === ":self" ? null : r.select(f), w = f === ":self" ? r : y.size() ? y.first() : null;
                                                                if (!w) return [3, 8];
                                                                if (!(p === "text")) return [3, 3];
                                                                return [4, w.text()];
                                                            case 2:
                                                                _b = _d.sent();
                                                                return [3, 7];
                                                            case 3:
                                                                if (!(p === "html")) return [3, 5];
                                                                return [4, w.html()];
                                                            case 4:
                                                                _c = _d.sent();
                                                                return [3, 6];
                                                            case 5:
                                                                _c = p === "img" ? d.img(w.is("img") ? w : w.select("img").first()) : p === "own" ? w.ownText() : w.attr(p);
                                                                _d.label = 6;
                                                            case 6:
                                                                _b = _c;
                                                                _d.label = 7;
                                                            case 7:
                                                                T = _b;
                                                                if (T)
                                                                    return [2, String(T).trim()];
                                                                _d.label = 8;
                                                            case 8:
                                                                l++;
                                                                return [3, 1];
                                                            case 9: return [2, ""];
                                                        }
                                                    }); });
                                                }, url: function (r, i, o) { var l = d.page(i), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, x) { return l > 1 ? x : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(o || "")).replace(/\{base\}/g, E), d.fix(f); }, items: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, x, y, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    i = r.select(c.item), o = [], l = {}, f = 0;
                                                                    _g.label = 1;
                                                                case 1:
                                                                    if (!(f < i.size())) return [3, 9];
                                                                    return [4, i.get(f)];
                                                                case 2:
                                                                    p = _g.sent();
                                                                    return [4, m.pick(p, c.link || "a@href")];
                                                                case 3:
                                                                    x = _g.sent();
                                                                    if (!!(!x || l[x] || /^javascript|#$/.test(x))) return [3, 8];
                                                                    return [4, m.pick(p, c.title || "h3 || h2 || a@title || img@alt")];
                                                                case 4:
                                                                    y = _g.sent();
                                                                    _b = y;
                                                                    if (!_b) return [3, 7];
                                                                    l[x] = 1;
                                                                    _d = (_c = o).push;
                                                                    _f = { name: y, link: d.fix(x) };
                                                                    return [4, m.pick(p, c.cover || "img@img")];
                                                                case 5:
                                                                    _f.cover = _g.sent();
                                                                    return [4, m.pick(p, c.desc || "")];
                                                                case 6:
                                                                    _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = E, _f)]));
                                                                    _g.label = 7;
                                                                case 7:
                                                                    _b;
                                                                    _g.label = 8;
                                                                case 8:
                                                                    f++;
                                                                    return [3, 1];
                                                                case 9: return [2, o];
                                                            }
                                                        });
                                                    });
                                                }, listPage: function (r, i, o) {
                                                    return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, d.html(m.url(r, i, o), c.req)];
                                                            case 1:
                                                                l = _b.sent();
                                                                return [4, m.items(l)];
                                                            case 2:
                                                                f = _b.sent(), p = c.next ? l.select(c.next).size() > 0 : f.length >= (c.pageSize || 10);
                                                                return [2, s.success(f, d.next(p && f.length > 0, i))];
                                                        }
                                                    }); });
                                                }, browse: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = c.tabs && c.tabs[r] || r;
                                                                return [4, m.listPage(o, i, "")];
                                                            case 1: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, search: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!d.isUrl(r)) return [3, 2];
                                                                o = d.fix(r);
                                                                return [4, m.listPage(o + (o.indexOf("?") > 0 ? "&" : "?") + (c.pageParam || "page") + "={p}", i, "")];
                                                            case 1: return [2, _b.sent()];
                                                            case 2: return [4, m.listPage(c.search, i, r)];
                                                            case 3: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, genre: function () {
                                                    return __awaiter(this, void 0, void 0, function () { var r, i; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.genre)
                                                                    return [2, s.success([])];
                                                                return [4, d.html(d.fix(c.genrePage || "/"))];
                                                            case 1:
                                                                r = _b.sent();
                                                                return [4, R(r.select(c.genre), function (o) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0:
                                                                                        _b = {};
                                                                                        return [4, o.text()];
                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(o.attr("href")), _b.script = "search.js", _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                i = _b.sent();
                                                                return [2, s.success(i.filter(function (o) { return o.title; }))];
                                                        }
                                                    }); });
                                                }, detail: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, _b, _c, _d, _f, _g;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0: return [4, d.html(r, c.req)];
                                                                case 1:
                                                                    i = _j.sent();
                                                                    if (!c.d_genres) return [3, 3];
                                                                    return [4, R(i.select(c.d_genres), function (f) {
                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                var _b;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0:
                                                                                            _b = {};
                                                                                            return [4, f.text()];
                                                                                        case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })];
                                                                case 2:
                                                                    _b = _j.sent();
                                                                    return [3, 4];
                                                                case 3:
                                                                    _b = [];
                                                                    _j.label = 4;
                                                                case 4:
                                                                    o = _b;
                                                                    return [4, m.pick(i, c.d_status)];
                                                                case 5:
                                                                    l = _j.sent();
                                                                    _d = (_c = s).success;
                                                                    _h = {};
                                                                    return [4, m.pick(i, c.d_title || "h1")];
                                                                case 6:
                                                                    _h.name = _j.sent();
                                                                    _g = (_f = d).fix;
                                                                    return [4, m.pick(i, c.d_cover || "meta[property=og:image]@content")];
                                                                case 7:
                                                                    _h.cover = _g.apply(_f, [_j.sent()]);
                                                                    return [4, m.pick(i, c.d_author)];
                                                                case 8:
                                                                    _h.author = _j.sent();
                                                                    return [4, m.pick(i, (c.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = o, _h.host = E, _h)])];
                                                            }
                                                        });
                                                    });
                                                }, toc: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, _b, x, y, w, T, k, _c, _d, _f, _g, M, B, _h;
                                                        var _j;
                                                        return __generator(this, function (_k) {
                                                            switch (_k.label) {
                                                                case 0:
                                                                    if (c.single)
                                                                        return [2, s.success([{ name: c.single === !0 ? "Xem / Đọc" : c.single, url: r, host: E }])];
                                                                    i = [r], o = [], l = {};
                                                                    return [4, d.html(c.ch_rewrite ? r.replace(new RegExp(c.ch_rewrite[0]), c.ch_rewrite[1]) : r, c.req)];
                                                                case 1:
                                                                    f = _k.sent();
                                                                    if (!c.ch_url) return [3, 5];
                                                                    return [4, m.pick(f, c.ch_url)];
                                                                case 2:
                                                                    p = _k.sent();
                                                                    _b = p;
                                                                    if (!_b) return [3, 4];
                                                                    return [4, d.html(d.fix(p), c.req)];
                                                                case 3:
                                                                    _b = (f = _k.sent());
                                                                    _k.label = 4;
                                                                case 4:
                                                                    _b;
                                                                    _k.label = 5;
                                                                case 5:
                                                                    x = 0;
                                                                    _k.label = 6;
                                                                case 6:
                                                                    if (!(x < (c.ch_maxPages || 60))) return [3, 20];
                                                                    y = f.select(c.ch_list), w = 0;
                                                                    _k.label = 7;
                                                                case 7:
                                                                    if (!(w < y.size())) return [3, 15];
                                                                    return [4, y.get(w)];
                                                                case 8:
                                                                    T = _k.sent(), k = T.attr("href") || T.attr("data-href");
                                                                    _c = !k || k === "#" || l[k];
                                                                    if (_c) return [3, 13];
                                                                    l[k] = 1;
                                                                    _f = (_d = o).push;
                                                                    _j = {};
                                                                    if (!c.ch_name) return [3, 10];
                                                                    return [4, m.pick(T, c.ch_name)];
                                                                case 9:
                                                                    _g = _k.sent();
                                                                    return [3, 12];
                                                                case 10: return [4, T.text()];
                                                                case 11:
                                                                    _g = _k.sent();
                                                                    _k.label = 12;
                                                                case 12:
                                                                    _c = (_f.apply(_d, [(_j.name = (_g) || T.attr("title"), _j.url = d.fix(k), _j.host = E, _j)]));
                                                                    _k.label = 13;
                                                                case 13:
                                                                    _c;
                                                                    _k.label = 14;
                                                                case 14:
                                                                    w++;
                                                                    return [3, 7];
                                                                case 15:
                                                                    M = c.ch_next ? f.select(c.ch_next).first() : null;
                                                                    if (!M || !M.attr("href"))
                                                                        return [3, 20];
                                                                    B = d.fix(M.attr("href"));
                                                                    if (i.indexOf(B) >= 0)
                                                                        return [3, 20];
                                                                    i.push(B);
                                                                    _h = c.ch_delay;
                                                                    if (!_h) return [3, 17];
                                                                    return [4, A(c.ch_delay)];
                                                                case 16:
                                                                    _h = (_k.sent());
                                                                    _k.label = 17;
                                                                case 17:
                                                                    _h;
                                                                    return [4, d.html(B, c.req)];
                                                                case 18:
                                                                    f = _k.sent();
                                                                    _k.label = 19;
                                                                case 19:
                                                                    x++;
                                                                    return [3, 6];
                                                                case 20: return [2, (c.ch_reverse && o.reverse(), s.success(o))];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, l, f, p, x, y, w, _b, _c, T, k; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                i = [], o = [r], l = r, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < (c.pages_max || 40))) return [3, 8];
                                                                return [4, d.html(l, c.req)];
                                                            case 2:
                                                                p = _d.sent(), x = p.select(c.pages || ".page-chapter img, .reading-content img, .chapter-content img"), y = 0;
                                                                _d.label = 3;
                                                            case 3:
                                                                if (!(y < x.size())) return [3, 6];
                                                                _c = (_b = d).img;
                                                                return [4, x.get(y)];
                                                            case 4:
                                                                w = _c.apply(_b, [_d.sent()]);
                                                                w && i.indexOf(w) < 0 && i.push(w);
                                                                _d.label = 5;
                                                            case 5:
                                                                y++;
                                                                return [3, 3];
                                                            case 6:
                                                                if (!c.pages_next)
                                                                    return [3, 8];
                                                                T = p.select(c.pages_next).first();
                                                                if (!T)
                                                                    return [3, 8];
                                                                k = d.fix(T.attr("href"));
                                                                if (!k || o.indexOf(k) >= 0)
                                                                    return [3, 8];
                                                                o.push(k), l = k;
                                                                _d.label = 7;
                                                            case 7:
                                                                f++;
                                                                return [3, 1];
                                                            case 8: return [2, s.success(i)];
                                                        }
                                                    }); });
                                                }, text: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                        switch (_g.label) {
                                                            case 0: return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _g.sent(), o = i.select(c.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                if (!o) return [3, 4];
                                                                _d = (_c = s).success;
                                                                return [4, d.cleanContent(o)];
                                                            case 2:
                                                                _f = [_g.sent()];
                                                                return [4, m.pick(i, c.c_title || "h1 || h2")];
                                                            case 3:
                                                                _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                return [3, 5];
                                                            case 4:
                                                                _b = s.error("Không tìm thấy nội dung");
                                                                _g.label = 5;
                                                            case 5: return [2, _b];
                                                        }
                                                    }); });
                                                }, servers: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.servers)
                                                                    return [2, s.success([{ title: "Server", data: r }])];
                                                                return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _b.sent();
                                                                return [4, R(i.select(c.servers), function (l) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var f;
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0: return [4, m.pick(l, c.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                    case 1:
                                                                                        f = _c.sent();
                                                                                        _b = {};
                                                                                        return [4, l.text()];
                                                                                    case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                o = (_b.sent()).filter(function (l) { return l.data; });
                                                                return [2, s.success(o.length ? o : [{ title: "Server", data: r }])];
                                                        }
                                                    }); });
                                                }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var i = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return i ? i[0] : ""; }, track: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, x, y, w; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (i = i || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                    return [2, s.success({ type: "native", data: r, headers: { Referer: E + "/" } })];
                                                                return [4, d.get(r)];
                                                            case 1:
                                                                o = _b.sent();
                                                                return [4, o.text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (!(c.video && !i)) return [3, 4];
                                                                return [4, m.pick(n.parse(l, r), c.video)];
                                                            case 3:
                                                                f = _b.sent();
                                                                if (f)
                                                                    return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: E + "/" } })];
                                                                _b.label = 4;
                                                            case 4:
                                                                p = m.sniff(l);
                                                                if (p)
                                                                    return [2, s.success({ type: "native", data: p, headers: { Referer: i ? r : E + "/" } })];
                                                                x = n.parse(l, r), y = x.select(c.iframe || "iframe[src], iframe[data-src]").first();
                                                                if (!(y && i < 2)) return [3, 6];
                                                                w = d.fix(y.attr("src") || y.attr("data-src"));
                                                                if (!w) return [3, 6];
                                                                return [4, m.track(w, i + 1)];
                                                            case 5: return [2, _b.sent()];
                                                            case 6: return [2, s.success({ type: "webview", data: r })];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof j == "function" ? j : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, browse: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, a, n, s, h, b, g, v, A, D, q, N, I, O, X, J, re) {
                    return __awaiter(this, void 0, void 0, function () { var V; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                V = t("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function j(r, i) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, m.browse(r, i)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var E, c, d, m; return __generator(this, function (_b) {
                                            E = "https://novelfull.net";
                                            try {
                                                V && (E = String(V).replace(/\/+$/, ""));
                                            }
                                            catch (r) { }
                                            c = { tabs: { Latest: "/latest-release-novel[?page={p}]", Hot: "/hot-novel[?page={p}]", Popular: "/most-popular[?page={p}]", Completed: "/completed-novel[?page={p}]" }, search: "/search?keyword={q}[&page={p}]", item: ".con", title: "h3.tit a", link: "h3.tit a@href", cover: ".pic img@img", next: "a[rel=next]", genre: "a[href*='/genre/']", d_title: "h1.tit || h1", d_cover: "meta[property=og:image]@content", d_author: "a[href*='/author/']", d_desc: "meta[property=og:description]@content || meta[name=description]@content", d_genres: ".info a[href*='/genre/']", ch_list: "#idData li a", ch_next: "a#nextBtn[rel=next]", ch_maxPages: 150, content: "#chapter-content", c_title: ".chapter-title || h1" }, d = { img: function (r) { if (!r)
                                                    return ""; for (var i = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], o = 0; o < i.length; o++) {
                                                    var l = r.attr(i[o]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return d.fix(l.trim());
                                                } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? E + r : E + "/" + r) : ""; }, text: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(o < i.length)) return [3, 4];
                                                                return [4, r.select(i[o]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                o++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, _b; return __generator(this, function (_c) {
                                                        switch (_c.label) {
                                                            case 0:
                                                                i = i || {};
                                                                o = { Referer: E + "/" };
                                                                if (i.headers)
                                                                    for (l in i.headers)
                                                                        o[l] = i.headers[l];
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 1:
                                                                f = _c.sent(), p = 0;
                                                                _c.label = 2;
                                                            case 2:
                                                                _b = f && f.status === 429 && p < 3;
                                                                if (!_b) return [3, 4];
                                                                return [4, d.cf(f)];
                                                            case 3:
                                                                _b = !(_c.sent());
                                                                _c.label = 4;
                                                            case 4:
                                                                if (!_b) return [3, 8];
                                                                return [4, A(1500 * (p + 1))];
                                                            case 5:
                                                                _c.sent();
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 6:
                                                                f = _c.sent();
                                                                _c.label = 7;
                                                            case 7:
                                                                p++;
                                                                return [3, 2];
                                                            case 8: return [2, f];
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
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.html(i && i.charset)];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, json: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.json()];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, page: function (r) { var i = parseInt(r || "1", 10); return isNaN(i) || i < 1 ? 1 : i; }, next: function (r, i) { return r ? String(d.page(i) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, r.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, m = { pick: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, x, y, w, T, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                if (!i || !r)
                                                                    return [2, ""];
                                                                o = String(i).split(" || "), l = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(l < o.length)) return [3, 9];
                                                                f = o[l], p = "text", x = f.lastIndexOf("@");
                                                                x > 0 && !/\[[^\]]*@/.test(f.slice(x)) && (p = f.slice(x + 1), f = f.slice(0, x));
                                                                y = f === ":self" ? null : r.select(f), w = f === ":self" ? r : y.size() ? y.first() : null;
                                                                if (!w) return [3, 8];
                                                                if (!(p === "text")) return [3, 3];
                                                                return [4, w.text()];
                                                            case 2:
                                                                _b = _d.sent();
                                                                return [3, 7];
                                                            case 3:
                                                                if (!(p === "html")) return [3, 5];
                                                                return [4, w.html()];
                                                            case 4:
                                                                _c = _d.sent();
                                                                return [3, 6];
                                                            case 5:
                                                                _c = p === "img" ? d.img(w.is("img") ? w : w.select("img").first()) : p === "own" ? w.ownText() : w.attr(p);
                                                                _d.label = 6;
                                                            case 6:
                                                                _b = _c;
                                                                _d.label = 7;
                                                            case 7:
                                                                T = _b;
                                                                if (T)
                                                                    return [2, String(T).trim()];
                                                                _d.label = 8;
                                                            case 8:
                                                                l++;
                                                                return [3, 1];
                                                            case 9: return [2, ""];
                                                        }
                                                    }); });
                                                }, url: function (r, i, o) { var l = d.page(i), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, x) { return l > 1 ? x : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(o || "")).replace(/\{base\}/g, E), d.fix(f); }, items: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, x, y, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    i = r.select(c.item), o = [], l = {}, f = 0;
                                                                    _g.label = 1;
                                                                case 1:
                                                                    if (!(f < i.size())) return [3, 9];
                                                                    return [4, i.get(f)];
                                                                case 2:
                                                                    p = _g.sent();
                                                                    return [4, m.pick(p, c.link || "a@href")];
                                                                case 3:
                                                                    x = _g.sent();
                                                                    if (!!(!x || l[x] || /^javascript|#$/.test(x))) return [3, 8];
                                                                    return [4, m.pick(p, c.title || "h3 || h2 || a@title || img@alt")];
                                                                case 4:
                                                                    y = _g.sent();
                                                                    _b = y;
                                                                    if (!_b) return [3, 7];
                                                                    l[x] = 1;
                                                                    _d = (_c = o).push;
                                                                    _f = { name: y, link: d.fix(x) };
                                                                    return [4, m.pick(p, c.cover || "img@img")];
                                                                case 5:
                                                                    _f.cover = _g.sent();
                                                                    return [4, m.pick(p, c.desc || "")];
                                                                case 6:
                                                                    _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = E, _f)]));
                                                                    _g.label = 7;
                                                                case 7:
                                                                    _b;
                                                                    _g.label = 8;
                                                                case 8:
                                                                    f++;
                                                                    return [3, 1];
                                                                case 9: return [2, o];
                                                            }
                                                        });
                                                    });
                                                }, listPage: function (r, i, o) {
                                                    return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, d.html(m.url(r, i, o), c.req)];
                                                            case 1:
                                                                l = _b.sent();
                                                                return [4, m.items(l)];
                                                            case 2:
                                                                f = _b.sent(), p = c.next ? l.select(c.next).size() > 0 : f.length >= (c.pageSize || 10);
                                                                return [2, s.success(f, d.next(p && f.length > 0, i))];
                                                        }
                                                    }); });
                                                }, browse: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = c.tabs && c.tabs[r] || r;
                                                                return [4, m.listPage(o, i, "")];
                                                            case 1: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, search: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!d.isUrl(r)) return [3, 2];
                                                                o = d.fix(r);
                                                                return [4, m.listPage(o + (o.indexOf("?") > 0 ? "&" : "?") + (c.pageParam || "page") + "={p}", i, "")];
                                                            case 1: return [2, _b.sent()];
                                                            case 2: return [4, m.listPage(c.search, i, r)];
                                                            case 3: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, genre: function () {
                                                    return __awaiter(this, void 0, void 0, function () { var r, i; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.genre)
                                                                    return [2, s.success([])];
                                                                return [4, d.html(d.fix(c.genrePage || "/"))];
                                                            case 1:
                                                                r = _b.sent();
                                                                return [4, R(r.select(c.genre), function (o) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0:
                                                                                        _b = {};
                                                                                        return [4, o.text()];
                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(o.attr("href")), _b.script = "search.js", _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                i = _b.sent();
                                                                return [2, s.success(i.filter(function (o) { return o.title; }))];
                                                        }
                                                    }); });
                                                }, detail: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, _b, _c, _d, _f, _g;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0: return [4, d.html(r, c.req)];
                                                                case 1:
                                                                    i = _j.sent();
                                                                    if (!c.d_genres) return [3, 3];
                                                                    return [4, R(i.select(c.d_genres), function (f) {
                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                var _b;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0:
                                                                                            _b = {};
                                                                                            return [4, f.text()];
                                                                                        case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })];
                                                                case 2:
                                                                    _b = _j.sent();
                                                                    return [3, 4];
                                                                case 3:
                                                                    _b = [];
                                                                    _j.label = 4;
                                                                case 4:
                                                                    o = _b;
                                                                    return [4, m.pick(i, c.d_status)];
                                                                case 5:
                                                                    l = _j.sent();
                                                                    _d = (_c = s).success;
                                                                    _h = {};
                                                                    return [4, m.pick(i, c.d_title || "h1")];
                                                                case 6:
                                                                    _h.name = _j.sent();
                                                                    _g = (_f = d).fix;
                                                                    return [4, m.pick(i, c.d_cover || "meta[property=og:image]@content")];
                                                                case 7:
                                                                    _h.cover = _g.apply(_f, [_j.sent()]);
                                                                    return [4, m.pick(i, c.d_author)];
                                                                case 8:
                                                                    _h.author = _j.sent();
                                                                    return [4, m.pick(i, (c.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = o, _h.host = E, _h)])];
                                                            }
                                                        });
                                                    });
                                                }, toc: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, _b, x, y, w, T, k, _c, _d, _f, _g, M, B, _h;
                                                        var _j;
                                                        return __generator(this, function (_k) {
                                                            switch (_k.label) {
                                                                case 0:
                                                                    if (c.single)
                                                                        return [2, s.success([{ name: c.single === !0 ? "Xem / Đọc" : c.single, url: r, host: E }])];
                                                                    i = [r], o = [], l = {};
                                                                    return [4, d.html(c.ch_rewrite ? r.replace(new RegExp(c.ch_rewrite[0]), c.ch_rewrite[1]) : r, c.req)];
                                                                case 1:
                                                                    f = _k.sent();
                                                                    if (!c.ch_url) return [3, 5];
                                                                    return [4, m.pick(f, c.ch_url)];
                                                                case 2:
                                                                    p = _k.sent();
                                                                    _b = p;
                                                                    if (!_b) return [3, 4];
                                                                    return [4, d.html(d.fix(p), c.req)];
                                                                case 3:
                                                                    _b = (f = _k.sent());
                                                                    _k.label = 4;
                                                                case 4:
                                                                    _b;
                                                                    _k.label = 5;
                                                                case 5:
                                                                    x = 0;
                                                                    _k.label = 6;
                                                                case 6:
                                                                    if (!(x < (c.ch_maxPages || 60))) return [3, 20];
                                                                    y = f.select(c.ch_list), w = 0;
                                                                    _k.label = 7;
                                                                case 7:
                                                                    if (!(w < y.size())) return [3, 15];
                                                                    return [4, y.get(w)];
                                                                case 8:
                                                                    T = _k.sent(), k = T.attr("href") || T.attr("data-href");
                                                                    _c = !k || k === "#" || l[k];
                                                                    if (_c) return [3, 13];
                                                                    l[k] = 1;
                                                                    _f = (_d = o).push;
                                                                    _j = {};
                                                                    if (!c.ch_name) return [3, 10];
                                                                    return [4, m.pick(T, c.ch_name)];
                                                                case 9:
                                                                    _g = _k.sent();
                                                                    return [3, 12];
                                                                case 10: return [4, T.text()];
                                                                case 11:
                                                                    _g = _k.sent();
                                                                    _k.label = 12;
                                                                case 12:
                                                                    _c = (_f.apply(_d, [(_j.name = (_g) || T.attr("title"), _j.url = d.fix(k), _j.host = E, _j)]));
                                                                    _k.label = 13;
                                                                case 13:
                                                                    _c;
                                                                    _k.label = 14;
                                                                case 14:
                                                                    w++;
                                                                    return [3, 7];
                                                                case 15:
                                                                    M = c.ch_next ? f.select(c.ch_next).first() : null;
                                                                    if (!M || !M.attr("href"))
                                                                        return [3, 20];
                                                                    B = d.fix(M.attr("href"));
                                                                    if (i.indexOf(B) >= 0)
                                                                        return [3, 20];
                                                                    i.push(B);
                                                                    _h = c.ch_delay;
                                                                    if (!_h) return [3, 17];
                                                                    return [4, A(c.ch_delay)];
                                                                case 16:
                                                                    _h = (_k.sent());
                                                                    _k.label = 17;
                                                                case 17:
                                                                    _h;
                                                                    return [4, d.html(B, c.req)];
                                                                case 18:
                                                                    f = _k.sent();
                                                                    _k.label = 19;
                                                                case 19:
                                                                    x++;
                                                                    return [3, 6];
                                                                case 20: return [2, (c.ch_reverse && o.reverse(), s.success(o))];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, l, f, p, x, y, w, _b, _c, T, k; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                i = [], o = [r], l = r, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < (c.pages_max || 40))) return [3, 8];
                                                                return [4, d.html(l, c.req)];
                                                            case 2:
                                                                p = _d.sent(), x = p.select(c.pages || ".page-chapter img, .reading-content img, .chapter-content img"), y = 0;
                                                                _d.label = 3;
                                                            case 3:
                                                                if (!(y < x.size())) return [3, 6];
                                                                _c = (_b = d).img;
                                                                return [4, x.get(y)];
                                                            case 4:
                                                                w = _c.apply(_b, [_d.sent()]);
                                                                w && i.indexOf(w) < 0 && i.push(w);
                                                                _d.label = 5;
                                                            case 5:
                                                                y++;
                                                                return [3, 3];
                                                            case 6:
                                                                if (!c.pages_next)
                                                                    return [3, 8];
                                                                T = p.select(c.pages_next).first();
                                                                if (!T)
                                                                    return [3, 8];
                                                                k = d.fix(T.attr("href"));
                                                                if (!k || o.indexOf(k) >= 0)
                                                                    return [3, 8];
                                                                o.push(k), l = k;
                                                                _d.label = 7;
                                                            case 7:
                                                                f++;
                                                                return [3, 1];
                                                            case 8: return [2, s.success(i)];
                                                        }
                                                    }); });
                                                }, text: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                        switch (_g.label) {
                                                            case 0: return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _g.sent(), o = i.select(c.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                if (!o) return [3, 4];
                                                                _d = (_c = s).success;
                                                                return [4, d.cleanContent(o)];
                                                            case 2:
                                                                _f = [_g.sent()];
                                                                return [4, m.pick(i, c.c_title || "h1 || h2")];
                                                            case 3:
                                                                _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                return [3, 5];
                                                            case 4:
                                                                _b = s.error("Không tìm thấy nội dung");
                                                                _g.label = 5;
                                                            case 5: return [2, _b];
                                                        }
                                                    }); });
                                                }, servers: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.servers)
                                                                    return [2, s.success([{ title: "Server", data: r }])];
                                                                return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _b.sent();
                                                                return [4, R(i.select(c.servers), function (l) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var f;
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0: return [4, m.pick(l, c.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                    case 1:
                                                                                        f = _c.sent();
                                                                                        _b = {};
                                                                                        return [4, l.text()];
                                                                                    case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                o = (_b.sent()).filter(function (l) { return l.data; });
                                                                return [2, s.success(o.length ? o : [{ title: "Server", data: r }])];
                                                        }
                                                    }); });
                                                }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var i = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return i ? i[0] : ""; }, track: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, x, y, w; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (i = i || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                    return [2, s.success({ type: "native", data: r, headers: { Referer: E + "/" } })];
                                                                return [4, d.get(r)];
                                                            case 1:
                                                                o = _b.sent();
                                                                return [4, o.text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (!(c.video && !i)) return [3, 4];
                                                                return [4, m.pick(n.parse(l, r), c.video)];
                                                            case 3:
                                                                f = _b.sent();
                                                                if (f)
                                                                    return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: E + "/" } })];
                                                                _b.label = 4;
                                                            case 4:
                                                                p = m.sniff(l);
                                                                if (p)
                                                                    return [2, s.success({ type: "native", data: p, headers: { Referer: i ? r : E + "/" } })];
                                                                x = n.parse(l, r), y = x.select(c.iframe || "iframe[src], iframe[data-src]").first();
                                                                if (!(y && i < 2)) return [3, 6];
                                                                w = d.fix(y.attr("src") || y.attr("data-src"));
                                                                if (!w) return [3, 6];
                                                                return [4, m.track(w, i + 1)];
                                                            case 5: return [2, _b.sent()];
                                                            case 6: return [2, s.success({ type: "webview", data: r })];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof j == "function" ? j : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    } };
function Ur(e) { return new kt({ meta: fe, scripts: _r, host: e }); }
var hi = require("@libs/fetch").fetchApi, Qe = null;
try {
    Qe = require("@libs/storage");
}
catch (e) {
    Qe = null;
}
var Eu = {}, qt = Qe && Qe.storage ? Qe.storage : { get: function (e) { return Eu[e]; }, set: function (e, t) { Eu[e] = t; }, delete: function (e) { delete Eu[e]; } }, Tu = (function () {
    function class_2() {
        var _this = this;
        this.id = fe.lnId, this.name = fe.name, this.icon = fe.lnIcon, this.site = fe.source, this.version = fe.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = Ur({ name: "LNReader", request: function (t) { return __awaiter(_this, void 0, void 0, function () {
                var u, a, n;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            u = { method: t.method, headers: t.headers };
                            t.body != null && t.method !== "GET" && (u.body = t.body);
                            return [4, hi(t.url, u)];
                        case 1:
                            a = _c.sent(), n = {};
                            try {
                                a.headers.forEach(function (s, h) { n[h] = s; });
                            }
                            catch (s) { }
                            _b = { status: a.status, url: a.url || t.url, headers: n };
                            return [4, a.text()];
                        case 2: return [2, (_b.text = _c.sent(), _b)];
                    }
                });
            }); }, storageGet: function (t) { var u = qt.get("vb_" + t); return u == null ? null : String(u); }, storageSet: function (t, u) { u == null ? qt.delete && qt.delete("vb_" + t) : qt.set("vb_" + t, String(u)); }, config: function (t) { return null; }, log: function (t) { return console.log(t); } });
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
    class_2.prototype.resolveUrl = function (t, u) { return /^https?:/i.test(t) ? t : fe.source.replace(/\/+$/, "") + "/" + String(t).replace(/^\/+/, ""); };
    return class_2;
}()), bi = new Tu;
