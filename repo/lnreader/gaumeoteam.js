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
var qr = Object.create;
var qt = Object.defineProperty, Cr = Object.defineProperties, Dr = Object.getOwnPropertyDescriptor, Lr = Object.getOwnPropertyDescriptors, Ir = Object.getOwnPropertyNames, xu = Object.getOwnPropertySymbols, Mr = Object.getPrototypeOf, wu = Object.prototype.hasOwnProperty, Ur = Object.prototype.propertyIsEnumerable;
var yu = function (e, t, u) { return t in e ? qt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[t] = u; }, X = function (e, t) {
    var e_2, _b;
    for (var u in t || (t = {}))
        wu.call(t, u) && yu(e, u, t[u]);
    if (xu)
        try {
            for (var _c = __values(xu(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var u = _d.value;
                Ur.call(t, u) && yu(e, u, t[u]);
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
}, st = function (e, t) { return Cr(e, Lr(t)); };
var Or = function (e, t) { return function () { return (t || e((t = { exports: {} }).exports, t), t.exports); }; }, we = function (e, t) { for (var u in t)
    qt(e, u, { get: t[u], enumerable: !0 }); }, vu = function (e, t, u, r) {
    var e_3, _b;
    if (t && typeof t == "object" || typeof t == "function") {
        var _loop_1 = function (n) {
            !wu.call(e, n) && n !== u && qt(e, n, { get: function () { return t[n]; }, enumerable: !(r = Dr(t, n)) || r.enumerable });
        };
        try {
            for (var _c = __values(Ir(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
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
var ct = function (e, t, u) { return (u = e != null ? qr(Mr(e)) : {}, vu(t || !e || !e.__esModule ? qt(u, "default", { value: e, enumerable: !0 }) : u, e)); }, Rr = function (e) { return vu(qt({}, "__esModule", { value: !0 }), e); };
var it = Or(function (Rn, Zu) { Zu.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var i0 = {};
we(i0, { default: function () { return n0; } });
module.exports = Rr(i0);
var jt = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (e) { return e.charCodeAt(0); }));
var Gt = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (e) { return e.charCodeAt(0); }));
var ve, Hr = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), bt = (ve = String.fromCodePoint) !== null && ve !== void 0 ? ve : function (e) { var t = ""; return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t; };
function Se(e) { var t; return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = Hr.get(e)) !== null && t !== void 0 ? t : e; }
var H;
(function (e) { e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z"; })(H || (H = {}));
var Pr = 32, ut;
(function (e) { e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE"; })(ut || (ut = {}));
function Ae(e) { return e >= H.ZERO && e <= H.NINE; }
function Br(e) { return e >= H.UPPER_A && e <= H.UPPER_F || e >= H.LOWER_A && e <= H.LOWER_F; }
function Fr(e) { return e >= H.UPPER_A && e <= H.UPPER_Z || e >= H.LOWER_A && e <= H.LOWER_Z || Ae(e); }
function Vr(e) { return e === H.EQUALS || Fr(e); }
var R;
(function (e) { e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity"; })(R || (R = {}));
var G;
(function (e) { e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute"; })(G || (G = {}));
var pt = (function () {
    function pt(t, u, r) {
        this.decodeTree = t, this.emitCodePoint = u, this.errors = r, this.state = R.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = G.Strict;
    }
    pt.prototype.startEntity = function (t) { this.decodeMode = t, this.state = R.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    pt.prototype.write = function (t, u) { switch (this.state) {
        case R.EntityStart: return t.charCodeAt(u) === H.NUM ? (this.state = R.NumericStart, this.consumed += 1, this.stateNumericStart(t, u + 1)) : (this.state = R.NamedEntity, this.stateNamedEntity(t, u));
        case R.NumericStart: return this.stateNumericStart(t, u);
        case R.NumericDecimal: return this.stateNumericDecimal(t, u);
        case R.NumericHex: return this.stateNumericHex(t, u);
        case R.NamedEntity: return this.stateNamedEntity(t, u);
    } };
    pt.prototype.stateNumericStart = function (t, u) { return u >= t.length ? -1 : (t.charCodeAt(u) | Pr) === H.LOWER_X ? (this.state = R.NumericHex, this.consumed += 1, this.stateNumericHex(t, u + 1)) : (this.state = R.NumericDecimal, this.stateNumericDecimal(t, u)); };
    pt.prototype.addToNumericResult = function (t, u, r, n) { if (u !== r) {
        var i = r - u;
        this.result = this.result * Math.pow(n, i) + parseInt(t.substr(u, i), n), this.consumed += i;
    } };
    pt.prototype.stateNumericHex = function (t, u) { var r = u; for (; u < t.length;) {
        var n = t.charCodeAt(u);
        if (Ae(n) || Br(n))
            u += 1;
        else
            return this.addToNumericResult(t, r, u, 16), this.emitNumericEntity(n, 3);
    } return this.addToNumericResult(t, r, u, 16), -1; };
    pt.prototype.stateNumericDecimal = function (t, u) { var r = u; for (; u < t.length;) {
        var n = t.charCodeAt(u);
        if (Ae(n))
            u += 1;
        else
            return this.addToNumericResult(t, r, u, 10), this.emitNumericEntity(n, 2);
    } return this.addToNumericResult(t, r, u, 10), -1; };
    pt.prototype.emitNumericEntity = function (t, u) { var r; if (this.consumed <= u)
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (t === H.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === G.Strict)
        return 0; return this.emitCodePoint(Se(this.result), this.consumed), this.errors && (t !== H.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    pt.prototype.stateNamedEntity = function (t, u) { var r = this.decodeTree, n = r[this.treeIndex], i = (n & ut.VALUE_LENGTH) >> 14; for (; u < t.length; u++, this.excess++) {
        var o = t.charCodeAt(u);
        if (this.treeIndex = zr(r, n, this.treeIndex + Math.max(1, i), o), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === G.Attribute && (i === 0 || Vr(o)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (n = r[this.treeIndex], i = (n & ut.VALUE_LENGTH) >> 14, i !== 0) {
            if (o === H.SEMI)
                return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this.excess);
            this.decodeMode !== G.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    pt.prototype.emitNotTerminatedNamedEntity = function () { var t; var _b = this, u = _b.result, r = _b.decodeTree, n = (r[u] & ut.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(u, n, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed; };
    pt.prototype.emitNamedEntityData = function (t, u, r) { var n = this.decodeTree; return this.emitCodePoint(u === 1 ? n[t] & ~ut.VALUE_LENGTH : n[t + 1], r), u === 3 && this.emitCodePoint(n[t + 2], r), r; };
    pt.prototype.end = function () { var t; switch (this.state) {
        case R.NamedEntity: return this.result !== 0 && (this.decodeMode !== G.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case R.NumericDecimal: return this.emitNumericEntity(0, 2);
        case R.NumericHex: return this.emitNumericEntity(0, 3);
        case R.NumericStart: return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case R.EntityStart: return 0;
    } };
    return pt;
}());
function Su(e) { var t = "", u = new pt(e, function (r) { return t += bt(r); }); return function (n, i) { var o = 0, d = 0; for (; (d = n.indexOf("&", d)) >= 0;) {
    t += n.slice(o, d), u.startEntity(i);
    var m = u.write(n, d + 1);
    if (m < 0) {
        o = d + u.end();
        break;
    }
    o = d + m, d = m === 0 ? o + 1 : o;
} var p = t + n.slice(o); return t = "", p; }; }
function zr(e, t, u, r) { var n = (t & ut.BRANCH_LENGTH) >> 7, i = t & ut.JUMP_TABLE; if (n === 0)
    return i !== 0 && r === i ? u : -1; if (i) {
    var p = r - i;
    return p < 0 || p >= n ? -1 : e[u + p] - 1;
} var o = u, d = o + n - 1; for (; o <= d;) {
    var p = o + d >>> 1, m = e[p];
    if (m < r)
        o = p + 1;
    else if (m > r)
        d = p - 1;
    else
        return e[p + n];
} return -1; }
var p0 = Su(jt), m0 = Su(Gt);
var T;
(function (e) { e[e.Tab = 9] = "Tab", e[e.NewLine = 10] = "NewLine", e[e.FormFeed = 12] = "FormFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.Number = 35] = "Number", e[e.Amp = 38] = "Amp", e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Dash = 45] = "Dash", e[e.Slash = 47] = "Slash", e[e.Zero = 48] = "Zero", e[e.Nine = 57] = "Nine", e[e.Semi = 59] = "Semi", e[e.Lt = 60] = "Lt", e[e.Eq = 61] = "Eq", e[e.Gt = 62] = "Gt", e[e.Questionmark = 63] = "Questionmark", e[e.UpperA = 65] = "UpperA", e[e.LowerA = 97] = "LowerA", e[e.UpperF = 70] = "UpperF", e[e.LowerF = 102] = "LowerF", e[e.UpperZ = 90] = "UpperZ", e[e.LowerZ = 122] = "LowerZ", e[e.LowerX = 120] = "LowerX", e[e.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(T || (T = {}));
var g;
(function (e) { e[e.Text = 1] = "Text", e[e.BeforeTagName = 2] = "BeforeTagName", e[e.InTagName = 3] = "InTagName", e[e.InSelfClosingTag = 4] = "InSelfClosingTag", e[e.BeforeClosingTagName = 5] = "BeforeClosingTagName", e[e.InClosingTagName = 6] = "InClosingTagName", e[e.AfterClosingTagName = 7] = "AfterClosingTagName", e[e.BeforeAttributeName = 8] = "BeforeAttributeName", e[e.InAttributeName = 9] = "InAttributeName", e[e.AfterAttributeName = 10] = "AfterAttributeName", e[e.BeforeAttributeValue = 11] = "BeforeAttributeValue", e[e.InAttributeValueDq = 12] = "InAttributeValueDq", e[e.InAttributeValueSq = 13] = "InAttributeValueSq", e[e.InAttributeValueNq = 14] = "InAttributeValueNq", e[e.BeforeDeclaration = 15] = "BeforeDeclaration", e[e.InDeclaration = 16] = "InDeclaration", e[e.InProcessingInstruction = 17] = "InProcessingInstruction", e[e.BeforeComment = 18] = "BeforeComment", e[e.CDATASequence = 19] = "CDATASequence", e[e.InSpecialComment = 20] = "InSpecialComment", e[e.InCommentLike = 21] = "InCommentLike", e[e.BeforeSpecialS = 22] = "BeforeSpecialS", e[e.BeforeSpecialT = 23] = "BeforeSpecialT", e[e.SpecialStartSequence = 24] = "SpecialStartSequence", e[e.InSpecialTag = 25] = "InSpecialTag", e[e.InEntity = 26] = "InEntity"; })(g || (g = {}));
function K(e) { return e === T.Space || e === T.NewLine || e === T.Tab || e === T.FormFeed || e === T.CarriageReturn; }
function _t(e) { return e === T.Slash || e === T.Gt || K(e); }
function jr(e) { return e >= T.LowerA && e <= T.LowerZ || e >= T.UpperA && e <= T.UpperZ; }
var _;
(function (e) { e[e.NoValue = 0] = "NoValue", e[e.Unquoted = 1] = "Unquoted", e[e.Single = 2] = "Single", e[e.Double = 3] = "Double"; })(_ || (_ = {}));
var P = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, mt = (function () {
    function mt(_b, r) {
        var _c = _b.xmlMode, t = _c === void 0 ? !1 : _c, _d = _b.decodeEntities, u = _d === void 0 ? !0 : _d;
        var _this = this;
        this.cbs = r, this.state = g.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = g.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = t, this.decodeEntities = u, this.entityDecoder = new pt(t ? Gt : jt, function (n, i) { return _this.emitCodePoint(n, i); });
    }
    mt.prototype.reset = function () { this.state = g.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = g.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    mt.prototype.write = function (t) { this.offset += this.buffer.length, this.buffer = t, this.parse(); };
    mt.prototype.end = function () { this.running && this.finish(); };
    mt.prototype.pause = function () { this.running = !1; };
    mt.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    mt.prototype.stateText = function (t) { t === T.Lt || !this.decodeEntities && this.fastForwardTo(T.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = g.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && t === T.Amp && this.startEntity(); };
    mt.prototype.stateSpecialStartSequence = function (t) { var u = this.sequenceIndex === this.currentSequence.length; if (!(u ? _t(t) : (t | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!u) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = g.InTagName, this.stateInTagName(t); };
    mt.prototype.stateInSpecialTag = function (t) { if (this.sequenceIndex === this.currentSequence.length) {
        if (t === T.Gt || K(t)) {
            var u = this.index - this.currentSequence.length;
            if (this.sectionStart < u) {
                var r = this.index;
                this.index = u, this.cbs.ontext(this.sectionStart, u), this.index = r;
            }
            this.isSpecial = !1, this.sectionStart = u + 2, this.stateInClosingTagName(t);
            return;
        }
        this.sequenceIndex = 0;
    } (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === P.TitleEnd ? this.decodeEntities && t === T.Amp && this.startEntity() : this.fastForwardTo(T.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === T.Lt); };
    mt.prototype.stateCDATASequence = function (t) { t === P.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === P.Cdata.length && (this.state = g.InCommentLike, this.currentSequence = P.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = g.InDeclaration, this.stateInDeclaration(t)); };
    mt.prototype.fastForwardTo = function (t) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === t)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    mt.prototype.stateInCommentLike = function (t) { t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === P.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = g.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    mt.prototype.isTagStartChar = function (t) { return this.xmlMode ? !_t(t) : jr(t); };
    mt.prototype.startSpecial = function (t, u) { this.isSpecial = !0, this.currentSequence = t, this.sequenceIndex = u, this.state = g.SpecialStartSequence; };
    mt.prototype.stateBeforeTagName = function (t) { if (t === T.ExclamationMark)
        this.state = g.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (t === T.Questionmark)
        this.state = g.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(t)) {
        var u = t | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = g.InTagName : u === P.ScriptEnd[2] ? this.state = g.BeforeSpecialS : u === P.TitleEnd[2] ? this.state = g.BeforeSpecialT : this.state = g.InTagName;
    }
    else
        t === T.Slash ? this.state = g.BeforeClosingTagName : (this.state = g.Text, this.stateText(t)); };
    mt.prototype.stateInTagName = function (t) { _t(t) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = g.BeforeAttributeName, this.stateBeforeAttributeName(t)); };
    mt.prototype.stateBeforeClosingTagName = function (t) { K(t) || (t === T.Gt ? this.state = g.Text : (this.state = this.isTagStartChar(t) ? g.InClosingTagName : g.InSpecialComment, this.sectionStart = this.index)); };
    mt.prototype.stateInClosingTagName = function (t) { (t === T.Gt || K(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = g.AfterClosingTagName, this.stateAfterClosingTagName(t)); };
    mt.prototype.stateAfterClosingTagName = function (t) { (t === T.Gt || this.fastForwardTo(T.Gt)) && (this.state = g.Text, this.sectionStart = this.index + 1); };
    mt.prototype.stateBeforeAttributeName = function (t) { t === T.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = g.InSpecialTag, this.sequenceIndex = 0) : this.state = g.Text, this.sectionStart = this.index + 1) : t === T.Slash ? this.state = g.InSelfClosingTag : K(t) || (this.state = g.InAttributeName, this.sectionStart = this.index); };
    mt.prototype.stateInSelfClosingTag = function (t) { t === T.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = g.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : K(t) || (this.state = g.BeforeAttributeName, this.stateBeforeAttributeName(t)); };
    mt.prototype.stateInAttributeName = function (t) { (t === T.Eq || _t(t)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = g.AfterAttributeName, this.stateAfterAttributeName(t)); };
    mt.prototype.stateAfterAttributeName = function (t) { t === T.Eq ? this.state = g.BeforeAttributeValue : t === T.Slash || t === T.Gt ? (this.cbs.onattribend(_.NoValue, this.sectionStart), this.sectionStart = -1, this.state = g.BeforeAttributeName, this.stateBeforeAttributeName(t)) : K(t) || (this.cbs.onattribend(_.NoValue, this.sectionStart), this.state = g.InAttributeName, this.sectionStart = this.index); };
    mt.prototype.stateBeforeAttributeValue = function (t) { t === T.DoubleQuote ? (this.state = g.InAttributeValueDq, this.sectionStart = this.index + 1) : t === T.SingleQuote ? (this.state = g.InAttributeValueSq, this.sectionStart = this.index + 1) : K(t) || (this.sectionStart = this.index, this.state = g.InAttributeValueNq, this.stateInAttributeValueNoQuotes(t)); };
    mt.prototype.handleInAttributeValue = function (t, u) { t === u || !this.decodeEntities && this.fastForwardTo(u) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(u === T.DoubleQuote ? _.Double : _.Single, this.index + 1), this.state = g.BeforeAttributeName) : this.decodeEntities && t === T.Amp && this.startEntity(); };
    mt.prototype.stateInAttributeValueDoubleQuotes = function (t) { this.handleInAttributeValue(t, T.DoubleQuote); };
    mt.prototype.stateInAttributeValueSingleQuotes = function (t) { this.handleInAttributeValue(t, T.SingleQuote); };
    mt.prototype.stateInAttributeValueNoQuotes = function (t) { K(t) || t === T.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(_.Unquoted, this.index), this.state = g.BeforeAttributeName, this.stateBeforeAttributeName(t)) : this.decodeEntities && t === T.Amp && this.startEntity(); };
    mt.prototype.stateBeforeDeclaration = function (t) { t === T.OpeningSquareBracket ? (this.state = g.CDATASequence, this.sequenceIndex = 0) : this.state = t === T.Dash ? g.BeforeComment : g.InDeclaration; };
    mt.prototype.stateInDeclaration = function (t) { (t === T.Gt || this.fastForwardTo(T.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = g.Text, this.sectionStart = this.index + 1); };
    mt.prototype.stateInProcessingInstruction = function (t) { (t === T.Gt || this.fastForwardTo(T.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = g.Text, this.sectionStart = this.index + 1); };
    mt.prototype.stateBeforeComment = function (t) { t === T.Dash ? (this.state = g.InCommentLike, this.currentSequence = P.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = g.InDeclaration; };
    mt.prototype.stateInSpecialComment = function (t) { (t === T.Gt || this.fastForwardTo(T.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = g.Text, this.sectionStart = this.index + 1); };
    mt.prototype.stateBeforeSpecialS = function (t) { var u = t | 32; u === P.ScriptEnd[3] ? this.startSpecial(P.ScriptEnd, 4) : u === P.StyleEnd[3] ? this.startSpecial(P.StyleEnd, 4) : (this.state = g.InTagName, this.stateInTagName(t)); };
    mt.prototype.stateBeforeSpecialT = function (t) { var u = t | 32; u === P.TitleEnd[3] ? this.startSpecial(P.TitleEnd, 4) : u === P.TextareaEnd[3] ? this.startSpecial(P.TextareaEnd, 4) : (this.state = g.InTagName, this.stateInTagName(t)); };
    mt.prototype.startEntity = function () { this.baseState = this.state, this.state = g.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? G.Strict : this.baseState === g.Text || this.baseState === g.InSpecialTag ? G.Legacy : G.Attribute); };
    mt.prototype.stateInEntity = function () { var t = this.entityDecoder.write(this.buffer, this.index - this.offset); t >= 0 ? (this.state = this.baseState, t === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    mt.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === g.Text || this.state === g.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === g.InAttributeValueDq || this.state === g.InAttributeValueSq || this.state === g.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    mt.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    mt.prototype.parse = function () { for (; this.shouldContinue();) {
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
    mt.prototype.finish = function () { this.state === g.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    mt.prototype.handleTrailingData = function () { var t = this.buffer.length + this.offset; this.sectionStart >= t || (this.state === g.InCommentLike ? this.currentSequence === P.CdataEnd ? this.cbs.oncdata(this.sectionStart, t, 0) : this.cbs.oncomment(this.sectionStart, t, 0) : this.state === g.InTagName || this.state === g.BeforeAttributeName || this.state === g.BeforeAttributeValue || this.state === g.AfterAttributeName || this.state === g.InAttributeName || this.state === g.InAttributeValueSq || this.state === g.InAttributeValueDq || this.state === g.InAttributeValueNq || this.state === g.InClosingTagName || this.cbs.ontext(this.sectionStart, t)); };
    mt.prototype.emitCodePoint = function (t, u) { this.baseState !== g.Text && this.baseState !== g.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.onattribentity(t)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.ontextentity(t, this.sectionStart)); };
    return mt;
}());
var gt = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), L = new Set(["p"]), Au = new Set(["thead", "tbody"]), Tu = new Set(["dd", "dt"]), Eu = new Set(["rt", "rp"]), Gr = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", L], ["h1", L], ["h2", L], ["h3", L], ["h4", L], ["h5", L], ["h6", L], ["select", gt], ["input", gt], ["output", gt], ["button", gt], ["datalist", gt], ["textarea", gt], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", Tu], ["dt", Tu], ["address", L], ["article", L], ["aside", L], ["blockquote", L], ["details", L], ["div", L], ["dl", L], ["fieldset", L], ["figcaption", L], ["figure", L], ["footer", L], ["form", L], ["header", L], ["hr", L], ["main", L], ["nav", L], ["ol", L], ["pre", L], ["section", L], ["table", L], ["ul", L], ["rt", Eu], ["rp", Eu], ["tbody", Au], ["tfoot", Au]]), _r = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Nu = new Set(["math", "svg"]), ku = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), $r = /\s|\//, Ct = (function () {
    function Ct(t, u) {
        if (u === void 0) { u = {}; }
        var r, n, i, o, d, p;
        this.options = u, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = t != null ? t : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r = u.lowerCaseTags) !== null && r !== void 0 ? r : this.htmlMode, this.lowerCaseAttributeNames = (n = u.lowerCaseAttributeNames) !== null && n !== void 0 ? n : this.htmlMode, this.recognizeSelfClosing = (i = u.recognizeSelfClosing) !== null && i !== void 0 ? i : !this.htmlMode, this.tokenizer = new ((o = u.Tokenizer) !== null && o !== void 0 ? o : mt)(this.options, this), this.foreignContext = [!this.htmlMode], (p = (d = this.cbs).onparserinit) === null || p === void 0 || p.call(d, this);
    }
    Ct.prototype.ontext = function (t, u) { var r, n; var i = this.getSlice(t, u); this.endIndex = u - 1, (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, i), this.startIndex = u; };
    Ct.prototype.ontextentity = function (t, u) { var r, n; this.endIndex = u - 1, (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, bt(t)), this.startIndex = u; };
    Ct.prototype.isVoidElement = function (t) { return this.htmlMode && _r.has(t); };
    Ct.prototype.onopentagname = function (t, u) { this.endIndex = u; var r = this.getSlice(t, u); this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r); };
    Ct.prototype.emitOpenTag = function (t) { var u, r, n, i; this.openTagStart = this.startIndex, this.tagname = t; var o = this.htmlMode && Gr.get(t); if (o)
        for (; this.stack.length > 0 && o.has(this.stack[0]);) {
            var d = this.stack.shift();
            (r = (u = this.cbs).onclosetag) === null || r === void 0 || r.call(u, d, !0);
        } this.isVoidElement(t) || (this.stack.unshift(t), this.htmlMode && (Nu.has(t) ? this.foreignContext.unshift(!0) : ku.has(t) && this.foreignContext.unshift(!1))), (i = (n = this.cbs).onopentagname) === null || i === void 0 || i.call(n, t), this.cbs.onopentag && (this.attribs = {}); };
    Ct.prototype.endOpenTag = function (t) { var u, r; this.startIndex = this.openTagStart, this.attribs && ((r = (u = this.cbs).onopentag) === null || r === void 0 || r.call(u, this.tagname, this.attribs, t), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    Ct.prototype.onopentagend = function (t) { this.endIndex = t, this.endOpenTag(!1), this.startIndex = t + 1; };
    Ct.prototype.onclosetag = function (t, u) { var r, n, i, o, d, p, m, x; this.endIndex = u; var E = this.getSlice(t, u); if (this.lowerCaseTagNames && (E = E.toLowerCase()), this.htmlMode && (Nu.has(E) || ku.has(E)) && this.foreignContext.shift(), this.isVoidElement(E))
        this.htmlMode && E === "br" && ((o = (i = this.cbs).onopentagname) === null || o === void 0 || o.call(i, "br"), (p = (d = this.cbs).onopentag) === null || p === void 0 || p.call(d, "br", {}, !0), (x = (m = this.cbs).onclosetag) === null || x === void 0 || x.call(m, "br", !1));
    else {
        var v = this.stack.indexOf(E);
        if (v !== -1)
            for (var S = 0; S <= v; S++) {
                var N = this.stack.shift();
                (n = (r = this.cbs).onclosetag) === null || n === void 0 || n.call(r, N, S !== v);
            }
        else
            this.htmlMode && E === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = u + 1; };
    Ct.prototype.onselfclosingtag = function (t) { this.endIndex = t, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = t + 1) : this.onopentagend(t); };
    Ct.prototype.closeCurrentTag = function (t) { var u, r; var n = this.tagname; this.endOpenTag(t), this.stack[0] === n && ((r = (u = this.cbs).onclosetag) === null || r === void 0 || r.call(u, n, !t), this.stack.shift()); };
    Ct.prototype.onattribname = function (t, u) { this.startIndex = t; var r = this.getSlice(t, u); this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r; };
    Ct.prototype.onattribdata = function (t, u) { this.attribvalue += this.getSlice(t, u); };
    Ct.prototype.onattribentity = function (t) { this.attribvalue += bt(t); };
    Ct.prototype.onattribend = function (t, u) { var r, n; this.endIndex = u, (n = (r = this.cbs).onattribute) === null || n === void 0 || n.call(r, this.attribname, this.attribvalue, t === _.Double ? '"' : t === _.Single ? "'" : t === _.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    Ct.prototype.getInstructionName = function (t) { var u = t.search($r), r = u < 0 ? t : t.substr(0, u); return this.lowerCaseTagNames && (r = r.toLowerCase()), r; };
    Ct.prototype.ondeclaration = function (t, u) { this.endIndex = u; var r = this.getSlice(t, u); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(n), "!".concat(r));
    } this.startIndex = u + 1; };
    Ct.prototype.onprocessinginstruction = function (t, u) { this.endIndex = u; var r = this.getSlice(t, u); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(n), "?".concat(r));
    } this.startIndex = u + 1; };
    Ct.prototype.oncomment = function (t, u, r) { var n, i, o, d; this.endIndex = u, (i = (n = this.cbs).oncomment) === null || i === void 0 || i.call(n, this.getSlice(t, u - r)), (d = (o = this.cbs).oncommentend) === null || d === void 0 || d.call(o), this.startIndex = u + 1; };
    Ct.prototype.oncdata = function (t, u, r) { var n, i, o, d, p, m, x, E, v, S; this.endIndex = u; var N = this.getSlice(t, u - r); !this.htmlMode || this.options.recognizeCDATA ? ((i = (n = this.cbs).oncdatastart) === null || i === void 0 || i.call(n), (d = (o = this.cbs).ontext) === null || d === void 0 || d.call(o, N), (m = (p = this.cbs).oncdataend) === null || m === void 0 || m.call(p)) : ((E = (x = this.cbs).oncomment) === null || E === void 0 || E.call(x, "[CDATA[".concat(N, "]]")), (S = (v = this.cbs).oncommentend) === null || S === void 0 || S.call(v)), this.startIndex = u + 1; };
    Ct.prototype.onend = function () { var t, u; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = 0; r < this.stack.length; r++)
            this.cbs.onclosetag(this.stack[r], !0);
    } (u = (t = this.cbs).onend) === null || u === void 0 || u.call(t); };
    Ct.prototype.reset = function () { var t, u, r, n; (u = (t = this.cbs).onreset) === null || u === void 0 || u.call(t), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (n = (r = this.cbs).onparserinit) === null || n === void 0 || n.call(r, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    Ct.prototype.parseComplete = function (t) { this.reset(), this.end(t); };
    Ct.prototype.getSlice = function (t, u) { for (; t - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var r = this.buffers[0].slice(t - this.bufferOffset, u - this.bufferOffset); for (; u - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), r += this.buffers[0].slice(0, u - this.bufferOffset); return r; };
    Ct.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    Ct.prototype.write = function (t) { var u, r; if (this.ended) {
        (r = (u = this.cbs).onerror) === null || r === void 0 || r.call(u, new Error(".write() after done!"));
        return;
    } this.buffers.push(t), this.tokenizer.running && (this.tokenizer.write(t), this.writeIndex++); };
    Ct.prototype.end = function (t) { var u, r; if (this.ended) {
        (r = (u = this.cbs).onerror) === null || r === void 0 || r.call(u, new Error(".end() after done!"));
        return;
    } t && this.write(t), this.ended = !0, this.tokenizer.end(); };
    Ct.prototype.pause = function () { this.tokenizer.pause(); };
    Ct.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    Ct.prototype.parseChunk = function (t) { this.write(t); };
    Ct.prototype.done = function (t) { this.end(t); };
    return Ct;
}());
var $t = {};
we($t, { CDATA: function () { return Ie; }, Comment: function () { return qe; }, Directive: function () { return ke; }, Doctype: function () { return Me; }, ElementType: function () { return q; }, Root: function () { return Ee; }, Script: function () { return Ce; }, Style: function () { return De; }, Tag: function () { return Le; }, Text: function () { return Ne; }, isTag: function () { return Te; } });
var q;
(function (e) { e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"; })(q || (q = {}));
function Te(e) { return e.type === q.Tag || e.type === q.Script || e.type === q.Style; }
var Ee = q.Root, Ne = q.Text, ke = q.Directive, qe = q.Comment, Ce = q.Script, De = q.Style, Le = q.Tag, Ie = q.CDATA, Me = q.Doctype;
var Wt = (function () {
    function Wt() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(Wt.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (t) { this.parent = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wt.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (t) { this.prev = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wt.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (t) { this.next = t; },
        enumerable: false,
        configurable: true
    });
    Wt.prototype.cloneNode = function (t) {
        if (t === void 0) { t = !1; }
        return qu(this, t);
    };
    return Wt;
}()), Dt = (function (_super) {
    __extends(Dt, _super);
    function Dt(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = t;
        return _this;
    }
    Object.defineProperty(Dt.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (t) { this.data = t; },
        enumerable: false,
        configurable: true
    });
    return Dt;
}(Wt)), xt = (function (_super) {
    __extends(xt, _super);
    function xt() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = q.Text;
        return _this;
    }
    Object.defineProperty(xt.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return xt;
}(Dt)), Lt = (function (_super) {
    __extends(Lt, _super);
    function Lt() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = q.Comment;
        return _this;
    }
    Object.defineProperty(Lt.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return Lt;
}(Dt)), It = (function (_super) {
    __extends(It, _super);
    function It(t, u) {
        var _this = this;
        _this = _super.call(this, u) || this, _this.name = t, _this.type = q.Directive;
        return _this;
    }
    Object.defineProperty(It.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return It;
}(Dt)), Mt = (function (_super) {
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
}(Wt)), Ut = (function (_super) {
    __extends(Ut, _super);
    function Ut() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = q.CDATA;
        return _this;
    }
    Object.defineProperty(Ut.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return Ut;
}(Mt)), yt = (function (_super) {
    __extends(yt, _super);
    function yt() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = q.Root;
        return _this;
    }
    Object.defineProperty(yt.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return yt;
}(Mt)), Ot = (function (_super) {
    __extends(Ot, _super);
    function Ot(t, u, r, n) {
        if (r === void 0) { r = []; }
        if (n === void 0) { n = t === "script" ? q.Script : t === "style" ? q.Style : q.Tag; }
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = t, _this.attribs = u, _this.type = n;
        return _this;
    }
    Object.defineProperty(Ot.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ot.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (t) { this.name = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ot.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (t) { var u, r; return { name: t, value: _this.attribs[t], namespace: (u = _this["x-attribsNamespace"]) === null || u === void 0 ? void 0 : u[t], prefix: (r = _this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[t] }; });
        },
        enumerable: false,
        configurable: true
    });
    return Ot;
}(Mt));
function D(e) { return Te(e); }
function wt(e) { return e.type === q.CDATA; }
function Q(e) { return e.type === q.Text; }
function Rt(e) { return e.type === q.Comment; }
function Wr(e) { return e.type === q.Directive; }
function Oe(e) { return e.type === q.Root; }
function B(e) { return Object.prototype.hasOwnProperty.call(e, "children"); }
function qu(e, t) {
    if (t === void 0) { t = !1; }
    var u;
    if (Q(e))
        u = new xt(e.data);
    else if (Rt(e))
        u = new Lt(e.data);
    else if (D(e)) {
        var r = t ? Ue(e.children) : [], n_1 = new Ot(e.name, X({}, e.attribs), r);
        r.forEach(function (i) { return i.parent = n_1; }), e.namespace != null && (n_1.namespace = e.namespace), e["x-attribsNamespace"] && (n_1["x-attribsNamespace"] = X({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (n_1["x-attribsPrefix"] = X({}, e["x-attribsPrefix"])), u = n_1;
    }
    else if (wt(e)) {
        var r = t ? Ue(e.children) : [], n_2 = new Ut(r);
        r.forEach(function (i) { return i.parent = n_2; }), u = n_2;
    }
    else if (Oe(e)) {
        var r = t ? Ue(e.children) : [], n_3 = new yt(r);
        r.forEach(function (i) { return i.parent = n_3; }), e["x-mode"] && (n_3["x-mode"] = e["x-mode"]), u = n_3;
    }
    else if (Wr(e)) {
        var r = new It(e.name, e.data);
        e["x-name"] != null && (r["x-name"] = e["x-name"], r["x-publicId"] = e["x-publicId"], r["x-systemId"] = e["x-systemId"]), u = r;
    }
    else
        throw new Error("Not implemented yet: ".concat(e.type));
    return u.startIndex = e.startIndex, u.endIndex = e.endIndex, e.sourceCodeLocation != null && (u.sourceCodeLocation = e.sourceCodeLocation), u;
}
function Ue(e) { var t = e.map(function (u) { return qu(u, !0); }); for (var u = 1; u < t.length; u++)
    t[u].prev = t[u - 1], t[u - 1].next = t[u]; return t; }
var Cu = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, vt = (function () {
    function vt(t, u, r) {
        this.dom = [], this.root = new yt(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof u == "function" && (r = u, u = Cu), typeof t == "object" && (u = t, t = void 0), this.callback = t != null ? t : null, this.options = u != null ? u : Cu, this.elementCB = r != null ? r : null;
    }
    vt.prototype.onparserinit = function (t) { this.parser = t; };
    vt.prototype.onreset = function () { this.dom = [], this.root = new yt(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    vt.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    vt.prototype.onerror = function (t) { this.handleCallback(t); };
    vt.prototype.onclosetag = function () { this.lastNode = null; var t = this.tagStack.pop(); this.options.withEndIndices && (t.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(t); };
    vt.prototype.onopentag = function (t, u) { var r = this.options.xmlMode ? q.Tag : void 0, n = new Ot(t, u, void 0, r); this.addNode(n), this.tagStack.push(n); };
    vt.prototype.ontext = function (t) { var u = this.lastNode; if (u && u.type === q.Text)
        u.data += t, this.options.withEndIndices && (u.endIndex = this.parser.endIndex);
    else {
        var r = new xt(t);
        this.addNode(r), this.lastNode = r;
    } };
    vt.prototype.oncomment = function (t) { if (this.lastNode && this.lastNode.type === q.Comment) {
        this.lastNode.data += t;
        return;
    } var u = new Lt(t); this.addNode(u), this.lastNode = u; };
    vt.prototype.oncommentend = function () { this.lastNode = null; };
    vt.prototype.oncdatastart = function () { var t = new xt(""), u = new Ut([t]); this.addNode(u), t.parent = u, this.lastNode = t; };
    vt.prototype.oncdataend = function () { this.lastNode = null; };
    vt.prototype.onprocessinginstruction = function (t, u) { var r = new It(t, u); this.addNode(r); };
    vt.prototype.handleCallback = function (t) { if (typeof this.callback == "function")
        this.callback(t, this.dom);
    else if (t)
        throw t; };
    vt.prototype.addNode = function (t) { var u = this.tagStack[this.tagStack.length - 1], r = u.children[u.children.length - 1]; this.options.withStartIndices && (t.startIndex = this.parser.startIndex), this.options.withEndIndices && (t.endIndex = this.parser.endIndex), u.children.push(t), r && (t.prev = r, r.next = t), t.parent = u, this.lastNode = null; };
    return vt;
}());
var Z = {};
we(Z, { DocumentPosition: function () { return $; }, append: function () { return ha; }, appendChild: function () { return da; }, compareDocumentPosition: function () { return Gu; }, existsOne: function () { return zu; }, filter: function () { return At; }, find: function () { return te; }, findAll: function () { return ma; }, findOne: function () { return ee; }, findOneChild: function () { return pa; }, getAttributeValue: function () { return ca; }, getChildren: function () { return Kt; }, getElementById: function () { return wa; }, getElements: function () { return ya; }, getElementsByClassName: function () { return va; }, getElementsByTagName: function () { return ot; }, getElementsByTagType: function () { return Sa; }, getFeed: function () { return We; }, getInnerHTML: function () { return sa; }, getName: function () { return la; }, getOuterHTML: function () { return Fu; }, getParent: function () { return Vu; }, getSiblings: function () { return Yt; }, getText: function () { return Jt; }, hasAttrib: function () { return oa; }, hasChildren: function () { return B; }, innerText: function () { return Ve; }, isCDATA: function () { return wt; }, isComment: function () { return Rt; }, isDocument: function () { return Oe; }, isTag: function () { return D; }, isText: function () { return Q; }, nextElementSibling: function () { return ze; }, prepend: function () { return Ge; }, prependChild: function () { return ba; }, prevElementSibling: function () { return je; }, removeElement: function () { return Y; }, removeSubsets: function () { return Aa; }, replaceElement: function () { return fa; }, testElement: function () { return xa; }, textContent: function () { return rt; }, uniqueSort: function () { return $e; } });
function Xt(e) { for (var t = 1; t < e.length; t++)
    e[t][0] += e[t - 1][0] + 1; return e; }
var Xr = new Map(Xt([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(Xt([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(Xt([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(Xt([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var Re = /["&'<>$\x80-\uFFFF]/g, Du = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), Lu = String.prototype.codePointAt != null ? function (e, t) { return e.codePointAt(t); } : function (e, t) { return (e.charCodeAt(t) & 64512) === 55296 ? (e.charCodeAt(t) - 55296) * 1024 + e.charCodeAt(t + 1) - 56320 + 65536 : e.charCodeAt(t); };
function Ht(e) { var t = "", u = 0, r; for (; (r = Re.exec(e)) !== null;) {
    var n = r.index, i = e.charCodeAt(n), o = Du.get(i);
    o !== void 0 ? (t += e.substring(u, n) + o, u = n + 1) : (t += "".concat(e.substring(u, n), "&#x").concat(Lu(e, n).toString(16), ";"), u = Re.lastIndex += +((i & 64512) === 55296));
} return t + e.substr(u); }
function He(e, t) { return function (r) { var n, i = 0, o = ""; for (; n = e.exec(r);)
    i !== n.index && (o += r.substring(i, n.index)), o += t.get(n[0].charCodeAt(0)), i = n.index + 1; return o + r.substring(i); }; }
var Iu = He(/[&<>'"]/g, Du), Qt = He(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), Zt = He(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var Mu;
(function (e) { e[e.XML = 0] = "XML", e[e.HTML = 1] = "HTML"; })(Mu || (Mu = {}));
var Uu;
(function (e) { e[e.UTF8 = 0] = "UTF8", e[e.ASCII = 1] = "ASCII", e[e.Extensive = 2] = "Extensive", e[e.Attribute = 3] = "Attribute", e[e.Text = 4] = "Text"; })(Uu || (Uu = {}));
var Hu = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (e) { return [e.toLowerCase(), e]; })), Pu = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (e) { return [e.toLowerCase(), e]; }));
var Zr = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function Jr(e) { return e.replace(/"/g, "&quot;"); }
function Kr(e, t) { var u; if (!e)
    return; var r = ((u = t.encodeEntities) !== null && u !== void 0 ? u : t.decodeEntities) === !1 ? Jr : t.xmlMode || t.encodeEntities !== "utf8" ? Ht : Qt; return Object.keys(e).map(function (n) { var i, o; var d = (i = e[n]) !== null && i !== void 0 ? i : ""; return t.xmlMode === "foreign" && (n = (o = Pu.get(n)) !== null && o !== void 0 ? o : n), !t.emptyAttrs && !t.xmlMode && d === "" ? n : "".concat(n, "=\"").concat(r(d), "\""); }).join(" "); }
var Bu = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function Fe(e, t) {
    if (t === void 0) { t = {}; }
    var u = "length" in e ? e : [e], r = "";
    for (var n = 0; n < u.length; n++)
        r += Yr(u[n], t);
    return r;
}
var St = Fe;
function Yr(e, t) { switch (e.type) {
    case Ee: return Fe(e.children, t);
    case Me:
    case ke: return ra(e);
    case qe: return ia(e);
    case Ie: return na(e);
    case Ce:
    case De:
    case Le: return ua(e, t);
    case Ne: return aa(e, t);
} }
var ta = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), ea = new Set(["svg", "math"]);
function ua(e, t) { var u; t.xmlMode === "foreign" && (e.name = (u = Hu.get(e.name)) !== null && u !== void 0 ? u : e.name, e.parent && ta.has(e.parent.name) && (t = st(X({}, t), { xmlMode: !1 }))), !t.xmlMode && ea.has(e.name) && (t = st(X({}, t), { xmlMode: "foreign" })); var r = "<".concat(e.name), n = Kr(e.attribs, t); return n && (r += " ".concat(n)), e.children.length === 0 && (t.xmlMode ? t.selfClosingTags !== !1 : t.selfClosingTags && Bu.has(e.name)) ? (t.xmlMode || (r += " "), r += "/>") : (r += ">", e.children.length > 0 && (r += Fe(e.children, t)), (t.xmlMode || !Bu.has(e.name)) && (r += "</".concat(e.name, ">"))), r; }
function ra(e) { return "<".concat(e.data, ">"); }
function aa(e, t) { var u; var r = e.data || ""; return ((u = t.encodeEntities) !== null && u !== void 0 ? u : t.decodeEntities) !== !1 && !(!t.xmlMode && e.parent && Zr.has(e.parent.name)) && (r = t.xmlMode || t.encodeEntities !== "utf8" ? Ht(r) : Zt(r)), r; }
function na(e) { return "<![CDATA[".concat(e.children[0].data, "]]>"); }
function ia(e) { return "<!--".concat(e.data, "-->"); }
function Fu(e, t) { return St(e, t); }
function sa(e, t) { return B(e) ? e.children.map(function (u) { return Fu(u, t); }).join("") : ""; }
function Jt(e) {
    return Array.isArray(e) ? e.map(Jt).join("") : D(e) ? e.name === "br" ? "\n" : Jt(e.children) : wt(e) ? Jt(e.children) : Q(e) ? e.data : "";
}
function rt(e) { return Array.isArray(e) ? e.map(rt).join("") : B(e) && !Rt(e) ? rt(e.children) : Q(e) ? e.data : ""; }
function Ve(e) { return Array.isArray(e) ? e.map(Ve).join("") : B(e) && (e.type === q.Tag || wt(e)) ? Ve(e.children) : Q(e) ? e.data : ""; }
function Kt(e) { return B(e) ? e.children : []; }
function Vu(e) { return e.parent || null; }
function Yt(e) {
    var _b, _c;
    var t = Vu(e);
    if (t != null)
        return Kt(t);
    var u = [e], r = e.prev, n = e.next;
    for (; r != null;)
        u.unshift(r), _b = r, r = _b.prev;
    for (; n != null;)
        u.push(n), _c = n, n = _c.next;
    return u;
}
function ca(e, t) { var u; return (u = e.attribs) === null || u === void 0 ? void 0 : u[t]; }
function oa(e, t) { return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, t) && e.attribs[t] != null; }
function la(e) { return e.name; }
function ze(e) {
    var _b;
    var t = e.next;
    for (; t !== null && !D(t);)
        (_b = t, t = _b.next);
    return t;
}
function je(e) {
    var _b;
    var t = e.prev;
    for (; t !== null && !D(t);)
        (_b = t, t = _b.prev);
    return t;
}
function Y(e) { if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var t = e.parent.children, u = t.lastIndexOf(e);
    u >= 0 && t.splice(u, 1);
} e.next = null, e.prev = null, e.parent = null; }
function fa(e, t) { var u = t.prev = e.prev; u && (u.next = t); var r = t.next = e.next; r && (r.prev = t); var n = t.parent = e.parent; if (n) {
    var i = n.children;
    i[i.lastIndexOf(e)] = t, e.parent = null;
} }
function da(e, t) { if (Y(t), t.next = null, t.parent = e, e.children.push(t) > 1) {
    var u = e.children[e.children.length - 2];
    u.next = t, t.prev = u;
}
else
    t.prev = null; }
function ha(e, t) { Y(t); var u = e.parent, r = e.next; if (t.next = r, t.prev = e, e.next = t, t.parent = u, r) {
    if (r.prev = t, u) {
        var n = u.children;
        n.splice(n.lastIndexOf(r), 0, t);
    }
}
else
    u && u.children.push(t); }
function ba(e, t) { if (Y(t), t.parent = e, t.prev = null, e.children.unshift(t) !== 1) {
    var u = e.children[1];
    u.prev = t, t.next = u;
}
else
    t.next = null; }
function Ge(e, t) { Y(t); var u = e.parent; if (u) {
    var r = u.children;
    r.splice(r.indexOf(e), 0, t);
} e.prev && (e.prev.next = t), t.parent = u, t.prev = e.prev, t.next = e, e.prev = t; }
function At(e, t, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return te(e, Array.isArray(t) ? t : [t], u, r);
}
function te(e, t, u, r) { var n = [], i = [Array.isArray(t) ? t : [t]], o = [0]; for (;;) {
    if (o[0] >= i[0].length) {
        if (o.length === 1)
            return n;
        i.shift(), o.shift();
        continue;
    }
    var d = i[0][o[0]++];
    if (e(d) && (n.push(d), --r <= 0))
        return n;
    u && B(d) && d.children.length > 0 && (o.unshift(0), i.unshift(d.children));
} }
function pa(e, t) { return t.find(e); }
function ee(e, t, u) {
    if (u === void 0) { u = !0; }
    var r = Array.isArray(t) ? t : [t];
    for (var n = 0; n < r.length; n++) {
        var i = r[n];
        if (D(i) && e(i))
            return i;
        if (u && B(i) && i.children.length > 0) {
            var o = ee(e, i.children, !0);
            if (o)
                return o;
        }
    }
    return null;
}
function zu(e, t) { return (Array.isArray(t) ? t : [t]).some(function (u) { return D(u) && e(u) || B(u) && zu(e, u.children); }); }
function ma(e, t) { var u = [], r = [Array.isArray(t) ? t : [t]], n = [0]; for (;;) {
    if (n[0] >= r[0].length) {
        if (r.length === 1)
            return u;
        r.shift(), n.shift();
        continue;
    }
    var i = r[0][n[0]++];
    D(i) && e(i) && u.push(i), B(i) && i.children.length > 0 && (n.unshift(0), r.unshift(i.children));
} }
var ue = { tag_name: function (e) { return typeof e == "function" ? function (t) { return D(t) && e(t.name); } : e === "*" ? D : function (t) { return D(t) && t.name === e; }; }, tag_type: function (e) { return typeof e == "function" ? function (t) { return e(t.type); } : function (t) { return t.type === e; }; }, tag_contains: function (e) { return typeof e == "function" ? function (t) { return Q(t) && e(t.data); } : function (t) { return Q(t) && t.data === e; }; } };
function _e(e, t) { return typeof t == "function" ? function (u) { return D(u) && t(u.attribs[e]); } : function (u) { return D(u) && u.attribs[e] === t; }; }
function ga(e, t) { return function (u) { return e(u) || t(u); }; }
function ju(e) { var t = Object.keys(e).map(function (u) { var r = e[u]; return Object.prototype.hasOwnProperty.call(ue, u) ? ue[u](r) : _e(u, r); }); return t.length === 0 ? null : t.reduce(ga); }
function xa(e, t) { var u = ju(e); return u ? u(t) : !0; }
function ya(e, t, u, r) {
    if (r === void 0) { r = 1 / 0; }
    var n = ju(e);
    return n ? At(n, t, u, r) : [];
}
function wa(e, t, u) {
    if (u === void 0) { u = !0; }
    return Array.isArray(t) || (t = [t]), ee(_e("id", e), t, u);
}
function ot(e, t, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return At(ue.tag_name(e), t, u, r);
}
function va(e, t, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return At(_e("class", e), t, u, r);
}
function Sa(e, t, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return At(ue.tag_type(e), t, u, r);
}
function Aa(e) { var t = e.length; for (; --t >= 0;) {
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
var $;
(function (e) { e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.PRECEDING = 2] = "PRECEDING", e[e.FOLLOWING = 4] = "FOLLOWING", e[e.CONTAINS = 8] = "CONTAINS", e[e.CONTAINED_BY = 16] = "CONTAINED_BY"; })($ || ($ = {}));
function Gu(e, t) { var u = [], r = []; if (e === t)
    return 0; var n = B(e) ? e : e.parent; for (; n;)
    u.unshift(n), n = n.parent; for (n = B(t) ? t : t.parent; n;)
    r.unshift(n), n = n.parent; var i = Math.min(u.length, r.length), o = 0; for (; o < i && u[o] === r[o];)
    o++; if (o === 0)
    return $.DISCONNECTED; var d = u[o - 1], p = d.children, m = u[o], x = r[o]; return p.indexOf(m) > p.indexOf(x) ? d === t ? $.FOLLOWING | $.CONTAINED_BY : $.FOLLOWING : d === e ? $.PRECEDING | $.CONTAINS : $.PRECEDING; }
function $e(e) { return e = e.filter(function (t, u, r) { return !r.includes(t, u + 1); }), e.sort(function (t, u) { var r = Gu(t, u); return r & $.PRECEDING ? -1 : r & $.FOLLOWING ? 1 : 0; }), e; }
function We(e) { var t = re(qa, e); return t ? t.name === "feed" ? Ta(t) : Ea(t) : null; }
function Ta(e) { var t; var u = e.children, r = { type: "atom", items: ot("entry", u).map(function (o) { var d; var p = o.children, m = { media: _u(p) }; V(m, "id", "id", p), V(m, "title", "title", p); var x = (d = re("link", p)) === null || d === void 0 ? void 0 : d.attribs.href; x && (m.link = x); var E = at("summary", p) || at("content", p); E && (m.description = E); var v = at("updated", p); return v && (m.pubDate = new Date(v)), m; }) }; V(r, "id", "id", u), V(r, "title", "title", u); var n = (t = re("link", u)) === null || t === void 0 ? void 0 : t.attribs.href; n && (r.link = n), V(r, "description", "subtitle", u); var i = at("updated", u); return i && (r.updated = new Date(i)), V(r, "author", "email", u, !0), r; }
function Ea(e) { var t, u; var r = (u = (t = re("channel", e.children)) === null || t === void 0 ? void 0 : t.children) !== null && u !== void 0 ? u : [], n = { type: e.name.substr(0, 3), id: "", items: ot("item", e.children).map(function (o) { var d = o.children, p = { media: _u(d) }; V(p, "id", "guid", d), V(p, "title", "title", d), V(p, "link", "link", d), V(p, "description", "description", d); var m = at("pubDate", d) || at("dc:date", d); return m && (p.pubDate = new Date(m)), p; }) }; V(n, "title", "title", r), V(n, "link", "link", r), V(n, "description", "description", r); var i = at("lastBuildDate", r); return i && (n.updated = new Date(i)), V(n, "author", "managingEditor", r, !0), n; }
var Na = ["url", "type", "lang"], ka = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function _u(e) { return ot("media:content", e).map(function (t) {
    var e_4, _b, e_5, _c;
    var u = t.attribs, r = { medium: u.medium, isDefault: !!u.isDefault };
    try {
        for (var Na_1 = __values(Na), Na_1_1 = Na_1.next(); !Na_1_1.done; Na_1_1 = Na_1.next()) {
            var n = Na_1_1.value;
            u[n] && (r[n] = u[n]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (Na_1_1 && !Na_1_1.done && (_b = Na_1.return)) _b.call(Na_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var ka_1 = __values(ka), ka_1_1 = ka_1.next(); !ka_1_1.done; ka_1_1 = ka_1.next()) {
            var n = ka_1_1.value;
            u[n] && (r[n] = parseInt(u[n], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (ka_1_1 && !ka_1_1.done && (_c = ka_1.return)) _c.call(ka_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return u.expression && (r.expression = u.expression), r;
}); }
function re(e, t) { return ot(e, t, !0, 1)[0]; }
function at(e, t, u) {
    if (u === void 0) { u = !1; }
    return rt(ot(e, t, u, 1)).trim();
}
function V(e, t, u, r, n) {
    if (n === void 0) { n = !1; }
    var i = at(u, r, n);
    i && (e[t] = i);
}
function qa(e) { return e === "rss" || e === "feed" || e === "rdf:RDF"; }
function $u(e, t) { var u = new vt(void 0, t); return new Ct(u, t).end(e), u.root; }
var A;
(function (e) { e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"; })(A || (A = {}));
var O;
(function (e) { e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"; })(O || (O = {}));
var Wu = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, Ca = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, Da = new Map([[126, O.Element], [94, O.Start], [36, O.End], [42, O.Any], [33, O.Not], [124, O.Hyphen]]), La = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function lt(e) { switch (e.type) {
    case A.Adjacent:
    case A.Child:
    case A.Descendant:
    case A.Parent:
    case A.Sibling:
    case A.ColumnCombinator: return !0;
    default: return !1;
} }
var Ia = new Set(["contains", "icontains"]);
function Ma(e, t, u) { var r = parseInt(t, 16) - 65536; return r !== r || u ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320); }
function Pt(e) { return e.replace(Ca, Ma); }
function Xe(e) { return e === 39 || e === 34; }
function Xu(e) { return e === 32 || e === 9 || e === 10 || e === 12 || e === 13; }
function nt(e) { var t = [], u = Qu(t, "".concat(e), 0); if (u < e.length)
    throw new Error("Unmatched selector: ".concat(e.slice(u))); return t; }
function Qu(e, t, u) { var r = []; function n(v) { var S = t.slice(u + v).match(Wu); if (!S)
    throw new Error("Expected name, found ".concat(t.slice(u))); var _b = __read(S, 1), N = _b[0]; return u += v + N.length, Pt(N); } function i(v) { for (u += v; u < t.length && Xu(t.charCodeAt(u));)
    u++; } function o() { u += 1; var v = u, S = 1; for (; S > 0 && u < t.length; u++)
    t.charCodeAt(u) === 40 && !d(u) ? S++ : t.charCodeAt(u) === 41 && !d(u) && S--; if (S)
    throw new Error("Parenthesis not matched"); return Pt(t.slice(v, u - 1)); } function d(v) { var S = 0; for (; t.charCodeAt(--v) === 92;)
    S++; return (S & 1) === 1; } function p() { if (r.length > 0 && lt(r[r.length - 1]))
    throw new Error("Did not expect successive traversals."); } function m(v) { if (r.length > 0 && r[r.length - 1].type === A.Descendant) {
    r[r.length - 1].type = v;
    return;
} p(), r.push({ type: v }); } function x(v, S) { r.push({ type: A.Attribute, name: v, action: S, value: n(1), namespace: null, ignoreCase: "quirks" }); } function E() { if (r.length && r[r.length - 1].type === A.Descendant && r.pop(), r.length === 0)
    throw new Error("Empty sub-selector"); e.push(r); } if (i(0), t.length === u)
    return u; t: for (; u < t.length;) {
    var v = t.charCodeAt(u);
    switch (v) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (r.length === 0 || r[0].type !== A.Descendant) && (p(), r.push({ type: A.Descendant })), i(1);
            break;
        }
        case 62: {
            m(A.Child), i(1);
            break;
        }
        case 60: {
            m(A.Parent), i(1);
            break;
        }
        case 126: {
            m(A.Sibling), i(1);
            break;
        }
        case 43: {
            m(A.Adjacent), i(1);
            break;
        }
        case 46: {
            x("class", O.Element);
            break;
        }
        case 35: {
            x("id", O.Equals);
            break;
        }
        case 91: {
            i(1);
            var S = void 0, N = null;
            t.charCodeAt(u) === 124 ? S = n(1) : t.startsWith("*|", u) ? (N = "*", S = n(2)) : (S = n(0), t.charCodeAt(u) === 124 && t.charCodeAt(u + 1) !== 61 && (N = S, S = n(1))), i(0);
            var C = O.Exists, F = Da.get(t.charCodeAt(u));
            if (F) {
                if (C = F, t.charCodeAt(u + 1) !== 61)
                    throw new Error("Expected `=`");
                i(2);
            }
            else
                t.charCodeAt(u) === 61 && (C = O.Equals, i(1));
            var j = "", U = null;
            if (C !== "exists") {
                if (Xe(t.charCodeAt(u))) {
                    var y = t.charCodeAt(u), I = u + 1;
                    for (; I < t.length && (t.charCodeAt(I) !== y || d(I));)
                        I += 1;
                    if (t.charCodeAt(I) !== y)
                        throw new Error("Attribute value didn't end");
                    j = Pt(t.slice(u + 1, I)), u = I + 1;
                }
                else {
                    var y = u;
                    for (; u < t.length && (!Xu(t.charCodeAt(u)) && t.charCodeAt(u) !== 93 || d(u));)
                        u += 1;
                    j = Pt(t.slice(y, u));
                }
                i(0);
                var h = t.charCodeAt(u) | 32;
                h === 115 ? (U = !1, i(1)) : h === 105 && (U = !0, i(1));
            }
            if (t.charCodeAt(u) !== 93)
                throw new Error("Attribute selector didn't terminate");
            u += 1;
            var w = { type: A.Attribute, name: S, action: C, value: j, namespace: N, ignoreCase: U };
            r.push(w);
            break;
        }
        case 58: {
            if (t.charCodeAt(u + 1) === 58) {
                r.push({ type: A.PseudoElement, name: n(2).toLowerCase(), data: t.charCodeAt(u) === 40 ? o() : null });
                continue;
            }
            var S = n(1).toLowerCase(), N = null;
            if (t.charCodeAt(u) === 40)
                if (La.has(S)) {
                    if (Xe(t.charCodeAt(u + 1)))
                        throw new Error("Pseudo-selector ".concat(S, " cannot be quoted"));
                    if (N = [], u = Qu(N, t, u + 1), t.charCodeAt(u) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(S, " (").concat(t, ")"));
                    u += 1;
                }
                else {
                    if (N = o(), Ia.has(S)) {
                        var C = N.charCodeAt(0);
                        C === N.charCodeAt(N.length - 1) && Xe(C) && (N = N.slice(1, -1));
                    }
                    N = Pt(N);
                }
            r.push({ type: A.Pseudo, name: S, data: N });
            break;
        }
        case 44: {
            E(), r = [], i(1);
            break;
        }
        default: {
            if (t.startsWith("/*", u)) {
                var C = t.indexOf("*/", u + 2);
                if (C < 0)
                    throw new Error("Comment was not terminated");
                u = C + 2, r.length === 0 && i(0);
                break;
            }
            var S = null, N = void 0;
            if (v === 42)
                u += 1, N = "*";
            else if (v === 124) {
                if (N = "", t.charCodeAt(u + 1) === 124) {
                    m(A.ColumnCombinator), i(2);
                    break;
                }
            }
            else if (Wu.test(t.slice(u)))
                N = n(0);
            else
                break t;
            t.charCodeAt(u) === 124 && t.charCodeAt(u + 1) !== 124 && (S = N, t.charCodeAt(u + 1) === 42 ? (N = "*", u += 2) : N = n(1)), r.push(N === "*" ? { type: A.Universal, namespace: S } : { type: A.Tag, name: N, namespace: S });
        }
    }
} return E(), u; }
var nu = ct(it(), 1);
var tt = ct(it(), 1);
var Ju = new Map([[A.Universal, 50], [A.Tag, 30], [A.Attribute, 1], [A.Pseudo, 0]]);
function Bt(e) { return !Ju.has(e.type); }
var Ua = new Map([[O.Exists, 10], [O.Equals, 8], [O.Not, 7], [O.Start, 6], [O.End, 6], [O.Any, 5]]);
function Qe(e) { var t = e.map(Ku); for (var u = 1; u < e.length; u++) {
    var r = t[u];
    if (!(r < 0))
        for (var n = u - 1; n >= 0 && r < t[n]; n--) {
            var i = e[n + 1];
            e[n + 1] = e[n], e[n] = i, t[n + 1] = t[n], t[n] = r;
        }
} }
function Ku(e) { var t, u; var r = (t = Ju.get(e.type)) !== null && t !== void 0 ? t : -1; return e.type === A.Attribute ? (r = (u = Ua.get(e.action)) !== null && u !== void 0 ? u : 4, e.action === O.Equals && e.name === "id" && (r = 9), e.ignoreCase && (r >>= 1)) : e.type === A.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? r = 0 : Array.isArray(e.data) ? (r = Math.min.apply(Math, __spreadArray([], __read(e.data.map(function (n) { return Math.min.apply(Math, __spreadArray([], __read(n.map(Ku)), false)); })), false)), r < 0 && (r = 0)) : r = 2 : r = 3), r; }
var Ft = ct(it(), 1), Oa = /[-[\]{}()*+?.,\\^$|#\s]/g;
function Yu(e) { return e.replace(Oa, "\\$&"); }
var Ra = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function ft(e, t) { return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!t.quirksMode : !t.xmlMode && Ra.has(e.name); }
var tr = { equals: function (e, t, u) { var r = u.adapter, n = t.name, i = t.value; return ft(t, u) ? (i = i.toLowerCase(), function (o) { var d = r.getAttributeValue(o, n); return d != null && d.length === i.length && d.toLowerCase() === i && e(o); }) : function (o) { return r.getAttributeValue(o, n) === i && e(o); }; }, hyphen: function (e, t, u) { var r = u.adapter, n = t.name, i = t.value, o = i.length; return ft(t, u) ? (i = i.toLowerCase(), function (p) { var m = r.getAttributeValue(p, n); return m != null && (m.length === o || m.charAt(o) === "-") && m.substr(0, o).toLowerCase() === i && e(p); }) : function (p) { var m = r.getAttributeValue(p, n); return m != null && (m.length === o || m.charAt(o) === "-") && m.substr(0, o) === i && e(p); }; }, element: function (e, t, u) { var r = u.adapter, n = t.name, i = t.value; if (/\s/.test(i))
        return Ft.default.falseFunc; var o = new RegExp("(?:^|\\s)".concat(Yu(i), "(?:$|\\s)"), ft(t, u) ? "i" : ""); return function (p) { var m = r.getAttributeValue(p, n); return m != null && m.length >= i.length && o.test(m) && e(p); }; }, exists: function (e, _b, _c) {
        var t = _b.name;
        var u = _c.adapter;
        return function (r) { return u.hasAttrib(r, t) && e(r); };
    }, start: function (e, t, u) { var r = u.adapter, n = t.name, i = t.value, o = i.length; return o === 0 ? Ft.default.falseFunc : ft(t, u) ? (i = i.toLowerCase(), function (d) { var p = r.getAttributeValue(d, n); return p != null && p.length >= o && p.substr(0, o).toLowerCase() === i && e(d); }) : function (d) { var p; return !!(!((p = r.getAttributeValue(d, n)) === null || p === void 0) && p.startsWith(i)) && e(d); }; }, end: function (e, t, u) { var r = u.adapter, n = t.name, i = t.value, o = -i.length; return o === 0 ? Ft.default.falseFunc : ft(t, u) ? (i = i.toLowerCase(), function (d) { var p; return ((p = r.getAttributeValue(d, n)) === null || p === void 0 ? void 0 : p.substr(o).toLowerCase()) === i && e(d); }) : function (d) { var p; return !!(!((p = r.getAttributeValue(d, n)) === null || p === void 0) && p.endsWith(i)) && e(d); }; }, any: function (e, t, u) { var r = u.adapter, n = t.name, i = t.value; if (i === "")
        return Ft.default.falseFunc; if (ft(t, u)) {
        var o_1 = new RegExp(Yu(i), "i");
        return function (p) { var m = r.getAttributeValue(p, n); return m != null && m.length >= i.length && o_1.test(m) && e(p); };
    } return function (o) { var d; return !!(!((d = r.getAttributeValue(o, n)) === null || d === void 0) && d.includes(i)) && e(o); }; }, not: function (e, t, u) { var r = u.adapter, n = t.name, i = t.value; return i === "" ? function (o) { return !!r.getAttributeValue(o, n) && e(o); } : ft(t, u) ? (i = i.toLowerCase(), function (o) { var d = r.getAttributeValue(o, n); return (d == null || d.length !== i.length || d.toLowerCase() !== i) && e(o); }) : function (o) { return r.getAttributeValue(o, n) !== i && e(o); }; } };
var Ha = new Set([9, 10, 12, 13, 32]), er = 48, Pa = 57;
function ur(e) { if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0]; if (e === "odd")
    return [2, 1]; var t = 0, u = 0, r = i(), n = o(); if (t < e.length && e.charAt(t) === "n" && (t++, u = r * (n != null ? n : 1), d(), t < e.length ? (r = i(), d(), n = o()) : r = n = 0), n === null || t < e.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(e, "')")); return [u, r * n]; function i() { return e.charAt(t) === "-" ? (t++, -1) : (e.charAt(t) === "+" && t++, 1); } function o() { var p = t, m = 0; for (; t < e.length && e.charCodeAt(t) >= er && e.charCodeAt(t) <= Pa;)
    m = m * 10 + (e.charCodeAt(t) - er), t++; return t === p ? null : m; } function d() { for (; t < e.length && Ha.has(e.charCodeAt(t));)
    t++; } }
var Ze = ct(it(), 1);
function rr(e) { var t = e[0], u = e[1] - 1; if (u < 0 && t <= 0)
    return Ze.default.falseFunc; if (t === -1)
    return function (i) { return i <= u; }; if (t === 0)
    return function (i) { return i === u; }; if (t === 1)
    return u < 0 ? Ze.default.trueFunc : function (i) { return i >= u; }; var r = Math.abs(t), n = (u % r + r) % r; return t > 1 ? function (i) { return i >= u && i % r === n; } : function (i) { return i <= u && i % r === n; }; }
function Tt(e) { return rr(ur(e)); }
var z = ct(it(), 1);
function ae(e, t) { return function (u) { var r = t.getParent(u); return r != null && t.isTag(r) && e(u); }; }
var Et = { contains: function (e, t, _b) {
        var u = _b.adapter;
        return function (n) { return e(n) && u.getText(n).includes(t); };
    }, icontains: function (e, t, _b) {
        var u = _b.adapter;
        var r = t.toLowerCase();
        return function (i) { return e(i) && u.getText(i).toLowerCase().includes(r); };
    }, "nth-child": function (e, t, _b) {
        var u = _b.adapter, r = _b.equals;
        var n = Tt(t);
        return n === z.default.falseFunc ? z.default.falseFunc : n === z.default.trueFunc ? ae(e, u) : function (o) { var d = u.getSiblings(o), p = 0; for (var m = 0; m < d.length && !r(o, d[m]); m++)
            u.isTag(d[m]) && p++; return n(p) && e(o); };
    }, "nth-last-child": function (e, t, _b) {
        var u = _b.adapter, r = _b.equals;
        var n = Tt(t);
        return n === z.default.falseFunc ? z.default.falseFunc : n === z.default.trueFunc ? ae(e, u) : function (o) { var d = u.getSiblings(o), p = 0; for (var m = d.length - 1; m >= 0 && !r(o, d[m]); m--)
            u.isTag(d[m]) && p++; return n(p) && e(o); };
    }, "nth-of-type": function (e, t, _b) {
        var u = _b.adapter, r = _b.equals;
        var n = Tt(t);
        return n === z.default.falseFunc ? z.default.falseFunc : n === z.default.trueFunc ? ae(e, u) : function (o) { var d = u.getSiblings(o), p = 0; for (var m = 0; m < d.length; m++) {
            var x = d[m];
            if (r(o, x))
                break;
            u.isTag(x) && u.getName(x) === u.getName(o) && p++;
        } return n(p) && e(o); };
    }, "nth-last-of-type": function (e, t, _b) {
        var u = _b.adapter, r = _b.equals;
        var n = Tt(t);
        return n === z.default.falseFunc ? z.default.falseFunc : n === z.default.trueFunc ? ae(e, u) : function (o) { var d = u.getSiblings(o), p = 0; for (var m = d.length - 1; m >= 0; m--) {
            var x = d[m];
            if (r(o, x))
                break;
            u.isTag(x) && u.getName(x) === u.getName(o) && p++;
        } return n(p) && e(o); };
    }, root: function (e, t, _b) {
        var u = _b.adapter;
        return function (r) { var n = u.getParent(r); return (n == null || !u.isTag(n)) && e(r); };
    }, scope: function (e, t, u, r) { var n = u.equals; return !r || r.length === 0 ? Et.root(e, t, u) : r.length === 1 ? function (i) { return n(r[0], i) && e(i); } : function (i) { return r.includes(i) && e(i); }; }, hover: Je("isHovered"), visited: Je("isVisited"), active: Je("isActive") };
function Je(e) { return function (u, r, _b) {
    var n = _b.adapter;
    var i = n[e];
    return typeof i != "function" ? z.default.falseFunc : function (d) { return i(d) && u(d); };
}; }
var Vt = { empty: function (e, _b) {
        var t = _b.adapter;
        return !t.getChildren(e).some(function (u) { return t.isTag(u) || t.getText(u) !== ""; });
    }, "first-child": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        if (t.prevElementSibling)
            return t.prevElementSibling(e) == null;
        var r = t.getSiblings(e).find(function (n) { return t.isTag(n); });
        return r != null && u(e, r);
    }, "last-child": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var r = t.getSiblings(e);
        for (var n = r.length - 1; n >= 0; n--) {
            if (u(e, r[n]))
                return !0;
            if (t.isTag(r[n]))
                break;
        }
        return !1;
    }, "first-of-type": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var r = t.getSiblings(e), n = t.getName(e);
        for (var i = 0; i < r.length; i++) {
            var o = r[i];
            if (u(e, o))
                return !0;
            if (t.isTag(o) && t.getName(o) === n)
                break;
        }
        return !1;
    }, "last-of-type": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var r = t.getSiblings(e), n = t.getName(e);
        for (var i = r.length - 1; i >= 0; i--) {
            var o = r[i];
            if (u(e, o))
                return !0;
            if (t.isTag(o) && t.getName(o) === n)
                break;
        }
        return !1;
    }, "only-of-type": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var r = t.getName(e);
        return t.getSiblings(e).every(function (n) { return u(e, n) || !t.isTag(n) || t.getName(n) !== r; });
    }, "only-child": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        return t.getSiblings(e).every(function (r) { return u(e, r) || !t.isTag(r); });
    } };
function Ke(e, t, u, r) { if (u === null) {
    if (e.length > r)
        throw new Error("Pseudo-class :".concat(t, " requires an argument"));
}
else if (e.length === r)
    throw new Error("Pseudo-class :".concat(t, " doesn't have any arguments")); }
var ne = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var W = ct(it(), 1);
var eu = {};
function uu(e, t) { return e === W.default.falseFunc ? W.default.falseFunc : function (u) { return t.isTag(u) && e(u); }; }
function ru(e, t) { var u = t.getSiblings(e); if (u.length <= 1)
    return []; var r = u.indexOf(e); return r < 0 || r === u.length - 1 ? [] : u.slice(r + 1).filter(t.isTag); }
function tu(e) { return { xmlMode: !!e.xmlMode, lowerCaseAttributeNames: !!e.lowerCaseAttributeNames, lowerCaseTags: !!e.lowerCaseTags, quirksMode: !!e.quirksMode, cacheResults: !!e.cacheResults, pseudos: e.pseudos, adapter: e.adapter, equals: e.equals }; }
var Ye = function (e, t, u, r, n) { var i = n(t, tu(u), r); return i === W.default.trueFunc ? e : i === W.default.falseFunc ? W.default.falseFunc : function (o) { return i(o) && e(o); }; }, ie = { is: Ye, matches: Ye, where: Ye, not: function (e, t, u, r, n) { var i = n(t, tu(u), r); return i === W.default.falseFunc ? e : i === W.default.trueFunc ? W.default.falseFunc : function (o) { return !i(o) && e(o); }; }, has: function (e, t, u, r, n) { var i = u.adapter, o = tu(u); o.relativeSelector = !0; var d = t.some(function (x) { return x.some(Bt); }) ? [eu] : void 0, p = n(t, o, d); if (p === W.default.falseFunc)
        return W.default.falseFunc; var m = uu(p, i); if (d && p !== W.default.trueFunc) {
        var _b = p.shouldTestNextSiblings, x_1 = _b === void 0 ? !1 : _b;
        return function (E) { if (!e(E))
            return !1; d[0] = E; var v = i.getChildren(E), S = x_1 ? __spreadArray(__spreadArray([], __read(v), false), __read(ru(E, i)), false) : v; return i.existsOne(m, S); };
    } return function (x) { return e(x) && i.existsOne(m, i.getChildren(x)); }; } };
function ar(e, t, u, r, n) { var i; var o = t.name, d = t.data; if (Array.isArray(d)) {
    if (!(o in ie))
        throw new Error("Unknown pseudo-class :".concat(o, "(").concat(d, ")"));
    return ie[o](e, d, u, r, n);
} var p = (i = u.pseudos) === null || i === void 0 ? void 0 : i[o], m = typeof p == "string" ? p : ne[o]; if (typeof m == "string") {
    if (d != null)
        throw new Error("Pseudo ".concat(o, " doesn't have any arguments"));
    var x = nt(m);
    return ie.is(e, x, u, r, n);
} if (typeof p == "function")
    return Ke(p, o, d, 1), function (x) { return p(x, d) && e(x); }; if (o in Et)
    return Et[o](e, d, u, r); if (o in Vt) {
    var x_2 = Vt[o];
    return Ke(x_2, o, d, 2), function (E) { return x_2(E, u, d) && e(E); };
} throw new Error("Unknown pseudo-class :".concat(o)); }
function au(e, t) { var u = t.getParent(e); return u && t.isTag(u) ? u : null; }
function nr(e, t, u, r, n) { var i = u.adapter, o = u.equals; switch (t.type) {
    case A.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case A.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case A.Attribute: {
        if (t.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!u.xmlMode || u.lowerCaseAttributeNames) && (t.name = t.name.toLowerCase()), tr[t.action](e, t, u);
    }
    case A.Pseudo: return ar(e, t, u, r, n);
    case A.Tag: {
        if (t.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var d_1 = t.name;
        return (!u.xmlMode || u.lowerCaseTags) && (d_1 = d_1.toLowerCase()), function (m) { return i.getName(m) === d_1 && e(m); };
    }
    case A.Descendant: {
        if (u.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (m) { var x = m; for (; x = au(x, i);)
                if (e(x))
                    return !0; return !1; };
        var d_2 = new WeakSet;
        return function (m) { var x = m; for (; x = au(x, i);)
            if (!d_2.has(x)) {
                if (i.isTag(x) && e(x))
                    return !0;
                d_2.add(x);
            } return !1; };
    }
    case "_flexibleDescendant": return function (p) { var m = p; do
        if (e(m))
            return !0;
    while (m = au(m, i)); return !1; };
    case A.Parent: return function (p) { return i.getChildren(p).some(function (m) { return i.isTag(m) && e(m); }); };
    case A.Child: return function (p) { var m = i.getParent(p); return m != null && i.isTag(m) && e(m); };
    case A.Sibling: return function (p) { var m = i.getSiblings(p); for (var x = 0; x < m.length; x++) {
        var E = m[x];
        if (o(p, E))
            break;
        if (i.isTag(E) && e(E))
            return !0;
    } return !1; };
    case A.Adjacent: return i.prevElementSibling ? function (p) { var m = i.prevElementSibling(p); return m != null && e(m); } : function (p) { var m = i.getSiblings(p), x; for (var E = 0; E < m.length; E++) {
        var v = m[E];
        if (o(p, v))
            break;
        i.isTag(v) && (x = v);
    } return !!x && e(x); };
    case A.Universal: {
        if (t.namespace != null && t.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return e;
    }
} }
function ir(e, t, u) { var r = se(e, t, u); return uu(r, t.adapter); }
function se(e, t, u) { var r = typeof e == "string" ? nt(e) : e; return ce(r, t, u); }
function sr(e) { return e.type === A.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(function (t) { return t.some(sr); })); }
var Ba = { type: A.Descendant }, Fa = { type: "_flexibleDescendant" }, Va = { type: A.Pseudo, name: "scope", data: null };
function za(e, _b, u) {
    var e_6, _c;
    var t = _b.adapter;
    var r = !!(u != null && u.every(function (n) { var i = t.isTag(n) && t.getParent(n); return n === eu || i && t.isTag(i); }));
    try {
        for (var e_7 = __values(e), e_7_1 = e_7.next(); !e_7_1.done; e_7_1 = e_7.next()) {
            var n = e_7_1.value;
            if (!(n.length > 0 && Bt(n[0]) && n[0].type !== A.Descendant))
                if (r && !n.some(sr))
                    n.unshift(Ba);
                else
                    continue;
            n.unshift(Va);
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
function ce(e, t, u) { var r; e.forEach(Qe), u = (r = t.context) !== null && r !== void 0 ? r : u; var n = Array.isArray(u), i = u && (Array.isArray(u) ? u : [u]); if (t.relativeSelector !== !1)
    za(e, t, i);
else if (e.some(function (p) { return p.length > 0 && Bt(p[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var o = !1, d = e.map(function (p) { if (p.length >= 2) {
    var _b = __read(p, 2), m = _b[0], x = _b[1];
    m.type !== A.Pseudo || m.name !== "scope" || (n && x.type === A.Descendant ? p[1] = Fa : (x.type === A.Adjacent || x.type === A.Sibling) && (o = !0));
} return ja(p, t, i); }).reduce(Ga, tt.default.falseFunc); return d.shouldTestNextSiblings = o, d; }
function ja(e, t, u) { var r; return e.reduce(function (n, i) { return n === tt.default.falseFunc ? tt.default.falseFunc : nr(n, i, t, u, ce); }, (r = t.rootFunc) !== null && r !== void 0 ? r : tt.default.trueFunc); }
function Ga(e, t) { return t === tt.default.falseFunc || e === tt.default.trueFunc ? e : e === tt.default.falseFunc || t === tt.default.trueFunc ? t : function (r) { return e(r) || t(r); }; }
var cr = function (e, t) { return e === t; }, _a = { adapter: Z, equals: cr };
function or(e) { var t, u, r, n; var i = e != null ? e : _a; return (t = i.adapter) !== null && t !== void 0 || (i.adapter = Z), (u = i.equals) !== null && u !== void 0 || (i.equals = (n = (r = i.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && n !== void 0 ? n : cr), i; }
function iu(e) { return function (u, r, n) { var i = or(r); return e(u, i, n); }; }
var pi = iu(ir), mi = iu(se), oe = iu(ce);
function lr(e) { return function (u, r, n) { var i = or(n); typeof u != "function" && (u = se(u, i, r)); var o = le(r, i.adapter, u.shouldTestNextSiblings); return e(u, o, i); }; }
function le(e, t, u) {
    if (u === void 0) { u = !1; }
    return u && (e = $a(e, t)), Array.isArray(e) ? t.removeSubsets(e) : t.getChildren(e);
}
function $a(e, t) { var u = Array.isArray(e) ? e.slice(0) : [e], r = u.length; for (var n = 0; n < r; n++) {
    var i = ru(u[n], t);
    u.push.apply(u, __spreadArray([], __read(i), false));
} return u; }
var gi = lr(function (e, t, u) { return e === nu.default.falseFunc || !t || t.length === 0 ? [] : u.adapter.findAll(e, t); }), xi = lr(function (e, t, u) { return e === nu.default.falseFunc || !t || t.length === 0 ? null : u.adapter.findOne(e, t); });
var de = ct(it(), 1);
var Wa = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function Nt(e) { return e.type !== "pseudo" ? !1 : Wa.has(e.name) ? !0 : e.name === "not" && Array.isArray(e.data) ? e.data.some(function (t) { return t.some(Nt); }) : !1; }
function fr(e, t, u) { var r = t != null ? parseInt(t, 10) : NaN; switch (e) {
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
function dr(e) { for (; e.parent;)
    e = e.parent; return e; }
function fe(e) {
    var e_8, _b;
    var t = [], u = [];
    try {
        for (var e_9 = __values(e), e_9_1 = e_9.next(); !e_9_1.done; e_9_1 = e_9.next()) {
            var r = e_9_1.value;
            r.some(Nt) ? t.push(r) : u.push(r);
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
var Xa = { type: A.Universal, namespace: null }, Qa = { type: A.Pseudo, name: "scope", data: null };
function ou(e, t, u) {
    if (u === void 0) { u = {}; }
    return Za([e], t, u);
}
function Za(e, t, u) {
    if (u === void 0) { u = {}; }
    if (typeof t == "function")
        return e.some(t);
    var _b = __read(fe(nt(t)), 2), r = _b[0], n = _b[1];
    return r.length > 0 && e.some(oe(r, u)) || n.some(function (i) { return hr(i, e, u).length > 0; });
}
function Ja(e, t, u, r) { var n = typeof u == "string" ? parseInt(u, 10) : NaN; switch (e) {
    case "first":
    case "lt": return t;
    case "last": return t.length > 0 ? [t[t.length - 1]] : t;
    case "nth":
    case "eq": return isFinite(n) && Math.abs(n) < t.length ? [n < 0 ? t[t.length + n] : t[n]] : [];
    case "gt": return isFinite(n) ? t.slice(n + 1) : [];
    case "even": return t.filter(function (i, o) { return o % 2 === 0; });
    case "odd": return t.filter(function (i, o) { return o % 2 === 1; });
    case "not": {
        var i_1 = new Set(Ka(u, t, r));
        return t.filter(function (o) { return !i_1.has(o); });
    }
} }
function Ka(e, t, u) { if (t.length === 0)
    return []; var _b = __read(fe(e), 2), r = _b[0], n = _b[1], i; if (r.length) {
    var o = cu(t, r, u);
    if (n.length === 0)
        return o;
    o.length && (i = new Set(o));
} for (var o = 0; o < n.length && (i == null ? void 0 : i.size) !== t.length; o++) {
    var d = n[o];
    if ((i ? t.filter(function (x) { return D(x) && !i.has(x); }) : t).length === 0)
        break;
    var m = hr(d, t, u);
    if (m.length)
        if (i)
            m.forEach(function (x) { return i.add(x); });
        else {
            if (o === n.length - 1)
                return m;
            i = new Set(m);
        }
} return typeof i != "undefined" ? i.size === t.length ? t : t.filter(function (o) { return i.has(o); }) : []; }
function hr(e, t, u) { var r; if (e.some(lt)) {
    var n = (r = u.root) !== null && r !== void 0 ? r : dr(t[0]), i = st(X({}, u), { context: t, relativeSelector: !1 });
    return e.push(Qa), he(n, e, i, !0, t.length);
} return he(t, e, u, !1, t.length); }
function lu(e, t, u, r) {
    if (u === void 0) { u = {}; }
    if (r === void 0) { r = 1 / 0; }
    if (typeof e == "function")
        return br(t, e);
    var _b = __read(fe(nt(e)), 2), n = _b[0], i = _b[1], o = i.map(function (d) { return he(t, d, u, !0, r); });
    return n.length && o.push(su(t, n, u, r)), o.length === 0 ? [] : o.length === 1 ? o[0] : $e(o.reduce(function (d, p) { return __spreadArray(__spreadArray([], __read(d), false), __read(p), false); }));
}
function he(e, t, u, r, n) { var i = t.findIndex(Nt), o = t.slice(0, i), d = t[i], p = t.length - 1 === i ? n : 1 / 0, m = fr(d.name, d.data, p); if (m === 0)
    return []; var E = (o.length === 0 && !Array.isArray(e) ? Kt(e).filter(D) : o.length === 0 ? (Array.isArray(e) ? e : [e]).filter(D) : r || o.some(lt) ? su(e, [o], u, m) : cu(e, [o], u)).slice(0, m), v = Ja(d.name, E, d.data, u); if (v.length === 0 || t.length === i + 1)
    return v; var S = t.slice(i + 1), N = S.some(lt); if (N) {
    if (lt(S[0])) {
        var C = S[0].type;
        (C === A.Sibling || C === A.Adjacent) && (v = le(v, Z, !0)), S.unshift(Xa);
    }
    u = st(X({}, u), { relativeSelector: !1, rootFunc: function (C) { return v.includes(C); } });
}
else
    u.rootFunc && u.rootFunc !== de.trueFunc && (u = st(X({}, u), { rootFunc: de.trueFunc })); return S.some(Nt) ? he(v, S, u, !1, n) : N ? su(v, [S], u, n) : cu(v, [S], u); }
function su(e, t, u, r) { var n = oe(t, u, e); return br(e, n, r); }
function br(e, t, u) {
    if (u === void 0) { u = 1 / 0; }
    var r = le(e, Z, t.shouldTestNextSiblings);
    return te(function (n) { return D(n) && t(n); }, r, !0, u);
}
function cu(e, t, u) { var r = (Array.isArray(e) ? e : [e]).filter(D); if (r.length === 0)
    return r; var n = oe(t, u); return n === de.trueFunc ? r : r.filter(n); }
var Ya = function (e, t, u) { return lu(e, t, u); }, xr = function (e, t, u) { return lu(e, t, u, 1)[0] || null; }, yr = /[\s ]+/g, pr = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), t0 = { containsOwn: function (e, t) { return du(e).toLowerCase().includes(String(t).toLowerCase()); }, matches: function (e, t) { return mr(t).test(fu(e)); }, matchesOwn: function (e, t) { return mr(t).test(du(e)); }, containsData: function (e, t) { return rt(e).includes(t); }, "contains-ci": function (e, t) { return fu(e).toLowerCase().includes(String(t).toLowerCase()); } };
function mr(e) { try {
    return new RegExp(e);
}
catch (t) {
    return /$^/;
} }
var be = { pseudos: t0, xmlMode: !1, lowerCaseTags: !0 };
function pe(e) { return String(e).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function fu(e) { if (!e)
    return ""; if (e.type === "text")
    return e.data; var t = "", u = function (r) {
    var e_10, _b;
    try {
        for (var _c = __values(r.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var n = _d.value;
            n.type === "text" ? t += n.data : (n.type === "tag" || n.type === "script" || n.type === "style") && (n.name === "br" ? t += " " : n.type === "tag" && (pr.has(n.name) && (t += " "), u(n), pr.has(n.name) && (t += " ")));
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_10) throw e_10.error; }
    }
}; return u(e), t.replace(yr, " ").trim(); }
function du(e) {
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
    return t.replace(yr, " ").trim();
}
function wr(e, t) { if (!t)
    return ""; try {
    return new URL(t, e || void 0).href;
}
catch (u) {
    return e ? "" : t;
} }
var dt = (function () {
    function e(t, u) {
        this.node = t, this.doc = u;
    }
    Object.defineProperty(e.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    e.prototype.select = function (t) { return J.of(Ya(pe(t), this.node, be), this.doc); };
    e.prototype.selectFirst = function (t) { var u = xr(pe(t), this.node, be); return u ? new e(u, this.doc) : null; };
    e.prototype.is = function (t) { return ou(this.node, pe(t), be); };
    e.prototype.text = function () { return fu(this.node); };
    e.prototype.ownText = function () { return du(this.node); };
    e.prototype.wholeText = function () { return rt(this.node); };
    e.prototype.data = function () { return (this.node.children || []).filter(function (t) { return t.type === "text"; }).map(function (t) { return t.data; }).join(""); };
    e.prototype.html = function () { return (this.node.children || []).map(function (t) { return St(t, { decodeEntities: !1 }); }).join("").trim(); };
    e.prototype.outerHtml = function () { return St(this.node, { decodeEntities: !1 }); };
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
        return wr(this.baseUri, this.node.attribs[t.slice(4)] || ""); var r = this.node.attribs[t]; return r == null ? "" : r; };
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
        t.push(u), u = u.parent; return J.of(t, this.doc); };
    e.prototype.closest = function (t) { var u = this.node; for (; u && u.type !== "root";) {
        if (u.type === "tag" && ou(u, pe(t), be))
            return new e(u, this.doc);
        u = u.parent;
    } return null; };
    e.prototype.children = function () { return J.of((this.node.children || []).filter(D), this.doc); };
    e.prototype.child = function (t) { var u = (this.node.children || []).filter(D)[t]; return u ? new e(u, this.doc) : null; };
    e.prototype.childrenSize = function () { return (this.node.children || []).filter(D).length; };
    e.prototype.nextElementSibling = function () { var t = ze(this.node); return t ? new e(t, this.doc) : null; };
    e.prototype.previousElementSibling = function () { var t = je(this.node); return t ? new e(t, this.doc) : null; };
    e.prototype.siblingElements = function () {
        var _this = this;
        return J.of(Yt(this.node).filter(function (t) { return t !== _this.node && D(t); }), this.doc);
    };
    e.prototype.elementSiblingIndex = function () { return Yt(this.node).filter(D).indexOf(this.node); };
    e.prototype.getElementsByTag = function (t) { return this.select(t); };
    e.prototype.getElementsByClass = function (t) { return this.select("." + t); };
    e.prototype.getElementById = function (t) { return this.selectFirst("#" + t); };
    e.prototype.remove = function () { return Y(this.node), this; };
    e.prototype.empty = function () { return this.node.children = [], this; };
    e.prototype.textNodes = function () { return (this.node.children || []).filter(function (t) { return t.type === "text"; }).map(function (t) { return ({ text: function () { return t.data; }, toString: function () { return t.data; } }); }); };
    e.prototype.title = function () { var t = this.selectFirst("title"); return t ? t.text() : ""; };
    e.prototype.body = function () { return this.selectFirst("body") || this; };
    e.prototype.head = function () { return this.selectFirst("head") || this; };
    e.prototype.location = function () { return this.baseUri; };
    return e;
}()), bu = Object.create(Array.prototype), J = { of: hu, prototype: bu };
function hu(e, t) {
    var e_13, _b;
    var u = [];
    try {
        for (var _c = __values(e || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var r = _d.value;
            u.push(r instanceof dt ? r : new dt(r, t));
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return Object.setPrototypeOf(u, bu), u;
}
var gr = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (e) { return this[e] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (e) { return J.of(this[e] ? [this[e]] : [], null); }, text: function () { return this.map(function (e) { return e.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (e) { return e.text(); }).filter(Boolean); }, html: function () {
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
        var t = hu([]), u = new Set;
        try {
            for (var _d = __values(this), _f = _d.next(); !_f.done; _f = _d.next()) {
                var r = _f.value;
                try {
                    for (var _g = (e_16 = void 0, __values(r.select(e))), _h = _g.next(); !_h.done; _h = _g.next()) {
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
    }, is: function (e) { return this.some(function (t) { return t.is(e); }); }, not: function (e) { return J.of(this.filter(function (t) { return !t.is(e); }), null); }, parents: function () {
        var e_18, _b;
        var e = hu([]);
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
    }, next: function () { return J.of(this.map(function (e) { return e.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return J.of(this.map(function (e) { return e.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (e) { return e.remove(); }), this; }, empty: function () { return this.forEach(function (e) { return e.empty(); }), this; }, removeAttr: function (e) { return this.forEach(function (t) { return t.removeAttr(e); }), this; } };
try {
    for (var _c = __values(Object.keys(gr)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var e = _d.value;
        Object.defineProperty(bu, e, { value: gr[e], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
function me(e, t) { var u = $u(String(e == null ? "" : e), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), r = new dt(u, null); r.doc = r, r.__base = t || ""; var n = xr("base[href]", u); return n && n.attribs.href && (r.__base = wr(r.__base, n.attribs.href)), r; }
function vr(e, t) { var u = new Set((t || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), r = me(e), n = function (i) {
    var e_19, _b, e_20, _c;
    try {
        for (var _d = __values((i.children || []).slice()), _f = _d.next(); !_f.done; _f = _d.next()) {
            var o = _f.value;
            if (o.type === "script" || o.type === "style" || o.type === "comment") {
                Y(o);
                continue;
            }
            if (o.type === "tag" && (n(o), !u.has(o.name))) {
                var d = (o.children || []).slice();
                try {
                    for (var d_3 = (e_20 = void 0, __values(d)), d_3_1 = d_3.next(); !d_3_1.done; d_3_1 = d_3.next()) {
                        var p = d_3_1.value;
                        Ge(o, p);
                    }
                }
                catch (e_20_1) { e_20 = { error: e_20_1 }; }
                finally {
                    try {
                        if (d_3_1 && !d_3_1.done && (_c = d_3.return)) _c.call(d_3);
                    }
                    finally { if (e_20) throw e_20.error; }
                }
                Y(o);
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
}; return n(r.node), St(r.node.children, { decodeEntities: !1 }); }
var ge = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function e0(e) { if (typeof Buffer != "undefined")
    return Buffer.from(e).toString("base64"); var t = ""; for (var u = 0; u < e.length; u++)
    t += String.fromCharCode(e[u]); return btoa(t); }
function Sr(e) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(e) : Uint8Array.from(unescape(encodeURIComponent(e)), function (t) { return t.charCodeAt(0); }); }
var pu = (function () {
    function pu(t, u) {
        this.status = t.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText || String(this.status), this.url = t.url || u.url, this.headers = t.headers || {}, this._raw = t, this.request = { url: u.url, headers: u.headers || {} };
    }
    pu.prototype.header = function (t) { var u = Object.keys(this.headers).find(function (r) { return r.toLowerCase() === String(t).toLowerCase(); }); return u ? this.headers[u] : ""; };
    pu.prototype.text = function (t) { if (t && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(t).toLowerCase()).decode(this._raw.bytes);
        }
        catch (u) { } return this._raw.text == null ? "" : String(this._raw.text); };
    pu.prototype.string = function (t) { return this.text(t); };
    pu.prototype.html = function (t) { return me(this.text(t), this.url); };
    pu.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (t) {
        return null;
    } };
    pu.prototype.base64 = function () { return e0(this._raw.bytes || Sr(this.text())); };
    pu.prototype.blob = function () { var t = this; return { size: (this._raw.bytes || Sr(this.text())).length, type: this.header("content-type"), base64: function () { return t.base64(); } }; };
    return pu;
}());
function u0(e) {
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
function Tr(e, t) { var u = function (o) { return ({ getItem: function (d) { var p = e.storageGet(o + d); return p == null ? null : p; }, setItem: function (d, p) { return e.storageSet(o + d, p == null ? null : String(p)); }, removeItem: function (d) { return e.storageSet(o + d, null); }, clear: function () { return e.storageClear && e.storageClear(o); } }); }, r = "__cookie__", n = {}; n.Response = { success: function (o, d) { return ({ code: 0, data: o === void 0 ? null : o, data2: d === void 0 ? null : d }); }, error: function (o) { return ({ code: 1, data: o == null ? "" : String(o) }); } }, n.fetch = function (d, p) {
    return __awaiter(this, void 0, void 0, function () { var m, C, x, E, v, C, S, N, C_1; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                p = p || {};
                m = String(d);
                if (p.queries) {
                    C = Object.entries(p.queries).map(function (_b) {
                        var _c = __read(_b, 2), F = _c[0], j = _c[1];
                        return encodeURIComponent(F) + "=" + encodeURIComponent(j);
                    }).join("&");
                    C && (m += (m.includes("?") ? "&" : "?") + C);
                }
                x = Object.assign({ "User-Agent": ge }, u0(p.headers)), E = e.storageGet(r);
                E && !Object.keys(x).some(function (C) { return C.toLowerCase() === "cookie"; }) && (x.Cookie = E);
                v = p.body;
                if (v != null && typeof v == "object") {
                    C = Object.keys(x).find(function (F) { return F.toLowerCase() === "content-type"; });
                    C && /json/i.test(x[C]) ? v = JSON.stringify(v) : (v = Object.entries(v).map(function (_b) {
                        var _c = __read(_b, 2), F = _c[0], j = _c[1];
                        return encodeURIComponent(F) + "=" + encodeURIComponent(j);
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
            case 4: return [2, new pu(N, S)];
        }
    }); });
}, n.Http = { get: function (o) { return Ar(n, "GET", o); }, post: function (o) { return Ar(n, "POST", o); } }, n.Html = { parse: function (o, d) { return me(o, d || ""); }, clean: function (o, d) { return vr(o, d); } }, n.localStorage = u("ls:"), n.cacheStorage = u("cs:"), n.localConfig = { getItem: function (o) { return e.config(o); } }, n.localCookie = { setCookie: function (o) { e.storageSet(r, String(o).split(";")[0]); }, getCookie: function () { return e.storageGet(r) || ""; } }, n.sleep = function (o) { return new Promise(function (d) { return setTimeout(d, Math.min(Number(o) || 0, 1e4)); }); }; var i = function () {
    var o = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        o[_i] = arguments[_i];
    }
    try {
        e.log && e.log(o.map(function (d) { return typeof d == "string" ? d : JSON.stringify(d); }).join(" "));
    }
    catch (d) { }
}; return n.Log = { log: i }, n.console = { log: i, error: i, warn: i, info: i }, n.log = i, n.UserAgent = { system: function () { return ge; }, chrome: function () { return ge; }, android: function () { return ge; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, n.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (e.name || "host") + ")"); } }, n.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, n.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, n.Elements = J, n.Element = dt, n.__meta = t, n; }
function Ar(e, t, u) { var r = { method: t, url: u, headers: {}, body: void 0, queries: void 0 }, n = { headers: function (i) { return Object.assign(r.headers, i || {}), n; }, header: function (i, o) { return r.headers[i] = o, n; }, params: function (i) { return r.queries = i, n; }, queries: function (i) { return r.queries = i, n; }, body: function (i) { return r.body = i, n; }, html: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).html(i)];
            }
        }); });
    }, string: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).text(i)];
            }
        }); });
    }, text: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).text(i)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).json()];
            }
        }); });
    } }; return n; }
function ht(e, t) { if (!t)
    return ""; if (t = String(t).trim(), /^data:|^blob:/.test(t))
    return t; if (t.startsWith("//"))
    return "https:" + t; if (typeof URL == "undefined")
    return __abs(e, t); try {
    return new URL(t, e).href;
}
catch (u) {
    return t;
} }
var M = function (e) { return e == null ? "" : String(e); }, r0 = function (e) { return e.filter(function (t, u) { return t && e.indexOf(t) === u; }); }, xe = (function () {
    function class_1(t) {
        var u = t.meta, r = t.scripts, n = t.host;
        this.meta = u, this.host = n, this.env = t.env || Tr(n, u), this.scripts = r, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return M(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
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
            var r, n, i, o;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        r = this.scripts[t];
                        if (!r)
                            throw new Error("script " + t + " missing");
                        n = function (d) { var p = _this.host.config(d); return p == null ? (_this.meta.configDefaults || {})[d] : p; };
                        return [4, r(this.env, n)];
                    case 1:
                        i = _b.sent();
                        if (typeof i != "function")
                            throw new Error(t + ": execute() not defined");
                        return [4, i.apply(void 0, __spreadArray([], __read(u.map(M)), false))];
                    case 2:
                        o = _b.sent();
                        if (!o)
                            throw new Error(t + ": empty result");
                        if (o.code !== 0)
                            throw new Error(t + ": " + M(o.data || "error"));
                        return [2, o];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (t) { return M(t).replace(/\.js$/, ""); };
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
            var n, i, o, d, p;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        n = t + "|" + u;
                        r = Math.max(1, r | 0);
                        i = r === 1 ? "" : this.tokens[n + "|" + r];
                        if (r > 1 && i == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(t, u, i)];
                    case 1:
                        o = _b.sent(), d = M(o.data2);
                        d && (this.tokens[n + "|" + (r + 1)] = d);
                        p = (o.data || []).filter(Boolean).map(function (m) { return ({ name: M(m.name).trim(), link: ht(m.host || _this.base + "/", m.link), cover: ht(m.host || _this.base + "/", m.cover), description: M(m.description), tag: M(m.tag) }); }).filter(function (m) { return m.name && m.link; });
                        return [2, { items: p, hasNext: !!d && p.length > 0 }];
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
                    return [2, u[0] ? this.list(this.scriptFile(u[0].script), M(u[0].input), t) : this.search("", t)];
            }
        }); });
    };
    class_1.prototype.latest = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u, r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    u = _b.sent(), r = u[1] || u[0];
                    return [2, r ? this.list(this.scriptFile(r.script), M(r.input), t) : this.search("", t)];
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
                    u = (_b.sent()).data || {}, r = [].concat(u.genres || [], u.tags || []).map(function (n) { return typeof n == "string" ? n : n && n.title; }).filter(Boolean);
                    return [2, { name: M(u.name).trim(), cover: ht(u.host || this.base + "/", u.cover), author: M(u.author).trim(), description: Er(M(u.description)), detail: Er(M(u.detail)), ongoing: u.ongoing !== !1 && u.ongoing !== "false", genres: r0(r.map(function (n) { return String(n).trim(); })), url: t, format: M(u.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var u, r, r_1, r_1_1, n, _b, _c, e_22_1, _d;
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
                        n = r_1_1.value;
                        _c = (_b = u).concat;
                        return [4, this.run("toc", M(n))];
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
                    case 13: return [2, u.filter(function (r) { return r && r.url && r.type !== "section"; }).map(function (r, n) { return ({ name: M(r.name).trim() || "#" + (n + 1), url: ht(r.host || _this.base + "/", r.url), pay: !!(r.pay || r.lock) }); })];
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
                    case 6: return [2, (_b, typeof u == "string" && (u = u.split(/[\n,]+/)), (u || []).map(function (r) { return ht(_this.base + "/", typeof r == "string" ? r : r && (r.link || r.url || r.data)); }).filter(Boolean))];
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
                    return [2, { html: M(u.data), title: M(u.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var u, n, r, u_3, u_3_1, n, i, o, o_2, o_2_1, d, i_2, e_23_1;
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
                        Array.isArray(n) && n.length && (u = n.map(function (i) { return typeof i == "string" ? { title: "Server", data: i } : { title: M(i.title || i.name || "Server"), data: M(i.data || i.url || i.link) }; }));
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
                        n = u_3_1.value;
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 7, , 8]);
                        return [4, this.run("track", n.data)];
                    case 6:
                        i = (_d.sent()).data || {}, o = Array.isArray(i) ? i : [i];
                        try {
                            for (o_2 = (e_24 = void 0, __values(o)), o_2_1 = o_2.next(); !o_2_1.done; o_2_1 = o_2.next()) {
                                d = o_2_1.value;
                                !d || !d.data || d.type !== "webview" && r.push({ url: ht(d.host || this.base + "/", d.data), quality: n.title + (d.quality ? " " + d.quality : ""), headers: d.headers || { Referer: this.base + "/" }, subtitles: (d.subtitles || (d.subtitle ? [{ data: d.subtitle, label: "Sub" }] : [])).map(function (p) { return ({ file: ht(_this.base + "/", p.data || p.file), label: M(p.label || p.language || "Sub") }); }), mimeType: M(d.mimeType) });
                            }
                        }
                        catch (e_24_1) { e_24 = { error: e_24_1 }; }
                        finally {
                            try {
                                if (o_2_1 && !o_2_1.done && (_c = o_2.return)) _c.call(o_2);
                            }
                            finally { if (e_24) throw e_24.error; }
                        }
                        return [3, 8];
                    case 7:
                        i_2 = _d.sent();
                        this.host.log && this.host.log("track " + n.title + ": " + i_2.message);
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
function Er(e) {
    return String(e).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
function kt(e, t) {
    return __awaiter(this, void 0, void 0, function () { var u, r, _b, _c; return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                e = e || [];
                u = [], r = 0;
                _d.label = 1;
            case 1:
                if (!(r < e.length)) return [3, 4];
                _c = (_b = u).push;
                return [4, t(e[r], r, e)];
            case 2:
                _c.apply(_b, [_d.sent()]);
                _d.label = 3;
            case 3:
                r++;
                return [3, 1];
            case 4: return [2, u];
        }
    }); });
}
var et = { id: "gaumeoteam", name: "Gấu Mèo Team", source: "https://gaumeoteam.com", type: "novel", locale: "vi", nsfw: !1, version: 1, config: { DOMAIN: { title: "Tên miền", subtitle: "Đổi khi trang đổi tên miền", default: "https://gaumeoteam.com", values: ["https://gaumeoteam.com"], mode: "input", format: "text" } }, configDefaults: { DOMAIN: "https://gaumeoteam.com" }, itemType: 2, lnId: "kiritokmn.gaumeoteam", lnIcon: "", lnVersion: "1.0.1" }, Nr = { home: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, n, i, o, d, p, m, x, E, v, S, N, C, F, j) {
                    return __awaiter(this, void 0, void 0, function () { var U; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                U = t("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function I() {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                return [2, i.success([{ title: "Mới cập nhật", input: "latest", script: "browse.js" }, { title: "Xem nhiều", input: "views", script: "browse.js" }, { title: "Đánh giá cao", input: "rating", script: "browse.js" }, { title: "Truyện mới", input: "new-manga", script: "browse.js" }])];
                                            }); });
                                        } var w, h, y; return __generator(this, function (_b) {
                                            w = "https://gaumeoteam.com";
                                            try {
                                                U && (w = String(U).replace(/\/+$/, ""));
                                            }
                                            catch (a) { }
                                            h = { img: function (a) { if (!a)
                                                    return ""; for (var s = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < s.length; c++) {
                                                    var l = a.attr(s[c]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return h.fix(l.trim());
                                                } var f = a.attr("data-srcset") || a.attr("srcset"); return f ? h.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (a) { return a ? (a = String(a).trim(), a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http") === 0 ? a : a.charAt(0) === "/" ? w + a : w + "/" + a) : ""; }, text: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(c < s.length)) return [3, 4];
                                                                return [4, a.select(s[c]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                c++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                s = s || {};
                                                                c = { Referer: w + "/" };
                                                                if (s.headers)
                                                                    for (l in s.headers)
                                                                        c[l] = s.headers[l];
                                                                return [4, u(a, { method: s.method, headers: c, body: s.body })];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [2, f];
                                                        }
                                                    }); });
                                                }, html: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, s)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.html(s && s.charset)];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, json: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, s)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.json()];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, page: function (a) { var s = parseInt(a || "1", 10); return isNaN(s) || s < 1 ? 1 : s; }, next: function (a, s) { return a ? String(h.page(s) + 1) : ""; }, isUrl: function (a) { return /^(https?:)?\/\//.test(a || "") || (a || "").charAt(0) === "/"; }, enc: function (a) { return encodeURIComponent(a || ""); }, cleanContent: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                a.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, a.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (a) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(a || ""); } }, y = { path: function () { return typeof MADARA != "undefined" && MADARA.path || "manga"; }, card: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var s, c, l, _b;
                                                        var _c;
                                                        return __generator(this, function (_d) {
                                                            switch (_d.label) {
                                                                case 0:
                                                                    s = a.select(".post-title a, h3 a, h4 a, .item-summary a").first() || a.select("a").first();
                                                                    if (!s)
                                                                        return [2, null];
                                                                    return [4, s.text()];
                                                                case 1:
                                                                    c = (_d.sent()) || s.attr("title") || a.select("img").attr("alt"), l = a.select(".chapter a, .list-chapter .chapter-item a, .latest-chap a, .my-chapter-name a").first();
                                                                    _c = { name: c, link: s.attr("href"), cover: h.img(a.select("img").first()) };
                                                                    if (!l) return [3, 3];
                                                                    return [4, l.text()];
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
                                                }, list: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, c, l, f, b, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                s = a.select(".c-tabs-item__content, .page-item-detail, .manga-item, .comic-list-item, .comic-block"), c = [], l = {}, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < s.size())) return [3, 5];
                                                                _c = (_b = y).card;
                                                                return [4, s.get(f)];
                                                            case 2: return [4, _c.apply(_b, [_d.sent()])];
                                                            case 3:
                                                                b = _d.sent();
                                                                b && b.link && !l[b.link] && (l[b.link] = 1, c.push(b));
                                                                _d.label = 4;
                                                            case 4:
                                                                f++;
                                                                return [3, 1];
                                                            case 5: return [2, c];
                                                        }
                                                    }); });
                                                }, hasNext: function (a, s) { return a.select(".nav-previous a, a.nextpostslink, .wp-pagenavi a.next, a.next.page-numbers, .pagination a.next, a[rel=next]").size() > 0 || a.select('a[href*="/page/' + (s + 1) + '"]').size() > 0; }, browse: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, b; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = h.page(s), l = w + "/" + y.path() + "/" + (c > 1 ? "page/" + c + "/" : "") + "?m_orderby=" + (a || "latest");
                                                                return [4, h.html(l)];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [4, y.list(f)];
                                                            case 2:
                                                                b = _b.sent();
                                                                return [2, i.success(b, h.next(y.hasNext(f, c) && b.length > 0, s))];
                                                        }
                                                    }); });
                                                }, search: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, b; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!h.isUrl(a)) return [3, 2];
                                                                return [4, y.byUrl(a, s)];
                                                            case 1: return [2, _b.sent()];
                                                            case 2:
                                                                c = h.page(s), l = w + "/" + (c > 1 ? "page/" + c + "/" : "") + "?s=" + h.enc(a) + "&post_type=wp-manga";
                                                                return [4, h.html(l)];
                                                            case 3:
                                                                f = _b.sent();
                                                                return [4, y.list(f)];
                                                            case 4:
                                                                b = _b.sent();
                                                                return [2, i.success(b, h.next(y.hasNext(f, c) && b.length > 0, s))];
                                                        }
                                                    }); });
                                                }, byUrl: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, b; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = h.page(s), l = h.fix(a).replace(/\/$/, "") + "/" + (c > 1 ? "page/" + c + "/" : "");
                                                                return [4, h.html(l)];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [4, y.list(f)];
                                                            case 2:
                                                                b = _b.sent();
                                                                return [2, i.success(b, h.next(y.hasNext(f, c) && b.length > 0, s))];
                                                        }
                                                    }); });
                                                }, detail: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var s, c, l, f, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0: return [4, h.html(a)];
                                                                case 1:
                                                                    s = _g.sent();
                                                                    return [4, kt(s.select(".genres-content a, .wp-manga-genres a, .manga-genres a"), function (b) {
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
                                                                    return [4, h.text(s, [".post-status .summary-content", ".manga-status", ".post-content_item:contains(Tình trạng) .summary-content", ".post-content_item:contains(Status) .summary-content"])];
                                                                case 3:
                                                                    l = _g.sent(), f = s.select(".description-summary .summary__content, .summary__content, .manga-excerpt, .description-summary, .manga-summary").first();
                                                                    _c = (_b = i).success;
                                                                    _f = {};
                                                                    return [4, h.text(s, [".post-title h1", ".post-title h3", "h1"])];
                                                                case 4:
                                                                    _f.name = _g.sent(), _f.cover = h.img(s.select(".summary_image img, .tab-summary img").first());
                                                                    return [4, h.text(s, [".author-content a", ".author-content", ".artist-content a"])];
                                                                case 5:
                                                                    _f.author = _g.sent();
                                                                    if (!f) return [3, 7];
                                                                    return [4, f.html()];
                                                                case 6:
                                                                    _d = _g.sent();
                                                                    return [3, 8];
                                                                case 7:
                                                                    _d = "";
                                                                    _g.label = 8;
                                                                case 8: return [2, _c.apply(_b, [(_f.description = _d, _f.detail = l ? "Tình trạng: " + l : "", _f.ongoing = h.ongoing(l), _f.genres = c, _f.host = w, _f)])];
                                                            }
                                                        });
                                                    });
                                                }, chapterEls: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, _b, b, _c, _d; return __generator(this, function (_f) {
                                                        switch (_f.label) {
                                                            case 0:
                                                                c = a.select("li.wp-manga-chapter a, .listing-chapters_wrap li a, .version-chap li a");
                                                                if (c.size() > 0)
                                                                    return [2, c];
                                                                l = s.replace(/\/$/, "") + "/";
                                                                return [4, u(l + "ajax/chapters/", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", Referer: l } })];
                                                            case 1:
                                                                f = _f.sent();
                                                                _b = f.ok;
                                                                if (!_b) return [3, 3];
                                                                return [4, f.html()];
                                                            case 2:
                                                                _b = (c = (_f.sent()).select("li.wp-manga-chapter a"), c.size() > 0);
                                                                _f.label = 3;
                                                            case 3:
                                                                if (_b)
                                                                    return [2, c];
                                                                b = a.select("#manga-chapters-holder").attr("data-id") || a.select(".rating-post-id").attr("value") || a.select("input.rating-post-id").attr("value");
                                                                _d = b;
                                                                if (!_d) return [3, 5];
                                                                return [4, u(w + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", "Content-Type": "application/x-www-form-urlencoded" }, body: "action=manga_get_chapters&manga=" + b })];
                                                            case 4:
                                                                _d = (f = _f.sent(), f.ok);
                                                                _f.label = 5;
                                                            case 5:
                                                                if (!_d) return [3, 7];
                                                                return [4, f.html()];
                                                            case 6:
                                                                _c = (_f.sent()).select("li.wp-manga-chapter a");
                                                                return [3, 8];
                                                            case 7:
                                                                _c = c;
                                                                _f.label = 8;
                                                            case 8: return [2, _c];
                                                        }
                                                    }); });
                                                }, toc: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var s, c, l, f, b, k, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0: return [4, h.html(a)];
                                                                case 1:
                                                                    s = _g.sent();
                                                                    return [4, y.chapterEls(s, a)];
                                                                case 2:
                                                                    c = _g.sent(), l = [], f = c.size() - 1;
                                                                    _g.label = 3;
                                                                case 3:
                                                                    if (!(f >= 0)) return [3, 8];
                                                                    return [4, c.get(f)];
                                                                case 4:
                                                                    b = _g.sent(), k = b.attr("href");
                                                                    _b = !k || k === "#";
                                                                    if (_b) return [3, 6];
                                                                    _d = (_c = l).push;
                                                                    _f = {};
                                                                    return [4, b.text()];
                                                                case 5:
                                                                    _b = _d.apply(_c, [(_f.name = (_g.sent()).trim(), _f.url = k, _f.host = w, _f)]);
                                                                    _g.label = 6;
                                                                case 6:
                                                                    _b;
                                                                    _g.label = 7;
                                                                case 7:
                                                                    f--;
                                                                    return [3, 3];
                                                                case 8: return [2, i.success(l)];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, c, l, f, b, k, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                s = a.indexOf("?") > 0 ? a : a.replace(/\/$/, "") + "/?style=list";
                                                                return [4, h.html(s)];
                                                            case 1:
                                                                c = _d.sent(), l = c.select(".reading-content img, .page-break img, .read-container img"), f = [], b = 0;
                                                                _d.label = 2;
                                                            case 2:
                                                                if (!(b < l.size())) return [3, 5];
                                                                _c = (_b = h).img;
                                                                return [4, l.get(b)];
                                                            case 3:
                                                                k = _c.apply(_b, [_d.sent()]);
                                                                k && f.push(k);
                                                                _d.label = 4;
                                                            case 4:
                                                                b++;
                                                                return [3, 2];
                                                            case 5: return [2, i.success(f)];
                                                        }
                                                    }); });
                                                }, text: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, c, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                        switch (_g.label) {
                                                            case 0: return [4, h.html(a)];
                                                            case 1:
                                                                s = _g.sent(), c = s.select(".reading-content .text-left, .reading-content .text-right, .reading-content, .entry-content").first();
                                                                if (!c) return [3, 4];
                                                                _d = (_c = i).success;
                                                                return [4, h.cleanContent(c)];
                                                            case 2:
                                                                _f = [_g.sent()];
                                                                return [4, h.text(s, ["#chapter-heading", ".breadcrumb li.active", "h1"])];
                                                            case 3:
                                                                _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                return [3, 5];
                                                            case 4:
                                                                _b = i.error("Không tìm thấy nội dung chương");
                                                                _g.label = 5;
                                                            case 5: return [2, _b];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof I == "function" ? I : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, search: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, n, i, o, d, p, m, x, E, v, S, N, C, F, j) {
                    return __awaiter(this, void 0, void 0, function () { var U; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                U = t("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function I(a, s) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, y.search(a, s)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var w, h, y; return __generator(this, function (_b) {
                                            w = "https://gaumeoteam.com";
                                            try {
                                                U && (w = String(U).replace(/\/+$/, ""));
                                            }
                                            catch (a) { }
                                            h = { img: function (a) { if (!a)
                                                    return ""; for (var s = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < s.length; c++) {
                                                    var l = a.attr(s[c]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return h.fix(l.trim());
                                                } var f = a.attr("data-srcset") || a.attr("srcset"); return f ? h.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (a) { return a ? (a = String(a).trim(), a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http") === 0 ? a : a.charAt(0) === "/" ? w + a : w + "/" + a) : ""; }, text: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(c < s.length)) return [3, 4];
                                                                return [4, a.select(s[c]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                c++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                s = s || {};
                                                                c = { Referer: w + "/" };
                                                                if (s.headers)
                                                                    for (l in s.headers)
                                                                        c[l] = s.headers[l];
                                                                return [4, u(a, { method: s.method, headers: c, body: s.body })];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [2, f];
                                                        }
                                                    }); });
                                                }, html: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, s)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.html(s && s.charset)];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, json: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, s)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.json()];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, page: function (a) { var s = parseInt(a || "1", 10); return isNaN(s) || s < 1 ? 1 : s; }, next: function (a, s) { return a ? String(h.page(s) + 1) : ""; }, isUrl: function (a) { return /^(https?:)?\/\//.test(a || "") || (a || "").charAt(0) === "/"; }, enc: function (a) { return encodeURIComponent(a || ""); }, cleanContent: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                a.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, a.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (a) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(a || ""); } }, y = { path: function () { return typeof MADARA != "undefined" && MADARA.path || "manga"; }, card: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var s, c, l, _b;
                                                        var _c;
                                                        return __generator(this, function (_d) {
                                                            switch (_d.label) {
                                                                case 0:
                                                                    s = a.select(".post-title a, h3 a, h4 a, .item-summary a").first() || a.select("a").first();
                                                                    if (!s)
                                                                        return [2, null];
                                                                    return [4, s.text()];
                                                                case 1:
                                                                    c = (_d.sent()) || s.attr("title") || a.select("img").attr("alt"), l = a.select(".chapter a, .list-chapter .chapter-item a, .latest-chap a, .my-chapter-name a").first();
                                                                    _c = { name: c, link: s.attr("href"), cover: h.img(a.select("img").first()) };
                                                                    if (!l) return [3, 3];
                                                                    return [4, l.text()];
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
                                                }, list: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, c, l, f, b, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                s = a.select(".c-tabs-item__content, .page-item-detail, .manga-item, .comic-list-item, .comic-block"), c = [], l = {}, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < s.size())) return [3, 5];
                                                                _c = (_b = y).card;
                                                                return [4, s.get(f)];
                                                            case 2: return [4, _c.apply(_b, [_d.sent()])];
                                                            case 3:
                                                                b = _d.sent();
                                                                b && b.link && !l[b.link] && (l[b.link] = 1, c.push(b));
                                                                _d.label = 4;
                                                            case 4:
                                                                f++;
                                                                return [3, 1];
                                                            case 5: return [2, c];
                                                        }
                                                    }); });
                                                }, hasNext: function (a, s) { return a.select(".nav-previous a, a.nextpostslink, .wp-pagenavi a.next, a.next.page-numbers, .pagination a.next, a[rel=next]").size() > 0 || a.select('a[href*="/page/' + (s + 1) + '"]').size() > 0; }, browse: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, b; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = h.page(s), l = w + "/" + y.path() + "/" + (c > 1 ? "page/" + c + "/" : "") + "?m_orderby=" + (a || "latest");
                                                                return [4, h.html(l)];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [4, y.list(f)];
                                                            case 2:
                                                                b = _b.sent();
                                                                return [2, i.success(b, h.next(y.hasNext(f, c) && b.length > 0, s))];
                                                        }
                                                    }); });
                                                }, search: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, b; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!h.isUrl(a)) return [3, 2];
                                                                return [4, y.byUrl(a, s)];
                                                            case 1: return [2, _b.sent()];
                                                            case 2:
                                                                c = h.page(s), l = w + "/" + (c > 1 ? "page/" + c + "/" : "") + "?s=" + h.enc(a) + "&post_type=wp-manga";
                                                                return [4, h.html(l)];
                                                            case 3:
                                                                f = _b.sent();
                                                                return [4, y.list(f)];
                                                            case 4:
                                                                b = _b.sent();
                                                                return [2, i.success(b, h.next(y.hasNext(f, c) && b.length > 0, s))];
                                                        }
                                                    }); });
                                                }, byUrl: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, b; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = h.page(s), l = h.fix(a).replace(/\/$/, "") + "/" + (c > 1 ? "page/" + c + "/" : "");
                                                                return [4, h.html(l)];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [4, y.list(f)];
                                                            case 2:
                                                                b = _b.sent();
                                                                return [2, i.success(b, h.next(y.hasNext(f, c) && b.length > 0, s))];
                                                        }
                                                    }); });
                                                }, detail: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var s, c, l, f, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0: return [4, h.html(a)];
                                                                case 1:
                                                                    s = _g.sent();
                                                                    return [4, kt(s.select(".genres-content a, .wp-manga-genres a, .manga-genres a"), function (b) {
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
                                                                    return [4, h.text(s, [".post-status .summary-content", ".manga-status", ".post-content_item:contains(Tình trạng) .summary-content", ".post-content_item:contains(Status) .summary-content"])];
                                                                case 3:
                                                                    l = _g.sent(), f = s.select(".description-summary .summary__content, .summary__content, .manga-excerpt, .description-summary, .manga-summary").first();
                                                                    _c = (_b = i).success;
                                                                    _f = {};
                                                                    return [4, h.text(s, [".post-title h1", ".post-title h3", "h1"])];
                                                                case 4:
                                                                    _f.name = _g.sent(), _f.cover = h.img(s.select(".summary_image img, .tab-summary img").first());
                                                                    return [4, h.text(s, [".author-content a", ".author-content", ".artist-content a"])];
                                                                case 5:
                                                                    _f.author = _g.sent();
                                                                    if (!f) return [3, 7];
                                                                    return [4, f.html()];
                                                                case 6:
                                                                    _d = _g.sent();
                                                                    return [3, 8];
                                                                case 7:
                                                                    _d = "";
                                                                    _g.label = 8;
                                                                case 8: return [2, _c.apply(_b, [(_f.description = _d, _f.detail = l ? "Tình trạng: " + l : "", _f.ongoing = h.ongoing(l), _f.genres = c, _f.host = w, _f)])];
                                                            }
                                                        });
                                                    });
                                                }, chapterEls: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, _b, b, _c, _d; return __generator(this, function (_f) {
                                                        switch (_f.label) {
                                                            case 0:
                                                                c = a.select("li.wp-manga-chapter a, .listing-chapters_wrap li a, .version-chap li a");
                                                                if (c.size() > 0)
                                                                    return [2, c];
                                                                l = s.replace(/\/$/, "") + "/";
                                                                return [4, u(l + "ajax/chapters/", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", Referer: l } })];
                                                            case 1:
                                                                f = _f.sent();
                                                                _b = f.ok;
                                                                if (!_b) return [3, 3];
                                                                return [4, f.html()];
                                                            case 2:
                                                                _b = (c = (_f.sent()).select("li.wp-manga-chapter a"), c.size() > 0);
                                                                _f.label = 3;
                                                            case 3:
                                                                if (_b)
                                                                    return [2, c];
                                                                b = a.select("#manga-chapters-holder").attr("data-id") || a.select(".rating-post-id").attr("value") || a.select("input.rating-post-id").attr("value");
                                                                _d = b;
                                                                if (!_d) return [3, 5];
                                                                return [4, u(w + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", "Content-Type": "application/x-www-form-urlencoded" }, body: "action=manga_get_chapters&manga=" + b })];
                                                            case 4:
                                                                _d = (f = _f.sent(), f.ok);
                                                                _f.label = 5;
                                                            case 5:
                                                                if (!_d) return [3, 7];
                                                                return [4, f.html()];
                                                            case 6:
                                                                _c = (_f.sent()).select("li.wp-manga-chapter a");
                                                                return [3, 8];
                                                            case 7:
                                                                _c = c;
                                                                _f.label = 8;
                                                            case 8: return [2, _c];
                                                        }
                                                    }); });
                                                }, toc: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var s, c, l, f, b, k, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0: return [4, h.html(a)];
                                                                case 1:
                                                                    s = _g.sent();
                                                                    return [4, y.chapterEls(s, a)];
                                                                case 2:
                                                                    c = _g.sent(), l = [], f = c.size() - 1;
                                                                    _g.label = 3;
                                                                case 3:
                                                                    if (!(f >= 0)) return [3, 8];
                                                                    return [4, c.get(f)];
                                                                case 4:
                                                                    b = _g.sent(), k = b.attr("href");
                                                                    _b = !k || k === "#";
                                                                    if (_b) return [3, 6];
                                                                    _d = (_c = l).push;
                                                                    _f = {};
                                                                    return [4, b.text()];
                                                                case 5:
                                                                    _b = _d.apply(_c, [(_f.name = (_g.sent()).trim(), _f.url = k, _f.host = w, _f)]);
                                                                    _g.label = 6;
                                                                case 6:
                                                                    _b;
                                                                    _g.label = 7;
                                                                case 7:
                                                                    f--;
                                                                    return [3, 3];
                                                                case 8: return [2, i.success(l)];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, c, l, f, b, k, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                s = a.indexOf("?") > 0 ? a : a.replace(/\/$/, "") + "/?style=list";
                                                                return [4, h.html(s)];
                                                            case 1:
                                                                c = _d.sent(), l = c.select(".reading-content img, .page-break img, .read-container img"), f = [], b = 0;
                                                                _d.label = 2;
                                                            case 2:
                                                                if (!(b < l.size())) return [3, 5];
                                                                _c = (_b = h).img;
                                                                return [4, l.get(b)];
                                                            case 3:
                                                                k = _c.apply(_b, [_d.sent()]);
                                                                k && f.push(k);
                                                                _d.label = 4;
                                                            case 4:
                                                                b++;
                                                                return [3, 2];
                                                            case 5: return [2, i.success(f)];
                                                        }
                                                    }); });
                                                }, text: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, c, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                        switch (_g.label) {
                                                            case 0: return [4, h.html(a)];
                                                            case 1:
                                                                s = _g.sent(), c = s.select(".reading-content .text-left, .reading-content .text-right, .reading-content, .entry-content").first();
                                                                if (!c) return [3, 4];
                                                                _d = (_c = i).success;
                                                                return [4, h.cleanContent(c)];
                                                            case 2:
                                                                _f = [_g.sent()];
                                                                return [4, h.text(s, ["#chapter-heading", ".breadcrumb li.active", "h1"])];
                                                            case 3:
                                                                _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                return [3, 5];
                                                            case 4:
                                                                _b = i.error("Không tìm thấy nội dung chương");
                                                                _g.label = 5;
                                                            case 5: return [2, _b];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof I == "function" ? I : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, detail: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, n, i, o, d, p, m, x, E, v, S, N, C, F, j) {
                    return __awaiter(this, void 0, void 0, function () { var U; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                U = t("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function I(a) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, y.detail(a)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var w, h, y; return __generator(this, function (_b) {
                                            w = "https://gaumeoteam.com";
                                            try {
                                                U && (w = String(U).replace(/\/+$/, ""));
                                            }
                                            catch (a) { }
                                            h = { img: function (a) { if (!a)
                                                    return ""; for (var s = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < s.length; c++) {
                                                    var l = a.attr(s[c]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return h.fix(l.trim());
                                                } var f = a.attr("data-srcset") || a.attr("srcset"); return f ? h.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (a) { return a ? (a = String(a).trim(), a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http") === 0 ? a : a.charAt(0) === "/" ? w + a : w + "/" + a) : ""; }, text: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(c < s.length)) return [3, 4];
                                                                return [4, a.select(s[c]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                c++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                s = s || {};
                                                                c = { Referer: w + "/" };
                                                                if (s.headers)
                                                                    for (l in s.headers)
                                                                        c[l] = s.headers[l];
                                                                return [4, u(a, { method: s.method, headers: c, body: s.body })];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [2, f];
                                                        }
                                                    }); });
                                                }, html: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, s)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.html(s && s.charset)];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, json: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, s)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.json()];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, page: function (a) { var s = parseInt(a || "1", 10); return isNaN(s) || s < 1 ? 1 : s; }, next: function (a, s) { return a ? String(h.page(s) + 1) : ""; }, isUrl: function (a) { return /^(https?:)?\/\//.test(a || "") || (a || "").charAt(0) === "/"; }, enc: function (a) { return encodeURIComponent(a || ""); }, cleanContent: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                a.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, a.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (a) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(a || ""); } }, y = { path: function () { return typeof MADARA != "undefined" && MADARA.path || "manga"; }, card: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var s, c, l, _b;
                                                        var _c;
                                                        return __generator(this, function (_d) {
                                                            switch (_d.label) {
                                                                case 0:
                                                                    s = a.select(".post-title a, h3 a, h4 a, .item-summary a").first() || a.select("a").first();
                                                                    if (!s)
                                                                        return [2, null];
                                                                    return [4, s.text()];
                                                                case 1:
                                                                    c = (_d.sent()) || s.attr("title") || a.select("img").attr("alt"), l = a.select(".chapter a, .list-chapter .chapter-item a, .latest-chap a, .my-chapter-name a").first();
                                                                    _c = { name: c, link: s.attr("href"), cover: h.img(a.select("img").first()) };
                                                                    if (!l) return [3, 3];
                                                                    return [4, l.text()];
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
                                                }, list: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, c, l, f, b, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                s = a.select(".c-tabs-item__content, .page-item-detail, .manga-item, .comic-list-item, .comic-block"), c = [], l = {}, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < s.size())) return [3, 5];
                                                                _c = (_b = y).card;
                                                                return [4, s.get(f)];
                                                            case 2: return [4, _c.apply(_b, [_d.sent()])];
                                                            case 3:
                                                                b = _d.sent();
                                                                b && b.link && !l[b.link] && (l[b.link] = 1, c.push(b));
                                                                _d.label = 4;
                                                            case 4:
                                                                f++;
                                                                return [3, 1];
                                                            case 5: return [2, c];
                                                        }
                                                    }); });
                                                }, hasNext: function (a, s) { return a.select(".nav-previous a, a.nextpostslink, .wp-pagenavi a.next, a.next.page-numbers, .pagination a.next, a[rel=next]").size() > 0 || a.select('a[href*="/page/' + (s + 1) + '"]').size() > 0; }, browse: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, b; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = h.page(s), l = w + "/" + y.path() + "/" + (c > 1 ? "page/" + c + "/" : "") + "?m_orderby=" + (a || "latest");
                                                                return [4, h.html(l)];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [4, y.list(f)];
                                                            case 2:
                                                                b = _b.sent();
                                                                return [2, i.success(b, h.next(y.hasNext(f, c) && b.length > 0, s))];
                                                        }
                                                    }); });
                                                }, search: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, b; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!h.isUrl(a)) return [3, 2];
                                                                return [4, y.byUrl(a, s)];
                                                            case 1: return [2, _b.sent()];
                                                            case 2:
                                                                c = h.page(s), l = w + "/" + (c > 1 ? "page/" + c + "/" : "") + "?s=" + h.enc(a) + "&post_type=wp-manga";
                                                                return [4, h.html(l)];
                                                            case 3:
                                                                f = _b.sent();
                                                                return [4, y.list(f)];
                                                            case 4:
                                                                b = _b.sent();
                                                                return [2, i.success(b, h.next(y.hasNext(f, c) && b.length > 0, s))];
                                                        }
                                                    }); });
                                                }, byUrl: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, b; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = h.page(s), l = h.fix(a).replace(/\/$/, "") + "/" + (c > 1 ? "page/" + c + "/" : "");
                                                                return [4, h.html(l)];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [4, y.list(f)];
                                                            case 2:
                                                                b = _b.sent();
                                                                return [2, i.success(b, h.next(y.hasNext(f, c) && b.length > 0, s))];
                                                        }
                                                    }); });
                                                }, detail: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var s, c, l, f, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0: return [4, h.html(a)];
                                                                case 1:
                                                                    s = _g.sent();
                                                                    return [4, kt(s.select(".genres-content a, .wp-manga-genres a, .manga-genres a"), function (b) {
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
                                                                    return [4, h.text(s, [".post-status .summary-content", ".manga-status", ".post-content_item:contains(Tình trạng) .summary-content", ".post-content_item:contains(Status) .summary-content"])];
                                                                case 3:
                                                                    l = _g.sent(), f = s.select(".description-summary .summary__content, .summary__content, .manga-excerpt, .description-summary, .manga-summary").first();
                                                                    _c = (_b = i).success;
                                                                    _f = {};
                                                                    return [4, h.text(s, [".post-title h1", ".post-title h3", "h1"])];
                                                                case 4:
                                                                    _f.name = _g.sent(), _f.cover = h.img(s.select(".summary_image img, .tab-summary img").first());
                                                                    return [4, h.text(s, [".author-content a", ".author-content", ".artist-content a"])];
                                                                case 5:
                                                                    _f.author = _g.sent();
                                                                    if (!f) return [3, 7];
                                                                    return [4, f.html()];
                                                                case 6:
                                                                    _d = _g.sent();
                                                                    return [3, 8];
                                                                case 7:
                                                                    _d = "";
                                                                    _g.label = 8;
                                                                case 8: return [2, _c.apply(_b, [(_f.description = _d, _f.detail = l ? "Tình trạng: " + l : "", _f.ongoing = h.ongoing(l), _f.genres = c, _f.host = w, _f)])];
                                                            }
                                                        });
                                                    });
                                                }, chapterEls: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, _b, b, _c, _d; return __generator(this, function (_f) {
                                                        switch (_f.label) {
                                                            case 0:
                                                                c = a.select("li.wp-manga-chapter a, .listing-chapters_wrap li a, .version-chap li a");
                                                                if (c.size() > 0)
                                                                    return [2, c];
                                                                l = s.replace(/\/$/, "") + "/";
                                                                return [4, u(l + "ajax/chapters/", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", Referer: l } })];
                                                            case 1:
                                                                f = _f.sent();
                                                                _b = f.ok;
                                                                if (!_b) return [3, 3];
                                                                return [4, f.html()];
                                                            case 2:
                                                                _b = (c = (_f.sent()).select("li.wp-manga-chapter a"), c.size() > 0);
                                                                _f.label = 3;
                                                            case 3:
                                                                if (_b)
                                                                    return [2, c];
                                                                b = a.select("#manga-chapters-holder").attr("data-id") || a.select(".rating-post-id").attr("value") || a.select("input.rating-post-id").attr("value");
                                                                _d = b;
                                                                if (!_d) return [3, 5];
                                                                return [4, u(w + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", "Content-Type": "application/x-www-form-urlencoded" }, body: "action=manga_get_chapters&manga=" + b })];
                                                            case 4:
                                                                _d = (f = _f.sent(), f.ok);
                                                                _f.label = 5;
                                                            case 5:
                                                                if (!_d) return [3, 7];
                                                                return [4, f.html()];
                                                            case 6:
                                                                _c = (_f.sent()).select("li.wp-manga-chapter a");
                                                                return [3, 8];
                                                            case 7:
                                                                _c = c;
                                                                _f.label = 8;
                                                            case 8: return [2, _c];
                                                        }
                                                    }); });
                                                }, toc: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var s, c, l, f, b, k, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0: return [4, h.html(a)];
                                                                case 1:
                                                                    s = _g.sent();
                                                                    return [4, y.chapterEls(s, a)];
                                                                case 2:
                                                                    c = _g.sent(), l = [], f = c.size() - 1;
                                                                    _g.label = 3;
                                                                case 3:
                                                                    if (!(f >= 0)) return [3, 8];
                                                                    return [4, c.get(f)];
                                                                case 4:
                                                                    b = _g.sent(), k = b.attr("href");
                                                                    _b = !k || k === "#";
                                                                    if (_b) return [3, 6];
                                                                    _d = (_c = l).push;
                                                                    _f = {};
                                                                    return [4, b.text()];
                                                                case 5:
                                                                    _b = _d.apply(_c, [(_f.name = (_g.sent()).trim(), _f.url = k, _f.host = w, _f)]);
                                                                    _g.label = 6;
                                                                case 6:
                                                                    _b;
                                                                    _g.label = 7;
                                                                case 7:
                                                                    f--;
                                                                    return [3, 3];
                                                                case 8: return [2, i.success(l)];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, c, l, f, b, k, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                s = a.indexOf("?") > 0 ? a : a.replace(/\/$/, "") + "/?style=list";
                                                                return [4, h.html(s)];
                                                            case 1:
                                                                c = _d.sent(), l = c.select(".reading-content img, .page-break img, .read-container img"), f = [], b = 0;
                                                                _d.label = 2;
                                                            case 2:
                                                                if (!(b < l.size())) return [3, 5];
                                                                _c = (_b = h).img;
                                                                return [4, l.get(b)];
                                                            case 3:
                                                                k = _c.apply(_b, [_d.sent()]);
                                                                k && f.push(k);
                                                                _d.label = 4;
                                                            case 4:
                                                                b++;
                                                                return [3, 2];
                                                            case 5: return [2, i.success(f)];
                                                        }
                                                    }); });
                                                }, text: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, c, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                        switch (_g.label) {
                                                            case 0: return [4, h.html(a)];
                                                            case 1:
                                                                s = _g.sent(), c = s.select(".reading-content .text-left, .reading-content .text-right, .reading-content, .entry-content").first();
                                                                if (!c) return [3, 4];
                                                                _d = (_c = i).success;
                                                                return [4, h.cleanContent(c)];
                                                            case 2:
                                                                _f = [_g.sent()];
                                                                return [4, h.text(s, ["#chapter-heading", ".breadcrumb li.active", "h1"])];
                                                            case 3:
                                                                _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                return [3, 5];
                                                            case 4:
                                                                _b = i.error("Không tìm thấy nội dung chương");
                                                                _g.label = 5;
                                                            case 5: return [2, _b];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof I == "function" ? I : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, toc: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, n, i, o, d, p, m, x, E, v, S, N, C, F, j) {
                    return __awaiter(this, void 0, void 0, function () { var U; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                U = t("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function I(a) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, y.toc(a)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var w, h, y; return __generator(this, function (_b) {
                                            w = "https://gaumeoteam.com";
                                            try {
                                                U && (w = String(U).replace(/\/+$/, ""));
                                            }
                                            catch (a) { }
                                            h = { img: function (a) { if (!a)
                                                    return ""; for (var s = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < s.length; c++) {
                                                    var l = a.attr(s[c]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return h.fix(l.trim());
                                                } var f = a.attr("data-srcset") || a.attr("srcset"); return f ? h.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (a) { return a ? (a = String(a).trim(), a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http") === 0 ? a : a.charAt(0) === "/" ? w + a : w + "/" + a) : ""; }, text: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(c < s.length)) return [3, 4];
                                                                return [4, a.select(s[c]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                c++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                s = s || {};
                                                                c = { Referer: w + "/" };
                                                                if (s.headers)
                                                                    for (l in s.headers)
                                                                        c[l] = s.headers[l];
                                                                return [4, u(a, { method: s.method, headers: c, body: s.body })];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [2, f];
                                                        }
                                                    }); });
                                                }, html: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, s)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.html(s && s.charset)];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, json: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, s)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.json()];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, page: function (a) { var s = parseInt(a || "1", 10); return isNaN(s) || s < 1 ? 1 : s; }, next: function (a, s) { return a ? String(h.page(s) + 1) : ""; }, isUrl: function (a) { return /^(https?:)?\/\//.test(a || "") || (a || "").charAt(0) === "/"; }, enc: function (a) { return encodeURIComponent(a || ""); }, cleanContent: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                a.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, a.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (a) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(a || ""); } }, y = { path: function () { return typeof MADARA != "undefined" && MADARA.path || "manga"; }, card: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var s, c, l, _b;
                                                        var _c;
                                                        return __generator(this, function (_d) {
                                                            switch (_d.label) {
                                                                case 0:
                                                                    s = a.select(".post-title a, h3 a, h4 a, .item-summary a").first() || a.select("a").first();
                                                                    if (!s)
                                                                        return [2, null];
                                                                    return [4, s.text()];
                                                                case 1:
                                                                    c = (_d.sent()) || s.attr("title") || a.select("img").attr("alt"), l = a.select(".chapter a, .list-chapter .chapter-item a, .latest-chap a, .my-chapter-name a").first();
                                                                    _c = { name: c, link: s.attr("href"), cover: h.img(a.select("img").first()) };
                                                                    if (!l) return [3, 3];
                                                                    return [4, l.text()];
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
                                                }, list: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, c, l, f, b, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                s = a.select(".c-tabs-item__content, .page-item-detail, .manga-item, .comic-list-item, .comic-block"), c = [], l = {}, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < s.size())) return [3, 5];
                                                                _c = (_b = y).card;
                                                                return [4, s.get(f)];
                                                            case 2: return [4, _c.apply(_b, [_d.sent()])];
                                                            case 3:
                                                                b = _d.sent();
                                                                b && b.link && !l[b.link] && (l[b.link] = 1, c.push(b));
                                                                _d.label = 4;
                                                            case 4:
                                                                f++;
                                                                return [3, 1];
                                                            case 5: return [2, c];
                                                        }
                                                    }); });
                                                }, hasNext: function (a, s) { return a.select(".nav-previous a, a.nextpostslink, .wp-pagenavi a.next, a.next.page-numbers, .pagination a.next, a[rel=next]").size() > 0 || a.select('a[href*="/page/' + (s + 1) + '"]').size() > 0; }, browse: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, b; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = h.page(s), l = w + "/" + y.path() + "/" + (c > 1 ? "page/" + c + "/" : "") + "?m_orderby=" + (a || "latest");
                                                                return [4, h.html(l)];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [4, y.list(f)];
                                                            case 2:
                                                                b = _b.sent();
                                                                return [2, i.success(b, h.next(y.hasNext(f, c) && b.length > 0, s))];
                                                        }
                                                    }); });
                                                }, search: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, b; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!h.isUrl(a)) return [3, 2];
                                                                return [4, y.byUrl(a, s)];
                                                            case 1: return [2, _b.sent()];
                                                            case 2:
                                                                c = h.page(s), l = w + "/" + (c > 1 ? "page/" + c + "/" : "") + "?s=" + h.enc(a) + "&post_type=wp-manga";
                                                                return [4, h.html(l)];
                                                            case 3:
                                                                f = _b.sent();
                                                                return [4, y.list(f)];
                                                            case 4:
                                                                b = _b.sent();
                                                                return [2, i.success(b, h.next(y.hasNext(f, c) && b.length > 0, s))];
                                                        }
                                                    }); });
                                                }, byUrl: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, b; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = h.page(s), l = h.fix(a).replace(/\/$/, "") + "/" + (c > 1 ? "page/" + c + "/" : "");
                                                                return [4, h.html(l)];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [4, y.list(f)];
                                                            case 2:
                                                                b = _b.sent();
                                                                return [2, i.success(b, h.next(y.hasNext(f, c) && b.length > 0, s))];
                                                        }
                                                    }); });
                                                }, detail: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var s, c, l, f, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0: return [4, h.html(a)];
                                                                case 1:
                                                                    s = _g.sent();
                                                                    return [4, kt(s.select(".genres-content a, .wp-manga-genres a, .manga-genres a"), function (b) {
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
                                                                    return [4, h.text(s, [".post-status .summary-content", ".manga-status", ".post-content_item:contains(Tình trạng) .summary-content", ".post-content_item:contains(Status) .summary-content"])];
                                                                case 3:
                                                                    l = _g.sent(), f = s.select(".description-summary .summary__content, .summary__content, .manga-excerpt, .description-summary, .manga-summary").first();
                                                                    _c = (_b = i).success;
                                                                    _f = {};
                                                                    return [4, h.text(s, [".post-title h1", ".post-title h3", "h1"])];
                                                                case 4:
                                                                    _f.name = _g.sent(), _f.cover = h.img(s.select(".summary_image img, .tab-summary img").first());
                                                                    return [4, h.text(s, [".author-content a", ".author-content", ".artist-content a"])];
                                                                case 5:
                                                                    _f.author = _g.sent();
                                                                    if (!f) return [3, 7];
                                                                    return [4, f.html()];
                                                                case 6:
                                                                    _d = _g.sent();
                                                                    return [3, 8];
                                                                case 7:
                                                                    _d = "";
                                                                    _g.label = 8;
                                                                case 8: return [2, _c.apply(_b, [(_f.description = _d, _f.detail = l ? "Tình trạng: " + l : "", _f.ongoing = h.ongoing(l), _f.genres = c, _f.host = w, _f)])];
                                                            }
                                                        });
                                                    });
                                                }, chapterEls: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, _b, b, _c, _d; return __generator(this, function (_f) {
                                                        switch (_f.label) {
                                                            case 0:
                                                                c = a.select("li.wp-manga-chapter a, .listing-chapters_wrap li a, .version-chap li a");
                                                                if (c.size() > 0)
                                                                    return [2, c];
                                                                l = s.replace(/\/$/, "") + "/";
                                                                return [4, u(l + "ajax/chapters/", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", Referer: l } })];
                                                            case 1:
                                                                f = _f.sent();
                                                                _b = f.ok;
                                                                if (!_b) return [3, 3];
                                                                return [4, f.html()];
                                                            case 2:
                                                                _b = (c = (_f.sent()).select("li.wp-manga-chapter a"), c.size() > 0);
                                                                _f.label = 3;
                                                            case 3:
                                                                if (_b)
                                                                    return [2, c];
                                                                b = a.select("#manga-chapters-holder").attr("data-id") || a.select(".rating-post-id").attr("value") || a.select("input.rating-post-id").attr("value");
                                                                _d = b;
                                                                if (!_d) return [3, 5];
                                                                return [4, u(w + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", "Content-Type": "application/x-www-form-urlencoded" }, body: "action=manga_get_chapters&manga=" + b })];
                                                            case 4:
                                                                _d = (f = _f.sent(), f.ok);
                                                                _f.label = 5;
                                                            case 5:
                                                                if (!_d) return [3, 7];
                                                                return [4, f.html()];
                                                            case 6:
                                                                _c = (_f.sent()).select("li.wp-manga-chapter a");
                                                                return [3, 8];
                                                            case 7:
                                                                _c = c;
                                                                _f.label = 8;
                                                            case 8: return [2, _c];
                                                        }
                                                    }); });
                                                }, toc: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var s, c, l, f, b, k, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0: return [4, h.html(a)];
                                                                case 1:
                                                                    s = _g.sent();
                                                                    return [4, y.chapterEls(s, a)];
                                                                case 2:
                                                                    c = _g.sent(), l = [], f = c.size() - 1;
                                                                    _g.label = 3;
                                                                case 3:
                                                                    if (!(f >= 0)) return [3, 8];
                                                                    return [4, c.get(f)];
                                                                case 4:
                                                                    b = _g.sent(), k = b.attr("href");
                                                                    _b = !k || k === "#";
                                                                    if (_b) return [3, 6];
                                                                    _d = (_c = l).push;
                                                                    _f = {};
                                                                    return [4, b.text()];
                                                                case 5:
                                                                    _b = _d.apply(_c, [(_f.name = (_g.sent()).trim(), _f.url = k, _f.host = w, _f)]);
                                                                    _g.label = 6;
                                                                case 6:
                                                                    _b;
                                                                    _g.label = 7;
                                                                case 7:
                                                                    f--;
                                                                    return [3, 3];
                                                                case 8: return [2, i.success(l)];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, c, l, f, b, k, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                s = a.indexOf("?") > 0 ? a : a.replace(/\/$/, "") + "/?style=list";
                                                                return [4, h.html(s)];
                                                            case 1:
                                                                c = _d.sent(), l = c.select(".reading-content img, .page-break img, .read-container img"), f = [], b = 0;
                                                                _d.label = 2;
                                                            case 2:
                                                                if (!(b < l.size())) return [3, 5];
                                                                _c = (_b = h).img;
                                                                return [4, l.get(b)];
                                                            case 3:
                                                                k = _c.apply(_b, [_d.sent()]);
                                                                k && f.push(k);
                                                                _d.label = 4;
                                                            case 4:
                                                                b++;
                                                                return [3, 2];
                                                            case 5: return [2, i.success(f)];
                                                        }
                                                    }); });
                                                }, text: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, c, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                        switch (_g.label) {
                                                            case 0: return [4, h.html(a)];
                                                            case 1:
                                                                s = _g.sent(), c = s.select(".reading-content .text-left, .reading-content .text-right, .reading-content, .entry-content").first();
                                                                if (!c) return [3, 4];
                                                                _d = (_c = i).success;
                                                                return [4, h.cleanContent(c)];
                                                            case 2:
                                                                _f = [_g.sent()];
                                                                return [4, h.text(s, ["#chapter-heading", ".breadcrumb li.active", "h1"])];
                                                            case 3:
                                                                _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                return [3, 5];
                                                            case 4:
                                                                _b = i.error("Không tìm thấy nội dung chương");
                                                                _g.label = 5;
                                                            case 5: return [2, _b];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof I == "function" ? I : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, chap: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, n, i, o, d, p, m, x, E, v, S, N, C, F, j) {
                    return __awaiter(this, void 0, void 0, function () { var U; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                U = t("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function I(a) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, y.text(a)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var w, h, y; return __generator(this, function (_b) {
                                            w = "https://gaumeoteam.com";
                                            try {
                                                U && (w = String(U).replace(/\/+$/, ""));
                                            }
                                            catch (a) { }
                                            h = { img: function (a) { if (!a)
                                                    return ""; for (var s = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < s.length; c++) {
                                                    var l = a.attr(s[c]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return h.fix(l.trim());
                                                } var f = a.attr("data-srcset") || a.attr("srcset"); return f ? h.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (a) { return a ? (a = String(a).trim(), a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http") === 0 ? a : a.charAt(0) === "/" ? w + a : w + "/" + a) : ""; }, text: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(c < s.length)) return [3, 4];
                                                                return [4, a.select(s[c]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                c++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                s = s || {};
                                                                c = { Referer: w + "/" };
                                                                if (s.headers)
                                                                    for (l in s.headers)
                                                                        c[l] = s.headers[l];
                                                                return [4, u(a, { method: s.method, headers: c, body: s.body })];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [2, f];
                                                        }
                                                    }); });
                                                }, html: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, s)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.html(s && s.charset)];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, json: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, s)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.json()];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, page: function (a) { var s = parseInt(a || "1", 10); return isNaN(s) || s < 1 ? 1 : s; }, next: function (a, s) { return a ? String(h.page(s) + 1) : ""; }, isUrl: function (a) { return /^(https?:)?\/\//.test(a || "") || (a || "").charAt(0) === "/"; }, enc: function (a) { return encodeURIComponent(a || ""); }, cleanContent: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                a.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, a.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (a) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(a || ""); } }, y = { path: function () { return typeof MADARA != "undefined" && MADARA.path || "manga"; }, card: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var s, c, l, _b;
                                                        var _c;
                                                        return __generator(this, function (_d) {
                                                            switch (_d.label) {
                                                                case 0:
                                                                    s = a.select(".post-title a, h3 a, h4 a, .item-summary a").first() || a.select("a").first();
                                                                    if (!s)
                                                                        return [2, null];
                                                                    return [4, s.text()];
                                                                case 1:
                                                                    c = (_d.sent()) || s.attr("title") || a.select("img").attr("alt"), l = a.select(".chapter a, .list-chapter .chapter-item a, .latest-chap a, .my-chapter-name a").first();
                                                                    _c = { name: c, link: s.attr("href"), cover: h.img(a.select("img").first()) };
                                                                    if (!l) return [3, 3];
                                                                    return [4, l.text()];
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
                                                }, list: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, c, l, f, b, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                s = a.select(".c-tabs-item__content, .page-item-detail, .manga-item, .comic-list-item, .comic-block"), c = [], l = {}, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < s.size())) return [3, 5];
                                                                _c = (_b = y).card;
                                                                return [4, s.get(f)];
                                                            case 2: return [4, _c.apply(_b, [_d.sent()])];
                                                            case 3:
                                                                b = _d.sent();
                                                                b && b.link && !l[b.link] && (l[b.link] = 1, c.push(b));
                                                                _d.label = 4;
                                                            case 4:
                                                                f++;
                                                                return [3, 1];
                                                            case 5: return [2, c];
                                                        }
                                                    }); });
                                                }, hasNext: function (a, s) { return a.select(".nav-previous a, a.nextpostslink, .wp-pagenavi a.next, a.next.page-numbers, .pagination a.next, a[rel=next]").size() > 0 || a.select('a[href*="/page/' + (s + 1) + '"]').size() > 0; }, browse: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, b; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = h.page(s), l = w + "/" + y.path() + "/" + (c > 1 ? "page/" + c + "/" : "") + "?m_orderby=" + (a || "latest");
                                                                return [4, h.html(l)];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [4, y.list(f)];
                                                            case 2:
                                                                b = _b.sent();
                                                                return [2, i.success(b, h.next(y.hasNext(f, c) && b.length > 0, s))];
                                                        }
                                                    }); });
                                                }, search: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, b; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!h.isUrl(a)) return [3, 2];
                                                                return [4, y.byUrl(a, s)];
                                                            case 1: return [2, _b.sent()];
                                                            case 2:
                                                                c = h.page(s), l = w + "/" + (c > 1 ? "page/" + c + "/" : "") + "?s=" + h.enc(a) + "&post_type=wp-manga";
                                                                return [4, h.html(l)];
                                                            case 3:
                                                                f = _b.sent();
                                                                return [4, y.list(f)];
                                                            case 4:
                                                                b = _b.sent();
                                                                return [2, i.success(b, h.next(y.hasNext(f, c) && b.length > 0, s))];
                                                        }
                                                    }); });
                                                }, byUrl: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, b; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = h.page(s), l = h.fix(a).replace(/\/$/, "") + "/" + (c > 1 ? "page/" + c + "/" : "");
                                                                return [4, h.html(l)];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [4, y.list(f)];
                                                            case 2:
                                                                b = _b.sent();
                                                                return [2, i.success(b, h.next(y.hasNext(f, c) && b.length > 0, s))];
                                                        }
                                                    }); });
                                                }, detail: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var s, c, l, f, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0: return [4, h.html(a)];
                                                                case 1:
                                                                    s = _g.sent();
                                                                    return [4, kt(s.select(".genres-content a, .wp-manga-genres a, .manga-genres a"), function (b) {
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
                                                                    return [4, h.text(s, [".post-status .summary-content", ".manga-status", ".post-content_item:contains(Tình trạng) .summary-content", ".post-content_item:contains(Status) .summary-content"])];
                                                                case 3:
                                                                    l = _g.sent(), f = s.select(".description-summary .summary__content, .summary__content, .manga-excerpt, .description-summary, .manga-summary").first();
                                                                    _c = (_b = i).success;
                                                                    _f = {};
                                                                    return [4, h.text(s, [".post-title h1", ".post-title h3", "h1"])];
                                                                case 4:
                                                                    _f.name = _g.sent(), _f.cover = h.img(s.select(".summary_image img, .tab-summary img").first());
                                                                    return [4, h.text(s, [".author-content a", ".author-content", ".artist-content a"])];
                                                                case 5:
                                                                    _f.author = _g.sent();
                                                                    if (!f) return [3, 7];
                                                                    return [4, f.html()];
                                                                case 6:
                                                                    _d = _g.sent();
                                                                    return [3, 8];
                                                                case 7:
                                                                    _d = "";
                                                                    _g.label = 8;
                                                                case 8: return [2, _c.apply(_b, [(_f.description = _d, _f.detail = l ? "Tình trạng: " + l : "", _f.ongoing = h.ongoing(l), _f.genres = c, _f.host = w, _f)])];
                                                            }
                                                        });
                                                    });
                                                }, chapterEls: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, _b, b, _c, _d; return __generator(this, function (_f) {
                                                        switch (_f.label) {
                                                            case 0:
                                                                c = a.select("li.wp-manga-chapter a, .listing-chapters_wrap li a, .version-chap li a");
                                                                if (c.size() > 0)
                                                                    return [2, c];
                                                                l = s.replace(/\/$/, "") + "/";
                                                                return [4, u(l + "ajax/chapters/", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", Referer: l } })];
                                                            case 1:
                                                                f = _f.sent();
                                                                _b = f.ok;
                                                                if (!_b) return [3, 3];
                                                                return [4, f.html()];
                                                            case 2:
                                                                _b = (c = (_f.sent()).select("li.wp-manga-chapter a"), c.size() > 0);
                                                                _f.label = 3;
                                                            case 3:
                                                                if (_b)
                                                                    return [2, c];
                                                                b = a.select("#manga-chapters-holder").attr("data-id") || a.select(".rating-post-id").attr("value") || a.select("input.rating-post-id").attr("value");
                                                                _d = b;
                                                                if (!_d) return [3, 5];
                                                                return [4, u(w + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", "Content-Type": "application/x-www-form-urlencoded" }, body: "action=manga_get_chapters&manga=" + b })];
                                                            case 4:
                                                                _d = (f = _f.sent(), f.ok);
                                                                _f.label = 5;
                                                            case 5:
                                                                if (!_d) return [3, 7];
                                                                return [4, f.html()];
                                                            case 6:
                                                                _c = (_f.sent()).select("li.wp-manga-chapter a");
                                                                return [3, 8];
                                                            case 7:
                                                                _c = c;
                                                                _f.label = 8;
                                                            case 8: return [2, _c];
                                                        }
                                                    }); });
                                                }, toc: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var s, c, l, f, b, k, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0: return [4, h.html(a)];
                                                                case 1:
                                                                    s = _g.sent();
                                                                    return [4, y.chapterEls(s, a)];
                                                                case 2:
                                                                    c = _g.sent(), l = [], f = c.size() - 1;
                                                                    _g.label = 3;
                                                                case 3:
                                                                    if (!(f >= 0)) return [3, 8];
                                                                    return [4, c.get(f)];
                                                                case 4:
                                                                    b = _g.sent(), k = b.attr("href");
                                                                    _b = !k || k === "#";
                                                                    if (_b) return [3, 6];
                                                                    _d = (_c = l).push;
                                                                    _f = {};
                                                                    return [4, b.text()];
                                                                case 5:
                                                                    _b = _d.apply(_c, [(_f.name = (_g.sent()).trim(), _f.url = k, _f.host = w, _f)]);
                                                                    _g.label = 6;
                                                                case 6:
                                                                    _b;
                                                                    _g.label = 7;
                                                                case 7:
                                                                    f--;
                                                                    return [3, 3];
                                                                case 8: return [2, i.success(l)];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, c, l, f, b, k, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                s = a.indexOf("?") > 0 ? a : a.replace(/\/$/, "") + "/?style=list";
                                                                return [4, h.html(s)];
                                                            case 1:
                                                                c = _d.sent(), l = c.select(".reading-content img, .page-break img, .read-container img"), f = [], b = 0;
                                                                _d.label = 2;
                                                            case 2:
                                                                if (!(b < l.size())) return [3, 5];
                                                                _c = (_b = h).img;
                                                                return [4, l.get(b)];
                                                            case 3:
                                                                k = _c.apply(_b, [_d.sent()]);
                                                                k && f.push(k);
                                                                _d.label = 4;
                                                            case 4:
                                                                b++;
                                                                return [3, 2];
                                                            case 5: return [2, i.success(f)];
                                                        }
                                                    }); });
                                                }, text: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, c, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                        switch (_g.label) {
                                                            case 0: return [4, h.html(a)];
                                                            case 1:
                                                                s = _g.sent(), c = s.select(".reading-content .text-left, .reading-content .text-right, .reading-content, .entry-content").first();
                                                                if (!c) return [3, 4];
                                                                _d = (_c = i).success;
                                                                return [4, h.cleanContent(c)];
                                                            case 2:
                                                                _f = [_g.sent()];
                                                                return [4, h.text(s, ["#chapter-heading", ".breadcrumb li.active", "h1"])];
                                                            case 3:
                                                                _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                return [3, 5];
                                                            case 4:
                                                                _b = i.error("Không tìm thấy nội dung chương");
                                                                _g.label = 5;
                                                            case 5: return [2, _b];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof I == "function" ? I : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, browse: function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, n, i, o, d, p, m, x, E, v, S, N, C, F, j) {
                    return __awaiter(this, void 0, void 0, function () { var U; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                U = t("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function I(a, s) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, y.browse(a, s)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var w, h, y; return __generator(this, function (_b) {
                                            w = "https://gaumeoteam.com";
                                            try {
                                                U && (w = String(U).replace(/\/+$/, ""));
                                            }
                                            catch (a) { }
                                            h = { img: function (a) { if (!a)
                                                    return ""; for (var s = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < s.length; c++) {
                                                    var l = a.attr(s[c]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return h.fix(l.trim());
                                                } var f = a.attr("data-srcset") || a.attr("srcset"); return f ? h.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (a) { return a ? (a = String(a).trim(), a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http") === 0 ? a : a.charAt(0) === "/" ? w + a : w + "/" + a) : ""; }, text: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(c < s.length)) return [3, 4];
                                                                return [4, a.select(s[c]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                c++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                s = s || {};
                                                                c = { Referer: w + "/" };
                                                                if (s.headers)
                                                                    for (l in s.headers)
                                                                        c[l] = s.headers[l];
                                                                return [4, u(a, { method: s.method, headers: c, body: s.body })];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [2, f];
                                                        }
                                                    }); });
                                                }, html: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, s)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.html(s && s.charset)];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, json: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, s)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.json()];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, page: function (a) { var s = parseInt(a || "1", 10); return isNaN(s) || s < 1 ? 1 : s; }, next: function (a, s) { return a ? String(h.page(s) + 1) : ""; }, isUrl: function (a) { return /^(https?:)?\/\//.test(a || "") || (a || "").charAt(0) === "/"; }, enc: function (a) { return encodeURIComponent(a || ""); }, cleanContent: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                a.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, a.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (a) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(a || ""); } }, y = { path: function () { return typeof MADARA != "undefined" && MADARA.path || "manga"; }, card: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var s, c, l, _b;
                                                        var _c;
                                                        return __generator(this, function (_d) {
                                                            switch (_d.label) {
                                                                case 0:
                                                                    s = a.select(".post-title a, h3 a, h4 a, .item-summary a").first() || a.select("a").first();
                                                                    if (!s)
                                                                        return [2, null];
                                                                    return [4, s.text()];
                                                                case 1:
                                                                    c = (_d.sent()) || s.attr("title") || a.select("img").attr("alt"), l = a.select(".chapter a, .list-chapter .chapter-item a, .latest-chap a, .my-chapter-name a").first();
                                                                    _c = { name: c, link: s.attr("href"), cover: h.img(a.select("img").first()) };
                                                                    if (!l) return [3, 3];
                                                                    return [4, l.text()];
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
                                                }, list: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, c, l, f, b, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                s = a.select(".c-tabs-item__content, .page-item-detail, .manga-item, .comic-list-item, .comic-block"), c = [], l = {}, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < s.size())) return [3, 5];
                                                                _c = (_b = y).card;
                                                                return [4, s.get(f)];
                                                            case 2: return [4, _c.apply(_b, [_d.sent()])];
                                                            case 3:
                                                                b = _d.sent();
                                                                b && b.link && !l[b.link] && (l[b.link] = 1, c.push(b));
                                                                _d.label = 4;
                                                            case 4:
                                                                f++;
                                                                return [3, 1];
                                                            case 5: return [2, c];
                                                        }
                                                    }); });
                                                }, hasNext: function (a, s) { return a.select(".nav-previous a, a.nextpostslink, .wp-pagenavi a.next, a.next.page-numbers, .pagination a.next, a[rel=next]").size() > 0 || a.select('a[href*="/page/' + (s + 1) + '"]').size() > 0; }, browse: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, b; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = h.page(s), l = w + "/" + y.path() + "/" + (c > 1 ? "page/" + c + "/" : "") + "?m_orderby=" + (a || "latest");
                                                                return [4, h.html(l)];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [4, y.list(f)];
                                                            case 2:
                                                                b = _b.sent();
                                                                return [2, i.success(b, h.next(y.hasNext(f, c) && b.length > 0, s))];
                                                        }
                                                    }); });
                                                }, search: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, b; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!h.isUrl(a)) return [3, 2];
                                                                return [4, y.byUrl(a, s)];
                                                            case 1: return [2, _b.sent()];
                                                            case 2:
                                                                c = h.page(s), l = w + "/" + (c > 1 ? "page/" + c + "/" : "") + "?s=" + h.enc(a) + "&post_type=wp-manga";
                                                                return [4, h.html(l)];
                                                            case 3:
                                                                f = _b.sent();
                                                                return [4, y.list(f)];
                                                            case 4:
                                                                b = _b.sent();
                                                                return [2, i.success(b, h.next(y.hasNext(f, c) && b.length > 0, s))];
                                                        }
                                                    }); });
                                                }, byUrl: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, b; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = h.page(s), l = h.fix(a).replace(/\/$/, "") + "/" + (c > 1 ? "page/" + c + "/" : "");
                                                                return [4, h.html(l)];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [4, y.list(f)];
                                                            case 2:
                                                                b = _b.sent();
                                                                return [2, i.success(b, h.next(y.hasNext(f, c) && b.length > 0, s))];
                                                        }
                                                    }); });
                                                }, detail: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var s, c, l, f, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0: return [4, h.html(a)];
                                                                case 1:
                                                                    s = _g.sent();
                                                                    return [4, kt(s.select(".genres-content a, .wp-manga-genres a, .manga-genres a"), function (b) {
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
                                                                    return [4, h.text(s, [".post-status .summary-content", ".manga-status", ".post-content_item:contains(Tình trạng) .summary-content", ".post-content_item:contains(Status) .summary-content"])];
                                                                case 3:
                                                                    l = _g.sent(), f = s.select(".description-summary .summary__content, .summary__content, .manga-excerpt, .description-summary, .manga-summary").first();
                                                                    _c = (_b = i).success;
                                                                    _f = {};
                                                                    return [4, h.text(s, [".post-title h1", ".post-title h3", "h1"])];
                                                                case 4:
                                                                    _f.name = _g.sent(), _f.cover = h.img(s.select(".summary_image img, .tab-summary img").first());
                                                                    return [4, h.text(s, [".author-content a", ".author-content", ".artist-content a"])];
                                                                case 5:
                                                                    _f.author = _g.sent();
                                                                    if (!f) return [3, 7];
                                                                    return [4, f.html()];
                                                                case 6:
                                                                    _d = _g.sent();
                                                                    return [3, 8];
                                                                case 7:
                                                                    _d = "";
                                                                    _g.label = 8;
                                                                case 8: return [2, _c.apply(_b, [(_f.description = _d, _f.detail = l ? "Tình trạng: " + l : "", _f.ongoing = h.ongoing(l), _f.genres = c, _f.host = w, _f)])];
                                                            }
                                                        });
                                                    });
                                                }, chapterEls: function (a, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, _b, b, _c, _d; return __generator(this, function (_f) {
                                                        switch (_f.label) {
                                                            case 0:
                                                                c = a.select("li.wp-manga-chapter a, .listing-chapters_wrap li a, .version-chap li a");
                                                                if (c.size() > 0)
                                                                    return [2, c];
                                                                l = s.replace(/\/$/, "") + "/";
                                                                return [4, u(l + "ajax/chapters/", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", Referer: l } })];
                                                            case 1:
                                                                f = _f.sent();
                                                                _b = f.ok;
                                                                if (!_b) return [3, 3];
                                                                return [4, f.html()];
                                                            case 2:
                                                                _b = (c = (_f.sent()).select("li.wp-manga-chapter a"), c.size() > 0);
                                                                _f.label = 3;
                                                            case 3:
                                                                if (_b)
                                                                    return [2, c];
                                                                b = a.select("#manga-chapters-holder").attr("data-id") || a.select(".rating-post-id").attr("value") || a.select("input.rating-post-id").attr("value");
                                                                _d = b;
                                                                if (!_d) return [3, 5];
                                                                return [4, u(w + "/wp-admin/admin-ajax.php", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest", "Content-Type": "application/x-www-form-urlencoded" }, body: "action=manga_get_chapters&manga=" + b })];
                                                            case 4:
                                                                _d = (f = _f.sent(), f.ok);
                                                                _f.label = 5;
                                                            case 5:
                                                                if (!_d) return [3, 7];
                                                                return [4, f.html()];
                                                            case 6:
                                                                _c = (_f.sent()).select("li.wp-manga-chapter a");
                                                                return [3, 8];
                                                            case 7:
                                                                _c = c;
                                                                _f.label = 8;
                                                            case 8: return [2, _c];
                                                        }
                                                    }); });
                                                }, toc: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var s, c, l, f, b, k, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0: return [4, h.html(a)];
                                                                case 1:
                                                                    s = _g.sent();
                                                                    return [4, y.chapterEls(s, a)];
                                                                case 2:
                                                                    c = _g.sent(), l = [], f = c.size() - 1;
                                                                    _g.label = 3;
                                                                case 3:
                                                                    if (!(f >= 0)) return [3, 8];
                                                                    return [4, c.get(f)];
                                                                case 4:
                                                                    b = _g.sent(), k = b.attr("href");
                                                                    _b = !k || k === "#";
                                                                    if (_b) return [3, 6];
                                                                    _d = (_c = l).push;
                                                                    _f = {};
                                                                    return [4, b.text()];
                                                                case 5:
                                                                    _b = _d.apply(_c, [(_f.name = (_g.sent()).trim(), _f.url = k, _f.host = w, _f)]);
                                                                    _g.label = 6;
                                                                case 6:
                                                                    _b;
                                                                    _g.label = 7;
                                                                case 7:
                                                                    f--;
                                                                    return [3, 3];
                                                                case 8: return [2, i.success(l)];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, c, l, f, b, k, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                s = a.indexOf("?") > 0 ? a : a.replace(/\/$/, "") + "/?style=list";
                                                                return [4, h.html(s)];
                                                            case 1:
                                                                c = _d.sent(), l = c.select(".reading-content img, .page-break img, .read-container img"), f = [], b = 0;
                                                                _d.label = 2;
                                                            case 2:
                                                                if (!(b < l.size())) return [3, 5];
                                                                _c = (_b = h).img;
                                                                return [4, l.get(b)];
                                                            case 3:
                                                                k = _c.apply(_b, [_d.sent()]);
                                                                k && f.push(k);
                                                                _d.label = 4;
                                                            case 4:
                                                                b++;
                                                                return [3, 2];
                                                            case 5: return [2, i.success(f)];
                                                        }
                                                    }); });
                                                }, text: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, c, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                        switch (_g.label) {
                                                            case 0: return [4, h.html(a)];
                                                            case 1:
                                                                s = _g.sent(), c = s.select(".reading-content .text-left, .reading-content .text-right, .reading-content, .entry-content").first();
                                                                if (!c) return [3, 4];
                                                                _d = (_c = i).success;
                                                                return [4, h.cleanContent(c)];
                                                            case 2:
                                                                _f = [_g.sent()];
                                                                return [4, h.text(s, ["#chapter-heading", ".breadcrumb li.active", "h1"])];
                                                            case 3:
                                                                _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                return [3, 5];
                                                            case 4:
                                                                _b = i.error("Không tìm thấy nội dung chương");
                                                                _g.label = 5;
                                                            case 5: return [2, _b];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof I == "function" ? I : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    } };
function kr(e) { return new xe({ meta: et, scripts: Nr, host: e }); }
var a0 = require("@libs/fetch").fetchApi, zt = null;
try {
    zt = require("@libs/storage");
}
catch (e) {
    zt = null;
}
var mu = {}, ye = zt && zt.storage ? zt.storage : { get: function (e) { return mu[e]; }, set: function (e, t) { mu[e] = t; }, delete: function (e) { delete mu[e]; } }, gu = (function () {
    function class_2() {
        var _this = this;
        this.id = et.lnId, this.name = et.name, this.icon = et.lnIcon, this.site = et.source, this.version = et.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = kr({ name: "LNReader", request: function (t) { return __awaiter(_this, void 0, void 0, function () {
                var u, r, n;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            u = { method: t.method, headers: t.headers };
                            t.body != null && t.method !== "GET" && (u.body = t.body);
                            return [4, a0(t.url, u)];
                        case 1:
                            r = _c.sent(), n = {};
                            try {
                                r.headers.forEach(function (i, o) { n[o] = i; });
                            }
                            catch (i) { }
                            _b = { status: r.status, url: r.url || t.url, headers: n };
                            return [4, r.text()];
                        case 2: return [2, (_b.text = _c.sent(), _b)];
                    }
                });
            }); }, storageGet: function (t) { var u = ye.get("vb_" + t); return u == null ? null : String(u); }, storageSet: function (t, u) { u == null ? ye.delete && ye.delete("vb_" + t) : ye.set("vb_" + t, String(u)); }, config: function (t) { return null; }, log: function (t) { return console.log(t); } });
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
        return __awaiter(this, void 0, void 0, function () { var u, r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.detail(t)];
                case 1:
                    u = _b.sent();
                    return [4, this.engine.chapters(t)];
                case 2:
                    r = _b.sent();
                    return [2, { path: t, name: u.name || "Untitled", cover: u.cover, summary: u.description, author: u.author, status: u.ongoing ? "Ongoing" : "Completed", genres: u.genres.join(","), chapters: r.map(function (n, i) { return ({ name: n.name, path: n.url, chapterNumber: i + 1 }); }) }];
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
    class_2.prototype.resolveUrl = function (t, u) { return /^https?:/i.test(t) ? t : et.source.replace(/\/+$/, "") + "/" + String(t).replace(/^\/+/, ""); };
    return class_2;
}()), n0 = new gu;
